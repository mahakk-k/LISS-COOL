import React from 'react';
import { Globe, Mail } from 'lucide-react';

export default function Footer({ setCurrentPage }) {
  const handleNavClick = (id) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant w-full py-xl mt-2xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-6 md:px-margin-desktop max-w-screen-2xl mx-auto">
        <div className="space-y-md">
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-sm hover:opacity-90 transition-opacity text-left focus:outline-none"
          >
            <img 
              alt="LISS-COOL Logo" 
              className="h-8 w-auto" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgIrqdi8YquFMwxmCfX97ZRrJFsQSaMWPTbNKxN9vH0dWZQu2j3kaAg6BXTtSW6miC47Fh1aLtkosEOaz7Rwa_Ftw1p2cNlizFwHXSvOAPaVSgrgpO7jfjjk-stgiBpnqwIg_xc2ZBQcOao60FHk33CVx1TUijbuR2AlwpTuQAutL5j8lb8rnFQ_K1d4n2qHviAbP-2kJtPF5k3i5wHcHXYgLXdOj8GV8lZAPqUK_qcVDeq9qFfEPD32nqy09tjK_8H-FhK6DLDelf"
            />
            <span className="font-headline-md text-headline-md font-bold text-primary">LISS-COOL</span>
          </button>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs leading-relaxed">
            Leading the charge in AI-powered urban climate adaptation and heat mitigation strategies worldwide.
          </p>
        </div>
        
        <div className="space-y-md">
          <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-widest font-semibold">Platform</h4>
          <ul className="space-y-sm">
            <li>
              <button onClick={() => handleNavClick('features')} className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors text-left focus:outline-none">
                Simulation Tools
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('features')} className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors text-left focus:outline-none">
                Data Integrations
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('pricing')} className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors text-left focus:outline-none">
                Pricing & Plans
              </button>
            </li>
          </ul>
        </div>

        <div className="space-y-md">
          <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-widest font-semibold">Resources</h4>
          <ul className="space-y-sm">
            <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a></li>
            <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Climate Commitment</a></li>
            <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">API Docs</a></li>
          </ul>
        </div>

        <div className="space-y-md">
          <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-widest font-semibold">Stay Connected</h4>
          <div className="flex gap-md">
            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary transition-all shadow-sm" href="#">
              <Globe size={18} />
            </a>
            <button onClick={() => handleNavClick('contact')} className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary transition-all shadow-sm focus:outline-none">
              <Mail size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-margin-desktop pt-xl mt-xl border-t border-outline-variant/30 text-center">
        <p className="font-body-sm text-body-sm text-on-surface-variant">© 2026 LISS-COOL. AI-Powered Urban Heat Intelligence.</p>
      </div>
    </footer>
  );
}
