---
title: "GitHub's async merge API exits beta, handles stacked PRs"
dek: "The new GA endpoint lets you merge individual or stacked pull requests, queue merges, or bypass the queue entirely through a single API."
topic: "CI/CD"
tags: ["github", "api", "pull-requests", "automation"]
date: 2026-10-01
sourceName: "GitHub Changelog"
sourceUrl: "https://github.blog/changelog/2026-10-01-github-async-merge-api-generally-available"
---
<h2>What changed</h2><p>GitHub's async merge API is now generally available after its beta period. The API provides a unified interface for three merge operations: merging individual pull requests, merging stacked PRs (dependent chains of pull requests), and adding PRs to a merge queue. You can also bypass the queue and merge directly when needed.</p><h2>Why it matters</h2><p>Before this, automating merge workflows—especially for stacked PRs—required multiple API calls and custom state tracking. The async endpoint consolidates these patterns into one call. This is particularly useful for teams using trunk-based development with stacked changes, or those running merge queues to batch-test changes before they land on main. The async model means your automation doesn't block waiting for CI to finish.</p><h2>What to know</h2><p>This is an API-level change. If you're using GitHub's web UI or existing merge endpoints, nothing changes for you. But if you're building PR automation—bots that merge after approval, scripts that manage dependency chains, or tools that interact with merge queues—you now have a cleaner primitive to work with. Check GitHub's API documentation for the new endpoint schema and authentication requirements.</p>