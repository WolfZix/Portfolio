import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, PenTool, Rocket, Shield } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageCircle,
    title: 'Bezpłatna konsultacja',
    desc: 'Poznajemy Twój biznes, cele i grupę docelową, aby opracować idealną strategię.',
  },
  {
    num: '02',
    icon: PenTool,
    title: 'Projektujemy i budujemy',
    desc: 'Strona dopasowana do Twoich potrzeb — bez szablonów, bez kompromisów.',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Uruchomienie',
    desc: 'Twoja strona jest online. Szybka, zoptymalizowana i gotowa do działania od pierwszego dnia.',
  },
  {
    num: '04',
    icon: Shield,
    title: 'Zajmujemy się wszystkim',
    desc: 'Aktualizacje, hosting, wsparcie — my to ogarniamy, Ty skupiasz się na biznesie.',
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-24 md:py-40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            Jak Działamy
          </span>

          <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.03em] text-foreground mb-6">
            Prosty proces.
          </h2>

          <p className="text-muted-foreground text-base md:text-lg max-w-md">
            Bez wiedzy technicznej. Prowadzimy Cię przez każdy krok.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-border z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="relative group"
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 border border-border bg-background flex items-center justify-center transition-all duration-500 relative z-10 group-hover:border-primary after:content-[''] after:absolute after:inset-0 after:bg-transparent after:transition-all group-hover:after:bg-primary/5">
                        <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                      </div>

                      <span className="font-heading font-black text-sm text-primary tracking-[0.2em]">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg md:text-xl text-foreground mb-3">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.desc}
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