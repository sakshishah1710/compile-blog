---
title: "Amazon Cognito adds session management controls for user pools"
dek: "New visibility and control over SSO and token sessions lets you monitor and revoke active user sessions across app clients."
topic: "AWS"
tags: ["cognito", "aws", "authentication", "security"]
date: 2026-11-12
sourceName: "AWS What's New"
sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cognito-session-management/"
---
<h2>What changed</h2><p>Amazon Cognito user pools now include built-in session management capabilities. You can now see and manage two types of sessions: SSO sessions created when users sign in through Cognito's managed login (allowing access to multiple app clients without re-authentication), and token sessions created when users sign in to individual app clients.</p><h2>Why it matters</h2><p>Previously, revoking user access required invalidating refresh tokens or deleting users entirely—blunt instruments that didn't address active sessions. This fills a critical gap for security teams who need to terminate sessions immediately when accounts are compromised or employees leave. It's particularly useful for organizations using Cognito's hosted UI with multiple applications, where SSO sessions can span services.</p><h2>What to know</h2><p>This is visibility and control, not a change to how sessions work. Your existing applications continue functioning as before. The feature gives you operational levers you didn't have: you can now audit active sessions and force users to re-authenticate without token gymnastics. If you're building compliance-heavy applications or multi-tenant SaaS, this belongs in your security playbook.</p>