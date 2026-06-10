/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Clock, Users, BadgeCheck } from 'lucide-react';
import { motion } from 'motion/react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Fully Insured",
      description: "Rest easy knowing your property is protected by our comprehensive insurance coverage.",
      icon: <Shield size={40} className="text-white" />,
      color: "bg-primary-800"
    },
    {
      title: "Experienced Team",
      description: "Our skilled tradesmen have over two decades of hands-on experience in building and roofing.",
      icon: <BadgeCheck size={40} className="text-white" />,
      color: "bg-accent-blue"
    },
    {
      title: "Local Family Business",
      description: "Proudly serving our local community with personalized service and care.",
      icon: <Users size={40} className="text-white" />,
      color: "bg-primary-900"
    },
    {
      title: "Competitive Prices",
      description: "Premium quality work at prices that respect your budget. Get your free quote today.",
      icon: <Clock size={40} className="text-white" />,
      color: "bg-accent-blue"
    }
  ];

  return (
    <section className="py-24 bg-primary-900 overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <img src="https://www.transparenttextures.com/patterns/carbon-fibre.png" alt="pattern" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent-blue font-bold tracking-widest uppercase text-sm">Why Choose C.A</span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mt-3 mb-6">
            Our <span className="text-accent-blue">Commitment</span> to Quality
          </h2>
          <div className="w-24 h-1.5 bg-accent-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`w-20 h-20 ${feature.color} border border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-2xl transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 p-10 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="max-w-2xl">
                    <h4 className="text-2xl font-bold text-white mb-4">Serving Your Local Area</h4>
                    <p className="text-gray-400">We cover Greater Manchester, Warrington, Chorley, Preston, and surrounding regions. No project is too big or too small for our expert team.</p>
                </div>
                <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact" 
                    className="bg-accent-blue hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl shadow-blue-900/40 whitespace-nowrap"
                >
                    Request Area Coverage
                </motion.a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
