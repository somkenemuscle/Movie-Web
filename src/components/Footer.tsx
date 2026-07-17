import { Link } from 'react-router-dom'
import './Footer.css'

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Browse Movies', href: '#featured' },
    { label: 'Genres', href: '#genres' },
    { label: 'Watchlist', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
  ],
  Support: [
    { label: 'Help Center', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Privacy', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-icon" aria-hidden="true">
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
              CineVault
            </Link>
            <p className="footer__tagline">
              Your ultimate movie discovery platform. Find, track, and explore films across every genre.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Twitter / X">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="footer__column">
              <h4 className="footer__column-title">{title}</h4>
              <ul className="footer__links">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer__link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} CineVault. All rights reserved.</p>
          <p className="footer__bottom-links">
            <a href="#">Terms</a>
            <span>·</span>
            <a href="#">Privacy</a>
            <span>·</span>
            <a href="#">Cookies</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
