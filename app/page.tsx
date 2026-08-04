import { About } from "@/components/About";
import { Contact, Footer } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";

/**
 * Resolved once at build time. The number only moves when a PR merges, and a
 * client-side call would burn an unauthenticated rate limit on every visit.
 */
async function getMergedPrCount(): Promise<number> {
  const FALLBACK = 59;
  try {
    const res = await fetch(
      "https://api.github.com/search/issues?q=author:JemXiaolong+is:pr+is:merged+repo:Agro-Marin/odoo",
      { headers: { Accept: "application/vnd.github+json" } },
    );
    if (!res.ok) return FALLBACK;
    const data: { total_count?: number } = await res.json();
    return data.total_count ?? FALLBACK;
  } catch {
    return FALLBACK;
  }
}

export default async function Home() {
  const prCount = await getMergedPrCount();

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Work prCount={prCount} />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
