---
title: "Cleared for Deployment?"
date: "2026-7-08"
excerpt: "Before an aircraft enters controlled airspace, someone explicitly authorizes the crossing. Clinical AI has no equivalent moment. Models routinely move between hospitals without anyone formally assessing whether the patients, documentation practices, and workflows resemble those they were trained on."
readingTime: "16 min"
---

Imagine a sepsis prediction model trained in a tertiary referral hospital being deployed in a rural emergency department. The integration succeeds. The dashboard loads. Clinicians begin acting on risk scores. From an implementation perspective, everything works. But nobody pauses to ask the question that matters most: does this hospital actually resemble the one the model learned from? In most hospitals, that question belongs to nobody.

Aviation formalizes exactly that kind of decision. Before an aircraft enters controlled airspace, someone with current knowledge of actual operating conditions explicitly authorizes the crossing. That authorization is documented and assigned to a person with defined responsibility. If conditions change, the authorization can be withdrawn.

Clinical AI has no equivalent moment. A model trained on data from one clinical environment crosses into another, and that crossing is managed, if at all, as a technical integration problem. Does the interface connect? Do the data feeds work? Will the output display correctly in the EHR? These are real concerns.

The question that rarely gets asked is whether the model built in one clinical environment will behave as intended in the one it is about to enter. Validation answers whether a model can work. Deployment authorization answers whether it should work here. The reasons are structural rather than accidental, and their consequences often remain invisible until months after deployment.

## What crosses the line

A clinical AI model is not a neutral tool that performs a calculation. It is a set of assumptions about the world, compressed into weights and parameters during training: which patients were represented in the data, how their conditions were documented, which workflows produced the records, what the prevalence of the target condition was. The model internalized all of these patterns, whether or not anyone explicitly recognized them.

When such a model is deployed in a different environment, those assumptions travel with it. They do not announce themselves. The model continues to produce probabilities, risk scores and flags that look identical regardless of whether the assumptions underlying them still hold. Validation cannot eliminate this problem because validation itself is performed under particular conditions. The question is not whether the model was validated. It is whether those conditions still hold. The interface does not change. At first glance, nothing looks wrong.

The consequence is not simply that the model might underperform. It is that the model may arrive already poorly matched to its new environment, systematically off in ways that are invisible to everyone receiving its outputs, including the clinicians who will use them and the administrators who authorized the deployment.

This matters because poor fit at deployment and drift are not the same failure, even though they are often discussed together. Drift is what happens when a model that was accurate at deployment gradually loses accuracy as the world changes. Poor initial fit is what happens when a model was never accurate in this environment, from the first day it was used. A model can therefore begin its life in production with one problem and acquire another over time. Neither produces an immediately obvious signal. Both can accumulate for months before anyone has the evidence to name them.

This is governance latency: the gap between making the decision and discovering whether it was the right one. It is not unique to healthcare AI, but it is particularly acute here. The signal is diffuse because the consequences are distributed across hundreds or thousands of patients rather than concentrated in a single visible event. By the time the pattern becomes visible, the people who authorized deployment have usually moved on. The software behaves exactly as designed. That does not mean it is behaving appropriately.

## Two environments, one model

The gap between a model's training environment and its deployment environment has several dimensions. Three are worth naming because they are routinely underestimated.

The most visible is patient population. The model in our opening example learned medicine in a tertiary academic center, where many patients have already passed through multiple layers of triage before they arrive. A community hospital sees a different severity distribution, a different comorbidity profile, a different proportion of patients presenting early. The model's internal thresholds were set against one distribution. Applied to another, they will be systematically off in predictable directions, without producing any visible error signal.

Most of the time those differences accumulate quietly. Occasionally they become impossible to ignore. During the first months of the Covid-19 pandemic, patient populations changed so abruptly that assumptions embedded in existing models no longer matched the patients arriving at hospital doors. Breast cancer screening collapsed during the first months of the pandemic. In some health systems it fell by almost 90 percent. Overnight, models trained on pre-pandemic patient flows found themselves making predictions about a population they had never seen before. The problem was visible because the shift was sudden. In calmer periods, the same mismatch accumulates quietly, and no one thinks to check.

Less visible but often more consequential, the documentation environment. Clinical AI models trained on structured data have absorbed the coding practices, completeness norms, and workflow conventions of wherever they were built. Those conventions are not universal. The same clinical state produces different records in different institutions, coded at different points in the care pathway with different levels of completeness. Working across laboratory environments, I never saw two sites produce identical measurements without first agreeing on protocols. The biology was the same. The numbers rarely were. A blood sample processed for circulating tumor cells yields different counts depending on the platform, the operator, and the pre-analytical handling.

Clinical documentation deserves the same skepticism. The clinical record looks like a measurement, but it is also a product of the clinical environment that produced it. Studies of ICD coding reproducibility have found that independent coders agree on the principal diagnosis in only about two thirds of cases. The same clinical presentation, documented by different people in different institutions, produces systematically different records. A model trained on one institution’s documentation conventions silently inherits those differences when it is deployed somewhere else.

There is also a temporal dimension operating at two speeds. One is seasonal: a model calibrated against a summer patient mix will encounter a different distribution in winter flu season, not because the model has drifted, but because the population has moved around it in a known and recurring pattern. The other is demographic. Patient populations age. Multimorbidity accumulates. Neither happens overnight. Yet both gradually move today’s patients away from the population the model originally optimized on. It is visible only in retrospect, once someone compares the current population against the one the model was built on. In practice, that comparison rarely happens, because no one has been assigned to ask the question.

Each dimension individually introduces misalignment between what the model learned and what it encounters. None is dramatic on its own. Together they move the model's world away from the one it learned. The model continues to produce answers. Nobody immediately realizes they are answers to a slightly different question.

## The crossing no one authorizes

Aviation assumes that failure, when it comes, will be sudden, concentrated and impossible to ignore. That assumption shapes everything that follows. Nobody waits for a collision before questioning whether separation standards were adequate. Formal authorization exists precisely because catastrophic systems provide little opportunity for gradual correction.

Clinical AI fails differently. A poorly calibrated model rarely harms one patient catastrophically. Instead it is slightly wrong for hundreds or thousands of patients. One unnecessary scan here. One delayed referral there. One missed opportunity somewhere else. Each decision is individually plausible. The pattern only becomes visible in aggregate. By then months may have passed. The absence of immediate consequence is not reassurance. It is the condition that makes formal structure necessary.

Because the signal is diffuse, the deployment crossing is treated as routine. The integration is complete long before the deployment decision really is. The urgency that attaches to an immediate consequence is absent. In its place there is a social accommodation. I’ve heard variations of the same reassurance in countless deployment meetings: The populations are similar enough, the vendor validated it elsewhere, clinicians will notice if anything looks wrong.

That social accommodation is not governance. It cannot be revisited. It assigns accountability to no one. It leaves the clinical staff, who will be the first to notice that something is off, without any formal mechanism to escalate what they are observing. How that informal escalation then fails once the model is running is a separate problem. The point here is that it should not be the primary mechanism.

A written deployment authorization does not need to be elaborate. It simply forces the questions that otherwise remain implicit. Who was the model trained on? Who are we about to use it on? Where do those populations differ? Are those differences acceptable for this use case? If we think they are, who is willing to sign their name beneath that judgement? 

Writing changes the conversation. A verbal agreement disappears into memory. A signed assessment becomes an institutional decision that can later be revisited. That, in turn, forces specificity. It also creates accountability. Someone has accepted responsibility for the judgement they made.

## What the difference looks like

The Epic Sepsis Model was deployed across hundreds of hospitals in the United States before independent external validation found that its performance was lower than originally reported. One large external study reported an AUC of 0.63, substantially below published performance estimates, for a model already embedded in clinical workflows at scale. Earlier evaluations had not established how the model performed across heterogeneous deployment environments: different patient mixes, different documentation practices, and different disease prevalence. The formal question of fit was never asked at deployment time. Governance latency made the problem invisible until independent researchers looked for it.

What would have prevented this? Not better algorithms. A process that required explicit comparison between training population and intended deployment context before large-scale rollout.

Duke’s Sepsis Watch illustrates what this looks like in practice. Before extending the model beyond its original development setting, Duke embedded governance and monitoring into the deployment workflow with clinical and technical leaders. When later evaluated at Summa Health, a community hospital in Ohio that is geographically distinct from Duke’s academic environment, performance remained robust, showing better transportability than many independently developed models achieve. The contrast is not about algorithmic quality. It is about whether the question of fit was asked before deployment at scale.

Even a well-governed deployment is not a static achievement. Anyone who has spent time at the bench knows that positive and negative controls are not optional paperwork. They are how you convince yourself the experiment is still behaving as expected. The equivalent in clinical AI is building known-outcome cases into ongoing monitoring, so that performance is verified against a reference rather than inferred from silence. Most deployments do not do this. Clinical AI needs the same discipline: continuous verification, not retrospective explanation.

## Who authorizes the crossing

Regulation increasingly requires models to be monitored throughout their lifecycle. It says much less about the institutional decision that permits deployment into a particular clinical environment. Yet that is the moment when someone with both technical knowledge and clinical authority accepts responsibility for the fit between the model and the population it is about to serve. Governance latency begins the moment that authorization is given. From that point onward, every month that passes without asking whether the model still fits its environment increases the distance between responsibility and consequence.

Governance failure in healthcare AI is structural rather than personal. The people with the authority to authorize a clinical AI deployment are typically not the people with the knowledge to evaluate population fit, documentation environment differences, or calibration assumptions. They operate within frameworks built around budget, timeline, regulatory clearance, and vendor track record. Those frameworks do not contain a category for population fit.

This is governance latency operating at the institutional level. By the time poor deployment fit becomes visible, the people who authorized the decision have moved on. Clinical staff adapt to outputs that seem off, while patients receive care informed by a model that was never accurate in this environment. Neither clinicians nor patients had a formal role in the authorization.

Addressing this requires making the gap assessment a formal step in the authorization process rather than a technical appendix. It should require sign-off from someone able to evaluate population fit, documentation practices, and calibration assumptions before approval is granted. This requires two capabilities that are rarely combined in a single role: technical understanding of the model’s training context, and clinical understanding of the environment it is entering. The governance question is how to put both in the room at the moment the crossing is authorized.

Every hospital already has procedures for introducing a new medication or commissioning a laboratory instrument. Each requires someone to verify that local conditions are suitable before patients are exposed to risk. The verification is documented. It is signed by someone accountable for it. Clinical AI deserves an equivalent moment. The question is not whether a model has been shown to work somewhere. It is whether anyone has accepted responsibility for deploying it here.