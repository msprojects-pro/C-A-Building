/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-accent-blue/30 selection:text-primary-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

