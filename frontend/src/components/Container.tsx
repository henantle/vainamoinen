import React from 'react'

export interface ContainerProps {
  children: React.ReactNode
  className?: string
  maxWidth?: 'small' | 'medium' | 'large' | 'full'
}

export function Container({ children, className = '', maxWidth = 'large' }: ContainerProps) {
  const widthStyles = {
    small: 'max-w-3xl',
    medium: 'max-w-5xl',
    large: 'max-w-7xl',
    full: 'max-w-full'
  }

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${widthStyles[maxWidth]} ${className}`}>
      {children}
    </div>
  )
}
