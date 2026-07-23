import React from 'react';
import { motion } from 'motion/react';
import { Dog, Briefcase, Heart, Wifi, Coffee } from 'lucide-react';

export const AtmosphereSection: React.FC = () => {
  const features = [
    {
      icon: <Dog className="w-5 h-5 text-[#ffdad7]" />,
      title: 'Pet Friendly Excellence',
      description: 'Varandas climatizadas equipadas com pet bar, potes de água filtrada e biscoitos artesanais cortesia.',
    },
    {
      icon: <Briefcase className="w-5 h-5 text-[#ffdad7]" />,
      title: 'Premium Coworking Hub',
      description: 'Mesas com tomadas individuais,iluminação indireta relaxante e sinal de Wi-Fi 6 ultra veloz para reuniões ou leituras.',
    },
    {
      icon: <Heart className="w-5 h-5 text-[#ffdad7]" />,
      title: 'Safe & Creative Kids Area',
      description: 'Espaço lúdico supervisionado para os pequenos explorarem livros ilustrados e brinquedos educativos de madeira.',
    },
    {
      icon: <Wifi className="w-5 h-5 text-[#ffdad7]" />,
      title: 'Trilha Sonora & Iluminação',
      description: 'Acústica planejada e playlists exclusivas de jazz vintage, bossa nova e soul para conversas fluidas.',
    },
  ];

  return (
    <section id="experiencia" className="relative bg-[#251918] text-white py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Sticky Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
                alt="Nosso ambiente"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform-gpu group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#251918] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/15">
                <span className="text-[#ffdad7] text-xs font-mono uppercase tracking-widest block mb-1">
                  Arquitetura & Conforto
                </span>
                <h4 className="font-serif text-2xl font-bold">Inspirado nos Caffe de Milão</h4>
              </div>
            </div>
          </div>

          {/* Feature List */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[#ffdad7] font-semibold uppercase tracking-[0.3em] text-xs block mb-3">
              Nossa Atmosfera
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-8">
              Aconchego em <br />
              <span className="italic text-[#ffdad7]">cada detalhe.</span>
            </h2>

            <p className="font-sans text-white/80 text-lg leading-relaxed mb-12 font-light">
              Materiais nobres como madeira de demolição, couro legítimo e vegetação nativa.
              Criamos o refúgio perfeito para suas conversas mais importantes ou momentos de quietude.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feat) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#942225] flex items-center justify-center mb-4">
                    {feat.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2">{feat.title}</h3>
                  <p className="font-sans text-white/70 text-xs leading-relaxed">
                    {feat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
