---
title: "GitHub adds confidential comments to repository security advisories"
dek: "Security advisories now support internal-only comments visible to repository collaborators with write access."
topic: "Security"
tags: ["github", "security", "vulnerability-disclosure", "collaboration"]
date: 2026-10-02
sourceName: "GitHub Changelog"
sourceUrl: "https://github.blog/changelog/2026-10-02-confidential-comments-on-repository-security-advisories"
---
<h2>What changed</h2><p>GitHub has added confidential commenting to repository security advisories. These comments remain visible only to users with write access to the repository, allowing maintainers to discuss vulnerability reports privately before public disclosure.</p><h2>Why this matters</h2><p>Coordinated vulnerability disclosure requires internal discussion that shouldn't be visible to reporters or the public. Previously, teams had to use external channels—Slack, email, or separate issue trackers—to coordinate their response to security reports. This feature keeps the entire workflow inside GitHub's security advisory interface.</p><h2>What it doesn't solve</h2><p>This is for internal team coordination only. Comments visible to the reporter still use the existing non-confidential system. If you need to communicate with external security researchers while keeping some context private, you'll still toggle between comment types or manage that conversation outside GitHub.</p><h2>Practical takeaway</h2><p>If your team handles security advisories through GitHub, you can now keep triage notes, remediation plans, and release coordination discussions in the same place as the advisory itself. No additional setup required—the feature is available now on all repository security advisories.</p>