
"use client";

import React from 'react';
import SectionHeader from './SectionHeader';
import { WorkCard } from './WorkCard';

const SELECTED_WORKS = [
    {
        title: "Bloqain",
        category: "Web3 • Decentralized Messaging",
        description: "A revolutionary decentralized messaging protocol built for ultimate privacy and sovereign communication. Powered by immutable smart contracts and a sleek, user-centric interface that redefines digital interaction.",
        image: "/bloqain.png",
        href: "https://bloqain.vercel.app/",
        isOpenSource: true,
        context: { type: 'personal' as const }
    },
    {
        title: "Bont",
        category: "Web3 • NFT Minting App",
        description: "A state-of-the-art NFT minting platform built for the next generation of digital assets. Featuring seamless wallet integration, real-time transaction tracking, and a sleek, high-conversion interface designed for modern collectors.",
        image: "/bont.png",
        href: "https://bont-rosy.vercel.app/",
        isOpenSource: true,
        context: { type: 'personal' as const }
    },
    {
        title: "MetaSend",
        category: "Web3 • Decentralized Payments",
        description: "A professional-grade decentralized payment system designed for secure asset transfers. Engineered with advanced Solidity smart contracts and a sleek glassmorphism UI to redefine the Web3 transaction experience.",
        image: "/MetaSend.png",
        href: "https://meta-send.vercel.app/",
        isOpenSource: true,
        context: { type: 'personal' as const }
    },
    {
        title: "Tolu Aina",
        category: "Portfolio • Blog",
        description: "A beautifully crafted portfolio website showcasing creative work with a powerful backend. Features seamless API integration for dynamic blog content delivery and a custom API-powered CMS for effortless updates.",
        image: "/Tolu-Aina.png",
        href: "https://thetolulopeaina.com/",
        context: { type: 'work' as const, organization: 'Thinktech' }
    },
    {
        title: "Thinktech",
        category: "Agency • Landing Page",
        description: "Where innovation meets execution. A bold digital presence that turns heads, drives conversions, and positions your brand at the forefront of technology.",
        image: "/Thinktech.png",
        href: "https://www.thinktech.ng/",
        context: { type: 'work' as const, organization: 'Thinktech' }
    },
    {
        title: "Rare UI",
        category: "UI Library • 46 Components",
        description: "Born from passion, built for the community. An open-source library featuring 46 meticulously crafted components designed to help developers stand out and ship faster.",
        image: "/Rare-ui.png",
        href: "https://neo-ui.vercel.app/",
        context: { type: 'personal' as const }
    },
    {
        title: "Oyin x Timi",
        category: "Wedding • Invitation",
        description: "A love story, beautifully told. An elegant digital wedding invitation that captures the essence of romance and brings guests into the celebration before it even begins.",
        image: "/Oyin-Timi.png",
        href: "https://oyin-timi.vercel.app/",
        context: { type: 'freelance' as const }
    }
];

export function Works() {
    return (
        <section id="works" className="w-full bg-[#f5f5f5] pb-24 pt-12">
            <SectionHeader title="SELECTED WORKS" number="(003)" />

            <div className="mx-auto max-w-[1400px] px-4 sm:px-8 mt-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 overflow-visible">
                    {SELECTED_WORKS.map((work, index) => (
                        <WorkCard
                            key={index}
                            title={work.title}
                            category={work.category}
                            description={work.description}
                            image={work.image}
                            href={work.href}
                            isOpenSource={work.isOpenSource}
                            context={work.context}
                            // Stagger the cards slightly for visual interest if needed, 
                            // or use 'md:translate-y-12' on every second card for an offset grid look
                            className={index % 2 === 1 ? "md:translate-y-16" : ""}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
