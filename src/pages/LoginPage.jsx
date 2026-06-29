import React, { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function LoginPage({ setCurrentPage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLarge, setIsLarge] = useState(true);

  // Handle window resizing dynamically to determine split-pane layout
  useEffect(() => {
    const checkSize = () => {
      setIsLarge(window.innerWidth >= 1024);
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const handleNavClick = (id) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate authentication success and take them to the demo dashboard
    handleNavClick('demo');
  };

  return (
    <div 
      className="animate-in fade-in duration-500 w-full min-h-[calc(100vh-80px)] bg-background text-on-surface"
      style={{ 
        display: 'flex', 
        flexDirection: isLarge ? 'row' : 'column',
        width: '100%'
      }}
    >
      {/* Left Side: Geospatial Visual */}
      {isLarge && (
        <section 
          className="relative overflow-hidden bg-on-background"
          style={{ width: '60%', minHeight: '100%', flexShrink: 0 }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[20000ms] hover:scale-110 opacity-80" 
            style={{ backgroundImage: "url('/images/login_bg.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-on-background/90 via-on-background/70 to-transparent pointer-events-none" />
          
          {/* Atmospheric Grid Overlay */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none" 
            style={{ 
              backgroundImage: "linear-gradient(#bdc9c6 1px, transparent 1px), linear-gradient(90deg, #bdc9c6 1px, transparent 1px)", 
              backgroundSize: "40px 40px" 
            }}
          />

          {/* Content on Image */}
          <div className="relative z-10 p-2xl flex flex-col justify-end h-full max-w-2xl text-white">
            <div className="mb-lg space-y-md">
              <span className="inline-flex items-center gap-2 px-md py-xs bg-primary-container/20 border border-primary-fixed-dim/30 rounded-full text-primary-fixed text-label-md font-label-md backdrop-blur-md">
                <span className="material-symbols-outlined text-[14px]">sensors</span>
                LIVE THERMAL DATA ACQUISITION
              </span>
              <h1 className="font-display-lg text-display-lg text-surface-bright leading-tight font-bold">
                Mitigating Urban Heat Through AI Intelligence.
              </h1>
              <p className="font-body-lg text-body-lg text-surface-variant max-w-xl">
                Providing real-time environmental analysis and predictive heat mitigation.
              </p>
            </div>

            <div className="flex gap-xl border-t border-outline-variant/20 pt-lg mt-md">
              <div>
                <p className="text-label-md font-label-md text-primary-fixed-dim uppercase tracking-wider">Active Cities</p>
                <p className="text-headline-sm font-headline-sm text-surface-bright font-bold">Patna, Bhopal, Delhi</p>
              </div>
              <div className="w-px bg-outline-variant/20" />
              <div>
                <p className="text-label-md font-label-md text-primary-fixed-dim uppercase tracking-wider">Data Latency</p>
                <p className="text-headline-sm font-headline-sm text-surface-bright font-bold">140ms</p>
              </div>
              <div className="w-px bg-outline-variant/20" />
              <div>
                <p className="text-label-md font-label-md text-primary-fixed-dim uppercase tracking-wider">Analysis Scale</p>
                <p className="text-headline-sm font-headline-sm text-surface-bright font-bold">Nationwide</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Right Side: Login Form */}
      <section 
        className="flex flex-col justify-between p-md lg:p-2xl bg-surface-container-lowest relative z-10"
        style={{ width: isLarge ? '40%' : '100%', minHeight: '100%', flexShrink: 0 }}
      >
        {/* Mobile Background (visible only on mobile) */}
        {!isLarge && (
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center scale-125 opacity-10" 
              style={{ backgroundImage: "url('/images/login_bg.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface/80 to-surface" />
          </div>
        )}

        <div 
          className="my-auto space-y-xl mx-auto" 
          style={{ width: '100%', maxWidth: '400px', padding: '24px 0' }}
        >
          {/* Branding */}
          <div className="flex flex-col items-center text-center">
            <button onClick={() => handleNavClick('home')} className="w-16 h-16 mb-md flex items-center justify-center bg-primary/10 rounded-2xl hover:scale-105 transition-transform cursor-pointer">
              <img 
                alt="LISS-COOL Logo" 
                className="w-12 h-12" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC6FB_RkxburXdtLXGTq30pPcuDYRy90FxiCTsFmrREiRCdUlhQDPn8upKkQjWJGF-nljQV3vloBzu8C-JjkMH2c9xj9V0WQnOKIDZPgZxEyndqp69YT_WhExHy4FC5nutnkQf80ShpIT86-XJQtlrYfdO4fFiYNvKehkBtoDCCLjqd8FcASUC8wz1L3to8EwoaUgnxCOIwkZss8Xd-xRuYkLQulOrj9QK-LM4j6IbyRzTH1nhsSMH2ZjzgKZBLohv2EusF3nANAMl"
              />
            </button>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Welcome back to LISS-COOL</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-sm">Access your urban thermal intelligence dashboard</p>
          </div>

          {/* Form */}
          <form className="space-y-lg" onSubmit={handleLogin} style={{ width: '100%' }}>
            {/* Email Field */}
            <div className="space-y-xs">
              <label className="font-label-md text-label-md text-on-surface-variant font-semibold" htmlFor="email">EMAIL ADDRESS</label>
              <div 
                className="relative rounded-xl border border-outline-variant bg-surface-container-low focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all"
                style={{ width: '100%', display: 'flex', alignItems: 'center' }}
              >
                <span className="absolute left-md text-outline"><Mail size={18} /></span>
                <input 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-[48px] pr-md py-md bg-transparent border-0 focus:ring-0 text-body-md placeholder:text-outline/50 outline-none" 
                  id="email" 
                  placeholder="name@organization.gov" 
                  type="email"
                  style={{ width: '100%', border: 'none', background: 'transparent' }}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-xs">
              <div className="flex justify-between items-end">
                <label className="font-label-md text-label-md text-on-surface-variant font-semibold" htmlFor="password">PASSWORD</label>
                <a className="font-label-md text-label-md text-primary hover:text-secondary font-semibold transition-colors" href="#">Forgot password?</a>
              </div>
              <div 
                className="relative rounded-xl border border-outline-variant bg-surface-container-low focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all"
                style={{ width: '100%', display: 'flex', alignItems: 'center' }}
              >
                <span className="absolute left-md text-outline"><Lock size={18} /></span>
                <input 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-[48px] pr-[48px] py-md bg-transparent border-0 focus:ring-0 text-body-md placeholder:text-outline/50 outline-none" 
                  id="password" 
                  placeholder="••••••••" 
                  type={showPassword ? 'text' : 'password'}
                  style={{ width: '100%', border: 'none', background: 'transparent' }}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-md text-outline hover:text-primary transition-colors focus:outline-none cursor-pointer"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-sm">
              <input 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-5 h-5 rounded-md border-outline-variant text-primary focus:ring-primary-container cursor-pointer" 
                id="remember" 
                type="checkbox"
              />
              <label className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer select-none" htmlFor="remember">Stay signed in for 30 days</label>
            </div>

            {/* Sign In Button */}
            <button 
              type="submit"
              className="w-full py-md bg-primary text-on-primary font-headline-sm text-headline-sm rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-container active:scale-[0.98] transition-all flex justify-center items-center gap-sm font-semibold cursor-pointer"
              style={{ width: '100%' }}
            >
              Sign In <ArrowRight size={20} />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-2xl">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant"></div>
            </div>
            <div className="relative flex justify-center text-label-md font-label-md uppercase tracking-widest">
              <span className="px-md bg-surface-container-lowest text-outline">or authenticate with</span>
            </div>
          </div>

          {/* SSO Options */}
          <div className="grid grid-cols-2 gap-md" style={{ width: '100%' }}>
            <button 
              onClick={() => handleNavClick('demo')}
              className="flex items-center justify-center gap-sm py-md border border-outline-variant rounded-xl hover:bg-surface-variant/20 transition-all text-body-sm font-semibold active:scale-95 cursor-pointer"
              style={{ width: '100%' }}
            >
              <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXWYttaNBIKREram1FaiQ_tZG4MnFqv3yB52gCLg2F7ivY4OHCmgPe7KOnkThpK3s67RL3XEB8UvyQ25XzjDu7uec9U6T2Jy8mnZ0A0aeFQiXCX8-olyVFs2vCuVwrOsTw3pk_eFINShZUNJLJmPDhi64bhyPPx3qwVQRT9jtbe6gRdKjSUz0GZFtyplwKPxz57NwvSgCtiL3CIvq6VwyHmguQ9gFPcd2wmPbgwpKYuQQj5VvErkFOrxf4BBOQMgEGrNIWTx9Cs4v5" />
              Google
            </button>
            <button 
              onClick={() => handleNavClick('demo')}
              className="flex items-center justify-center gap-sm py-md border border-outline-variant rounded-xl hover:bg-surface-variant/20 transition-all text-body-sm font-semibold active:scale-95 cursor-pointer"
              style={{ width: '100%' }}
            >
              <span className="material-symbols-outlined text-primary text-lg">hub</span>
              Enterprise ID
            </button>
          </div>

          {/* Footer Link */}
          <div className="text-center pt-md">
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Don't have an account?{' '}
              <button 
                onClick={() => handleNavClick('contact')} 
                className="text-primary font-semibold hover:underline decoration-2 underline-offset-4 focus:outline-none cursor-pointer"
              >
                Request a demo
              </button>
            </p>
          </div>
        </div>

        {/* Accessibility/Legal Footer */}
        <footer className="w-full flex justify-between font-label-md text-label-md text-outline/60 mt-auto pt-lg">
          <div className="flex gap-md">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          </div>
          <p>© 2026 LISS-COOL</p>
        </footer>
      </section>
    </div>
  );
}
