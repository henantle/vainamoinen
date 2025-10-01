import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-light text-neutral-dark flex flex-col justify-between">
      <header className="py-4 text-center bg-brand-primary text-white">
        <h1 className="text-2xl font-bold">Henri Lehtinen - Software Consultant</h1>
      </header>
      <main className="container mx-auto px-4 md:px-8">
        <section className="py-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Full-Stack Developer. JVM Expert. Agile Builder.</h2>
          <p className="text-lg text-neutral-mid">
            I craft modern applications with precision and speed. With a strong background in Java, Kotlin, Scala, and Clojure, I bring ideas to life through scalable back-ends and smooth user experiences. Simple. Reliable. Built to last.
          </p>
        </section>
        <section className="py-8">
          <h3 className="text-3xl font-bold mb-4">About Me</h3>
          <p className="text-lg text-neutral-mid">
            With over 10 years of experience in software development, I have honed my skills in building robust applications across various industries.
          </p>
        </section>
        <section className="py-12">
          <h3 className="text-3xl font-bold mb-4">Technical Expertise</h3>
          <ul className="list-disc pl-5 text-lg text-neutral-mid">
            <li>JVM Languages (Java, Kotlin, Scala, Clojure)</li>
            <li>AI/ML Technologies</li>
            <li>AWS Cloud Services</li>
            <li>Agile Methodologies</li>
          </ul>
        </section>
        <section className="py-12">
          <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
          <p className="text-lg text-neutral-mid">
            Email: henri.lehtinen@example.com | Phone: +123456789
          </p>
        </section>
      </main>
      <footer className="py-4 text-center text-neutral-mid bg-neutral-dark">
        <p>© 2024 Henri Lehtinen</p>
      </footer>
    </div>
  );
};

export default HomePage;
