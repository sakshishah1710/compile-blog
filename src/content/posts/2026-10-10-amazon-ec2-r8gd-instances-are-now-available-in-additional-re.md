---
title: "AWS R8gd instances with Graviton4 now in European Sovereign Cloud"
dek: "Memory-optimized instances with local NVMe storage expand to Germany region, bringing 30% performance boost over Graviton3."
topic: "AWS"
tags: ["ec2", "graviton", "aws", "sovereign-cloud"]
date: 2026-10-10
sourceName: "AWS What's New"
sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-ec2-r8gd-thf/"
---
<h2>What's New</h2><p>AWS has expanded availability of EC2 R8gd instances to the European Sovereign Cloud region in Germany. These memory-optimized instances run on Graviton4 processors and include up to 11.4 TB of local NVMe SSD storage, offering up to 30% better performance compared to their Graviton3-based predecessors.</p><h2>Why This Matters</h2><p>The European Sovereign Cloud availability is significant for organizations with data residency requirements in the EU. R8gd instances combine high memory capacity with local storage, making them suited for in-memory databases, real-time analytics, and caching workloads that benefit from both fast local disk and substantial RAM. The Graviton4 performance improvement is notable if you're already running Graviton3-based R7gd instances.</p><h2>What to Consider</h2><p>Local NVMe storage is ephemeral—it doesn't persist if you stop or terminate the instance. If you need the performance characteristics but require durable storage, you'll still want EBS volumes for your data. The 30% performance claim is a ceiling; your actual gains depend on workload characteristics and how well your application uses Arm architecture.</p>