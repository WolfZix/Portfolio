import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          style={{ opacity: 0.25 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1 }}
          onClick={scrollToTop}
          className="bg-primary rounded-full fixed bottom-10 right-10 w-16 h-16 text-primary-foreground flex items-center justify-center shadow-lg transition-all duration-300 z-50"
        >
          <ArrowUp className="w-10 h-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}