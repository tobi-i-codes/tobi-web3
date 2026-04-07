import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
    title?: string;
    number?: string;
}

const SectionHeader = ({ title = "About", number = "(001)" }: SectionHeaderProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div className="w-full flex flex-col items-center justify-center py-12 relative z-20">
            {/* Top Separator Line */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="h-[1px] bg-black/10 mb-8 max-w-[90vw]"
            />

            <div className="flex items-center justify-between w-full max-w-6xl px-6 md:px-12">
                <span className="font-mono text-sm text-neutral-400">{number}</span>

                {/* Magnetic Container */}
                <motion.div
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    animate={{ x: position.x * 0.5, y: position.y * 0.5 }}
                    transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                    className="relative cursor-pointer group"
                >
                    <div className="px-6 py-2 border border-black/10 rounded-full bg-white hover:bg-black hover:text-white transition-colors duration-300">
                        <span className="text-sm font-medium tracking-widest uppercase">{title}</span>
                    </div>
                </motion.div>

                <span className="font-mono text-sm text-neutral-400">2026</span>
            </div>
        </div>
    );
};

export default SectionHeader;
