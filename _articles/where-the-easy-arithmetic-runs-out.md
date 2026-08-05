---
title: "Where the Easy Arithmetic Runs Out"
date: "2026-08-05"
excerpt: "Organizations readily compare what is visible: benchmarks, competitor rollouts, projected savings. The harder question is whether any of those measures correspond to the value they were supposed to create."
readingTime: "12 min"
tags: ["value", "judgment", "benchmark"]
---

Every few years a study resurfaces showing that the average fund investor earns less than the fund they're invested in. Not because they picked the wrong fund. Because they bought in after a strong year, chasing whatever else was making headlines somewhere, and sold out after a weak one. The fund performed exactly as advertised. The shortfall came entirely from what the investor did while holding it.

The mechanism underneath that isn't really envy. It's a shortcut. Evaluating your own portfolio, on its own terms, over its own horizon, is slow and requires sitting with uncertainty. Watching what everyone else appears to be earning is instant. When an outcome is hard to evaluate directly, people borrow someone else's signal instead of building their own. The signal doesn't have to be a good substitute. It only has to be available faster than the real answer. Observable success quietly becomes a substitute for evaluating success on its own terms.

AI adoption inside large organizations runs on the same shortcut. Which is worth taking seriously, because it means the interesting failure isn't a lack of rigor. It's a working substitution that most people would recognize as reasonable if you described it to them in the abstract, and only object to once they see what it costs applied to their own deployment.

## The Neighboring Company

Ask an organization why it deployed an AI system and the honest first answer, before the official one, is often some version of: a competitor already had. A rival hospital published results. A peer firm rolled out a coding assistant. A board member returned from a conference having seen someone else's demo. The question *what are we doing* arrives, and gets answered, well before the question *what problem are we solving* has been asked by anyone in the room.

Of course, copying competitors is sometimes sensible. Other organizations possess information you don't, and their willingness to move can be a genuine signal worth weighing. The mistake isn't treating their behavior as evidence. It's treating it as sufficient evidence, a finished argument rather than one input into a harder one. But this isn't really about the model, or even about the benchmark it scored on. It's about what can be compared at all. 

A competitor's rollout is observable: announced, demoed, discussed at the same conferences your people attend. Whether that rollout is actually creating value for them is not observable, not to you, and often not fully to them either. So the thing that spreads between organizations is never the value. It's the visible fact that something happened. Organizations compare what is observable and optimize what is comparable, even when neither is what creates value.

Graham had a name for this trade long before AI existed. Price is set by whoever's watching, and it's comparable at a glance. Value has to be appraised individually, by the owner, using information nobody outside the organization has access to. Call it observable success against owned success if it helps: a leaderboard position, a rollout announcement, a usage count are all price. Whether it did anything is value, and there's no shortcut to determining it. A benchmark can tell you a system answers questions competently. It has nothing to say about whether the questions were worth asking.

## The Business Case

Somewhere after the decision to deploy, someone still has to justify it in writing, and this is where the familiar arithmetic shows up. Every question a chatbot answers saves an employee some amount of time. Multiply that savings across a large volume of questions, and the system appears to pay for itself before the quarter is out.

The arithmetic rests on an assumption nobody states aloud: that answering a question is the same unit as removing a cost. It isn't, and each way it isn't quietly breaks a term in the multiplication. Plenty of questions would have been resolved just as fast by a colleague or a five-second search. Not every answer is correct, and a wrong one delivered with confidence can cost more than the question was ever going to save. Saved time doesn't automatically become productive time; often it just becomes slack. And the calculation rarely charges itself for what it costs to keep the system running in the background.

I’ve sat through enough versions of this presentation to know roughly when the multiplication starts. The slide is usually polished. What's missing is the line explaining how any of the projected saving would actually show up in next year's accounts.

There's a second, smaller failure sitting on top of this one. Once a benchmark becomes the thing vendors compete on, they optimize for the benchmark rather than the capability it was meant to stand in for, which is Goodhart's law doing what it always does. Even a benchmark nobody has gamed still says nothing about whether the underlying question mattered.

## Outputs, Outcomes, Welfare

An economist looking at this would recognize the shape immediately, because it isn't new. Economics has a standard ladder for exactly this confusion: outputs, the things actually produced, outcomes, what changes as a result of producing them, and welfare, the eventual gain or loss to the people the whole exercise was supposed to serve. The ladder exists because output is the easiest of the three to count, and welfare is the only one that was ever the point.

Other fields learned this before AI did, each in its own vocabulary. Medicine distinguishes a surrogate endpoint, a biomarker that moves in the right direction, from a clinical endpoint, whether the patient actually lives longer or better, because decades of drugs that improved the biomarker without improving the patient forced the distinction into every regulatory approval process. Manufacturing distinguishes throughput, units off the line, from profitability, whether making those units made money, because a factory can run at full output and still lose money on every unit it produces. In each case the observable measure is the one that's cheap to collect early, and the real measure is the one that only shows up later, if anyone stays around to look for it.

None of this is an argument against proxies as such. Medicine could not function without surrogate endpoints; a trial that waited for every clinical outcome to mature before drawing any conclusion would take decades longer to help anyone. Finance runs on quarterly earnings and engineering runs on test coverage for the same reason: a working system needs cheap, frequent signals or it can't be managed at all. The point was never that the proxy exists.

It’s about what happens once a proxy stops triggering evaluation and starts replacing it. This is roughly where the easy arithmetic runs out. It can price what was produced. It has no instrument for pricing what was produced against what actually needed doing, and that gap doesn't close just because the model underneath got better. Organizations, in practice, often accumulate evidence for the decision well before they accumulate evidence for the outcome.

Cost follows the same asymmetry, from the other direction. A business case usually has excellent visibility into benefits it hasn't earned yet and remarkably poor visibility into costs it's already committed to: governance, integration, security review, the ongoing maintenance and retuning nobody puts on the first slide. Benefits get counted as the reason the project exists. Costs get treated as details to sort out afterward. Both habits point the same way, toward whatever can be written down quickly and away from whatever has to be lived with.

## What Would Get Worse

Investors who chase last year's winning fund often underperform the fund they already owned, because they stop evaluating their own results and start reacting to somebody else's signal instead. Organizations are increasingly doing the same thing with AI. They watch a competitor's rollout, a benchmark win, a number in a press release, and gradually substitute that signal for the evaluation they'd otherwise have to run on their own system, on their own terms, which takes longer and produces no press release when it's finished. The deployment becomes easy to justify long before anyone has established that it does anything worth doing.

Ultimately, this is as much a timing problem as an evidentiary one. A decision has to be made with whatever evidence exists at the moment of deciding: a competitor's rollout, a vendor's arithmetic, a benchmark score. Whether the decision was right can only be judged with evidence that doesn't exist yet, and won't for months, sometimes longer than anyone involved will still be around to check. Call the first kind decision-time evidence and the second outcome-time evidence. They are rarely interchangeable, and the mistake described here was never using the first kind: organizations have no other option, and nobody gets to wait a year to decide. The mistake is assuming the first kind predicts the second, and then treating the question as settled once the decision has been made, rather than as still open until the outcome exists to check it against.

This doesn’t apply evenly to every deployment. A team running a deliberate pilot, one honestly framed as building capability rather than capturing value yet, hasn't made this mistake even if nothing measurable has changed by the six-month mark, because that was never the point of a pilot. 

Which leaves the least glamorous question as the one that actually settles it, because it can only be answered at outcome time. If the system disappeared tomorrow, what would get worse? If nobody in the room can answer that, and the deployment was never framed as exploratory to begin with, it's worth asking what, exactly, was deployed, and on whose evidence.
