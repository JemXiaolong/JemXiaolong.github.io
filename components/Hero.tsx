"use client";

import { useT } from "@/app/providers";
import { Reveal } from "@/components/Reveal";
import { UI } from "@/lib/content";

interface HeroProps {
  /** Merged-PR count, resolved at build time from the GitHub API. */
  prCount: number;
}

export function Hero({ prCount }: HeroProps) {
  const t = useT();

  const stats = [
    { value: "1", label: UI.stats.appStore },
    { value: String(prCount), label: UI.stats.prs },
    { value: "127", label: UI.stats.devices },
  ];

  return (
    <section id="top" className="mx-auto w-full max-w-5xl px-6 pb-20 pt-16 sm:px-8 sm:pt-24">
      <Reveal>
        <p className="mb-8 flex items-center gap-2.5 text-sm text-muted">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          {t(UI.about.location)}
        </p>
      </Reveal>

      <h1 className="font-display text-5xl leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
        <Reveal delay={60}>
          <span className="block">{t(UI.hero.line1)}</span>
        </Reveal>
        <Reveal delay={140}>
          <span className="block">{t(UI.hero.line2)}</span>
        </Reveal>
        <Reveal delay={220}>
          <span className="block">
            {t(UI.hero.line3)}
            <span className="ml-3 inline-block h-[3px] w-16 translate-y-[-0.35em] bg-accent align-middle sm:w-24" />
          </span>
        </Reveal>
      </h1>

      <Reveal delay={300}>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{t(UI.hero.sub)}</p>
      </Reveal>

      <Reveal delay={360}>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform duration-200 hover:-translate-y-0.5"
          >
            {t(UI.hero.cta)}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-hairline px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
          >
            {t(UI.hero.ctaContact)}
          </a>
        </div>
      </Reveal>

      <Reveal delay={440}>
        <dl className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label.en} className="bg-paper px-6 py-7">
              <dt className="font-display text-4xl text-accent">{stat.value}</dt>
              <dd className="mt-1.5 text-sm leading-snug text-muted">{t(stat.label)}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
