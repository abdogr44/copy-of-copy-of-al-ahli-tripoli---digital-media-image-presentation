
import React from 'react';
import type { ChartItem } from '../../types';

interface ChartsSlideProps {
  title: string;
  description?: string;
  charts?: ChartItem[];
}

const PercentageBar: React.FC<{ value: number; color: string }> = ({ value, color }) => (
    <div className="w-full bg-slate-900/50 rounded-full h-8 overflow-hidden">
        <div 
            className="h-8 rounded-full flex items-center justify-center text-sm font-bold text-white drop-shadow-sm transition-all duration-1000 ease-out" 
            style={{ 
                width: `${value}%`, 
                backgroundImage: `linear-gradient(to left, ${color}, color-mix(in srgb, ${color} 70%, black))`
            }}
        >
           {value.toFixed(1)}%
        </div>
    </div>
);


const ChartsSlide: React.FC<ChartsSlideProps> = ({ title, description, charts }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#F3CB13] mb-2">{title}</h2>
      {description && <p className="text-gray-400 mb-8 text-lg">{description}</p>}
      <div className="space-y-6">
        {charts?.map((chart, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-2/5 text-right">
              <h3 className="font-semibold text-base md:text-lg">{chart.title}</h3>
            </div>
            <div className="w-3/5">
              <PercentageBar value={chart.data[0].value} color={chart.color} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartsSlide;