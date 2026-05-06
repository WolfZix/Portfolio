import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: 'Elegance',
    category: 'Salon fryzjerski',
    url: 'https://velvet-style-studio.base44.app/',
    image: '/Elegance.png',
  },
  {
    name: 'Kwiaciarnia Magnolia',
    category: 'Kwiaciarnia',
    url: 'https://kwiaciarnia-magnolia.base44.app/',
    image: '/Kwiaciarnia Magnolia.png',
  },
  {
    name: 'SolidHaus',
    category: 'Budownictwo',
    url: 'https://solidhaus.base44.app/',
    image: '/SolidHaus.png',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-40 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            Nasze Realizacje
          </span>

          <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.03em] text-white">
            Portfolio
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group block relative"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#111] border border-border/50 relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                  <div className="w-14 h-14 bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-primary transition-colors duration-300">
                    {project.name}
                  </h3>
                  <span className="text-sm text-white/50">
                    {project.category}
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Zobacz
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}