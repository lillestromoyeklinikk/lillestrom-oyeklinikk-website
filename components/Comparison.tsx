import React from 'react';
import { Check, X, Clock, FileText, Coins } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section id="info" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            To veier til øyelegen
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Vi ønsker å være tilgjengelige for alle. Derfor tilbyr vi både offentlig støttet behandling på dagtid og et privat tilbud på kveldstid for deg som trenger rask hjelp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Offentlig Kort */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div className="bg-slate-100 p-6 border-b border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                <FileText className="text-slate-500" />
                Offentlig Avtale
              </h3>
              <p className="text-slate-500 mt-2">Dagtid (08:00 - 15:30)</p>
            </div>
            <div className="p-8 flex-1">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">Lav egenandel (offentlige satser)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">Frikort gjelder</span>
                </li>
                <li className="flex items-start">
                  <X className="h-6 w-6 text-red-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Krever henvisning</strong> fra lege/optiker</span>
                </li>
                <li className="flex items-start">
                  <X className="h-6 w-6 text-red-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">Varierende ventetid</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-100 text-center">
              <span className="text-sm text-slate-500">Passer for deg med henvisning og god tid.</span>
            </div>
          </div>

          {/* Privat Kort */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-brand-500 overflow-hidden flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
              Anbefalt for rask hjelp
            </div>
            <div className="bg-brand-50 p-6 border-b border-brand-100">
              <h3 className="text-2xl font-bold text-brand-900 flex items-center gap-2">
                <Clock className="text-brand-600" />
                Privat Kveldsklinikk
              </h3>
              <p className="text-brand-700 mt-2">Kveldstid (16:00 - 20:00)</p>
            </div>
            <div className="p-8 flex-1">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-brand-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700"><strong>Ingen henvisning</strong> nødvendig</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-brand-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">Kort ventetid (oftest 1-3 dager)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-brand-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">Moderne utstyr og god tid</span>
                </li>
                <li className="flex items-start">
                  <Coins className="h-6 w-6 text-slate-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">Du betaler hele undersøkelsen selv</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-100">
              <a href="#timebestilling" className="block w-full text-center bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-brand-500/30">
                Bestill privat time nå
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;