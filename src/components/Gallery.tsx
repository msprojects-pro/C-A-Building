/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=1000",
      title: "Residental Roof Tiling",
      category: "Roofing"
    },
    {
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000",
      title: "Brickwork Extension",
      category: "Building"
    },
    {
      url: "https://images.unsplash.com/photo-1558976825-6b1b03a0330d?auto=format&fit=crop&q=80&w=1000",
      title: "Loft Space Transformation",
      category: "Construction"
    },
    {
      url: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80&w=1000",
      title: "Chimney Pointing",
      category: "Maintenance"
    },
    {
      url: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000",
      title: "New Build Project",
      category: "Building"
    },
    {
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000",
      title: "Fascia and Guttering",
      category: "Roofing"
    }
  ];

  return (
    <section className="py-24 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-blue font-bold tracking-widest uppercase text-sm">Our Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-primary-900 mt-3 mb-6">
            Featured <span className="text-accent-blue">Work</span>
          </h2>
          <div className="w-24 h-1.5 bg-accent-blue mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-8 max-w-2xl mx-auto text-lg">
            Explore some of our recently completed projects across Greater Manchester. Quality craftsmanship in every detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-accent-blue text-xs font-bold tracking-widest uppercase mb-2">{image.category}</span>
                <h3 className="text-white text-xl font-bold mb-4">{image.title}</h3>
                <div className="flex items-center gap-2 text-white/70 text-sm font-medium">
                  <Maximize2 size={16} />
                  <span>View Full Image</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
