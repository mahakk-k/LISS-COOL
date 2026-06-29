import React from 'react';

export default function LandingPage({ setCurrentPage }) {
  const handleNavClick = (id) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative overflow-hidden geospatial-grid min-h-[90vh] flex items-center px-margin-mobile md:px-margin-desktop">
        <div className="hero-gradient absolute inset-0 pointer-events-none"></div>
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center relative z-10 py-xl w-full">
          <div className="space-y-xl animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-sm bg-primary/10 text-primary px-md py-xs rounded-full border border-primary/20">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span className="font-label-md text-label-md tracking-wider">AI-DRIVEN CLIMATE ADAPTATION</span>
            </div>
            
            <h1 className="font-display-lg text-display-lg text-on-background lg:leading-[1.1] max-w-2xl">
              Optimizing Urban Cooling with <span className="text-primary italic">AI</span>
            </h1>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Empowering cities to combat extreme heat through geospatial intelligence. Transform data into actionable strategies—from Heat Maps to Cool Cities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-md">
              <button 
                onClick={() => handleNavClick('demo')} 
                className="bg-primary text-on-primary font-label-md text-label-md px-2xl py-lg rounded-xl hover:bg-primary-container transition-all flex items-center justify-center gap-sm shadow-xl shadow-primary/20 active:scale-95 cursor-pointer"
              >
                Try Interactive Demo <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button 
                className="border-[1.5px] border-outline text-primary font-label-md text-label-md px-2xl py-lg rounded-xl hover:bg-primary/5 transition-all flex items-center justify-center gap-sm active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined">play_circle</span>
                Watch Video
              </button>
            </div>
            
            <div className="flex items-center gap-lg pt-lg border-t border-outline-variant/30">
              <div className="flex -space-x-sm">
                <img 
                  className="w-10 h-10 rounded-full border-2 border-surface object-cover" 
                  alt="Urban planner avatar" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMBBto5Rfi3nQS2HrlwfvNvBd39IJuATmVbeB8bAGOiakORibN5-cl-fyyxQG9p52lg84jtUSbjkxyNnPkkjmlf691fJNdLLYgqtzVJ-qDC5CTb77Ry-c3s8OgAofeNvL5mT1cjjrwX3OHjnr0CjZlJvC9tVTaCPAMTa5oDALeeQsSYEZ5wG7YjaxsNPyE8cmeJlE0ddQwAFS8BB1Yg7j2eAHprQ9IH996bIr0MzaRLJibA0kHweYxrrfsJpaj9M5fEQIZQyD-I_AA" 
                />
                <img 
                  className="w-10 h-10 rounded-full border-2 border-surface object-cover" 
                  alt="Climate scientist avatar" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlrR_-lynOTfffCv-tmXFSCrIaKPF3csW2moVMVNZGcBO7vr94sPf1Vj8JYME8iSPRCJzu6pp3T0XjoXxAddmfsocqEVMWRupNuqT8lDs3bs4PHixl8P_YKZYMw3-vfU92bR51etoqSSJCKMJ_TaZr9z4MPfrRR8waZJ9DYXoDRBMKFDWt7XEng-v43cEj05sEE14EwOk6hHGl5F8jr_0x8AZc6Pb5shzVbSiorfY7Sufniha0G3eMqKX99Vdk46aFNImSegbCNO1p" 
                />
                <img 
                  className="w-10 h-10 rounded-full border-2 border-surface object-cover" 
                  alt="City official avatar" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd2UR88WeBoViaFBFGXob5ZcqHzzIKMOD3mJR0A2do64TLFpBivz-wxbj5V8nq590crQGmBn6gxABiNb6W3DNbbgQlWTT4oM02UrA6cufmlUZgb3DCdWjAqDu5AcGXTUew4Xqm3Ay2wJaRB-VlkaXo3CWwcaNjU9fMJxXFSaCZzlzPblL1H-28Rv_UDG5I7dDtI2uJXQ57vBsMjUlic-9FLD9QfsvV7TUal6AJe1la_HlSImy2lLOxE8PWglKyH1Y_Hb4aMmykrHBW" 
                />
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Trusted by <span className="font-bold text-on-surface">50+ Municipalities</span> globally
              </p>
            </div>
          </div>
          
          {/* Interactive Visualization Mockup */}
          <div className="relative lg:h-[600px] flex items-center justify-center animate-in fade-in slide-in-from-right duration-1000">
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full"></div>
            <div className="relative w-full aspect-square md:aspect-auto md:h-full bg-surface card-shadow rounded-3xl border border-outline-variant/20 overflow-hidden group">
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  alt="India Thermal Heat Map" 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw8iPiy8WdIzuPzKhJX9UabzEQ58fjVPaNMjj8DW8PevupMlgdw5pBDIiqmIWtUwrvD10CvPUu5Dv18tuWZkHSXezzIFxTIGe4F8aWtIk6kVIzYCWEU1Dr8yOlep1m_o7YBThtCLzc1F2_tCRthFMbB4L7zlp1w2z8n9wr4sbJMM_hlB7JNbjOG5mcyI7VSh6zq8adsDJ-sNlpwgMW-F5roXxF2hNJEl9zYSIVO0VbH0RKIxh2nudOT9WHGGBiSGA8dJ52-6uhWfey" 
                />
              </div>
              
              {/* UI Overlays */}
              <div className="absolute top-lg right-lg bg-surface/90 backdrop-blur-md p-md rounded-xl border border-outline-variant shadow-lg space-y-sm min-w-[160px]">
                <div className="flex items-center justify-between gap-xl">
                  <span className="font-label-md text-label-md text-on-surface-variant">Surface Temp</span>
                  <span className="text-secondary font-bold font-headline-sm text-headline-sm">42°C</span>
                </div>
                <div className="h-1 w-full bg-outline-variant rounded-full overflow-hidden">
                  <div className="h-full bg-secondary-container w-[80%]"></div>
                </div>
              </div>
              
              <div className="absolute bottom-lg left-lg right-lg bg-surface/90 backdrop-blur-md p-lg rounded-xl border border-outline-variant shadow-lg">
                <div className="flex items-center justify-between mb-md">
                  <h4 className="font-headline-sm text-headline-sm text-primary font-semibold flex items-center gap-2">
                    Simulation Ready
                  </h4>
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                </div>
                <div className="flex gap-sm">
                  <div className="flex-1 h-2 bg-primary/10 rounded-full"></div>
                  <div className="flex-1 h-2 bg-primary/10 rounded-full"></div>
                  <div className="flex-1 h-2 bg-primary/10 rounded-full"></div>
                  <div className="flex-1 h-2 bg-primary rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar / Stats */}
      <section className="py-2xl bg-surface-container-low border-y border-outline-variant/30">
        <div className="max-w-screen-2xl mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl">
            <div className="space-y-sm text-center md:text-left">
              <div className="font-display-lg text-display-lg text-primary font-bold">2.1<span className="text-headline-md">°C</span></div>
              <p className="font-body-md text-body-md text-on-surface-variant">Average increase in urban nighttime temperatures.</p>
            </div>
            <div className="space-y-sm text-center md:text-left">
              <div className="font-display-lg text-display-lg text-secondary font-bold">30%</div>
              <p className="font-body-md text-body-md text-on-surface-variant">Reduction in city-wide health risks through tree canopy mapping.</p>
            </div>
            <div className="space-y-sm text-center md:text-left">
              <div className="font-display-lg text-display-lg text-primary font-bold">150M+</div>
              <p className="font-body-md text-body-md text-on-surface-variant">People living in high-risk "Urban Heat Islands" globally.</p>
            </div>
            <div className="space-y-sm text-center md:text-left">
              <div className="font-display-lg text-display-lg text-tertiary font-bold">12K+</div>
              <p className="font-body-md text-body-md text-on-surface-variant">Simulations run for city planners across 5 continents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section (Bento Grid) */}
      <section className="py-2xl px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto">
        <div className="text-center space-y-md mb-2xl">
          <h2 className="font-headline-lg text-headline-lg text-on-background font-bold">Climate Intelligence, Reimagined</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Our multi-layered AI analysis provides more than just data—it provides a roadmap to thermal resilience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[320px]">
          {/* Feature 1: AI Analysis */}
          <div className="md:col-span-8 bg-surface border border-outline-variant/20 rounded-2xl card-shadow overflow-hidden group flex flex-col">
            <div className="p-xl flex-1 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-primary text-[40px] mb-lg" style={{ fontVariationSettings: '"FILL" 1' }}>insights</span>
                <h3 className="font-headline-md text-headline-md font-bold mb-sm text-on-background">AI-Powered Analysis</h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  Leveraging satellite multi-spectral imagery and ground sensor data to identify micro-heat islands with 1-meter precision.
                </p>
              </div>
              <div className="flex items-center gap-md">
                <button 
                  onClick={() => handleNavClick('features')}
                  className="text-primary font-label-md text-label-md flex items-center gap-sm group-hover:translate-x-1 transition-transform focus:outline-none cursor-pointer text-left font-bold"
                >
                  Explore Methodology <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="h-40 relative bg-surface-container overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                alt="AI Neural blueprint representation" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn2IJErH7X5_vnjNF-g0k6W6jja9R9D5GtUBIc7uYuLrv4xW0B7p_7Wglwqcm6hHWfc7xi9-nNlV30NBC93w3vKjP3H5CYrhf7Bmp17YB2p_EBpkL33c0ywQ29ErIwZaW0U0c2apOdxeN3c_yeTcptUgE8kknvR52tBGDkPzajfH7g4WYebGdhyLHdHAwG6jGOWTWOMJJj-sk8zLEhiEDY62D8k-s8vVfZZNshD4XKmkgKOYLdmdK7Y9S02bDpblN88fRCgyhti9RA" 
              />
            </div>
          </div>
          
          {/* Feature 2: Real-time Simulation */}
          <div className="md:col-span-4 bg-primary text-on-primary rounded-2xl p-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-xl -top-xl opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
              <span className="material-symbols-outlined text-[200px]">waves</span>
            </div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-[40px] mb-lg">thermometer</span>
              <h3 className="font-headline-md text-headline-md font-bold mb-sm">Real-time Simulation</h3>
              <p className="font-body-sm text-body-sm opacity-90 leading-relaxed">
                Simulate the impact of white roofs, park placement, and cooling corridors before breaking ground.
              </p>
            </div>
            <div className="relative z-10 mt-xl">
              <div className="bg-on-primary/10 rounded-xl p-md border border-on-primary/20 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-sm">
                  <span className="text-[10px] uppercase tracking-widest font-bold">Simulation Efficiency</span>
                  <span className="text-[10px] font-semibold">99.4%</span>
                </div>
                <div className="h-1 w-full bg-on-primary/20 rounded-full overflow-hidden">
                  <div className="h-full bg-on-primary w-[94%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Precision Recommendations */}
          <div className="md:col-span-12 lg:col-span-5 bg-surface border border-outline-variant/20 rounded-2xl card-shadow p-xl flex flex-col group justify-between">
            <div>
              <span className="material-symbols-outlined text-secondary text-[40px] mb-lg" style={{ fontVariationSettings: '"FILL" 1' }}>target</span>
              <h3 className="font-headline-md text-headline-md font-bold mb-sm text-on-background">Precision Recommendations</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Get automated, cost-benefit ranked suggestions for urban intervention that maximize cooling per dollar spent.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-md">
              <div className="bg-surface-container rounded-xl p-md text-center">
                <span className="block font-bold text-primary">85%</span>
                <span className="text-[10px] text-on-surface-variant uppercase">Accuracy</span>
              </div>
              <div className="bg-surface-container rounded-xl p-md text-center">
                <span className="block font-bold text-primary">12ms</span>
                <span className="text-[10px] text-on-surface-variant uppercase">Latency</span>
              </div>
              <div className="bg-surface-container rounded-xl p-md text-center">
                <span className="block font-bold text-primary">CO₂</span>
                <span className="text-[10px] text-on-surface-variant uppercase">Tracking</span>
              </div>
            </div>
          </div>

          {/* Feature 4: Cloud Infrastructure */}
          <div className="md:col-span-12 lg:col-span-7 bg-surface-container-high border border-outline-variant/20 rounded-2xl p-xl flex items-center gap-xl relative overflow-hidden group">
            <div className="flex-1 space-y-md relative z-10">
              <h3 className="font-headline-md text-headline-md font-bold text-on-background">Enterprise Infrastructure</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Scalable cloud processing designed for city-wide datasets, ensuring high-fidelity analysis from the neighborhood level to the entire metropolis.
              </p>
              <div className="flex gap-sm">
                <span className="bg-surface px-md py-sm rounded-lg text-xs font-bold text-primary border border-outline-variant/30">API First</span>
                <span className="bg-surface px-md py-sm rounded-lg text-xs font-bold text-primary border border-outline-variant/30">GIS Ready</span>
              </div>
            </div>
            <div className="hidden md:block w-1/3 aspect-square relative z-10">
              <img 
                className="w-full h-full object-cover rounded-xl shadow-2xl" 
                alt="Teal illuminated server rack" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9IC1hQRPJwB4S3lg-SYBGk2JyqdINX2z9Ua5W34J-tN9qCDPeHvjVN7YDicbHxB-QAaeKAT0WbgP77E0j4dicETqNfLWrHK1KNE-cfAkS6ju78CbkmGj2TIUqqldUUTpAn9FOzlv2GvpwWbEKwVUCOilGCgCfCfbDVTUIUJ9qjDKhLiAk9Rk-T448s6BmOKATNgrDGzca1mGx-7qFux_I0DrIugKaacVfsVzlQ_iFg5TF4GoaSDrXDkGzyrDphAXhdYKLFup3KxMC" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-2xl px-margin-mobile md:px-margin-desktop">
        <div className="max-w-screen-2xl mx-auto bg-on-surface-variant rounded-[40px] p-xl md:p-2xl text-center space-y-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full geospatial-grid"></div>
          </div>
          <h2 className="font-display-lg text-display-lg text-surface-bright relative z-10 font-bold">Ready to cool your city?</h2>
          <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl mx-auto relative z-10">
            Join forward-thinking urban planners who are already building a cooler, more resilient future with LISS-COOL AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-md relative z-10 max-w-xs mx-auto sm:max-w-none">
            <button 
              onClick={() => handleNavClick('demo')}
              className="bg-primary text-on-primary font-label-md text-label-md px-2xl py-lg rounded-xl hover:bg-primary-container transition-all shadow-xl shadow-black/20 text-center active:scale-95 cursor-pointer"
            >
              Book a Demo
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-transparent border border-surface-variant text-surface-bright font-label-md text-label-md px-2xl py-lg rounded-xl hover:bg-surface-variant/10 transition-all active:scale-95 cursor-pointer"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
