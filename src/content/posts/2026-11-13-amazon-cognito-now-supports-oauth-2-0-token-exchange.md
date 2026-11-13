---
title: "Amazon Cognito adds OAuth 2.0 token exchange for service-to-service auth"
dek: "RFC 8693 support lets services exchange user tokens for scoped downstream credentials without passing the original token."
topic: "AWS"
tags: ["cognito", "oauth", "security", "authentication"]
date: 2026-11-13
sourceName: "AWS What's New"
sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-token-exchange/"
---
<h2>What changed</h2><p>Amazon Cognito now implements OAuth 2.0 token exchange (RFC 8693). When a service or AI agent acts on behalf of a user, it can exchange the user's token for a new token scoped specifically to a downstream service it needs to call.</p><h2>Why this matters</h2><p>Before this, services calling other services on a user's behalf had to pass along the original user token—giving each downstream service the same broad permissions as the original caller. Token exchange follows the principle of least privilege: each service gets only the access it needs for its specific task. This is especially relevant for AI agents that orchestrate multiple API calls.</p><h2>What to know</h2><p>This is standards-based token exchange, not a proprietary AWS mechanism. If you're building microservices or agent workflows that chain multiple services under a user's authority, you can now scope permissions more granularly at each hop. You'll need to configure token exchange in your Cognito user pool and update services to request exchanged tokens instead of reusing the original.</p>