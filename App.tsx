
import React, { useState, useEffect, useCallback } from 'react';
import { slideData } from './constants/slideData';
import type { SlideContent } from './types';
import TitleSlide from './components/slides/TitleSlide';
import ContentSlide from './components/slides/ContentSlide';
import TablesSlide from './components/slides/TablesSlide';
import DemographicsSlide from './components/slides/DemographicsSlide';
import ChartsSlide from './components/slides/ChartsSlide';
import SuggestionsSlide from './components/slides/SuggestionsSlide';
import ConclusionSlide from './components/slides/ConclusionSlide';
import { ChevronLeftIcon, ChevronRightIcon } from './components/icons/Icons';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slideData.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextSlide, prevSlide]);

  const renderSlide = (slide: SlideContent) => {
    switch (slide.type) {
      case 'title':
        return <TitleSlide title={slide.title} subtitle={slide.subtitle} author={slide.author} supervisor={slide.supervisor} />;
      case 'content':
        return <ContentSlide title={slide.title} points={slide.points} />;
      case 'tables':
        return <TablesSlide title={slide.title} description={slide.description} tables={slide.tables} />;
      case 'demographics':
        return <DemographicsSlide title={slide.title} description={slide.description} data={slide.data} />;
      case 'charts':
        return <ChartsSlide title={slide.title} description={slide.description} charts={slide.charts} />;
      case 'suggestions':
        return <SuggestionsSlide title={slide.title} suggestions={slide.suggestions} />;
      case 'conclusion':
        return <ConclusionSlide title={slide.title} conclusion={slide.conclusion} takeaways={slide.takeaways} contact={slide.contact} />;
      default:
        return <div>Slide type not recognized</div>;
    }
  };

  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="flex flex-col h-screen text-gray-200 overflow-hidden">
      <main className="flex-grow flex items-center justify-center p-4 sm:p-8">
        <div key={currentSlide} className="w-full max-w-6xl aspect-[16/9] bg-black/40 backdrop-blur-lg rounded-2xl border border-celadon/20 flex flex-col justify-center animate-fadeIn p-6 md:p-12">
          {renderSlide(slideData[currentSlide])}
        </div>
      </main>
      <footer className="w-full p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border-2 border-[#F3CB13]/50 text-[#F3CB13]/70 hover:bg-[#F3CB13]/10 hover:text-[#F3CB13] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#F3CB13]/50"
            aria-label="Previous Slide"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
          <div className="flex-grow mx-4 flex flex-col items-center">
             <div className="text-center text-sm text-gray-400 mb-2">
              {`شريحة ${currentSlide + 1} من ${totalSlides}`}
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1.5">
              <div
                className="bg-[#1F9632] h-1.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full border-2 border-[#F3CB13]/50 text-[#F3CB13]/70 hover:bg-[#F3CB13]/10 hover:text-[#F3CB13] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#F3CB13]/50"
            aria-label="Next Slide"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;