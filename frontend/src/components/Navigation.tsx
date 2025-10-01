import React from 'react'

interface NavigationProps {
  className?: string
}

export function Navigation({ className = '' }: NavigationProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`bg-neutral-white shadow-md sticky top-0 z-50 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-brand-primary">
            Henri Lehtinen
          </div>
          <div className="flex gap-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-neutral-dark hover:text-brand-primary transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-neutral-dark hover:text-brand-primary transition-colors duration-200 font-medium"
            >
              About
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
