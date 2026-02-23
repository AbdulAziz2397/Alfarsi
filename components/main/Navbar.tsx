"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, User, ShoppingBag, Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import LoginDrawer from '../main/LoginDrawer';
import SearchDrawer from '../main/SearchDrawer';

export default function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
    const [isLoginDrawerOpen, setIsLoginDrawerOpen] = useState(false);
    const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false);

    const navLinks = [
        {
            name: 'Attars',
            href: '/attars',
        },
        {
            name: 'Perfumes',
            href: '/perfumes',
        },
        {
            name: 'Caps',
            href: '/caps',
        },
        {
            name: 'watches',
            href: '/watches',
            subMenu: [
                { name: 'Gents watches', href: '/watches/gents' },
                { name: 'Ladies watches', href: '/watches/ladies' },
            ]
        },
    ];

    const toggleSubMenu = (name: string) => {
       setExpandedMenu(prev => (prev === name ? null : name));
    };

    const hasSubMenu = (link: any) => link.subMenu && link.subMenu.length > 0;

    return (
        <nav className="bg-[#0a0c10] text-white px-4 md:px-6 xl:px-8 py-4 border-b border-gray-800 sticky top-0 z-50">
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isDrawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setIsDrawerOpen(false)}
            />

            <div className="container mx-auto flex items-center justify-between">
                {/* --- MOBILE: Hamburger --- */}
                <div className="lg:hidden flex w-1/3">
                    <button onClick={() => setIsDrawerOpen(true)} aria-label="Open Menu">
                        <Menu size={28} />
                    </button>
                </div>

                {/* --- DESKTOP: Left Navigation --- */}
                <div className="w-1/3 hidden lg:flex items-center flex-1 space-x-2 lg:space-x-4 xl:space-x-6 text-xs font-semibold text-nowrap">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group cursor-pointer">
                            <Link href={link.href} className="hover:text-gray-400 transition-colors flex items-center uppercase tracking-wider">
                                {link.name}
                                {/* FIX 1: Only show arrow if subMenu exists */}
                                {hasSubMenu(link) && <span className="ml-1 text-[8px]">▼</span>}
                            </Link>

                            {/* FIX 2: Only render dropdown container if subMenu exists */}
                            {hasSubMenu(link) && (
                                <div className="absolute top-full left-0 pt-4 hidden group-hover:block">
                                    <div className="bg-white text-gray-900 shadow-xl py-4 w-48 border-t-2 border-teal-600">
                                        {link.subMenu?.map((sub) => (
                                            <Link key={sub.name} href={sub.href} className="block px-6 py-2 hover:bg-gray-100 text-xs font-semibold">
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* --- LOGO --- */}
                <div className="flex flex-col items-center flex-1">
                    <Link href='/' className="flex items-center">
                        <span className="text-xl md:text-2xl font-bold tracking-tighter">Alfarsi</span>
                        <div className="flex items-center">
                            <span className="text-2xl md:text-3xl font-serif text-white ml-2">الفارسی</span>
                            <div className="w-2 h-2 bg-orange-600 rounded-full mb-4 -ml-1"></div>
                        </div>
                    </Link>
                </div>

                {/* --- RIGHT SIDE: Actions --- */}
                <div className="w-1/3 flex items-center justify-end space-x-4 md:space-x-6 flex-1">
                    <div className="hidden md:flex items-center space-x-6">
                        <button onClick={() => setIsLoginDrawerOpen(true)}>
                            <User size={22} className="cursor-pointer hover:text-teal-500 transition-colors" />
                        </button>
                        <button onClick={() => setIsSearchDrawerOpen(true)}>
                            <Search size={22} className="cursor-pointer hover:text-teal-500 transition-colors" />
                        </button>
                    </div>
                    <div className="relative cursor-pointer">
                        <ShoppingBag size={22} />
                        <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">0</span>
                    </div>
                </div>
                <LoginDrawer isOpen={isLoginDrawerOpen} setIsOpen={setIsLoginDrawerOpen} />
                <SearchDrawer isOpen={isSearchDrawerOpen} setIsOpen={setIsSearchDrawerOpen} />
            </div>

            {/* --- MOBILE SIDE DRAWER --- */}
            <div className={`
                fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white text-gray-900 z-[60] shadow-2xl
                transition-transform duration-300 ease-in-out flex flex-col
                ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="Search for products"
                            className="w-full text-sm outline-none placeholder:text-gray-400 pr-10"
                        />
                        <Search size={20} className="absolute right-0 top-0 text-gray-400" />
                    </div>
                    <button onClick={() => setIsDrawerOpen(false)} className="ml-4 text-gray-400 hover:text-gray-600">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {navLinks.map((link) => (
                        <div key={link.name} className="border-b border-gray-50">
                            {!hasSubMenu(link) ? (
                                <Link
                                    href={link.href}
                                    onClick={() => setIsDrawerOpen(false)}
                                    className="block p-6 text-sm font-bold tracking-widest text-[#003d4d] hover:bg-gray-50"
                                >
                                    {link.name.toUpperCase()}
                                </Link>
                            ) : (
                                <>
                                    <button
                                        onClick={() => toggleSubMenu(link.name)}
                                        className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors group"
                                    >
                                        <span className={`text-sm font-bold tracking-widest transition-colors uppercase ${expandedMenu === link.name ? 'text-teal-600' : 'text-[#003d4d]'}`}>
                                            {link.name}
                                        </span>
                                        {expandedMenu === link.name ?
                                            <ChevronDown size={18} className="text-teal-600" /> :
                                            <ChevronRight size={18} className="text-gray-300 group-hover:text-gray-500" />
                                        }
                                    </button>
                                    
                                    <div className={`
                                        bg-gray-50 overflow-hidden transition-all duration-300 ease-in-out
                                        ${expandedMenu === link.name ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
                                    `}>
                                        
                                        {link.subMenu?.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                onClick={() => setIsDrawerOpen(false)}
                                                className="block py-4 px-10 text-xs font-semibold text-gray-600 hover:text-teal-600 hover:pl-11 transition-all"
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                <div className="p-8 bg-gray-50 border-t border-gray-100 flex items-center justify-center space-x-4">
                    <User size={20} className="text-gray-400" />
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">My Account</span>
                </div>
            </div>
        </nav>
    );
}