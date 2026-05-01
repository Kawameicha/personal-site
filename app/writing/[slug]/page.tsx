import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { articles, articleContent } from "@/lib/content";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
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

// Very lightweight markdown-like renderer for the content
function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

    function renderInline(text: string) {
    // Handle bold + italics
    const parts = text.split(/(\*\*.+?\*\*|\*.+?\*)/g);
    return parts.map((part, j) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={j} className="font-medium text-foreground">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith("*") && part.endsWith("*")) {
        return (
          <em key={j} className="italic">
            {part.slice(1, -1)}
          </em>
        );
      }
      return part;
    });
  }

  while (i < lines.length) {
    const line = lines[i];

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="font-serif text-2xl sm:text-3xl mt-14 mb-6">
          {line.slice(3)}
        </h2>
      );
    // H3
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="font-serif text-xl sm:text-2xl mt-10 mb-4">
          {line.slice(4)}
        </h3>
      );
    // Blockquote
    } else if (line.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quoteLines.push(lines[i].slice(2));
        i++;
      }

      elements.push(
        <blockquote
          key={i}
          className="border-l-4 pl-5 italic text-foreground/80 my-8"
        >
          {quoteLines.map((l, idx) => (
            <p key={idx}>{renderInline(l)}</p>
          ))}
        </blockquote>
      );
    // Bold bullet
    } else if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*(.*)$/);
      if (match) {
        elements.push(
          <li key={i} className="text-foreground/90 leading-relaxed mb-3 font-sans font-light">
            <strong className="font-medium text-foreground">{match[1]}</strong>
            {match[2]}
          </li>
        );
      }
    // Bullet list
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="text-foreground/90 leading-relaxed mb-3 font-sans font-light">
          {line.slice(2)}
        </li>
      );
    // skip blank lines
    } else if (line.trim() === "") {
    // Paragraph (multi-line)
    } else {
    const paragraphLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("## ") &&
      !lines[i].startsWith("### ") &&
      !lines[i].startsWith("- ") &&
      !lines[i].startsWith("> ")
    ) {
      paragraphLines.push(lines[i]);
      i++;
    }

    elements.push(
      <p
        key={i}
        className="text-lg leading-[1.8] text-foreground/85 mb-7"
      >
        {renderInline(paragraphLines.join(" "))}
      </p>
    );
    }
    i++;
  }

  // Wrap consecutive li elements in ul
  const grouped: React.ReactNode[] = [];
  let listItems: React.ReactNode[] = [];

  elements.forEach((el, idx) => {
    const isLi =
      typeof el === "object" &&
      el !== null &&
      (el as React.ReactElement).type === "li";
    if (isLi) {
      listItems.push(el);
    } else {
      if (listItems.length > 0) {
        grouped.push(
          <ul key={`ul-${idx}`} className="my-6 pl-0 space-y-1 list-none border-l-2 border-border pl-6">
            {listItems}
          </ul>
        );
        listItems = [];
      }
      grouped.push(el);
    }
  });
  if (listItems.length > 0) {
    grouped.push(
      <ul key="ul-last" className="my-6 list-none border-l-2 border-border pl-6">
        {listItems}
      </ul>
    );
  }

  return grouped;
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const content = articleContent[params.slug];

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
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-muted-foreground">
            {formatDate(article.date)}
          </span>
          <span className="text-border">·</span>
          <span className="font-mono text-xs text-muted-foreground">
            {article.readingTime}
          </span>
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

        {/* Body */}
        {content ? (
          <div>{renderContent(content)}</div>
        ) : (
          <p className="text-muted-foreground font-sans font-light text-lg leading-relaxed">
            Full article coming soon.
          </p>
        )}
      </article>
    </div>
  );
}
