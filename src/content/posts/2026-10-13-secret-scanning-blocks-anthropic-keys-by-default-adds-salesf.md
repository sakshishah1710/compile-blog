---
title: "GitHub Secret Scanning Now Blocks Anthropic API Keys by Default"
dek: "Push protection expands to cover Anthropic credentials alongside new detection for Salesforce and Cloudsmith secrets."
topic: "Security"
tags: ["github", "secrets-management", "anthropic", "push-protection"]
date: 2026-10-13
sourceName: "GitHub Changelog"
sourceUrl: "https://github.blog/changelog/2026-10-13-secret-scanning-blocks-anthropic-keys-by-default-adds-salesforce"
---
<h2>What Changed</h2><p>GitHub has added three new providers to its secret scanning service: Anthropic, Salesforce, and Cloudsmith. Unlike typical additions, Anthropic API keys trigger push protection by default—meaning commits containing these credentials will be blocked before they reach the repository.</p><h2>Why Push Protection for Anthropic</h2><p>The immediate blocking of Anthropic keys reflects the growing importance of protecting LLM API credentials. With Claude API access carrying significant usage costs and potential data exposure risks, GitHub is treating these keys with the same severity as other high-value secrets that have historically triggered automatic blocks. Salesforce and Cloudsmith secrets are detected but follow the standard scanning workflow.</p><h2>What This Means for Teams</h2><p>If you're using Anthropic's API, ensure your local development workflow uses environment variables or secrets managers—hardcoded keys will now fail at push time. For Salesforce and Cloudsmith users, review your repositories for any exposed credentials that may have been committed before this detection went live. Secret scanning partners can revoke leaked credentials automatically, but prevention remains the primary goal.</p>