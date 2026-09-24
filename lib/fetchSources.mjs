import { XMLParser } from 'fast-xml-parser';

// Real, publicly available feeds for cloud/DevOps news.
// Add or remove feeds here as you find better sources.
const FEEDS = [
  { name: 'AWS What\'s New', url: 'https://aws.amazon.com/about-aws/whats-new/recent/feed/', topic: 'AWS' },
  { name: 'Kubernetes Blog', url: 'https://kubernetes.io/feed.xml', topic: 'Kubernetes' },
  { name: 'HashiCorp Blog', url: 'https://www.hashicorp.com/blog/feed.xml', topic: 'Terraform' },
  { name: 'GitHub Changelog', url: 'https://github.blog/changelog/feed/', topic: 'CI/CD' }
];

const parser = new XMLParser({ ignoreAttributes: false });

/**
 * Fetches each feed, parses it, and returns a flat list of
 * { title, link, summary, topic, source, publishedAt } items,
 * newest first, from roughly the last day.
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
        const title = item.title?.['#text'] ?? item.title ?? '';
        const link = item.link?.['@_href'] ?? item.link ?? '';
        const summary = item.description ?? item.summary ?? '';
        const dateStr = item.pubDate ?? item.updated ?? item.published ?? null;
        const publishedAt = dateStr ? new Date(dateStr) : new Date();

        if (publishedAt.getTime() >= cutoff) {
          results.push({
            title: String(title).trim(),
            link: String(link).trim(),
            summary: String(summary).replace(/<[^>]+>/g, '').trim().slice(0, 400),
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
