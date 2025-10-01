import React from 'react'
import { Section, Button } from '../components'

export function Home() {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Section id="home" variant="light" className="min-h-screen flex items-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-dark mb-6">
          Henri Lehtinen
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-primary mb-8">
          Full-Stack Developer. JVM Expert. Agile Builder.
        </h2>
        <p className="text-lg md:text-xl text-neutral-mid leading-relaxed max-w-3xl mx-auto mb-10">
          I craft modern applications with precision and speed. With a strong background in
          Java, Kotlin, Scala, and Clojure, I bring ideas to life through scalable back-ends
          and smooth user experiences. Simple. Reliable. Built to last.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="large" onClick={scrollToAbout}>
            Learn More
          </Button>
          <Button variant="outline" size="large">
            View Projects
          </Button>
        </div>
      </div>
    </Section>
  )
}
