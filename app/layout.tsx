import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "Dr. C. P. Freier — AI, Data & Healthcare",
    template: "%s | Dr. C. P. Freier",
  },
  description:
    "AI in healthcare: bridging scientific depth, data systems, and real-world deployment.",

  openGraph: {
    title: "Dr. C. P. Freier — AI, Data & Healthcare",
    description:
      "Bridging scientific depth, AI engineering, and product strategy across healthcare and life sciences.",
    url: "https://www.christoph.freier.fr",
    siteName: "Christoph Freier",
    images: [
      {
        url: "https://www.christoph.freier.fr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. C. P. Freier — AI, Data & Healthcare",
      },
    ],
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
        <Analytics />
      </body>
    </html>
  );
}
