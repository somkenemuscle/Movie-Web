import type { ReactNode } from 'react'
import { Button } from './Button'

interface StateMessageProps {
  icon?: ReactNode
  title: string
  description?: string
  actionLabel?: string
  onAction?: () => void
  variant?: 'default' | 'error'
}

const DEFAULT_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const ERROR_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="8" x2="12" y2="13" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)

export function StateMessage({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  variant = 'default',
}: StateMessageProps) {
  return (
    <div className="flex flex-col items-center text-center gap-2 py-16 px-6 max-w-[420px] mx-auto animate-fade-in">
      <div
        className={`flex items-center justify-center w-16 h-16 mb-2 rounded-full [&_svg]:w-7 [&_svg]:h-7 ${
          variant === 'error'
            ? 'text-[#f87171] bg-[rgba(248,113,113,0.1)] border border-[rgba(248,113,113,0.25)]'
            : 'text-accent bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.22)]'
        }`}
        aria-hidden="true"
      >
        {icon ?? (variant === 'error' ? ERROR_ICON : DEFAULT_ICON)}
      </div>
      <h3 className="font-body text-lg font-bold text-text">{title}</h3>
      {description && <p className="text-sm text-text-muted leading-[1.7]">{description}</p>}
      {actionLabel && onAction && (
        <Button variant="secondary" size="md" onClick={onAction} className="mt-3">
          {actionLabel}
        </Button>
      )}
    </div>
  )
}
