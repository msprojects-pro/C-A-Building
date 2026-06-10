/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-start overflow-hidden bg-primary-900" id="home">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2069"
          alt="Roofing construction"
          className="w-full h-full object-cover opacity-40"
          id="hero-bg-image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 md:pt-32 lg:pt-40 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue text-white text-xs font-bold tracking-widest uppercase mb-6">
              Trusted Since 2004
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-tight mb-6">
              Expert <span className="text-accent-blue">Building & Roofing</span> Services in Manchester
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-sans max-w-2xl">
              From roof repairs to full building works – Quality you can trust for over 20 years. Serving Manchester, Warrington, Chorley, and Preston.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+447780873293"
                className="bg-accent-blue hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-900/20"
              >
                <Phone size={20} />
                <span>Call Now: 07780 873293</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-white hover:bg-gray-100 text-primary-900 px-8 py-4 rounded-md font-bold flex items-center justify-center gap-3 transition-all border border-transparent"
              >
                <span>Get a Free Quote</span>
                <ArrowRight size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex items-center gap-8 border-t border-white/10 pt-8"
          >
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl">20+</span>
              <span className="text-gray-400 text-sm">Years Experience</span>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl">100%</span>
              <span className="text-gray-400 text-sm">Fully Insured</span>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div className="flex flex-col">
                <span className="text-white font-bold text-2xl">5.0</span>
                <span className="text-gray-400 text-sm">Customer Rating</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block animate-bounce text-white/50">
          <div className="flex flex-col items-center">
              <span className="text-xs uppercase tracking-widest mb-2 vertical-rl">Scroll</span>
              <div className="w-px h-12 bg-white/50"></div>
          </div>
      </div>
    </section>
  );
};

export default Hero;
