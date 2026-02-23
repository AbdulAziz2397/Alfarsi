import DividerIcon from '@/public/assets/icons/DividerIcon';
import React from 'react';

export default function CollectionFeature() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* --- MAIN HEADING --- */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#003d4d] mb-4 tracking-tight">
          360 Collection - elegance and harmony
        </h2>

        {/* --- CUSTOM DIVIDER --- */}
        {/* This mimics the decorative line with the octagonal star icon */}
        <div className="flex items-center w-full max-w-[400px] my-6">
          <DividerIcon />
        </div>

        {/* --- DESCRIPTION TEXT --- */}
        <p className="text-[#333333] text-sm md:text-base leading-relaxed max-w-2xl font-light">
          The 360 series of alfajr are equipped with hands and a digital display showing 
          the date and prayer times, made of 316 Stainless steel, anti-reflective 
          sapphire crystal, with a steel strap or genuine leather strap.
        </p>

      </div>
    </section>
  );
};

