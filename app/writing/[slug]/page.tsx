import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getArticles, getArticleBySlug } from "@/lib/articles";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticles().find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage({ params }: Props) {
  const article = getArticles().find((a) => a.slug === params.slug);
  if (!article) notFound();

  const data = await getArticleBySlug(params.slug);
  if (!data) notFound();

  return (
    <div className="max-w-5xl mx-auto px-6 pt-12 pb-28">
      {/* Back link */}
      <Link
        href="/writing"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans mb-16"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All writing
      </Link>

      <article className="max-w-2xl">
        {/* Meta */}
        <div className="flex items-end justify-between mb-6">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-muted-foreground">
              {formatDate(article.date)}
            </span>
            <span className="text-border">·</span>
            <span className="font-mono text-xs text-muted-foreground">
              {article.readingTime}
            </span>
          </div>
          <img
            src="/avatar.jpg"
            alt="Dr. C. P. Freier"
            className="w-20 h-24 rounded-full object-cover opacity-90 shrink-0"
          />
        </div>

        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Standfirst */}
        <p className="text-muted-foreground text-xl leading-relaxed mb-10 font-sans font-light italic">
          {article.excerpt}
        </p>

        {/* Divider */}
        <span className="block w-10 h-px bg-[hsl(var(--accent))] mb-12" />

        <div
          className="prose-article"
          dangerouslySetInnerHTML={{ __html: data.contentHtml }}
        />
      </article>
    </div>
  );
}
