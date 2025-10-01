import React from 'react'

export interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const hoverStyles = hover ? 'hover:shadow-xl hover:scale-105 transition-all duration-300' : ''

  return (
    <div className={`bg-neutral-white rounded-lg shadow-md p-6 ${hoverStyles} ${className}`}>
      {children}
    </div>
  )
}
