---
title: "GPT-6 Astra's UltraFast mode arrives on Amazon Bedrock"
dek: "OpenAI's new speed tier promises up to 6x faster inference at 300 tokens per second for latency-critical workloads."
topic: "AWS"
tags: ["bedrock", "openai", "inference", "performance"]
date: 2026-09-30
sourceName: "AWS What's New"
sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2026/09/openai-gpt-6-astra-ultrafast-on-amazon-bedrock/"
---
<h2>What changed</h2><p>Amazon Bedrock now supports UltraFast mode for OpenAI's GPT-6 Astra model. This is a premium speed tier optimized specifically for latency-sensitive applications, delivering up to 6x faster inference compared to the standard tier—maxing out at approximately 300 tokens per second according to OpenAI's benchmarks.</p><h2>Why it matters</h2><p>For production systems where response time directly impacts user experience—think customer support chatbots, real-time coding assistants, or interactive documentation—this matters. The difference between 50 tokens per second and 300 tokens per second is the difference between noticeable lag and conversational flow. UltraFast mode targets the specific pain point where model capability is sufficient but speed becomes the bottleneck.</p><h2>What to consider</h2><p>Premium speed tiers typically carry premium pricing. Before enabling UltraFast, profile your actual latency requirements—many batch processing or analysis workloads won't benefit from the speed increase. This is for use cases where the user is waiting, not where throughput at scale is the goal. Check your Bedrock billing to understand the cost trade-off for your specific traffic patterns.</p>