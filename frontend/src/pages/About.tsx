import React from 'react'
import { Section, Card } from '../components'

export function About() {
  const skills = [
    {
      category: 'JVM Languages',
      items: ['Java', 'Kotlin', 'Scala', 'Clojure'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    },
    {
      category: 'AI & Modern Tech',
      items: ['Machine Learning', 'LLMs', 'Data Processing', 'AI Integration'],
    },
    {
      category: 'Methodologies',
      items: ['Agile/Scrum', 'TDD', 'Clean Architecture', 'Microservices'],
    },
  ]

  const expertise = [
    {
      title: 'Backend Development',
      description: 'Expert in building scalable, high-performance backend systems using JVM languages. Strong focus on clean code, maintainability, and best practices.',
    },
    {
      title: 'Cloud Architecture',
      description: 'Experienced in designing and deploying cloud-native applications on AWS, with expertise in serverless architectures and containerized deployments.',
    },
    {
      title: 'AI Integration',
      description: 'Skilled in integrating AI capabilities into applications, working with LLMs, and building intelligent systems that enhance user experiences.',
    },
    {
      title: 'Agile Leadership',
      description: 'Proven track record in leading agile teams, facilitating ceremonies, and implementing best practices for efficient software delivery.',
    },
  ]

  return (
    <Section id="about" variant="default">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
          About Me
        </h2>
        <p className="text-xl text-neutral-mid max-w-3xl mx-auto">
          A passionate software consultant specializing in JVM technologies, cloud solutions,
          and agile practices. I help organizations build robust, scalable applications that
          drive business value.
        </p>
      </div>

      <div className="mb-16">
        <h3 className="text-3xl font-bold text-neutral-dark mb-8 text-center">
          Areas of Expertise
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {expertise.map((area, index) => (
            <Card key={index} hover>
              <h4 className="text-xl font-semibold text-brand-primary mb-3">
                {area.title}
              </h4>
              <p className="text-neutral-mid leading-relaxed">
                {area.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-neutral-dark mb-8 text-center">
          Technical Skills
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillSet, index) => (
            <Card key={index} className="text-center">
              <h4 className="text-lg font-semibold text-brand-primary mb-4">
                {skillSet.category}
              </h4>
              <ul className="space-y-2">
                {skillSet.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-neutral-mid">
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
