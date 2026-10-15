---
title: "CloudWatch Pipelines adds conditional routing and chained parsers"
dek: "AWS extends its managed log pipeline service with branching logic and multi-stage transformation capabilities."
topic: "AWS"
tags: ["cloudwatch", "aws", "observability", "log-processing"]
date: 2026-10-15
sourceName: "AWS What's New"
sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2026/10/cloudwatch-pipelines-log-routing/"
---
<h2>What changed</h2><p>CloudWatch Pipelines now supports conditional routing and chained parsers for log data. You can apply multiple parsing steps in sequence and route logs to different CloudWatch log groups based on their content—all without managing any infrastructure. This builds on CloudWatch Pipelines, AWS's managed service for ingesting and transforming telemetry.</p><h2>Why it matters</h2><p>Mixed log streams are common in production: application logs, access logs, and audit events often flow through the same pipeline. Until now, separating them meant pre-processing outside CloudWatch or accepting everything in one destination. Conditional routing lets you split streams based on content, while chained parsers handle logs that need multiple transformation passes—like extracting JSON from a syslog wrapper, then parsing fields from that JSON.</p><h2>What to know</h2><p>This is about organizing existing CloudWatch log ingestion, not replacing your logging infrastructure. The pipelines remain fully managed, so there's no new infrastructure to provision. If you're already using CloudWatch Pipelines, these capabilities extend what you can do inline. If you're not, the value proposition is the same: managed transformation in exchange for staying within the CloudWatch ecosystem.</p>