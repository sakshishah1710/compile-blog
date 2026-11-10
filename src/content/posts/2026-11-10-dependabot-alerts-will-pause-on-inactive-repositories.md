---
title: "GitHub will pause Dependabot alerts on dormant repositories starting December 2026"
dek: "Inactive repos get a break from security noise, but alerts aren't deleted—just archived until you need them."
topic: "Security"
tags: ["dependabot", "github", "security", "supply-chain"]
date: 2026-11-10
sourceName: "GitHub Changelog"
sourceUrl: "https://github.blog/changelog/2026-11-10-dependabot-alerts-will-pause-on-inactive-repositories"
---
<h2>What's changing</h2><p>Starting December 8, 2026, GitHub will automatically disable Dependabot alerts on repositories that haven't seen activity in the past year. The alerts themselves aren't deleted—they're archived and can be reactivated if you return to the project. This targets the long tail of unmaintained repos cluttering security dashboards.</p><h2>Why this matters (and why it might not)</h2><p>If you're actively maintaining code, nothing changes. But if you manage dozens of archived projects or experimental repos, your security alert count just got quieter. The tradeoff: you won't get new vulnerability notifications on inactive code unless you manually re-enable alerts. For true archival projects with no production users, that's probably fine. For "dormant but still deployed" repos, it's a risk you need to track.</p><h2>What to do</h2><p>Audit your org's repository list before December. Identify repos that are inactive in GitHub but still running somewhere—CI artifacts, deployed containers, internal tooling. For those, either commit a keep-alive change or set a calendar reminder to periodically check alerts manually. For everything else, let the noise filter work as intended.</p>