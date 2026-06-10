/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=2000"
                alt="Expert construction work"
                className="w-full aspect-[4/5] object-cover"
                id="about-image"
              />
            </div>
            
            {/* Floating Experience Card */}
            <div className="absolute -bottom-10 -right-10 z-20 bg-accent-blue text-white p-8 rounded-2xl shadow-2xl hidden md:block">
              <div className="flex flex-col items-center">
                <span className="text-6xl font-display font-extrabold mb-2">20+</span>
                <span className="text-sm font-bold tracking-widest uppercase text-center">Years of Successful<br />Work Experience</span>
              </div>
            </div>
            
            {/* Pattern Overlay */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-blue opacity-10 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="text-accent-blue font-bold tracking-widest uppercase text-sm">About Our Company</span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-primary-900 mt-3 mb-8">
              Leading <span className="text-accent-blue">Construction & Roofing</span> in Manchester
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              With over 20 years of expertise, C.A Building and Roofing Ltd delivers high-quality building and roofing solutions across Greater Manchester. We pride ourselves on our meticulous attention to detail and commitment to customer satisfaction.
            </p>
            
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              As a local family-run business, we understand the importance of a safe and beautiful home. Whether it's a minor tile repair or a large-scale home extension, we bring the same level of professionalism and quality to every project.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md group-hover:bg-accent-blue transition-all">
                  <CheckCircle2 className="text-accent-blue group-hover:text-white" size={24} />
                </div>
                <span className="font-bold text-primary-800">Quality Assured</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md group-hover:bg-accent-blue transition-all">
                  <CheckCircle2 className="text-accent-blue group-hover:text-white" size={24} />
                </div>
                <span className="font-bold text-primary-800">Expert Team</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md group-hover:bg-accent-blue transition-all">
                  <CheckCircle2 className="text-accent-blue group-hover:text-white" size={24} />
                </div>
                <span className="font-bold text-primary-800">Fully Insured</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md group-hover:bg-accent-blue transition-all">
                  <CheckCircle2 className="text-accent-blue group-hover:text-white" size={24} />
                </div>
                <span className="font-bold text-primary-800">Competitive Pricing</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
                  <Phone className="text-accent-blue" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Phone Number</p>
                  <a href="tel:+447780873293" className="text-sm font-bold text-primary-900 hover:text-accent-blue transition-colors underline-offset-4 hover:underline">+44 7780 873293</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
                  <Mail className="text-accent-blue" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Email Address</p>
                  <a href="mailto:c.abuildingandroofing@gmail.com" className="text-sm font-bold text-primary-900 hover:text-accent-blue transition-colors underline-offset-4 hover:underline">c.abuildingandroofing@gmail.com</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
