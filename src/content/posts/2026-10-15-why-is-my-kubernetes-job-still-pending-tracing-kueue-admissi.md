---
title: "Kueue Admission Tracing in Headlamp Shows Why Jobs Stay Suspended"
dek: "New Headlamp integration surfaces Kueue's resource admission decisions, making it clear why Jobs wait before Pods even appear."
topic: "Kubernetes"
tags: ["kubernetes", "kueue", "observability", "batch-workloads"]
date: 2026-10-15
sourceName: "Kubernetes Blog"
sourceUrl: "https://kubernetes.io/blog/2026/10/14/tracing-kueue-admission-with-headlamp/"
---
<h2>What Changed</h2><p>Headlamp now integrates visibility into Kueue's admission process for Kubernetes Jobs. When Kueue manages your cluster's workload scheduling, Jobs can remain suspended while the system evaluates resource availability and quota constraints—before any Pods are created. This new tracing capability exposes that decision-making process directly in the Headlamp UI.</p><h2>Why It Matters</h2><p>Without this visibility, troubleshooting suspended Jobs means guessing or digging through Kueue controller logs. You see a Job with no Pods and no application logs, leaving you unable to distinguish between a resource contention issue, a quota problem, or a configuration error. The Headlamp integration closes this observability gap by showing you exactly what Kueue is waiting for.</p><h2>What to Do With It</h2><p>If you're running Kueue for multi-tenant resource management or batch workload queuing, add Headlamp to your stack. The tracing view will immediately clarify whether a Job is waiting on quota headroom, cluster capacity, or fair-share policies. This eliminates the "why isn't my Job running" support tickets and gives users self-service visibility into their workload admission status.</p>