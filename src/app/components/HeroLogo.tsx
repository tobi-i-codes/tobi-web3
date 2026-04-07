'use client';

import React, { useRef, useState, useEffect } from 'react';

const HeroLogo = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return;

            const { left, top, width, height } = ref.current.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;

            const sensitivity = 20; // Max rotation degrees
            const rotateY = ((e.clientX - centerX) / (window.innerWidth / 2)) * sensitivity;
            const rotateX = -((e.clientY - centerY) / (window.innerHeight / 2)) * sensitivity;

            setRotate({ x: rotateX, y: rotateY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            className="relative flex items-center justify-center perspective-1000"
            style={{ width: '400px', height: '400px', perspective: '1000px' }}
        >
            <div
                ref={ref}
                className="relative w-full h-full transition-transform duration-100 ease-out preserve-3d"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
                }}
            >
                {/* Single Layer - The SVG itself has complex baked-in details so we don't stack it */}
                {/* Scaled up 1.8x to remove whitespace, matching Header */}
                <img
                    src="/logo.svg"
                    alt="Logo Layer"
                    className="absolute top-0 left-0 w-full h-full pointer-events-none object-contain scale-[1.8]"
                    style={{
                        transform: `translateZ(0px)`,
                    }}
                />
            </div>
        </div>
    );
};

export default HeroLogo;
