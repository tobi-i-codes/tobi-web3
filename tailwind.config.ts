import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                inter: ['var(--font-inter)'],
            },
            keyframes: {
                rise: {
                    '0%': { transform: 'translateY(25px)' },
                    '100%': { transform: 'translateY(0)' },
                },
                marquee: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(calc(-100% - var(--gap)))" },
                },
                "marquee-vertical": {
                    from: { transform: "translateY(0)" },
                    to: { transform: "translateY(calc(-100% - var(--gap)))" },
                },
            },
            animation: {
                rise: 'rise 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                marquee: "marquee var(--duration) infinite linear",
                "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
            }
        },
    },
    plugins: [],
};
export default config;
