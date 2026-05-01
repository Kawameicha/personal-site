import type { Metadata } from "next";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { person } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Dr. Christoph P. Freier.",
};

const channels = [
  {
    label: "Email",
    value: person.email,
    href: `mailto:${person.email}`,
    icon: Mail,
    description: "Best for substantive enquiries.",
  },
  {
    label: "LinkedIn",
    value: "www.linkedin.com/in/christophfreier",
    href: person.linkedin,
    icon: Linkedin,
    description: "Professional history and occasional updates.",
  },
  {
    label: "GitHub",
    value: "www.github.com/kawameicha",
    href: person.github,
    icon: Github,
    description: "Open-source work and code.",
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-28">
      {/* Header */}
      <div className="max-w-2xl mb-20">
        <span className="block w-10 h-px bg-[hsl(var(--accent))] mb-6" />
        <h1 className="font-serif text-5xl sm:text-6xl text-foreground mb-6">
          Contact
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed font-sans font-light">
          I take on a small number of advisory and consulting engagements each
          year, as well as speaking invitations for the right events. If there
          is a strong fit, I’d be glad to connect.
        </p>
      </div>

      {/* Channels */}
      <div className="space-y-0 divide-y divide-border max-w-2xl mb-20">
        {channels.map(({ label, value, href, icon: Icon, description }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex items-start gap-6 py-8 hover:bg-card/50 -mx-6 px-6 transition-colors"
          >
            <div className="shrink-0 mt-0.5 text-muted-foreground group-hover:text-[hsl(var(--accent))] transition-colors">
              <Icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-mono text-xs tracking-[0.12em] uppercase text-muted-foreground">
                  {label}
                </span>
              </div>
              <p className="font-sans text-foreground group-hover:text-foreground/80 transition-colors mb-1">
                {value}
              </p>
              <p className="text-muted-foreground text-sm font-sans font-light">
                {description}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Location note */}
      <div className="flex items-start gap-4 text-muted-foreground">
        <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
        <p className="text-sm font-sans font-light">
          {person.location}. Available for remote engagements globally; on-site
          for Europe.
        </p>
      </div>
    </div>
  );
}
