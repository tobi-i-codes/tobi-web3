import React from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
    title: string;
    src: string;
    badge?: string;
    color?: string; // Background color/gradient class
    headline?: string;
}

const ProjectCard = ({ title, src, badge = "Showcase", color = "bg-zinc-900", headline }: ProjectCardProps) => {
    return (
        <div className={cn(
            "w-[280px] h-[200px] md:w-[360px] md:h-[260px] lg:w-[420px] lg:h-[300px] rounded-2xl overflow-hidden shadow-lg flex flex-col relative select-none cursor-default group hover:scale-[1.02] transition-transform duration-500 ease-out border border-white/10",
            color
        )}>
            {/* Background Gradient Effect for depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />

            {/* Top Navigation Row */}
            <div className="w-full flex justify-between items-center px-3 pt-3 md:px-5 md:pt-5 lg:px-6 lg:pt-6 z-10">
                {/* Left: Logo */}
                <div className="flex items-center gap-2 text-white">
                    <div className="bg-white/10 p-1.5 rounded-lg border border-white/20 backdrop-blur-sm">
                        {/* Dynamic Logo Placeholder - using generic icon for now */}
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white fill-white">
                            <path d="M4 4h16v16H4V4zm2 2v12h12V6H6z" />
                            <path d="M8 8h8v2H8V8zm0 4h5v2H8v-2z" />
                        </svg>
                    </div>
                    <span className="font-bold text-sm md:text-base lg:text-lg tracking-tight text-white drop-shadow-sm">{title}</span>
                </div>

                {/* Right: Badge */}
                <div className="px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-white/30 text-white text-[8px] md:text-[10px] font-semibold tracking-wide uppercase bg-white/5 backdrop-blur-sm shadow-sm">
                    {badge}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col items-center w-full z-10 mt-3 md:mt-5 lg:mt-6 px-3 md:px-4">
                {/* Headline */}
                <h1 className="text-lg md:text-2xl lg:text-3xl font-extrabold text-white text-center leading-tight tracking-tight drop-shadow-md mb-3 md:mb-5 lg:mb-6 max-w-[90%]">
                    {headline ? headline : (
                        <>
                            Building the Future <br />
                            <span className="text-white/80">with {title}</span>
                        </>
                    )}
                </h1>

                {/* Dashboard Preview Card (Replaced with Image) */}
                <div className="w-full flex-1 relative px-2">
                    <div className="relative w-full h-[400px] bg-white rounded-t-xl shadow-2xl overflow-hidden transform translate-y-0 transition-transform duration-700 ease-out">
                        <img
                            src={src}
                            alt={title}
                            className="w-full h-auto object-cover object-top"
                        />

                        {/* Fade out at the bottom of the poster view */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/5 to-transparent z-20 pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
