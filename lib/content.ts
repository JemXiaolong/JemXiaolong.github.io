export type Lang = "es" | "en";

export const APP_STORE_URL =
  "https://apps.apple.com/mx/app/app-grupo-educativo-hidalgo/id6770196534";
export const GITHUB_URL = "https://github.com/JemXiaolong";
export const EMAIL = "escuderojem@outlook.com";
export const ODOO_PRS_URL =
  "https://github.com/Agro-Marin/odoo/pulls?q=is%3Apr+author%3AJemXiaolong+is%3Amerged";

export const APP_SHOTS = [
  { src: "/app/shot2.webp", alt: { es: "Pantalla de bienvenida", en: "Welcome screen" } },
  { src: "/app/shot4.webp", alt: { es: "Calificaciones por materia", en: "Grades by subject" } },
  { src: "/app/shot3.webp", alt: { es: "Avisos de la institución", en: "School announcements" } },
  { src: "/app/shot5.webp", alt: { es: "Reportes del alumno", en: "Student reports" } },
  { src: "/app/shot6.webp", alt: { es: "Perfil del tutor", en: "Guardian profile" } },
  { src: "/app/shot1.webp", alt: { es: "Inicio de sesión", en: "Sign in" } },
];

type Copy = Record<Lang, string>;

export interface Project {
  id: string;
  year: Copy;
  title: Copy;
  role: Copy;
  summary: Copy;
  points: { es: string[]; en: string[] };
  tags: string[];
  href?: string;
  linkLabel?: Copy;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "geh",
    year: { es: "2026", en: "2026" },
    title: { es: "App Grupo Educativo Hidalgo", en: "App Grupo Educativo Hidalgo" },
    role: {
      es: "Diseño, desarrollo y publicación — de punta a punta",
      en: "Design, development and release — end to end",
    },
    summary: {
      es: "App oficial para tutores y padres de familia. Publicada en la App Store bajo mi propia cuenta de desarrollador: yo la diseñé, la construí y pasé la revisión de Apple.",
      en: "The official app for parents and guardians. Live on the App Store under my own developer account: I designed it, built it and took it through Apple review myself.",
    },
    points: {
      es: [
        "Panel multi-hijo con promedio general y reportes activos a la vista",
        "Calificaciones por materia y parcial, con indicadores de color que delatan el área débil de un vistazo",
        "Avisos oficiales segmentados por grado y grupo",
        "Modo oscuro, navegación inferior rediseñada y gráficas (v1.1.0)",
      ],
      en: [
        "Multi-child dashboard with overall average and active reports at a glance",
        "Grades by subject and term, with colour indicators that surface the weak spot instantly",
        "Official announcements targeted per grade and group",
        "Dark mode, redesigned bottom navigation and charts (v1.1.0)",
      ],
    },
    tags: ["React Native", "Expo", "TypeScript", "REST API", "Push notifications"],
    href: APP_STORE_URL,
    linkLabel: { es: "Ver en la App Store", en: "View on the App Store" },
    featured: true,
  },
  {
    id: "odoo",
    year: { es: "2025 — hoy", en: "2025 — now" },
    title: { es: "Fork del framework Odoo 19", en: "Odoo 19 framework fork" },
    role: {
      es: "Trabajo a nivel framework, en producción",
      en: "Framework-level work, running in production",
    },
    summary: {
      es: "No construyo sobre Odoo: construyo Odoo. Trabajo dentro del fork del framework que sostiene un ERP en producción — internals del ORM, el cliente web OWL y el CI que mantiene todo honesto.",
      en: "I don't build on top of Odoo — I build Odoo. I work inside the framework fork behind a production ERP: ORM internals, the OWL web client, and the CI that keeps it all honest.",
    },
    points: {
      es: [
        "Fix en el ORM: specs virtuales de groupby en la ruta vacía de read_group",
        "Fix en el cliente web: conflicto de concurrencia falso en un many2one oculto por reglas",
        "Fix en hr: desbordamiento de date.max en intervalos de asistencia con zonas UTC negativas",
        "Barridos de guías de estilo y linting sobre cientos de módulos",
      ],
      en: [
        "ORM fix: virtual groupby specs on the read_group empty path",
        "Web client fix: false concurrency conflict on a rule-hidden many2one",
        "hr fix: date.max overflow in attendance intervals under UTC-negative timezones",
        "Coding-guideline and linting sweeps across hundreds of modules",
      ],
    },
    tags: ["Python 3.14", "PostgreSQL 18", "OWL", "ORM", "CI/CD"],
    href: ODOO_PRS_URL,
    linkLabel: { es: "Ver mis PRs mergeados", en: "See my merged PRs" },
  },
  {
    id: "precommit",
    year: { es: "2026", en: "2026" },
    title: { es: "pre-commit-agromarin", en: "pre-commit-agromarin" },
    role: { es: "Herramienta interna, de código abierto", en: "Internal tooling, open source" },
    summary: {
      es: "Hooks de pre-commit que imponen nuestros estándares de código Odoo en todos los repos: si el estilo no pasa, no entra.",
      en: "Pre-commit hooks that enforce our Odoo coding standards across every repo: if the style doesn't pass, it doesn't land.",
    },
    points: { es: [], en: [] },
    tags: ["Python", "pre-commit", "ruff"],
    href: "https://github.com/JemXiaolong/pre-commit-agromarin",
    linkLabel: { es: "Ver en GitHub", en: "View on GitHub" },
  },
  {
    id: "owl",
    year: { es: "2025", en: "2025" },
    title: { es: "Manual de OWL", en: "OWL Manual" },
    role: { es: "Documentación técnica", en: "Technical writing" },
    summary: {
      es: "Guía práctica de Odoo Web Library: fundamentos, ejemplos y buenas prácticas. La escribí porque explicar algo bien es la mejor prueba de que lo entendiste.",
      en: "A practical guide to the Odoo Web Library: fundamentals, examples and best practices. I wrote it because explaining something well is the best proof you understood it.",
    },
    points: { es: [], en: [] },
    tags: ["OWL", "Odoo", "Docs"],
    href: "https://github.com/JemXiaolong/Manual_OWL",
    linkLabel: { es: "Leer el manual", en: "Read the manual" },
  },
];

export const STACK: { label: Copy; items: string[] }[] = [
  {
    label: { es: "Móvil y frontend", en: "Mobile & frontend" },
    items: ["React Native", "Expo", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "OWL"],
  },
  {
    label: { es: "Backend y datos", en: "Backend & data" },
    items: ["Python", "Odoo", "PostgreSQL", "Node.js", "REST APIs"],
  },
  {
    label: { es: "Infra y herramientas", en: "Infra & tooling" },
    items: ["Linux", "Docker", "AWS", "nginx", "Git", "GitHub Actions", "pre-commit"],
  },
];

export const UI = {
  nav: {
    work: { es: "Trabajo", en: "Work" },
    about: { es: "Sobre mí", en: "About" },
    contact: { es: "Contacto", en: "Contact" },
  },
  hero: {
    line1: { es: "Construyo cosas", en: "I build things" },
    line2: { es: "que la gente", en: "people actually" },
    line3: { es: "de verdad usa.", en: "use." },
    sub: {
      es: "Desarrollador full stack. Publico apps móviles en la App Store y trabajo dentro del fork de un framework ERP que corre en producción.",
      en: "Full stack developer. I ship mobile apps to the App Store and work inside the fork of an ERP framework running in production.",
    },
    cta: { es: "Ver mi trabajo", en: "See my work" },
    ctaContact: { es: "Contáctame", en: "Get in touch" },
  },
  stats: {
    appStore: { es: "app publicada en la App Store", en: "app live on the App Store" },
    prs: { es: "PRs mergeados en un fork de Odoo", en: "merged PRs in an Odoo fork" },
    devices: { es: "dispositivos iOS soportados", en: "supported iOS devices" },
  },
  sections: {
    work: { es: "Trabajo seleccionado", en: "Selected work" },
    about: { es: "Sobre mí", en: "About" },
    stack: { es: "Stack", en: "Stack" },
    contact: { es: "Hablemos", en: "Let's talk" },
  },
  about: {
    p1: {
      es: "Me muevo entre dos mundos: apps móviles que usa gente real y back ends empresariales que no pueden fallar. Suena lejano, pero es el mismo músculo — entender el problema de alguien y no soltarlo hasta que la solución se sienta obvia.",
      en: "I move between two worlds: mobile apps used by real people, and enterprise back ends that can't afford to fail. Sounds distant, but it's the same muscle — understand someone's problem and don't let go until the solution feels obvious.",
    },
    p2: {
      es: "Del lado móvil saqué una app a la App Store yo solo: diseño, desarrollo, revisión de Apple y releases. Del lado backend trabajo dentro del framework de Odoo, donde un bug no rompe una pantalla, rompe el ERP de una empresa entera.",
      en: "On the mobile side I took an app to the App Store on my own: design, build, Apple review and releases. On the backend side I work inside the Odoo framework, where a bug doesn't break a screen — it breaks an entire company's ERP.",
    },
    p3: {
      es: "Me importa el detalle: el linting, las guías de estilo, los hooks que evitan que la prisa se convierta en deuda. Y me importa que la interfaz se sienta bien, no solo que funcione.",
      en: "I care about the details: linting, style guides, the hooks that stop a rush from turning into debt. And I care that the interface feels right, not just that it works.",
    },
    location: { es: "México · disponible en remoto", en: "México · available remotely" },
  },
  contact: {
    lead: {
      es: "¿Tienes un proyecto, una vacante o una idea a medias? Escríbeme.",
      en: "Got a project, a role or a half-formed idea? Drop me a line.",
    },
    email: { es: "Enviar correo", en: "Send an email" },
  },
  footer: {
    built: { es: "Hecho con", en: "Built with" },
    source: { es: "Código del sitio", en: "Site source" },
  },
} as const;
