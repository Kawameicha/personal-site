---
title: "Why Scientific Software Feels Different"
date: "2026-10-21"
excerpt: "Scientific software does more than process data: it produces claims that researchers must decide whether to believe. Trust depends on whether those claims can be reproduced, challenged, and independently evaluated."
readingTime: "16 min"
tags: ["trust", "validation", "judgment"]
---

This used to happen to me quite often. Two files, or maybe a whole workspace, and a question: why did this change between the two analyses? It was rarely an incident. Granted, bugs or mistakes happen, but most of the time it actually was part of the workflow. And we looked for the answer using the software itself. Rerun the analysis with a different algorithm. Transform the parameters differently. Leave one out and look again until the observation either holds or dissolves. Every one of these steps was possible, so the question could be answered instead of argued.

Each time, the output that prompted the question looked plausible. For a software vendor, that is a success. For a scientist, it is where the work starts. In scientific software, a plausible result is the beginning of the conversation, not the end.

Business software records things that already happened. A payment cleared; the software says so. Scientific software produces claims about what is probably true, and the person receiving the claim has to decide whether to believe it. Few products sit at either pole. But the closer a product sits to the second, the more its quality depends on something other than whether it runs correctly: whether a scientific community can build justified trust in what it outputs.

## Where Trust Came From

For several years I worked with a flow cytometry analysis platform that earned that trust, and I was part of how it did. The architecture was open at the points that mattered. A plugin interface let an algorithm appear inside the application as a population that users could gate, plot and compare. The interface was public, so anyone could build a plugin and share it: either our own team or the researchers who had just published the method. New methods did not have to wait for a product roadmap, and the ones the community cared about tended to arrive quickly. Results came back as ordinary parameters in standard files, so the data stayed portable.

What this allowed matters more than how fast it happened. A scientist who read about a new method could run it on their own data, next to the methods they already trusted, and decide for themselves. That is why openness in scientific software is not a developer convenience. It is a way of distributing scientific criticism. A closed product asks its users to trust one team’s judgment about which methods are good enough. An open one lets many laboratories test that judgment against their own data, and failures get found where they were produced.

Architecture was half of it. The other half was people. The training was about scientific judgment rather than buttons: what a transformation does to a dim population, what a method assumes about the data it is given, where an output should not be believed. One exercise did most of the work. Take a dimensionality reduction, remove a parameter or transform it differently, and rerun it. Put the two maps side by side. Participants learned how the method works, and how to recognize artefacts and distinguish parameter sensitivity from meaningful structure, by watching it happen. These exercises did not establish that a method was valid. They gave users a way to understand its behavior, recognize its limitations, and judge when its output deserved further scrutiny. Users did not trust the software because we told them it was validated. They trusted it because we gave them repeated opportunities to question it.

## When the Conditions are Missing

I came to appreciate these conditions most clearly when they were missing. Their absence is rarely apparent in a demonstration. It becomes apparent when a user encounters an unexpected result and wants to understand what produced it. Without a way to examine the method, its assumptions cannot be compared with a published reference. Without an independent analytical path, an output has nothing to be tested against. And when data cannot easily move in and out, reproducing a result elsewhere becomes a project instead of a step.

The consequences are structural, and they accumulate. A puzzling output becomes a question without an owner: the user cannot tell whether the data, the settings or the algorithm moved the result. When a transformation behaves differently from what its mathematics predicts and no second path exists to settle it, a defect and a disagreement look identical from the outside. The user’s doubt then has nowhere to go except back to the party that produced the result. None of this requires bad intent, and it is not an accusation: it is simply what happens to scientific trust when a tool is built to deliver answers rather than to survive questions.

## Three Conditions

Justified trust in scientific software depends on three conditions. Reproducibility, validation and auditability all matter, but they are not interchangeable. A result can be reproducible and still be wrong; an implementation can be transparent without being correct. What matters is whether the evidence and the means to examine it are sufficient for someone else to assess the claim independently, to a degree appropriate to its intended use. The three conditions below make that assessment possible. They do not replace validation, and they do not guarantee correctness.

Users must be able to contest a result. They need to see which method produced it, what that method assumes, and what an alternative would have said. Without an independent path to compare against, a claim can only be accepted or refused, never tested.

Users must be able to reconstruct the analysis and move the data. Data and intermediate results must be able to leave the application and return without losing essential information. The parameters, software versions and transformations behind an output must also be recoverable by someone who was not present when the analysis was run. Portability makes independent examination easier; it does not by itself establish that the analysis can be reproduced.

The product team must support informed use. Documentation, training, support and honest statements of limits belong inside the scientific product, not after the sale. A result is trusted by a community that has been able to ask hard questions and got straight answers.

The obvious objection is that openness does not guarantee validity. An open ecosystem carries costs of its own. Extensions vary in quality. Each laboratory assembles its own combination of tools, which makes workflows inconsistent. Plugins often depend on specific versions of R or Python packages, so the same method can be hard to reproduce from one laboratory to the next. And when anyone can publish a method, someone still has to decide which ones to trust.

These costs are real, and closure is not the remedy. Curation is: named authors, cited papers, pinned versions and a visible record of what ran. Open architecture does not guarantee scientific validity, but it makes criticism, comparison and correction easier. The distinction that matters is between what architecture can do and what only evidence can do: architecture can enable or prevent independent evaluation, while validity has to be established through evidence.

Nor must every product publish all of its source code. A proprietary implementation is not the same thing as an unverifiable claim, and some algorithmic detail can legitimately be protected. For a product that keeps part of its method private, the minimum is a credible route to independent evaluation. That takes four things. The method’s assumptions and parameters have to be disclosed in a form others can read. Data and intermediate results have to be able to leave the application and come back. Validation evidence has to be shown on data the user can inspect. And there has to be a way to run an alternative method on the same data and see the difference. Beyond that minimum, the balance between disclosure and commercial protection depends on the product and its intended use.

## What AI Changes

AI can reduce the cost of producing scientific software. It does not reduce the cost of establishing why a scientific result should be trusted. AI-assisted development, automated testing, model monitoring and provenance tooling all help with reliability and traceability, but none of them establishes scientific validity. They speed up the production of code and outputs. Justifying an output still has to be done by people, at the pace trust moves.

Machine learning also makes every condition above harder to meet, because both the models and their outputs can change. A model checkpoint, its training data and its preprocessing become part of the evidentiary chain, so they have to be versioned and stay inspectable. Performance established at one site may not transfer to another, and it can drift over time. Validation must therefore account for the deployment context, with monitoring and reassessment where changes could affect performance. And the intended use and limits of a model have to reach the people who rely on it.

Reproducibility acquires a further difficulty, because foundation models and large language models are stochastic. That is not new in kind: t-SNE and UMAP also involve randomness, which is why the side-by-side exercise was useful, and a different arrangement of clusters does not by itself change a scientific conclusion. With large models the sources of variation multiply, and they need to be kept apart. Sampling is random by design, and temperature zero largely removes that source. Numerical and infrastructure-level nondeterminism can still make identical inputs return different outputs. And the system itself can change: a service may update the underlying model, its instructions or its preprocessing, sometimes without a new version identifier.

The standard cannot be identical bits in every case. Where identical outputs are not a realistic requirement, the standard should be stability of the substantive conclusion, supported by traceability: the model version identified, the settings recorded, and the variation across repeated runs measured and reported where it matters. Stability alone is not enough, because a model can return the same broad conclusion while its probabilities, confidence or subgroup performance shift materially, and whether that is acceptable depends on the intended use. A single draw from a distribution is not a finding.

Faster generation also compresses the judgment that used to be exercised informally while building. A prompt can encode assumptions about the data that nobody examines, and in a system that produces scientific claims that becomes a validation problem, which does not move at the speed of generation. So the question is less whether AI can produce another result than whether the surrounding system lets a scientist examine it, challenge it and learn from it.

## How to Test This

When evaluating scientific software, there is a test that needs no source code and no audit. Ask to be shown how to disagree with an output.

Take one result and ask the people behind it to challenge it in front of you. Watch what they open, what they export, what they are willing to rerun, and what they admit the method cannot do. A team that built for trust will have an answer ready, and will usually be glad to be asked. A team that built for the appearance of certainty will demonstrate something else. What counts is whether a meaningful challenge is possible for the product’s intended use, not how polished the demonstration is. For the people building the software, the same test becomes a design brief: make unexpected results investigable, be candid about limitations, and treat criticism as part of the product rather than a threat to it.

The same test applies to the models now entering laboratories and clinics. Their outputs can be fluent, quantified and plausible, which is precisely why they need to remain open to challenge. What a system offers for disagreement will help determine whether it becomes an instrument of science or merely a source of answers.

And that is precisely the trap scientific software has to avoid: a result that cannot be rejected cannot really be accepted either. It can only be believed.