
import React, { useEffect, useState } from 'react';
import type { DemographicItem } from '../../types';

interface PieChartProps {
  percentage: number;
  color: string;
  size?: number;
  strokeWidth?: number;
}

const PieChart: React.FC<PieChartProps> = ({ percentage, color, size = 120, strokeWidth = 10 }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setCurrentPercentage(percentage));
    return () => cancelAnimationFrame(animation);
  }, [percentage]);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (currentPercentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="text-slate-700"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          strokeWidth={strokeWidth}
          stroke={color}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            transition: 'stroke-dashoffset 1s ease-out',
          }}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold text-white drop-shadow-sm">{`${Math.round(percentage)}%`}</span>
      </div>
    </div>
  );
};

interface DemographicsSlideProps {
  title: string;
  description?: string;
  data?: DemographicItem[];
}

const chartColors = ['#F3CB13', '#1F9632', '#3b82f6', '#ec4899'];

const DemographicsSlide: React.FC<DemographicsSlideProps> = ({ title, description, data }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#F3CB13] mb-2">{title}</h2>
      {description && <p className="text-gray-400 mb-10 text-lg">{description}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data?.map((item, index) => (
          <div key={index} className="bg-slate-900/40 border border-slate-700 p-6 rounded-xl text-center flex flex-col items-center justify-between transform hover:-translate-y-1 hover:bg-slate-800/60 hover:border-slate-600 transition-all duration-300">
             <PieChart 
                percentage={item.percentage} 
                color={chartColors[index % chartColors.length]} 
             />
             <div className="mt-4">
                <h3 className="font-bold text-xl text-white mb-2">{item.label}</h3>
                <p className="text-gray-300 text-base">{item.value}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemographicsSlide;
