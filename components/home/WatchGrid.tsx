import React from 'react';
import Image from 'next/image';

const WatchGrid = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-12 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-2 lg:gap-3">
        
        {/* 1. Large Feature Card (3/6 columns) */}
        <div className="relative md:col-span-3 md:row-span-2 group overflow-hidden min-h-[300px] md:min-h-[500px]">
          <Image
            src="/assets/images/cat_360_collection.webp"
            alt="360 Collection"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-8 left-8 z-10">
            <h3 className="text-white font-bold text-sm lg:text-base tracking-[0.2em] uppercase">
              360 COLLECTION
            </h3>
          </div>
        </div>

        {/* 2. Middle Column: Stacked items (1/6 columns) */}
        <div className="md:col-span-1 flex flex-col gap-2 lg:gap-3">
          {/* Classic Watches */}
          <div className="relative flex-1 group overflow-hidden min-h-[200px]">
            <Image
              src="/assets/images/cat_classic_collection.webp"
              alt="Classic Watches"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 z-10">
              <h3 className="text-white font-bold text-[10px] lg:text-xs tracking-[0.15em] uppercase leading-tight">
                CLASSIC<br/>WATCHES
              </h3>
            </div>
          </div>
          {/* Ladies Watches */}
          <div className="relative flex-1 group overflow-hidden min-h-[200px]">
            <Image
              src="/assets/images/cat_ladies_collection.webp"
              alt="Ladies Watches"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 z-10">
              <h3 className="text-white font-bold text-[10px] lg:text-xs tracking-[0.15em] uppercase leading-tight">
                LADIES<br/>WATCHES
              </h3>
            </div>
          </div>
        </div>

        {/* 3. Tall Sport Card (1/6 columns) */}
        <div className="relative md:col-span-1 md:row-span-2 group overflow-hidden min-h-[400px]">
          <Image
            src="/assets/images/cat_sport_collection.webp"
            alt="Sport Watches"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-6 z-10">
            <h3 className="text-white font-bold text-[10px] lg:text-xs tracking-[0.15em] uppercase leading-tight">
              SPORT<br/>WATCHES
            </h3>
          </div>
        </div>

        {/* 4. Green Description Card (1/6 columns) */}
        <div className="bg-[#1a7a5a] text-white p-6 lg:p-8 flex flex-col justify-center md:col-span-1 md:row-span-2 min-h-[400px]">
          <h2 className="text-3xl lg:text-4xl font-bold mb-2 tracking-tight">
            Watches.
          </h2>
          
          <div className="w-10 h-[1.5px] bg-teal-300/50 mb-6" />

          <p className="text-[13px] lg:text-sm leading-relaxed mb-10 font-light opacity-90">
            An elegant look for men's and women's watches designed with 
            great care and high attention to quality. It has different 
            designs and features.
          </p>

          <button className="w-full lg:w-max px-6 py-3 border border-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#1a7a5a] transition-all duration-300">
            Shop Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default WatchGrid;