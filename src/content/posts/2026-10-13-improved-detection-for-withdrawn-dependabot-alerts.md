---
title: "GitHub Dependabot now surfaces withdrawn vulnerability alerts"
dek: "New API fields and webhook events make it easier to track when security alerts are retracted due to false positives or resolved advisories."
topic: "Security"
tags: ["dependabot", "security", "github", "supply-chain"]
date: 2026-10-13
sourceName: "GitHub Changelog"
sourceUrl: "https://github.blog/changelog/2026-10-13-improved-detection-for-withdrawn-dependabot-alerts"
---
<h2>What changed</h2><p>GitHub has added better visibility into Dependabot alerts that get withdrawn after the underlying security advisory is invalidated or corrected. When an advisory turns out to be a false positive or gets resolved, Dependabot automatically withdraws the alert—but tracking these retractions was previously difficult.</p><h2>New detection capabilities</h2><p>The update includes two improvements: new fields in the REST and GraphQL APIs that explicitly mark withdrawn alerts, and dedicated webhook events that fire when an alert is withdrawn. This means automation can now react to retractions the same way it handles new alerts, rather than alerts simply disappearing from active lists.</p><h2>Why it matters for practitioners</h2><p>Security teams often track alert metrics and resolution times. Withdrawn alerts were creating noise in those numbers—resolved alerts that were never real issues in the first place. With explicit withdrawal detection, you can separate false positives from actual fixes in your metrics, and automation can close associated tickets or update dashboards when GitHub confirms an alert was invalid. This is particularly useful for teams managing compliance reporting or SLA tracking around vulnerability response.</p>