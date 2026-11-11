---
title: "EKS Auto Mode adds per-Pod security groups"
dek: "AWS extends EC2 security group controls to individual Pods in Auto Mode clusters, eliminating the need for separate node pools per application."
topic: "Kubernetes"
tags: ["eks", "security-groups", "aws", "networking"]
date: 2026-11-11
sourceName: "AWS What's New"
sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eks-auto-mode-security-groups-for-pods/"
---
<h2>What changed</h2><p>Amazon EKS Auto Mode now supports security groups for Pods, a feature that lets you attach distinct EC2 security group rules directly to individual Pods. Previously available in standard EKS, this capability is now integrated into Auto Mode's managed infrastructure model.</p><h2>Why it matters</h2><p>This removes a common infrastructure bottleneck. Before this, teams often created separate node groups for workloads with different network requirements—one pool for database clients, another for public-facing services, and so on. Now multiple workloads with different security postures can run on the same nodes while maintaining network-level isolation. The security boundary moves from the node to the Pod, which aligns better with how modern workloads are actually organized.</p><h2>What to know</h2><p>Security groups for Pods uses ENI trunking on the node, so it works within your existing VPC and security group limits. You'll define security groups in your Pod specs, and EKS handles the attachment. This is most useful when you have strict compliance requirements around network segmentation or when services need selective access to RDS instances, ElastiCache clusters, or other VPC resources. Standard Auto Mode benefits—like managed node lifecycle and automated scaling—remain unchanged.</p>