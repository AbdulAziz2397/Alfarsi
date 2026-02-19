import React from 'react';
import Image from 'next/image';

export default function ClocksFeature() {
  return (
    <section className="relative w-full min-h-[500px] md:h-[600px] flex items-center overflow-hidden bg-[#f3f4f6]">
      {/* --- BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/clocks-background.jpg" // Replace with your actual background image
          alt="Alfajr Clock Collection"
          fill
          className="object-cover object-right md:object-center"
          priority
        />
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex justify-center md:justify-start">
          
          {/* --- CTA BOX --- */}
          <div className="bg-[#1a7a5a] text-white p-8 md:p-12 max-w-[450px] w-full shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Clocks.
            </h2>
            
            {/* Custom Divider Line */}
            <div className="w-12 h-[2px] bg-[#4ade80] mb-8 opacity-50"></div>

            <p className="text-sm md:text-base leading-relaxed mb-10 font-light opacity-90">
              We provide you with a variety of options with 
              several features that make it easy for you to 
              know prayer times in all Cities of the world
            </p>

            <button className="px-8 py-3 border-2 border-white rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-[#1a7a5a] cursor-pointer">
              Shop Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};