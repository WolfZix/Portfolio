import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, ShoppingCart, RefreshCw, Wrench } from 'lucide-react';

const services = [
  {
    num: '01',
    icon: Globe,
    title: 'Strony firmowe',
    desc: 'Profesjonalne strony dla lokalnych i małych firm. Przejrzyste, szybkie i zaprojektowane tak, by zamieniać odwiedzających w klientów.',
  },
  {
    num: '02',
    icon: ShoppingCart,
    title: 'Sklepy internetowe',
    desc: 'Kompleksowe sklepy online, które sprzedają. Od katalogu produktów po bezpieczną płatność — wszystko, czego potrzebuje Twój sklep.',
  },
  {
    num: '03',
    icon: RefreshCw,
    title: 'Redesign i optymalizacja',
    desc: 'Przestarzała strona? Przebudujemy ją z nowoczesnym designem, szybszym ładowaniem i lepszym doświadczeniem użytkownika.',
  },
  {
    num: '04',
    icon: Wrench,
    title: 'Utrzymanie i wsparcie',
    desc: 'Hosting, aktualizacje, bezpieczeństwo i pomoc techniczna. Dbamy o Twoją stronę, abyś mógł skupić się na biznesie.',
  },
];

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="services" className="py-24 md:py-40 relative">
      <div className="absolute inset-0 bg-card/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            Co Robimy
          </span>
          <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.03em] text-foreground">
            Usługi
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative p-8 md:p-12 transition-all duration-500 cursor-default ${
                  isHovered ? 'bg-primary/5' : 'bg-background'
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className={`font-heading font-black text-5xl md:text-6xl transition-colors duration-500 ${
                    isHovered ? 'text-primary' : 'text-border'
                  }`}>
                    {service.num}
                  </span>
                  <Icon className={`w-6 h-6 transition-colors duration-500 ${
                    isHovered ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                </div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {service.desc}
                </p>
                <div className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500 ${
                  isHovered ? 'w-full' : 'w-0'
                }`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}