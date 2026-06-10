/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Mark Thompson",
      location: "Manchester",
      content: "Excellent service from start to finish. The team at C.A Building replaced my roof after a major storm. They were fast, clean, and very professional. Highly recommended!",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      location: "Warrington",
      content: "We had a loft conversion done by C.A Building and Roofing Ltd. They completely transformed our space within the agreed timeframe and budget. Extremely happy customers!",
      rating: 5
    },
    {
      name: "David Wilson",
      location: "Preston",
      content: "Reliable and honest builders. They fixed a persistent leak that other companies couldn't solve. Their attention to detail on our chimney work was fantastic.",
      rating: 5
    },
    {
        name: "James Radcliffe",
        location: "Chorley",
        content: "Professional team that clear up after themselves. They did our full house guttering and some pointing works. Great price and quality workmanship.",
        rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-blue font-bold tracking-widest uppercase text-sm">Customer Feedback</span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-primary-900 mt-3 mb-6">
            Trusted by <span className="text-accent-blue">Manchester Residents</span>
          </h2>
          <div className="w-24 h-1.5 bg-accent-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-start gap-4"
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="text-accent-blue/10 absolute -right-2 top-10" size={120} strokeWidth={1} />
              <p className="text-gray-700 leading-relaxed text-lg italic relative z-10">
                "{testimonial.content}"
              </p>
              <div className="mt-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-primary-900">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-primary-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-10 opacity-30 grayscale filter">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Checkatrade_logo.svg/320px-Checkatrade_logo.svg.png" alt="Checkatrade" className="h-6" />
             <div className="hidden sm:block h-8 w-px bg-gray-300 mx-4"></div>
            <p className="text-sm font-bold text-primary-900">Proudly 5-Star Rated</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
