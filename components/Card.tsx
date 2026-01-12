
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

const Card: React.FC<CardProps> = ({ title, description, icon, onClick, ctaText = "Voir / Commander", variant = 'primary' }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {icon && (
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gray-50">
          <i className={`fa-solid ${icon} text-2xl`} style={{ color: variant === 'accent' ? COLORS.accent : COLORS.primary }}></i>
        </div>
      )}
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{description}</p>
      {onClick && (
        <button
          onClick={onClick}
          className={`w-full py-3 px-4 rounded-xl font-bold transition-all duration-200 active:scale-95 ${
            variant === 'accent' 
              ? 'bg-[#c9a24d] text-black hover:bg-[#b89141]' 
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          {ctaText}
        </button>
      )}
    </div>
  );
};

export default Card;
