import React from 'react';
import Navbar from '../components/wolfix/Navbar';
import Hero from '../components/wolfix/Hero';
import About from '../components/wolfix/About';
import Services from '../components/wolfix/Services';
import HowItWorks from '../components/wolfix/HowItWorks';
import Pricing from '../components/wolfix/Pricing';
import Portfolio from '../components/wolfix/Portfolio';
import WhyChooseUs from '../components/wolfix/WhyChooseUs';
import Contact from '../components/wolfix/Contact';
import Footer from '../components/wolfix/Footer';

export default function Home() {
  return (
    <div className="bg-background min-h-screen font-body">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Pricing />
      <Portfolio />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}