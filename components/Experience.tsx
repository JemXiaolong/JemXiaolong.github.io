"use client";

import { usePrefs, useT } from "@/app/providers";
import { Reveal } from "@/components/Reveal";
import { EXPERIENCE, UI, type Role } from "@/lib/content";

function RoleEntry({ role, delay }: { role: Role; delay: number }) {
  const t = useT();
  const { lang } = usePrefs();

  return (
    <Reveal as="li" delay={delay} className="relative pb-12 pl-8 last:pb-0">
      {/* Timeline rail: a dot on the spine, drawn per entry. */}
      <span
        className="absolute left-0 top-2 size-2.5 -translate-x-[calc(50%-0.5px)] rounded-full bg-accent"
        aria-hidden="true"
      />

      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="font-display text-xl sm:text-2xl">{t(role.title)}</h3>
        <span className="font-mono text-xs text-muted">
          {t(role.period)} · {t(role.length)}
        </span>
      </div>

      <p className="mt-1 text-sm font-medium text-accent">
        {role.company} · {t(role.place)}
      </p>

      <p className="mt-4 max-w-2xl leading-relaxed text-muted">{t(role.summary)}</p>

      <ul className="mt-4 max-w-2xl space-y-2.5">
        {role.points[lang].map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-hairline" />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {role.stack.map((item) => (
          <span
            key={item}
            className="rounded-md border border-hairline bg-raise px-2.5 py-1 font-mono text-[0.7rem] text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </Reveal>
  );
}

export function Experience() {
  const t = useT();

  return (
    <section id="experience" className="mx-auto w-full max-w-5xl px-6 py-20 sm:px-8">
      <Reveal>
        <h2 className="eyebrow mb-10 flex items-center gap-3">
          <span className="text-accent">02</span>
          <span className="h-px w-8 bg-hairline" />
          {t(UI.sections.experience)}
        </h2>
      </Reveal>

      <ol className="relative border-l border-hairline">
        {EXPERIENCE.map((role, i) => (
          <RoleEntry key={role.id} role={role} delay={i * 50} />
        ))}
      </ol>
    </section>
  );
}
