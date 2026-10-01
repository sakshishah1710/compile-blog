---
title: "GitHub code scanning now skips weekly runs on inactive repos"
dek: "Default setup schedules no longer trigger on repositories without recent code activity, reducing noise and compute waste."
topic: "Security"
tags: ["github", "code-scanning", "security", "automation"]
date: 2026-10-01
sourceName: "GitHub Changelog"
sourceUrl: "https://github.blog/changelog/2026-10-01-scheduled-code-scanning-skips-inactive-repositories"
---
<h2>What changed</h2><p>GitHub adjusted how scheduled code scanning works for default setup and Code Quality. Weekly scans now only run after a repository has seen a push or pull request that triggers analysis. Previously, the weekly schedule would run regardless of repository activity.</p><h2>Why it matters (and what it doesn't solve)</h2><p>This targets a specific waste pattern: automated scans consuming resources and generating alerts on codebases that haven't changed in months. If your repository is dormant, you don't need weekly re-analysis of the same code. The change reduces unnecessary compute and alert fatigue for teams managing large repository portfolios.</p><p>This doesn't change on-demand scanning or pull request analysis. Active repositories see no difference in protection. It's purely an optimization for inactive ones.</p><h2>Practical takeaway</h2><p>If you rely on scheduled scans as a forcing function to catch newly-discovered vulnerabilities in old code, you'll want to verify your repositories are still getting scanned. For most teams, this change simply eliminates waste without compromising security posture on repos that actually matter.</p>