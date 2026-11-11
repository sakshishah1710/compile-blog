---
title: "Lambda MicroVMs adds x86 support alongside Arm"
dek: "AWS's isolated compute primitive now runs on both architectures, eliminating the need to recompile workloads."
topic: "AWS"
tags: ["lambda", "aws", "compute", "architecture"]
date: 2026-11-11
sourceName: "AWS What's New"
sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-microvms-x86-architecture/"
---
<h2>What changed</h2><p>Lambda MicroVMs now supports x86 CPU architecture in addition to the existing Arm (Graviton) option. When creating a MicroVM image, you can specify which architecture to use. This means existing x86 applications, tools, and dependencies run without modification or porting effort.</p><h2>Why this matters for mixed fleets</h2><p>Lambda MicroVMs provides isolated compute environments for individual users or jobs. Until now, you were locked into Arm if you wanted to use this primitive. The x86 addition removes a blocker for workloads with dependencies that don't have Arm builds, or where recompiling isn't practical. You're still running serverless isolated compute—just on the architecture your code already expects.</p><h2>What to consider</h2><p>This doesn't change the isolation model or the serverless characteristics of MicroVMs. It's purely an architecture choice at image creation time. If your workload already runs on Graviton, nothing changes. If you've been waiting to adopt MicroVMs because of x86 dependencies, that constraint is now gone. Evaluate based on your actual dependency chain, not assumptions about performance—both architectures are available for a reason.</p>