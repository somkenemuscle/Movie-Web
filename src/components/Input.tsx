import './Input.css'

interface InputProps {
  id: string
  label: string
  type?: string
  placeholder?: string
  autoComplete?: string
  icon?: React.ReactNode
}

export function Input({
  id,
  label,
  type = 'text',
  placeholder,
  autoComplete,
  icon,
}: InputProps) {
  return (
    <div className="input-group">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <div className={`input-wrapper${icon ? ' input-wrapper--icon' : ''}`}>
        {icon && (
          <span className="input-icon" aria-hidden="true">
            {icon}
          </span>
        )}
        <input
          id={id}
          type={type}
          className="input-field"
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
      </div>
    </div>
  )
}
