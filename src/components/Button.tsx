import { Link } from 'react-router-dom'

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

const BASE_CLASSES =
  'inline-flex items-center justify-center gap-2 font-body font-semibold rounded-full whitespace-nowrap no-underline ' +
  'transition-[transform,background,box-shadow,border-color,filter,color] duration-[220ms] ease-out active:scale-[0.97]'

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'py-2 text-[13px]',
  md: 'py-3 text-sm',
  lg: 'py-[15px] text-[15px] tracking-[0.01em]',
}

const SIZE_PADDING_X: Record<ButtonSize, string> = {
  sm: 'px-5',
  md: 'px-7',
  lg: 'px-9',
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-[image:var(--gradient-accent)] text-white shadow-[0_4px_20px_var(--color-accent-glow)] ' +
    'hover:shadow-[0_8px_32px_var(--color-accent-glow)] hover:-translate-y-0.5 hover:brightness-110 ' +
    'active:translate-y-0 active:brightness-100',
  secondary:
    'bg-[rgba(139,92,246,0.08)] text-text border-[1.5px] border-border-strong ' +
    'hover:bg-[rgba(139,92,246,0.16)] hover:border-accent hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(139,92,246,0.2)]',
  ghost: 'bg-transparent text-text-muted px-4 hover:text-text hover:bg-[rgba(139,92,246,0.08)]',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = [
    BASE_CLASSES,
    SIZE_CLASSES[size],
    variant === 'ghost' ? '' : SIZE_PADDING_X[size],
    VARIANT_CLASSES[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ')

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
