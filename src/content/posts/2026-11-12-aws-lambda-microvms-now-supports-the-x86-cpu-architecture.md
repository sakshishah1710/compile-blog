---
title: "Lambda MicroVMs adds x86 support alongside Arm"
dek: "AWS expands its MicroVM offering to support both x86 and Graviton processors, eliminating the need to recompile existing workloads."
topic: "AWS"
tags: ["lambda", "aws", "serverless", "microvm"]
date: 2026-11-12
sourceName: "AWS What's New"
sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-microvms-x86-architecture/"
---
<h2>What changed</h2><p>AWS Lambda MicroVMs now supports x86 architecture in addition to its existing Arm/Graviton option. When creating a MicroVM image, you can now explicitly choose which CPU architecture to target. This means existing x86 applications, toolchains, and dependencies can run without modification or recompilation.</p><h2>Why it matters (and what it doesn't solve)</h2><p>Lambda MicroVMs is AWS's serverless compute primitive for giving each user or job an isolated virtual machine environment. Until now, teams had to either port to Arm or skip MicroVMs entirely if they had x86-specific dependencies—compiled binaries, legacy tools, or architecture-specific libraries. This update removes that barrier.</p><p>That said, this doesn't change the fundamental MicroVM model: you're still working with containerized images and Lambda's execution model. If your workload doesn't need per-user or per-job isolation in a serverless context, standard Lambda functions or containers remain simpler options.</p><h2>Practical takeaway</h2><p>If you've been evaluating Lambda MicroVMs but held back due to x86 dependencies, you can now proceed without a rewrite. Choose your architecture at image creation time based on what your workload actually requires—Graviton for cost efficiency where possible, x86 where compatibility demands it.</p>