import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Info, BookOpen, Flame, ArrowRight } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/mockData';

interface MenuSectionProps {
  onSelectItem?: (item: MenuItem) => void;
  onOpenFullMenu?: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = () => {
  // Top 10 Best Sellers in order of popularity
  const top10Items = useMemo(() => {
    // Pick the top 10 most iconic items
    const priorityIds = ['1', '2', '3', '7', '4', '9', '11', '12', '8', '14'];
    const sorted = [...MENU_ITEMS].sort((a, b) => {
      const indexA = priorityIds.indexOf(a.id);
      const indexB = priorityIds.indexOf(b.id);
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return 0;
    });
    return sorted.slice(0, 10);
  }, []);

  return (
    <section id="menu" className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8 border-b border-[#8c716f]/15 pb-8">
          <div>
            <span className="text-[#942225] font-semibold uppercase tracking-[0.3em] text-xs flex items-center gap-2 mb-3">
              <Flame className="w-4 h-4 text-[#942225] animate-pulse" />
              Os queridinhos dos nossos clientes
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-[#251918] tracking-tight mb-2">
              O essencial da estação.
            </h2>
            <p className="font-sans text-[#584140] text-sm md:text-base max-w-xl leading-relaxed">
              Descubra os sabores favoritos e mais desejados da Di Napoli. Uma curadoria artesanal refinada.
            </p>
          </div>

          {/* Button: Acessar Cardápio (sem ação por enquanto) */}
          <div className="shrink-0">
            <button
              className="w-full sm:w-auto bg-[#942225] hover:bg-[#78181b] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl shadow-[#942225]/20 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <BookOpen className="w-4 h-4" />
              <span>Acessar Cardápio Completo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Top 10 Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {top10Items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-[#fff8f7] rounded-3xl overflow-hidden border border-[#8c716f]/15 hover:border-[#942225]/30 hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#ffe9e7]">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform-gpu transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Top Ranking Rank Badge */}
                  <div className="absolute top-4 left-4 bg-[#251918]/85 backdrop-blur-md text-[#ffdad7] text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 shadow-md">
                    <span className="text-[#942225] font-black bg-[#ffdad7] rounded-full w-4 h-4 flex items-center justify-center text-[9px]">
                      {index + 1}
                    </span>
                    <span>Top {index + 1} em Alta</span>
                  </div>

                  {/* Optional Custom Item Badge */}
                  {item.badge && (
                    <div className="absolute top-14 left-4 bg-[#942225]/90 text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-white" />
                      {item.badge}
                    </div>
                  )}

                  {/* Price Tag Badge */}
                  <div className="absolute bottom-4 right-4 bg-[#942225] text-white font-serif font-bold text-lg px-4 py-1.5 rounded-full shadow-md">
                    R$ {item.price.toFixed(2).replace('.', ',')}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#251918] group-hover:text-[#942225] transition-colors mb-2">
                      {item.name}
                    </h3>

                    <p className="font-sans text-[#584140] text-sm leading-relaxed mb-4 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer Info inside Card */}
                  <div className="pt-4 border-t border-[#8c716f]/10 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#942225] bg-[#ffe9e7] px-3 py-1 rounded-full">
                      Artesanal
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#584140]/70 bg-[#fff8f7] border border-[#8c716f]/15 px-3 py-1 rounded-full">
                      Disponível
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-[#fff8f7] border border-[#8c716f]/20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#251918] mb-2">
              Deseja explorar todas as opções?
            </h3>
            <p className="text-[#584140] text-sm md:text-base max-w-xl">
              Consulte nosso cardápio digital completo com todas as categorias, opções sem lactose, cafés e sobremesas.
            </p>
          </div>

          <button
            className="bg-[#251918] hover:bg-[#942225] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all transform hover:scale-105 flex items-center gap-3 shrink-0 cursor-pointer shadow-md"
          >
            <BookOpen className="w-4 h-4" />
            <span>Acessar Cardápio Completo</span>
          </button>
        </div>
      </div>
    </section>
  );
};

