import React from 'react';
import { motion } from 'framer-motion';
import { Layers, TrendingUp, Zap, HeartHandshake, Target } from 'lucide-react';

const benefits = [
  {
    icon: Layers,
    title: 'Kompleksowa obsługa',
    desc: 'Projekt, programowanie i utrzymanie — wszystko w jednym miejscu.',
  },
  {
    icon: TrendingUp,
    title: 'Dla każdego biznesu',
    desc: 'Sprawdzamy się zarówno w małych firmach, jak i rosnących markach gotowych na skalowanie.',
  },
  {
    icon: Zap,
    title: 'Szybka realizacja',
    desc: 'Pracujemy sprawnie, aby Twoja strona była online tak szybko, jak to możliwe.',
  },
  {
    icon: HeartHandshake,
    title: 'Długoterminowe wsparcie',
    desc: 'Stałe partnerstwo, a nie jednorazowa transakcja.',
  },
  {
    icon: Target,
    title: 'Nastawienie na wyniki',
    desc: 'Każda decyzja podyktowana jest użytecznością i realnym wpływem na biznes.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-40 relative bg-card/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Dlaczego WolfZix
            </span>
            <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.03em] text-foreground mb-6">
              Dlaczego my?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
              Nie jesteśmy tylko programistami — jesteśmy Twoim długoterminowym partnerem cyfrowym, zaangażowanym w Twój sukces.
            </p>
          </motion.div>

          <div className="space-y-0">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex items-start gap-5 py-6 border-b border-border group hover:border-primary/30 transition-colors duration-500"
                >
                  <Icon className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-base md:text-lg text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}