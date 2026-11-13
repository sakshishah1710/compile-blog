---
title: "AWS launches Graviton5 R9g instances for Aurora and RDS"
dek: "New memory-optimized instances deliver 30% more performance and 22% better price-performance than Graviton4 equivalents."
topic: "AWS"
tags: ["aws", "graviton", "rds", "aurora"]
date: 2026-11-13
sourceName: "AWS What's New"
sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-aurora-rds-postgresql-mysql-mariadb-r9g-instances/"
---
<h2>What changed</h2><p>AWS released Graviton5-based R9g database instances for Aurora (PostgreSQL and MySQL) and RDS (PostgreSQL, MySQL, and MariaDB). These memory-optimized instances are now generally available, marking the next generation of AWS's ARM-based database infrastructure.</p><h2>Performance gains</h2><p>R9g instances offer up to 30% better performance compared to Graviton4-based equivalents of the same size. More importantly for cost-conscious teams, they deliver up to 22% better price-performance on on-demand pricing. These gains apply across the board—whether you're running Aurora's distributed storage architecture or standard RDS deployments.</p><h2>What this means for you</h2><p>If you're already on Graviton4 (R8g) instances, this is a straightforward upgrade path with meaningful performance headroom. The catch: you'll need to test your specific workload, as ARM architecture compatibility issues can still surface with certain database extensions or application drivers. For new deployments on memory-intensive databases, R9g instances should be your default starting point over x86 alternatives.</p>