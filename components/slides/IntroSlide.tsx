import React from 'react';
import { SparklesIcon, ThumbsUpIcon, ShareIcon } from '../icons/Icons';

export interface IntroHighlight {
  title: string;
  text: string;
  icon?: 'sparkles' | 'check' | 'chart';
}

interface IntroSlideProps {
  title: string;
  description?: string;
  highlights?: IntroHighlight[];
}

const iconMap = {
  sparkles: SparklesIcon,
  check: ThumbsUpIcon,
  chart: ShareIcon,
};

const IntroSlide: React.FC<IntroSlideProps> = ({ title, description, highlights = [] }) => {
  return (
    <div className="flex flex-col h-full justify-center">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1F9632] drop-shadow-[0_2px_6px_rgba(243,203,19,0.35)]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-base md:text-lg text-gray-200 max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </div>

      {highlights.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {highlights.map((h, idx) => {
            const Icon = h.icon ? iconMap[h.icon] : SparklesIcon;
            return (
              <div key={idx} className="bg-slate-900/40 border border-slate-700 rounded-xl p-4 md:p-6 accent-shadow-sm accent-shadow-hover accent-animated">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 text-[#1F9632] accent-drop-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100">{h.title}</h3>
                    <p className="mt-1 text-sm text-gray-200 leading-relaxed">{h.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default IntroSlide;