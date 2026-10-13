"use client";

import { useT } from "@/app/providers";
import { Reveal } from "@/components/Reveal";
import { UI } from "@/lib/content";

export function Hero() {
  const t = useT();

  const stats = [
    { value: "10", label: UI.stats.years },
    { value: "5,000+", label: UI.stats.commits },
    { value: "22", label: UI.stats.modules },
  ];

  return (
    <section id="top" className="mx-auto w-full max-w-5xl px-6 pb-20 pt-16 sm:px-8 sm:pt-24">
      <Reveal>
        <p className="mb-8 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-muted">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          {t(UI.about.location)}
        </p>
      </Reveal>

      <h1 className="font-display text-5xl leading-[1.05] sm:text-7xl lg:text-[5.6rem]">
        <Reveal delay={60}>
          <span className="block">{t(UI.hero.line1)}</span>
        </Reveal>
        <Reveal delay={140}>
          <span className="block">{t(UI.hero.line2)}</span>
        </Reveal>
        <Reveal delay={220}>
          <span className="block">
            {t(UI.hero.line3)}
            <span className="ml-3 inline-block h-[6px] w-6 translate-y-[-0.15em] rounded-sm bg-accent align-middle" />
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
            className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-paper transition-transform duration-200 hover:-translate-y-0.5"
          >
            {t(UI.hero.cta)}
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-hairline px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            {t(UI.hero.ctaContact)}
          </a>
        </div>
      </Reveal>

      <Reveal delay={440}>
        <dl className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label.en} className="bg-raise px-6 py-7">
              <dt className="font-mono text-4xl font-medium text-accent">{stat.value}</dt>
              <dd className="mt-2 text-sm leading-snug text-muted">{t(stat.label)}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
