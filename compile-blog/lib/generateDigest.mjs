import { fetchLatestItems } from './fetchSources.mjs';
import fs from 'node:fs/promises';
import path from 'node:path';

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = 'claude-sonnet-4-6';

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

  const res = await fetch('https://api.anthropic.com/v1/messages', {
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

function slugify(title) {
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
 * Main entry point: fetch fresh items, pick ones not yet published,
 * generate a full article for each, and write it as a markdown file
 * ready for Astro's content collection to pick up.
 */
export async function runDigestGeneration() {
  if (!ANTHROPIC_API_KEY) {
    throw new Error('ANTHROPIC_API_KEY is not set');
  }

  const items = await fetchLatestItems({ hoursBack: 6 });
  const postsDir = path.join(process.cwd(), 'src', 'content', 'posts');
  await fs.mkdir(postsDir, { recursive: true });

  const existing = new Set(await fs.readdir(postsDir).catch(() => []));
  const written = [];

  // Cap how many articles we generate per run to control API cost.
  const candidates = items.slice(0, 5);

  for (const item of candidates) {
    const slug = slugify(item.title);
    const filename = `${new Date().toISOString().slice(0, 10)}-${slug}.md`;
    if (existing.has(filename)) continue; // already published this item

    try {
      const article = await generateArticle(item);
      const markdown = toMarkdown(article, item);
      await fs.writeFile(path.join(postsDir, filename), markdown, 'utf-8');
      written.push(filename);
      console.log(`Wrote ${filename}`);
    } catch (err) {
      console.warn(`Skipped "${item.title}": ${err.message}`);
    }
  }

  return written;
}

// Allow running directly: `node lib/generateDigest.mjs`
if (import.meta.url === `file://${process.argv[1]}`) {
  runDigestGeneration()
    .then((written) => console.log(`Done. ${written.length} new post(s).`))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
