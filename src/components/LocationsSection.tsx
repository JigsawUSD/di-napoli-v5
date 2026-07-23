import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Calendar, Instagram, Facebook } from 'lucide-react';
import { STORES } from '../data/mockData';
import { IFoodIcon } from './IFoodIcon';

interface LocationsSectionProps {
  onOpenReservationWithStore: (storeId: string) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({
  onOpenReservationWithStore,
}) => {
  const currentStore = STORES[0];

  return (
    <section id="unidades" className="py-24 md:py-36 bg-white border-t border-[#8c716f]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[#942225] font-semibold uppercase tracking-[0.3em] text-xs block mb-3">
            Onde nos Encontrar
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#251918]">
            Venha nos visitar em Leme
          </h2>
          <div className="w-16 h-[2px] bg-[#942225]/30 mx-auto mt-6" />
        </div>

        {/* Store Card Display */}
        <div className="bg-[#fff8f7] rounded-3xl p-8 md:p-12 border border-[#8c716f]/15 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Store Image */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden aspect-[16/10] shadow-md relative">
            <img
              src={currentStore.image}
              alt={currentStore.name}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transform-gpu"
            />
            <div className="absolute top-4 left-4 bg-[#251918]/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-semibold">
              Leme - SP
            </div>
          </div>

          {/* Store Information */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#942225] block mb-2">
                Nossa Casa em Leme
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#251918] mb-6">
                {currentStore.name}
              </h3>

              <div className="space-y-4 text-sm text-[#584140] mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#942225] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#251918]">{currentStore.address}</p>
                    <p className="text-xs text-[#584140]">{currentStore.city}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#942225] shrink-0" />
                  <span className="font-medium">{currentStore.hours}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#942225] shrink-0" />
                  <span className="font-medium">{currentStore.phone}</span>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <span className="text-xs uppercase font-bold text-[#251918]/60 tracking-wider">Redes & Delivery:</span>
                  <a
                    href="https://www.instagram.com/dinapoli.sorveteria/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram Di Napoli"
                    className="w-8 h-8 rounded-full bg-[#ffe9e7] text-[#942225] hover:bg-[#942225] hover:text-white flex items-center justify-center transition-all transform hover:scale-110"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/dinapoli.sorveteriaecafeteria/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook Di Napoli"
                    className="w-8 h-8 rounded-full bg-[#ffe9e7] text-[#942225] hover:bg-[#942225] hover:text-white flex items-center justify-center transition-all transform hover:scale-110"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://ifood.com.br"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="iFood Di Napoli"
                    className="w-8 h-8 rounded-full bg-[#ffe9e7] text-[#942225] hover:bg-[#942225] hover:text-white flex items-center justify-center transition-all transform hover:scale-110"
                  >
                    <IFoodIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-[#8c716f]/15">
              <button
                onClick={() => onOpenReservationWithStore(currentStore.id)}
                className="flex-1 bg-[#942225] hover:bg-[#78181b] text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Reservar Mesa</span>
              </button>

              <a
                href={currentStore.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#8c716f]/30 hover:border-[#942225] bg-white text-[#251918] hover:text-[#942225] px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Como Chegar</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
