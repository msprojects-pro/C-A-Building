/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facebook, Phone, MapPin, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-blue/5 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-8">
                <span className="text-white font-display text-2xl font-black tracking-tight block">
                    C.A BUILDING
                </span>
                <span className="text-accent-blue text-xs font-black tracking-[0.3em]">
                    & ROOFING LTD
                </span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Professional building and roofing experts with over 20 years of experience serving the Manchester community and surrounding regions.
            </p>
            <div className="flex gap-4">
              <a href="https://web.facebook.com/profile.php?id=61567295184788" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-accent-blue hover:border-accent-blue hover:text-white transition-all text-gray-400">
                <Facebook size={20} />
              </a>
              <a href="tel:+447780873293" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-accent-blue hover:border-accent-blue hover:text-white transition-all text-gray-400">
                <Phone size={20} />
              </a>
              <a href="mailto:c.abuildingandroofing@gmail.com" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-accent-blue hover:border-accent-blue hover:text-white transition-all text-gray-400">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 border-b border-white/10 pb-4 inline-block pr-8">Company</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About Us', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-accent-blue flex items-center gap-2 group transition-all">
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-8 border-b border-white/10 pb-4 inline-block pr-8">Out Services</h4>
            <ul className="space-y-4">
              {['Roof Repairs', 'Loft Conversions', 'House Extensions', 'Flat Roofing', 'Chimney Works'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-accent-blue flex items-center gap-2 group transition-all">
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 border-b border-white/10 pb-4 inline-block pr-8">Get In Touch</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Phone size={20} className="text-accent-blue shrink-0" />
                <div>
                  <p className="text-sm font-bold block mb-1">Call Us Now</p>
                  <a href="tel:+447780873293" className="text-gray-400 hover:text-white transition-colors">+44 7780 873293</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail size={20} className="text-accent-blue shrink-0" />
                <div>
                  <p className="text-sm font-bold block mb-1">Email Us</p>
                  <a href="mailto:c.abuildingandroofing@gmail.com" className="text-gray-400 hover:text-white transition-colors break-all">c.abuildingandroofing@gmail.com</a>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin size={20} className="text-accent-blue shrink-0" />
                <div>
                  <p className="text-sm font-bold block mb-1">Location</p>
                  <span className="text-gray-400">Greater Manchester, UK</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 mt-16">
          <p className="text-gray-500 text-sm font-medium">
            &copy; {currentYear} C.A Building and Roofing Ltd. All rights reserved.
          </p>
          <div className="flex gap-8">
              <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Constructing the future</span>
              <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Quality guaranteed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
