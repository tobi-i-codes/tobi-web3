'use client';

import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { motion } from 'framer-motion';

export interface WorkCardProps {
    title: string;
    category: string;
    description: string;
    image: string;
    href?: string;
    className?: string;
    isOpenSource?: boolean;
    context?: { type: 'personal' } | { type: 'work'; organization: string } | { type: 'freelance' };
}

export function WorkCard({ title, category, description, image, href = "#", className, isOpenSource, context }: WorkCardProps) {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className={cn("relative overflow-visible", className)}
        >
            <Link
                ref={cardRef}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-black/10 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
                {/* Spotlight Effect on Hover */}
                {isHovered && (
                    <div
                        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
                        style={{
                            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(23, 23, 23, 0.03), transparent 40%)`,
                        }}
                    />
                )}

                {/* Image Container */}
                <div className="relative h-[320px] w-full overflow-hidden bg-neutral-100">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Image */}
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Category Badge - Top Left */}
                    <div className="absolute top-5 left-5 z-20">
                        <div className="px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-black/5 shadow-sm">
                            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                                {category}
                            </span>
                        </div>
                    </div>

                    {/* View Button - Top Right */}
                    <div className="absolute top-5 right-5 z-20 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#171717] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            >
                                <path d="M7 7h10v10" />
                                <path d="M7 17L17 7" />
                            </svg>
                        </div>
                    </div>

                    {/* Bottom Gradient for Text Readability */}
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-white z-10" />
                </div>

                {/* Content Container */}
                <div className="relative flex flex-1 flex-col px-7 sm:px-8 pt-5 pb-7 bg-white z-20">
                    {/* Title Row with Context Badge */}
                    <div className="flex justify-between items-start gap-4 mb-3">
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#171717] transition-colors duration-300">
                            {title}
                        </h3>

                        {/* Context Badges */}
                        <div className="flex flex-wrap items-center gap-2">
                            {isOpenSource && (
                                <div className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100/50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 18l6-6-6-6" />
                                        <path d="M15 12H3" />
                                        <circle cx="18" cy="12" r="3" />
                                    </svg>
                                    <span className="text-xs font-semibold whitespace-nowrap">Open Source</span>
                                </div>
                            )}

                            {context && (
                                <div className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-gray-500">
                                    {context.type === 'personal' ? (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                            <span className="text-xs font-medium whitespace-nowrap">Personal Project</span>
                                        </>
                                    ) : context.type === 'freelance' ? (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                                <rect width="20" height="14" x="2" y="6" rx="2" />
                                            </svg>
                                            <span className="text-xs font-medium whitespace-nowrap">Freelance</span>
                                        </>
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                                                <path d="M9 22v-4h6v4" />
                                                <path d="M8 6h.01" />
                                                <path d="M16 6h.01" />
                                                <path d="M12 6h.01" />
                                                <path d="M12 10h.01" />
                                                <path d="M12 14h.01" />
                                                <path d="M16 10h.01" />
                                                <path d="M16 14h.01" />
                                                <path d="M8 10h.01" />
                                                <path d="M8 14h.01" />
                                            </svg>
                                            <span className="text-xs font-medium whitespace-nowrap">Built at {context.organization}</span>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-base leading-relaxed text-neutral-500 line-clamp-2 mb-6">
                        {description}
                    </p>

                    {/* CTA Link */}
                    <div className="mt-auto flex items-center gap-3">
                        <span className="relative text-sm font-semibold text-[#171717] uppercase tracking-wide">
                            View Project
                            {/* Modern sliding underline on text only */}
                            <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-[#171717] group-hover:w-full transition-all duration-300 ease-out" />
                        </span>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-black/10 transition-all duration-300 group-hover:bg-[#171717] group-hover:border-[#171717] group-hover:scale-110">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                className="text-[#171717] transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5"
                            >
                                <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-neutral-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Link>
        </motion.div>
    );
}
