---
title: "Security Hub adds S3 export for findings in CSV and JSON"
dek: "AWS removes the need for custom scripts to pull Security Hub findings into external systems."
topic: "Security"
tags: ["security-hub", "aws", "compliance", "ocsf"]
date: 2026-10-10
sourceName: "AWS What's New"
sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2026/10/security-hub-exports-s3-csv-json/"
---
<h2>What changed</h2><p>AWS Security Hub now lets you export findings directly to S3 in CSV or JSON format from any findings page in the console. This includes Threats, Exposure, Vulnerabilities, Posture Management, Sensitive Data, and the All Findings view. The JSON export uses the Open Cybersecurity Schema Framework (OCSF) format.</p><h2>Why it matters</h2><p>Until now, getting Security Hub findings into external systems meant either building custom integrations against the API or copying data manually. Teams managing compliance reports or building audit evidence trails often needed findings in flat file formats that other tools could consume. This export capability addresses that gap directly—no Lambda functions or third-party tools required.</p><h2>What to use it for</h2><p>The CSV export works well for compliance reporting where you need findings in spreadsheet format. JSON (OCSF) fits better if you're feeding findings into SIEM tools or security data lakes that already speak OCSF. The key limitation: this is a manual export from the console, not an automated feed. If you need real-time streaming of findings, you still want EventBridge integration or the Security Hub API.</p>