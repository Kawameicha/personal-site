import Link from "next/link";
import { ArrowRight, Network, Telescope, Target, Dna } from "lucide-react";
import { person, pillars, projects, articles } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  "flask-conical": <Dna className="h-5 w-5" />,
  network: <Network className="h-5 w-5" />,
  target: <Target className="h-5 w-5" />,
  compass: <Telescope className="h-5 w-5" />,
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
  });
}

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const recentArticles = articles.slice(0, 3);

  return (
    <div>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="font-mono text-xs tracking-[0.18em] uppercase text-[hsl(var(--accent))] mb-8">
            AI · Healthcare · Data
          </p>

          {/* Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground mb-8 leading-[1.08]">
            AI in healthcare,
            <br />
            <span className="italic text-muted-foreground">
              from scientific depth to real-world systems.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12 font-sans font-light">
            I build machine learning systems, data infrastructure, and the
            organisational conditions that determine whether any of it gets used.
            Pharmaceutical background. Engineering discipline. No shortcuts.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-sans font-medium hover:bg-foreground/85 transition-colors rounded-sm"
            >
              View projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 text-sm font-sans font-medium hover:border-foreground/50 transition-colors rounded-sm"
            >
              Work with me
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* ─── WHAT I DO ────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="mb-12">
          <span className="block w-10 h-px bg-[hsl(var(--accent))] mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
            What I do
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-background p-8 hover:bg-card transition-colors"
            >
              <div className="text-[hsl(var(--accent))] mb-4">
                {iconMap[pillar.icon]}
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-[0.93rem] leading-relaxed font-sans font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* ─── SELECTED WORK ────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="block w-10 h-px bg-[hsl(var(--accent))] mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
              Selected work
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans"
          >
            All projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="space-y-0 divide-y divide-border">
          {featuredProjects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col sm:flex-row sm:items-start gap-4 py-8 hover:bg-card/50 -mx-6 px-6 transition-colors"
            >
              {/* Index number */}
              <span className="font-mono text-xs text-muted-foreground/50 pt-1 min-w-[2rem]">
                0{i + 1}
              </span>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-serif text-xl sm:text-2xl text-foreground group-hover:text-foreground/90 transition-colors">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground shrink-0 pt-1">
                    {project.year}
                  </span>
                </div>
                <p className="text-muted-foreground text-[0.93rem] leading-relaxed mb-4 font-sans font-light max-w-2xl">
                  {project.context}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.72rem] text-muted-foreground border border-border px-2 py-0.5 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all shrink-0 mt-1 hidden sm:block" />
            </Link>
          ))}
        </div>

        <div className="mt-4 sm:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans"
          >
            All projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* ─── WRITING ──────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="block w-10 h-px bg-[hsl(var(--accent))] mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
              Writing
            </h2>
          </div>
          <Link
            href="/writing"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans"
          >
            All articles <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="space-y-0 divide-y divide-border">
          {recentArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/writing/${article.slug}`}
              className="group flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-8 py-6 hover:bg-card/50 -mx-6 px-6 transition-colors"
            >
              <span className="font-mono text-xs text-muted-foreground shrink-0 pt-0.5 min-w-[7rem]">
                {formatDate(article.date)}
              </span>
              <div className="flex-1">
                <h3 className="font-serif text-lg sm:text-xl text-foreground group-hover:text-foreground/90 mb-1 transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-sans font-light">
                  {article.excerpt}
                </p>
              </div>
              <span className="font-mono text-xs text-muted-foreground shrink-0">
                {article.readingTime}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* ─── CTA ──────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-28">
        <div className="max-w-2xl">
          <span className="block w-10 h-px bg-[hsl(var(--accent))] mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">
            Working on something difficult?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-sans font-light">
            I take on a small number of advisory and consulting engagements each
            year. If you're building AI for healthcare and want to do it
            properly, I'd be glad to talk.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-sans font-medium hover:bg-foreground/85 transition-colors rounded-sm"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
