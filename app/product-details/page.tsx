"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    ChevronUp,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Facebook,
    Twitter,
    Mail,
    Linkedin,
    Send,
    Check
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const productData = {
    id: "6281106032339",
    name: "Wall Clock CR-23 Makkah",
    price: 380,
    currency: "﷼",
    description: "Rounded Wall Clock, Analog with LCD to display Athan time and date, multiple Athan sound (Makkah, Medina, Quds, Egypt and Riyadh)",
    modelNumber: "CR-23 Makkah",
    stockStatus: "In stock",
    category: ["Analog Clocks", "Clocks"],
    images: [
        "/assets/images/Black-Bord-clock.webp",
        "/assets/images/Black-Bord-clock.webp",
        "/assets/images/Black-Bord-clock.webp",
        "/assets/images/Black-Bord-clock.webp",
        "/assets/images/Black-Bord-clock.webp",
        "/assets/images/Black-Bord-clock.webp",
    ]
};

export default function ProductDetails() {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const [quantity, setQuantity] = useState(1);
    const [direction, setDirection] = useState<'vertical' | 'horizontal'>('vertical');

    // Handle Responsive Direction for Thumbnails
    useEffect(() => {
        const handleResize = () => {
            setDirection(window.innerWidth < 768 ? 'horizontal' : 'vertical');
        };
        handleResize(); // Init
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Precision Zoom Logic - Works strictly where mouse is
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const container = e.currentTarget;
        const image = container.querySelector('img') as HTMLImageElement;
        if (!image) return;

        const { left, top, width, height } = container.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        image.style.transformOrigin = `${x}% ${y}%`;
        image.style.transform = "scale(2.5)";
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const image = e.currentTarget.querySelector('img') as HTMLImageElement;
        if (image) {
            image.style.transform = "scale(1)";
            image.style.transformOrigin = "center center";
        }
    };

    return (
        <section className="bg-white min-h-screen py-4 md:py-8 px-4 md:px-8 xl:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumbs */}
                <nav className="text-[10px] md:text-xs text-gray-400 mb-6 flex items-center gap-2 uppercase tracking-widest overflow-x-auto whitespace-nowrap">
                    <span>Home</span> / <span>Clocks</span> / <span className="text-gray-800 font-medium">{productData.name}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* --- LEFT: Image Gallery --- */}
                    <div className="lg:col-span-7 flex flex-col md:flex-row gap-4 md:gap-6">

                        {/* Sidebar Thumbnails */}
                        <div className="relative w-full md:w-24 order-2 md:order-1">
                            <button className="prev-thumb hidden md:flex mb-2 text-gray-400 hover:text-teal-600 justify-center w-full">
                                <ChevronUp size={24} />
                            </button>

                            <Swiper
                                onSwiper={setThumbsSwiper}
                                direction={direction}
                                spaceBetween={10}
                                slidesPerView={4}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                navigation={{
                                    nextEl: '.next-thumb',
                                    prevEl: '.prev-thumb',
                                }}
                                className="h-24 md:h-[450px] w-full thumb-container"
                            >
                                {productData.images.map((img, idx) => (
                                    <SwiperSlide key={idx} className="cursor-pointer">
                                        <div className="relative aspect-square w-full rounded-full overflow-hidden border border-gray-100 bg-gray-50 group">
                                            <Image src={img} alt="thumb" fill className="object-cover p-2" />
                                            <div className="absolute inset-0 bg-white/50 transition-opacity duration-300 group-[.swiper-slide-thumb-active]:opacity-0" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <button className="next-thumb hidden md:flex mt-2 text-gray-400 hover:text-teal-600 justify-center w-full">
                                <ChevronDown size={24} />
                            </button>

                            {/* Mobile Navigation Arrows for Thumbnails */}
                            <div className="flex md:hidden justify-center gap-4 mt-2">
                                <button className="prev-thumb cursor-pointer p-1 text-gray-400"><ChevronLeft size={20} /></button>
                                <button className="next-thumb cursor-pointer p-1 text-gray-400"><ChevronRight size={20} /></button>
                            </div>
                        </div>

                        {/* Main Display */}
                        <div className="relative flex-1 aspect-square bg-[#f9f9f9] overflow-hidden border border-gray-50 group order-1 md:order-2">
                            <Swiper
                                spaceBetween={0}
                                navigation={{
                                    nextEl: '.main-next',
                                    prevEl: '.main-prev',
                                }}
                                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                modules={[Navigation, Thumbs]}
                                className="h-full w-full"
                                allowTouchMove={true} // Allow swipe on mobile
                            >
                                {productData.images.map((img, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div
                                            className="relative w-full h-full overflow-hidden md:cursor-zoom-in"
                                            onMouseMove={handleMouseMove}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <div className="relative w-full h-full transition-transform duration-200 ease-out">
                                                <Image
                                                    src={img}
                                                    alt="Product"
                                                    fill
                                                    priority
                                                    className="object-contain p-6 md:p-12 pointer-events-none md:pointer-events-auto"
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Main Arrows (Hidden on Mobile) */}
                            <button className="main-prev cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-400 hover:text-black hidden md:block opacity-0 group-hover:opacity-100 transition-all">
                                <ChevronLeft size={36} strokeWidth={1} />
                            </button>
                            <button className="main-next cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-400 hover:text-black hidden md:block opacity-0 group-hover:opacity-100 transition-all">
                                <ChevronRight size={36} strokeWidth={1} />
                            </button>
                        </div>
                    </div>

                    {/* --- RIGHT: Product Info --- */}
                    <div className="lg:col-span-5 flex flex-col">
                        <h1 className="text-2xl md:text-4xl font-medium text-[#333] mb-3 md:mb-4 tracking-tight">
                            {productData.name}
                        </h1>

                        <div className="flex items-center text-xl md:text-2xl font-bold text-[#1a8a77] mb-6 md:mb-8">
                            <span>{productData.price}</span>
                            <span className="ml-1 font-serif text-2xl md:text-3xl">{productData.currency}</span>
                        </div>

                        <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 border-t border-gray-100 pt-6 md:pt-8">
                            {productData.description}
                        </p>

                        <div className="text-xs md:text-sm font-medium text-gray-800 mb-6 flex items-center gap-2">
                            <span className="text-black font-normal uppercase tracking-wider text-[10px]">Model Number:</span>
                            {productData.modelNumber}
                        </div>

                        <div className="flex items-center gap-2 text-[#1a8a77] text-xs md:text-sm font-bold mb-8">
                            <Check size={16} />
                            {productData.stockStatus}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 md:mb-10">
                            <div className="flex items-center border border-gray-200 h-12 w-full sm:w-auto justify-between">
                                <button
                                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                    className="px-3 cursor-pointer h-full hover:bg-gray-50 text-gray-500 transition-colors"
                                >-</button>
                                <input
                                    type="number"
                                    value={quantity}
                                    readOnly
                                    className="w-12 text-center font-bold text-sm outline-none bg-transparent"
                                />
                                <button
                                    onClick={() => setQuantity(q => q + 1)}
                                    className="px-3 cursor-pointer h-full hover:bg-gray-50 text-gray-500 transition-colors"
                                >+</button>
                            </div>

                            <button className="flex-1 w-full p-4 bg-[#1a8a77] hover:bg-[#146e5f] text-white font-bold h-12 uppercase tracking-[0.2em] text-[10px] md:text-xs transition-all shadow-sm">
                                Add to Cart
                            </button>
                        </div>

                        {/* Meta */}
                        <div className="space-y-4 pt-8 border-t border-gray-100 text-[11px] uppercase tracking-widest text-gray-400">
                            <div className="flex items-center">
                                <span className="text-black font-bold w-24">SKU:</span>
                                <span className="text-black transition-colors">{productData.id}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-black font-bold w-24">Categories:</span>
                                <span className="text-black transition-colors cursor-pointer">{productData.category.join(', ')}</span>
                            </div>

                            <div className="flex items-center gap-4 pt-4 border-t border-gray-50 mt-4">
                                <span className="text-black font-bold w-24">Share:</span>
                                <div className="flex gap-5 text-gray-500">
                                    <Facebook size={16} className="hover:text-blue-600 cursor-pointer transition-colors" />
                                    <Twitter size={16} className="hover:text-sky-500 cursor-pointer transition-colors" />
                                    <Mail size={16} className="hover:text-red-500 cursor-pointer transition-colors" />
                                    <Linkedin size={16} className="hover:text-blue-700 cursor-pointer transition-colors" />
                                    <Send size={16} className="hover:text-teal-500 cursor-pointer transition-colors" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .swiper-pagination { display: none !important; }
                .thumb-container .swiper-slide-thumb-active div div {
                    opacity: 0 !important;
                }
                @media (min-width: 768px) {
                    .thumb-container { height: 450px !important; }
                }
            `}</style>
        </section>
    );
}