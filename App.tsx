
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
import IntroSlide from './components/slides/IntroSlide';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slideData.length;

  // Theme management
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Keyboard navigation (Arrow keys and Space)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const renderSlide = (slide: SlideContent) => {
    switch (slide.type) {
      case 'title':
        return <TitleSlide title={slide.title} subtitle={slide.subtitle} author={slide.author} supervisor={slide.supervisor} />;
      case 'intro':
        return <IntroSlide title={slide.title} description={slide.description} highlights={slide.highlights} />;
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
        return null;
    }
  };

  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="flex flex-col h-screen text-gray-200 overflow-hidden">
      <main className="flex-grow flex items-center justify-center p-4 sm:p-8">
        <div key={currentSlide} className="w-full max-w-6xl aspect-[16/9] bg-black/40 backdrop-blur-lg rounded-2xl border border-celadon/20 flex flex-col justify-center animate-fadeIn p-6 md:p-12 accent-shadow accent-animated">
          {renderSlide(slideData[currentSlide])}
        </div>
      </main>
      <footer className="w-full p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border-2 border-[#F3CB13]/50 text-[#F3CB13]/70 hover:bg-[#F3CB13]/10 hover:text-[#F3CB13] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#F3CB13]/50 accent-shadow-sm accent-shadow-hover accent-animated accent-outline-focus"
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
                className="bg-[#1F9632] h-1.5 rounded-full transition-all duration-500 ease-out accent-drop-sm accent-animated"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border-2 border-[#F3CB13]/50 text-[#F3CB13]/70 hover:bg-[#F3CB13]/10 hover:text-[#F3CB13] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#F3CB13]/50 accent-outline-focus"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? (
                // Sun icon
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
                  <path fillRule="evenodd" d="M12 1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5Zm0 18a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm10.5-7.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75ZM3.75 12a.75.75 0 0 1-.75.75H1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75Zm15.53 6.78a.75.75 0 0 1-1.06 0l-1.06-1.06a.75.75 0 0 1 1.06-1.06l1.06 1.06c.293.293.293.767 0 1.06Zm-12.94 0a.75.75 0 0 1-1.06 0c-.293-.293-.293-.767 0-1.06l1.06-1.06a.75.75 0 1 1 1.06 1.06L6.34 18.78Zm12.94-12.94a.75.75 0 0 1-1.06 0L18.12 4.78a.75.75 0 1 1 1.06-1.06l1.06 1.06c.293.293.293.767 0 1.06Zm-12.94 0a.75.75 0 0 1-1.06 0L4.78 4.78A.75.75 0 0 1 5.84 3.72l1.06 1.06c.293.293.293.767 0 1.06Z" clipRule="evenodd" />
                </svg>
              ) : (
                // Moon icon
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M21.752 15.002A9 9 0 0 1 9 2.248a.75.75 0 0 0-1.065-.977 10.5 10.5 0 1 0 17.794 11.73.75.75 0 0 0-1.977-.999Z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border-2 border-[#F3CB13]/50 text-[#F3CB13]/70 hover:bg-[#F3CB13]/10 hover:text-[#F3CB13] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#F3CB13]/50 accent-shadow-sm accent-shadow-hover accent-animated accent-outline-focus"
              aria-label="Next Slide"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;