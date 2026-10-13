export type Lang = "es" | "en";

export const APP_STORE_URL =
  "https://apps.apple.com/mx/app/app-grupo-educativo-hidalgo/id6770196534";
export const GITHUB_URL = "https://github.com/JemXiaolong";
export const LINKEDIN_URL = "https://www.linkedin.com/in/jemxiaolong/";
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
        "Avisos oficiales segmentados por grado y grupo, con acuse de lectura",
        "Autorizaciones de salida por código QR con expiración de 15 minutos, para validación presencial en el acceso del plantel",
        "Modo oscuro, navegación inferior rediseñada y gráficas (v1.1.0)",
      ],
      en: [
        "Multi-child dashboard with overall average and active reports at a glance",
        "Grades by subject and term, with colour indicators that surface the weak spot instantly",
        "Official announcements targeted per grade and group, with read receipts",
        "QR-code exit authorisations with a 15-minute expiry, validated in person at the school entrance",
        "Dark mode, redesigned bottom navigation and charts (v1.1.0)",
      ],
    },
    tags: ["React Native", "TypeScript", "Zustand", "EAS Build", "iOS + Android"],
    href: APP_STORE_URL,
    linkLabel: { es: "Ver en la App Store", en: "View on the App Store" },
    featured: true,
  },
  {
    id: "historial-clinico",
    year: { es: "2026", en: "2026" },
    title: { es: "Historial Clínico", en: "Historial Clínico" },
    role: {
      es: "Producto propio — diseño, desarrollo y distribución",
      en: "My own product — design, build and distribution",
    },
    summary: {
      es: "Expediente clínico electrónico para consultorios: pacientes, antecedentes, consultas, recetas imprimibles, estudios de laboratorio y hospitalizaciones. Corre en una PC del consultorio, se abre desde cualquier compu de la red y se instala con un .exe que se actualiza solo.",
      en: "An electronic medical record for private practices: patients, history, consultations, printable prescriptions, lab studies and hospital stays. It runs on one office PC, opens from any machine on the network and installs from a self-updating .exe.",
    },
    points: {
      es: [
        "Roles con acceso por médico tratante: cada médico ve solo a sus pacientes; la asistente registra y sube estudios sin ver consultas ni recetas",
        "Especialidades configurables: cada una oculta campos o crea los suyos (texto, número con unidad, fecha, listas), con plantillas para Pediatría, Ginecología, Cardiología, Nutrición y Salud mental",
        "Estudios con varios archivos (PDF e imágenes, HEIC de iPhone convertido a JPG), visor con zoom y rotación, y tipo validado por el contenido, no por la extensión",
        "Instalador de Windows sin permisos de administrador y actualizaciones automáticas desde GitHub Releases con verificación SHA-256",
        "Migraciones de base solo aditivas, con respaldo previo, para que cualquier versión vieja suba a la última sin perder datos",
      ],
      en: [
        "Role-based access by treating physician: each doctor sees only their own patients; the assistant registers patients and uploads studies without seeing consultations or prescriptions",
        "Configurable specialties: each one hides fields or adds its own (text, number with unit, date, lists), with templates for Paediatrics, Gynaecology, Cardiology, Nutrition and Mental health",
        "Studies with multiple files (PDF and images, iPhone HEIC converted to JPG), a viewer with zoom and rotation, and file type validated by content, not extension",
        "Windows installer that needs no admin rights, with automatic updates from GitHub Releases verified by SHA-256",
        "Additive-only database migrations with a backup first, so any old version upgrades to the latest without losing data",
      ],
    },
    tags: ["Next.js 16", "TypeScript", "Prisma", "SQLite", "Electron", "Zod"],
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
    id: "potato-debug",
    year: { es: "2026", en: "2026" },
    title: { es: "Potato Debug", en: "Potato Debug" },
    role: {
      es: "Extensión de navegador para Odoo 19",
      en: "Browser extension for Odoo 19",
    },
    summary: {
      es: "Extensión que permite alternar el modo debug y los assets en Odoo 19, con un panel de inspección de récords. Nació de una molestia diaria: dejar de escribir la URL a mano cada vez.",
      en: "An extension that toggles debug mode and assets in Odoo 19, with a record inspection panel. Born from a daily annoyance: never typing that URL by hand again.",
    },
    points: { es: [], en: [] },
    tags: ["JavaScript", "Chrome Extension", "Odoo"],
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

export interface Role {
  id: string;
  company: string;
  title: Copy;
  period: Copy;
  length: Copy;
  place: Copy;
  summary: Copy;
  points: { es: string[]; en: string[] };
  stack: string[];
}

export const EXPERIENCE: Role[] = [
  {
    id: "agromarin",
    company: "AgroMarin",
    title: { es: "Full Stack Developer", en: "Full Stack Developer" },
    period: { es: "ago. 2025 — actualidad", en: "Aug 2025 — present" },
    length: { es: "1 año 2 meses", en: "1 yr 2 mos" },
    place: { es: "Metepec, Estado de México", en: "Metepec, México" },
    summary: {
      es: "Desarrollo y mantenimiento de módulos custom sobre un fork interno de Odoo 19 para operaciones agroindustriales: ventas, compras, inventario, geoespacial e integraciones.",
      en: "Custom module development and maintenance on an internal Odoo 19 fork for agro-industrial operations: sales, purchasing, inventory, geospatial and integrations.",
    },
    points: {
      es: [
        "Más de 5,000 commits entre el framework y los addons, incluyendo el core: ORM, cliente web OWL, mensajería, editor HTML y contabilidad. Buena parte llegaron por loops de auditoría con agentes de IA que diseñé (lint, guías, tests), cada uno con su PR revisable",
        "Migración de producción de AWS a OVH: despliegue A/B, respaldos con pgBackRest en dos regiones y restic, CrowdSec y aprovisionamiento con Ansible",
        "odoo-rust-orm: reimplementación en Rust de la ruta de lectura del ORM, comparada en sombra contra el ORM de Python sobre la base real",
        "Archivos del ERP en object storage (S3) con modo híbrido, y login por llave SSH sin API keys (auth_unix_peer)",
        "Telegram como superficie de operación: aprobaciones, asistencias y un bot que responde preguntas sobre los datos del ERP, incluida la ubicación GPS de la flotilla",
        "Servidor MCP para que agentes de IA lean y escriban en el ERP con los permisos de cada usuario",
        "Ingesta continua de telemetría GPS y sensores industriales con cola de trabajos; diagnóstico de contención de concurrencia en PostgreSQL bajo ráfagas de escritura",
        "Rendimiento en producción: perfilado de consultas lentas, planes de ejecución, tuning de PostgreSQL y dimensionamiento de workers",
      ],
      en: [
        "5,000+ commits across the framework and addons, including core: ORM, OWL web client, messaging, HTML editor and accounting. Many landed through AI-agent audit loops I designed (lint, guidelines, tests), each with its own reviewable PR",
        "Moved production from AWS to OVH: A/B deploys, pgBackRest backups in two regions plus restic, CrowdSec and Ansible provisioning",
        "odoo-rust-orm: a Rust reimplementation of the ORM read path, shadow-diffed against the Python ORM on the real database",
        "ERP files on object storage (S3) with a hybrid mode, and SSH-key login with no API keys (auth_unix_peer)",
        "Telegram as an operations surface: approvals, attendance and a bot that answers questions about ERP data, including the fleet's GPS location",
        "An MCP server so AI agents read and write the ERP with each user's own permissions",
        "Continuous GPS and industrial-sensor telemetry ingest on a job queue; diagnosed PostgreSQL concurrency contention under write bursts",
        "Production performance: slow-query profiling, execution plans, PostgreSQL tuning and worker sizing",
      ],
    },
    stack: ["Odoo 19", "Python 3.14", "PostgreSQL 18", "PostGIS", "OWL", "Rust", "OVH", "AWS", "Ansible", "MCP"],
  },
  {
    id: "geh-role",
    company: "Grupo Educativo Hidalgo",
    title: { es: "Desarrollador Móvil (React Native)", en: "Mobile Developer (React Native)" },
    period: { es: "ene. 2026 — jun. 2026", en: "Jan 2026 — Jun 2026" },
    length: { es: "6 meses", en: "6 mos" },
    place: { es: "México · remoto", en: "México · remote" },
    summary: {
      es: "Desarrollo de «Portal Escolar GEH» para Android e iOS, de la arquitectura a la publicación en la App Store.",
      en: "Built “Portal Escolar GEH” for Android and iOS, from architecture through App Store release.",
    },
    points: {
      es: [
        "Diseño y desarrollo end-to-end: arquitectura, navegación, interfaz y compilación de binarios distribuibles",
        "Seis módulos para padres de familia: calificaciones por bimestre, historial de asistencia, comunicados con acuse de lectura, estado de pagos y autorizaciones de salida",
        "Autorizaciones de salida por código QR con expiración de 15 minutos, pensadas para validación presencial en el acceso del plantel",
        "Soporte multi-alumno: una cuenta de tutor administra a varios hijos inscritos",
        "Sesión persistente y estado global con Zustand + AsyncStorage",
        "Builds de Android (APK) con EAS Build y ciclo completo de release en App Store: firma, ficha de tienda y actualizaciones",
      ],
      en: [
        "End-to-end design and development: architecture, navigation, interface and distributable binaries",
        "Six modules for parents: term grades, attendance history, announcements with read receipts, payment status and exit authorisations",
        "QR-code exit authorisations with a 15-minute expiry, designed for in-person validation at the school entrance",
        "Multi-student support: one guardian account manages several enrolled children",
        "Persistent sessions and global state with Zustand + AsyncStorage",
        "Android (APK) builds via EAS Build and the full App Store release cycle: signing, store listing and updates",
      ],
    },
    stack: ["React Native", "TypeScript", "Zustand", "AsyncStorage", "EAS Build", "React Native SVG"],
  },
  {
    id: "cecytem",
    company: "CECYTEM",
    title: { es: "Senior Full Stack Developer", en: "Senior Full Stack Developer" },
    period: { es: "mar. 2018 — ago. 2025", en: "Mar 2018 — Aug 2025" },
    length: { es: "7 años 6 meses", en: "7 yrs 6 mos" },
    place: { es: "Xonacatlán, Estado de México", en: "Xonacatlán, México" },
    summary: {
      es: "Lideré el desarrollo de software institucional durante siete años, construyendo plataformas educativas y automatizaciones para una de las instituciones de educación tecnológica más grandes del Estado de México.",
      en: "Led institutional software development for seven years, building educational platforms and automation for one of the largest technical-education institutions in the State of México.",
    },
    points: {
      es: [
        "Diseñé y desarrollé el sistema de inscripciones institucional, optimizando el registro de +2,000 alumnos por ciclo escolar",
        "Automatizaciones con Google Apps Script integrando Classroom, Drive y Docs para flujos académicos",
        "Desarrollé y personalicé módulos en Odoo ERP (Enterprise), incluyendo correcciones de bugs en el core",
        "Lideré proyectos de innovación: intérprete de lenguaje de señas con Python/IA, asistencias inteligentes y bot institucional",
        "Sitio web institucional, plataforma interna de gestión académica y robótica educativa con Arduino",
      ],
      en: [
        "Designed and built the institutional enrolment system, streamlining registration for 2,000+ students per school year",
        "Google Apps Script automation integrating Classroom, Drive and Docs for academic workflows",
        "Developed and customised Odoo ERP (Enterprise) modules, including core bug fixes",
        "Led innovation projects: a sign-language interpreter with Python/AI, smart attendance and an institutional bot",
        "Institutional website, internal academic-management platform and educational robotics with Arduino",
      ],
    },
    stack: ["React", "Vue", "Django", "Python", "MySQL", "Odoo", "Google Apps Script", "Arduino"],
  },
  {
    id: "freelance",
    company: "Freelance",
    title: { es: "Desarrollador Freelance", en: "Freelance Developer" },
    period: { es: "mar. 2016 — mar. 2018", en: "Mar 2016 — Mar 2018" },
    length: { es: "2 años", en: "2 yrs" },
    place: { es: "Metepec, México", en: "Metepec, México" },
    summary: {
      es: "Aplicaciones web y sitios a medida para clientes locales, combinando frontend con diseño gráfico y branding.",
      en: "Custom web apps and sites for local clients, pairing frontend work with graphic design and branding.",
    },
    points: {
      es: [
        "Aplicaciones web a medida con backend en Python y Java sobre MySQL",
        "Sitios institucionales y comerciales con PHP y JavaScript",
        "Diseño gráfico y branding para clientes locales",
      ],
      en: [
        "Custom web applications with Python and Java back ends on MySQL",
        "Institutional and commercial sites with PHP and JavaScript",
        "Graphic design and branding for local clients",
      ],
    },
    stack: ["Python", "Java", "JavaScript", "MySQL", "PHP", "Photoshop", "Illustrator"],
  },
  {
    id: "gegames",
    company: "Ge Games",
    title: { es: "Producción y posproducción de personajes", en: "Character production & post-production" },
    period: { es: "ene. 2014 — ago. 2016", en: "Jan 2014 — Aug 2016" },
    length: { es: "2 años 8 meses", en: "2 yrs 8 mos" },
    place: { es: "Toluca, México · remoto", en: "Toluca, México · remote" },
    summary: {
      es: "Diseño de personajes 3D y programación de interacción para videojuego, además de la producción musical y de video.",
      en: "3D character design and interaction programming for a video game, plus music and video production.",
    },
    points: {
      es: [
        "Personajes 3D con Blender, Photoshop e Illustrator",
        "Programación de funciones de interacción en C# dentro de Unity",
        "Producción musical y de video para el juego y su publicidad",
      ],
      en: [
        "3D characters with Blender, Photoshop and Illustrator",
        "Interaction features programmed in C# inside Unity",
        "Music and video production for the game and its marketing",
      ],
    },
    stack: ["Unity", "C#", "Blender", "Photoshop", "Illustrator"],
  },
];

export const STACK: { label: Copy; items: string[] }[] = [
  {
    label: { es: "Móvil y frontend", en: "Mobile & frontend" },
    items: ["React Native", "Expo", "TypeScript", "JavaScript", "React", "Vue", "Next.js", "Tailwind CSS", "OWL", "Zustand"],
  },
  {
    label: { es: "Backend y datos", en: "Backend & data" },
    items: ["Python", "Odoo", "Django", "PostgreSQL", "PostGIS", "MySQL", "Node.js", "REST APIs", "Rust"],
  },
  {
    label: { es: "Infra y herramientas", en: "Infra & tooling" },
    items: ["Linux", "Docker", "AWS (EC2, S3, IoT Core)", "MQTT", "nginx", "Git", "GitHub Actions", "EAS Build", "pre-commit"],
  },
];

export const UI = {
  nav: {
    work: { es: "Trabajo", en: "Work" },
    experience: { es: "Experiencia", en: "Experience" },
    about: { es: "Sobre mí", en: "About" },
    contact: { es: "Contacto", en: "Contact" },
    cv: { es: "CV", en: "CV" },
  },
  hero: {
    line1: { es: "Construyo cosas", en: "I build things" },
    line2: { es: "que la gente", en: "people actually" },
    line3: { es: "de verdad usa.", en: "use." },
    sub: {
      es: "Desarrollador full stack, diez años construyendo software. Publico apps móviles en la App Store y trabajo dentro del fork de un framework ERP que corre en producción.",
      en: "Full stack developer, ten years building software. I ship mobile apps to the App Store and work inside the fork of an ERP framework running in production.",
    },
    cta: { es: "Ver mi trabajo", en: "See my work" },
    ctaContact: { es: "Contáctame", en: "Get in touch" },
  },
  stats: {
    years: { es: "años construyendo software", en: "years building software" },
    commits: { es: "commits en el fork de un framework ERP", en: "commits in an ERP framework fork" },
    modules: { es: "módulos nuevos escritos desde cero", en: "new modules written from scratch" },
  },
  sections: {
    work: { es: "Trabajo seleccionado", en: "Selected work" },
    experience: { es: "Experiencia", en: "Experience" },
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

export const PORTFOLIO_URL = "https://jemxiaolong.github.io";
export const CV_PDF_PATH: Record<Lang, string> = {
  es: "/cv/CV-Eli-Jeziel-Escudero-Maldonado.pdf",
  en: "/cv/CV-Eli-Jeziel-Escudero-Maldonado-EN.pdf",
};

export const CV = {
  name: "Eli Jeziel Escudero Maldonado",
  headline: { es: "Senior Full Stack Developer · Odoo 19", en: "Senior Full Stack Developer · Odoo 19" },
  location: { es: "Metepec, Estado de México · remoto", en: "Metepec, México · remote" },
  summary: {
    es: "Desarrollador full stack con más de diez años construyendo software. Trabajo dentro del fork del framework Odoo 19 que sostiene un ERP en producción —ORM, cliente web OWL, infraestructura y CI— y saco productos completos por mi cuenta: una app publicada en la App Store y un expediente clínico electrónico que se instala y se actualiza solo.",
    en: "Full stack developer with over ten years building software. I work inside the Odoo 19 framework fork behind a production ERP —ORM, OWL web client, infrastructure and CI— and ship complete products on my own: an app live on the App Store and an electronic medical record that installs and updates itself.",
  },
  certifications: [
    { name: "Microsoft Certified Systems Engineer (MCSE)", year: "2016" },
    { name: "EC0160 Desarrollo de Código de Software", year: "2022" },
    { name: "Databases — IT Specialist", year: "2023" },
    { name: "Software Development — IT Specialist", year: "2023" },
    { name: "Desarrollo de Apps Móviles — Google", year: "2022" },
    { name: "Desarrollo Web II — Google", year: "2022" },
  ],
  education: [
    {
      period: "2020 — 2023",
      title: {
        es: "Lic. en Informática Administrativa: Desarrollo de Software",
        en: "B.Sc. Business Informatics: Software Development",
      },
      school: "Universidad Digital del Estado de México (UDEMEX)",
    },
    {
      period: "2013 — 2016",
      title: {
        es: "Técnico en Programación y Animación Digital",
        en: "Technician in Programming and Digital Animation",
      },
      school: "CECyTEM — Metepec, Edo. Méx.",
    },
  ],
  languages: [
    { name: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" } },
    { name: { es: "Inglés", en: "English" }, level: { es: "Técnico", en: "Technical" } },
  ],
  ui: {
    contact: { es: "Contacto", en: "Contact" },
    stack: { es: "Habilidades", en: "Skills" },
    certifications: { es: "Certificaciones", en: "Certifications" },
    languages: { es: "Idiomas", en: "Languages" },
    profile: { es: "Perfil", en: "Profile" },
    experience: { es: "Experiencia", en: "Experience" },
    projects: { es: "Proyectos", en: "Projects" },
    education: { es: "Formación", en: "Education" },
    download: { es: "Descargar PDF", en: "Download PDF" },
    back: { es: "Portafolio", en: "Portfolio" },
    web: { es: "Versión interactiva", en: "Interactive version" },
  },
} as const;
