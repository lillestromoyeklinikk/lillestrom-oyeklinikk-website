import React from 'react';
import { CircleHelp } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">FAQ</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Ofte stilte spørsmål
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Her finner du svar på det de fleste lurer på før de besøker oss.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="relative group">
              <dt>
                <div className="absolute flex items-center justify-center h-10 w-10 rounded-xl bg-brand-500 text-white shadow-lg shadow-brand-500/30 group-hover:bg-brand-600 transition-colors">
                  <CircleHelp className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-xl leading-8 font-bold text-slate-900 group-hover:text-brand-700 transition-colors">{item.question}</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-slate-600 leading-7">
                {item.answer}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;