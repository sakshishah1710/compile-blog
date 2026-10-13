---
title: "CloudFront now supports Lambda Web Functions as origins"
dek: "AWS adds native integration to front Lambda Web Functions with CloudFront's edge network without code changes."
topic: "AWS"
tags: ["cloudfront", "lambda", "edge", "aws"]
date: 2026-10-13
sourceName: "AWS What's New"
sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2026/10/cloudfront-lambda-web-functions-origin/"
---
<h2>What changed</h2><p>CloudFront can now use AWS Lambda Web Functions directly as origins. Previously, putting CloudFront in front of a Lambda Web Function required workarounds or additional configuration. The integration is now native—point CloudFront at your Lambda Web Function and it works.</p><h2>What you get</h2><p>The value proposition is standard CDN benefits: TLS termination happens at the edge instead of origin, reducing latency on connection setup. Responses can be cached at CloudFront's points of presence. You can use custom domains with AWS-managed certificates. Critically, AWS says no application code changes are required—your existing Lambda Web Functions work as-is.</p><h2>Practical takeaway</h2><p>If you're running Lambda Web Functions and haven't put CloudFront in front of them due to setup friction, that friction is gone. The performance gains from edge TLS and caching are real for most web workloads. Configure it in CloudFront's origin settings, point to your function, and you're done. Worth testing if connection latency or cache hit rates matter to your application.</p>