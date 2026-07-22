---
title: "Explainability Is Not About Explaining the Model"
date: "2026-05-20"
excerpt: "In healthcare and science, trust rarely comes from understanding every internal parameter. Explainability is about building systems people can safely reason with, not exposing every detail of how they work."
readingTime: "12 min"
tags: ["trust", "human", "judgment"]
---

Long before large language models, people were already dealing with different versions of the same debate: whether complex systems could be trusted when their internal representations were difficult to explain directly.

I started in single-cell biology and computational analysis at a time when high-dimensional methods were expanding rapidly. Traditional manual visual strategies were giving way to dimensionality reduction techniques, clustering algorithms, and increasingly complex statistical pipelines. The technical capabilities were improving quickly, and yet trust often lagged behind.

## The Familiar Anxiety Around Black Boxes

One reaction appeared repeatedly whenever new analytical methods emerged:

> “But can we explain what the algorithm is doing?”

The concern was legitimate. People asked to rely on transformations and representations they cannot directly inspect should challenge the tools placed in front of them. Moving from manually defined analytical steps on a handful of parameters to projections across dozens of dimensions naturally introduces skepticism. Working with scientists, one would expect nothing less.

To many users, this feels like losing interpretability. But something about the discussion always felt incomplete to me, because medicine, biology, and science in general have never operated through fully transparent reasoning in the first place.

### Humans rarely explain their own decisions completely

Even before computational biology, I had already spent time in pathology, clinical environments, and pharmacy settings. I had watched clinicians interpret medical imaging, histological slides, laboratory values, and patient presentations. I had also seen how pharmacists validate prescriptions by combining formal guidelines, biological understanding, patient context, and practical judgment developed through repeated exposure to real cases.

Much of expert practice relies on pattern recognition accumulated over years of experience.

An experienced pathologist often recognizes abnormal tissue architecture almost immediately. A radiologist may identify a subtle abnormality within seconds. Clinicians frequently develop strong intuitions long before they can fully articulate every contributing factor behind a decision. This does not make their reasoning irrational. It means expertise itself is partly compressive.

Experts build internal representations from repeated exposure to large volumes of information. They learn to recognize patterns before they can necessarily formalize every intermediate cognitive step. In practice, medicine has always relied on partially implicit models.

The difference is that we often extend trust to human intuition more readily than to computational systems.

## What Actually Creates Trust

As analytical systems became more sophisticated, one lesson became increasingly clear: trust rarely came from fully understanding the internal mathematics alone.

Most users neither want nor need to inspect every computational detail. Very few researchers ask to derive the optimization procedures underlying dimensionality reduction algorithms. Clinicians do not reconstruct the physics of MRI systems before interpreting scans. Some degree of interpretability certainly helps, but science has always depended on building partial representations before complete understanding emerges. Otherwise, discovery itself becomes difficult: if we fully knew what we were looking for in advance, much of research would collapse into simple verification.

What actually creates trust is something else entirely: context, validation, reproducibility, and operational consistency.

Scientists trust methods when results align with controls, reproduce across experiments, and behave predictably under changing conditions. Clinicians trust systems when outputs remain coherent with existing medical understanding and can be integrated safely into decision-making processes.

The central question is usually not:

> “Can I explain every internal parameter?”

It is more often:

> “Can I understand when this system is reliable, when it is uncertain, and how I should act on the result?”

That is a fundamentally different problem.

## The Mistake In Many Explainability Discussions

A large portion of current AI discourse treats explainability as if it were primarily a property of models. This framing is often too narrow.

In practice, explainability rarely emerges from the model alone. It emerges from the larger the larger governance framework surrounding it: the controls, workflows, validation procedures, escalation mechanisms, and human decision structures that contextualize its outputs.

A prediction alone is rarely meaningful in healthcare. Outputs must exist within a framework that allows humans to evaluate confidence, compare against prior information, trace decisions, recognize failure modes, and intervene when necessary. In practice, explainability is rarely about achieving perfect transparency. It is about understanding enough of a system’s behavior to use it responsibly under real-world conditions.

A perfectly interpretable risk score embedded inside a poorly governed clinical workflow may still create unsafe outcomes if clinicians cannot verify inputs, understand data provenance, or recognize when the system is being applied outside its intended context. Conversely, a partially opaque model operating inside a highly constrained and validated framework may prove consistently reliable.

The distinction matters.

### The limits of pure transparency

There is also a deeper problem hidden inside some explainability demands: not all complex systems remain useful once reduced into simpler explanations.

Biological systems themselves are extraordinarily high-dimensional. Medicine frequently operates under incomplete information, uncertain causality, overlapping variables, and probabilistic reasoning. In some situations, forcing systems into overly simplified explanatory frameworks may reduce performance or create false confidence.

A useful representation is not necessarily identical to the reality it describes. A dimensionality reduction plot is not the biological system itself, just as a geographical map is not the territory it represents. Both are simplified operational representations designed to help humans navigate complexity while accepting some degree of distortion.

I saw versions of this tension years ago in single-cell analysis. Dimensionality reduction methods such as t-SNE or UMAP generated understandable skepticism because their transformations were difficult to interpret directly. Yet they also allowed researchers to visualize structures that were otherwise practically inaccessible.

The visualization itself was not the biological truth. It was a practical representation that helped humans reason about complex systems while remaining aware of its limitations. A world map distorts distances, surfaces, and geometry depending on the chosen projection, yet it remains enormously useful for navigation. Scientific representations often work the same way.

A useful representation is not necessarily a fully transparent one.

### Healthcare does not need infinite autonomy

These questions become especially important as AI systems move closer to clinical decision-making environments. Despite the current excitement around autonomous AI, most real healthcare deployments remain fundamentally centered around human oversight, constrained usage, and controlled delegation.

This is not simply technological conservatism. Regulatory frameworks such as the European AI Act increasingly formalize the idea that high-risk systems require meaningful human supervision, traceability, accountability structures, and clearly defined operational boundaries.

Healthcare rarely requires unconstrained autonomy.

It requires controlled delegation.

In practice, many successful systems do not replace human judgment. They structure it. They reduce search space, surface anomalies, prioritize information, or assist navigation through large volumes of data. The objective is often not to eliminate humans from the loop, but to create systems where humans and models can operate together under constrained conditions.

That changes the explainability requirement significantly.

The question becomes less:

> “Can the model explain itself completely?”

and more:

> “Can the organization govern how this system is used?”

## What Regulation Is Actually Trying To Protect

This is where many discussions around AI regulation become confused. Regulation is often portrayed as opposition to innovation. In healthcare, however, many regulatory requirements exist because clinical systems operate under asymmetric risk: a relatively small failure can produce outsized consequences.

As a result, healthcare organizations care deeply about traceability, auditability, reproducibility, accountability, escalation paths, and operational boundaries. These are not merely bureaucratic constraints. They are mechanisms for managing uncertainty inside environments where decisions carry real consequences.

Importantly, none of these protections require perfect interpretability of every internal parameter inside a model. What they require is the ability to understand how the system behaves in practice, where its limits lie, and how humans remain able to intervene when necessary.

## The Real Goal Is Calibrated Trust

The longer I work around AI systems, the less I believe explainability is fundamentally about exposing every internal mechanism. The real objective is building calibrated trust.

Users do not need systems that pretend uncertainty does not exist. They need systems whose strengths, limitations, confidence boundaries, and operational roles are understandable.

This is true for clinicians.

It is true for researchers.

And increasingly, it is true for AI systems themselves.

The irony is that medicine has always operated through a combination of explicit knowledge and partially opaque expertise. AI did not introduce uncertainty into healthcare. It simply made the uncertainty harder to ignore.

The challenge is not building perfectly transparent intelligence.

It is building systems that humans can safely reason with.