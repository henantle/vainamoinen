import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { App } from './App'

describe('Frontpage', () => {
  it('renders headings and removes TODO APP text', () => {
    render(<App />)
    expect(screen.queryByText('TODO APP')).toBeNull()
    expect(screen.getByText(/Henri Lehtinen – Software Consultant/i)).toBeInTheDocument()
    expect(screen.getByText(/Full-Stack Developer\. JVM Expert\. Agile Builder\./i)).toBeInTheDocument()
    expect(screen.getByText(/About Me/i)).toBeInTheDocument()
    expect(screen.getByText(/Technical Expertise/i)).toBeInTheDocument()
    expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument()
  })
})

describe('smoke', () => {
  it('runs', () => {
    expect(1 + 1).toBe(2)
  })
})
