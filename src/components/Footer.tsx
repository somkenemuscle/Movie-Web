import { Link } from 'react-router-dom'

const footerLinks = {
  Product: [
    { label: 'Search Movies', href: '/search' },
    { label: 'Features', href: '/about' },
    { label: 'Genres', href: '#genres' },
    { label: 'Watchlist', href: '#' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    // { label: 'Blog', href: '#' },
  ],
  Support: [
    { label: 'Contact', href: 'https://www.alkademy.com/contact' },
    { label: 'Privacy', href: 'https://www.alkademy.com/privacy' },
  ],
}

export function Footer() {
  return (
    <footer className="mt-auto py-16 pb-8 bg-bg-elevated border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.6fr_repeat(3,1fr)] gap-8 md:gap-12 pb-12 border-b border-border">
          <div className="flex flex-col gap-4 sm:col-span-2 md:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-2.5 font-display text-xl tracking-[0.08em] text-text transition-opacity duration-150 hover:opacity-80"
            >
              <span className="flex text-accent [&_svg]:w-7 [&_svg]:h-7" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none">
                  <rect x="2" y="7" width="28" height="20" rx="3" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
                  <rect x="2" y="7" width="5" height="20" fill="currentColor" opacity="0.25" />
                  <rect x="25" y="7" width="5" height="20" fill="currentColor" opacity="0.25" />
                  <rect x="4" y="10" width="3" height="4" rx="1" fill="currentColor" />
                  <rect x="4" y="17" width="3" height="4" rx="1" fill="currentColor" />
                  <rect x="25" y="10" width="3" height="4" rx="1" fill="currentColor" />
                  <rect x="25" y="17" width="3" height="4" rx="1" fill="currentColor" />
                  <polygon points="13,12 13,22 22,17" fill="currentColor" opacity="0.9" />
                </svg>
              </span>
              Alkademy CineVault
            </Link>
            <p className="text-sm text-text-muted leading-[1.7] max-w-[280px]">
              Your ultimate movie discovery platform. Find, track, and explore films across every genre.
            </p>
            <div className="flex gap-2.5">
              <a
                href="#"
                className="flex items-center justify-center w-[38px] h-[38px] text-text-muted bg-surface border border-border rounded-md transition-[color,background,border-color,transform] duration-150 hover:text-accent hover:bg-[rgba(139,92,246,0.1)] hover:border-[rgba(139,92,246,0.3)] hover:-translate-y-0.5 [&_svg]:w-4 [&_svg]:h-4"
                aria-label="Twitter / X"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-[38px] h-[38px] text-text-muted bg-surface border border-border rounded-md transition-[color,background,border-color,transform] duration-150 hover:text-accent hover:bg-[rgba(139,92,246,0.1)] hover:border-[rgba(139,92,246,0.3)] hover:-translate-y-0.5 [&_svg]:w-4 [&_svg]:h-4"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-[38px] h-[38px] text-text-muted bg-surface border border-border rounded-md transition-[color,background,border-color,transform] duration-150 hover:text-accent hover:bg-[rgba(139,92,246,0.1)] hover:border-[rgba(139,92,246,0.3)] hover:-translate-y-0.5 [&_svg]:w-4 [&_svg]:h-4"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-[38px] h-[38px] text-text-muted bg-surface border border-border rounded-md transition-[color,background,border-color,transform] duration-150 hover:text-accent hover:bg-[rgba(139,92,246,0.1)] hover:border-[rgba(139,92,246,0.3)] hover:-translate-y-0.5 [&_svg]:w-4 [&_svg]:h-4"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-body text-[11px] font-bold text-text-subtle mb-4 tracking-[0.1em] uppercase">
                {title}
              </h4>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        className="text-sm text-text-muted transition-colors duration-150 hover:text-text"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-text-muted transition-colors duration-150 hover:text-text"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 flex items-center justify-between flex-wrap gap-3">
          <p className="text-[13px] text-text-subtle">
            &copy; {new Date().getFullYear()} Alkademy CineVault. All rights reserved.
          </p>
          <p className="flex items-center gap-2.5">
            <a
              href="https://www.alkademy.com/privacy"
              target="_blank"
              rel="noreferrer"
              className="text-text-subtle text-[13px] transition-colors duration-150 hover:text-text-muted"
            >
              Privacy
            </a>
            <span className="text-border-strong">·</span>
            <a
              href="https://www.alkademy.com/contact"
              target="_blank"
              rel="noreferrer"
              className="text-text-subtle text-[13px] transition-colors duration-150 hover:text-text-muted"
            >
              Contact
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
