'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SOCIAL_LINKS = [
    { name: 'GitHub', href: 'https://github.com', icon: 'github' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
    { name: 'Dribbble', href: 'https://dribbble.com', icon: 'dribbble' },
];

const NAV_LINKS = [
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#techstack' },
    { name: 'Works', href: '#works' },
    { name: 'Testimonials', href: '#testimonials' },
];

const SocialIcon = ({ icon }: { icon: string }) => {
    switch (icon) {
        case 'github':
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
            );
        case 'linkedin':
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            );
        case 'twitter':
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            );
        case 'dribbble':
            return (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
                </svg>
            );
        default:
            return null;
    }
};

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="w-full bg-[#171717] text-white pt-24 pb-8 relative overflow-hidden">
            {/* Decorative Top Border */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Left Section - CTA */}
                    <div className="lg:col-span-6 space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
                        >
                            Let's build<br />
                            <span className="text-neutral-400">something great</span><br />
                            together.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-neutral-400 text-lg max-w-md leading-relaxed"
                        >
                            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something extraordinary.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <a
                                href="mailto:hello@tobiisrael.com"
                                className="group inline-flex items-center gap-3 bg-white text-[#171717] px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
                            >
                                <span>hello@tobiisrael.com</span>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                >
                                    <path d="M1 15L15 1M15 1H5M15 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Section - Links */}
                    <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {/* Navigation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-6">Navigation</h3>
                            <ul className="space-y-4">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-neutral-300 hover:text-white transition-colors duration-300 text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Social */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-6">Social</h3>
                            <ul className="space-y-4">
                                {SOCIAL_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-neutral-300 hover:text-white transition-colors duration-300 text-sm"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="col-span-2 sm:col-span-1"
                        >
                            <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-6">Get in touch</h3>
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href="mailto:hello@tobiisrael.com"
                                        className="text-neutral-300 hover:text-white transition-colors duration-300 text-sm"
                                    >
                                        Email
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-neutral-300 hover:text-white transition-colors duration-300 text-sm"
                                    >
                                        Resume
                                    </a>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="pt-8 border-t border-white/10"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Logo & Copyright */}
                        <div className="flex items-center gap-3">
                            <div className="relative w-8 h-8 flex items-center justify-center">
                                <img
                                    src="/logo.svg"
                                    alt="Logo"
                                    className="absolute w-16 h-16 max-w-none object-contain brightness-0 invert"
                                />
                            </div>
                            <span className="text-sm text-neutral-400">
                                © {currentYear} Tobi Israel. All rights reserved.
                            </span>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            {SOCIAL_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                                    aria-label={link.name}
                                >
                                    <SocialIcon icon={link.icon} />
                                </a>
                            ))}
                        </div>

                        {/* Back to Top */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="group flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300"
                        >
                            <span>Back to top</span>
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                className="transform rotate-180 transition-transform duration-300 group-hover:-translate-y-1"
                            >
                                <path d="M6 10V2M6 2L2 6M6 2L10 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Large Background Text */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 0.03, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-[20vw] font-bold tracking-tighter text-white whitespace-nowrap text-center leading-none -mb-[5vw]"
                >
                    TOBI ISRAEL
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
