---
title: "CloudWatch Logs adds account-level retention policies"
dek: "Set retention rules once for all log groups in an AWS account, rather than configuring each group individually."
topic: "AWS"
tags: ["cloudwatch", "aws", "logging", "compliance"]
date: 2026-11-10
sourceName: "AWS What's New"
sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-log-retention/"
---
<h2>What changed</h2><p>CloudWatch Logs now supports account-level retention policies. Instead of setting retention periods on each log group individually, you can define a single policy that applies to all log groups—or a filtered subset—across an entire AWS account.</p><h2>Why it matters</h2><p>This is an operational quality-of-life improvement for platform and security teams managing retention at scale. Previously, enforcing a standard like "delete after 90 days" meant scripting around each log group or relying on tagging discipline. Account-level policies make compliance enforcement straightforward and reduce the risk of orphaned log groups accumulating unbounded storage costs.</p><h2>What to do</h2><p>If you manage logs for multiple teams or enforce org-wide retention standards, review your existing log groups and consider replacing per-group configuration with an account policy. This is especially useful in landing zones or when onboarding new services—retention becomes automatic rather than something each team must remember to configure.</p>