import React from 'react';

const FrontPage = () => {
  return (
    <div>
      <header className="bg-gray-200 py-4 text-center">
        <h1 className="text-2xl font-bold">Henri Lehtinen - Software Consultant</h1>
      </header>
      <section className="hero-section bg-white py-8 text-center">
        <h2 className="text-xl font-semibold">Full-Stack Developer. JVM Expert. Agile Builder.</h2>
        <p>Main value proposition paragraph...</p>
      </section>
      <section className="about-section bg-gray-100 py-8 text-center">
        <h2 className="text-xl font-semibold">About Me</h2>
        <p>Professional background and experience description...</p>
      </section>
      <section className="skills-section bg-white py-8 text-center">
        <h2 className="text-xl font-semibold">Technical Expertise</h2>
        <ul>
          <li>JVM Languages (Java, Kotlin, Scala, Clojure)</li>
          <li>AI/ML Technologies</li>
          <li>AWS Cloud Services</li>
          <li>Agile Methodologies</li>
        </ul>
      </section>
      <section className="contact-section bg-gray-100 py-8 text-center">
        <h2 className="text-xl font-semibold">Get In Touch</h2>
        <p>Professional contact information</p>
      </section>
      <footer className="bg-gray-200 py-4 text-center">
        <p>© 2024 Henri Lehtinen</p>
      </footer>
    </div>
  );
};

export default FrontPage;