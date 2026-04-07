
import React from 'react';
import { cn } from '@/lib/utils';

export interface TestimonialProps {
    quote: string;
    author: string;
    role: string;
    company?: string;
    avatar?: string;
    className?: string; // For additional styling if needed
}

export function TestimonialCard({
    quote,
    author,
    role,
    company,
    avatar,
    className
}: TestimonialProps) {
    return (
        <div className={cn(
            "relative flex flex-col justify-between w-[350px] md:w-[450px] p-8 rounded-2xl bg-white border border-black/5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)]",
            className
        )}>
            {/* Quote Icon (Decorative) */}
            <div className="absolute top-6 right-8 text-6xl font-serif text-neutral-100 select-none">
                &rdquo;
            </div>

            {/* Quote Text */}
            <blockquote className="relative z-10 text-lg font-medium leading-relaxed text-neutral-800 mb-8">
                &ldquo;{quote}&rdquo;
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-4 mt-auto">
                {avatar ? (
                    <img
                        src={avatar}
                        alt={author}
                        className="h-10 w-10 rounded-full object-cover bg-neutral-100 border border-neutral-200"
                    />
                ) : (
                    <div className="h-10 w-10 rounded-full bg-neutral-900 flex items-center justify-center text-white font-bold text-sm">
                        {author.charAt(0)}
                    </div>
                )}

                <div className="flex flex-col">
                    <span className="font-semibold text-sm text-[#171717]">
                        {author}
                    </span>
                    <span className="text-xs text-neutral-500">
                        {role} {company && <span>@ {company}</span>}
                    </span>
                </div>
            </div>
        </div>
    );
}
