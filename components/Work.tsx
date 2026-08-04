"use client";

import Image from "next/image";
import { useT } from "@/app/providers";
import { usePrefs } from "@/app/providers";
import { Reveal } from "@/components/Reveal";
import { APP_SHOTS, PROJECTS, UI, type Project } from "@/lib/content";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-hairline px-3 py-1 text-xs text-muted">
      {children}
    </span>
  );
}

function ProjectLink({ project }: { project: Project }) {
  const t = useT();
  if (!project.href || !project.linkLabel) return null;

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
    >
      {t(project.linkLabel)}
      <span className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
        <ArrowIcon />
      </span>
    </a>
  );
}

/** The App Store release gets a wider treatment: real screenshots in phone frames. */
function FeaturedProject({ project }: { project: Project }) {
  const t = useT();
  const { lang } = usePrefs();

  return (
    <Reveal as="article" className="rounded-3xl border border-hairline bg-raise p-6 sm:p-10">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3 className="font-display text-3xl tracking-tight sm:text-4xl">{t(project.title)}</h3>
        <span className="text-sm text-muted">{t(project.year)}</span>
      </div>

      <p className="mt-2 text-sm font-medium text-accent">{t(project.role)}</p>
      <p className="mt-5 max-w-2xl leading-relaxed text-muted">{t(project.summary)}</p>

      <ul className="mt-6 max-w-2xl space-y-2.5">
        {project.points[lang].map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
            {point}
          </li>
        ))}
      </ul>

      <div className="-mx-6 mt-9 overflow-x-auto px-6 pb-3 sm:-mx-10 sm:px-10">
        <ul className="flex w-max gap-4">
          {APP_SHOTS.map((shot, i) => (
            <li
              key={shot.src}
              className="w-[152px] shrink-0 overflow-hidden rounded-[1.6rem] border border-hairline bg-paper p-1.5 shadow-sm transition-transform duration-300 hover:-translate-y-1.5 sm:w-[168px]"
              style={{ transitionDelay: `${i * 20}ms` }}
            >
              <Image
                src={shot.src}
                alt={t(shot.alt)}
                width={600}
                height={1299}
                className="h-auto w-full rounded-[1.15rem]"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <ProjectLink project={project} />
    </Reveal>
  );
}

function ListedProject({
  project,
  delay,
  extraTag,
}: {
  project: Project;
  delay: number;
  extraTag?: string;
}) {
  const t = useT();
  const { lang } = usePrefs();
  const points = project.points[lang];

  return (
    <Reveal as="article" delay={delay} className="group border-t border-hairline py-9">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="font-display text-2xl tracking-tight sm:text-3xl">{t(project.title)}</h3>
        <span className="text-sm text-muted">{t(project.year)}</span>
      </div>

      <p className="mt-1.5 text-sm font-medium text-accent">{t(project.role)}</p>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">{t(project.summary)}</p>

      {points.length > 0 && (
        <ul className="mt-5 max-w-2xl space-y-2.5">
          {points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
              {point}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {extraTag && (
          <span className="rounded-full border border-accent px-3 py-1 text-xs font-medium text-accent">
            {extraTag}
          </span>
        )}
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <ProjectLink project={project} />
    </Reveal>
  );
}

export function Work({ prCount }: { prCount: number }) {
  const t = useT();
  const { lang } = usePrefs();
  const [featured, ...rest] = PROJECTS;
  const prLabel = lang === "es" ? `${prCount} PRs mergeados` : `${prCount} merged PRs`;

  return (
    <section id="work" className="mx-auto w-full max-w-5xl px-6 py-20 sm:px-8">
      <Reveal>
        <h2 className="mb-10 font-display text-sm uppercase tracking-[0.22em] text-muted">
          {t(UI.sections.work)}
        </h2>
      </Reveal>

      <FeaturedProject project={featured} />

      <div className="mt-14">
        {rest.map((project, i) => (
          <ListedProject
            key={project.id}
            project={project}
            delay={i * 60}
            extraTag={project.id === "odoo" ? prLabel : undefined}
          />
        ))}
      </div>
    </section>
  );
}
