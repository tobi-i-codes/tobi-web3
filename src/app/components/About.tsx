
'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Marquee } from './Marquee';
import SectionHeader from './SectionHeader';



import Image from 'next/image';

const LOGOS = [
    { type: "text", name: "Eniola" },
    { type: "image", name: "Tolu Aina", src: "/logo/tolu-aina.png", size: "h-14 md:h-16" },
    { type: "image", name: "Thinktech", src: "/logo/thinktech-logo.b018a2fa.svg" },
    { type: "image", name: "Rare UI", src: "/logo/rare-ui.svg", size: "h-16 md:h-20" },
    { type: "image", name: "Oyin x Timi", src: "/logo/oyin-timi.svg", size: "h-12 md:h-14" },
    { type: "image", name: "Reckon", src: "/logo/reckon.svg" },
];

const CIRCLE_DIAMETER = 2000;
const CIRCLE_RADIUS = CIRCLE_DIAMETER / 2;

const About = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const [arcTop, setArcTop] = useState(-1200); // Adjusted default fallback for image presence

    useEffect(() => {
        const calculateArcPosition = () => {
            if (!sectionRef.current || !headingRef.current) return;

            const sectionRect = sectionRef.current.getBoundingClientRect();
            const headingRect = headingRef.current.getBoundingClientRect();

            // Get computed line height to calculate number of lines
            const computedStyle = window.getComputedStyle(headingRef.current);
            const fontSize = parseFloat(computedStyle.fontSize);
            const rawLineHeight = computedStyle.lineHeight;

            // lineHeight might be "normal" or a pixel value - handle both
            let lineHeight: number;
            if (rawLineHeight === 'normal') {
                lineHeight = fontSize * 1.2;
            } else {
                lineHeight = parseFloat(rawLineHeight);
            }

            // Calculate approximate number of lines
            const numberOfLines = Math.round(headingRect.height / lineHeight);

            // Target the space between the first and second line
            // Line 1 ends at approximately 1 * lineHeight
            const targetLinePosition = 0.9 * lineHeight;

            // Calculate absolute position relative to section
            const targetY = (headingRect.top - sectionRect.top) + targetLinePosition;

            // Position circle so its TOP edge (the visible arch) is at targetY
            // We want the convex "arch" (n-shape), so we position the circle downwards
            const newArcTop = targetY;

            // Debug logging
            console.log('Arc Debug:', { fontSize, rawLineHeight, lineHeight, numberOfLines, headingHeight: headingRect.height, targetLinePosition, targetY, newArcTop });

            setArcTop(newArcTop);
        };

        // Calculate on mount
        calculateArcPosition();

        // Recalculate on resize
        window.addEventListener('resize', calculateArcPosition);

        // Also recalculate after fonts load
        document.fonts?.ready?.then(calculateArcPosition);

        return () => window.removeEventListener('resize', calculateArcPosition);
    }, []);

    return (
        <section ref={sectionRef} id="about" className="relative w-full pt-12 pb-12 overflow-hidden">
            {/* Navigational Section Header */}
            <SectionHeader title="ABOUT" number="(001)" />

            {/* Personal Studio Pic - Moved before Arc */}
            <div className="relative w-full max-w-[500px] mx-auto -mb-12 pointer-events-none select-none z-10">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/tobi-pict.webp" />
                    <img
                        src="/tobi-pic.webp"
                        alt="Tobi Israel"
                        className="w-full h-auto object-contain relative z-10"
                    />
                </picture>
                {/* Bottom Blur/Fade to Background */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f5f5f5] via-[#f5f5f5]/80 to-transparent z-20" />
            </div>

            {/* Brand Arc: Dynamically positioned circle */}
            <div
                className="absolute left-1/2 -translate-x-1/2 rounded-full border border-black/10 z-0 pointer-events-none transition-[top] duration-300"
                style={{
                    width: `${CIRCLE_DIAMETER}px`,
                    height: `${CIRCLE_DIAMETER}px`,
                    top: `${arcTop}px`
                }}
            />

            {/* Airy Container */}
            <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">

                {/* Typographic Core: Weight-Pairing Technique */}
                <h2 ref={headingRef} className="text-3xl md:text-5xl md:leading-[1.15] tracking-tight text-[#171717]">
                    Over the years, I&apos;ve built <span className="font-bold text-black">production-ready web3, web and mobile applications</span>,
                    contributed to <span className="font-bold text-black">high-performance</span> projects that help businesses grow,
                    scale, and connect with their audiences.
                </h2>

                <p className="mt-8 text-xl md:text-2xl text-neutral-500 font-light leading-relaxed max-w-2xl mx-auto">
                    I have worked with <span className="font-medium text-neutral-800">startups</span>, companies in tech, finance, and e-commerce,
                    delivering <span className="font-medium text-neutral-800">balanced design</span> and robust code.
                </p>

                {/* Micro-Interaction Button */}
                <div className="mt-12 md:mt-16">
                    <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#171717] text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <span className="relative z-10 font-medium text-sm">Read more</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                        <div className="absolute inset-0 bg-neutral-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                    </button>
                </div>
            </div>



            {/* Logo Marquee: Bottom Footer */}
            <div className="mt-16 w-full pt-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
                <Marquee className="[--duration:60s]" pauseOnHover>
                    {LOGOS.map((logo, i) => (
                        <div key={i} className="mx-8 md:mx-12 flex items-center">
                            {logo.type === "text" ? (
                                <span className="text-4xl md:text-5xl font-extrabold text-neutral-400 grayscale hover:grayscale-0 hover:text-black transition-colors duration-300 cursor-default">
                                    {logo.name}
                                </span>
                            ) : (
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className={`${logo.size || "h-8 md:h-10"} w-auto grayscale hover:grayscale-0 transition-all duration-300 cursor-default`}
                                />
                            )}
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default About;
