import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Solution', id: 'features' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-outline-variant/30 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center px-6 md:px-margin-desktop h-20 max-w-screen-2xl mx-auto">
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-sm hover:opacity-90 transition-opacity text-left focus:outline-none"
        >
          <img 
            alt="LISS-COOL Logo" 
            className="h-12 w-auto" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC6FB_RkxburXdtLXGTq30pPcuDYRy90FxiCTsFmrREiRCdUlhQDPn8upKkQjWJGF-nljQV3vloBzu8C-JjkMH2c9xj9V0WQnOKIDZPgZxEyndqp69YT_WhExHy4FC5nutnkQf80ShpIT86-XJQtlrYfdO4fFiYNvKehkBtoDCCLjqd8FcASUC8wz1L3to8EwoaUgnxCOIwkZss8Xd-xRuYkLQulOrj9QK-LM4j6IbyRzTH1nhsSMH2ZjzgKZBLohv2EusF3nANAMl"
          />
          <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">LISS-COOL</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`font-body-md text-body-md transition-colors py-2 relative focus:outline-none ${
                currentPage === link.id
                  ? 'text-primary font-semibold'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
              {currentPage === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-md">
          <button 
            onClick={() => handleNavClick('login')} 
            className="font-body-md text-body-md text-primary hover:bg-primary/5 px-lg py-2 rounded-xl transition-all focus:outline-none"
          >
            Log In
          </button>
          <button 
            onClick={() => handleNavClick('demo')} 
            className="bg-primary text-on-primary font-label-md text-label-md px-xl py-3 rounded-xl hover:bg-primary-container transition-all active:scale-95 shadow-lg shadow-primary/20 focus:outline-none"
          >
            Try Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-on-surface-variant hover:text-primary transition-colors focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-outline-variant/30 px-6 py-4 space-y-4 shadow-lg animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-sm">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left py-3 px-4 rounded-xl text-body-md transition-all focus:outline-none ${
                  currentPage === link.id
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-outline-variant/30 flex flex-col gap-sm">
            <button 
              onClick={() => handleNavClick('login')} 
              className="w-full py-3 text-center text-primary font-semibold rounded-xl border border-primary/20 hover:bg-primary/5 transition-all focus:outline-none"
            >
              Log In
            </button>
            <button 
              onClick={() => handleNavClick('demo')} 
              className="w-full py-3 text-center bg-primary text-on-primary font-bold rounded-xl shadow-lg shadow-primary/15 hover:bg-primary-container transition-all focus:outline-none"
            >
              Try Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
