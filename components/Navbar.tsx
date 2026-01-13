
import React, { useState } from 'react';
import { Page } from '../types';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-3xl">
      <div className="nav-blur rounded-full px-6 py-4 flex items-center justify-between shadow-2xl border border-white/10">
        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-center flex-1 space-x-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`px-5 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                currentPage === item.id 
                  ? 'bg-white text-black shadow-lg' 
                  : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex items-center justify-between w-full px-4">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#c9a24d]">Explore</span>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white bg-white/5 w-10 h-10 rounded-full flex items-center justify-center border border-white/10"
          >
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute bottom-24 left-0 w-full nav-blur rounded-[2.5rem] p-6 animate-in slide-in-from-bottom-10 md:hidden border border-white/10 shadow-3xl">
          <div className="grid grid-cols-2 gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => { setCurrentPage(item.id); setIsOpen(false); }}
                className={`flex flex-col items-center justify-center p-6 rounded-3xl transition-all ${
                  currentPage === item.id 
                    ? 'bg-[#c9a24d] text-black shadow-gold' 
                    : 'bg-white/5 text-white/50 hover:bg-white/10'
                }`}
              >
                <i className={`fa-solid ${item.icon} text-lg mb-3`}></i>
                <span className="text-[9px] font-black uppercase tracking-widest leading-none">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;