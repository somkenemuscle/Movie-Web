import { Link } from 'react-router-dom'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import './AuthPage.css'

const IconEmail = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
)

const IconLock = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const posterGradients = [
  'linear-gradient(160deg, #0f0c29 0%, #2d1b69 100%)',
  'linear-gradient(160deg, #1a0533 0%, #5b21b6 100%)',
  'linear-gradient(160deg, #0a2e1e 0%, #134e5e 100%)',
  'linear-gradient(160deg, #2d0a00 0%, #7f1d1d 100%)',
  'linear-gradient(160deg, #1a1040 0%, #312e81 100%)',
  'linear-gradient(160deg, #1a0a00 0%, #6b2800 100%)',
]

export function LoginPage() {
  return (
    <div className="auth-layout">
      {/* ── Left brand panel ── */}
      <div className="auth-brand">
        <div className="auth-brand__bg" aria-hidden="true">
          <div className="auth-brand__blob auth-brand__blob--1" />
          <div className="auth-brand__blob auth-brand__blob--2" />
        </div>

        <div className="auth-brand__inner">
          <Link to="/" className="auth-brand__logo">
            <svg viewBox="0 0 32 32" fill="none">
              <rect x="2" y="7" width="28" height="20" rx="3" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
              <rect x="2" y="7" width="5" height="20" fill="currentColor" opacity="0.3" />
              <rect x="25" y="7" width="5" height="20" fill="currentColor" opacity="0.3" />
              <rect x="4" y="10" width="3" height="4" rx="1" fill="currentColor" />
              <rect x="4" y="17" width="3" height="4" rx="1" fill="currentColor" />
              <rect x="25" y="10" width="3" height="4" rx="1" fill="currentColor" />
              <rect x="25" y="17" width="3" height="4" rx="1" fill="currentColor" />
              <polygon points="13,12 13,22 22,17" fill="currentColor" />
            </svg>
            <span>CineVault</span>
          </Link>

          <div className="auth-brand__content">
            <h1 className="auth-brand__title">
              Your Cinema<br />Universe
            </h1>
            <p className="auth-brand__sub">
              Discover, track, and explore 10,000+ movies from every genre, era, and corner of the world.
            </p>

            <ul className="auth-brand__perks">
              <li>
                <span className="auth-brand__perk-icon">🎬</span>
                <span>10,000+ Movies &amp; Series</span>
              </li>
              <li>
                <span className="auth-brand__perk-icon">⭐</span>
                <span>Ratings, Reviews &amp; Scores</span>
              </li>
              <li>
                <span className="auth-brand__perk-icon">📋</span>
                <span>Personal Watchlists</span>
              </li>
            </ul>
          </div>

          <div className="auth-brand__posters" aria-hidden="true">
            {posterGradients.map((g, i) => (
              <div
                key={i}
                className="auth-brand__poster"
                style={{ background: g }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Right form panel ── */}
      <div className="auth-form-panel">
        <div className="auth-form-inner">
          <div className="auth-form-header">
            <h2 className="auth-form-title">Welcome back</h2>
            <p className="auth-form-sub">Sign in to continue your cinematic journey.</p>
          </div>

          {/* Social login */}
          <button type="button" className="auth-social-btn">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>

          <div className="auth-divider">
            <span>or sign in with email</span>
          </div>

          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              icon={IconEmail}
            />
            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              icon={IconLock}
            />

            <div className="auth-form-row">
              <label className="auth-remember">
                <input type="checkbox" className="auth-remember__check" />
                <span>Remember me</span>
              </label>
              <a href="#" className="auth-link">Forgot password?</a>
            </div>

            <Button type="submit" variant="primary" size="lg" className="auth-submit">
              Sign In
            </Button>
          </form>

          <p className="auth-switch">
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="auth-link auth-link--accent">
              Create one free
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
