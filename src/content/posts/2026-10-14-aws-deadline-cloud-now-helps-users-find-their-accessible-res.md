---
title: "Deadline Cloud adds resource discovery for scoped IAM permissions"
dek: "Users with queue- or job-level access can now find their resources without guessing paths or farm IDs."
topic: "AWS"
tags: ["deadline-cloud", "iam", "permissions", "render-farms"]
date: 2026-10-14
sourceName: "AWS What's New"
sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2026/10/deadline-cloud/resources"
---
<h2>What changed</h2><p>AWS Deadline Cloud's monitor now surfaces resources users actually have permission to access. Previously, if you were granted IAM permissions to specific queues, fleets, or jobs—rather than a whole farm—you had to know the exact resource paths to find them. The new discovery feature scans your permissions and shows what's available directly in the console.</p><h2>Why it matters</h2><p>This addresses a real friction point for teams using least-privilege IAM policies. Render farms often have dozens of queues serving different departments or projects. Artists or engineers with scoped access previously had no way to browse what they could use without asking an admin for resource identifiers. This change makes scoped permissions practical instead of theoretical.</p><h2>What it doesn't solve</h2><p>This is UI sugar, not a permissions change. You still need IAM policies granting access to specific resources—the monitor just makes those resources visible. It won't help if your policies are overly broad or incorrectly scoped to begin with.</p><h2>Practical takeaway</h2><p>If you're running Deadline Cloud with granular IAM controls, users can now self-serve resource discovery. Review your existing policies to ensure they're scoped to queues or jobs where appropriate, then let teams find their own workloads without opening up farm-wide read access.</p>