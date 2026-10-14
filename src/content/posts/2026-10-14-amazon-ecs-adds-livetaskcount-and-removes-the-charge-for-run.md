---
title: "Amazon ECS removes charges for RunningTaskCount, adds free LiveTaskCount metric"
dek: "AWS makes two key task-count metrics free for all ECS users, eliminating a common CloudWatch cost."
topic: "AWS"
tags: ["ecs", "cloudwatch", "aws", "monitoring"]
date: 2026-10-14
sourceName: "AWS What's New"
sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2026/10/ecs-service-metrics/"
---
<h2>What changed</h2><p>Amazon ECS now provides LiveTaskCount, a new service metric showing actively running tasks, at no cost. At the same time, AWS removed charges for the existing RunningTaskCount metric in CloudWatch Container Insights. Both metrics are now available to all ECS customers without additional fees.</p><h2>Why this matters</h2><p>Task count metrics are fundamental monitoring data—teams need them to understand service health and scale events. Previously, getting this visibility through Container Insights meant paying per metric, which added up quickly across multiple services. This change eliminates that ongoing cost for basic operational awareness.</p><h2>The practical difference</h2><p>If you're currently paying for RunningTaskCount through Container Insights, that line item disappears. If you've been avoiding Container Insights because of metric costs, LiveTaskCount gives you free visibility into active task counts without enabling the full Container Insights suite. The metrics themselves work the same way—this is purely about removing the billing friction from essential monitoring data.</p>