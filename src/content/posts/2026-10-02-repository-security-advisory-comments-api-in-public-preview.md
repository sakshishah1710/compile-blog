---
title: "GitHub adds REST API for security advisory comments"
dek: "Repository maintainers can now programmatically manage discussion threads on security advisories, including those from private vulnerability reports."
topic: "Security"
tags: ["github", "security", "api", "vulnerability-management"]
date: 2026-10-02
sourceName: "GitHub Changelog"
sourceUrl: "https://github.blog/changelog/2026-10-02-repository-security-advisory-comments-api-in-public-preview"
---
<h2>What changed</h2><p>GitHub released a public preview REST API for reading, adding, and editing comments on repository security advisories. This extends to advisories created from private vulnerability reports, which previously had no programmatic access to their discussion threads.</p><h2>Why it matters</h2><p>Until now, teams managing security advisories had to manually check and respond to comments through the web interface. For organizations handling multiple repositories or coordinating responses across security teams, this creates friction. The API enables automated workflows: trigger notifications in Slack when researchers comment, sync discussions to internal ticketing systems, or template common responses.</p><h2>What to know</h2><p>This is a preview API, meaning the endpoints may change before general availability. The functionality covers the comment lifecycle—read existing threads, post new comments, and update previous ones. If your team regularly coordinates on vulnerability disclosures, this is worth testing in your automation stack now, but be prepared to adjust when the API stabilizes.</p>