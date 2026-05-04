/*
  Footer — shared site footer.
  Same instance used on every page.
*/

export default function Footer() {
  return (
    <footer className="border-t border-black/5 mt-12">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[var(--color-ink-soft)]">
        <span>&copy; {new Date().getFullYear()} Pouria Ebram</span>
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
            href="https://github.com/Pouria-Ebram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-coral)] transition-colors"
          >
            GitHub
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
  );
}
