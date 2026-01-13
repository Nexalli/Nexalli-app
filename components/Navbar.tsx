
import React, { useState } from 'react';
import { Page } from '../types';
import { NAV_ITEMS, COLORS } from '../constants';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-[73px] md:top-[105px] z-[55] bg-black/80 backdrop-blur-2xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center h-16 md:h-20 items-center">
          {/* Desktop Navigation - Centered for Premium Look */}
          <div className="hidden lg:flex space-x-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  currentPage === item.id 
                    ? 'text-black bg-[#c9a24d] shadow-[0_0_15px_rgba(201,162,77,0.3)]' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center w-full justify-between">
            <span className="text-white/30 text-[9px] font-black uppercase tracking-[0.3em]">Menu Digital</span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-[#c9a24d] hover:bg-white/5 focus:outline-none transition-all"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-black border-t border-white/5 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsOpen(false);
                }}
                className={`flex items-center w-full text-left px-5 py-5 rounded-2xl text-sm font-black uppercase tracking-[0.2em] transition-all ${
                  currentPage === item.id 
                    ? 'bg-[#c9a24d] text-black shadow-lg' 
                    : 'text-white/40 border border-white/5 bg-white/[0.02] hover:bg-white/5 hover:text-white'
                }`}
              >
                <i className={`fa-solid ${item.icon} mr-4 text-lg opacity-80`}></i>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
