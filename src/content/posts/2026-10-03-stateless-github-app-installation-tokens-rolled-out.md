---
title: "GitHub App installation tokens now stateless by default"
dek: "GitHub has completed its rollout of stateless installation tokens, changing how App authentication is validated across their platform."
topic: "Security"
tags: ["github", "authentication", "api", "tokens"]
date: 2026-10-03
sourceName: "GitHub Changelog"
sourceUrl: "https://github.blog/changelog/2026-10-02-stateless-github-app-installation-tokens-rolled-out"
---
<h2>What Changed</h2><p>GitHub has finished rolling out a new stateless format for GitHub App installation tokens. The change, which started as a staged rollout in April 2026, is now complete. All newly created GitHub App installation tokens now use this stateless format by default.</p><h2>Why Stateless Matters</h2><p>Traditional stateful tokens require GitHub to look up token metadata in a database on every API request. Stateless tokens encode authentication information directly in the token itself, similar to JWTs. This means GitHub can validate tokens without a database hit, reducing latency and improving reliability during high-load scenarios or database issues.</p><h2>What This Doesn't Change</h2><p>Your existing GitHub Apps continue to work. The token format change is transparent to most users—tokens are still obtained the same way through the API, and they still expire after one hour. The validation mechanism changed on GitHub's side, not the integration points.</p><h2>Action Items</h2><p>If you parse or validate GitHub App tokens in your infrastructure (logging systems, proxies, custom auth middleware), verify they handle the new format. Most standard GitHub API clients already handle this transparently. Check GitHub's changelog for format specifications if you have custom token handling logic.</p>