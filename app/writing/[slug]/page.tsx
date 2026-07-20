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
    <div className="pb-28">
      {/* Back link */}
      <div className="max-w-5xl mx-auto px-6 pt-12">
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All writing
        </Link>
      </div>

      {/* Hero: illustration with title superimposed */}
      {article.image ? (
        <figure className="relative mt-8 mx-auto max-w-6xl px-6">
          <div className="relative w-full aspect-[3/2] overflow-hidden rounded-sm">
            <img
              src={article.image}
              alt={article.imageAlt ?? article.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Scrim covers the negative-space top third where the title sits */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/15 to-transparent" />

            <div className="absolute inset-x-0 top-0 p-6 sm:p-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-xs text-white/70">
                  {formatDate(article.date)}
                </span>
                <span className="text-white/30">·</span>
                <span className="font-mono text-xs text-white/70">
                  {article.readingTime}
                </span>
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl text-white leading-tight max-w-3xl">
                {article.title}
              </h1>
            </div>
          </div>
          {article.imageCaption && (
            <figcaption className="mt-4 font-serif text-sm italic text-muted-foreground max-w-2xl">
              {article.imageCaption}
            </figcaption>
          )}
        </figure>
      ) : (
        <div className="max-w-5xl mx-auto px-6 mt-8">
          <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-6 leading-tight max-w-2xl">
            {article.title}
          </h1>
        </div>
      )}

      {/* Excerpt row, now below the illustration */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mt-10 flex items-start justify-between gap-8">
          <p className="text-muted-foreground text-xl leading-relaxed font-sans font-light italic">
            {article.excerpt}
          </p>
        </div>

        <article className="max-w-2xl mt-10">
          <span className="block w-10 h-px bg-[hsl(var(--accent))] mb-12" />
          <div
            className="prose-article"
            dangerouslySetInnerHTML={{ __html: data.contentHtml }}
          />
        </article>
      </div>
    </div>
  );
}
