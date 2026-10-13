"use client";

import Image from "next/image";
import Link from "next/link";
import { usePrefs, useT } from "@/app/providers";
import { Reveal } from "@/components/Reveal";
import {
  CV,
  CV_PDF_PATH,
  EMAIL,
  EXPERIENCE,
  GITHUB_URL,
  LINKEDIN_URL,
  PORTFOLIO_URL,
  PROJECTS,
  STACK,
} from "@/lib/content";

/**
 * The odoo fork is already told in the experience timeline, and the two
 * small tooling repos stay on the portfolio so the CV keeps to two pages.
 */
const CV_HIDDEN = new Set(["odoo", "precommit", "owl"]);
const CV_PROJECTS = PROJECTS.filter((project) => !CV_HIDDEN.has(project.id));

const CONTACTS = [
  { label: EMAIL, href: `mailto:${EMAIL}`, kind: "mail" },
  { label: "linkedin.com/in/jemxiaolong", href: LINKEDIN_URL, kind: "in" },
  { label: "github.com/JemXiaolong", href: GITHUB_URL, kind: "gh" },
  { label: "jemxiaolong.github.io", href: PORTFOLIO_URL, kind: "web" },
] as const;

function ContactIcon({ kind }: { kind: (typeof CONTACTS)[number]["kind"] }) {
  const paths = {
    mail: "M3 6.5h18v11H3zM3.5 7l8.5 6 8.5-6",
    in: "M5 9.5v9M5 5.5v.01M9.5 18.5v-9M9.5 13a3.5 3.5 0 0 1 7 0v5.5",
    gh: "M9 19c-4 1.3-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21",
    web: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9z",
  };
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[kind]} />
    </svg>
  );
}

function SideHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="eyebrow mb-3 text-[0.66rem]">{children}</h2>;
}

function MainHeading({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <h2 className="eyebrow mb-5 flex items-center gap-3">
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-hairline" />
      {children}
    </h2>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="cv-chip rounded-md border border-hairline bg-paper px-2 py-0.5 font-mono text-[0.66rem] text-muted">
      {children}
    </span>
  );
}

function Toolbar() {
  const t = useT();
  const { lang, setLang, theme, toggleTheme } = usePrefs();

  return (
    <div className="cv-toolbar mx-auto mb-6 flex max-w-[60rem] flex-wrap items-center justify-between gap-3 px-4">
      <Link href="/" className="font-display text-lg transition-opacity hover:opacity-60">
        ← {t(CV.ui.back)}
        <span className="text-accent">.</span>
      </Link>
      <div className="flex items-center gap-2">
        <div className="flex items-center rounded-full border border-hairline p-0.5 text-xs" role="group" aria-label="Language">
          {(["es", "en"] as const).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
              className={`rounded-full px-2.5 py-1 font-medium uppercase tracking-wide transition-colors ${
                lang === code ? "bg-ink text-paper" : "text-muted hover:text-ink"
              }`}
            >
              {code}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-full border border-hairline px-3 py-1 text-xs text-muted transition-colors hover:text-ink"
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
        <a
          href={CV_PDF_PATH[lang]}
          download
          className="rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-paper transition-opacity hover:opacity-85"
        >
          {t(CV.ui.download)} ↓
        </a>
      </div>
    </div>
  );
}

export function Cv() {
  const t = useT();
  const { lang } = usePrefs();

  return (
    <div className="cv-page py-8 sm:py-12">
      <Toolbar />

      <article className="cv-sheet mx-auto grid max-w-[60rem] overflow-hidden rounded-xl border border-hairline bg-raise shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] md:grid-cols-[17rem_1fr]">
        {/* Sidebar */}
        <aside className="cv-side border-b border-hairline p-7 md:border-b-0 md:border-r">
          <Reveal className="flex flex-col items-center text-center">
            <div className="cv-photo relative size-36 rounded-full p-[3px]">
              <Image
                src="/cv/foto.webp"
                alt={CV.name}
                width={480}
                height={480}
                priority
                className="relative size-full rounded-full object-cover"
              />
            </div>
            <h1 className="font-display mt-5 text-2xl leading-tight">{CV.name}</h1>
            <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent">{t(CV.headline)}</p>
            <p className="mt-2 text-xs text-muted">{t(CV.location)}</p>
          </Reveal>

          <Reveal delay={80} className="mt-8">
            <SideHeading>{t(CV.ui.contact)}</SideHeading>
            <ul className="space-y-2">
              {CONTACTS.map((c) => (
                <li key={c.kind}>
                  <a
                    href={c.href}
                    target={c.kind === "mail" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="cv-link flex items-center gap-2 break-all text-[0.78rem] text-muted transition-colors hover:text-accent"
                  >
                    <span className="text-accent">
                      <ContactIcon kind={c.kind} />
                    </span>
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={140} className="mt-8">
            <SideHeading>{t(CV.ui.stack)}</SideHeading>
            {STACK.map((group) => (
              <div key={group.label.en} className="mb-4">
                <p className="mb-1.5 text-[0.72rem] font-medium">{t(group.label)}</p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={180} className="mt-8">
            <SideHeading>{t(CV.ui.certifications)}</SideHeading>
            <ul className="space-y-2">
              {CV.certifications.map((cert) => (
                <li key={cert.name} className="flex justify-between gap-3 text-[0.74rem] leading-snug">
                  <span>{cert.name}</span>
                  <span className="font-mono text-muted">{cert.year}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200} className="mt-8">
            <SideHeading>{t(CV.ui.languages)}</SideHeading>
            <ul className="space-y-1.5">
              {CV.languages.map((l) => (
                <li key={l.name.en} className="flex justify-between text-[0.76rem]">
                  <span>{t(l.name)}</span>
                  <span className="font-mono text-muted">{t(l.level)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </aside>

        {/* Main column */}
        <div className="cv-main p-7 sm:p-9">
          <Reveal as="section">
            <MainHeading index="01">{t(CV.ui.profile)}</MainHeading>
            <p className="text-[0.92rem] leading-relaxed text-muted">{t(CV.summary)}</p>
          </Reveal>

          <section className="mt-10">
            <Reveal>
              <MainHeading index="02">{t(CV.ui.experience)}</MainHeading>
            </Reveal>
            <ol className="cv-timeline relative ml-1 border-l border-hairline">
              {EXPERIENCE.map((role, i) => (
                <Reveal as="li" key={role.id} delay={i * 60} className="cv-role relative pb-7 pl-6 last:pb-0">
                  <span className="cv-dot absolute left-0 top-1.5 size-2.5 -translate-x-[calc(50%+0.5px)] rounded-full bg-accent" aria-hidden="true" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-display text-[1.05rem]">{t(role.title)}</h3>
                    <span className="font-mono text-[0.66rem] text-muted">{t(role.period)}</span>
                  </div>
                  <p className="text-[0.78rem] font-medium text-accent">
                    {role.company} · {t(role.place)}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {role.points[lang].map((point) => (
                      <li key={point} className="flex gap-2.5 text-[0.8rem] leading-snug text-muted">
                        <span className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-accent/60" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {role.stack.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </div>
                </Reveal>
              ))}
            </ol>
          </section>

          <section className="cv-projects mt-10">
            <Reveal>
              <MainHeading index="03">{t(CV.ui.projects)}</MainHeading>
            </Reveal>
            <div className="space-y-5">
              {CV_PROJECTS.map((project, i) => (
                <Reveal key={project.id} delay={i * 50} className="cv-project">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-display text-[1rem]">
                      {project.href ? (
                        <a href={project.href} target="_blank" rel="noopener noreferrer" className="cv-link hover:text-accent">
                          {t(project.title)} ↗
                        </a>
                      ) : (
                        t(project.title)
                      )}
                    </h3>
                    <span className="font-mono text-[0.66rem] text-muted">{t(project.year)}</span>
                  </div>
                  <p className="mt-1 text-[0.8rem] leading-snug text-muted">{t(project.summary)}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <Reveal as="section" className="mt-10">
            <MainHeading index="04">{t(CV.ui.education)}</MainHeading>
            <ul className="space-y-3">
              {CV.education.map((edu) => (
                <li key={edu.school} className="grid grid-cols-[6.5rem_1fr] gap-3 text-[0.82rem]">
                  <span className="font-mono text-[0.7rem] text-muted">{edu.period}</span>
                  <span>
                    <span className="font-medium">{t(edu.title)}</span>
                    <span className="block text-muted">{edu.school}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <p className="cv-print-only mt-8 hidden text-[0.7rem] text-muted">
            {t(CV.ui.web)}: <a href={`${PORTFOLIO_URL}/cv/`}>{PORTFOLIO_URL.replace("https://", "")}/cv</a>
          </p>
        </div>
      </article>
    </div>
  );
}
