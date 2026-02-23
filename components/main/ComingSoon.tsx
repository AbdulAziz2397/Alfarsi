"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Bell } from 'lucide-react';
import DividerIcon from '@/public/assets/icons/DividerIcon';

export default function ComingSoon() {
  return (
    <section className="bg-white py-24 px-6 min-h-[60vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

        {/* --- MAIN HEADING --- */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#003d4d] mb-4 tracking-tight uppercase">
          Coming Soon
        </h2>

        {/* --- CUSTOM DIVIDER (Your Theme Icon) --- */}
        <div className="flex items-center w-full max-w-[350px] my-4">
          <DividerIcon />
        </div>

        {/* --- DESCRIPTION TEXT --- */}
        <p className="text-[#333333] text-sm md:text-base leading-relaxed max-w-lg font-light mb-12">
          We are currently preparing our exclusive new series. 
          The same precision quality you expect 
          from Alfarsi is just around the corner.
        </p>

        {/* --- NOTIFY INPUT --- */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
          <input 
            type="email" 
            placeholder="Your Email Address" 
            className="w-full border-b border-gray-300 py-3 px-2 text-sm outline-none focus:border-[#003d4d] transition-colors bg-transparent placeholder:text-gray-400"
          />
          <button className="w-full cursor-pointer sm:w-auto bg-[#003d4d] text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-teal-800 transition-colors flex items-center justify-center gap-2">
            <Bell size={14} />
            Notify
          </button>
        </div>

        {/* --- BACK LINK --- */}
        <Link 
          href="/" 
          className="mt-16 flex items-center gap-2 text-[#003d4d] text-[10px] font-bold uppercase tracking-widest hover:text-teal-600 transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Collection
        </Link>

      </div>
    </section>
  );
}