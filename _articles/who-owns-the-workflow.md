---
title: "Who Owns the Workflow?"
date: "2026-09-09"
excerpt: "AI can leave accountability with the person making the final decision while moving control upstream into models, thresholds, interfaces, and governance. The question is who actually owns the workflow when those no longer align."
readingTime: "14 min"
tags: ["workflow", "ownership", "governance"]
---

Pharmaceutical companies are putting large language models into their scientific research process, somewhere in the pipeline where a researcher reviews literature, synthesizes prior findings, and drafts an interpretation to guide the next experiment. The technology is no longer the obstacle, and the decision itself can look straightforward.

Underneath that, the functions splinter. The scientific function is the intended user, but IT manages the infrastructure. More often than not, a vendor built the model and keeps updating it. Somewhere, a product team owns the roadmap, while compliance answers for how a conclusion was reached. None of these functions, on paper, owns the workflow outright.

In practice, each of them ends up making decisions that used to belong, without much discussion, to the scientist doing the reading. The question nobody asks, at least not out loud, is who actually controls the workflow now.

## Accountability Is Not Control

It would be a mistake to romanticize the period before AI entered a workflow like this one. A scientist reviewing literature was never fully autonomous: methodology, standard operating procedures, regulatory requirements, and institutional review processes constrained them long before any model arrived. But within those constraints, the person accountable for a judgment and the person making it were usually the same. They read, they interpreted, they decided, inside rules fixed and visible enough to reason about and, if necessary, argue with.

AI workflows disturb that alignment, not by adding a new constraint but by moving a familiar one earlier and making it harder to see. What counts as a plausible answer, what threshold triggers review, what documentation makes a conclusion usable downstream: all of that gets decided before they open the output, by people never named as decision-makers over the science itself.

## Residual Control

There is an older idea, from the economics of the firm, that separates ownership from use more precisely than an org chart does. Sanford Grossman and Oliver Hart, later joined by John Moore, argued that owning an asset is not mainly about the right to use it day to day. It is the right to decide what happens to it in situations a contract failed to specify: the residual right, once the explicit rules run out. A landlord who leases an apartment does not choose the tenant's furniture. What the landlord keeps is the right to decide, wherever the lease is silent, what happens next. That reserved right, not the lease's language, is what they treated as the substance of ownership.

Applied to a workflow, not literally as an economic asset but as a way of thinking about decision rights, the same distinction separates three things usually folded into one word. Accountability is who answers for the outcome. Control is who can actually determine what happens. Ownership, properly, is whoever holds the legitimate authority to exercise that control. The formal owner of a workflow is whoever is named accountable for the outcome. The holder of residual control, in this sense, is whoever can decide what happens in the cases the workflow's rules did not anticipate: the ambiguous output, the contested judgment, the exception. In a workflow run entirely by people, accountability and control are usually held by the same person, which is why the distinction can feel academic, until it stops being true and nobody has said so out loud.

The difference is not that software suddenly contains judgment. Software, compliance rules, and management procedures have always distributed control inside a workflow. The difference is how much judgment can now be embedded upstream, before a human ever encounters a case, and how hard it can become to trace that judgment back to a specific rule anyone wrote down. A calculator does not decide what counts as a good answer. A model trained to synthesize evidence does. A difference in degree, pushed far enough, starts to function like a difference in kind. It lets accountability and control drift apart for months before anyone notices. The change shows up first in what feels normal to the person doing the work, and only later, if at all, on a chart.

## Where Control Actually Moved

Return to the scientist reviewing literature with a model's help. The vendor who trained and fine-tuned the model made design decisions, months earlier, that shape the residual control available downstream: what counts as a plausible synthesis of a body of evidence, and what does not. Those decisions do not settle the scientist's final judgment; they narrow what the scientist is likely to see, a narrower kind of control but a real one, baked into the model's weights before deployment and revisited by no governance meeting. The data science or validation team that set the confidence threshold for automatic acceptance versus mandatory review made another such decision: in deciding where the system defers, they effectively determined where the workflow requires human judgment at all. IT's access controls decide who can reach the system, under what conditions, and which version they can use. Compliance's documentation standard decides, retroactively, whether their judgment counts as defensible if the reasoning was not logged in the required format. That is not the same as overturning the science. But a conclusion that cannot be defended procedurally is, in practice, a conclusion that cannot stand, whatever its merit.

The product team managing the roadmap adds a layer that looks like ordinary software management rather than governance: which capabilities ship in a release, whether a feature that suggests a conclusion is on by default, whether the interface frames a synthesis as a draft or a result to confirm. Each release renegotiates where residual control sits, on a cadence the nominal owner rarely tracks.

What remains for the scientist, formally still the workflow's user and its nominally accountable owner, is a narrow residual right: to accept or reject a single output in front of them. Everything upstream of that moment was already decided by functions never framed as owning the judgment itself.

The same pattern shows up in pharmacovigilance. A signal detection algorithm, tuned by a vendor or an internal data science group, decides which patterns in adverse event data ever reach a safety physician's desk for assessment. Their sign-off is real, but it comes downstream of a judgment about signal-worthiness they did not make and often cannot fully inspect. The formal owner of the assessment and the holder of residual control over what gets assessed are not the same function.

## The Accountability Paradox

Automation can reduce someone's control over how a task gets done without reducing their responsibility for how it turns out. That is worth sitting with, because organizations tend to act as though it were false.

Before the model, the scientist read, interpreted, and decided, and the line between effort and accountability was direct enough that responsibility felt earned. After it, the system filters and synthesizes, they review and sign off, and the organization calls this augmentation. From their side it can look like something else: less discretion, a new layer of verification, and an accountability that has not moved an inch. Removing a task is not the same as removing work. What AI often does instead is convert execution into supervision, verification, and exception handling: work that may be less visible, and for some people less satisfying, without being less consequential.

There is a version of this that runs up the chart, too. Accountability tends to be delegated more readily than the control that goes with it, so the people furthest from a workflow keep the decisions while the people closest to it keep the exposure.

The benefit and the risk are also not read off the same ledger. The organization gets throughput, lower cost, steadier output. The employee gets relief from some tedious work, set against less opportunity to exercise the expertise the role once required, a new verification burden, and no corresponding reduction in their exposure when the system is wrong rather than them. Research on automation and job quality identifies loss of control over how work is performed as a significant source of concern, alongside job insecurity itself. That is the same asymmetry, showing up outside the org chart, in how the work actually feels.

## Governance Arrives Too Late

By the time an organization convenes a committee to formally settle who owns an AI-mediated workflow, residual control has usually already relocated, through a sequence of decisions nobody in the room made together or recognized as related. Governance is supposed to decide. In an AI-mediated workflow, implementation often decides first, and governance arrives afterward to ratify what has already happened, or to attempt a clawback of control that has already moved somewhere else.

Implementation functions like a constitutional act. The defaults set during deployment, the confidence threshold, the access rule, the documentation standard, determine what is even possible before anyone has voted on anything. The committee that meets months later behaves like a legislature, debating and formally ratifying policy within a constitution it did not write.
Return to the pharmaceutical example. A committee convened to decide who owns the literature-review workflow will not be deciding much. The vendor's synthesis defaults, the validation team's threshold, IT's access rules, and compliance's documentation standard will already be running, and will already have shaped what the scientist sees and what they can defend. The committee can rename an owner on a chart. It cannot easily undo what several functions, none of them in that room, already wrote through the ordinary business of shipping and configuring a system.

This is why these transformations become politically difficult even when nothing about the underlying technology is in dispute. Reassigning formal ownership on a chart is not a neutral bookkeeping exercise once residual control has already shifted. It threatens whoever currently exercises that control: a budget line built around a function's expanded role, a headcount justified by new responsibilities, a claim to expertise that only makes sense if the function still decides what it appears to decide. What people in the room can feel, even if they cannot say precisely what changed, is that agreeing to a new name on the chart means conceding something that already, quietly, changed hands.

None of this settles who should own a workflow like this one. It changes what ownership has to mean. If a scientist is accountable for a judgment but cannot determine what evidence reaches them, when the system defers to them, or what they must document to defend the result, then calling them the owner describes responsibility, not control.

The harder question is therefore not who signs off at the end. It is who gets to decide the conditions under which that sign-off becomes necessary, possible, or defensible. Until someone can answer that question, the workflow has an accountable person. It does not necessarily have an owner.