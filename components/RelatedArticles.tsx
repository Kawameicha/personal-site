"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Article } from "@/lib/articles";

function RelatedCard({ article }: { article: Article }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link href={`/writing/${article.slug}`} className="group block">
      {article.image ? (
        <figure className="relative">
          <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-muted">
            <img
              src={article.image}
              alt={article.imageAlt ?? article.title}
              onLoad={() => setLoaded(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-[opacity,transform] duration-300 group-hover:scale-105 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/15 to-transparent" />
            <div className="absolute inset-x-0 top-0 p-4">
              <h3 className="font-serif text-lg leading-snug text-white">
                {article.title}
              </h3>
            </div>
          </div>
        </figure>
      ) : (
        <div className="aspect-[3/2] bg-muted rounded-sm flex flex-col p-4">
          <h3 className="font-serif text-lg leading-snug text-foreground">
            {article.title}
          </h3>
        </div>
      )}
    </Link>
  );
}

export function RelatedArticles({ articles }: { articles: Article[] }) {
  const pageSize = 3;
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const pageCount = Math.ceil(articles.length / pageSize);
  const canPage = pageCount > 1;

  const visible = articles.slice(page * pageSize, page * pageSize + pageSize);

  function goTo(newPage: number, dir: "left" | "right") {
    setDirection(dir);
    setPage(newPage);
  }

  return (
    <section className="max-w-5xl mx-auto px-6 mt-24">
      <style jsx>{`
        @keyframes slide-in-from-right {
          from {
            transform: translateX(24px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slide-in-from-left {
          from {
            transform: translateX(-24px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .anim-right {
          animation: slide-in-from-right 300ms ease-out;
        }
        .anim-left {
          animation: slide-in-from-left 300ms ease-out;
        }
      `}</style>

      <div className="flex items-center justify-between mb-8">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Related
        </h2>
        {canPage && (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => goTo((page - 1 + pageCount) % pageCount, "left")}
              aria-label="Previous related articles"
              className="p-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="font-mono text-xs text-muted-foreground">
              {page + 1} / {pageCount}
            </span>
            <button
              type="button"
              onClick={() => goTo((page + 1) % pageCount, "right")}
              aria-label="Next related articles"
              className="p-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      <div className="overflow-hidden">
        <div
          key={page}
          className={`grid sm:grid-cols-3 gap-8 ${direction === "right" ? "anim-right" : "anim-left"}`}
        >
          {visible.map((a) => (
            <RelatedCard key={a.slug} article={a} />
          ))}
        </div>
      </div>
    </section>
  );
}