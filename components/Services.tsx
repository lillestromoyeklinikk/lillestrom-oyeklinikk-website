import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="tjenester" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Behandlinger</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Hva kan vi hjelpe deg med?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Vi utreder og behandler de fleste øyesykdommer og tilstander med moderne utstyr.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-slate-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-slate-100 group"
            >
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center text-brand-600 shadow-sm mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;