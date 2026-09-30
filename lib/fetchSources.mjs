import { XMLParser } from 'fast-xml-parser';

// Real, publicly available feeds for cloud/DevOps news.
// Add or remove feeds here as you find better sources.
const FEEDS = [
  { name: 'AWS What\'s New', url: 'https://aws.amazon.com/about-aws/whats-new/recent/feed/', topic: 'AWS' },
  { name: 'Kubernetes Blog', url: 'https://kubernetes.io/feed.xml', topic: 'Kubernetes' },
  { name: 'HashiCorp Blog', url: 'https://www.hashicorp.com/blog/feed.xml', topic: 'Terraform' },
  { name: 'GitHub Changelog', url: 'https://github.blog/changelog/feed/', topic: 'CI/CD' }
];

// processEntities: false stops fast-xml-parser from trying to fully
// resolve/validate every &amp; / &#123; style entity itself, which is
// what was hitting its built-in "Entity expansion limit exceeded"
// safety check on feeds with lots of escaped characters (AWS, K8s).
// We decode the handful of entities we actually care about ourselves,
// below, after parsing.
const parser = new XMLParser({ ignoreAttributes: false, processEntities: false });

function decodeEntities(str) {
  return String(str)
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => {
      try { return String.fromCodePoint(parseInt(hex, 16)); } catch { return ''; }
    })
    .replace(/&#(\d+);/g, (_, num) => {
      try { return String.fromCodePoint(Number(num)); } catch { return ''; }
    })
    .replace(/&amp;/g, '&');
}

// Feed fields can come back as a plain string, an object with a
// "#text" key (CDATA/mixed content), or occasionally a nested object
// with no usable text at all. This normalizes all of those to a safe
// string instead of ever letting "[object Object]" through.
function textOf(value) {
  if (value == null) return '';
  if (typeof value === 'string' || typeof value === 'number') return decodeEntities(String(value));
  if (typeof value === 'object') {
    if ('#text' in value) return decodeEntities(String(value['#text']));
    return '';
  }
  return '';
}

function linkOf(value) {
  // Atom feeds: <link href="..."/> parses to { '@_href': '...' }
  // (possibly an array of link objects for rel="alternate" etc).
  // RSS feeds: <link>https://...</link> parses to a plain string.
  if (Array.isArray(value)) {
    const withHref = value.find((v) => v && typeof v === 'object' && v['@_href']);
    return withHref ? decodeEntities(String(withHref['@_href'])) : '';
  }
  if (value && typeof value === 'object' && '@_href' in value) {
    return decodeEntities(String(value['@_href']));
  }
  return textOf(value);
}

function isValidHttpUrl(str) {
  try {
    const u = new URL(str);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Fetches each feed, parses it, and returns a flat list of
 * { title, link, summary, topic, source, publishedAt } items,
 * newest first, from roughly the last day. Feeds that fail to fetch
 * or parse are skipped (logged as a warning) rather than crashing
 * the whole run.
 */
export async function fetchLatestItems({ hoursBack = 24 } = {}) {
  const cutoff = Date.now() - hoursBack * 60 * 60 * 1000;
  const results = [];

  for (const feed of FEEDS) {
    try {
      const res = await fetch(feed.url, {
        headers: { 'User-Agent': 'compile-blog-fetcher/1.0' }
      });
      if (!res.ok) {
        console.warn(`Skipping ${feed.name}: HTTP ${res.status}`);
        continue;
      }
      const xml = await res.text();
      const parsed = parser.parse(xml);

      // RSS 2.0 items live at rss.channel.item; Atom feeds use feed.entry.
      const items =
        parsed?.rss?.channel?.item ??
        parsed?.feed?.entry ??
        [];
      const list = Array.isArray(items) ? items : [items];

      for (const item of list) {
        if (!item) continue;

        const title = textOf(item.title);
        const link = linkOf(item.link);
        const summaryRaw = textOf(item.description ?? item.summary);
        const dateStr = textOf(item.pubDate ?? item.updated ?? item.published) || null;
        const publishedAt = dateStr ? new Date(dateStr) : new Date();

        if (!title || !isValidHttpUrl(link)) {
          // Skip anything we can't build a usable, safe source link for.
          continue;
        }

        if (publishedAt.getTime() >= cutoff) {
          results.push({
            title: title.trim(),
            link: link.trim(),
            summary: summaryRaw.replace(/<[^>]+>/g, '').trim().slice(0, 400),
            topic: feed.topic,
            source: feed.name,
            publishedAt: publishedAt.toISOString()
          });
        }
      }
    } catch (err) {
      console.warn(`Failed to fetch ${feed.name}:`, err.message);
    }
  }

  results.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  return results;
}
