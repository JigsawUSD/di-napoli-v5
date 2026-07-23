import React from 'react';
import { motion } from 'motion/react';

export const ManifestoSection: React.FC = () => {
  return (
    <section id="manifesto" className="relative py-28 md:py-40 bg-[#fff8f7] overflow-hidden">
      {/* Subtle radial ambient background blur */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-[#942225]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#942225] font-semibold uppercase tracking-[0.3em] text-xs block mb-6">
            O Manifesto Di Napoli
          </span>

          <h2 className="font-serif text-4xl md:text-6xl text-[#251918] leading-[1.2] mb-10">
            Nós não servimos <span className="italic text-[#942225] font-normal">apenas</span> café.
          </h2>

          <div className="w-16 h-[2px] bg-[#942225]/30 mx-auto mb-10" />

          <p className="font-sans text-[#584140] text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto font-light">
            Na Di Napoli, o tempo desacelera. Cada colherada do nosso sorvete artesanal e cada aroma do nosso café espresso é um convite para o agora — celebrando a arte de viver com quem amamos.
          </p>

          <div className="mt-12 flex justify-center gap-12 text-[#251918]/60 text-xs uppercase tracking-widest font-semibold">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#942225]" /> Ingredientes DOP
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#942225]" /> Fermentação Natural
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#942225]" /> Lote Limitado
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
