
import React from 'react';
import type { Suggestion } from '../../types';

interface SuggestionsSlideProps {
  title: string;
  suggestions?: Suggestion[];
}

const SuggestionsSlide: React.FC<SuggestionsSlideProps> = ({ title, suggestions }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1F9632] mb-8 pb-4 border-b-2 border-[#F3CB13]/20">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {suggestions?.map((suggestion, index) => (
          <div key={index} className="bg-slate-900/40 border border-slate-700 p-6 rounded-lg flex items-start space-x-4 rtl:space-x-reverse accent-shadow-sm accent-shadow-hover accent-animated">
            <div className="flex-shrink-0">
              <suggestion.icon className="w-10 h-10 text-[#1F9632] accent-drop-sm" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-white mb-2">{suggestion.title}</h3>
              <p className="text-gray-300">{suggestion.point}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestionsSlide;
