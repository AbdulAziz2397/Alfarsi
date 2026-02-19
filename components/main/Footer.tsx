import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export default function Footer(){
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: ['City Setting', 'User Guide', 'FAQs', 'Store Locator', 'Track Your Order'],
    helpLinks: ['Exchange Return Policy', 'Shipping and Delivery Policy', 'Terms and Conditions', 'Privacy Policy', 'Contact us']
  };

  return (
    <footer className="relative w-full bg-[#1a7a5a] text-white pt-16 pb-8 overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/path-to-your-pattern.png')] bg-repeat" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">ALFAJR TRADING Company</h3>
            <div className="text-sm space-y-4 font-light opacity-90">
              <p>8004 Prince Talal Street Al Khobar Al Shamaliah</p>
              <p>Khobar, 34425, Saudi Arabia</p>
              <p className="pt-4 font-medium">Working Hours: Sun to Thu 8:00am - 2:00pm</p>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link} className="flex items-center group">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <Link href="#" className="text-sm font-light opacity-90 hover:opacity-100 hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Help Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Help Links</h3>
            <ul className="space-y-3">
              {footerLinks.helpLinks.map((link) => (
                <li key={link} className="flex items-center group">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <Link href="#" className="text-sm font-light opacity-90 hover:opacity-100 hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">Follow Us</h3>
            <p className="text-sm font-light opacity-90 mb-6 leading-relaxed">
              We appreciate if you follow us in social media, so that you are always aware of latest launches & updates from ALFAJR.
            </p>
            <div className="flex space-x-5">
              <Link href="#" className="hover:scale-110 transition-transform"><Facebook size={24} strokeWidth={1.5} /></Link>
              <Link href="#" className="hover:scale-110 transition-transform"><Twitter size={24} strokeWidth={1.5} /></Link>
              <Link href="#" className="hover:scale-110 transition-transform"><Youtube size={24} strokeWidth={1.5} /></Link>
              <Link href="#" className="hover:scale-110 transition-transform"><Instagram size={24} strokeWidth={1.5} /></Link>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-light opacity-80 order-2 md:order-1">
            Alfajr Trading Co. © {currentYear}. All rights reserved
          </p>

          {/* Payment Methods */}
          <div className="flex flex-wrap items-center justify-center gap-2 order-1 md:order-2">
            {/* These would be small payment logo images in a real project */}
            <div className="bg-white/10 px-2 py-1 rounded text-[10px] font-bold">VAT</div>
            <div className="bg-white/10 px-2 py-1 rounded text-[10px] font-bold">MADA</div>
            <div className="bg-white/10 px-2 py-1 rounded text-[10px] font-bold">VISA</div>
            <div className="bg-white/10 px-2 py-1 rounded text-[10px] font-bold">PAY</div>
          </div>
        </div>
      </div>

      {/* Floating Chat Icon (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 cursor-pointer hover:scale-110 transition-transform">
        <div className="bg-white p-3 rounded-full shadow-lg">
          <svg className="w-6 h-6 text-[#1a7a5a]" fill="currentColor" viewBox="0 0 24 24">
             <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </div>
      </div>
    </footer>
  );
};