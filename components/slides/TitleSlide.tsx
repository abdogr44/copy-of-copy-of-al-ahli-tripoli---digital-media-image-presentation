
import React from 'react';

interface TitleSlideProps {
  title: string;
  subtitle?: string;
  author?: string;
  supervisor?: string;
}

const TitleSlide: React.FC<TitleSlideProps> = ({ title, subtitle, author, supervisor }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full">
      <div className="flex items-center justify-center divide-x-reverse divide-x divide-celadon/20 border border-celadon/20 mb-10">
        <div className="p-4 flex items-center justify-center gap-x-4 w-52">
          <img src="/جامعة طرابلس 2.jpg" alt="جامعة طرابلس" className="h-12 w-12 object-contain"/>
          <div className="text-right">
              <p className="text-base text-gray-100 font-semibold">جامعة</p>
              <p className="text-sm text-gray-300">طرابلس</p>
          </div>
        </div>
        <div className="p-4 flex items-center justify-center gap-x-4 w-52">
          <img src="/كلية الإعلام.jpg" alt="كلية الإعلام والإتصال" className="h-12 w-12 object-contain"/>
          <div className="text-right">
              <p className="text-base text-gray-100 font-semibold">كلية</p>
              <p className="text-sm text-gray-300">الإعلام والإتصال</p>
          </div>
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F3CB13] mb-4 drop-shadow-[0_0_8px_rgba(243,203,19,0.4)]">{title}</h1>
      {subtitle && <h2 className="text-xl md:text-2xl text-gray-300 mb-12">{subtitle}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg mt-4 w-full max-w-3xl">
        {author && <p className="text-gray-400 text-right">{author}</p>}
        {supervisor && <p className="text-gray-400 text-left">{supervisor}</p>}
      </div>
    </div>
  );
};

export default TitleSlide;
