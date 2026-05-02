import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/lib/content";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.oneLiner || project.context,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="max-w-5xl mx-auto px-6 pt-12 pb-28">
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans mb-16"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All projects
      </Link>

      <div className="max-w-3xl">
        {/* Meta */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-muted-foreground">
            {project.year}
          </span>
          <span className="text-border">·</span>
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="font-mono text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
          {project.title}
        </h1>

        {/* One-liner */}
        {project.oneLiner && (
          <p className="text-lg text-muted-foreground mb-10 font-sans font-light leading-relaxed">
            {project.oneLiner}
          </p>
        )}

        {/* Divider */}
        <span className="block w-10 h-px bg-[hsl(var(--accent))] mb-12" />

        {/* Content */}
        <div className="space-y-12">
          <Section label="Context" content={project.context} />

          {project.challenges && (
            <Section label="Challenges" content={project.challenges} />
          )}

          <Section label="Approach" content={project.approach} />

          {project.role && (
            <Section label="Role" content={project.role} />
          )}

          {/* Impact (highlighted) */}
          {project.impact && (
            <div className="bg-card border border-border p-6 rounded-sm">
              <Section label="Impact" content={project.impact} />
            </div>
          )}

          {/* Technologies */}
          <div>
            <h2 className="font-mono text-xs tracking-[0.14em] uppercase text-muted-foreground mb-4">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[0.75rem] text-foreground border border-border px-3 py-1 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  label,
  content,
}: {
  label: string;
  content: string;
}) {
  return (
    <div>
      <h2 className="font-mono text-xs tracking-[0.14em] uppercase text-muted-foreground mb-4">
        {label}
      </h2>
      <p className="text-foreground/90 text-lg leading-relaxed font-sans font-light">
        {content}
      </p>
    </div>
  );
}