"use client";
import React, { useState } from 'react';

export default function CollectionTabs() {
  const [activeTab, setActiveTab] = useState('PREMIER 360');

  const tabs = [
    'PREMIER 360',
    'THE LEGEND 360',
    'DYNAMIC 360',
    'LADY PREMIER 360'
  ];

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-8 py-5 rounded-xl text-xs font-bold tracking-widest transition-all duration-300 cursor-pointer border
                ${activeTab === tab 
                  ? 'bg-[#bc9f65] text-white border-[#bc9f65] shadow-lg scale-105' 
                  : 'bg-white text-black border-gray-300 hover:border-[#bc9f65] hover:text-[#bc9f65]'
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* --- OPTIONAL: Tab Content Area --- */}
        <div className="mt-16 text-center animate-in fade-in zoom-in duration-500">
          <h3 className="text-2xl font-light text-[#003d4d] uppercase tracking-widest">
            {activeTab}
          </h3>
          <p className="text-gray-500 mt-2">Displaying products for {activeTab}...</p>
        </div>
      </div>
    </section>
  );
};