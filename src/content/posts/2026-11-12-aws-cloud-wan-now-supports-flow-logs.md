---
title: "AWS Cloud WAN adds centralized Flow Logs across global networks"
dek: "New Flow Logs capability eliminates the need to collect and correlate VPC Flow Logs from multiple accounts and regions."
topic: "AWS"
tags: ["aws", "networking", "cloud-wan", "observability"]
date: 2026-11-12
sourceName: "AWS What's New"
sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2026/11/aws-cloud-wan-flow-logs/"
---
<h2>What changed</h2><p>AWS Cloud WAN now supports VPC Flow Logs natively at the core network level. Instead of stitching together flow data from individual VPCs across multiple accounts and regions, network operators can now capture IP traffic details for flows traversing their entire Cloud WAN deployment from a single location.</p><h2>Why it matters</h2><p>This addresses a real operational pain point. Before this, understanding traffic patterns across a multi-region, multi-account Cloud WAN topology meant aggregating VPC Flow Logs from dozens or hundreds of sources—a manual, error-prone process that delayed troubleshooting and made network analysis difficult at scale. Centralized visibility means faster incident response and simpler compliance reporting.</p><h2>What to know</h2><p>The Flow Logs capture detailed information for each flow at the core network layer, where Cloud WAN operates. This doesn't replace VPC Flow Logs for workload-level visibility, but complements them by showing how traffic moves between network segments. If you're running Cloud WAN, enabling this feature gives you a unified view of inter-VPC and cross-region traffic without building custom aggregation pipelines.</p>