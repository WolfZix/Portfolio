import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PixelBlast from '../../PixelBlast';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="w-full h-full absolute">
          <PixelBlast
            variant="square"
            pixelSize={4}
            color="#ff3d3d"
            patternScale={2}
            patternDensity={1}
            pixelSizeJitter={0}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid={false}
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.5}
            edgeFade={0.3}
            transparent
            className="w-full h-full"
            style={{ display: 'block' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="absolute left-8 md:left-16 top-0 bottom-0 w-px bg-primary/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-primary text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-6 md:mb-8 w-fit text-shadow">
              Agencja Webowa
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.92] tracking-[-0.04em] text-foreground mb-6 md:mb-8"
          >
            Tworzymy i zarządzamy stronami, które{' '}
            <span className="text-primary">rozwijają</span> Twój biznes.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed mb-10 md:mb-14"
          >
            Od prostych stron firmowych po zaawansowane sklepy internetowe — projektujemy, budujemy i zajmujemy się wszystkim.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 md:px-10 py-4 md:py-5 text-sm md:text-base font-bold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              Bezpłatna konsultacja
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-3 border border-border text-foreground px-8 md:px-10 py-4 md:py-5 text-sm md:text-base font-medium uppercase tracking-wider hover:border-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Nasze Usługi
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}