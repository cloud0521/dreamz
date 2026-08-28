import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary'

type ButtonProps = {
  children: ReactNode
  variant?: ButtonVariant
} & ButtonHTMLAttributes<HTMLButtonElement>

function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex min-h-11 w-full items-center justify-center rounded-full px-6 py-3 text-center text-sm font-semibold transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dreamz-gold focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto'

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-dreamz-burgundy text-white hover:bg-dreamz-burgundy-dark hover:-translate-y-0.5',
    secondary:
      'border border-dreamz-burgundy text-dreamz-burgundy hover:bg-dreamz-burgundy hover:text-white hover:-translate-y-0.5',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
