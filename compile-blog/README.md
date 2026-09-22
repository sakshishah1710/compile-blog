# Compile. — auto-updating cloud & DevOps blog

Real pipeline, not a mockup. Here's exactly what to do to make it live.

## 1. Push this folder to a new GitHub repo
```
git init
git add .
git commit -m "Initial Compile. setup"
git remote add origin https://github.com/<you>/compile-blog.git
git push -u origin main
```

## 2. Get an Anthropic API key
Create one at https://console.anthropic.com/settings/keys
(This is separate from your claude.ai login — it's a paid API key, billed per use.)

## 3. Create a GitHub personal access token
Settings → Developer settings → Personal access tokens → generate one with
`contents: write` permission on this repo. The scheduled function uses this
to commit new posts automatically.

## 4. Deploy to Netlify
- New site from Git → pick this repo
- Build command: `npm run build`
- Publish directory: `dist`
- Under Site settings → Environment variables, add:
  - `ANTHROPIC_API_KEY` — from step 2
  - `GITHUB_TOKEN` — from step 3
  - `GITHUB_REPO` — e.g. `yourname/compile-blog`
  - `GITHUB_BRANCH` — usually `main`

## 5. That's it
The scheduled function (`netlify/functions/generate-digest.mts`) runs every
3 hours automatically (see `netlify.toml`). Each run:
1. Pulls real items from AWS/Kubernetes/Terraform/GitHub feeds
2. Sends new ones to Claude to write a full article
3. Commits the result to your repo
4. Netlify sees the new commit and redeploys — new post goes live

## Local testing
```
npm install
ANTHROPIC_API_KEY=sk-... npm run generate-digest
npm run dev
```
This writes real markdown files into `src/content/posts/` and starts the
site locally so you can see them without waiting for the schedule.

## Costs to know about
- Netlify: free tier covers this easily (functions + hosting)
- Anthropic API: pay-per-use, a few cents per article generated — capped at
  5 articles per run in `lib/generateDigest.mjs` (`candidates.slice(0, 5)`)
  so a runaway feed can't blow up your bill
- GitHub: free for a public or personal repo

## What's not built yet
- The magazine-style homepage grid from the earlier mockups (this ships a
  simpler version so you can see real content flowing end-to-end first —
  swap in the fuller design once posts are actually generating)
- Video/podcast embeds per post (add an `embedUrl` field to the frontmatter
  schema in `src/content/config.ts` when you're ready for that)
