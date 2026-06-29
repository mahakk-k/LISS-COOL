import React, { useState } from 'react';
import { Mail, ArrowRight, Star, User, Satellite, Thermometer, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormState({
        name: '',
        email: '',
        organization: '',
        message: ''
      });
    }, 1500);
  };

  const handleInputChange = (field, val) => {
    setFormState(prev => ({ ...prev, [field]: val }));
  };

  return (
    <div className="animate-in fade-in duration-500 w-full">
      <main className="min-h-[85vh] flex flex-col md:flex-row precision-grid w-full">
        {/* Left Side: Form */}
        <section className="w-full md:w-1/2 flex items-center justify-center p-gutter lg:p-2xl relative z-10 bg-white/70 backdrop-blur-sm">
          <div className="max-w-md w-full animate-in slide-in-from-left duration-700 space-y-xl">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md font-bold mb-md">
                <Mail size={14} /> Contact Intelligence
              </span>
              <h1 className="font-headline-lg text-headline-lg text-on-background font-bold mb-sm">Let's Cool Your City</h1>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Connect with our environmental scientists and urban planning specialists to deploy LISS-COOL in your workspace.
              </p>
            </div>
            
            <form className="space-y-lg" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-md">
                <div className="space-y-2">
                  <label className="font-label-md text-on-surface-variant font-semibold">Full Name</label>
                  <input 
                    required
                    value={formState.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-md py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                    placeholder="Dr. Sarah Chen" 
                    type="text"
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-on-surface-variant font-semibold">Professional Email</label>
                  <input 
                    required
                    value={formState.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-md py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                    placeholder="s.chen@metrogov.in" 
                    type="email"
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-on-surface-variant font-semibold">Organization</label>
                  <input 
                    required
                    value={formState.organization}
                    onChange={(e) => handleInputChange('organization', e.target.value)}
                    className="w-full px-md py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                    placeholder="Urban Planning Authority" 
                    type="text"
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-on-surface-variant font-semibold">Project Scope / Message</label>
                  <textarea 
                    required
                    value={formState.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full px-md py-3 rounded-xl border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none" 
                    placeholder="Briefly describe your city's heat mitigation objectives..." 
                    rows="4"
                    disabled={status === 'loading'}
                  ></textarea>
                </div>
              </div>
              
              <button 
                type="submit"
                disabled={status === 'loading'}
                className={`w-full py-3.5 font-headline-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 focus:outline-none ${
                  status === 'loading'
                    ? 'bg-primary/50 text-white cursor-not-allowed'
                    : status === 'success'
                    ? 'bg-green-600 text-white shadow-green-200'
                    : 'bg-primary text-on-primary hover:bg-primary/95 active:scale-[0.98]'
                }`}
              >
                {status === 'loading' && (
                  <>
                    <RefreshCw className="animate-spin" size={18} />
                    <span>Processing Request...</span>
                  </>
                )}
                {status === 'success' && (
                  <>
                    <CheckCircle2 size={18} />
                    <span>Request Received!</span>
                  </>
                )}
                {status === 'idle' && (
                  <>
                    <span>Submit Request</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
              
              {status === 'success' && (
                <p className="text-center font-bold text-green-600 text-sm animate-in fade-in slide-in-from-top duration-300">
                  Thank you! Our climate coordinator will contact you shortly.
                </p>
              )}
              
              <p className="text-center font-body-sm text-on-surface-variant">
                Typically responds within 24 business hours.
              </p>
            </form>
          </div>
        </section>

        {/* Right Side: Brand Graphic & Testimonial */}
        <section className="hidden md:flex md:w-1/2 relative bg-surface-dim overflow-hidden items-end min-h-[600px]">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Thermal Heat Map India" 
              className="w-full h-full object-cover opacity-90" 
              src="/images/india_map.png" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent"></div>
          </div>
          
          {/* Floating Card UI */}
          <div className="relative z-10 w-full p-xl md:p-2xl space-y-lg">
            <div className="glass-overlay rounded-2xl p-xl shadow-2xl border border-white/20 max-w-lg animate-in fade-in zoom-in duration-1000 delay-300">
              <div className="flex gap-1 text-secondary-container mb-md">
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
              </div>
              <blockquote className="font-headline-sm text-headline-sm text-on-background italic leading-relaxed mb-lg font-semibold">
                'LISS-COOL transformed our heat mitigation strategy with actionable precision. We can now visualize heat islands at a 30m resolution.'
              </blockquote>
              <div className="flex items-center gap-md">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                  <User size={24} />
                </div>
                <div>
                  <p className="font-label-md text-on-background font-bold uppercase tracking-wider">Aravind Sharma</p>
                  <p className="font-body-sm text-on-surface-variant">Chief Urban Planner, SMART Cities Initiative</p>
                </div>
              </div>
            </div>
            
            {/* Geospatial Metric Badges */}
            <div className="flex flex-wrap gap-md">
              <div className="bg-primary/20 backdrop-blur-md border border-primary/30 rounded-xl px-md py-sm text-on-primary-container flex items-center gap-2">
                <Satellite size={14} className="text-primary" />
                <span className="font-label-md font-semibold text-primary">Real-time Sat-Link</span>
              </div>
              <div className="bg-secondary/20 backdrop-blur-md border border-secondary/30 rounded-xl px-md py-sm text-on-secondary-container flex items-center gap-2">
                <Thermometer size={14} className="text-secondary" />
                <span className="font-label-md font-semibold text-secondary">±0.2°C Accuracy</span>
              </div>
            </div>
          </div>
          
          {/* Decorative Coordinate Grid */}
          <div className="absolute top-gutter right-gutter text-white/50 font-mono text-[10px] space-y-1 text-right">
            <div>LAT: 20.5937° N</div>
            <div>LONG: 78.9629° E</div>
            <div>ALT: 705.2 KM</div>
          </div>
        </section>
      </main>
    </div>
  );
}
