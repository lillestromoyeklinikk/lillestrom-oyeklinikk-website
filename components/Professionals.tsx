import React from 'react';
import { FileUp } from 'lucide-react';

const Professionals: React.FC = () => {
  return (
    <section id="henvisere" className="py-16 bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">For optikere og fastleger</h2>
            <p className="text-brand-100 text-lg mb-8 leading-relaxed">
              Vi legger stor vekt på godt samarbeid med primærhelsetjenesten. Vi garanterer rask epikrise og god dialog rundt felles pasienter.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-brand-800 p-3 rounded-lg">
                  <FileUp className="h-6 w-6 text-brand-200" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Elektronisk henvisning</h3>
                  <p className="mt-2 text-brand-200">
                    Vi er tilknyttet Helse-Norge. Send henvisning elektronisk til "Lillestrøm Øyeklinikk". Merk gjerne hastegrad.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 bg-white/10 p-8 rounded-2xl backdrop-blur-lg border border-white/20">
            <h3 className="text-xl font-bold mb-4">Henvisningsrutiner</h3>
            <ul className="space-y-3 text-brand-100 text-sm">
              <li>• Husk oppdatert medisinliste</li>
              <li>• Vedlegg relevante funn (trykk, visus, fundusfoto)</li>
            </ul>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm italic opacity-80">
                Vi tar imot pasienter fra hele Romerike.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professionals;