import type { Metadata } from "next";
import { person } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: person.bio.slice(0, 160),
};

const trajectory = [
  {
    period: "2005 – 2016",
    role: "Pharmacy, immunology & scientific depth",
    description:
      "Trained as a pharmacist with a research focus in tumor immunology and single-cell analysis. Developed a deep understanding of biological systems alongside hands-on experience with high-dimensional data and the limitations of existing analytical tooling.",
  },
  {
    period: "2016 – 2020",
    role: "From research to applied analytics (FlowJo / BD)",
    description:
    "Scaled adoption of advanced analytical workflows across Europe in flow cytometry and single-cell analysis. Combined hands-on scientific support, software development, and training to translate complex methods into usable tools. Contributed to a multimillion-euro consulting and application ecosystem.",
  },
  {
    period: "2020 – 2021",
    role: "Data platforms & scientific software (Certara)",
    description:
      "Deployed data platforms and self-service analytics solutions in life sciences environments. Focused on integrating data access, visualization, and AI-driven workflows to improve scientific decision-making in real-world settings.",
  },
  {
    period: "2021 – 2023",
    role: "AI & data consulting at scale (Deloitte)",
    description:
      "Led AI and data initiatives for pharmaceutical clients across multiple geographies. Bridged business, product, and engineering teams to turn fragmented data assets into production-grade systems in regulated environments.",
  },
  {
    period: "2024 – 2025",
    role: "Product & platform reality (METAFORA biosystems)",
    description:
      "Worked at the interface of product, engineering, and domain teams to bring a new data analysis platform into real-world use. Focused on aligning product capabilities with user needs and navigating the gap between technical ambition and actual adoption.",
  },
  {
    period: "2025 –",
    role: "AI in public healthcare (adesso)",
    description:
      "Leading the design and delivery of GenAI solutions in the public healthcare system. Translating fragmented clinical, regulatory, and IT constraints into scalable architectures and production-ready systems focused on real-world use.",
  },
];

const selected = [
  "PharmD (France) with German approbation",
  "PhD in tumor immunology & single-cell analysis",
  "15+ years across science, software, and AI",
  "Experience across 20+ countries (Europe & US)",
  "Led €M-scale business and delivery activities",
  "Hands-on design and delivery of AI systems",
  "From single-cell analysis to GenAI systems",
  "Data platforms in regulated environments",
  "Bridging product, engineering, and business",
  "Flow cytometry & single-cell expertise",
  "AI/ML, data platforms, and GenAI applications",
  "Client-facing roles across consulting & delivery",
  "Strategic execution across the stack",
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-28">
      {/* Header */}
      <div className="max-w-2xl mb-20">
        <span className="block w-10 h-px bg-[hsl(var(--accent))] mb-6" />
        <h1 className="font-serif text-5xl sm:text-6xl text-foreground mb-6">
          About
        </h1>
      </div>

      {/* Main narrative */}
      <div className="grid lg:grid-cols-[2fr_1fr] gap-16 mb-24">
        <div className="space-y-6">
          {person.bio.split("\n\n").map((para, i) => (
            <p
              key={i}
              className="text-foreground/85 text-lg leading-[1.8] font-sans font-light"
            >
              {para}
            </p>
          ))}
        </div>

        {/* Selected facts */}
        <div className="lg:pt-1">
          <h2 className="font-mono text-xs tracking-[0.14em] uppercase text-muted-foreground mb-6">
            Background
          </h2>
          <ul className="space-y-3">
            {selected.map((item) => (
              <li
                key={item}
                className="text-[0.875rem] text-muted-foreground leading-snug font-sans font-light border-b border-border pb-3 last:border-0 last:pb-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border mb-24" />

      {/* Trajectory */}
      <div>
        <h2 className="font-mono text-xs tracking-[0.14em] uppercase text-muted-foreground mb-12">
          Trajectory
        </h2>
        <div className="space-y-0 divide-y divide-border">
          {trajectory.map((item) => (
            <div
              key={item.period}
              className="flex flex-col sm:flex-row gap-4 sm:gap-10 py-8"
            >
              <div className="shrink-0 min-w-[7rem]">
                <span className="font-mono text-xs text-muted-foreground">
                  {item.period}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {item.role}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-sans font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
