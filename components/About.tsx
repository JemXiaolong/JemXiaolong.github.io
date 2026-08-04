"use client";

import { useT } from "@/app/providers";
import { Reveal } from "@/components/Reveal";
import { STACK, UI } from "@/lib/content";

export function About() {
  const t = useT();

  return (
    <section id="about" className="mx-auto w-full max-w-5xl px-6 py-20 sm:px-8">
      <Reveal>
        <h2 className="mb-10 font-display text-sm uppercase tracking-[0.22em] text-muted">
          {t(UI.sections.about)}
        </h2>
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr]">
        <div className="space-y-6">
          <Reveal delay={60}>
            <p className="font-display text-2xl leading-snug tracking-tight sm:text-3xl">
              {t(UI.about.p1)}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="leading-relaxed text-muted">{t(UI.about.p2)}</p>
          </Reveal>
          <Reveal delay={180}>
            <p className="leading-relaxed text-muted">{t(UI.about.p3)}</p>
          </Reveal>
        </div>

        <div className="space-y-8">
          <Reveal delay={140}>
            <h3 className="font-display text-sm uppercase tracking-[0.22em] text-muted">
              {t(UI.sections.stack)}
            </h3>
          </Reveal>

          {STACK.map((group, i) => (
            <Reveal key={group.label.en} delay={200 + i * 60}>
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-accent">
                  {t(group.label)}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-hairline px-3 py-1 text-xs text-muted transition-colors hover:border-ink hover:text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
