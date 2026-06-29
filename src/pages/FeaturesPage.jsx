import React, { useState } from 'react';
import { ArrowRight, CheckCircle, ShieldAlert } from 'lucide-react';

export default function FeaturesPage({ setCurrentPage }) {
  const [opacity, setOpacity] = useState(65);

  const handleNavClick = (id) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="animate-in fade-in duration-500">
      <main className="flex-grow pt-10">
        {/* Hero Section */}
        <section className="relative py-2xl px-gutter overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30 -z-10"></div>
          <div className="max-w-7xl mx-auto text-center space-y-md">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md tracking-wider">
              OUR TECHNOLOGY
            </span>
            <h1 className="font-display-lg text-display-lg text-on-background font-bold max-w-4xl mx-auto leading-tight">
              Advanced Thermal Intelligence <br className="hidden md:block"/> for Resilient Cities
            </h1>
            <p className="max-w-2xl mx-auto text-on-surface-variant font-body-lg text-body-lg">
              Mitigating the urban heat island effect through deep geospatial synthesis and micro-climate modeling.
            </p>
          </div>
        </section>

        {/* Feature Grid Section */}
        <section className="py-2xl px-gutter max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {/* Feature 1 */}
            <div className="bg-white border border-outline-variant rounded-2xl p-lg card-shadow card-shadow-hover flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center mb-lg">
                  <span className="material-symbols-outlined text-on-primary-container text-[28px]">satellite_alt</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-semibold mb-md text-on-background group-hover:text-primary transition-colors">
                  Geospatial AI Analysis
                </h3>
                <p className="text-on-surface-variant mb-xl leading-relaxed font-body-md">
                  Multimodal satellite synthesis combining thermal IR and optical data to identify heat accumulation patterns across diverse urban topographies with sub-meter precision.
                </p>
              </div>
              <button 
                onClick={() => handleNavClick('contact')}
                className="flex items-center text-primary font-bold gap-xs cursor-pointer focus:outline-none hover:opacity-80 text-left mt-auto"
              >
                <span>Explore Synthesis</span>
                <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
              </button>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white border border-outline-variant rounded-2xl p-lg card-shadow card-shadow-hover flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center mb-lg">
                  <span className="material-symbols-outlined text-on-primary-container text-[28px]">monitoring</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-semibold mb-md text-on-background group-hover:text-primary transition-colors">
                  Predictive Thermal Modeling
                </h3>
                <p className="text-on-surface-variant mb-xl leading-relaxed font-body-md">
                  Run advanced ML-driven scenarios to forecast how urban developments affect local temperatures over decades, enabling climate-responsive infrastructure planning.
                </p>
              </div>
              <button 
                onClick={() => handleNavClick('contact')}
                className="flex items-center text-primary font-bold gap-xs cursor-pointer focus:outline-none hover:opacity-80 text-left mt-auto"
              >
                <span>Simulate Scenarios</span>
                <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
              </button>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-outline-variant rounded-2xl p-lg card-shadow card-shadow-hover flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center mb-lg">
                  <span className="material-symbols-outlined text-on-primary-container text-[28px]">precision_manufacturing</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-semibold mb-md text-on-background group-hover:text-primary transition-colors">
                  Micro-intervention Strategy
                </h3>
                <p className="text-on-surface-variant mb-xl leading-relaxed font-body-md">
                  Precision recommendations for cool-roofing, urban greening, and wind-corridor optimization tailored to specific neighborhood micro-climates.
                </p>
              </div>
              <button 
                onClick={() => handleNavClick('contact')}
                className="flex items-center text-primary font-bold gap-xs cursor-pointer focus:outline-none hover:opacity-80 text-left mt-auto"
              >
                <span>View Strategy Engine</span>
                <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        {/* Visualization/Map Teaser Section */}
        <section className="py-2xl px-gutter">
          <div className="max-w-7xl mx-auto">
            <div className="bg-surface-container rounded-3xl overflow-hidden border border-outline-variant flex flex-col md:flex-row shadow-lg">
              <div className="md:w-1/2 p-xl flex flex-col justify-center space-y-md">
                <h2 className="font-headline-lg text-headline-lg text-on-background font-bold">Precision Cartography</h2>
                <p className="text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
                  Our platform provides a command center view of environmental stressors. Overlay humidity, wind speed, and thermal radiation to build a comprehensive risk profile.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-md">
                    <CheckCircle className="text-primary fill-primary/10 mt-1 shrink-0" size={18} />
                    <span className="font-body-md text-body-md text-on-surface">Real-time heat stress monitoring alerts.</span>
                  </li>
                  <li className="flex items-start gap-md">
                    <CheckCircle className="text-primary fill-primary/10 mt-1 shrink-0" size={18} />
                    <span className="font-body-md text-body-md text-on-surface">Vegetation index (NDVI) temporal analysis.</span>
                  </li>
                  <li className="flex items-start gap-md">
                    <CheckCircle className="text-primary fill-primary/10 mt-1 shrink-0" size={18} />
                    <span className="font-body-md text-body-md text-on-surface">Public health risk correlation maps.</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 h-[450px] relative overflow-hidden bg-slate-900">
                {/* Map image whose opacity is bound to our react state */}
                <div 
                  className="w-full h-full bg-cover bg-center transition-opacity duration-200" 
                  style={{ 
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBK56-oCE5xJCR_alwiM8PNUELyDWFmE6JU045p1lViVHmaXiTScY2FJX7I49j5N1H1gbAuJK4GCy2qUQJnKX9QuMZLctoO-LV57xnppnr8m3cTPVUptNLJNjNWvBIxOjc_jtqj_ZEIhYG-9-tIl8zHpBLps-1MEEDMHeUEdopfYsEl1rn_cLEUShFAuGcaZmS31n8wT3IrWqomgJjm411tVbC8hS6tsWJ_X0yURNs-XRyry0YfSCrhkhZFi-9Hj7-jbaL5_WPctnj0')",
                    opacity: opacity / 100 
                  }}
                  alt="City Geospatial Thermal Map"
                ></div>
                
                {/* Floating Control Card */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-outline-variant shadow-md min-w-[200px] space-y-sm">
                  <div className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider flex justify-between">
                    <span>Layer Opacity</span>
                    <span className="text-primary font-bold">{opacity}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="100" 
                    value={opacity} 
                    onChange={(e) => setOpacity(parseInt(e.target.value))}
                    className="w-full h-1 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[10px] font-bold text-primary uppercase">
                    <span>Satellite</span>
                    <span>Thermal Overlay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-2xl px-gutter text-center">
          <div className="max-w-4xl mx-auto bg-primary-container text-on-primary text-2xl p-2xl rounded-3xl space-y-lg shadow-xl shadow-primary/10">
            <h2 className="font-headline-lg text-headline-lg font-bold">Ready to cool your city?</h2>
            <p className="max-w-2xl mx-auto opacity-90 font-body-lg text-body-lg leading-relaxed">
              Join over 50 municipal governments using LISS-COOL to build climate-ready urban environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-md justify-center pt-md max-w-xs mx-auto sm:max-w-none">
              <button 
                onClick={() => handleNavClick('contact')}
                className="bg-primary-fixed text-on-primary-fixed px-xl py-4 rounded-xl font-bold hover:brightness-110 active:scale-95 transition-all shadow-lg"
              >
                Request Technical Demo
              </button>
              <button 
                className="border border-on-primary px-xl py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all active:scale-95"
              >
                Download Whitepaper
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
