import React from 'react';
import { Header, Footer, Button } from '../components/DesignSystem';
import Navigation from '../components/Navigation';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow container mx-auto px-4">
        <section className="my-8">
          <h2 className="text-xl font-bold">Welcome to My Personal Site</h2>
          <p>Henri Lehtinen, a software consultant specializing in JVM languages, AI, AWS, and Agile methods.</p>
          <Button onClick={() => window.location.href = '#about'}>Learn More About Me</Button>
        </section>
        <section id="about" className="my-8">
          <h2 className="text-xl font-bold">About Me</h2>
          <p>I have extensive experience in software development, focusing on...</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
