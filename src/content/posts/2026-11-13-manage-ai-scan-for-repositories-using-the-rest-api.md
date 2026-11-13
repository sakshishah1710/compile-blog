---
title: "GitHub adds REST API controls for AI-powered code scanning"
dek: "Organization and repository admins can now programmatically enable or disable AI Scan through the REST API."
topic: "Security"
tags: ["github", "security-scanning", "api", "automation"]
date: 2026-11-13
sourceName: "GitHub Changelog"
sourceUrl: "https://github.blog/changelog/2026-11-13-manage-ai-scan-for-repositories-using-the-rest-api"
---
<h2>What changed</h2><p>GitHub has added REST API endpoints to control AI Scan, the LLM-powered variant scanning feature within GitHub Advanced Security. Previously in public preview with UI-only controls, teams can now toggle AI Scan on or off at both the organization and repository levels programmatically.</p><h2>Why this matters for automation</h2><p>If you're managing security tooling across multiple repositories, API access means you can standardize AI Scan rollout without clicking through settings pages. Organizations testing AI Scan in production can script gradual enablement or coordinate rollouts with existing IaC workflows. It's a controls gap that's now closed.</p><h2>What this doesn't change</h2><p>AI Scan itself remains in public preview with the same feature set—it's not GA, and underlying detection capabilities haven't expanded. This is purely about management interfaces. You still need GitHub Advanced Security licensing, and the AI models analyzing your code are the same as before the API launch.</p><h2>Practical takeaway</h2><p>If you're already using Terraform or configuration-as-code for GitHub org settings, look for updated provider support to include AI Scan toggles. For teams evaluating AI-based security tools, this makes controlled pilot programs significantly easier to orchestrate at scale.</p>