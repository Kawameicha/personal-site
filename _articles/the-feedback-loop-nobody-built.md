---
title: "The Feedback Loop Nobody Built"
date: "2026-06-17"
excerpt: "Healthcare AI governance focuses heavily on deployment and validation. Without someone responsible for learning from real-world performance, clinicians become the only feedback loop that reliably functions."
readingTime: "12 min"
tags: ["deployment", "validation", "workflow"]
---

There is a version of healthcare AI deployment that looks like success. The model is validated on a held-out test set. Performance metrics are acceptable. Clinical leadership signs off. The system goes live. Clinicians receive alerts, risk scores, or decision support outputs. Some act on these. Most of the time, nothing obviously bad happens.

What is almost never built into this picture is a mechanism for knowing whether any of it worked.

## The Open Loop

In control systems engineering, a loop is "open" when the output of a process has no pathway back to its input. A thermostat with no thermometer is an open loop: it heats the room, but cannot know what temperature the room has reached. Healthcare AI, by and large, operates the same way.

The model generates a prediction. A clinician sees it, ignores it, acts on it, or documents nothing about what they saw. The encounter closes. The prediction is never matched against what actually happened, or if it is, the reconciliation happens in a research database that nobody with operational responsibility ever inspects. The model does not update. The institution does not learn. The loop is open.

The pattern is older than machine learning. Anyone who has worked in a community pharmacy will recognize it. Alert systems for drug-drug interactions fire constantly, and pharmacists override most of them, not because the alerts are always wrong, but because the signal-to-noise ratio trains clinicians to treat them as ambient noise long before they can distinguish a genuine interaction from a spurious one. The decision logic is invisible, the override is undocumented, and the system never learns that its threshold is calibrated for a world that does not resemble the dispensary floor.

Sepsis prediction brought the same dynamic into the hospital at scale. The Epic Sepsis Model was deployed across hundreds of US hospitals, validated internally by its developer on historical data that did not reflect the patient populations of many of the institutions deploying it, and with no mechanism for independent ongoing monitoring built into its architecture.

In early 2020, COVID-19 arrived and the model's fragility became visible. The proportion of patients generating sepsis alerts per day more than doubled, even as total hospital census fell by 35%. Total alert volume rose by 43%. The model had not changed. The patient population had. At the University of Michigan, nurses reported being overalerted at levels that felt untenable, the alerts were paused in April 2020, and the experience contributed to growing scrutiny of the model's performance. Across the other 23 hospitals studied, no equivalent mechanism existed. The signal that something had broken was absorbed, invisibly, into already-overwhelmed clinical workloads.

The following year, when researchers published the external validation that had not preceded widespread deployment, the findings confirmed what the COVID stress test had already suggested operationally: the model failed to identify two thirds of sepsis patients despite generating alerts for roughly 18% of all hospitalizations. Its area under the curve was 0.63, substantially below the figures originally reported by the developer. The loop had been open since deployment. The only institution that noticed was the one where nurses had an informal channel to someone positioned to act.

This is not a technical failure. The infrastructure for closing the loop, linking model outputs to clinical decisions, decisions to outcomes, and outcomes back to model behavior, is buildable. Mayo Clinic's Enterprise Radiology AI team has published one of the few detailed accounts of what ongoing post-deployment monitoring actually requires: daily automated checks, weekly dashboard review, yearly audits, and a named team responsible for acting on findings. The reason most institutions do not do this is not that they lack the technical capacity. It is that no one is accountable for doing it.

## What an Open Loop Fails to Detect

The costs of an open loop concentrate in a failure mode most clinicians have no vocabulary for: calibration drift.

Calibration and discrimination are distinct properties of a predictive model. Discrimination measures whether the model ranks patients correctly. Calibration measures whether the absolute probabilities are meaningful: if the model outputs a 0.7 risk score for a hundred patients, do approximately seventy actually deteriorate? A model can discriminate well while being systematically wrong about probabilities, and this combination is dangerous because the standard metric, AUROC, measures discrimination only. A model that consistently overstates risk by a factor of two will report a healthy AUROC while corrupting every threshold-based clinical decision.

In the Epic Sepsis Model case, the positive predictive value at the standard alert threshold was 12%, meaning nearly nine in ten alerts were false positives. The rational clinical response is to discount the alert, and that is precisely what clinicians did. But override is almost never analyzed as data. It is treated as a workflow nuisance rather than as a signal that the model's calibration has broken down relative to the context it was deployed into.

This is where the open loop becomes self-reinforcing. Clinicians adapt to a miscalibrated system by adjusting their own thresholds downward. That adaptation is invisible to any monitoring infrastructure, encoding degraded model performance directly into clinical habit, in a way that is genuinely difficult to detect without structured feedback processes.

## Accountability Infrastructure That Nobody Reads

Regulators have not ignored the problem. The EU AI Act classifies clinical decision support among high-risk AI systems and imposes post-market monitoring obligations, transparency standards, and technical documentation requirements. The FDA's framework for Software as a Medical Device contemplates continuous performance monitoring for AI and ML-based systems. Explainability dashboards and audit logs are increasingly standard deliverables in enterprise clinical AI procurement.

The gap is not between the existence of this infrastructure and its absence. The gap is between accountability infrastructure as built and accountability as practiced.

Audit logs are designed for regulators and legal defensibility, not for the clinical informaticist trying to understand why the sepsis alert fired forty times in a shift and was overridden thirty-eight of them. Post-market monitoring provisions specify outputs: reports, documentation, evidence of review. They do not specify the organizational processes that would generate meaningful signal, and still less who is responsible for acting on what those processes surface.

The strongest version of this observation is not that the infrastructure is illegible, though it is. It is that the regulatory frameworks, as currently written, do not require anyone to own the learning process. They require documentation that learning could in principle occur. That is a different obligation, and it produces a different institutional response: compliance without detection, audit trails without audit.

## Nobody Owns the Loop

The open loop is not sustained by ignorance. Most people involved in healthcare AI deployment understand that post-deployment monitoring matters. The FDA says so. The academic literature says so. Vendor contracts frequently include lifecycle language.

It persists because the incentive architecture for healthcare AI concentrates on two events: the sale and the validation study. Both are legible, bounded, and amenable to performance claims. Post-deployment monitoring is none of these things. It requires sustained operational investment and, more importantly, clear attribution of responsibility across parties with frequently conflicting interests.

Consider the structure as it actually exists. The vendor owns model development and initial validation. The hospital owns deployment and workflow integration. Clinical departments own day-to-day use. Risk management owns liability documentation. Nobody owns longitudinal performance. That gap is not accidental: every party has an incentive to treat monitoring as someone else's responsibility, and no party has an unambiguous obligation to surface findings that may be inconvenient for another.

The Epic COVID alert surge makes the ownership gap visible. The model had been validated internally by its developer on historical data that did not reflect the patient populations of many of the institutions deploying it, its architecture made independent monitoring difficult, and widespread adoption proceeded without external validation. Then COVID hit. Alerts doubled as a proportion of patients across 24 hospitals simultaneously. The signal was the same everywhere. The response was not: at Michigan, nurses reported being overalerted at levels that felt untenable, and the hospital paused the model. At the other 23 hospitals, the loop stayed open. What differed was not the data available. What differed was whether anyone was positioned to act on it.

When none of the conditions for a functioning feedback loop are met, a named owner, a feedback channel legible to clinicians, and organizational tolerance for inconvenient findings, accountability does not disappear. It gets redistributed silently to the clinicians who absorb the cognitive cost of a miscalibrated system, and to the patients who absorb the clinical cost.

## Coda

What the open loop reveals is something specific about how healthcare institutions relate to evidence generated after a decision has been made. The validation study closes the question of whether to deploy. The sale closes the question of who is responsible for performance at the point of procurement. What neither closes is the question of whether the system is still doing what was claimed, in the wards and dispensaries and ICUs where its predictions actually land.

The only feedback loop that reliably functions in most deployed healthcare AI systems is clinician adaptation: the pharmacist who has learned to dismiss the interaction flag, the intensivist who has calibrated her threshold downward after too many false positives, the nurse whose informal escalation, if she is fortunate, reaches someone positioned to act. That adaptation is real, local, and invisible. Not missing data. Missing ownership.