/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, Send, Facebook, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
    const serviceAreas = ["Greater Manchester", "Warrington", "Chorley", "Preston", "Bolton", "Bury", "Oldham", "Rochdale", "Stockport", "Tameside"];

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-blue font-bold tracking-widest uppercase text-sm">Get In Touch</span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-primary-900 mt-3 mb-8">
              Start Your <span className="text-accent-blue">Project</span> Today
            </h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Ready to upgrade your roof or start a new building project? We provide free, no-obligation quotes and expert advice for all your construction needs.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6 items-center group">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shadow-md group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us Anywhere</h4>
                  <a href="tel:+447780873293" className="text-xl font-bold text-primary-900 hover:text-accent-blue transition-colors outline-none">+44 7780 873293</a>
                </div>
              </div>
              
              <div className="flex gap-6 items-center group">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shadow-md group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email Our Office</h4>
                  <a href="mailto:c.abuildingandroofing@gmail.com" className="text-xl font-bold text-primary-900 hover:text-accent-blue transition-colors outline-none truncate max-w-[250px] sm:max-w-none block">c.abuildingandroofing@gmail.com</a>
                </div>
              </div>

              <div className="flex gap-6 items-center group">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shadow-md group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Service Locations</h4>
                  <p className="text-lg font-bold text-primary-900">Manchester & Greater Regions, UK</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-primary-900 rounded-3xl text-white">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                    <Facebook size={20} className="text-accent-blue" />
                    Follow our work
                </h4>
                <p className="text-gray-400 text-sm mb-6 uppercase tracking-widest font-bold">Latest projects and updates</p>
                <a 
                    href="https://web.facebook.com/profile.php?id=61567295184788" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl inline-flex items-center gap-3 transition-colors font-bold"
                >
                    Visit Facebook Page
                </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 sm:p-12 rounded-[32px] border border-gray-100 shadow-2xl shadow-gray-200/50"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-primary-900 mb-2 tracking-tight">Full Name</label>
                        <input 
                            type="text" 
                            placeholder="John Doe"
                            className="w-full px-5 py-4 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-primary-900 mb-2 tracking-tight">Phone Number</label>
                        <input 
                            type="tel" 
                            placeholder="07XXX XXXXXX"
                            className="w-full px-5 py-4 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-all"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-primary-900 mb-2 tracking-tight">Email Address</label>
                    <input 
                        type="email" 
                        placeholder="yourname@example.com"
                        className="w-full px-5 py-4 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-all"
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-primary-900 mb-2 tracking-tight">Project Details</label>
                    <textarea 
                        rows={5}
                        placeholder="Tell us about the work you need (e.g. roof repair, extension, etc.)"
                        className="w-full px-5 py-4 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue transition-all resize-none"
                    ></textarea>
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-accent-blue hover:bg-blue-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-900/20 text-lg"
                >
                    <Send size={20} />
                    <span>Send Inquiry</span>
                </motion.button>
                
                <p className="text-center text-xs text-gray-400 mt-6 flex items-center justify-center gap-2">
                    <MessageSquare size={14} />
                    Normally responds within 24 hours
                </p>
            </form>
          </motion.div>
        </div>
        
        {/* Service Areas Bottom Row */}
        <div className="mt-24 pt-12 border-t border-gray-100">
            <h4 className="text-center font-bold text-gray-400 mb-10 uppercase tracking-widest text-xs">Our Primary Service Regions</h4>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
                {serviceAreas.map((area) => (
                    <span key={area} className="text-primary-900/50 font-bold hover:text-accent-blue transition-colors cursor-default">{area}</span>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
