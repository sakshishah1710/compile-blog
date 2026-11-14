---
title: "Aurora PostgreSQL express configuration lands in CloudFormation"
dek: "You can now provision Aurora clusters with express config via IaC, cutting setup time without leaving your templates."
topic: "AWS"
tags: ["aurora", "cloudformation", "iac", "postgresql"]
date: 2026-11-14
sourceName: "AWS What's New"
sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2026/11/aurora-postgresql-cloudformation/"
---
<h2>What changed</h2><p>AWS added CloudFormation support for Aurora PostgreSQL's express configuration mode. Previously available only through the console or CLI, express config can now be declared directly in CloudFormation templates, letting you automate fast Aurora cluster deployment as part of your infrastructure-as-code workflows.</p><h2>Why it matters (and what it doesn't do)</h2><p>Express configuration speeds up Aurora cluster creation—useful for ephemeral environments, CI/CD pipelines, or rapid testing. Before this, teams choosing CloudFormation had to use standard provisioning, which takes longer. Now you can get both speed and IaC repeatability in the same template.</p><p>This doesn't change Aurora's runtime behavior or add new database features. It's purely about deployment: how fast your cluster becomes queryable after you apply a stack.</p><h2>What to do with it</h2><p>If you're spinning up short-lived Aurora clusters for testing or preview environments, update your CloudFormation templates to use express configuration. Check the parameter syntax in the AWS docs. For long-lived production databases, standard config remains the default—express mode trades some tuning options for speed, so evaluate based on your uptime and customization needs.</p>