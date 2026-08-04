"use client";

import { useT } from "@/app/providers";
import { Reveal } from "@/components/Reveal";
import { APP_STORE_URL, EMAIL, GITHUB_URL, LINKEDIN_URL, UI } from "@/lib/content";

const CHANNELS = [
  { label: "LinkedIn", href: LINKEDIN_URL },
  { label: "GitHub", href: GITHUB_URL },
  { label: "App Store", href: APP_STORE_URL },
];

export function Contact() {
  const t = useT();

  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-6 py-20 sm:px-8">
      <Reveal>
        <h2 className="mb-10 font-display text-sm uppercase tracking-[0.22em] text-muted">
          {t(UI.sections.contact)}
        </h2>
      </Reveal>

      <Reveal delay={60}>
        <p className="max-w-2xl font-display text-3xl leading-snug tracking-tight sm:text-4xl">
          {t(UI.contact.lead)}
        </p>
      </Reveal>

      <Reveal delay={140}>
        <a
          href={`mailto:${EMAIL}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform duration-200 hover:-translate-y-0.5"
        >
          {t(UI.contact.email)}
        </a>
      </Reveal>

      <Reveal delay={200}>
        <p className="mt-6 font-mono text-sm text-muted">{EMAIL}</p>
      </Reveal>

      <Reveal delay={260}>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {CHANNELS.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted underline decoration-hairline underline-offset-4 transition-colors hover:text-ink hover:decoration-accent"
              >
                {channel.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-hairline">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-xs text-muted sm:px-8">
        <p>© {year} Jem Escudero</p>
        <p>
          {t(UI.footer.built)} Next.js · TypeScript · Tailwind CSS ·{" "}
          <a
            href="https://github.com/JemXiaolong/JemXiaolong.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-hairline underline-offset-4 transition-colors hover:text-ink"
          >
            {t(UI.footer.source)}
          </a>
        </p>
      </div>
    </footer>
  );
}
