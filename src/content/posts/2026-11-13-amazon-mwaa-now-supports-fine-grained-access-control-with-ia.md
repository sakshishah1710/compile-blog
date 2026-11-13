---
title: "Amazon MWAA adds IAM Identity Center integration and multi-team environments"
dek: "AWS's managed Airflow service now lets you control DAG and resource access at a granular level using native IAM tooling."
topic: "AWS"
tags: ["mwaa", "airflow", "iam", "aws"]
date: 2026-11-13
sourceName: "AWS What's New"
sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2026/11/mwaa-fine-grained-access-control/"
---
<h2>What changed</h2><p>Amazon MWAA now supports fine-grained access control through two new features: IAM Identity Center integration and multi-team environments. Previously, access control in MWAA was more coarse-grained—you could grant users access to the entire Airflow environment, but controlling who sees which DAGs or resources required manual configuration within Airflow itself.</p><h2>Why it matters</h2><p>This matters if you're running Airflow in a shared environment where multiple teams need isolation. IAM Identity Center integration means you can authenticate users through your existing identity provider and map them to Airflow roles without managing separate credentials. Multi-team environments let you partition workflows and resources so teams only see what's relevant to them—critical for compliance, security, and reducing operational noise in larger organizations.</p><h2>What to know</h2><p>Fine-grained access control doesn't fundamentally change how Airflow works—it's an authz layer on top. You'll still need to design your DAGs and permissions thoughtfully. If your MWAA environment is single-team or you've already built custom RBAC logic in Airflow, this may not be urgent. But if you're scaling Airflow across teams or dealing with audit requirements, native IAM integration simplifies your architecture considerably.</p>