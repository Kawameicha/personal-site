import Link from "next/link";
import { person } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <span className="font-serif text-sm text-foreground">
            {person.shortName}
          </span>
          <span className="text-muted-foreground text-sm font-sans ml-2">
            — {person.location}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`mailto:${person.email}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans"
          >
            Email
          </a>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans"
          >
            LinkedIn
          </a>
          <a
            href={person.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans"
          >
            GitHub
          </a>
        </div>

        <p className="text-xs text-muted-foreground font-sans">
          © {year}
        </p>
      </div>
    </footer>
  );
}
