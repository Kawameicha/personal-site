import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const articlesDir = path.join(process.cwd(), "_articles");
const imagesDir = path.join(process.cwd(), "public", "images");

export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: string;
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

export function getArticles(): Article[] {
  return fs
    .readdirSync(articlesDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const fileContents = fs.readFileSync(path.join(articlesDir, file), "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        readingTime: data.readingTime as string,
        image: resolveImage(slug),
        imageAlt: data.imageAlt as string | undefined,
        imageCaption: data.imageCaption as string | undefined,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getArticleBySlug(slug: string): Promise<Article & { contentHtml: string } | null> {
  const filePath = path.join(articlesDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    readingTime: data.readingTime as string,
    image: resolveImage(slug),
    imageAlt: data.imageAlt as string | undefined,
    imageCaption: data.imageCaption as string | undefined,
    contentHtml,
  };
}