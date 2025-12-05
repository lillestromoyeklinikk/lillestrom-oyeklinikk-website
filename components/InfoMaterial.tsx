import React from 'react';
import { AlertTriangle, Eye, Thermometer, Info, PlayCircle, ExternalLink } from 'lucide-react';

const InfoMaterial: React.FC = () => {
  return (
    <section className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Informasjonsmateriell</h1>
          <p className="text-xl text-slate-600">
            Viktig informasjon om symptomer og egenbehandling.
          </p>
        </div>

        {/* Seksjon 1: Symptomer */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12">
          <div className="bg-red-50 border-b border-red-100 p-6 flex items-center gap-4">
            <div className="bg-red-100 p-3 rounded-full">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Lysglimt, flekker eller innskrenket synsfelt
            </h2>
          </div>
          
          <div className="p-8 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                <Info className="h-5 w-5 text-brand-600" />
                Ta ny kontakt med legen din ved første anledning dersom du:
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Får nye/flere lysglimt enn du har opplevd tidligere.</li>
                <li>Får nye flekker, streker, prikker, edderkoppnett eller lignende nye skygger i synsfeltet.</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-2">
                <Eye className="h-5 w-5 text-red-600" />
                Ta STRAKS kontakt med øyelegen/legevakten dersom du:
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-800 mb-4">
                <li>Merker innskrenket synsfelt (gardin som trekkes for).</li>
              </ul>
              
              <div className="bg-white p-4 rounded-lg border border-red-100">
                <p className="font-semibold text-slate-900 mb-2">Slik tester du synsfeltet selv:</p>
                <ol className="list-decimal pl-5 space-y-2 text-slate-700">
                  <li>Tildekk det friske øyet med den ene håndflaten.</li>
                  <li>Fest blikket rett frem på et punkt i rommet foran deg.</li>
                  <li>Bruk den andre hånden for å se om man ser hånden i sidesynet. <strong>Test i alle retninger!</strong></li>
                </ol>
              </div>
              
              <p className="mt-4 font-bold text-red-700">
                Er man usikker på symptomene som oppstår? Ta kontakt med nærmeste øyelege eller legevakten straks!
              </p>
            </div>

            {/* Video Link */}
            <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                <PlayCircle className="h-5 w-5 text-brand-600" />
                Videoinformasjon
              </h3>
              <a 
                href="https://www.youtube.com/watch?v=QF1_ZJWCYj0" 
                target="_blank" 
                rel="noreferrer"
                className="text-brand-600 hover:text-brand-800 hover:underline font-medium text-lg flex items-center gap-2 transition-colors group"
              >
                Se informasjonsvideo om glasslegemeløsning på YouTube 
                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Seksjon 2: Behandling */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-brand-50 border-b border-brand-100 p-6 flex items-center gap-4">
            <div className="bg-brand-100 p-3 rounded-full">
              <Thermometer className="h-8 w-8 text-brand-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Oppvarming og massasje av øyelokkene
            </h2>
          </div>
          <div className="px-6 py-2 bg-brand-50/50">
             <p className="text-brand-800 text-sm font-medium">Ved Meibomsk kjerteldysfunksjon (MGD)</p>
          </div>

          <div className="p-8">
            <ol className="space-y-8 relative border-l-2 border-brand-100 ml-3">
              <li className="ml-8 relative">
                <span className="absolute -left-12 top-0 bg-brand-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Oppvarming</h3>
                <p className="text-slate-700">
                  Varm opp en øyemaske til <strong>over 40 grader celsius</strong>. Dette er viktig da smeltepunktet for oljen (meibum) i kjertlene er 40 grader.
                </p>
                <p className="text-sm text-slate-500 mt-2 italic">
                  Tips: Varmemaske fås kjøpt på apoteket. Riskorn-pose eller nakkevarmer kan også fungere.
                </p>
              </li>
              
              <li className="ml-8 relative">
                <span className="absolute -left-12 top-0 bg-brand-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Behandlingstid</h3>
                <p className="text-slate-700">
                  Ha god kontakt mellom varme-elementet og huden på øyelokkene. Ligg med dette i ca. <strong>10-12 minutter</strong>.
                </p>
              </li>

              <li className="ml-8 relative">
                <span className="absolute -left-12 top-0 bg-brand-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Massasje</h3>
                <p className="text-slate-700">
                  Masser/skvis øyelokkskantene på alle fire øyelokk tett inn mot øyevippene. Bruk ca. <strong>30 sekunder på hvert øyelokk</strong>.
                </p>
                <div className="mt-3 bg-yellow-50 text-yellow-800 p-3 rounded-lg text-sm border border-yellow-100 inline-block">
                  <strong>OBS!</strong> Unngå å vrenge øyelokkene utover under denne prosessen.
                </div>
              </li>
            </ol>

            <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-slate-800 font-medium">
                <span className="text-brand-600 font-bold">PS!</span> Punkt 3 (massasje) kan alene gjentas flere ganger gjennom dagen om man har mulighet til dette, selv uten oppvarming.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfoMaterial;