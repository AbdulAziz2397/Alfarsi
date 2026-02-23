"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import DividerIcon from '@/public/assets/icons/DividerIcon';



export default function BestSellerCarousel() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003d4d] uppercase tracking-widest mb-4">
            Best Seller
          </h2>
          
          {/* Decorative Divider */}
          <div className="flex items-center w-full max-w-[300px]">
            <DividerIcon />
          </div>
        </div>

        {/* --- SWIPER CAROUSEL --- */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ 
            clickable: true,
            el: '.best-seller-pagination'
          }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-16"
        >
          {bestSellers.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col items-center group">
                {/* Image Container */}
                <div className="relative w-full aspect-square mb-6 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <h3 className="text-gray-700 text-sm md:text-base font-medium mb-2 text-center h-12">
                  {item.name}
                </h3>
                
                <div className="flex items-center text-[#1a8a77] font-bold text-xl mb-6">
                  <span>{item.price}</span>
                  <span className="ml-2 text-2xl">﷼</span>
                </div>

                {/* Button */}
                <button className="w-full border border-black py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-black text-black hover:text-white transition-all duration-300 cursor-pointer">
                  Select Options
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Container */}
        <div className="best-seller-pagination flex justify-center space-x-2 mt-4"></div>
      </div>

      {/* Global CSS for dot colors */}
      <style jsx global>{`
        .best-seller-pagination .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
        }
        .best-seller-pagination .swiper-pagination-bullet-active {
          background: #111827;
        }
      `}</style>
    </section>
  );
}