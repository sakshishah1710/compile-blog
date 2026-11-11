---
title: "GitHub Apps can now manage Enterprise Copilot seat assignments via API"
dek: "Enterprise-level apps gain programmatic control over which users and teams get Copilot access, enabling automation of license management."
topic: "General"
tags: ["github", "copilot", "api", "enterprise"]
date: 2026-11-11
sourceName: "GitHub Changelog"
sourceUrl: "https://github.blog/changelog/2026-11-10-github-app-support-for-enterprise-copilot-seat-management"
---
<h2>What changed</h2><p>GitHub has extended its Enterprise Copilot seat management APIs to support GitHub Apps. Previously limited to other authentication methods, these APIs now allow enterprise-level GitHub Apps to programmatically assign and remove Copilot seats for users and enterprise teams.</p><h2>Why this matters for larger organizations</h2><p>For enterprises managing hundreds or thousands of developers, manually assigning Copilot licenses through the web interface doesn't scale. This change enables automated workflows: onboarding scripts can provision Copilot access alongside other developer tools, HR systems can trigger seat assignments, and you can enforce policies that automatically grant or revoke access based on team membership or project assignment.</p><h2>What to do with it</h2><p>If you're managing Copilot seats across an enterprise, consider building or updating GitHub Apps to automate license distribution. The most immediate use case is syncing Copilot access with your existing user provisioning systems—when someone joins a team that needs AI assistance, they get it automatically. This reduces both administrative overhead and the lag time between when developers need Copilot and when they actually get access.</p>