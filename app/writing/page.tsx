import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writings",
  description: "Writings on AI, data, and the organisational realities behind success and failure.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function WritingPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-28">
      {/* Header */}
      <div className="max-w-2xl mb-20">
        <span className="block w-10 h-px bg-[hsl(var(--accent))] mb-6" />
        <h1 className="font-serif text-5xl sm:text-6xl text-foreground mb-6">
          Writings
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed font-sans font-light">
          Writings on AI, data, and the organizational realities behind success and failure.
        </p>
      </div>

      {/* Article list */}
      <div className="space-y-0 divide-y divide-border">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/writing/${article.slug}`}
            className="group flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-10 py-8 hover:bg-card/50 -mx-6 px-6 transition-colors"
          >
            {/* Date */}
            <span className="font-mono text-xs text-muted-foreground shrink-0 min-w-[9rem] pt-0.5">
              {formatDate(article.date)}
            </span>

            {/* Content */}
            <div className="flex-1">
              <h2 className="font-serif text-xl sm:text-2xl text-foreground group-hover:text-foreground/90 transition-colors mb-2">
                {article.title}
              </h2>
              <p className="text-muted-foreground text-[0.93rem] leading-relaxed font-sans font-light">
                {article.excerpt}
              </p>
            </div>

            {/* Reading time + arrow */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-mono text-xs text-muted-foreground">
                {article.readingTime}
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
