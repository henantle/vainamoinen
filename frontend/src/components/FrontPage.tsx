import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

const FrontPage: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default FrontPage;
