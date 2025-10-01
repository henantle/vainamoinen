import React from 'react'
import { Section, Container, Button } from '../components'

export function Home() {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Section id="home" background="light" className="min-h-screen flex items-center pt-16">
      <Container>
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-dark mb-6">
            Full-Stack Developer.
            <br />
            <span className="text-brand-primary">JVM Expert.</span>
            <br />
            <span className="text-brand-accent">Agile Builder.</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-mid leading-relaxed mb-8 max-w-3xl mx-auto">
            I craft modern applications with precision and speed. With a strong background in Java,
            Kotlin, Scala, and Clojure, I bring ideas to life through scalable back-ends and smooth
            user experiences.
          </p>
          <p className="text-lg md:text-xl text-neutral-mid mb-12">
            Simple. Reliable. Built to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="large" onClick={scrollToAbout}>
              Learn More About Me
            </Button>
            <Button variant="outline" size="large">
              View My Work
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
