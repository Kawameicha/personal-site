import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Dr. C. P. Freier — AI, Data & Healthcare",
    template: "%s | Dr. C. P. Freier",
  },
  description:
    "AI in healthcare: bridging single-cell science, clinical data, and production-grade systems in regulated environments.",
  openGraph: {
    title: "Dr. C. P. Freier",
    description:
      "Bridging scientific depth, AI engineering, and product strategy across healthcare and life sciences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
