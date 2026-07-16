import { Link } from 'react-router-dom'
import './Button.css'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

interface ButtonAsButton extends ButtonBaseProps {
  to?: undefined
  type?: 'button' | 'submit'
  onClick?: () => void
}

interface ButtonAsLink extends ButtonBaseProps {
  to: string
  type?: undefined
  onClick?: undefined
}

type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim()

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={props.type ?? 'button'}
      className={classes}
      onClick={props.onClick}
    >
      {children}
    </button>
  )
}
