import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected work in clinical AI, data infrastructure, and health systems.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-28">
      {/* Header */}
      <div className="max-w-2xl mb-20">
        <span className="block w-10 h-px bg-[hsl(var(--accent))] mb-6" />
        <h1 className="font-serif text-5xl sm:text-6xl text-foreground mb-6">
          Projects
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed font-sans font-light">
          Real-world work and what it takes to make systems operate outside the slide deck.
        </p>
      </div>

      {/* Project list */}
      <div className="space-y-0 divide-y divide-border">
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group flex flex-col sm:flex-row sm:items-start gap-4 py-10 hover:bg-card/50 -mx-6 px-6 transition-colors"
          >
            <span className="font-mono text-xs text-muted-foreground/50 pt-1 min-w-[2.5rem]">
              0{i + 1}
            </span>

            <div className="flex-1">
              <div className="flex items-start justify-between gap-6 mb-3">
                <h2 className="font-serif text-2xl sm:text-3xl text-foreground group-hover:text-foreground/90 transition-colors">
                  {project.title}
                </h2>
                <span className="font-mono text-xs text-muted-foreground shrink-0 pt-1.5">
                  {project.year}
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 font-sans font-light max-w-2xl">
                {project.context}
              </p>

              <p className="text-foreground/80 text-sm leading-relaxed mb-6 font-sans max-w-2xl">
                <span className="text-muted-foreground font-light">Impact — </span>
                {project.impact}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.72rem] text-muted-foreground border border-border px-2 py-0.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all shrink-0 mt-2 hidden sm:block" />
          </Link>
        ))}
      </div>
    </div>
  );
}
