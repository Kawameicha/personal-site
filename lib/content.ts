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
  },
  {
    slug: "in-code-we-trust",
    title: "In Code We Trust: A Decade of Applied ML Writing",
    year: "2016 – Present",
    featured: true,
    oneLiner:
      "A long-running technical blog exploring machine learning, data analysis, and scientific computing through practical, hands-on work.",

    context:
      "Over the past decade, I have maintained a personal blog focused on machine learning, statistical analysis, and scientific programming. The goal was not content production, but to externalize thinking, working through real problems, documenting approaches, and making complex analytical concepts accessible through concrete examples. The work spans early-stage data exploration, statistical testing, and machine learning workflows.",

    challenges:
      "Maintaining consistency over a long time horizon while evolving technically. Early articles reflect the state of the field and my own development at the time, requiring continuous adaptation in both depth and perspective.",

    approach:
      "Articles were developed from first principles and practical use cases, combining code, methodology, and interpretation. The focus was consistently on clarity, reproducibility, and applicability rather than abstraction. Topics included statistical hypothesis testing, clustering validation, data wrangling, and the use of R for scientific computing. Several articles were directly tied to tools and packages I developed, creating a tight feedback loop between writing, coding, and real-world usage. Over time, the blog served as both a knowledge base and a platform for refining how complex technical ideas are communicated to different audiences.",

    role:
      "Author and developer. Defined topics, built accompanying code and tools, and iterated continuously based on real-world use and evolving expertise.",

    impact:
      "Built a body of work over 10+ years covering applied machine learning and data analysis, with articles used by practitioners in research and applied settings. More importantly, this work established a strong foundation in translating complex analytical concepts into usable frameworks, a capability that later extended into product, consulting, and AI system design.",

    tags: ["Machine Learning", "Data Science", "Scientific Computing", "Technical Writing", "R", "Statistics"]
  },
  {
  slug: "llm-feedback-loop-enterprise-ai",
  title: "Designing Feedback Loops for LLM Systems in Production",
  year: "2025-2026",
  featured: true,
  oneLiner:
    "Most enterprise AI systems fail because they don’t learn. This project implemented a structured feedback loop to close the gap between system output and user expectation.",

  context:
    "LLM-based knowledge systems often underperform in real-world environments. Not primarily due to model limitations, but because of a persistent gap between what the system returns and what users actually expect. In enterprise contexts, this gap is rarely measured. Feedback is unstructured, inconsistently captured, and not integrated into system improvement. As a result, systems stagnate despite continuous model iteration.",

  approach:
    "Designed and implemented a two-step performance framework to systematically identify and reduce this gap. First, a scoring mechanism was introduced to quantify the mismatch between system responses and user expectations across multiple knowledge domains. This transformed qualitative dissatisfaction into a measurable signal. Second, a lightweight, in-product feedback mechanism was deployed, allowing users to provide free-text input directly within their workflow. To ensure scalability and privacy, feedback was aggregated and summarized using LLM-based processing, producing structured insights without exposing individual user data. These insights were then used to iteratively refine prompts and retrieval strategies, establishing a continuous learning loop at the system level.",

  impact:
    "Initial iterations resulted in a consistent 10–15% improvement in response relevance across multiple knowledge managers. More importantly, the system introduced a scalable mechanism for continuous alignment between AI output and user expectations, addressing a core failure mode of enterprise AI systems.",

  challenges:
    "Capturing high-quality feedback without disrupting user workflows, while ensuring privacy and usability. Designing a system that produces actionable signals rather than noise, and integrating those signals into an iterative improvement loop without increasing operational complexity.",

  role:
    "Co-designed the performance framework and feedback architecture. Worked at the interface of product, engineering, and end users to translate qualitative feedback into measurable signals and system-level improvements.",

  tags: ["LLM Systems", "AI Product", "Feedback Loops", "Enterprise AI", "Human-in-the-Loop", "Prompt Engineering", "Information Retrieval"],
  }
];
