import { Link } from 'react-router-dom'

const footerLinks = {
  Explore: [
    { label: 'Search Movies', href: '/search' },
    { label: 'About', href: '/about' },
  ],
  Legal: [
    { label: 'Contact', href: 'https://www.alkademy.com/contact' },
    { label: 'Privacy', href: 'https://www.alkademy.com/privacy' },
  ],
}

export function Footer() {
  return (
    <footer className="mt-auto py-16 pb-8 bg-bg-elevated border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr] gap-10 md:gap-12 pb-10 border-b border-border">
          <div className="flex flex-col gap-4 max-w-[360px]">
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
            <p className="text-sm text-text-muted leading-[1.7]">
              Your ultimate movie discovery platform. Search, explore, and learn about films across every genre.
            </p>
            <div className="flex gap-2.5 mt-1">
              <a
                href="https://x.com/AlkademyLearn"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-[38px] h-[38px] text-text-muted bg-surface border border-border rounded-md transition-[color,background,border-color,transform] duration-150 hover:text-accent hover:bg-[rgba(139,92,246,0.1)] hover:border-[rgba(139,92,246,0.3)] hover:-translate-y-0.5 [&_svg]:w-4 [&_svg]:h-4"
                aria-label="Twitter / X"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/alkademy_learning"
                target="_blank"
                rel="noreferrer"
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
                href="https://www.linkedin.com/company/alkademylearning/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-[38px] h-[38px] text-text-muted bg-surface border border-border rounded-md transition-[color,background,border-color,transform] duration-150 hover:text-accent hover:bg-[rgba(139,92,246,0.1)] hover:border-[rgba(139,92,246,0.3)] hover:-translate-y-0.5 [&_svg]:w-4 [&_svg]:h-4"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
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

        <p className="pt-6 text-[13px] text-text-subtle text-center md:text-left">
          &copy; {new Date().getFullYear()} Alkademy CineVault. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
