import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { cache } from "react";

const articlesDir = path.join(process.cwd(), "_articles");
const imagesDir = path.join(process.cwd(), "public", "images");

export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
}

const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp"];

function resolveImage(slug: string): string | undefined {
  for (const ext of IMAGE_EXTENSIONS) {
    if (fs.existsSync(path.join(imagesDir, `${slug}${ext}`))) {
      return `/images/${slug}${ext}`;
    }
  }
  return undefined;
}

function parseTags(data: Record<string, unknown>, slug: string, missing: string[]): string[] {
  if (!Array.isArray(data.tags) || data.tags.length === 0) {
    missing.push(slug);
    return [];
  }
  return data.tags as string[];
}

export const getArticles = cache((): Article[] => {
  const files = fs.readdirSync(articlesDir).filter((file) => file.endsWith(".md"));
  const missingTags: string[] = [];

  const articles = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const fileContents = fs.readFileSync(path.join(articlesDir, file), "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      readingTime: data.readingTime as string,
      tags: parseTags(data, slug, missingTags),
      image: resolveImage(slug),
      imageAlt: data.imageAlt as string | undefined,
      imageCaption: data.imageCaption as string | undefined,
    };
  });

  if (missingTags.length > 0) {
    throw new Error(`Articles missing required "tags" frontmatter: ${missingTags.join(", ")}`);
  }

  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});

export const getArticleBySlug = cache(async (slug: string) => {
  const filePath = path.join(articlesDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  const missingTags: string[] = [];
  const tags = parseTags(data, slug, missingTags);
  if (missingTags.length > 0) {
    throw new Error(`Article "${slug}" is missing required "tags" frontmatter.`);
  }

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    readingTime: data.readingTime as string,
    tags,
    image: resolveImage(slug),
    imageAlt: data.imageAlt as string | undefined,
    imageCaption: data.imageCaption as string | undefined,
    contentHtml,
  };
});

export function getAdjacentArticles(articles: Article[], slug: string) {
  const index = articles.findIndex((a) => a.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index < articles.length - 1 ? articles[index + 1] : null,
    next: index > 0 ? articles[index - 1] : null,
  };
}

export function getRelatedArticles(articles: Article[], slug: string, limit = 9): Article[] {
  const current = articles.find((a) => a.slug === slug);
  if (!current) return [];

  return articles
    .filter((a) => a.slug !== slug)
    .map((a) => ({
      article: a,
      overlap: a.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .filter((x) => x.overlap > 0)
    .sort(
      (a, b) =>
        b.overlap - a.overlap ||
        new Date(b.article.date).getTime() - new Date(a.article.date).getTime()
    )
    .slice(0, limit)
    .map((x) => x.article);
}