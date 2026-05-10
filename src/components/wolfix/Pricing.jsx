import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import ElectricBorder from '../../ElectricBorder';

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

const models = [
  {
    label: 'Projekt jednorazowy',
    tagline: 'Pełna własność',
    features: [
      'Indywidualny projekt i programowanie strony',
      'Pełna własność kodu źródłowego',
      'Uruchomienie i wdrożenie w cenie',
      'Wsparcie po uruchomieniu (30 dni)',
    ],
  },
  {
    label: 'Plan miesięczny',
    subtitle: 'Najpopularniejszy',
    tagline: 'Zajmujemy się wszystkim',
    featured: true,
    features: [
      'Indywidualny projekt i programowanie strony',
      'Zarządzanie hostingiem i domeną',
      'Bieżące aktualizacje i zmiany',
      'Monitoring bezpieczeństwa i kopie zapasowe',
      'Priorytetowe wsparcie techniczne',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-40 relative">
      <div className="absolute inset-0 bg-card/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            Elastyczny Model
          </span>

          <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.03em] text-foreground mb-6">
            Twój projekt, Twoje zasady.
          </h2>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Oferujemy elastyczne rozwiązania — jednorazowe projekty dla firm, które chcą pełnej własności, lub plany miesięczne, gdzie zarządzamy wszystkim za Ciebie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl">

          {models.map((model, idx) => {
            const content = (
              <motion.div
                key={model.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`p-8 md:p-12 h-full relative ${model.featured ? 'bg-primary/5' : 'bg-background'
                  }`}
              >

                {model.featured && (
                  <div className="absolute top-0 -right-4 rotate-[10deg] pointer-events-none z-30">
                    <div className="px-6 py-2 text-[11px] font-bold uppercase tracking-wider text-white bg-primary/10 border-2 border-primary shadow-[0_0_25px_theme(colors.primary/0.35)] backdrop-blur-sm">
                      {model.subtitle}
                    </div>
                  </div>
                )}

                {model.featured && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary z-20" />
                )}

                <div className="mb-8">
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-2">
                    {model.label}
                  </h3>

                  <span className={`text-sm font-medium ${model.featured ? 'text-primary' : 'text-muted-foreground'
                    }`}>
                    {model.tagline}
                  </span>
                </div>

                <ul className="space-y-4">
                  {model.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${model.featured ? 'text-primary' : 'text-foreground'
                          }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => { scrollToSection("contact") }}
                  className={`inline-block mt-10 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 text-center w-full focus:outline-none focus:ring-2 focus:ring-primary ${model.featured
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-border text-foreground hover:border-foreground'
                    }`}
                >
                  Zaczynamy
                </button>
              </motion.div>
            );

            return model.featured ? (
              <ElectricBorder
                key={model.label}
                color="#FF3D3D"
                speed={0.2}
                chaos={0.05}
                thickness={1}
                style={{ borderRadius: 0, position: 'relative' }}
              >
                {content}
              </ElectricBorder>
            ) : (
              <div key={model.label} className="h-full">
                {content}
              </div>
            );
          })}

        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground text-sm mt-8 max-w-xl"
        >
          W modelu subskrypcyjnym nie musisz martwić się o hosting, aktualizacje ani problemy techniczne — my zajmujemy się wszystkim.
        </motion.p>
      </div>
    </section>
  );
}