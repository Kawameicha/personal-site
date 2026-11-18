---
title: "Why Some AI Becomes a Product and Most of It Stays a Workflow"
date: "2026-11-18"
excerpt: "AI has made it dramatically cheaper to build working capabilities. But turning a capability into a dependable product still requires explicit boundaries, institutional knowledge, validation, ownership and an organization willing to stand behind it."
readingTime: "14 min"
tags: ["deployment", "ownership", "value"]
---

## What Got Cheap

The cost of producing working software has fallen sharply. For bounded tasks, one person can now assemble in an afternoon what could once take a small team a quarter: a tool that reads a trial protocol and extracts the schedule of assessments, a script that cleans an instrument export and plots it, an agent that routes incoming reports to the right queue. The demonstrations are real. The capability exists.

The reason is structural. Much of what made software expensive was never the central idea. It was the surrounding work: parsing awkward formats, writing glue between systems, handling the long tail of small cases that a competent engineer could anticipate and a specification could not list. Language models absorb a large share of that work because it is common, well documented and shaped like a pattern. What remains expensive is whatever is none of those things.

A prototype is, however, a peculiar kind of test. It is built by someone who knows what the output should look like, run on inputs that person chose, and judged by the same person. Every failure that occurs is seen by someone able to recognize it. The prototype usually therefore passes the one examination it was always going to pass. That says something real about feasibility but very little indeed about what happens when the author leaves the room.

## The Reality Check

A workflow that runs well looks autonomous, and the appearance comes from how autonomy is usually judged: by the absence of visible intervention. Not all intervention is visible, however, but it can be substantial.

It can take the form of someone who checks the first output of the day because they know the upstream export changes format when a particular site uploads late. Or someone who rereads the extracted table against the source because experience says the model is weakest on footnoted units. Not to mention someone who knows that a field labeled "date" means date of enrollment in one study and date of randomization in another, and corrects for it without comment. None of this appears in the output. Most of it lives in the person who built the workflow or sits next to it.

The hidden assumption is that the builder's tacit competence belongs to the environment rather than to the system. Once it is classed as environment, it drops out of the cost model, the risk assessment and the documentation, and the workflow seems to run itself. A more accurate description is that a person and a script form one system, and the person is the component that handles everything the script cannot name. Supervision catches errors. Tacit knowledge decides what counts as one.

An inversion exposes the gap. Instead of asking how much of the task the AI performs, ask what would have to be true for the task to survive the departure of the one person who understands it. The answer measures the distance between a workflow and a product. A workflow is a capability that works under particular circumstances, kept working by people who know what those circumstances are. A product is a capability whose operating conditions, dependencies and responsibilities have been made explicit enough that others can adopt, maintain and rely on it.

## Plausible Is Not Valid

Scientific software and healthcare expose this distance particularly clearly: outputs can be fluent, well-formatted, and wrong, sometimes with consequences that reach well beyond the software.

Take a survival analysis generated from a description of a study. The code runs, the Kaplan-Meier curves render, the hazard ratio arrives with a confidence interval. Whether the result is valid depends on questions the code does not answer: how censoring was defined, whether the arms were aligned to a comparable time origin, whether differences in follow-up between groups affect the interpretation of the estimate, and which estimate the analysis was meant to answer. A wrong choice produces output indistinguishable from a right one. Or take a classifier for tumor regions that performs well on slides from the scanner and staining protocol where it was developed. Its apparent performance on the development data says little about its behavior on another site's slides. Pharmacovigilance has the same structure. A suggested coding of a free-text adverse event to a standard term can be reasonable on its face and still change how a signal accumulates over time.

In each case functionality is a property of the software. Validity is a property of the relationship between an output and the world, under stated conditions. The conditions include the intended use as a whole, not only a model's performance on a test set. A researcher or clinician who relies on the output is relying on that relationship, not on the code. Reliance has a specific meaning here: being willing to act, and to defend the action later, without redoing the work.

That willingness depends on knowing where the result stops being trustworthy. A tool that is right most of the time and cannot say when it is not leaves its user two options, redo everything or trust everything. Neither is dependable behavior. A large part of the engineering in dependable scientific software goes into the third option: stating conditions of validity, detecting departures from them, and making a departure visible before a decision is taken on it.

## The Arrangement Around the Capability

AI makes it cheap to create functionality. It does not make it cheap to create dependability.
What, then, is a product? Not the model. Models are increasingly shared infrastructure, and a capability available to everyone cannot be what distinguishes anything. Not necessarily the workflow either, because a workflow describes steps and leaves open who stands behind them.

A product is the complete arrangement that lets someone who did not build a capability use it. It has repeatability: a result produced in March can be reproduced in November, which requires versioned models, pinned dependencies and recorded configuration. It has defined boundaries, a stated scope and a stated behavior outside it. It has an owner, a named function that decides what changes and answers when something breaks. It has change control, which matters acutely when a third party can update the underlying model and alter outputs while the surrounding code stays the same. It has integration into the systems where decisions are made, security review that someone is accountable for, and support that outlasts the enthusiasm of the original team. It also has an economics that survives its exceptions, which is a separate problem from building the first working instance.

AI lowers the cost of the first working instance, and not necessarily that of the hundredth. The first user receives what the builder already understands. The hundredth arrives with a different data export, a different approval chain and a different tolerance for error, and each difference turns into integration, validation or support work that someone has to pay for. Inference, monitoring, human review and assurance do not disappear because the code became cheap to write. In some products they make up most of the cost.

An older example is instructive, because different layers can become products independently. High-throughput sequencers were products in their own right, yet for some time there was no routine, accepted way to turn their reads into results a clinician could act on. That layer required analysis pipelines, validation, reporting conventions and vendors who stood behind them. The instrument was a product at one level. A clinical offering was a further product built around it, and the value arrived with that arrangement, not with the machine alone.

A product is therefore not simply a workflow packaged into software. It is a promise that an organization is willing to stand behind. Packaging is incidental. The promise is what a buyer acquires, and it is what makes liability, support obligations and boundary definitions unavoidable instead of optional.

## Where the Distinction Bends, and What Stays Scarce

The distinction has exceptions that matter. Some workflows are products. A narrowly scoped workflow with defined inputs, an accountable owner and a support structure is a product whatever it is called, and being a workflow disqualifies nothing. Some internal tools are extremely valuable, often more so than commercial equivalents, because builders and users share context and the organization already carries the responsibility. An internal tool does not have to make a promise to a stranger. And not every application should become a standalone offering. A promise has a price, and a team may reasonably decide that a capability is worth having and not worth warranting.

Productization is also not commercialization. A capability can be made dependable and still fail to sell at a price that covers its costs. A poorly productized service can earn revenue because its customers accept heavy human involvement. A managed service is a legitimate middle form: the provider keeps people in the loop and promises an outcome, not software that others operate. Dependable, repeatable and sustainably priced are three separate tests.

The distinction is therefore not a ranking. It marks who bears the responsibility and whether that has been made explicit. Cheap capability produces two different situations: one where the promise is implicit and held by the people nearby, and one where it is explicit and held by an organization. Trouble begins when something built under the first is relied on as if it were the second. An internal tool crosses a team boundary. A prototype's output enters a regulatory submission.

Building is cheap but domain expertise is scarce because it determines what wrong looks like, and a cheap tool cannot supply that by itself. Institutional knowledge, the accumulated record of why things are done as they are, is scarce for the same reason. Distribution and trust follow: a competent tool can be replicated, a track record cannot. Integration into the routines, approvals and incentives of a hospital or a development program remains slow work. Scarcest of all is the ability to take responsibility for an entire operating capability over years, failures included. It cannot be bought at the margin, and it cannot be generated.

A usable test follows from this. For any AI capability about to be depended on, finish the sentence "Whoever relies on this can assume...", then ask who would sign it and what happens to it a year after its author has moved on. If nobody can complete the sentence, or nobody is willing to stand behind the answer, the capability is not yet a dependable product. It may still be a good one. The harder question is where promises end up if they become the scarce good. Large organizations hold advantages in trust, distribution and regulatory standing. Smaller ones can make narrower, more explicit promises with less overhead, and cheap functionality may let them compete where they could not before. What it does not obviously make cheaper is credibility. Whether lower development costs open product creation to more organizations, or the remaining price of trust and responsibility reinforces those that already hold it, may not have a single answer across domains.