import { fetchLatestItems } from './fetchSources.mjs';

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
// Netlify's AI Gateway auto-injects both ANTHROPIC_API_KEY and
// ANTHROPIC_BASE_URL when AI is enabled on the site. Falling back to
// the real Anthropic API here just means local `node lib/generateDigest.mjs`
// runs (with your own key, no gateway) still work the same way.
const ANTHROPIC_BASE_URL = process.env.ANTHROPIC_BASE_URL || 'https://api.anthropic.com';
const MODEL = 'claude-sonnet-4-5-20250929';

const SYSTEM_PROMPT = `You are the writer for "Compile.", a daily cloud & DevOps briefing.
Voice: clear, direct, practitioner-to-practitioner. No hype, no filler.
You will be given a real news item (title, source link, and a short summary).
Write a complete article about it, structured like this, in JSON:

{
  "title": "specific, concrete headline - not clickbait",
  "dek": "one sentence expanding on the title",
  "topic": "one of: Kubernetes, AWS, Terraform, CI/CD, Security, General",
  "body_html": "2-4 short sections as HTML, using <h2> subheadings and <p> tags.
                 Structure: what changed, why it matters / what it doesn't do,
                 and a clear practical takeaway. Ground everything in the
                 provided summary - do not invent specifics not implied by it.",
  "tags": ["3-4 lowercase tags"]
}

Return ONLY the JSON object, no markdown fences, no preamble.`;

async function generateArticle(item) {
  const userPrompt = `Source: ${item.source}
Original link: ${item.link}
Title: ${item.title}
Summary: ${item.summary}`;

  const res = await fetch(`${ANTHROPIC_BASE_URL}/v1/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 1200,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userPrompt }]
    })
  });

  if (!res.ok) {
    throw new Error(`Anthropic API error: ${res.status} ${await res.text()}`);
  }

  const data = await res.json();
  const text = data.content.map((b) => b.text || '').join('').trim();
  const cleaned = text.replace(/^```json\s*|\s*```$/g, '');
  return JSON.parse(cleaned);
}

export function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 60);
}

function toMarkdown(article, sourceItem) {
  const date = new Date().toISOString().slice(0, 10);
  const frontmatter = [
    '---',
    `title: "${article.title.replace(/"/g, '\\"')}"`,
    `dek: "${article.dek.replace(/"/g, '\\"')}"`,
    `topic: "${article.topic}"`,
    `tags: [${article.tags.map((t) => `"${t}"`).join(', ')}]`,
    `date: ${date}`,
    `sourceName: "${sourceItem.source}"`,
    `sourceUrl: "${sourceItem.link}"`,
    '---',
    ''
  ].join('\n');

  return frontmatter + article.body_html;
}

/**
 * Fetches fresh items, picks ones not already published (by filename,
 * checked against `existingFilenames`), and generates a full article
 * for each. Returns the results entirely in memory as
 * [{ filename, markdown }] - nothing is written to disk here, so this
 * is safe to call from a read-only environment like a Netlify Function.
 * The caller decides what to do with the result (write locally, commit
 * to GitHub, etc).
 */
export async function generateArticles({ existingFilenames = new Set(), maxItems = 1, hoursBack = 24 } = {}) {
  if (!ANTHROPIC_API_KEY) {
    throw new Error('ANTHROPIC_API_KEY is not set');
  }

  const items = await fetchLatestItems({ hoursBack });
  const dateStr = new Date().toISOString().slice(0, 10);
  const written = [];

  for (const item of items) {
    if (written.length >= maxItems) break;

    const slug = slugify(item.title);
    const filename = `${dateStr}-${slug}.md`;
    if (existingFilenames.has(filename)) continue; // already published this item

    try {
      const article = await generateArticle(item);
      const markdown = toMarkdown(article, item);
      written.push({ filename, markdown });
      console.log(`Generated ${filename}`);
    } catch (err) {
      console.warn(`Skipped "${item.title}": ${err.message}`);
    }
  }

  return written;
}

// Allow running directly for local testing: `node lib/generateDigest.mjs`
// Local runs write straight to disk (fine on your own machine) and are
// allowed to generate more posts at once since there's no per-run API
// cost concern the way there is on a recurring schedule.
if (import.meta.url === `file://${process.argv[1]}`) {
  const fs = await import('node:fs/promises');
  const path = await import('node:path');

  const postsDir = path.join(process.cwd(), 'src', 'content', 'posts');
  const existing = new Set(await fs.mkdir(postsDir, { recursive: true }).then(() => fs.readdir(postsDir)).catch(() => []));

  generateArticles({ existingFilenames: existing, maxItems: 5 })
    .then(async (written) => {
      for (const { filename, markdown } of written) {
        await fs.writeFile(path.join(postsDir, filename), markdown, 'utf-8');
      }
      console.log(`Done. ${written.length} new post(s) written to ${postsDir}`);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
