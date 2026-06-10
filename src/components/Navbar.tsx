/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-primary-900 shadow-xl py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex flex-col">
            <span className="text-white font-display text-xl sm:text-2xl font-extrabold tracking-tight">
              C.A BUILDING & ROOFING
            </span>
            <span className="text-accent-blue text-[10px] sm:text-xs font-bold tracking-[0.2em]">
              LIMITED
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+447780873293"
                className="bg-accent-blue hover:bg-blue-700 text-white px-5 py-2.5 rounded-md text-sm font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg active:scale-95"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent-blue p-2 transition-colors focus:outline-none"
              id="mobile-menu-toggle"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary-800 border-t border-gray-700 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white block px-3 py-3 text-base font-medium rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+447780873293"
                className="bg-accent-blue text-white block px-3 py-3 text-base font-bold rounded-md flex items-center justify-center gap-2 mt-4"
              >
                <Phone size={18} />
                <span>Call +44 7780 873293</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
