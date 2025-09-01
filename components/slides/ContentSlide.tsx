
import React from 'react';

interface ContentSlideProps {
  title: string;
  points?: { title?: string, text: string }[];
}

const ContentSlide: React.FC<ContentSlideProps> = ({ title, points }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1F9632] mb-8 pb-4 border-b-2 border-[#F3CB13]/20">{title}</h2>
      <ul className="space-y-5 text-lg md:text-xl text-gray-300">
        {points?.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-[#F3CB13] font-bold mr-4 rtl:ml-4 rtl:mr-0 text-2xl">•</span>
            <div>
                {point.title && <h3 className="font-bold text-white">{point.title}</h3>}
                <p>{point.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentSlide;
