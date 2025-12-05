import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useImageRotator } from '../hooks/useImageRotator';

const Hero: React.FC = () => {
  const { imageSrc, loading } = useImageRotator('hero');

  return (
    <section id="hero" className="relative pt-20 lg:pt-28 pb-16 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0 pt-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
              Øyespesialist med <br className="hidden lg:block"/>
              <span className="text-brand-600">offentlig avtale</span>
            </h1>
            
            <div className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-left">
              <p className="font-semibold text-slate-900 mb-4 text-xl">Din øyehelse er viktig for oss! 👁️</p>
              <p className="mb-4">
                Velkommen til Lillestrøm Øyeklinikk - her møter du øyelege Rafaqat Ahmad, en erfaren spesialist som brenner for god øyehelse. 
              </p>
              <p className="mb-6">
                Vi har driftsavtale med Helse Sørøst, noe som betyr at du får samme trygghet og kvalitet som ved offentlige sykehus, men ofte med kortere ventetid. Du trenger henvisning fra lege eller optiker for å få time hos øyelegen vår.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-6">
                <p className="font-bold text-slate-900 mb-3">Hva gjør oss spesielle?</p>
                <ul className="space-y-2">
                  {[
                    'Offentlig avtale = trygghet for deg',
                    'Moderne utstyr for nøyaktig diagnostikk',
                    'Vennlig atmosfære - ingen stressende sykehusfølelse',
                    'Sentralt i Lillestrøm - lett tilgjengelig',
                    'Rask og effektiv undersøkelse (10-15 minutter)'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#tjenester" 
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-lg text-white bg-brand-600 hover:bg-brand-700 md:text-lg transition-all shadow-lg hover:shadow-brand-500/25"
              >
                Våre tjenester <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative mt-8 lg:mt-0">
            <div className={`relative rounded-2xl overflow-hidden shadow-2xl bg-slate-200 min-h-[500px] transition-opacity duration-700 ${loading ? 'opacity-50' : 'opacity-100'}`}>
              {imageSrc && (
                <img 
                  src={imageSrc}
                  alt="Kunstnerisk nærbilde av et menneskelig øye" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 absolute inset-0"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/20 to-transparent pointer-events-none"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block max-w-xs border-l-4 border-brand-500 z-20">
              <p className="text-brand-900 font-bold text-lg mb-1">Dr. Rafaqat Ahmad</p>
              <p className="text-slate-600 text-sm">Avtalespesialist</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;