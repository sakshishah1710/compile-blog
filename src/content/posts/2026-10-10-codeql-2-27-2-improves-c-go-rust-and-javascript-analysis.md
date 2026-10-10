---
title: "CodeQL 2.27.2 ships C++ regex parser, cross-language analysis improvements"
dek: "GitHub's static analysis engine adds regex parsing for C++ and refinements across Go, Rust, and JavaScript."
topic: "Security"
tags: ["codeql", "github", "static-analysis", "security"]
date: 2026-10-10
sourceName: "GitHub Changelog"
sourceUrl: "https://github.blog/changelog/2026-10-09-codeql-2-27-2-improves-c-go-rust-and-javascript-analysis"
---
<h2>What changed</h2><p>CodeQL 2.27.2 is now available with a new C++ regular-expression parser and analysis improvements spanning multiple languages. The release targets C++, Go, Rust, and JavaScript — languages that together power a significant portion of modern infrastructure and application code.</p><h2>Why the regex parser matters</h2><p>Regular expressions are a common source of security vulnerabilities, from ReDoS (Regular Expression Denial of Service) attacks to injection flaws. A dedicated parser for C++ regex patterns means CodeQL can now reason about how your code constructs and uses regex, catching issues before they reach production. This joins similar capabilities GitHub has built for other languages.</p><h2>What to do</h2><p>If you're using GitHub Advanced Security with code scanning, the update rolls out automatically — no configuration required. For self-hosted runners or CLI users, upgrade to CodeQL 2.27.2 to get the new checks. Review any new findings in your scan results, especially around regex usage in C++ codebases. The cross-language improvements mean you may see refined results even in projects you've been scanning for months.</p>