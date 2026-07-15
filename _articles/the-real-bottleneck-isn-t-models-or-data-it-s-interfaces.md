---
title: "The Real Bottleneck Isn’t Models or Data. It’s Interfaces"
date: "2026-05-06"
excerpt: "In fast-moving scientific and AI environments, the real constraint is rarely computation alone. Systems succeed or fail at the interface between methods, workflows, and human adaptation."
readingTime: "8 min"
---

It’s the mid-2010s. I’ve already switched fields once, and I’m working in single-cell biology at a time when the field was evolving rapidly. We’ve just gone from a handful of parameters to a few dozen. So naturally, I move from manual tools to writing my own pipelines. It feels like progress.

It was just the beginning.

## When Data Outpaced Software

I had the opportunity to work at a moment when single-cell biology began to outpace the software built to support it. The transition from protein measurements to RNA sequencing did not simply increase scale, it fundamentally altered the nature of analysis. Data moved from tens of parameters to tens of thousands.

The only viable approach was to rely on code written and maintained by bioinformaticians, loosely connected to the scientists generating the data. New algorithms appeared in the literature at high frequency, but their practical use lagged behind. Integration was slow, often brittle, and rarely aligned with how researchers actually worked.

I became in demand. And yet, it was not particularly satisfying.

### Methods proliferated rapidly. Software did not.

The primary constraint was neither computational nor statistical. It was operational. And it was largely invisible to those building the tools. Most vendors responded by attempting to incorporate some methods directly into their products. One algorithm at a time, fully integrated, presented as definitive solutions.

By the time a method was implemented, it was often no longer state of the art. More importantly, these systems imposed rigid workflows on users who neither needed nor wanted them. In a field defined by rapid iteration and intellectual autonomy, this rigidity was not a limitation. It was a structural flaw.

### A different approach

Rather than competing on the quality of individual methods, we focused on reducing the time between their appearance and their use in practice. That required a different architecture: one that allowed rapid integration, avoided premature standardization, and remained open to extension.

In practical terms, this meant treating software less as a product and more as an environment. The objective was not completeness. It was responsiveness.

## How Scientists Actually Think

This shift had consequences beyond engineering. It changed how we worked with users. Instead of delivering predefined pipelines, we spent time understanding how researchers actually structured their analysis.

A pattern emerged quickly: scientists do not think in pipelines. They think in questions. Tools that enforced linear workflows disrupted that process. Tools that allowed recombination and iteration supported it.

### One example stayed with me.

A research group was combining flow cytometry with single-cell sequencing, sorting live cells based on surface markers, then profiling them at the transcriptomic level. The problem was not generating data. It was reconciling it: matching low-dimensional phenotypic information with high-dimensional RNA profiles.

The underlying method was not conceptually complex, but no standard solution existed. The process relied on back-and-forth between teams, manual steps, and fragile scripts.

The solution emerged during a discussion. It was sketched informally and implemented shortly thereafter as a plugin. What mattered was not technical sophistication, but immediacy. A fragmented workflow became operational. People could run it, adjust it, and build on it.

It stopped being a discussion and became part of the analysis.

That is a different category of value.

### What actually scales

New methods emerged. Users needed them. Integration followed quickly. Over time, this created a system with properties that competitors struggled to replicate: not because any individual component was superior, but because the overall structure enabled continuous adaptation.

By contrast, competing approaches remained constrained by their own design choices. Systems built around tightly integrated pipelines could not evolve at the same pace. Those that prioritized proprietary methods tended to overstate their generality.

In both cases, the failure mode was the same: the system could not keep up with the field.

This dynamic is not unique to computational biology.

## The Same Pattern in AI

A similar pattern is now visible in artificial intelligence.

The focus is on models: larger architectures, marginal gains, increasing specialization. Meanwhile, many organizations struggle to translate these advances into systems that are actually used. Models exist, data exists, but usage remains limited. 

The bottleneck lies in the layer that determines whether a model becomes part of a workflow, or remains a demonstration. That layer is still poorly understood, and often treated as an implementation detail. It isn’t. It is where most projects fail. The challenge is integrating models into workflows while allowing iteration without excessive friction.

### The reality of healthcare

This becomes particularly evident in regulated environments such as healthcare. Here, performance is only one variable. Systems must also be traceable, interpretable, and integrated into existing processes. You are not deploying a model. You are introducing a system into a constrained environment with real consequences.

Optimizing the model while deferring everything else is a common pattern. Integration comes later; often too late, if at all. The result is predictable: technically sound solutions that never become embedded in actual workflows. In fast-moving domains, the primary advantage is not better methods. It is reducing the time between a new idea and its use.

That requires systems that are extensible, aligned with how people work, and capable of integrating change without friction.

## Closing

It’s now the mid-2020s. Shimon Sakaguchi is being recognized for his work on regulatory T cells. Years earlier, I started coding to analyze those same cells, long before their significance was widely appreciated. The science has moved forward, as it always does.

Some of the tools built along the way are still in use. The plugin remains available, still works, and has supported published research.

The question is whether our systems keep up.