
import React from 'react';
import { COLORS } from '../constants';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  onClick?: () => void;
  ctaText?: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon, onClick, ctaText = "Explorer" }) => {
  return (
    <div className="glass rounded-[3rem] p-10 flex flex-col h-full card-hover transition-all duration-500 border border-white/5 group">
      {icon && (
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 bg-white/5 group-hover:bg-[#c9a24d] group-hover:rotate-[10deg] transition-all duration-500">
          <i className={`fa-solid ${icon} text-2xl group-hover:text-black transition-colors`} style={{ color: '#c9a24d' }}></i>
        </div>
      )}
      <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter text-white leading-none">{title}</h3>
      <p className="text-gray-400 mb-10 flex-grow text-sm font-medium leading-relaxed">{description}</p>
      {onClick && (
        <button
          onClick={onClick}
          className="w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-[10px] bg-white text-black hover:bg-[#c9a24d] transition-all active:scale-95 shadow-xl"
        >
          {ctaText}
        </button>
      )}
    </div>
  );
};

export default Card;