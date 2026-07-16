import { Link } from 'react-router-dom'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import './AuthPage.css'

export function SignUpPage() {
  return (
    <div className="auth-page">
      <div className="auth-page__bg">
        <div className="auth-page__bg-glow auth-page__bg-glow--1" />
        <div className="auth-page__bg-glow auth-page__bg-glow--2" />
      </div>

      <div className="auth-card">
        <div className="auth-card__header">
          <h1 className="auth-card__title">Create your account</h1>
          <p className="auth-card__subtitle">
            Join CineVault and start building your watchlist today.
          </p>
        </div>

        <form className="auth-card__form" onSubmit={(e) => e.preventDefault()}>
          <Input
            id="name"
            label="Full Name"
            type="text"
            placeholder="John Doe"
            autoComplete="name"
          />
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
          />
          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="Create a strong password"
            autoComplete="new-password"
          />

          <Button type="submit" variant="primary" size="lg" className="auth-card__submit">
            Create Account
          </Button>
        </form>

        <p className="auth-card__footer">
          Already have an account?{' '}
          <Link to="/login" className="auth-card__link">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
