import React, { useState, useEffect } from 'react';
import { 
  Play, Pause, HelpCircle, Settings, Plus, Minus, Layers, 
  Map, ZoomIn, ZoomOut, Share2, Download, CheckCircle2, 
  ChevronRight, ExternalLink, Sun, Trees, Home, Database, 
  Info, TrendingUp, Filter, Activity, RefreshCw 
} from 'lucide-react';

export default function DemoPage({ setCurrentPage }) {
  const [step, setStep] = useState(1);
  const [city, setCity] = useState('Patna');
  const [opacity, setOpacity] = useState(65);
  const [timelineVal, setTimelineVal] = useState(14);
  const [isPlaying, setIsPlaying] = useState(false);
  const [simulationLoading, setSimulationLoading] = useState(false);

  // Step 3 Variables
  const [albedo, setAlbedo] = useState(65);
  const [vegDensity, setVegDensity] = useState(45);
  const [skyView, setSkyView] = useState(80);
  const [anthroHeat, setAnthroHeat] = useState(30);
  const [meanTemp, setMeanTemp] = useState(34.8);

  // Step 4 Interventions
  const [interventions, setInterventions] = useState({
    forestry: true,
    roofs: true,
    corridors: false
  });

  // Step 5 Before/After Slider Position (percentage)
  const [sliderPos, setSliderPos] = useState(50);
  const [isSliding, setIsSliding] = useState(false);

  // Handle timeline auto-play
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setTimelineVal((prev) => (prev >= 23 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Compute temperature in Step 3 based on sliders
  useEffect(() => {
    // Base temperature is 35.0°C.
    // Higher albedo decreases temp (up to -2°C)
    // Higher veg density decreases temp (up to -3°C)
    // Higher sky view factor increases temp (nocturnal radiation release is lower, let's say higher SVF decreases temp by day, let's keep it simple: higher SVF reduces temp by 1°C)
    // Higher anthro heat increases temp (up to +3°C)
    const albedoEffect = ((albedo - 50) / 50) * -1.5;
    const vegEffect = ((vegDensity - 50) / 50) * -2.5;
    const svfEffect = ((skyView - 50) / 50) * -0.5;
    const anthroEffect = ((anthroHeat - 50) / 50) * 2.0;
    
    const calculatedTemp = 35.0 + albedoEffect + vegEffect + svfEffect + anthroEffect;
    setMeanTemp(parseFloat(calculatedTemp.toFixed(1)));
  }, [albedo, vegDensity, skyView, anthroHeat]);

  const handleNavClick = (id) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRunSimulation = () => {
    setSimulationLoading(true);
    setTimeout(() => {
      setSimulationLoading(false);
      setStep((prev) => (prev < 5 ? prev + 1 : 1));
    }, 1500);
  };

  const formatHour = (hour) => {
    if (hour === 0) return '00:00 (Midnight)';
    if (hour === 12) return '12:00 (Noon)';
    return `${hour.toString().padStart(2, '0')}:00 PM`;
  };

  const toggleIntervention = (key) => {
    setInterventions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSliderMove = (e) => {
    if (!isSliding) return;
    const container = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - container.left;
    const percent = Math.max(0, Math.min(100, (x / container.width) * 100));
    setSliderPos(percent);
  };

  return (
    <div className="animate-in fade-in duration-500 w-full flex flex-col min-h-[calc(100vh-80px)] text-on-surface select-none">
      <div className="flex flex-grow h-[calc(100vh-80px)] overflow-hidden">
        {/* Left Sidebar Navigation Console */}
        <aside className="w-[280px] bg-surface-container border-r border-outline-variant flex flex-col py-lg shrink-0 z-40 overflow-y-auto">
          <div className="px-lg mb-xl">
            <h2 className="font-headline-sm text-headline-sm text-primary font-bold">Simulation Console</h2>
            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
              {step === 1 && 'Step 1: Identify Hotspots'}
              {step === 2 && 'Step 2: Analyze Drivers'}
              {step === 3 && 'Step 3: Model Dynamics'}
              {step === 4 && 'Step 4: Simulate Scenarios'}
              {step === 5 && 'Step 5: Optimize & Recommend'}
            </p>
          </div>

          {/* Steps List */}
          <nav className="flex-1 space-y-1 px-sm">
            <div className="px-md py-sm">
              <label className="font-label-md text-label-md text-outline uppercase tracking-wider block mb-xs">City Selection</label>
              <select 
                value={city} 
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-surface rounded-xl border-outline-variant text-body-sm font-body-sm focus:ring-primary focus:border-primary transition-all p-2 outline-none cursor-pointer"
              >
                <option value="Patna">Patna, India</option>
                <option value="Bhopal">Bhopal, India</option>
                <option value="Delhi">Delhi, India</option>
              </select>
            </div>

            {/* Step Wizard Buttons */}
            <button 
              onClick={() => setStep(1)} 
              className={`w-full flex items-center gap-md px-lg py-md rounded-xl transition-all text-left ${
                step === 1 ? 'bg-primary-container text-on-primary-container font-semibold' : 'text-on-surface-variant hover:bg-surface-variant/40'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: step === 1 ? "'FILL' 1" : "'FILL' 0" }}>location_city</span>
              <span className="font-label-md text-label-md">1. City Selector</span>
            </button>

            <button 
              onClick={() => setStep(2)} 
              className={`w-full flex items-center gap-md px-lg py-md rounded-xl transition-all text-left ${
                step === 2 ? 'bg-primary-container text-on-primary-container font-semibold' : 'text-on-surface-variant hover:bg-surface-variant/40'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: step === 2 ? "'FILL' 1" : "'FILL' 0" }}>layers</span>
              <span className="font-label-md text-label-md">2. Thermal Drivers</span>
            </button>

            <button 
              onClick={() => setStep(3)} 
              className={`w-full flex items-center gap-md px-lg py-md rounded-xl transition-all text-left ${
                step === 3 ? 'bg-primary-container text-on-primary-container font-semibold' : 'text-on-surface-variant hover:bg-surface-variant/40'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: step === 3 ? "'FILL' 1" : "'FILL' 0" }}>settings_input_component</span>
              <span className="font-label-md text-label-md">3. Model Dynamics</span>
            </button>

            <button 
              onClick={() => setStep(4)} 
              className={`w-full flex items-center gap-md px-lg py-md rounded-xl transition-all text-left ${
                step === 4 ? 'bg-primary-container text-on-primary-container font-semibold' : 'text-on-surface-variant hover:bg-surface-variant/40'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: step === 4 ? "'FILL' 1" : "'FILL' 0" }}>play_circle</span>
              <span className="font-label-md text-label-md">4. Run Analysis</span>
            </button>

            <button 
              onClick={() => setStep(5)} 
              className={`w-full flex items-center gap-md px-lg py-md rounded-xl transition-all text-left ${
                step === 5 ? 'bg-primary-container text-on-primary-container font-semibold' : 'text-on-surface-variant hover:bg-surface-variant/40'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: step === 5 ? "'FILL' 1" : "'FILL' 0" }}>auto_awesome</span>
              <span className="font-label-md text-label-md">5. Optimization</span>
            </button>

            {/* Quick intervention configs */}
            {(step === 1 || step === 4) && (
              <div className="px-md mt-lg space-y-sm">
                <label className="font-label-md text-label-md text-outline uppercase tracking-wider block mb-xs">Interventions Toggle</label>
                <label className="flex items-center gap-sm cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={interventions.forestry}
                    onChange={() => toggleIntervention('forestry')}
                    className="rounded text-primary focus:ring-primary border-outline-variant" 
                  />
                  <span className="font-body-sm text-body-sm text-on-surface group-hover:text-primary transition-colors">Urban Greening</span>
                </label>
                <label className="flex items-center gap-sm cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={interventions.roofs}
                    onChange={() => toggleIntervention('roofs')}
                    className="rounded text-primary focus:ring-primary border-outline-variant" 
                  />
                  <span className="font-body-sm text-body-sm text-on-surface group-hover:text-primary transition-colors">Cool Roofs</span>
                </label>
                <label className="flex items-center gap-sm cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={interventions.corridors}
                    onChange={() => toggleIntervention('corridors')}
                    className="rounded text-primary focus:ring-primary border-outline-variant" 
                  />
                  <span className="font-body-sm text-body-sm text-on-surface group-hover:text-primary transition-colors">Water Bodies</span>
                </label>
              </div>
            )}
          </nav>

          {/* Simulation Trigger button */}
          <div className="px-lg py-md border-t border-outline-variant/30 mt-auto space-y-md">
            <button 
              disabled={simulationLoading}
              onClick={handleRunSimulation} 
              className={`w-full py-md rounded-xl font-bold flex items-center justify-center gap-sm shadow-md active:scale-95 transition-all text-white ${
                simulationLoading ? 'bg-secondary/70' : 'bg-secondary hover:brightness-110'
              }`}
            >
              {simulationLoading ? (
                <>
                  <RefreshCw className="animate-spin text-white" size={16} />
                  Simulating...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                  {step === 5 ? 'Restart Tour' : 'Run Simulation'}
                </>
              )}
            </button>

            <div className="flex gap-lg border-t border-outline-variant/30 pt-md">
              <button className="flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md">
                <HelpCircle size={16} /> Help
              </button>
              <button className="flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors text-label-md font-label-md">
                <Settings size={16} /> Settings
              </button>
            </div>
          </div>
        </aside>

        {/* STEP-SPECIFIC DOCK CANVASES */}
        
        {/* Step 1: Identify Hotspots */}
        {step === 1 && (
          <section className="flex-grow relative overflow-hidden bg-on-background flex flex-col justify-between">
            {/* Map Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />
            
            {/* Background Patna Image Map */}
            <div className="absolute inset-0 z-0">
              <img 
                alt="Patna Thermal Analysis Map" 
                className="w-full h-full object-cover opacity-90" 
                src="/images/patna_map.png" 
              />
              <div className="absolute inset-0 bg-radial-gradient from-error/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Patna Core Hotspot Marker */}
            <div className="absolute top-[48%] left-[55%] z-20 flex flex-col items-center">
              <div className="relative">
                <span className="material-symbols-outlined text-white text-[36px] drop-shadow-md select-none animate-bounce" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <span className="absolute top-1.5 left-1.5 w-6 h-6 rounded-full bg-error/40 animate-ping" />
              </div>
              <span className="bg-on-background/85 text-white px-md py-xs rounded-full font-label-md backdrop-blur-md border border-outline-variant/30 mt-sm shadow-xl tracking-wide select-none">
                Patna Core Hotspot
              </span>
            </div>

            {/* Top Bar Status Info */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 glass-overlay px-lg py-sm rounded-full flex items-center gap-md shadow-md border border-primary/20 pointer-events-auto z-20">
              <div className="flex items-center gap-sm">
                <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
                <span className="font-label-md text-on-surface font-bold">LIVE FEED</span>
              </div>
              <div className="w-[1px] h-4 bg-outline-variant" />
              <span className="font-label-md text-on-surface-variant font-medium">Sentinel-2 | LISS-IV Hybrid Data</span>
              <button className="text-primary hover:underline font-label-md font-semibold focus:outline-none">Details</button>
            </div>

            {/* Overlay Panels (Top Left) */}
            <div className="absolute top-24 left-8 flex flex-col gap-md z-20 max-w-sm w-full">
              {/* Temperature Gauge Card */}
              <div className="glass-overlay p-lg rounded-2xl shadow-xl border-l-4 border-error w-64">
                <div className="flex items-center gap-sm mb-sm text-error">
                  <span className="material-symbols-outlined font-fill" style={{ fontVariationSettings: "'FILL' 1" }}>thermostat</span>
                  <h3 className="font-headline-sm text-on-surface font-semibold">Peak LST</h3>
                </div>
                <div className="flex items-baseline gap-xs">
                  <span className="text-display-lg font-display-lg text-on-surface font-bold">45.2</span>
                  <span className="text-headline-md font-headline-md text-on-surface-variant font-medium">°C</span>
                </div>
                <div className="mt-sm flex items-center gap-xs text-error">
                  <TrendingUp size={16} />
                  <span className="font-label-md font-bold">+3.5°C Anomaly</span>
                </div>
              </div>

              {/* Vulnerable Areas List */}
              <div className="glass-overlay rounded-2xl shadow-xl w-80 overflow-hidden border border-outline-variant">
                <div className="px-lg py-md border-b border-outline-variant/30 flex justify-between items-center bg-surface-container/30">
                  <h3 className="font-label-md text-primary uppercase tracking-widest font-bold">High Risk Sectors</h3>
                  <Filter size={16} className="text-on-surface-variant" />
                </div>
                <div className="max-h-56 overflow-y-auto">
                  <div className="px-lg py-md flex items-center justify-between border-b border-outline-variant/10 hover:bg-surface-container-high/30 cursor-pointer transition-colors group">
                    <div className="flex flex-col">
                      <span className="font-body-md font-bold text-on-surface group-hover:text-primary transition-colors">Patna City</span>
                      <span className="font-label-md text-on-surface-variant">Urban Density: Extreme</span>
                    </div>
                    <span className="bg-error/10 text-error px-sm py-xs rounded-lg font-label-md font-bold">Critical</span>
                  </div>

                  <div className="px-lg py-md flex items-center justify-between border-b border-outline-variant/10 hover:bg-surface-container-high/30 cursor-pointer transition-colors group">
                    <div className="flex flex-col">
                      <span className="font-body-md font-bold text-on-surface group-hover:text-primary transition-colors">Kankarbagh</span>
                      <span className="font-label-md text-on-surface-variant">Vegetation Index: 0.12</span>
                    </div>
                    <span className="bg-secondary/10 text-secondary px-sm py-xs rounded-lg font-label-md font-bold">High</span>
                  </div>

                  <div className="px-lg py-md flex items-center justify-between hover:bg-surface-container-high/30 cursor-pointer transition-colors group">
                    <div className="flex flex-col">
                      <span className="font-body-md font-bold text-on-surface group-hover:text-primary transition-colors">Boring Road</span>
                      <span className="font-label-md text-on-surface-variant">Albedo: 0.08 (Low)</span>
                    </div>
                    <span className="bg-secondary/10 text-secondary px-sm py-xs rounded-lg font-label-md font-bold">High</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Thermal Scale Floating Panel (Bottom Left) */}
            <div className="absolute bottom-24 left-8 glass-overlay p-md rounded-2xl shadow-lg border border-outline-variant/30 flex flex-col gap-sm w-72 z-20">
              <div className="flex justify-between items-center">
                <span className="font-label-md text-on-surface-variant font-semibold">Thermal Intensity (LST)</span>
                <Info size={14} className="text-primary" />
              </div>
              <div className="h-3 w-full bg-gradient-to-r from-primary via-secondary to-error rounded-full" />
              <div className="flex justify-between font-label-md text-on-surface-variant opacity-75 font-semibold">
                <span>28°C</span>
                <span>35°C</span>
                <span>42°C+</span>
              </div>
            </div>

            {/* Time Series Control (Bottom Center) */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 glass-overlay p-sm rounded-full flex items-center gap-md px-lg shadow-xl border border-outline-variant/50 z-20">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white shadow focus:outline-none hover:bg-primary-container transition-colors"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
              </button>
              <div className="w-48 h-1 bg-outline-variant/40 rounded-full relative">
                <div 
                  className="absolute w-3.5 h-3.5 bg-primary rounded-full -top-1.5 shadow transition-all duration-300"
                  style={{ left: `${(timelineVal / 23) * 100}%` }}
                />
              </div>
              <span className="font-label-md text-on-surface-variant font-bold min-w-[140px] text-right">
                {formatHour(timelineVal)}
              </span>
            </div>

            {/* Map Zoom Controls (Right) */}
            <div className="absolute top-24 right-8 flex flex-col gap-sm z-20">
              <div className="flex flex-col bg-white rounded-xl shadow-md border border-outline-variant overflow-hidden">
                <button className="p-3 hover:bg-surface-container transition-colors border-b border-outline-variant text-on-surface-variant focus:outline-none"><ZoomIn size={18} /></button>
                <button className="p-3 hover:bg-surface-container transition-colors text-on-surface-variant focus:outline-none"><ZoomOut size={18} /></button>
              </div>
              <button className="bg-white p-3 rounded-xl shadow-md border border-outline-variant hover:bg-surface-container transition-colors text-on-surface-variant focus:outline-none"><Layers size={18} /></button>
              <button className="bg-white p-3 rounded-xl shadow-md border border-outline-variant hover:bg-surface-container transition-colors text-on-surface-variant focus:outline-none">
                <span className="material-symbols-outlined text-[18px]">my_location</span>
              </button>
            </div>
          </section>
        )}

        {/* Step 2: Analyze Drivers */}
        {step === 2 && (
          <section className="flex-grow flex overflow-hidden relative">
            {/* Left Panel: Drivers Decomposition */}
            <div className="w-80 h-full glass-overlay border-r border-outline-variant/50 p-lg flex flex-col gap-lg z-10 overflow-y-auto">
              <div className="flex items-center gap-sm mb-base border-b border-outline-variant/30 pb-md">
                <Activity className="text-primary" size={20} />
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Thermal Drivers</h3>
              </div>

              {/* NDVI Card */}
              <div className="bg-surface-container-lowest p-md rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-sm">
                  <span className="font-label-md text-label-md text-primary uppercase font-bold">NDVI Index</span>
                  <Trees size={16} className="text-primary" />
                </div>
                <div className="h-16 flex items-end gap-1 mb-sm pt-4">
                  <div className="flex-1 bg-primary/20 h-[40%] rounded-t-sm"></div>
                  <div className="flex-1 bg-primary/40 h-[60%] rounded-t-sm"></div>
                  <div className="flex-1 bg-primary h-[85%] rounded-t-sm"></div>
                  <div className="flex-1 bg-primary/60 h-[50%] rounded-t-sm"></div>
                  <div className="flex-1 bg-primary/30 h-[30%] rounded-t-sm"></div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Vegetation density correlates strongly with localized cooling effect (-2.4°C variance).</p>
              </div>

              {/* Urban Density Card */}
              <div className="bg-surface-container-lowest p-md rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-sm">
                  <span className="font-label-md text-label-md text-secondary uppercase font-bold">Urban Density</span>
                  <Home size={16} className="text-secondary" />
                </div>
                <div className="relative h-16 w-full bg-surface-container rounded-xl overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-secondary/5 animate-pulse" />
                  <span className="font-display-lg text-headline-lg font-black text-secondary z-10">84%</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-sm">High thermal mass retention in central districts increases overnight cooling delay.</p>
              </div>

              {/* Albedo Card */}
              <div className="bg-surface-container-lowest p-md rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-sm">
                  <span className="font-label-md text-label-md text-on-surface uppercase font-bold">Albedo Factor</span>
                  <span className="material-symbols-outlined text-on-surface text-[18px]">add_road</span>
                </div>
                <div className="flex flex-col gap-sm pt-sm">
                  <div className="h-2 w-full bg-outline-variant rounded-full overflow-hidden">
                    <div className="h-full bg-on-surface w-[65%]" />
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-on-surface-variant">
                    <span>LOW REFLECTANCE</span>
                    <span>65% COVERAGE</span>
                  </div>
                </div>
              </div>

              {/* Sky View Factor */}
              <div className="bg-surface-container-lowest p-md rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-xs">
                  <span className="font-label-md text-label-md text-tertiary uppercase font-bold">SVF Analysis</span>
                  <Sun size={16} className="text-tertiary" />
                </div>
                <div className="flex items-center gap-md pt-sm">
                  <div className="w-10 h-10 rounded-full border-4 border-tertiary border-t-outline-variant animate-spin duration-[4000ms] ease-linear" />
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">0.42</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-sm">Limited longwave radiation release due to canyon geometry.</p>
              </div>
            </div>

            {/* Center Panel: 3D Twin View Map */}
            <div className="flex-1 relative overflow-hidden flex flex-col bg-on-surface">
              <div className="absolute inset-0 z-0">
                <img 
                  alt="3D Digital Twin Map View" 
                  className="w-full h-full object-cover opacity-80" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIUuprcGiPc1tE2OK3Sx-6yhoGxSCHyuZ5pJqiVWhKDUe6QMIXCw7m9kwIgGQ5lEWmT1uy1NTTb_AgYRKhOqwxRE9UmvE_hA6MB8kRx3h-euxkrtvWmUYkCYms8w8lewzRjbTY1tFtKAnjZKkS_ytS1uRkF2cbdxkRkJUxZ7rJWSjnXELYRE1vTdkfhY3nWpPDX63M_vF-CpEmu9XgJhv0Zb-nNPW6HV4ZB32CSwc_VH9ZTXnkWXAcyCxp1caSqXHL0HtfEsK678sX" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Data Callouts */}
              <div className="absolute top-1/4 left-1/3 bg-white/95 border border-primary p-md rounded-xl shadow-xl backdrop-blur-md z-10 animate-pulse">
                <div className="flex items-center gap-sm">
                  <span className="w-2 h-2 rounded-full bg-error" />
                  <span className="font-label-md text-label-md font-bold text-on-surface">Hotspot ID: B-12</span>
                </div>
                <div className="mt-xs">
                  <span className="text-3xl font-black text-secondary">42.8°C</span>
                </div>
              </div>

              <div className="absolute bottom-1/3 right-1/4 bg-white/95 border border-primary p-md rounded-xl shadow-xl backdrop-blur-md z-10">
                <div className="flex items-center gap-sm">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-label-md text-label-md font-bold text-on-surface">Cool Sanctuary</span>
                </div>
                <div className="mt-xs">
                  <span className="text-3xl font-black text-primary">28.4°C</span>
                </div>
              </div>

              {/* Floating Header */}
              <div className="absolute top-6 left-6 z-20">
                <div className="bg-white/90 backdrop-blur-md px-lg py-md rounded-2xl shadow-lg border border-outline-variant/50 max-w-sm">
                  <h1 className="font-headline-md text-headline-md text-primary flex items-center gap-sm font-bold">
                    Step 2: Analyze Drivers
                    <Info size={16} className="text-on-surface-variant" />
                  </h1>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Breaking down why heat islands form in selected districts</p>
                </div>
              </div>

              {/* Bottom Navigation controls */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-md z-20">
                <div className="flex gap-1 bg-white/95 p-xs rounded-xl shadow-lg border border-outline-variant">
                  <button className="p-2 hover:bg-surface-variant rounded-lg transition-colors focus:outline-none"><ZoomIn size={16} /></button>
                  <button className="p-2 hover:bg-surface-variant rounded-lg transition-colors focus:outline-none"><ZoomOut size={16} /></button>
                  <div className="w-[1px] h-6 bg-outline-variant mx-xs"></div>
                  <button className="p-2 hover:bg-surface-variant rounded-lg transition-colors font-semibold text-xs focus:outline-none">3D ROT</button>
                  <button className="p-2 bg-primary text-white rounded-lg transition-colors focus:outline-none"><Layers size={16} /></button>
                </div>
                <div className="bg-white/95 px-lg py-sm rounded-xl shadow-lg border border-outline-variant flex items-center gap-md">
                  <span className="font-label-md text-label-md text-on-surface-variant font-bold">TIMELINE</span>
                  <input 
                    type="range"
                    min="0"
                    max="23"
                    value={timelineVal}
                    onChange={(e) => setTimelineVal(parseInt(e.target.value))}
                    className="w-48 h-1.5 bg-outline-variant rounded-lg appearance-none cursor-pointer accent-primary" 
                  />
                  <span className="font-mono text-xs font-bold text-primary min-w-[60px]">
                    {timelineVal.toString().padStart(2, '0')}:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Right Panel: Climate Zone Classification */}
            <div className="w-[340px] h-full glass-overlay border-l border-outline-variant/50 p-lg flex flex-col gap-lg z-10 overflow-y-auto">
              <div className="flex items-center gap-sm mb-base border-b border-outline-variant/30 pb-md">
                <Database className="text-primary" size={20} />
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Climate Zones</h3>
              </div>

              <div className="bg-surface-container p-lg rounded-2xl border border-primary/20">
                <p className="font-label-md text-label-md text-primary font-bold mb-md uppercase tracking-widest">Current Classification</p>
                <div className="flex items-start gap-md mb-lg">
                  <div className="w-14 h-14 bg-white rounded-xl border border-primary flex items-center justify-center shrink-0 shadow-sm">
                    <span className="font-display-lg text-primary font-black text-lg">LCZ 2</span>
                  </div>
                  <div>
                    <h4 class="font-body-md font-bold text-on-surface">Compact Midrise</h4>
                    <p class="font-body-sm text-[12px] text-on-surface-variant mt-1 leading-tight">Building height: 10-25m. High land cover ratio with limited green space.</p>
                  </div>
                </div>

                <div className="space-y-sm">
                  <div className="flex justify-between items-center text-body-sm">
                    <span>Thermal Intensity</span>
                    <span className="font-bold text-secondary">VERY HIGH</span>
                  </div>
                  <div className="h-2 w-full bg-outline-variant rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[90%]" />
                  </div>
                  
                  <div className="flex justify-between items-center text-body-sm pt-sm">
                    <span>Infiltration Potential</span>
                    <span className="font-bold text-primary">LOW</span>
                  </div>
                  <div className="h-2 w-full bg-outline-variant rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[25%]" />
                  </div>
                </div>
              </div>

              {/* Comparative Metrics */}
              <div>
                <h4 className="font-label-md text-label-md font-bold mb-md uppercase text-on-surface-variant tracking-wider">Spatial Correlation</h4>
                <div className="grid grid-cols-2 gap-md">
                  <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant/30 text-center">
                    <span className="font-label-md text-[11px] text-on-surface-variant block">Heat vs Build</span>
                    <span className="text-headline-sm font-black text-on-surface mt-xs inline-block">+0.92</span>
                  </div>
                  <div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant/30 text-center">
                    <span className="font-label-md text-[11px] text-on-surface-variant block">Heat vs Veg</span>
                    <span className="text-headline-sm font-black text-on-surface mt-xs inline-block">-0.84</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-auto pt-lg border-t border-outline-variant/30">
                <button 
                  onClick={() => setStep(3)} 
                  className="w-full flex items-center justify-center gap-sm bg-primary text-on-primary py-lg rounded-2xl font-bold shadow-xl hover:opacity-90 active:scale-95 transition-all focus:outline-none cursor-pointer"
                >
                  Generate Strategy <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Step 3: Model Dynamics */}
        {step === 3 && (
          <section className="flex-grow p-xl overflow-y-auto bg-surface-container-low">
            <div className="mb-xl max-w-4xl">
              <h1 className="font-display-lg text-display-lg text-on-surface font-bold leading-tight mb-xs">Step 3: Model Dynamics</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Calibrating environmental variables for high-fidelity thermal simulation.</p>
            </div>

            <div className="grid grid-cols-12 gap-lg max-w-screen-2xl mx-auto items-start">
              {/* Dynamic Interdependency Matrix */}
              <div className="col-span-12 lg:col-span-8 space-y-lg">
                <div className="visualization-panel rounded-2xl overflow-hidden relative h-[420px] group shadow-xl">
                  <div className="absolute inset-0 z-0">
                    <img 
                      alt="Thermal dynamic interdependency matrix" 
                      className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbivbY6j1jC4r3QumTsU2Q0_XoEEGWfjeAZ7lldqLq7hhHqvWugdDpkjkZvJBDBT18XiqDIzymBOpub3c0u3uI_5H61uiYEkh1EmZn7YTf_AokNbKXVHzXFvmBOVjDgMeAVyEURAqDSpPWlkbZJX-1XfYDOz3odD0pV5CYfzCbWX3Y6tTgMwyDHOG6SIZkh9eDNb94qzmVo8AuvgBegx2Tq1TRL_ueHEvSdIBmZAEgllTvU9U4DunZV9cdUqlqBEv5TCT6KF91e0BP" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c30] via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="relative z-10 p-xl h-full flex flex-col justify-between text-white">
                    <div className="flex justify-between items-start">
                      <div className="bg-on-background/80 backdrop-blur px-md py-xs rounded-lg border border-primary/45">
                        <span className="text-primary-fixed text-label-md uppercase tracking-widest font-bold">Live Interaction Layer</span>
                      </div>
                      <div className="flex gap-xs">
                        <button className="bg-on-background p-sm rounded-lg border border-outline hover:border-primary-fixed transition-colors"><ZoomIn size={14} /></button>
                        <button className="bg-on-background p-sm rounded-lg border border-outline hover:border-primary-fixed transition-colors"><Layers size={14} /></button>
                        <button className="bg-on-background p-sm rounded-lg border border-outline hover:border-primary-fixed transition-colors"><Info size={14} /></button>
                      </div>
                    </div>

                    <div className="flex items-end justify-between">
                      <div>
                        <h4 className="text-primary-fixed font-headline-sm font-semibold mb-xs">Dynamic Calibration Matrix</h4>
                        <p className="text-on-surface-variant text-body-sm max-w-md opacity-90 text-white/80">
                          Adjust variable sliders below. The AI computes local thermal response dynamically. Current calibration: <span className="text-primary-fixed font-bold">98.4%</span>
                        </p>
                      </div>

                      <div className="flex items-center gap-md">
                        <div className="text-right">
                          <div className="text-outline-variant text-[10px] font-bold tracking-wider">MEAN MODEL TEMP</div>
                          <div className="text-primary-fixed font-bold text-headline-sm">{meanTemp}°C</div>
                        </div>
                        <div className="h-12 w-1.5 bg-white/20 rounded-full overflow-hidden">
                          <div 
                            className="bg-primary rounded-full transition-all duration-500" 
                            style={{ height: `${Math.min(100, Math.max(10, ((meanTemp - 25) / 15) * 100))}%` }} 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sliders Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  {/* Parameter 1 */}
                  <div className="glass-panel p-lg rounded-2xl hover:border-primary/50 transition-all shadow-sm">
                    <div className="flex items-center justify-between mb-md">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Sun size={18} />
                      </div>
                      <span className="text-[10px] text-outline font-bold tracking-wider">PARAMETER 01</span>
                    </div>
                    <h3 className="text-on-surface font-headline-sm font-semibold mb-xs">Surface Albedo</h3>
                    <p className="text-on-surface-variant text-body-sm mb-md leading-relaxed">Measures reflectivity of urban surfaces. High albedo reflects solar energy, reducing net heat gain.</p>
                    <div className="space-y-xs pt-sm">
                      <input 
                        type="range"
                        min="10"
                        max="100"
                        value={albedo}
                        onChange={(e) => setAlbedo(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-outline-variant rounded-full appearance-none cursor-pointer accent-primary" 
                      />
                      <div className="flex justify-between font-label-md text-on-surface-variant font-bold uppercase tracking-wider text-[10px]">
                        <span>Reflective: {albedo}%</span>
                        <span>Default: 65%</span>
                      </div>
                    </div>
                  </div>

                  {/* Parameter 2 */}
                  <div className="glass-panel p-lg rounded-2xl hover:border-primary/50 transition-all shadow-sm">
                    <div className="flex items-center justify-between mb-md">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Trees size={18} />
                      </div>
                      <span className="text-[10px] text-outline font-bold tracking-wider">PARAMETER 02</span>
                    </div>
                    <h3 className="text-on-surface font-headline-sm font-semibold mb-xs">Vegetation Density</h3>
                    <p className="text-on-surface-variant text-body-sm mb-md leading-relaxed">Calculates shading and evapotranspiration effect. Key index for green corridor planning.</p>
                    <div className="space-y-xs pt-sm">
                      <input 
                        type="range"
                        min="10"
                        max="100"
                        value={vegDensity}
                        onChange={(e) => setVegDensity(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-outline-variant rounded-full appearance-none cursor-pointer accent-primary" 
                      />
                      <div className="flex justify-between font-label-md text-on-surface-variant font-bold uppercase tracking-wider text-[10px]">
                        <span>Cover density: {vegDensity}%</span>
                        <span>Default: 45%</span>
                      </div>
                    </div>
                  </div>

                  {/* Parameter 3 */}
                  <div className="glass-panel p-lg rounded-2xl hover:border-primary/50 transition-all shadow-sm">
                    <div className="flex items-center justify-between mb-md">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[20px]">view_in_ar</span>
                      </div>
                      <span className="text-[10px] text-outline font-bold tracking-wider">PARAMETER 03</span>
                    </div>
                    <h3 className="text-on-surface font-headline-sm font-semibold mb-xs">Sky View Factor (SVF)</h3>
                    <p className="text-on-surface-variant text-body-sm mb-md leading-relaxed">Analyzes urban canyons and longwave radiation trapping. Critical for overnight heat release.</p>
                    <div className="space-y-xs pt-sm">
                      <input 
                        type="range"
                        min="10"
                        max="100"
                        value={skyView}
                        onChange={(e) => setSkyView(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-outline-variant rounded-full appearance-none cursor-pointer accent-primary" 
                      />
                      <div className="flex justify-between font-label-md text-on-surface-variant font-bold uppercase tracking-wider text-[10px]">
                        <span>Canyon SVF: 0.{(skyView/100).toFixed(2).split('.')[1]}</span>
                        <span>Default: 0.80</span>
                      </div>
                    </div>
                  </div>

                  {/* Parameter 4 */}
                  <div className="glass-panel p-lg rounded-2xl hover:border-primary/50 transition-all shadow-sm">
                    <div className="flex items-center justify-between mb-md">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[20px]">factory</span>
                      </div>
                      <span className="text-[10px] text-outline font-bold tracking-wider">PARAMETER 04</span>
                    </div>
                    <h3 className="text-on-surface font-headline-sm font-semibold mb-xs">Anthropogenic Heat</h3>
                    <p className="text-on-surface-variant text-body-sm mb-md leading-relaxed">Quantifies waste heat from transport, HVAC units, and industrial outputs in urban center.</p>
                    <div className="space-y-xs pt-sm">
                      <input 
                        type="range"
                        min="10"
                        max="100"
                        value={anthroHeat}
                        onChange={(e) => setAnthroHeat(parseInt(e.target.value))}
                        className="w-full h-1.5 bg-outline-variant rounded-full appearance-none cursor-pointer accent-primary" 
                      />
                      <div className="flex justify-between font-label-md text-on-surface-variant font-bold uppercase tracking-wider text-[10px]">
                        <span>Heat output: {anthroHeat}%</span>
                        <span>Default: 30%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel: Constants */}
              <div className="col-span-12 lg:col-span-4 space-y-lg">
                <div className="glass-panel rounded-2xl border border-outline-variant overflow-hidden shadow-md">
                  <div className="bg-primary/5 p-md border-b border-outline-variant flex items-center justify-between">
                    <h4 className="text-primary font-bold text-label-md flex items-center gap-xs">
                      <span className="material-symbols-outlined text-[18px]">public</span>
                      GLOBAL CONSTANTS
                    </h4>
                    <span className="text-[10px] text-primary px-xs border border-primary rounded uppercase font-bold">Locked</span>
                  </div>
                  <div className="p-lg space-y-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-on-surface font-semibold text-body-sm">Solar Radiation</div>
                        <div className="text-outline text-[10px]">W/m² at Peak Zenith</div>
                      </div>
                      <div className="text-on-surface font-bold text-headline-sm">840.2</div>
                    </div>
                    <div className="h-[1px] w-full bg-outline-variant/30" />

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-on-surface font-semibold text-body-sm">Wind Speed</div>
                        <div className="text-outline text-[10px]">Reference height: 10m</div>
                      </div>
                      <div className="text-on-surface font-bold text-headline-sm">4.2 m/s</div>
                    </div>
                    <div className="h-[1px] w-full bg-outline-variant/30" />

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-on-surface font-semibold text-body-sm">Ambient Humidity</div>
                        <div className="text-outline text-[10px]">Current relative value</div>
                      </div>
                      <div className="text-on-surface font-bold text-headline-sm">32%</div>
                    </div>
                    <div className="h-[1px] w-full bg-outline-variant/30" />

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-on-surface font-semibold text-body-sm">CO2 Concentration</div>
                        <div className="text-outline text-[10px]">Domain baseline</div>
                      </div>
                      <div className="text-on-surface font-bold text-headline-sm">418 ppm</div>
                    </div>
                  </div>
                  <div className="p-md bg-surface-container/30 border-t border-outline-variant/30 text-center">
                    <button className="text-on-surface-variant hover:text-primary transition-colors text-label-md font-bold flex items-center justify-center gap-xs w-full focus:outline-none">
                      <span className="material-symbols-outlined text-[16px]">edit</span> Override Constants
                    </button>
                  </div>
                </div>

                {/* Simulation Status Card */}
                <div className="bg-primary-container text-on-primary-container p-xl rounded-2xl shadow-xl relative overflow-hidden group">
                  <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-white/10 blur-2xl rounded-full" />
                  <div className="relative z-10 space-y-md">
                    <div className="flex items-center gap-md">
                      <div className="p-3 bg-white/15 rounded-full">
                        <span className="material-symbols-outlined text-white text-[24px]">memory</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-body-md">Engine Configured</h4>
                        <p className="text-xs opacity-75">Telemetry calibrated successfully</p>
                      </div>
                    </div>
                    <p className="text-body-md opacity-90 leading-relaxed">
                      Dynamics successfully mapped. The simulation is primed to test localized intervention scenarios.
                    </p>
                    <button 
                      onClick={() => setStep(4)}
                      className="w-full bg-secondary-container text-white py-lg rounded-xl font-bold flex items-center justify-center gap-sm shadow-md hover:scale-[1.02] active:scale-95 transition-all focus:outline-none cursor-pointer"
                    >
                      Next: Simulate Scenarios
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Step 4: Simulate Scenarios */}
        {step === 4 && (
          <section className="flex-grow relative overflow-hidden bg-on-background flex flex-col justify-between">
            {/* Map background */}
            <div className="absolute inset-0 z-0">
              <img 
                alt="Scenario Simulation Map" 
                className="w-full h-full object-cover opacity-90" 
                src="/images/patna_map.png" 
              />
              {/* Pulse effect overlay based on active interventions */}
              <div 
                className="absolute inset-0 bg-primary/5 transition-opacity duration-500 pointer-events-none"
                style={{ opacity: interventions.forestry || interventions.roofs ? 0.7 : 0.2 }}
              />
            </div>

            {/* Simulated Live hotspot pulse marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
              <div className="w-48 h-48 rounded-full border-2 border-primary/45 bg-primary/5 flex items-center justify-center animate-pulse">
                <span className="w-5 h-5 bg-primary rounded-full shadow-[0_0_20px_#0f766e]" />
              </div>
            </div>

            {/* Left Interventions Card */}
            <div className="absolute top-8 left-8 z-20 w-72">
              <div className="glass-overlay p-lg rounded-2xl shadow-xl border-l-4 border-primary">
                <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-md flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">tune</span>
                  Interventions
                </h3>
                <div className="space-y-sm">
                  {/* Item 1 */}
                  <div 
                    onClick={() => toggleIntervention('forestry')}
                    className={`bg-white p-sm rounded-xl border flex items-center gap-sm cursor-pointer shadow-sm hover:border-primary transition-all ${
                      interventions.forestry ? 'border-primary' : 'border-outline-variant/60'
                    }`}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                      <Trees size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-on-surface truncate">Urban Forestry</div>
                      <div className="text-[10px] text-on-surface-variant truncate">Kankarbagh +15% canopy</div>
                    </div>
                    <input 
                      type="checkbox"
                      checked={interventions.forestry}
                      onChange={() => {}} // handled by div click
                      className="rounded text-primary focus:ring-primary h-4 w-4 shrink-0" 
                    />
                  </div>

                  {/* Item 2 */}
                  <div 
                    onClick={() => toggleIntervention('roofs')}
                    className={`bg-white p-sm rounded-xl border flex items-center gap-sm cursor-pointer shadow-sm hover:border-primary transition-all ${
                      interventions.roofs ? 'border-primary' : 'border-outline-variant/60'
                    }`}
                  >
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary shrink-0">
                      <Home size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-on-surface truncate">Cool Roofs</div>
                      <div className="text-[10px] text-on-surface-variant truncate">Patna City reflective coat</div>
                    </div>
                    <input 
                      type="checkbox"
                      checked={interventions.roofs}
                      onChange={() => {}}
                      className="rounded text-primary focus:ring-primary h-4 w-4 shrink-0" 
                    />
                  </div>

                  {/* Item 3 */}
                  <div 
                    onClick={() => toggleIntervention('corridors')}
                    className={`bg-white p-sm rounded-xl border flex items-center gap-sm cursor-pointer shadow-sm hover:border-primary transition-all ${
                      interventions.corridors ? 'border-primary' : 'border-outline-variant/60'
                    }`}
                  >
                    <div className="w-10 h-10 bg-tertiary-container/10 rounded-lg flex items-center justify-center text-tertiary shrink-0">
                      <span className="material-symbols-outlined text-[20px]">nature_people</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-on-surface truncate">Green Corridors</div>
                      <div className="text-[10px] text-on-surface-variant truncate">Boring Rd to Riverfront</div>
                    </div>
                    <input 
                      type="checkbox"
                      checked={interventions.corridors}
                      onChange={() => {}}
                      className="rounded text-primary focus:ring-primary h-4 w-4 shrink-0" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Impact Metrics Card */}
            <div className="absolute top-8 right-8 z-20 w-72">
              <div className="glass-overlay p-lg rounded-2xl shadow-xl border-t-4 border-primary">
                <div className="flex justify-between items-center mb-sm">
                  <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Simulated Impact</h3>
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-[9px] font-bold">LIVE MODEL</span>
                </div>
                <div className="space-y-lg">
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-primary">
                        {interventions.forestry && interventions.roofs && interventions.corridors ? '-4.25°C' : 
                         interventions.forestry && interventions.roofs ? '-3.25°C' : 
                         interventions.forestry || interventions.roofs ? '-1.85°C' : '-0.20°C'}
                      </span>
                      <span className="text-[10px] font-bold text-on-surface-variant uppercase">AVG DROP</span>
                    </div>
                    <div className="text-xs text-on-surface font-semibold mt-1">Range: -1.2°C to -4.6°C</div>
                    <div className="w-full h-1.5 bg-outline-variant/30 rounded-full mt-2 overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-500" 
                        style={{ width: interventions.forestry && interventions.roofs && interventions.corridors ? '95%' : 
                                         interventions.forestry && interventions.roofs ? '75%' : 
                                         interventions.forestry || interventions.roofs ? '45%' : '5%' }} 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-sm">
                    <div className="bg-surface-container-low p-sm rounded-xl border border-outline-variant/30">
                      <span className="material-symbols-outlined text-primary text-[20px] mb-1">health_metrics</span>
                      <div className="text-lg font-bold text-on-surface">12%</div>
                      <div className="text-[9px] text-on-surface-variant leading-tight">Heat-related ER Drop</div>
                    </div>
                    <div className="bg-surface-container-low p-sm rounded-xl border border-outline-variant/30">
                      <span className="material-symbols-outlined text-secondary text-[20px] mb-1">payments</span>
                      <div className="text-lg font-bold text-on-surface">$1.2M</div>
                      <div className="text-[9px] text-on-surface-variant leading-tight">Annual Energy Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Satellite Info Center top */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 glass-overlay px-lg py-sm rounded-full flex items-center gap-md shadow-md border border-primary/20 z-20">
              <div className="flex items-center gap-sm">
                <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-on-surface uppercase">Live Simulation</span>
              </div>
              <div className="w-px h-4 bg-outline-variant" />
              <span className="text-[10px] text-on-surface-variant font-semibold">Patna Municipal Area | Sentinel-2 Overlay</span>
            </div>

            {/* Timeline Slider (Bottom Center) */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 w-full max-w-xl">
              <div className="glass-overlay p-md rounded-full shadow-lg flex items-center gap-md px-lg border border-outline-variant/30">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white shadow-sm hover:bg-primary-container focus:outline-none"
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
                </button>
                <div className="flex-1 px-4">
                  <input 
                    type="range"
                    min="0"
                    max="23"
                    value={timelineVal}
                    onChange={(e) => setTimelineVal(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-outline-variant/30 rounded-full appearance-none cursor-pointer accent-primary" 
                  />
                  <div className="flex justify-between mt-2 px-1">
                    <span className="text-[9px] font-bold text-on-surface-variant uppercase">00:00 (Midnight)</span>
                    <span className="text-[9px] font-bold text-primary uppercase">14:00 (Peak Heat)</span>
                    <span className="text-[9px] font-bold text-on-surface-variant uppercase">23:59</span>
                  </div>
                </div>
                <div className="text-sm font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-full min-w-[90px] text-center">
                  {timelineVal.toString().padStart(2, '0')}:00 PM
                </div>
              </div>
            </div>

            {/* Run Button to take us to step 5 */}
            <div className="absolute bottom-24 right-8 z-20">
              <button 
                onClick={() => setStep(5)}
                className="bg-secondary text-white font-bold px-lg py-md rounded-xl shadow-lg flex items-center gap-sm active:scale-95 transition-transform hover:brightness-110 focus:outline-none"
              >
                Generate Roadmap <ChevronRight size={18} />
              </button>
            </div>
          </section>
        )}

        {/* Step 5: Optimize & Recommend */}
        {step === 5 && (
          <section className="flex-grow p-xl overflow-y-auto bg-surface-container-low">
            {/* Header / Top Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-xl gap-md">
              <div>
                <nav className="flex items-center gap-xs text-on-surface-variant font-label-md mb-xs font-bold">
                  <span>Simulations</span>
                  <ChevronRight size={12} />
                  <span>Bihar</span>
                  <ChevronRight size={12} />
                  <span className="text-primary font-bold">Patna Metropolitan Area</span>
                </nav>
                <h1 className="font-display-lg text-display-lg text-on-surface font-bold leading-tight">Step 5: Optimize &amp; Recommend</h1>
                <p className="text-on-surface-variant font-body-md max-w-2xl mt-xs">Strategic cooling roadmap for Patna based on LST anomalies and urban morphology analysis.</p>
              </div>
              <div className="flex gap-md shrink-0">
                <button className="flex items-center gap-sm px-lg py-md border-[1.5px] border-primary text-primary rounded-xl font-label-md font-bold hover:bg-primary/5 transition-all focus:outline-none">
                  <Share2 size={16} /> Share Roadmap
                </button>
                <button className="flex items-center gap-sm px-lg py-md bg-primary text-on-primary rounded-xl font-label-md font-bold hover:opacity-90 active:scale-95 transition-all shadow-md focus:outline-none">
                  <Download size={16} /> Export PDF
                </button>
              </div>
            </div>

            {/* Investment Summary & Comparison Slider */}
            <div className="grid grid-cols-12 gap-lg max-w-screen-2xl mx-auto items-stretch mb-2xl">
              {/* Left Side: Summary metrics */}
              <div className="col-span-12 lg:col-span-8 glass-panel rounded-2xl p-lg flex flex-col justify-between shadow-sm relative overflow-hidden">
                <div className="flex justify-between items-start mb-lg">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm font-bold flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
                      Investment Roadmap: Patna 2024-2026
                    </h3>
                    <p className="text-on-surface-variant font-body-sm">Aggregated metrics for high-priority interventions.</p>
                  </div>
                  <span className="bg-primary/10 text-primary px-md py-xs rounded-full font-label-md font-bold">Phase 1: Critical</span>
                </div>

                <div className="grid grid-cols-3 gap-xl my-lg">
                  <div className="space-y-xs">
                    <p className="text-on-surface-variant font-label-md uppercase tracking-wider font-semibold text-[10px]">Total Est. Cooling</p>
                    <div className="text-display-lg text-primary font-bold">-2.8°C</div>
                    <p className="text-on-surface-variant font-body-sm leading-tight">Aggregate average reduction</p>
                  </div>
                  <div className="space-y-xs">
                    <p className="text-on-surface-variant font-label-md uppercase tracking-wider font-semibold text-[10px]">Projected Capex</p>
                    <div className="text-display-lg text-on-surface font-bold">₹142Cr</div>
                    <p className="text-on-surface-variant font-body-sm leading-tight">Public-Private Partnership model</p>
                  </div>
                  <div className="space-y-xs">
                    <p className="text-on-surface-variant font-label-md uppercase tracking-wider font-semibold text-[10px]">Efficiency Score</p>
                    <div className="flex items-baseline gap-xs">
                      <span className="text-display-lg text-secondary font-bold">8.4</span>
                      <span className="text-on-surface-variant font-body-sm">/ 10</span>
                    </div>
                    <p className="text-on-surface-variant font-body-sm leading-tight">ROI based on health savings</p>
                  </div>
                </div>

                <div className="mt-lg pt-lg border-t border-outline-variant/30 flex flex-wrap items-center gap-xl">
                  <div className="flex items-center gap-sm">
                    <span className="w-3.5 h-3.5 rounded-full bg-primary" />
                    <span className="text-body-sm font-semibold">Albedo Optimization</span>
                  </div>
                  <div className="flex items-center gap-sm">
                    <span className="w-3.5 h-3.5 rounded-full bg-tertiary" />
                    <span className="text-body-sm font-semibold">Evapotranspiration</span>
                  </div>
                  <div className="flex items-center gap-sm">
                    <span className="w-3.5 h-3.5 rounded-full bg-secondary" />
                    <span className="text-body-sm font-semibold">Thermal Buffering</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Before/After Slide Viewer */}
              <div className="col-span-12 lg:col-span-4 glass-panel rounded-2xl overflow-hidden flex flex-col shadow-md min-h-[300px]">
                <div className="p-md border-b border-outline-variant/30 flex justify-between items-center bg-surface-bright select-none">
                  <span className="font-headline-sm text-headline-sm font-bold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-primary text-[18px]">compare</span> Thermal Profile
                  </span>
                  <span className="bg-primary/10 text-primary px-sm py-xs rounded text-[10px] font-bold">Patna city</span>
                </div>

                <div 
                  onMouseMove={handleSliderMove}
                  onMouseDown={() => setIsSliding(true)}
                  onMouseUp={() => setIsSliding(false)}
                  onMouseLeave={() => setIsSliding(false)}
                  className="flex-grow relative overflow-hidden cursor-ew-resize min-h-[220px]"
                >
                  {/* Before (Right Layer) */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiRiYmtJifQ3TSbckCsQ9bsmItpwLTb-3ZnCUAZAYJtwch3wN2Ig7IS1YCCB00KPFr8bPIEzpw_5Ef5S25NmM4wPEp_uJZ6PHdcZTZoWwQ99nkhK37KTM_TgMu6eSKippZfT2o5C0Nmadbq-GbQgVg5bvJTrJy-umBUVMIYmaiIJnGk1DXZLHvq63HJpyxYqgU85duoAfCMiG_0KiCQAU0wYiQe2j0OFFz7enntYYAcVO6BRijOC3ffG3Nj-a4T8gaYUvXPbOZaby9')" }}
                  />

                  {/* After (Left Layer clipped by sliderPos) */}
                  <div 
                    className="absolute inset-y-0 left-0 bg-cover bg-center overflow-hidden transition-all duration-75 pointer-events-none" 
                    style={{ 
                      width: `${sliderPos}%`,
                      backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZ0p0zGJecG1LIP3pvY-GqkwYO57F80rYZkb4NPznM5CBfTdX_2L6sVKfw55_RDV_24bfjBOXNYzEy1nVG6Q2gbrUiftvftq3Vcimhs5yBHqJXg0byhEs1K-7S_Mra-DHCGJFMktC3cg5rTOvaqJ4K8SmzfGjaSZvF4URWDzkDAz5ur0fB3PmstzM_-UMo4eE5MkXD2jUNffwHhtPO7i6CnqWYLR8oV43cyUovPIgfdLOIa_SlPOZECTHzkWVAUuUnqPNElH_MRZGB')" 
                    }}
                  />

                  {/* Split slider line and handle */}
                  <div 
                    className="absolute inset-y-0 w-1 bg-white shadow-xl flex items-center justify-center z-10 pointer-events-none"
                    style={{ left: `${sliderPos}%` }}
                  >
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg border border-outline-variant shrink-0 cursor-ew-resize">
                      <span className="material-symbols-outlined text-primary text-[20px]" style={{ transform: "rotate(90deg)" }}>unfold_more</span>
                    </div>
                  </div>

                  {/* Floating Labels */}
                  <span className="absolute bottom-4 left-4 bg-on-surface/85 text-white px-md py-xs rounded-full text-[10px] font-bold backdrop-blur-md">Current Baseline</span>
                  <span className="absolute bottom-4 right-4 bg-primary/85 text-white px-md py-xs rounded-full text-[10px] font-bold backdrop-blur-md">Projected Optimized</span>
                </div>

                <div className="p-md text-on-surface-variant font-body-sm bg-surface-bright border-t border-outline-variant/30 flex justify-between items-center font-semibold">
                  <span>Max baseline: 44.2°C</span>
                  <span className="text-primary font-bold">Reduction: -3.1°C</span>
                </div>
              </div>
            </div>

            {/* Ranked Interventions */}
            <div className="space-y-md">
              <h3 className="font-headline-sm text-headline-sm font-bold flex items-center gap-sm">
                <span className="material-symbols-outlined font-fill" style={{ fontVariationSettings: "'FILL' 1" }}>format_list_numbered</span>
                Ranked Interventions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-lg max-w-screen-2xl mx-auto">
                {/* Intervention 1 */}
                <div className="glass-panel rounded-2xl p-lg flex flex-col hover:scale-[1.01] hover:shadow-lg transition-all group">
                  <div className="flex justify-between items-start mb-md">
                    <div className="p-md bg-primary/10 rounded-xl text-primary">
                      <span className="material-symbols-outlined text-[32px]">layers</span>
                    </div>
                    <div className="text-right">
                      <span className="text-label-md text-on-surface-variant font-semibold">ROI Score</span>
                      <div className="text-headline-md font-bold text-secondary">9.2</div>
                    </div>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm mb-xs font-bold">White Roof Retrofitting</h4>
                  <p className="text-on-surface-variant text-body-sm mb-lg">Implementation of high-albedo coatings on flat residential and commercial structures in Patna North.</p>
                  
                  <div className="mt-auto space-y-sm border-t border-outline-variant/20 pt-md">
                    <div className="flex justify-between items-center text-body-sm">
                      <span className="text-on-surface-variant">Cooling Impact</span>
                      <span className="text-primary font-bold">-1.2°C</span>
                    </div>
                    <div className="flex justify-between items-center text-body-sm">
                      <span className="text-on-surface-variant">Impl. Cost</span>
                      <span className="font-bold">₹22 Cr</span>
                    </div>
                    <div className="flex justify-between items-center text-body-sm">
                      <span className="text-on-surface-variant">Primary Sector</span>
                      <span className="bg-surface-container px-sm py-xs rounded-lg text-label-md font-semibold">Residential</span>
                    </div>
                  </div>
                  <button className="w-full mt-lg py-md rounded-xl border border-outline-variant group-hover:border-primary group-hover:text-primary transition-colors text-label-md font-bold focus:outline-none">View Config</button>
                </div>

                {/* Intervention 2 */}
                <div className="glass-panel rounded-2xl p-lg flex flex-col hover:scale-[1.01] hover:shadow-lg transition-all group">
                  <div className="flex justify-between items-start mb-md">
                    <div className="p-md bg-tertiary/10 rounded-xl text-tertiary">
                      <Trees size={32} />
                    </div>
                    <div className="text-right">
                      <span className="text-label-md text-on-surface-variant font-semibold">ROI Score</span>
                      <div className="text-headline-md font-bold text-secondary">8.7</div>
                    </div>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm mb-xs font-bold">Urban Canopy Expansion</h4>
                  <p className="text-on-surface-variant text-body-sm mb-lg">Strategic afforestation along Ganga Path and primary arterial roads to maximize shade density.</p>
                  
                  <div className="mt-auto space-y-sm border-t border-outline-variant/20 pt-md">
                    <div className="flex justify-between items-center text-body-sm">
                      <span className="text-on-surface-variant">Cooling Impact</span>
                      <span className="text-primary font-bold">-0.9°C</span>
                    </div>
                    <div className="flex justify-between items-center text-body-sm">
                      <span className="text-on-surface-variant">Impl. Cost</span>
                      <span className="font-bold">₹48 Cr</span>
                    </div>
                    <div className="flex justify-between items-center text-body-sm">
                      <span className="text-on-surface-variant">Primary Sector</span>
                      <span className="bg-surface-container px-sm py-xs rounded-lg text-label-md font-semibold">Infrastructure</span>
                    </div>
                  </div>
                  <button className="w-full mt-lg py-md rounded-xl border border-outline-variant group-hover:border-primary group-hover:text-primary transition-colors text-label-md font-bold focus:outline-none">View Config</button>
                </div>

                {/* Intervention 3 */}
                <div className="glass-panel rounded-2xl p-lg flex flex-col hover:scale-[1.01] hover:shadow-lg transition-all group">
                  <div className="flex justify-between items-start mb-md">
                    <div className="p-md bg-secondary/10 rounded-xl text-secondary">
                      <span className="material-symbols-outlined text-[32px]">texture</span>
                    </div>
                    <div className="text-right">
                      <span className="text-label-md text-on-surface-variant font-semibold">ROI Score</span>
                      <div className="text-headline-md font-bold text-secondary">7.4</div>
                    </div>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm mb-xs font-bold">Permeable Pavement</h4>
                  <p className="text-on-surface-variant text-body-sm mb-lg">Replacing non-porous road materials with cool-pave technology in high-traffic commercial zones.</p>
                  
                  <div className="mt-auto space-y-sm border-t border-outline-variant/20 pt-md">
                    <div className="flex justify-between items-center text-body-sm">
                      <span className="text-on-surface-variant">Cooling Impact</span>
                      <span className="text-primary font-bold">-0.7°C</span>
                    </div>
                    <div className="flex justify-between items-center text-body-sm">
                      <span className="text-on-surface-variant">Impl. Cost</span>
                      <span className="font-bold">₹72 Cr</span>
                    </div>
                    <div className="flex justify-between items-center text-body-sm">
                      <span className="text-on-surface-variant">Primary Sector</span>
                      <span className="bg-surface-container px-sm py-xs rounded-lg text-label-md font-semibold">Public Works</span>
                    </div>
                  </div>
                  <button className="w-full mt-lg py-md rounded-xl border border-outline-variant group-hover:border-primary group-hover:text-primary transition-colors text-label-md font-bold focus:outline-none">View Config</button>
                </div>
              </div>
            </div>

            {/* Validation Banner */}
            <div className="mt-2xl glass-card rounded-2xl p-lg border-2 border-primary/20 bg-primary/5 max-w-screen-2xl mx-auto shadow-sm">
              <div className="flex items-start gap-lg flex-col sm:flex-row">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0 text-white">
                  <Map size={24} />
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-primary mb-xs font-bold">Interactive Geospatial Validation</h4>
                  <p className="text-body-md text-on-surface-variant">
                    The recommended roadmap has been cross-validated against Patna's 10-year humidity trends and air-flow patterns. Click the "GIS Workbench" to manually adjust intervention density and observe real-time cooling shifts.
                  </p>
                  <button 
                    onClick={() => setStep(4)} 
                    className="mt-md text-primary font-bold flex items-center gap-sm hover:underline focus:outline-none cursor-pointer"
                  >
                    Launch GIS Workbench <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Footer (Simplified for simulation layout) */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant w-full py-md shrink-0 z-50">
        <div className="flex flex-col sm:flex-row justify-between items-center px-margin-desktop max-w-screen-2xl mx-auto gap-md">
          <div className="text-[11px] font-semibold text-on-surface-variant text-center sm:text-left">
            © 2026 LISS-COOL. AI-Powered Urban Heat Intelligence Dashboard.
          </div>
          <div className="flex gap-lg text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-primary transition-colors" href="#">API Docs</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
