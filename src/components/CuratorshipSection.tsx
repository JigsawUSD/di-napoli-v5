import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export const CuratorshipSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      title: 'Pistache de Bronte DOP',
      subtitle: 'O Ouro Verde da Sicília',
      description:
        'Colhido a cada dois anos artesanalmente aos pés do vulcão Etna para garantir uma intensidade aromática sem igual, cor natural vibrante e sabor concentrado.',
      image:
        'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
      highlights: ['Selo DOP Sicília', 'Colheita Manual Bienal', 'Sem Aromas Artificiais'],
    },
    {
      title: 'Torra Lenta & Autoral',
      subtitle: 'Grãos 100% Arábica Selecionados',
      description:
        'Nossos grãos da Mogiana e Sul de Minas são torrados em pequenos lotes semanais. O processo respeita a curva ideal de cada variedade, revelando notas naturais de chocolate belga e avelãs.',
      image:
        'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80',
      highlights: ['84+ Pontos SCAA', 'Torra Semanal na Casa', 'Rastreabilidade Total'],
    },
    {
      title: 'Leite Fresco de Fazenda',
      subtitle: 'Sem Conservantes nem Estabilizantes',
      description:
        'Utilizamos leite integral puro Tipo A vindo diretamente de produtores locais parceiros na Serra da Mantiqueira, garantindo textura sedosa e dulçor natural sem açúcar adicionado excessivo.',
      image:
        'https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?auto=format&fit=crop&w=800&q=80',
      highlights: ['Fresco Chegado no Dia', 'Sem Gordura Hidrogenada', 'Zero Espessantes'],
    },
    {
      title: 'Cacau Belga 70%',
      subtitle: 'Intensidade em Cada Colherada',
      description:
        'Chocolate Callebaut de origem sustentável temperado com precisão para atingir notas profundas de fruto do cacau torrado com raspas de nibs de cacau.',
      image:
        'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=800&q=80',
      highlights: ['Cacau Sustentável', 'Sem Adição de Oleaginosas Baratas', 'Vegano/Lactose Free disponível'],
    },
  ];

  return (
    <section className="bg-white py-24 md:py-36 border-t border-[#8c716f]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#8c716f]/15 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  src={pillars[activeTab].image}
                  alt={pillars[activeTab].title}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover transform-gpu"
                />
              </AnimatePresence>

              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#251918]/80 backdrop-blur-md text-white p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 text-[#ffdad7] text-xs uppercase font-semibold tracking-wider mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>{pillars[activeTab].subtitle}</span>
                </div>
                <h4 className="font-serif text-2xl font-bold">{pillars[activeTab].title}</h4>
              </div>
            </div>
          </div>

          {/* Text Content & Tab Selectors */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[#942225] font-semibold uppercase tracking-[0.3em] text-xs block mb-3">
              A Curadoria de Ingredientes
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#251918] leading-tight mb-8">
              O Segredo <br />
              <span className="italic text-[#942225]">está na Origem.</span>
            </h2>

            {/* Interactive Pillar List */}
            <div className="flex flex-col gap-4 mb-8">
              {pillars.map((pillar, idx) => (
                <button
                  key={pillar.title}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left p-5 rounded-2xl transition-all duration-300 border flex flex-col gap-1 cursor-pointer ${
                    activeTab === idx
                      ? 'bg-[#ffe9e7] border-[#942225]/30 shadow-md translate-x-2'
                      : 'bg-transparent border-transparent hover:bg-[#fff8f7] hover:border-[#8c716f]/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-serif text-lg font-bold ${
                        activeTab === idx ? 'text-[#942225]' : 'text-[#251918]'
                      }`}
                    >
                      {pillar.title}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        activeTab === idx ? 'text-[#942225] translate-x-1' : 'text-[#584140]/40'
                      }`}
                    />
                  </div>
                  {activeTab === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-[#584140] text-sm leading-relaxed"
                    >
                      <p className="mb-3">{pillar.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {pillar.highlights.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center gap-1.5 text-[11px] font-semibold bg-white text-[#942225] px-3 py-1 rounded-full shadow-xs border border-[#942225]/10"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#942225]" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
