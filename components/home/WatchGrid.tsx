import React from 'react';
import Image from 'next/image';

const WatchGrid = () => {
  const categories = [
    { 
      title: '360 COLLECTION', 
      img: '/watch-360.jpg', // Replace with your image
      className: 'md:col-span-2 md:row-span-2' 
    },
    { 
      title: 'CLASSIC WATCHES', 
      img: '/classic-watch.jpg', 
      className: 'md:col-span-1 md:row-span-1' 
    },
    { 
      title: 'LADIES WATCHES', 
      img: '/ladies-watch.jpg', 
      className: 'md:col-span-1 md:row-span-1' 
    },
    { 
      title: 'SPORT WATCHES', 
      img: '/sport-watch.jpg', 
      className: 'md:col-span-1 md:row-span-2' 
    },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-12 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        
        {/* --- CATEGORY CARDS --- */}
        {categories.map((cat, index) => (
          <div 
            key={index} 
            className={`relative group overflow-hidden bg-gray-100 min-h-[300px] ${cat.className}`}
          >
            <Image
              src={cat.img}
              alt={cat.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Dark Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            
            <div className="absolute bottom-6 left-6 z-10">
              <h3 className="text-white font-bold text-sm tracking-[0.2em] uppercase">
                {cat.title}
              </h3>
            </div>
          </div>
        ))}

        {/* --- DESCRIPTION / CTA CARD --- */}
        <div className="bg-[#1a7a5a] text-white p-10 flex flex-col justify-center md:col-span-1 md:row-span-2">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">
            Watches.
          </h2>
          
          <div className="w-8 h-[1px] bg-white/40 mb-6" />

          <p className="text-sm leading-relaxed mb-10 font-light">
            An elegant look for men's and women's watches designed with 
            great care and high attention to quality It has different 
            designs and features.
          </p>

          <button className="w-max px-8 py-2 border border-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#1a7a5a] transition-all cursor-pointer">
            Shop Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default WatchGrid;