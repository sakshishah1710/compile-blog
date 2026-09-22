import type { Config } from '@netlify/functions';
import { runDigestGeneration } from '../../lib/generateDigest.mjs';
import fs from 'node:fs/promises';
import path from 'node:path';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO; // e.g. "yourname/compile-blog"
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';

// Netlify functions run in an ephemeral filesystem and don't have
// git access, so we write the file locally (for local runs / testing)
// AND push it straight to GitHub via the Contents API. Netlify's
// build hook then picks up the new commit and redeploys the site.
async function commitFileToGitHub(filename: string, content: string) {
  const filePath = `src/content/posts/${filename}`;
  const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/${filePath}`;

  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json'
    },
    body: JSON.stringify({
      message: `Auto: add post ${filename}`,
      content: Buffer.from(content).toString('base64'),
      branch: GITHUB_BRANCH
    })
  });

  if (!res.ok) {
    throw new Error(`GitHub commit failed for ${filename}: ${res.status} ${await res.text()}`);
  }
}

export default async () => {
  const written = await runDigestGeneration();

  // Push each newly generated file to GitHub so it deploys for real.
  const postsDir = path.join(process.cwd(), 'src', 'content', 'posts');
  for (const filename of written) {
    const content = await fs.readFile(path.join(postsDir, filename), 'utf-8');
    await commitFileToGitHub(filename, content);
  }

  return new Response(
    JSON.stringify({ ok: true, newPosts: written }),
    { headers: { 'Content-Type': 'application/json' } }
  );
};

// Netlify Scheduled Functions v2 config - also mirrored in netlify.toml
export const config: Config = {
  schedule: '0 */3 * * *' // every 3 hours
};
