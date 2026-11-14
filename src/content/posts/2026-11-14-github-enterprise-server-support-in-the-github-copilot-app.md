---
title: "GitHub Copilot app now connects to Enterprise Server instances"
dek: "The standalone Copilot app can now authenticate against GitHub Enterprise Server for repository access and issue management."
topic: "General"
tags: ["github", "copilot", "enterprise", "developer-tools"]
date: 2026-11-14
sourceName: "GitHub Changelog"
sourceUrl: "https://github.blog/changelog/2026-11-13-github-enterprise-server-support-in-the-github-copilot-app"
---
<h2>What changed</h2><p>GitHub's standalone Copilot application now supports GitHub Enterprise Server (GHES) accounts. Users can add their on-premises or self-hosted GHES credentials directly within the app to access remote repositories, issues, and pull requests from their enterprise environment.</p><h2>Why it matters</h2><p>This closes a gap for organizations running GitHub Enterprise Server who want to use the Copilot app instead of just IDE extensions. Previously, the standalone app only worked with GitHub.com accounts, forcing GHES users to stick with editor plugins. Now teams with air-gapped or compliance-restricted environments can use the same conversational interface for code and repository operations that cloud users have had access to.</p><h2>What to know</h2><p>This is about authentication and data access, not model hosting. The Copilot models still run on GitHub's infrastructure—this change just lets the app pull context from your GHES repositories. If your compliance requirements prohibit sending code context to external services, the IDE extensions with local-only modes remain your better option. For everyone else, this means one less reason to avoid the standalone app.</p>