import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-28">
      <span className="font-mono text-xs tracking-[0.18em] uppercase text-[hsl(var(--accent))] block mb-6">
        404
      </span>
      <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-6">
        Page not found
      </h1>
      <p className="text-muted-foreground text-lg font-sans font-light mb-10">
        This page doesn't exist or has moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to home
      </Link>
    </div>
  );
}
