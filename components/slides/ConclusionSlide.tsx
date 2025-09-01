import React from 'react';

interface ConclusionSlideProps {
  title: string;
  conclusion: string;
  takeaways: string[];
  contact: string;
}

const ConclusionSlide: React.FC<ConclusionSlideProps> = ({ title, conclusion, takeaways, contact }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1F9632] mb-8 pb-4 border-b-2 border-[#F3CB13]/20">{title}</h2>

      <div className="bg-slate-900/40 border border-slate-700 p-6 rounded-lg text-lg md:text-xl text-gray-300 leading-relaxed">
        {conclusion}
      </div>

      <h3 className="mt-8 text-2xl font-bold text-[#F3CB13]">أبرز النقاط المستفادة</h3>
      <ul className="mt-4 space-y-4 text-lg md:text-xl text-gray-300">
        {takeaways.map((takeaway, index) => (
          <li key={index} className="flex items-start">
            <span className="text-[#F3CB13] font-bold mr-4 rtl:ml-4 rtl:mr-0 text-2xl">•</span>
            <p>{takeaway}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10 text-center">
        <div className="inline-block bg-slate-900/40 border border-slate-700 px-6 py-4 rounded-full text-white font-semibold shadow">
          {contact}
        </div>
      </div>
    </div>
  );
};

export default ConclusionSlide;