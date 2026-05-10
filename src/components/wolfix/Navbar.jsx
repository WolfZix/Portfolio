import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'O nas', href: '#about' },
  { label: 'Usługi', href: '#services' },
  { label: 'Proces', href: '#process' },
  { label: 'Cennik', href: '#pricing' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Kontakt', href: '#contact' },
];

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[60]" />

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-background/90 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-16 md:h-20">

          <img
            src={`${import.meta.env.BASE_URL}Wolfix Logo2.png`}
            alt="Wolfix"
            className="md:h-14 h-10 object-contain cursor-pointer"
            onClick={() => { scrollToSection("hero") }}
          />

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href.replace('#', ''))}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide uppercase"
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-primary-foreground border-2 border-primary px-6 py-2.5 text-sm font-bold uppercase tracking-wider transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              Umówmy Się
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  scrollToSection(link.href.replace('#', ''));
                  setMobileOpen(false);
                }}
                className="text-2xl font-bold text-foreground uppercase tracking-wider border-b border-border pb-4 text-left"
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => {
                scrollToSection('contact');
                setMobileOpen(false);
              }}
              className="bg-primary text-primary-foreground px-8 py-4 text-center text-lg font-bold uppercase tracking-wider mt-4"
            >
              Bezpłatna konsultacja
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}