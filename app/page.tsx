/*
  Homepage — Phase 1
  ------------------
  A simple, polished landing page with:
    - Top nav (placeholders for now, real pages come in Phase 2)
    - Hero with name, title, bio, two CTAs
    - Photo placeholder on the right
    - Footer with year + links

  Everything here is intentionally static for Phase 1. We'll add the
  chatbot, project gallery, and demos in later phases.
*/

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* ============ NAV ============ */}
      <nav className="w-full border-b border-black/5">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <span className="text-sm font-medium tracking-tight">
            Pouria Ebrahimzadeh
          </span>
          <div className="hidden sm:flex items-center gap-7 text-sm text-[var(--color-ink-soft)]">
            <a href="#about" className="hover:text-[var(--color-ink)] transition-colors">About</a>
            <a href="#work" className="hover:text-[var(--color-ink)] transition-colors">Work</a>
            <a href="#contact" className="hover:text-[var(--color-ink)] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* ============ HERO ============ */}
      <section className="flex-1 max-w-5xl w-full mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-ink-soft)] mb-5">
              Lead Data Scientist · Sydney
            </p>
            <h1 className="heading-serif text-4xl md:text-6xl text-[var(--color-ink)] mb-6">
              Building AI products that matter.
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-[var(--color-ink-muted)] max-w-xl mb-8">
              I lead AI initiatives at{" "}
              <span className="text-[var(--color-ink)]">I-MED Radiology</span>,
              Australia&rsquo;s largest medical imaging network. I&rsquo;m
              moving toward AI product leadership &mdash; combining deep ML
              craft with the product instincts that turn models into clinical
              tools.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[var(--color-ink)] text-white text-sm font-medium hover:bg-[var(--color-coral)] transition-colors"
              >
                Read about me
                <span aria-hidden>&rarr;</span>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-black/15 text-sm font-medium hover:border-[var(--color-coral)] hover:text-[var(--color-coral)] transition-colors"
              >
                See my work
              </a>
            </div>
          </div>

          {/* Right: photo placeholder */}
          <div className="order-first md:order-last">
            <div
              className="aspect-square w-full max-w-xs mx-auto rounded-2xl bg-[var(--color-paper-warm)] border border-black/5 flex items-center justify-center"
              aria-label="Photo placeholder"
            >
              <div className="text-center px-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-[var(--color-coral)] text-white text-2xl font-medium flex items-center justify-center mb-3">
                  PE
                </div>
                <p className="text-xs text-[var(--color-ink-soft)]">
                  Add a professional photo
                  <br />
                  to <code className="text-[10px]">/public/me.jpg</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-black/5 mt-12">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[var(--color-ink-soft)]">
          <span>&copy; {new Date().getFullYear()} Pouria Ebrahimzadeh</span>
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/pouria-ebram/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-coral)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:pouriaebzhd@gmail.com"
              className="hover:text-[var(--color-coral)] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
