import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Techs from '../components/Techs';
import Portfolio from '../components/Portfolio';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Techs />
      <Portfolio />
      <CTA />
    </main>
  );
}
