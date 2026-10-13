---
title: "GitHub Enterprise adds Copilot telemetry without capturing prompts"
dek: "New managed settings let admins track user activity while keeping AI interactions private."
topic: "Security"
tags: ["github", "copilot", "enterprise", "telemetry"]
date: 2026-10-13
sourceName: "GitHub Changelog"
sourceUrl: "https://github.blog/changelog/2026-10-12-client-telemetry-user-attribution-and-configurable-capture"
---
<h2>What changed</h2><p>GitHub Enterprise administrators can now configure telemetry to attribute Copilot activity to specific users without collecting the actual content of their prompts, responses, or tool interactions. The new <code>telemetry.capture.identity</code> setting provides user attribution while maintaining privacy boundaries around what developers are actually asking the AI.</p><h2>Why it matters</h2><p>This addresses a longstanding tension in enterprise AI adoption: compliance teams need usage visibility, but developers resist surveillance of their coding conversations. Previous telemetry approaches often forced an all-or-nothing choice between detailed logging and complete opacity. Organizations can now answer "who is using Copilot and how much" without being able to reconstruct "what they asked it to write."</p><h2>What to do</h2><p>Enterprise admins should review their current Copilot telemetry configuration against compliance requirements. If your security policy needs user-level attribution but not content inspection, this setting provides a cleaner implementation than log parsing workarounds. Document the scope of what's collected—developers will ask, and clear boundaries build trust in AI tooling rollouts.</p>