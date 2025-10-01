import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4">
        <section className="my-8">
          <h2 className="text-xl font-bold">About Me</h2>
          <p>I am Henri Lehtinen, a software consultant specializing in JVM languages, AI, AWS, and Agile methods. I have extensive experience in software development, focusing on delivering high-quality solutions.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
