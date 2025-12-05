import React from 'react';
import { MapPin, Phone, Clock, MessageSquare } from 'lucide-react';
import { useImageRotator } from '../hooks/useImageRotator';

const Contact: React.FC = () => {
  const { imageSrc, loading } = useImageRotator('map');

  return (
    <footer id="kontakt" className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Kontaktinfo */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Lillestrøm Øyeklinikk AS</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-brand-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Vestbygata 55<br />
                  2003 Lillestrøm
                </span>
              </div>
              
              <div className="flex items-start">
                 <Phone className="h-6 w-6 text-brand-500 mr-3 flex-shrink-0 mt-0.5" />
                 <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Telefon</p>
                    <a href="tel:+4733994090" className="text-lg font-bold text-white hover:text-brand-400 transition-colors">33 99 40 90</a>
                 </div>
              </div>

              <div className="flex items-start">
                 <MessageSquare className="h-6 w-6 text-brand-500 mr-3 flex-shrink-0 mt-0.5" />
                 <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">SMS-bestilling</p>
                    <p className="text-sm">
                      Send til <span className="text-white font-bold">2097</span> med kodeord: <span className="text-white font-bold">LØYE</span>
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      F.eks: "LØYE Jeg vil gjerne endre time..."
                    </p>
                 </div>
              </div>
            </div>
          </div>

          {/* Åpningstider */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Åpningstider Telefon</h3>
            <div className="space-y-4">
              <div>
                 <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-slate-500"/> Mandag - Torsdag</span>
                 </div>
                 <div className="pt-2 text-white pl-6 space-y-1">
                    <p>08:30 - 09:30</p>
                    <p>14:00 - 14:30</p>
                 </div>
              </div>
              
              <div>
                 <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-slate-500"/> Fredag</span>
                 </div>
                 <div className="pt-2 text-white pl-6">
                    <p>08:30 - 09:30</p>
                 </div>
              </div>

              <div className="mt-6 bg-slate-800 p-4 rounded-lg border border-slate-700">
                <p className="text-sm text-brand-400 font-medium">NB: Klinikken stenger kl. 13:00 på fredager.</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-64 md:h-auto bg-slate-800 rounded-xl overflow-hidden relative group">
             {imageSrc ? (
               <img 
                src={imageSrc}
                alt="Kartillustrasjon Lillestrøm" 
                className={`w-full h-full object-cover transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-50'} group-hover:opacity-75`}
                loading="lazy"
               />
             ) : (
               <div className="w-full h-full bg-slate-700 animate-pulse"></div>
             )}
             <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href="https://maps.google.com/?q=Vestbygata+55,+2003+Lillestrøm" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-white text-slate-900 px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-brand-50 transition-colors z-10"
                >
                  Åpne i kart
                </a>
             </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-sm text-slate-600">
          <p>&copy; 2025 Lillestrøm Øyeklinikk AS. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;