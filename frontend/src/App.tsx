import React from 'react'
import { Navigation } from './components'
import { Home, About } from './pages'

export function App() {
  return (
    <div className="min-h-screen bg-neutral-light">
      <Navigation />
      <Home />
      <About />
    </div>
  )
}
