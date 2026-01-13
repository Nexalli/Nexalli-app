
import React from 'react';
import { COLORS } from '../constants';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  onClick?: () => void;
  ctaText?: string;
  variant?: 'primary' | 'accent';
}

const Card: React.FC<CardProps> = ({ title, description, icon, onClick, ctaText = "Découvrir l'offre", variant = 'primary' }) => {
  return (
    <div className="bg-[#111] rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-[#222] p-8 md:p-12 flex flex-col h-full hover:shadow-[0_0_50px_rgba(201,162,77,0.1)] hover:border-[#c9a24d]/30 transition-all duration-500 transform hover:-translate-y-2 group">
      {icon && (
        <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center mb-8 bg-[#1a1a1a] border border-white/5 group-hover:bg-[#c9a24d] transition-all duration-500 shadow-inner">
          <i className={`fa-solid ${icon} text-2xl md:text-4xl group-hover:text-black transition-colors duration-500`} style={{ color: COLORS.accent }}></i>
        </div>
      )}
      <h3 className="text-xl md:text-3xl font-black mb-4 text-white uppercase tracking-tighter leading-none">{title}</h3>
      <p className="text-gray-500 mb-10 flex-grow leading-relaxed font-medium text-sm md:text-base">{description}</p>
      {onClick && (
        <button
          onClick={onClick}
          className={`w-full py-4 md:py-6 px-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] md:text-sm transition-all duration-300 active:scale-95 shadow-2xl ${
            variant === 'accent' 
              ? 'bg-[#c9a24d] text-black hover:bg-white' 
              : 'bg-white text-black hover:bg-[#c9a24d]'
          }`}
        >
          {ctaText}
        </button>
      )}
    </div>
  );
};

export default Card;
