// All site content lives here. Edit freely.

export const person = {
  name: "Dr. Christoph P. Freier",
  shortName: "Dr. C. P. Freier",
  title: "PharmD, PhD",
  tagline: "Building rigorous AI for healthcare: From Scientific Depth to Real-World Systems.",
  bio: `I operate at the intersection of AI, clinical data, and real-world healthcare systems, focusing on turning complex scientific and regulatory environments into solutions that actually work in practice.

Over the past decade, I have worked across 20+ countries in Europe and the US, contributing to the development and commercialization of data-driven platforms in life sciences and healthcare. My work sits at the interface of product, engineering, and commercial teams, with ownership ranging from technical delivery to €M-scale market activities.

My background combines scientific research, software development, and client-facing roles across consulting, pre-sales, and solution delivery. This allows me to move from first principles to production systems and to navigate the constraints that typically prevent AI from delivering real impact.

Most AI in healthcare fails not because of models, but because of systems. Regulatory constraints, fragmented data, and organisational complexity define the real problem.

I focus on building AI-enabled systems that work within those constraints — from strategy and architecture to execution and adoption.`,
  location: "Berlin, Germany",
  email: "christoph@freier.fr",
  linkedin: "https://www.linkedin.com/in/christophfreier",
  github: "https://github.com/Kawameicha",
};

export const pillars = [
  {
    title: "Scientific & Clinical Depth",
    description:
      "PharmD and PhD in immuno-oncology with over a decade of experience across life sciences, clinical workflows, and high-dimensional biomedical data. I understand the scientific and regulatory context in which AI must operate.",
    icon: "flask-conical",
  },
  {
    title: "AI & Data Systems",
    description:
      "From single-cell analytics to GenAI-enabled workflows, I design and deliver robust data architectures, machine learning pipelines, and production-grade systems built for real-world complexity.",
    icon: "network",
  },
  {
    title: "Product & Market Execution",
    description:
      "Bridging product, engineering, and commercial teams across Europe and the US. From prototype to adoption, I turn technical capability into systems that create measurable impact.",
    icon: "target",
  },
  {
    title: "Strategy & Leadership",
    description:
      "Senior stakeholder alignment, team leadership, and execution in regulated environments. I help organisations define what should be built, why it matters, and how to make it work at scale.",
    icon: "compass",
  },
];

export const projects = [
  {
    slug: "flowjo-plugin-single-cell-analysis",
    title: "Scaling Single-Cell Analysis Beyond Manual Workflows",
    year: "2019 – Present",
    featured: true,
    oneLiner:
      "Custom analytical tooling to extend FlowJo for high-dimensional single-cell data and enable reproducible workflows.",
      
    context:
      "During the rapid expansion of single-cell technologies, analytical complexity outpaced the capabilities of existing tools. Researchers relied heavily on manual gating and ad hoc workflows, limiting reproducibility and scalability. There was a clear gap between what the data contained and what the software ecosystem could extract in practice.",

    challenges:
      "Existing tools were not designed for high-dimensional data or extensibility. Analytical workflows were manual, error-prone, and difficult to reproduce across labs. Bridging this gap required working within the constraints of an established software ecosystem while introducing more rigorous, programmatic approaches.",

    approach:
      "Developed custom plugins and analytical tooling extending FlowJo, integrating statistical methods and automated workflows into existing analysis pipelines. Focused on usability for domain scientists while introducing more structured, reproducible approaches to data exploration and interpretation.",

    role:
      "Designed and implemented the analytical methods and software components. Worked directly with researchers to translate practical needs into usable tools, combining software development, statistical modeling, and domain expertise.",

    impact:
      "Enabled researchers to move from manual, heuristic-driven analysis to more reproducible and scalable workflows. The plugin remains in use and has supported multiple published studies, contributing to broader adoption of more rigorous analytical approaches in single-cell research.",

    tags: ["Flow Cytometry", "Single-Cell", "R", "Statistical Modeling", "Scientific Software"]
  }
];

export const articles = [
  {
    slug: "interfaces-are-the-bottleneck",
    title: "The Real Bottleneck Isn’t Models or Data. It’s Interfaces.",
    date: "2026-05-30",
    excerpt:
      "The gap between a new method and its real-world use is where most systems fail. It’s not about models. It’s about interfaces.",
    readingTime: "8 min",
  },
//  {
  //  slug: "ai-strategy-healthcare",
  //  title: "AI Strategy in Healthcare: A Diagnosis",
  //  date: "2023-08-17",
  //  excerpt:
  //    "Most organisations don't have an AI problem. They have a data governance problem and a change management problem.",
  //  readingTime: "7 min",
  //},
];

export const articleContent: Record<string, string> = {
  "interfaces-are-the-bottleneck": `
It’s the mid-2010s. I’ve already switched fields once, and I’m working in single-cell biology at a time when the discipline is in full ebullition. We’ve just gone **from a handful of parameters to a few dozen**. So naturally, I move from manual tools to writing my own pipelines. It feels like progress.

It wasn’t. It was just the beginning.

## When Data Outpaced Software

I had the opportunity to work at a moment when single-cell biology began to outpace the software built to support it. The transition from protein measurements to RNA sequencing did not simply increase scale; it fundamentally altered the nature of analysis. Data moved **from tens of parameters to tens of thousands**.

The only viable approach was to rely on code written and maintained by bioinformaticians, loosely connected to the scientists generating the data. New algorithms appeared in the literature at high frequency, but their practical use lagged behind. Integration was slow, often brittle, and rarely aligned with how researchers actually worked.

I became in demand. And yet, it was not particularly satisfying.

### Methods proliferated rapidly. Software did not.

The constraint was not computational. Nor was it statistical. It was operational. And it was largely invisible to those building the tools. Most vendors responded by attempting to incorporate some methods directly into their products. One algorithm at a time, fully integrated, positioned as a definitive solution.

By the time a method was implemented, it was often no longer state of the art. More importantly, these systems imposed rigid workflows on users who neither needed nor wanted them. In a field defined by rapid iteration and intellectual autonomy, this rigidity was not a limitation. It was a structural flaw.

### A Different Approach

Rather than competing on the quality of individual methods, we focused on reducing the time between their appearance and their use in practice. That required a different architecture: one that allowed rapid integration, avoided premature standardization, and remained open to extension.

In practical terms, this meant treating software less as a product and more as an **environment**. The objective was not completeness. It was responsiveness.

## How Scientists Actually Think

This shift had consequences beyond engineering. It changed how we worked with users. Instead of delivering predefined pipelines, we spent time understanding how researchers actually structured their analysis.

A pattern emerged quickly: scientists do not think in pipelines. They think in questions.

Tools that enforced linear workflows disrupted that process. Tools that allowed recombination and iteration supported it.

One example stayed with me.

A research group was combining flow cytometry with single-cell sequencing—sorting live cells based on surface markers, then profiling them at the transcriptomic level. The problem was not generating data. It was reconciling it: matching low-dimensional phenotypic information with high-dimensional RNA profiles.

The underlying method was not conceptually complex, but no standard solution existed. The process relied on back-and-forth between teams, manual steps, and fragile scripts.

The solution emerged during a discussion. It was sketched informally and implemented shortly thereafter as a plugin. What mattered was not technical sophistication, but immediacy. A fragmented workflow became operational. People could run it, adjust it, and build on it.

It stopped being a discussion and became part of the analysis.

That is a different category of value.

### What Actually Scales

New methods emerged. Users needed them. Integration followed quickly.  Over time, this created a system with properties that competitors struggled to replicate: not because any individual component was superior, but because the overall structure enabled continuous adaptation.

By contrast, competing approaches remained constrained by their own design choices. Systems built around tightly integrated pipelines could not evolve at the same pace. Those that prioritized proprietary methods tended to overstate their generality. In both cases, the failure mode was the same: the system could not keep up with the field.

This dynamic is not unique to computational biology.

## The Same Pattern in AI

A similar pattern is now visible in artificial intelligence.

The focus is on models: larger architectures, marginal gains, increasing specialization. Meanwhile, many organizations struggle to translate these advances into systems that are actually used. Models exist, data exists, but usage remains limited. 

The bottleneck lies in the layer that determines whether a model becomes part of a workflow, or remains a demonstration. That layer is still poorly understood, and often treated as an implementation detail. It isn’t. It is where most projects fail. Integrate them into workflows, and allow iteration without excessive friction.

Most efforts underestimate this.

### The Reality of Healthcare

This becomes particularly evident in regulated environments such as healthcare. Here, performance is only one variable. Systems must also be traceable, interpretable, and integrated into existing processes. You are not deploying a model. You are introducing a system into a constrained environment with real consequences.

Optimizing the model while deferring everything else is a common pattern. Integration comes later—often too late, if at all. The result is predictable: technically sound solutions that never become operational. In fast-moving domains, the primary advantage is not better methods. It is reducing the time between a new idea and its use.

That requires **systems that are extensible, aligned with how people work, and capable of integrating change without friction**.

## Closing

It’s now the mid-2020s. Shimon Sakaguchi is being recognized for his work on regulatory T cells. Years earlier, I started coding to analyze those same cells, long before their significance was widely appreciated. The science has moved forward, as it always does.

Some of the tools built along the way are still in use. The plugin remains available, still works, and has supported published research.

The question is whether our systems keep up.
`,
};
