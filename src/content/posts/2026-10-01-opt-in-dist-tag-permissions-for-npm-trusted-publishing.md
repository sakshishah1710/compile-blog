---
title: "npm trusted publishing can now manage dist-tags via OIDC"
dek: "GitHub extends npm's OIDC-based publishing to include dist-tag operations, eliminating another category of long-lived tokens."
topic: "CI/CD"
tags: ["npm", "oidc", "supply-chain", "github-actions"]
date: 2026-10-01
sourceName: "GitHub Changelog"
sourceUrl: "https://github.blog/changelog/2026-09-30-opt-in-dist-tag-permissions-for-npm-trusted-publishing"
---
<h2>What changed</h2><p>GitHub has added opt-in support for dist-tag management to npm's trusted publishing system. Previously, trusted publishing—which uses short-lived OIDC credentials from CI instead of long-lived npm tokens—only covered package publishing itself. Now you can also promote versions (moving a release to <code>latest</code>), or update pointers like <code>next</code> and <code>beta</code>, all without storing persistent tokens.</p><h2>Why it matters</h2><p>Dist-tag operations have been a common reason teams still needed legacy tokens in CI. You'd publish with OIDC, then fall back to a token for tagging. That's one more credential to rotate and one more piece of the attack surface. Folding tag management into trusted publishing closes that gap—your entire release workflow can now run on ephemeral credentials bound to specific repositories and workflows.</p><h2>Practical takeaway</h2><p>If you're already using npm trusted publishing, review your CI scripts for any <code>npm dist-tag</code> calls and migrate them to OIDC. If you haven't adopted trusted publishing yet, this is another reason to prioritize it: fewer secrets, narrower blast radius, and one less manual rotation task on your backlog.</p>