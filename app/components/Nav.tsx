/*
  Nav — shared site navigation.
  Used by both the homepage and the About page (and any future pages).
  Refactoring this out of page.tsx so we don't duplicate it across routes.
*/

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full border-b border-black/5">
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Brand — links back to home */}
        <Link
          href="/"
          className="text-sm font-medium tracking-tight hover:text-[var(--color-coral)] transition-colors"
        >
          Pouria Ebram
        </Link>

        {/* Page links */}
        <div className="hidden sm:flex items-center gap-7 text-sm text-[var(--color-ink-soft)]">
          <Link href="/about" className="hover:text-[var(--color-ink)] transition-colors">
            About
          </Link>
          <a href="/#work" className="hover:text-[var(--color-ink)] transition-colors">
            Work
          </a>
          <a href="/about#contact" className="hover:text-[var(--color-ink)] transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
