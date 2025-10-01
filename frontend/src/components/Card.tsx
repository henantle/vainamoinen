import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const baseStyles = 'bg-neutral-white rounded-lg shadow-md p-6'
  const hoverStyles = hover ? 'hover:shadow-xl transition-shadow duration-300' : ''

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  )
}
