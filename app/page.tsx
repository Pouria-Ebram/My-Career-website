/*
  Homepage
  --------
  Hero (your headline + bio + CTAs + photo placeholder).
  Nav and Footer are now shared components in app/components/, so they're
  consistent across every page on the site.
*/

import Image from "next/image";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Nav />

      {/* ============ HERO ============ */}
      <section className="flex-1 max-w-5xl w-full mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-ink-soft)] mb-5">
              Lead Data Scientist · Melbourne
            </p>
            <h1 className="heading-serif text-4xl md:text-6xl text-[var(--color-ink)] mb-6">
              Building AI products that matter.
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-[var(--color-ink-muted)] max-w-xl mb-8">
              I lead GenAI initiatives at{" "}
              <span className="text-[var(--color-ink)]">I-MED Radiology</span>,
              Australia&rsquo;s largest medical imaging network. After a decade
              across telecom and healthcare, I&rsquo;m focused on AI product
              leadership &mdash; turning frontier models into useful, trusted
              products.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[var(--color-ink)] text-white text-sm font-medium hover:bg-[var(--color-coral)] transition-colors"
              >
                Read about me
                <span aria-hidden>&rarr;</span>
              </a>
              <a
                href="/#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-black/15 text-sm font-medium hover:border-[var(--color-coral)] hover:text-[var(--color-coral)] transition-colors"
              >
                See my work
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div className="order-first md:order-last">
            <div className="relative aspect-square w-full max-w-xs mx-auto rounded-2xl overflow-hidden border border-black/5 bg-[var(--color-paper-warm)]">
              <Image
                src="/me.jpg"
                alt="Pouria Ebram"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
