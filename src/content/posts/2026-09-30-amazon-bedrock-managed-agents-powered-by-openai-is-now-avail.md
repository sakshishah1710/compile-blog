---
title: "AWS and OpenAI launch Bedrock Managed Agents in preview"
dek: "A customized version of OpenAI's Agents API runs natively on AWS infrastructure with IAM integration and state management."
topic: "AWS"
tags: ["bedrock", "openai", "agents", "aws"]
date: 2026-09-30
sourceName: "AWS What's New"
sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2026/09/bedrock-managed-agents-preview/"
---
<h2>What shipped</h2><p>Amazon Bedrock Managed Agents (BMA) is now available in preview—a joint effort between AWS and OpenAI that brings a customized version of OpenAI's Agents API into the AWS ecosystem. The service lets you build agents optimized for OpenAI models that run entirely within AWS infrastructure, using existing IAM roles, permissions, and governance controls. AWS handles state preservation automatically.</p><h2>Why it matters</h2><p>This bridges a practical gap: teams wanting OpenAI's agent capabilities without data leaving AWS boundaries. You get the Agents API behavior but with your existing AWS security posture—no separate identity system, no new compliance review. State management being handled by the service means one less thing to architect around.</p><h2>What to watch</h2><p>Being a preview means expect limitations and potential breaking changes. Check what agent features from OpenAI's API made it into this customized version—not everything may have survived the AWS integration. And understand the pricing model: managed agents typically cost more than direct API calls, so validate the convenience premium works for your use case before committing architecture to it.</p>