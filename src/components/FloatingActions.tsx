/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const FloatingActions = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col gap-4">
        <AnimatePresence>
            {isVisible && (
                <>
                {/* Phone Call Button */}
                <motion.a
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="tel:+447780873293"
                    className="w-14 h-14 bg-accent-blue text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-900/40 border border-white/20"
                    title="Call Us"
                >
                    <Phone size={24} />
                    <span className="absolute -left-32 bg-primary-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none">
                        Call Our Team
                    </span>
                </motion.a>

                {/* WhatsApp Style Button (using MessageCircle) */}
                <motion.a
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ delay: 0.1 }}
                    href="https://wa.me/447780873293"
                    target="_blank"
                    rel="noreferrer"
                    className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-900/40 border border-white/20"
                    title="WhatsApp Us"
                >
                    <MessageCircle size={28} />
                </motion.a>
                </>
            )}
        </AnimatePresence>
    </div>
  );
};

export default FloatingActions;
