import React from 'react'

export interface SectionProps {
  id?: string
  children: React.ReactNode
  className?: string
  background?: 'light' | 'white' | 'dark'
}

export function Section({ id, children, className = '', background = 'light' }: SectionProps) {
  const backgroundStyles = {
    light: 'bg-neutral-light',
    white: 'bg-neutral-white',
    dark: 'bg-neutral-dark text-neutral-white'
  }

  return (
    <section id={id} className={`py-16 md:py-24 ${backgroundStyles[background]} ${className}`}>
      {children}
    </section>
  )
}
