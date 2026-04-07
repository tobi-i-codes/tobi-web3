import Header from "./components/Header";
import Link from 'next/link';
import { Marquee } from "./components/Marquee";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import { TechStack } from "./components/TechStack";
import { Works } from "./components/Works";
import { Testimonials } from "./components/Testimonials";
import Footer from "./components/Footer";

const SHOWCASE_PROJECTS = [
  { title: "Bloqain", src: "/bloqain.png", badge: "Web3 • Messaging", color: "bg-indigo-600", headline: "Decentralized Sovereign Content" },
  { title: "Bont", src: "/bont.png", badge: "Web3 • NFT", color: "bg-blue-500", headline: "Next-Gen NFT Minting Protocol" },
  { title: "MetaSend", src: "/MetaSend.png", badge: "Web3 • Payments", color: "bg-violet-600", headline: "Streamlined Blockchain Payments" },
  { title: "Cloudflow", src: "/Cloudflow.png", badge: "AI • SaaS", color: "bg-sky-500", headline: "AI-Powered Coding in the Cloud" },
  { title: "EON", src: "/EON.png", badge: "Agency", color: "bg-neutral-900", headline: "Timeless Design for Infinite Scale" },
  { title: "Oyin x Timi", src: "/Oyin-Timi.png", badge: "Wedding", color: "bg-stone-800", headline: "Celebrating Love & Unity" },
  { title: "Rare UI", src: "/Rare-ui.png", badge: "UI Library", color: "bg-cyan-400", headline: "Stand Out. Stand Firm." },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-inter)] text-[#171717] overflow-x-hidden">
      <Header />

      <main className="flex flex-col items-center justify-center min-h-[80vh] w-full max-w-[1400px] mx-auto px-4 sm:px-8 pt-24 pb-12 relative">
        {/* Intro Tag */}
        <p className="text-gray-500 font-medium mb-4 text-center animate-fade-in-up">
          Blockchain Engineer | Full Stack Developer
        </p>

        {/* Headlines */}
        <div className="text-center max-w-4xl mx-auto space-y-3 mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] leading-[1.1] font-bold tracking-tight text-center">
            Building Digital Empires,<br className="block" /> One Pixel at a Time.
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-lg mx-auto leading-relaxed">
            I specialize in high-velocity Blockchain & Full-stack Engineering, architecting scalable commercial solutions from database schema to pixel-perfect UI.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4 mb-16">
          <Link
            href="#contact"
            className="group flex items-center gap-2 bg-[#171717] text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 hover:bg-black"
          >
            {/* Simple Avatar Placeholder or Icon could go here if requested, using text for now */}
            <span>Get in touch</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="#works"
            className="flex items-center gap-2 bg-transparent border border-gray-300 text-[#171717] px-8 py-4 rounded-full font-medium transition-all hover:bg-gray-100"
          >
            View works
          </Link>
        </div>

        {/* Marquee Section */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-x-clip mt-8 max-w-[100vw]">
          <Marquee pauseOnHover className="[--duration:90s] [--gap:1.5rem] py-8">
            {SHOWCASE_PROJECTS.map((project, i) => (
              <ProjectCard
                key={i}
                src={project.src}
                title={project.title}
                badge={project.badge}
                color={project.color}
                headline={project.headline}
              />
            ))}
          </Marquee>
          {/* Gradient Fades for Edge Blur Effect matching reference code (w-1/12) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-[#f5f5f5] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-[#f5f5f5] to-transparent"></div>
        </div>

      </main>

      <About />
      <TechStack />
      <Works />
      <Testimonials />
      <Footer />
    </div>
  );
}
