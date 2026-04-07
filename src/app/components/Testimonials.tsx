
"use client";

import React from 'react';
import SectionHeader from './SectionHeader';
import { Marquee } from './Marquee';
import { TestimonialCard } from './TestimonialCard';

const TESTIMONIALS = [
    {
        quote: "Tobi is a design wizard. He transformed our vague ideas into a stunning, functional reality faster than we thought possible.",
        author: "Sarah Jenkins",
        role: "Product Manager",
        company: "TechFlow",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        quote: "The attention to detail in the UI interactions is unmatched. It's rare to find a developer who cares this much about the user experience.",
        author: "Michael Chen",
        role: "Founder",
        company: "StartUp Inc",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        quote: "Incredible speed and code quality. The platform has scaled effortlessly since launch. Highly recommend working with Tobi.",
        author: "Alex Rivera",
        role: "CTO",
        company: "NexGen",
        avatar: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
        quote: "He doesn't just write code, he solves problems. The strategic insights he brought to our project were invaluable.",
        author: "Emily Dao",
        role: "Director of Engineering",
        company: "Innovate",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        quote: "A true professional. Communication was seamless, and the final deliverable exceeded all our expectations.",
        author: "David Kim",
        role: "Creative Director",
        company: "Studio 9",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="w-full bg-[#f5f5f5] pb-24 pt-12 overflow-hidden">
            <SectionHeader title="TESTIMONIALS" number="(004)" />

            <div className="mt-16 w-full relative">
                {/* Gradient Fades for Edge Blur Effect */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#f5f5f5] to-transparent z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#f5f5f5] to-transparent z-10"></div>

                <Marquee
                    pauseOnHover
                    className="[--duration:60s] [--gap:2rem] py-4"
                >
                    {TESTIMONIALS.map((t, i) => (
                        <TestimonialCard
                            key={i}
                            quote={t.quote}
                            author={t.author}
                            role={t.role}
                            company={t.company}
                            avatar={t.avatar}
                        />
                    ))}
                </Marquee>
            </div>
        </section>
    );
}
