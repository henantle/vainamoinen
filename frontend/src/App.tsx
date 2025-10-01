import React from 'react'
import { Navigation } from './components'
import { Home, About } from './sections'

export function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Home />
      <About />
    </div>
  )
}
