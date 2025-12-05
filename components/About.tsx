import React from 'react';
import { useImageRotator } from '../hooks/useImageRotator';

const About: React.FC = () => {
  const { imageSrc, loading } = useImageRotator('clinical');

  return (
    <section id="om-oss" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative mt-12 lg:mt-0">
             <div className={`rounded-2xl shadow-lg w-full h-96 overflow-hidden bg-slate-100 transition-opacity duration-500 ${loading ? 'opacity-50' : 'opacity-100'}`}>
               {imageSrc && (
                 <img 
                    src={imageSrc}
                    alt="Moderne oftalmologisk utstyr og behandling" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
               )}
             </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-600 text-white p-6 rounded-xl hidden md:block shadow-lg">
                  <p className="font-bold text-3xl">15+</p>
                  <p className="text-brand-100 text-sm">Års erfaring</p>
              </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Om Lillestrøm Øyeklinikk</h2>
            <div className="prose prose-lg text-slate-600">
              <p className="mb-4">
                Vi er en moderne øyeklinikk sentralt i Lillestrøm, dedikert til å gi befolkningen på Romerike trygg og faglig oppdatert øyehelsehjelp.
              </p>
              <p className="mb-4">
                Klinikken ledes av Dr. Rafaqat Ahmad, spesialist i øyesykdommer med bred erfaring fra både sykehus og privat praksis. Vi har investert i det nyeste innen diagnostisk utstyr, inkludert OCT (scan av netthinne) og avansert synsfeltmaskin.
              </p>
              <p>
                Vårt mål er at du skal føle deg ivaretatt, enten du kommer for en rutinekontroll, oppfølging av kronisk sykdom, eller akutt behov for hjelp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;