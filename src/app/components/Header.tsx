'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={
                scrolled
                    ? "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center justify-between gap-4 top-6 w-[calc(100%-2rem)] max-w-[650px] bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-lg ring-1 ring-black/5"
                    : "fixed left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-4 md:px-8 py-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-transparent w-full max-w-[100vw] top-0 border-transparent rounded-none"
            }
        >
            <div className="flex items-center gap-0.5 group cursor-pointer shrink-0">
                {/* Logo Wrapper: maintains 40px layout size but renders image at 80px for sharpness */}
                <div className="relative w-10 h-10 flex items-center justify-center">
                    <img
                        src="/logo.svg"
                        alt="Logo"
                        className="absolute w-20 h-20 max-w-none object-contain"
                    />
                </div>

                <span className={`font-semibold text-[#171717] tracking-tight whitespace-nowrap transition-all duration-300 ${scrolled ? 'text-lg opacity-100' : 'text-xl'}`}>
                    Tobi Israel
                </span>
            </div>

            {/* Nav with forced spacing using direct classes instead of template literals for gap reliability */}
            {/* Added explicit ml-12 for non-scrolled state */}
            {/* Centered Nav Links - Hidden on mobile */}
            <nav className="hidden md:flex items-center gap-6">
                <Link href="#about" className="text-sm font-medium text-[#171717] hover:opacity-60 transition-opacity whitespace-nowrap">
                    About
                </Link>
                <Link href="#techstack" className="text-sm font-medium text-[#171717] hover:opacity-60 transition-opacity whitespace-nowrap">
                    Stack
                </Link>
                <Link href="#works" className="text-sm font-medium text-[#171717] hover:opacity-60 transition-opacity whitespace-nowrap">
                    Works
                </Link>
                <Link href="#testimonials" className="text-sm font-medium text-[#171717] hover:opacity-60 transition-opacity whitespace-nowrap">
                    Testimonials
                </Link>
            </nav>

            {/* CTA Button - Separate Item */}
            <div>
                <Link href="#contact" className={`bg-[#171717] text-white no-underline rounded-full font-medium transition-transform duration-300 hover:scale-105 hover:bg-black whitespace-nowrap ${scrolled ? 'px-6 py-2.5 text-sm' : 'px-6 py-2.5 text-sm'}`}>
                    Let's Talk
                </Link>
            </div>
        </header>
    );
};

export default Header;
