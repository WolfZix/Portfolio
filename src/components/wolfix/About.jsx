import React from 'react';
import { motion } from 'framer-motion';
import TiltedCard from '../../TiltedCard';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              O Nas
            </span>
            <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.03em] text-foreground mb-8">
              Twój cyfrowy partner od pierwszego dnia.
            </h2>
            <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                WolfZix to agencja webowa tworząca nowoczesne strony internetowe i sklepy online dla firm każdej wielkości.
              </p>
              <p>
                Zajmujemy się wszystkim — od projektu i programowania po hosting i bieżącą obsługę techniczną.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-black text-foreground">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Zrealizowanych projektów</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl md:text-4xl font-black text-foreground">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Zadowolonych klientów</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary" />
            <div className="aspect-[4/3] bg-transparent">
              <TiltedCard
                imageSrc="./Laptop1.png"
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Kendrick Lamar - GNX"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={15}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}