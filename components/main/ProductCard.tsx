"use client";
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductCard = ({ product }: { product: any }) => (
  <div className="flex flex-col items-center group px-2 pb-10">
    <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden cursor-pointer">
      <Image
        src={product.img}
        alt={product.name}
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-contain transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    
    <h3 className="text-gray-800 text-lg font-medium mb-2 text-center line-clamp-1">
      {product.name}
    </h3>
    
    <div className="flex items-center text-[#1a8a77] font-bold text-xl mb-6">
      <span>{product.price}</span>
      <span className="ml-2 text-2xl font-serif">﷼</span>
    </div>

    <button className="w-full border border-black py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-black text-black hover:text-white transition-all duration-300">
      {product.price.includes('-') ? 'Select Options' : 'Add to Cart'}
    </button>
  </div>
);

export default function ProductCarousel({ products }: { products: any[] }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const [init, setInit] = useState(false);

  if (!products || products.length === 0) return null;

  return (
    <section className="bg-white px-4 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          // Use the refs for unique identification
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{ 
            el: paginationRef.current,
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-gray-300 !opacity-100 !w-2 !h-2 !mx-1',
            bulletActiveClass: '!bg-gray-900',
          }}
          // Re-run initialization when refs are assigned
          onSwiper={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.params.pagination.el = paginationRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
            swiper.pagination.init();
            swiper.pagination.render();
            swiper.pagination.update();
            setInit(true);
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper !static"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows with Refs */}
        <button 
          ref={prevRef}
          className="absolute cursor-pointer left-[-60px] top-[40%] -translate-y-1/2 z-30 p-2 text-gray-300 hover:text-black transition-colors hidden xl:block disabled:opacity-0"
        >
          <ChevronLeft size={56} strokeWidth={1} />
        </button>
        <button 
          ref={nextRef}
          className="absolute cursor-pointer right-[-60px] top-[40%] -translate-y-1/2 z-30 p-2 text-gray-300 hover:text-black transition-colors hidden xl:block disabled:opacity-0"
        >
          <ChevronRight size={56} strokeWidth={1} />
        </button>

        {/* Pagination Dots with Ref */}
        <div ref={paginationRef} className="flex justify-center mt-10 space-x-2"></div>

      </div>
    </section>
  );
}