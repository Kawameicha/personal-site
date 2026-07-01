---
title: "Software Has Become Cheap. Institutional Knowledge Has Not."
date: "2026-07-01"
excerpt: "Agentic coding has made software dramatically cheaper to build. But it has also exposed a different bottleneck: understanding how organizations actually work. As implementation costs collapse, institutional knowledge, not code, becomes the scarce resource that determines whether transformation succeeds."
readingTime: "14 min"
---

Early in my career I worked on software built almost entirely by former bench scientists. We rarely had to explain why a workflow mattered because we had all performed it ourselves. Looking back, I realize we weren't unusually insightful. What we possessed, without really appreciating it at the time, was institutional knowledge embedded directly inside the development team.

Today, agentic coding has changed the economics enough that a single person can produce working software in hours that would have taken a team weeks. Building software has become dramatically cheaper. Understanding the organization it is meant to serve has not. The constraint has shifted from engineering capacity to something harder to name and very difficult to buy.

This is not a point about documentation. Most organizations have documentation. What they lack is an accurate account of the distance between what the documentation describes and what actually happens. That gap between the formal model and the operational reality is where most transformation projects go wrong. And it cannot be closed by a language model, however capable, because it was never written down in the first place.

## The Cost That Didn't Fall

For two decades, digital transformation has been sold as a technology problem. Buy the right platform. Migrate to the cloud. Implement the EHR. The implicit promise was that organizational performance would directly follow from technical capability, as if getting the infrastructure right was the hard part.

This belief was always partially wrong. What made it plausible was that technology genuinely was the constraint for a long time. Building functional software was expensive, slow, and required specialized knowledge concentrated in teams most organizations couldn't easily staff. The friction of implementation masked the friction of understanding.

Agentic coding has reduced the cost of building software by an order of magnitude. That changes more than engineering productivity. It changes who builds software. Prototypes now emerge across departments, from people who understand their local problem but not the wider institutional context, or from software specialists who can build quickly without spending months immersed in the domain. The result is paradoxical: as software becomes easier to create, it becomes easier to encode misunderstandings of how an organization actually works.

Across healthcare, research, and consulting projects, I have repeatedly seen the same pattern. What gets encoded is the documented organization: the process maps, the policy manuals, the org charts. What doesn't get encoded is everything accumulated around and between those documents: the approval chains that exist because of a near-miss nobody ever wrote up, the workflows designed around people who left years ago, the decision rights that shifted during a merger and were never formally reassigned, the clinical protocols modified three times by three different physicians with none of those modifications visible to anyone outside the ward. This is the institutional knowledge that has not become cheaper to acquire.

In economic terms, this changes what is scarce. As the marginal cost of producing software continues to fall, competitive advantage shifts toward resources that do not scale in the same way: institutional memory, domain expertise, trusted relationships, and the ability to distinguish documented process from lived practice. The bottleneck is no longer writing code. It is knowing what the code ought to embody.

## What Technology Exposes

I have watched enough transformation projects fail for essentially the same reason that I no longer think these are a series of unfortunate coincidences.

One project that stayed with me involved an AI knowledge assistant for administrative staff. During testing, it answered the documented questions remarkably well. The problem appeared after deployment. Those were not the questions experienced staff actually struggled with. Their real work consisted of unusual edge cases, conflicting regulations, and situations requiring interpretation rather than retrieval. The system had learned the organization's documentation. It had not learned the organization's work. Since moving into consulting, I have become increasingly convinced that this institutional failure mode is remarkably consistent across organizations.

Looking back, I no longer think the system failed because of its retrieval capabilities. It failed because we had built it around what the organization had written down rather than what its experienced staff actually relied upon. The post-mortem attributed the failure to change management. The specification was never questioned.

This is the pattern. Technology exposes hidden disagreements. It rarely creates them. Once I started looking for these failures, they became predictable. Long before implementation, they were already present in the assumptions the project team never explicitly examined.

## The Assumption Problem

These questions are not exotic. They appear, in some form, in almost every complex transformation project. What distinguishes successful projects is not that they avoided them. It is that someone insisted on answering them before proceeding.

The assumptions almost always cluster around four questions.

*How does work actually happen?* Not how the process map says it happens, but how it happens on a Tuesday afternoon when the senior clinician is off and someone needs to decide quickly.

*Who really owns decisions?* In healthcare settings this is particularly pronounced: clinical authority, administrative authority, and institutional seniority operate on separate tracks that intersect in ways that are context-dependent and rarely formalized. The person whose sign-off is required is often not the person whose judgment is actually deferred to.

*What does success actually mean?* Reducing medication errors and reducing pharmacist overtime may both appear as project objectives. They may not be simultaneously achievable. No one will have said this during requirements gathering, because saying it would require a conversation that no one has scheduled.

*Which constraints are genuinely fixed?* Some are regulatory or technical. Others are institutional habits elevated to the status of constraints through repetition. The people who know the difference often have an interest in not having the question asked.

These questions have always existed. What has changed is whether economic conditions forced anyone to ask them.

## Why This Is Getting Harder

We have been saying "people and process before technology" for decades. What has changed is where the cost now lies and what that cost was quietly doing.

Expensive software imposed a form of accidental governance. When implementation was costly, requirements had to be argued over before code was written. Those arguments were often frustrating, but they forced organizations to expose at least some of their hidden assumptions before committing to a system.

Agentic coding removes that economic constraint. That is overwhelmingly positive. But it also removes the discipline that friction imposed. When building becomes inexpensive, there is less pressure to resolve disagreements before implementation. It becomes easier to build first and discover later that different departments were solving different problems all along.

Looking back, I understand better why that early team of bench scientists worked so well. We weren't translating between domain experts and developers. We were both. The knowledge required to specify the software correctly was inside the people writing it.

I have also seen the opposite: exceptionally capable engineers who optimized code, reduced execution times, and modernized architectures, yet produced systems that made the underlying work harder because no one had questioned whether the documented process reflected what practitioners actually did. The software became more efficient. The organization did not.

That asymmetry is growing. Our ability to build software is accelerating far faster than our ability to understand the institutions it is meant to serve.

## What This Means for Healthcare AI

The stakes of this problem are not uniform across industries. In healthcare, implementing a system on top of an institutional model that doesn't match reality produces clinical consequences, not just operational ones.

Working across pharmacy and biomedical software, I learned early that many of the most important safety checks were never part of the formal workflow. They existed as habits, conversations, and small adjustments accumulated over years by people who had learned what could go wrong. Digitizing the documented process therefore digitized only part of the system. A system that enforces a workflow no one follows produces workarounds. Workarounds produce errors. The errors are attributed to the system, or to the users, or to poor training. The underlying cause, that the system was built against a process that didn't exist, may never be identified.

Healthcare AI compounds this in a specific way. Validation frameworks for algorithmic clinical tools are calibrated to a formal model of practice: defined inputs, defined decision points, defined outputs. What they do not capture is the informal layer through which clinical practice actually operates. A deterioration algorithm can be validated against a dataset. It cannot be validated against the specific nurse-to-physician escalation culture of a particular ward on a particular shift, or against the informal triage that happens before any formal escalation occurs. That culture is the context in which the algorithm will actually operate. It is not in the validation package.

This is not an argument against validation. It is an argument that validation addresses a narrower question than is often assumed: whether the algorithm performs as specified under specified conditions. It leaves open the larger question of whether those specified conditions match operational reality. That gap is the same gap that has undermined transformation projects for decades. Healthcare AI does not eliminate it; it raises the stakes of ignoring it.

This connects to a distinction I have explored elsewhere in this series: between deploying a tool and embedding it into an institution's actual practice. Validation gets you to deployment. The harder work comes after.

## The Part That Cannot Be Automated
There is a version of the counterargument that points to AI as the solution to this problem. Language models can be trained on institutional data, parse communications and documentation, and surface tacit knowledge. The bottleneck of institutional understanding can be addressed with more technology.

There is a genuine insight here. Language models are remarkably good at reconstructing the traces organizations leave behind: documentation, emails, tickets, meeting notes, standard operating procedures. They can surface inconsistencies and reconstruct surprisingly accurate approximations of how an organization operates.

What they cannot do is resolve the underlying disagreements that tacit knowledge was managing. The informal exception, the undocumented workaround, the decision made by convention rather than policy: these exist not because they were never captured, but because capturing them would have required resolving a disagreement that no one wanted to have. The workaround is the resolution. It is the organization's way of holding two incompatible requirements in a stable configuration.

Detecting the workaround answers an analytical question. Resolving it answers an institutional one. The judgment required to navigate that intervention, identifying which constraints are genuinely fixed, which stakeholders have formal authority versus actual influence, what the organization can absorb versus what it will reject, is not a technical judgment. It is the kind of judgment that comes from having operated in complex institutions, made decisions under ambiguity, and been wrong in specific ways enough times to have developed calibration.

That judgment has not become cheaper. If anything, it has become rarer, because the organizations that most need it are investing most heavily in the tools that appear to substitute for it.

## Closing
The falling cost of building software is real and significant. It should free the resources previously consumed by implementation. Whether those resources are redirected toward institutional understanding, or toward building more software more quickly on the same unstable foundations, is a choice organizations are making right now, mostly without framing it as a choice.

Software is no longer the scarce resource. Institutional knowledge is. Agentic coding changed the economics of building software. It did not change the economics of knowing. If anything, it made that knowledge more valuable than ever, and the cost of not having it harder to hide.
