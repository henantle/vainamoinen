import React from 'react'

interface SectionProps {
  children: React.ReactNode
  id?: string
  className?: string
  variant?: 'default' | 'light' | 'dark'
}

export function Section({ children, id, className = '', variant = 'default' }: SectionProps) {
  const variantStyles = {
    default: 'bg-neutral-white',
    light: 'bg-neutral-light',
    dark: 'bg-neutral-dark text-neutral-white',
  }

  return (
    <section
      id={id}
      className={`py-16 px-4 md:px-8 ${variantStyles[variant]} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  )
}
