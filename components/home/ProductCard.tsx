"use client";
import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
  { id: 1, name: 'Premier 360 Silver', price: '1,160 - 1,215', img: '/assets/images/p-1.webp' },
  { id: 2, name: 'Premier 360 Leather Gold', price: '1,120 - 1,170', img: '/assets/images/p-2.webp' },
  { id: 3, name: 'Premier 360 Gold', price: '1,300 - 1,360', img: '/assets/images/p-1.webp' },
  { id: 4, name: 'Premier 360 Leather', price: '1,050 - 1,100', img: '/assets/images/p-2.webp' },
  { id: 5, name: 'Premier 360 Black', price: '1,200 - 1,250', img: '/assets/images/p-1.webp' },
];

const ProductCard = ({ product }) => (
  <div className="flex flex-col items-center group px-2 pb-10">
    <div className="relative w-full aspect-[4/5] mb-6 transition-transform duration-500 group-hover:scale-105 cursor-pointer">
      <Image
        src={product.img}
        alt={product.name}
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-contain"
      />
    </div>
    
    <h3 className="text-gray-800 text-lg font-medium mb-2 text-center">{product.name}</h3>
    
    <div className="flex items-center text-[#1a8a77] font-bold text-xl mb-6">
      <span>{product.price}</span>
      <span className="ml-2 text-2xl font-serif">﷼</span>
    </div>

    <button className="w-full border border-black py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-black text-black hover:text-white transition-all duration-300 cursor-pointer">
      Select Options
    </button>
  </div>
);

export default function ProductCarousel() {
  return (
    <section className="bg-white py-20 px-4 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto relative group">
        
        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ 
            clickable: true,
            el: '.swiper-pagination-custom',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- Custom Navigation --- */}
        <button className="swiper-button-prev-custom absolute left-[-40px] top-[40%] -translate-y-1/2 z-20 p-2 text-gray-300 hover:text-black transition-colors cursor-pointer hidden xl:block">
          <ChevronLeft size={48} strokeWidth={1} />
        </button>
        <button className="swiper-button-next-custom absolute right-[-40px] top-[40%] -translate-y-1/2 z-20 p-2 text-gray-300 hover:text-black transition-colors cursor-pointer hidden xl:block">
          <ChevronRight size={48} strokeWidth={1} />
        </button>

        {/* --- Custom Pagination Dots --- */}
        <div className="swiper-pagination-custom flex justify-center space-x-3 mt-10"></div>

        {/* Footer Button */}
        <div className="flex justify-center mt-12">
          <button className="px-12 py-3 border border-gray-300 rounded-full text-xs font-semibold text-gray-600 hover:border-black hover:text-black transition-all cursor-pointer uppercase tracking-wider">
            Discover all watches
          </button>
        </div>
      </div>

      {/* Global override for Swiper Pagination Bullet color */}
      <style jsx global>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          width: 8px;
          height: 8px;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: #111827;
        }
      `}</style>
    </section>
  );
}