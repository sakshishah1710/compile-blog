---
title: "AWS CLI adds bulk skill updates for Agent Toolkit"
dek: "Two new commands let you check and update all agent skills at once instead of one at a time."
topic: "AWS"
tags: ["aws", "cli", "agent-toolkit", "automation"]
date: 2026-10-01
sourceName: "AWS What's New"
sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2026/09/aws-cli-agent-toolkit-update-skill/"
---
<h2>What changed</h2><p>AWS added two CLI commands for managing Agent Toolkit skills. The first, <code>aws agent-toolkit check-skill-updates</code>, checks all installed skills against the latest registry versions. The second, <code>aws agent-toolkit update-skill --all</code>, updates every outdated skill in one operation.</p><h2>Why it matters</h2><p>Before this, you had to check and update skills individually—tedious if you're running multiple skills. The bulk update command is the real win here: you can now keep your entire skill inventory current with a single command. The version check gives you visibility before you commit to updates.</p><h2>What to know</h2><p>This is strictly operational convenience. It doesn't change how skills work or add new Agent Toolkit functionality. If you're managing agent deployments with any scale, add the check command to your monitoring and the bulk update to your maintenance runbooks. Note that the announcement doesn't specify rollback options, so test updates in non-production first.</p>