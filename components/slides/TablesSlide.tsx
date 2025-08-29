
import React from 'react';
import type { TableData } from '../../types';

interface TablesSlideProps {
  title: string;
  description?: string;
  tables?: TableData[];
}

const TablesSlide: React.FC<TablesSlideProps> = ({ title, description, tables }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <h2 className="text-3xl md:text-4xl font-bold text-[#F3CB13] mb-2">{title}</h2>
      {description && <p className="text-gray-400 mb-6">{description}</p>}
      <div className="flex-grow overflow-y-auto pr-4 -mr-4">
        <div className="space-y-6">
          {tables?.map((table, index) => (
            <div key={index} className="bg-slate-900/40 border border-slate-700 p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-3 text-[#F3CB13]/90">{table.title}</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-right text-sm">
                  <thead className="bg-slate-900/70">
                    <tr>
                      {table.headers.map((header, i) => (
                        <th key={i} className="p-2 font-semibold whitespace-nowrap">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {table.rows.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-700/70 transition-colors">
                        {row.map((cell, j) => (
                          <td key={j} className="p-2 whitespace-nowrap">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 pt-3 border-t border-slate-700 text-sm text-[#1F9632]/80 italic font-medium">{table.analysis}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TablesSlide;
