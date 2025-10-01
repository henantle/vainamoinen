import React from 'react';

const Skills: React.FC = () => {
  return (
    <section className='bg-gray-300 p-8'>
      <h3 className='text-2xl font-bold'>Technical Expertise</h3>
      <ul className='list-disc list-inside'>
        <li>JVM Languages (Java, Kotlin, Scala, Clojure)</li>
        <li>AI/ML Technologies</li>
        <li>AWS Cloud Services</li>
        <li>Agile Methodologies</li>
      </ul>
    </section>
  );
};

export default Skills;
