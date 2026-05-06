"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { person } from "@/lib/content";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-serif text-[1.05rem] font-medium text-foreground hover:text-foreground/80 transition-colors tracking-tight"
        >
          {person.shortName}
          <span className="text-muted-foreground font-sans font-light text-sm ml-1">
            {person.title}
          </span>
        </Link>

        {/* Links + toggle */}
        <div className="flex items-center gap-1">
          <ul className="hidden md:flex items-center">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "px-4 py-2 text-sm font-sans transition-colors rounded-sm",
                    pathname === href || pathname.startsWith(href + "/")
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme toggle */}
          <button
            onClick={() => { if (!mounted) return; setTheme(theme === "dark" ? "light" : "dark"); }}
            className="ml-2 p-2 rounded-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )
            ) : (
              <div className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
