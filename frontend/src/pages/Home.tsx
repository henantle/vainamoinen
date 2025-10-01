import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <Header />
      <main className='flex-grow bg-white text-black p-8'>
        <section className='mb-8'>
          <h2 className='text-xl font-bold mb-4'>Main value proposition paragraph...</h2>
          <p>Insert a compelling value proposition that highlights Henri Lehtinen's unique strengths and offerings.</p>
        </section>
        <section className='mb-8'>
          <h3 className='text-lg font-bold mb-2'>About Me</h3>
          <p>Professional background and experience description...</p>
        </section>
        <section className='mb-8'>
          <h3 className='text-lg font-bold mb-2'>Technical Expertise</h3>
          <ul className='list-disc list-inside'>
            <li>JVM Languages (Java, Kotlin, Scala, Clojure)</li>
            <li>AI/ML Technologies</li>
            <li>AWS Cloud Services</li>
            <li>Agile Methodologies</li>
          </ul>
        </section>
        <section>
          <h3 className='text-lg font-bold mb-2'>Get In Touch</h3>
          <p>Professional contact information</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
