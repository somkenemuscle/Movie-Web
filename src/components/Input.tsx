interface InputProps {
  id: string
  label: string
  type?: string
  placeholder?: string
  autoComplete?: string
  icon?: React.ReactNode
  value?: string
  onChange?: (value: string) => void
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
}

const FIELD_CLASSES =
  'w-full py-3.5 px-4 text-sm font-body text-text bg-[rgba(139,92,246,0.05)] border-[1.5px] border-border-strong rounded-md outline-none ' +
  'transition-[border-color,box-shadow,background] duration-[250ms] placeholder:text-text-subtle placeholder:font-normal ' +
  'hover:border-[rgba(139,92,246,0.4)] hover:bg-[rgba(139,92,246,0.08)] ' +
  'focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-glow)] focus:bg-[rgba(139,92,246,0.1)]'

export function Input({
  id,
  label,
  type = 'text',
  placeholder,
  autoComplete,
  icon,
  value,
  onChange,
  onKeyDown,
}: InputProps) {
  return (
    <div className="flex flex-col gap-[7px]">
      <label htmlFor={id} className="text-xs font-semibold text-text-muted tracking-[0.06em] uppercase">
        {label}
      </label>
      <div className="relative group">
        {icon && (
          <span
            className="absolute left-[15px] top-1/2 -translate-y-1/2 flex items-center text-text-subtle pointer-events-none transition-colors duration-150 group-focus-within:text-accent [&_svg]:w-[17px] [&_svg]:h-[17px]"
            aria-hidden="true"
          >
            {icon}
          </span>
        )}
        <input
          id={id}
          type={type}
          className={`${FIELD_CLASSES} ${icon ? 'pl-[46px]' : ''}`}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  )
}
