---
title: "GitHub Actions drops ARM32 support for Linux and Windows runners"
dek: "Hosted runners will stop executing ARM32 jobs on December 8, 2026, following the end of Node 20 support."
topic: "CI/CD"
tags: ["github-actions", "arm32", "ci-cd", "deprecation"]
date: 2026-11-13
sourceName: "GitHub Changelog"
sourceUrl: "https://github.blog/changelog/2026-11-12-actions-for-arm32-linux-windows-retirement"
---
<h2>What's changing</h2><p>GitHub is retiring ARM32 job execution on Actions-hosted runners for both Linux and Windows platforms. The cutoff date is December 8, 2026. This decision follows GitHub's broader deprecation of Node 20 support, which had been maintaining compatibility with ARM32 architectures.</p><h2>Why this matters (and what it doesn't)</h2><p>If you're running CI/CD pipelines that build or test on ARM32 targets using GitHub's hosted infrastructure, you'll need to plan a migration. However, this only affects GitHub's hosted runners—self-hosted runners can continue supporting ARM32 if you maintain the hardware yourself. The practical impact is narrow: ARM32 is increasingly legacy, with ARM64 dominating modern embedded and edge deployments.</p><h2>Your options</h2><p>Move ARM32 builds to self-hosted runners if you control the hardware, or consider whether you still need ARM32 support at all. Most projects have already transitioned to ARM64 for new deployments. If you're maintaining legacy systems, now's the time to audit which pipelines actually require 32-bit ARM and plan accordingly before the December deadline.</p>