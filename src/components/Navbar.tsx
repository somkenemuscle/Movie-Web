import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './Button'

function navLinkClasses(active: boolean) {
  return `py-2 px-4 text-sm font-medium rounded-full transition-colors duration-150 md:text-sm text-base md:py-2 py-3.5 ${
    active ? 'text-text bg-[rgba(139,92,246,0.14)]' : 'text-text-muted hover:text-text hover:bg-[rgba(139,92,246,0.1)]'
  }`
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isAuthPage =
    location.pathname === '/login' || location.pathname === '/signup'

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] h-[var(--nav-height)] bg-[rgba(6,6,15,0.82)] backdrop-blur-2xl border-b border-border shadow-[0_1px_32px_rgba(0,0,0,0.5)]">
      <div className="container flex items-center justify-between h-full gap-6">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-display text-[clamp(16px,3.6vw,22px)] tracking-[0.08em] text-text whitespace-nowrap transition-opacity duration-150 hover:opacity-80"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex items-center justify-center w-9 h-9 text-accent [&_svg]:w-[30px] [&_svg]:h-[30px]" aria-hidden="true">
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
          <span className="bg-[image:var(--gradient-accent)] bg-clip-text text-transparent">Alkademy CineVault</span>
        </Link>

        {!isAuthPage && (
          <>
            <nav
              className={`flex items-center gap-1 max-md:fixed max-md:top-[var(--nav-height)] max-md:left-0 max-md:right-0 max-md:flex-col max-md:items-stretch max-md:p-4 max-md:gap-1 max-md:bg-[rgba(6,6,15,0.97)] max-md:backdrop-blur-2xl max-md:border-b max-md:border-border max-md:shadow-[0_8px_32px_rgba(0,0,0,0.6)] max-md:transition-[transform,opacity] max-md:duration-250 ${
                menuOpen
                  ? 'max-md:translate-y-0 max-md:opacity-100 max-md:pointer-events-auto'
                  : 'max-md:-translate-y-[110%] max-md:opacity-0 max-md:pointer-events-none'
              }`}
              aria-label="Main navigation"
            >
              <Link
                to="/"
                className={navLinkClasses(location.pathname === '/')}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/search"
                className={navLinkClasses(location.pathname === '/search')}
                onClick={() => setMenuOpen(false)}
              >
                Search
              </Link>
              <Link
                to="/about"
                className={navLinkClasses(location.pathname === '/about')}
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/login"
                className={`${navLinkClasses(false)} md:hidden block`}
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={`${navLinkClasses(false)} md:hidden block`}
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <Button to="/login" variant="ghost" size="sm">
                Login
              </Button>
              <Button to="/signup" variant="primary" size="sm">
                Sign Up
              </Button>
            </div>

            <button
              type="button"
              className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 p-1.5"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span
                className={`block w-full h-0.5 bg-text-muted rounded-sm transition-transform duration-250 ${
                  menuOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-text-muted rounded-sm transition-opacity duration-250 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-text-muted rounded-sm transition-transform duration-250 ${
                  menuOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </button>
          </>
        )}

        {isAuthPage && (
          <Link to="/" className="text-sm font-medium text-text-muted transition-colors duration-150 hover:text-text">
            ← Back to Home
          </Link>
        )}
      </div>
    </header>
  )
}
