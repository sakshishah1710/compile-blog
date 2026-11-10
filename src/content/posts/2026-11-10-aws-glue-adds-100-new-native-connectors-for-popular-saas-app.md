---
title: "AWS Glue adds 100 native SaaS connectors, eliminating custom integration code"
dek: "New connectors let teams pull data from SaaS applications into Glue ETL jobs without writing custom code, using existing Data Catalog permissions."
topic: "AWS"
tags: ["aws glue", "etl", "saas integrations", "data catalog"]
date: 2026-11-10
sourceName: "AWS What's New"
sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2026/11/aws-glue-adds-100-new-native-connectors/"
---
<h2>What changed</h2><p>AWS Glue now includes 100 native connectors for SaaS and REST API-based applications. Teams can define these connections once in the AWS Glue Data Catalog and reuse them across ETL jobs. The connectors use Glue's existing permissions model, removing the need for separate credential management per job.</p><h2>Why this matters</h2><p>Before this release, pulling data from SaaS platforms into AWS required custom connector code for each integration. That meant maintaining bespoke scripts, managing credentials outside your standard IAM workflows, and repeating connection logic across jobs. For teams running regular extracts from Salesforce, ServiceNow, or similar platforms, this was pure overhead.</p><h2>What you can do now</h2><p>Create a connection in the Data Catalog, reference it in your Glue jobs, and let AWS handle the authentication and data retrieval. If you're already using Glue for ETL, this reduces the barrier to incorporating SaaS data into your pipelines. Check the Glue console for the full list of supported connectors and start replacing custom integration code with catalog-managed connections.</p>