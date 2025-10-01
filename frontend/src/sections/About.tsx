import React from 'react'
import { Section, Container, Card } from '../components'

export function About() {
  const skills = [
    {
      title: 'JVM Languages',
      description: 'Expert in Java, Kotlin, Scala, and Clojure. Building robust, scalable backend systems with modern JVM technologies.',
      icon: '☕'
    },
    {
      title: 'Full-Stack Development',
      description: 'Creating seamless user experiences with React, TypeScript, and modern frontend frameworks, backed by powerful APIs.',
      icon: '⚡'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Integrating AI capabilities into applications, from NLP to predictive analytics, making intelligent systems accessible.',
      icon: '🤖'
    },
    {
      title: 'AWS Cloud',
      description: 'Designing and deploying cloud-native solutions on AWS. Expertise in serverless, containers, and scalable infrastructure.',
      icon: '☁️'
    },
    {
      title: 'Agile Methods',
      description: 'Facilitating agile teams to deliver value iteratively. Strong focus on collaboration, continuous improvement, and delivery excellence.',
      icon: '🎯'
    },
    {
      title: 'Architecture',
      description: 'Crafting maintainable system architectures that balance pragmatism with future scalability. Clean code advocate.',
      icon: '🏗️'
    }
  ]

  return (
    <Section id="about" background="white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
            About Me
          </h2>
          <p className="text-xl text-neutral-mid max-w-3xl mx-auto">
            A software consultant passionate about building elegant solutions to complex problems.
            With years of experience across the JVM ecosystem and modern cloud platforms, I help
            organizations deliver quality software faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} hover>
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-2xl font-bold text-neutral-dark mb-3">
                {skill.title}
              </h3>
              <p className="text-neutral-mid leading-relaxed">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="bg-neutral-light rounded-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold text-neutral-dark mb-6 text-center">
            My Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-mid">
            <div>
              <h4 className="text-xl font-semibold text-neutral-dark mb-3">
                Quality First
              </h4>
              <p className="leading-relaxed">
                I believe in writing clean, maintainable code that stands the test of time. Every
                line is written with the next developer in mind, ensuring long-term sustainability
                and ease of evolution.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-neutral-dark mb-3">
                Continuous Learning
              </h4>
              <p className="leading-relaxed">
                Technology evolves rapidly, and so do I. I stay current with the latest tools and
                methodologies, always seeking to improve and adapt to deliver better solutions.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-neutral-dark mb-3">
                Collaborative Spirit
              </h4>
              <p className="leading-relaxed">
                Great software is built by great teams. I thrive in collaborative environments,
                sharing knowledge and working together to achieve common goals.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-neutral-dark mb-3">
                Pragmatic Solutions
              </h4>
              <p className="leading-relaxed">
                Every project has unique constraints. I focus on finding the right balance between
                ideal architecture and practical delivery, ensuring solutions that work in the real world.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
