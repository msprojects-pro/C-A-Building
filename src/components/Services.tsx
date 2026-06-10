/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hammer, ShieldCheck, Home, Ruler, CloudRain, Warehouse, Construction, Settings, Maximize } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: "Building & Roofing",
    description: "Complete building and roofing solutions tailored to your needs.",
    icon: <Home className="text-accent-blue" size={32} />,
  },
  {
    title: "Roof Repairs & Replacements",
    description: "Fixing leaks, replacing broken tiles, or complete new roof installations.",
    icon: <ShieldCheck className="text-accent-blue" size={32} />,
  },
  {
    title: "Flat & Pitch Roofs",
    description: "Expert installation of traditional pitched roofs and modern flat roofing systems.",
    icon: <CloudRain className="text-accent-blue" size={32} />,
  },
  {
    title: "Fascia, Soffits & Guttering",
    description: "Quality roofline products to protect your home from water damage.",
    icon: <Settings className="text-accent-blue" size={32} />,
  },
  {
    title: "Loft Conversions",
    description: "Transforming your unused loft space into beautiful living areas.",
    icon: <Maximize className="text-accent-blue" size={32} />,
  },
  {
    title: "Home Improvements",
    description: "General renovations to increase the value and comfort of your home.",
    icon: <Hammer className="text-accent-blue" size={32} />,
  },
  {
    title: "Chimney Works",
    description: "Professional chimney pointing, repairs, and leadwork.",
    icon: <Warehouse className="text-accent-blue" size={32} />,
  },
  {
    title: "Full Building Works & Extensions",
    description: "Large scale construction projects from foundations to finish.",
    icon: <Construction className="text-accent-blue" size={32} />,
  },
  {
    title: "Property Maintenance",
    description: "Ongoing care to ensure your property remains in top condition.",
    icon: <Ruler className="text-accent-blue" size={32} />,
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-blue font-bold tracking-widest uppercase text-sm">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-primary-900 mt-3 mb-6">
            Comprehensive <span className="text-accent-blue">Services</span>
          </h2>
          <div className="w-24 h-1.5 bg-accent-blue mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Professional building and roofing solutions for residential and commercial properties across Greater Manchester.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 group border border-gray-100"
            >
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-md mb-6 group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-4 group-hover:text-accent-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
