import React from 'react';
import { PRICES } from '../constants';

const Prices: React.FC = () => {
  return (
    <section id="priser" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Prisliste</h2>
          <p className="mt-4 text-slate-600">
            Oversikt over våre vanligste takster for privat konsultasjon.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200">
                <th className="py-4 px-6 text-sm font-semibold text-slate-700 uppercase tracking-wider">Tjeneste</th>
                <th className="py-4 px-6 text-sm font-semibold text-slate-700 uppercase tracking-wider text-right">Pris</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {PRICES.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-6">
                    <div className="text-slate-900 font-medium">{item.service}</div>
                    {item.note && <div className="text-slate-500 text-sm mt-1">{item.note}</div>}
                  </td>
                  <td className="py-5 px-6 text-right whitespace-nowrap">
                    <span className="text-brand-600 font-bold">{item.price}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-6 bg-slate-50 text-center text-sm text-slate-500">
            Avbestilling må skje senest 24 timer før timen for å unngå gebyr.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;