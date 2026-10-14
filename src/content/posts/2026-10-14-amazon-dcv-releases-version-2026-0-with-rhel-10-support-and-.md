---
title: "Amazon DCV 2026.0 adds RHEL 10 support and native macOS client"
dek: "AWS's remote desktop protocol now supports latest enterprise Linux distributions and ships its first macOS client alongside refreshed Windows and Linux versions."
topic: "AWS"
tags: ["amazon-dcv", "remote-desktop", "rhel", "macos"]
date: 2026-10-14
sourceName: "AWS What's New"
sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-dcv-2026-0/"
---
<h2>What shipped</h2><p>Amazon DCV 2026.0 is now generally available with support for RHEL 10, Rocky Linux 10, CentOS 10, and Ubuntu 26.04. The release also includes a new native macOS client, plus updated clients for Windows and Linux. DCV is AWS's remote display protocol for accessing virtual desktops and applications running on EC2 or on-premises infrastructure.</p><h2>Why it matters</h2><p>The RHEL 10 family support matters if you're standardizing on the latest enterprise Linux releases—you can now run DCV servers on these distributions without waiting for backports or workarounds. The macOS client is the bigger story: teams that standardized on Macs for local workstations can now access remote Linux or Windows environments through a native client instead of web browsers or third-party tools.</p><h2>What to know</h2><p>DCV competes with protocols like RDP and VNC but is optimized for graphics-intensive workloads—think engineering simulations, 3D modeling, or video editing on cloud instances. If you're already using DCV, the update path is straightforward: install the new server packages on supported distros and distribute updated clients. If you're evaluating remote desktop solutions for GPU workloads on AWS, DCV is worth testing against browser-based alternatives like Amazon WorkSpaces.</p>