import { Link } from 'react-router-dom'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import './AuthPage.css'

export function LoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-page__bg">
        <div className="auth-page__bg-glow auth-page__bg-glow--1" />
        <div className="auth-page__bg-glow auth-page__bg-glow--2" />
      </div>

      <div className="auth-card">
        <div className="auth-card__header">
          <h1 className="auth-card__title">Welcome back</h1>
          <p className="auth-card__subtitle">
            Sign in to continue exploring your favorite films.
          </p>
        </div>

        <form className="auth-card__form" onSubmit={(e) => e.preventDefault()}>
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
            placeholder="Enter your password"
            autoComplete="current-password"
          />

          <Button type="submit" variant="primary" size="lg" className="auth-card__submit">
            Login
          </Button>
        </form>

        <p className="auth-card__footer">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="auth-card__link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}
