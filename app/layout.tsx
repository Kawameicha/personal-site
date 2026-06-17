import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm-mono",
  display: "swap",
});

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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
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
