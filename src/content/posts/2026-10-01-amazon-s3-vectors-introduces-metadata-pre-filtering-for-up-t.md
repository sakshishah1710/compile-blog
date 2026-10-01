---
title: "S3 Vectors adds metadata pre-filtering, boosting filtered search recall up to 5x"
dek: "AWS's vector search service now evaluates metadata filters before similarity search, improving result quality for selective queries."
topic: "AWS"
tags: ["s3", "vector-search", "rag", "aws"]
date: 2026-10-01
sourceName: "AWS What's New"
sourceUrl: "https://aws.amazon.com/about-aws/whats-new/2026/09/s3-vectors-introduces-metadata-pre-filtering/"
---
<h2>What changed</h2><p>Amazon S3 Vectors now supports pre-filtering on metadata before running vector similarity search. The service also introduces a <code>$startsWith</code> operator for prefix matching on fields like file paths and URLs. AWS claims this can return up to 5x more matching vectors when filters are selective.</p><h2>Why it matters</h2><p>Post-filtering—running similarity search first, then applying metadata filters—often misses relevant results because the initial search window is fixed. If your filter is selective (say, documents from a specific department), most of the top-k vectors get discarded, leaving you with few actual matches. Pre-filtering inverts this: it narrows the search space first, then finds similar vectors within that subset. The 5x improvement applies specifically to these selective filter scenarios, not broad queries.</p><h2>Practical impact</h2><p>If you're building RAG systems or semantic search where users filter by metadata (date ranges, categories, source systems), this directly improves answer quality without changing query volume or cost structure. The <code>$startsWith</code> operator is useful for hierarchical data—think filtering vectors by S3 key prefixes or URL paths. Test your existing filtered queries; if you're seeing sparse results today, pre-filtering may close that gap.</p>