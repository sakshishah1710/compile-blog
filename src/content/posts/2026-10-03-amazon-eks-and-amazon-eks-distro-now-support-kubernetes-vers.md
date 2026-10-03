---
title: "Amazon EKS now supports Kubernetes 1.37"
dek: "AWS adds support for the latest Kubernetes release across EKS and EKS Distro, enabling cluster creation and upgrades starting today."
topic: "Kubernetes"
tags: ["kubernetes", "eks", "aws", "upgrades"]
date: 2026-10-03
sourceName: "AWS What's New"
sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-eks-distro-kubernetes-version-1-37"
---
<h2>What's New</h2><p>Amazon EKS and EKS Distro now support Kubernetes version 1.37. You can create new clusters on 1.37 or upgrade existing clusters through the EKS console, eksctl CLI, or AWS APIs. The release includes the upstream features and bug fixes from Kubernetes 1.37.</p><h2>Upgrade Path</h2><p>If you're running older versions, you can now plan your upgrade to 1.37. As with all Kubernetes upgrades, you can only move one minor version at a time—so clusters on 1.35 need to go through 1.36 first. Test thoroughly in non-production environments before upgrading production workloads.</p><h2>What This Means</h2><p>This is standard maintenance for EKS users. AWS typically supports the three most recent Kubernetes versions, so older versions will eventually reach end-of-support. If you're on 1.34 or earlier, start planning your upgrade path. The announcement doesn't detail specific 1.37 features, so check the upstream Kubernetes 1.37 changelog for what's actually changed in the release.</p>