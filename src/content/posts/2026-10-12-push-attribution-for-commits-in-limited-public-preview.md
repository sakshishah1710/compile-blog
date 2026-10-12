---
title: "GitHub now tracks who pushed commits, not just who authored them"
dek: "A new pusher identity field separates the person who wrote code from the person who deployed it, closing a visibility gap in supply chain security."
topic: "Security"
tags: ["github", "supply-chain", "audit", "git"]
date: 2026-10-12
sourceName: "GitHub Changelog"
sourceUrl: "https://github.blog/changelog/2026-10-12-push-attribution-public-preview"
---
<h2>What changed</h2><p>GitHub is rolling out push attribution in limited public preview. The platform now durably records the authenticated user who pushed each commit and exposes that information in both the UI and API. This pusher identity sits alongside the existing author and committer fields that have always been part of Git's metadata.</p><h2>Why the distinction matters</h2><p>Git's author and committer fields are self-declared and trivial to forge. Anyone can set their Git config to impersonate another developer. Push attribution solves this by capturing the GitHub account that was authenticated at push time—something that can't be spoofed after the fact. This becomes critical in environments where one person writes code and another deploys it, or when investigating potential supply chain compromises.</p><h2>What to do with it</h2><p>If you're building audit tooling or supply chain verification workflows, the pusher field gives you a new data point for correlation. Check whether the pusher matches the author in your repositories. For most solo developers or tightly-coupled teams, the fields will align. Discrepancies may indicate legitimate operational patterns—or something worth investigating. The feature is in limited preview, so access and API details are still rolling out.</p>