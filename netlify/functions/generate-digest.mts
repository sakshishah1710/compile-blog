import type { Config } from '@netlify/functions';
import { generateArticles } from '../../lib/generateDigest.mjs';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO; // e.g. "yourname/compile-blog"
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'master';

const POSTS_PATH = 'src/content/posts';

function assertConfigured() {
  const missing = [];
  if (!GITHUB_TOKEN) missing.push('GITHUB_TOKEN');
  if (!GITHUB_REPO) missing.push('GITHUB_REPO');
  if (missing.length) {
    throw new Error(
      `Missing required environment variable(s): ${missing.join(', ')}. ` +
      `Set these in Netlify \u2192 Project configuration \u2192 Environment variables.`
    );
  }
}

// Netlify Functions run on an ephemeral, read-only-for-source filesystem
// with no git access - so instead of writing files locally, we read the
// current post list and write new posts straight through GitHub's
// Contents API. Netlify's GitHub integration then picks up that new
// commit and redeploys the site automatically.
async function listExistingPostFilenames(): Promise<Set<string>> {
  const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/${POSTS_PATH}?ref=${GITHUB_BRANCH}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json'
    }
  });

  if (res.status === 404) {
    // Folder doesn't exist in the repo yet - treat as "no posts yet".
    return new Set();
  }
  if (!res.ok) {
    throw new Error(`GitHub list failed: ${res.status} ${await res.text()}`);
  }

  const data = await res.json();
  const names = Array.isArray(data) ? data.map((f: { name: string }) => f.name) : [];
  return new Set(names);
}

async function commitFileToGitHub(filename: string, content: string) {
  const filePath = `${POSTS_PATH}/${filename}`;
  const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/${filePath}`;

  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json'
    },
    body: JSON.stringify({
      message: `Auto: add post ${filename}`,
      content: Buffer.from(content, 'utf-8').toString('base64'),
      branch: GITHUB_BRANCH
    })
  });

  if (!res.ok) {
    throw new Error(`GitHub commit failed for ${filename}: ${res.status} ${await res.text()}`);
  }
}

export default async () => {
  assertConfigured();

  const existingFilenames = await listExistingPostFilenames();

  // Scheduled runs generate 1 post to keep AI Gateway usage predictable.
  const written = await generateArticles({ existingFilenames, maxItems: 1, hoursBack: 24 });

  for (const { filename, markdown } of written) {
    await commitFileToGitHub(filename, markdown);
  }

  return new Response(
    JSON.stringify({ ok: true, newPosts: written.map((w) => w.filename) }),
    { headers: { 'Content-Type': 'application/json' } }
  );
};

// Netlify Scheduled Functions v2 config - also mirrored in netlify.toml
export const config: Config = {
  schedule: '0 */3 * * *' // every 3 hours
};
