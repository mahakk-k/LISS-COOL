import React, { useState } from 'react';
import { CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';

export default function PricingPage({ setCurrentPage }) {
  const [isAnnual, setIsAnnual] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  const handleNavClick = (id) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const starterPrice = isAnnual ? 390 : 490;
  const proPrice = isAnnual ? 990 : 1250;

  const faqs = [
    {
      q: "How accurate is the thermal data?",
      a: "LISS-COOL utilizes a proprietary multi-spectral fusion engine that combines Sentinel-2 imagery with high-resolution localized sensor data. This achieves a validated accuracy of within 0.8°C at a spatial resolution of 10 meters, outperforming standard terrestrial weather models."
    },
    {
      q: "Can we integrate LISS-COOL with existing GIS?",
      a: "Yes. Our Professional and Enterprise tiers include full API access and native ESRI ArcGIS connectors. You can stream our Real-Time Heat Indices directly into your city planning layers as GeoJSON or Raster Tile services."
    },
    {
      q: "How long does it take to launch a pilot program?",
      a: "A typical 'City Pilot' can be provisioned in less than 72 hours. Once the boundary coordinates are confirmed, our system begins historical data backfilling and initial thermal baseline training. Your dashboard will be live within 3 business days."
    }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <main className="pt-10 pb-2xl px-gutter max-w-7xl mx-auto relative overflow-hidden">
        {/* Background Grid Decoration */}
        <div className="absolute inset-0 bento-grid-pattern -z-10"></div>
        
        {/* Header Section */}
        <header className="text-center mb-2xl space-y-md">
          <h1 className="font-display-lg text-display-lg text-on-surface font-bold">Scalable Climate Resilience</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Select the tier that aligns with your urban cooling goals. From localized heat mapping to nationwide thermal governance.
          </p>
          
          {/* Toggle Switch */}
          <div className="mt-xl flex justify-center items-center gap-md pt-md">
            <span className={`font-label-md text-on-surface transition-colors ${!isAnnual ? 'font-bold text-primary' : ''}`}>Monthly Billing</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-surface-container-highest rounded-full p-1 transition-colors hover:bg-outline-variant focus:outline-none"
            >
              <div 
                className={`w-6 h-6 bg-primary rounded-full transition-transform duration-300 ${
                  isAnnual ? 'translate-x-8' : 'translate-x-0'
                }`}
              ></div>
            </button>
            <span className={`font-label-md text-on-surface flex items-center gap-2 transition-colors ${isAnnual ? 'font-bold text-primary' : ''}`}>
              Annual Billing
              <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Save 20%</span>
            </span>
          </div>
        </header>

        {/* Pricing Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-2xl items-stretch">
          {/* Tier 1: Starter */}
          <div className="bg-white rounded-2xl p-xl flex flex-col border border-outline-variant/60 shadow-sm card-shadow-hover justify-between">
            <div className="space-y-xl">
              <div>
                <span className="font-label-md text-primary uppercase tracking-widest font-bold">Starter</span>
                <h3 className="font-headline-md text-headline-md mt-2 text-on-surface font-bold">City Pilot</h3>
                <div className="mt-md flex items-baseline gap-1">
                  <span className="font-display-lg text-[40px] text-on-background font-bold">$</span>
                  <span className="font-display-lg text-[48px] text-on-background font-bold transition-all duration-300">{starterPrice}</span>
                  <span className="text-on-surface-variant font-body-sm">/mo</span>
                </div>
                <p className="mt-md font-body-sm text-on-surface-variant leading-relaxed">Ideal for small districts or focused academic urban research pilots.</p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 font-body-sm text-on-surface">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>Upto 50km² analysis area</span>
                </li>
                <li className="flex items-start gap-3 font-body-sm text-on-surface">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>Bi-weekly satellite updates</span>
                </li>
                <li className="flex items-start gap-3 font-body-sm text-on-surface">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>Standard Thermal Hotspot Detection</span>
                </li>
                <li className="flex items-start gap-3 font-body-sm text-on-surface">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>PDF Reporting & Exports</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => handleNavClick('contact')}
              className="w-full mt-xl py-3 px-6 rounded-xl border-2 border-primary text-primary font-bold hover:bg-surface-container-low transition-colors focus:outline-none active:scale-98"
            >
              Start Pilot
            </button>
          </div>

          {/* Tier 2: Professional (MOST POPULAR) */}
          <div className="bg-white rounded-2xl p-xl flex flex-col border-2 border-primary relative shadow-md scale-105 z-10 justify-between">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 rounded-full font-label-md text-[11px] uppercase tracking-[0.1em] font-bold">
              Most Popular
            </div>
            <div className="space-y-xl mt-4">
              <div>
                <span className="font-label-md text-primary uppercase tracking-widest font-bold">Professional</span>
                <h3 className="font-headline-md text-headline-md mt-2 text-on-surface font-bold">Urban Resilience</h3>
                <div className="mt-md flex items-baseline gap-1">
                  <span className="font-display-lg text-[40px] text-on-background font-bold">$</span>
                  <span className="font-display-lg text-[48px] text-on-background font-bold transition-all duration-300">{proPrice}</span>
                  <span className="text-on-surface-variant font-body-sm">/mo</span>
                </div>
                <p className="mt-md font-body-sm text-on-surface-variant leading-relaxed">Full-scale municipal intelligence for medium to large cities.</p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 font-body-sm text-on-surface">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>Unlimited Urban Territory Area</span>
                </li>
                <li className="flex items-start gap-3 font-body-sm text-on-surface">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>Daily Heat Map Synthesis</span>
                </li>
                <li className="flex items-start gap-3 font-body-sm text-on-surface">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>AI Predictive Dynamics Modeling</span>
                </li>
                <li className="flex items-start gap-3 font-body-sm text-on-surface">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>GIS & ESRI Integration API</span>
                </li>
                <li className="flex items-start gap-3 font-body-sm text-on-surface">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>Public-Facing Resilience Dashboard</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => handleNavClick('contact')}
              className="w-full mt-xl py-4 px-6 rounded-xl bg-primary text-on-primary font-bold shadow-lg hover:shadow-xl hover:bg-primary-container active:scale-95 transition-all focus:outline-none"
            >
              Get Started
            </button>
          </div>

          {/* Tier 3: Enterprise */}
          <div className="bg-white rounded-2xl p-xl flex flex-col border border-outline-variant/60 shadow-sm card-shadow-hover justify-between">
            <div className="space-y-xl">
              <div>
                <span className="font-label-md text-primary uppercase tracking-widest font-bold">Enterprise</span>
                <h3 className="font-headline-md text-headline-md mt-2 text-on-surface font-bold">National Infra</h3>
                <div className="mt-md flex items-baseline gap-1">
                  <span className="font-display-lg text-[40px] text-on-background font-bold">Custom</span>
                </div>
                <p className="mt-md font-body-sm text-on-surface-variant leading-relaxed">For government ministries and continental-scale climate monitoring.</p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 font-body-sm text-on-surface">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>Multi-City Governance Portal</span>
                </li>
                <li className="flex items-start gap-3 font-body-sm text-on-surface">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>Custom Neural Network Training</span>
                </li>
                <li className="flex items-start gap-3 font-body-sm text-on-surface">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>White-labeled Mobile Alerts</span>
                </li>
                <li className="flex items-start gap-3 font-body-sm text-on-surface">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>24/7 Priority Scientist Support</span>
                </li>
                <li className="flex items-start gap-3 font-body-sm text-on-surface">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>On-Premise Deployment Options</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => handleNavClick('contact')}
              className="w-full mt-xl py-3 px-6 rounded-xl border-2 border-on-surface text-on-surface font-bold hover:bg-surface-container-low transition-colors focus:outline-none active:scale-98"
            >
              Contact Sales
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto py-2xl border-t border-outline-variant/30 space-y-xl">
          <h2 className="font-headline-lg text-headline-lg font-bold text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-outline-variant/60 overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                  className="w-full flex justify-between items-center p-lg text-left font-semibold text-headline-sm text-on-surface hover:text-primary transition-colors focus:outline-none"
                >
                  <span className="font-headline-sm text-headline-sm font-semibold">{faq.q}</span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${
                    activeFaq === index ? 'rotate-180 text-primary' : 'text-on-surface-variant'
                  }`}>
                    expand_more
                  </span>
                </button>
                <div 
                  className={`px-lg overflow-hidden transition-all duration-300 ${
                    activeFaq === index ? 'max-h-40 pb-lg opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Card */}
        <section className="mt-2xl">
          <div className="bg-primary-container text-on-primary rounded-3xl p-2xl flex flex-col md:flex-row items-center justify-between gap-xl shadow-xl shadow-primary/10">
            <div className="max-w-lg space-y-sm text-left">
              <h2 className="font-headline-lg text-headline-lg font-bold">Ready to cool your city?</h2>
              <p className="font-body-lg text-body-lg opacity-90 leading-relaxed">
                Join 45+ urban centers using LISS-COOL to reduce ambient temperatures and improve citizen health.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-md shrink-0 w-full md:w-auto max-w-xs md:max-w-none">
              <button 
                onClick={() => handleNavClick('contact')}
                className="bg-primary-fixed text-on-primary-fixed px-xl py-4 rounded-xl font-bold hover:brightness-110 active:scale-95 transition-all shadow-md focus:outline-none"
              >
                Schedule a Demo
              </button>
              <button 
                onClick={() => handleNavClick('features')}
                className="border border-on-primary px-xl py-4 rounded-xl font-bold hover:bg-on-primary/10 transition-all active:scale-95 focus:outline-none"
              >
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
