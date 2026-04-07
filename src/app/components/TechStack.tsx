"use client"
import React, { forwardRef, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { AnimatedBeam } from "./AnimatedBeam"
import { Icons } from "./TechStackIcons"
import SectionHeader from "./SectionHeader"

// Swiss Minimalist Node: Rounded, subtle border, soft shadow
const Node = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode; label?: string }
>(({ className, children, label }, ref) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <div
                ref={ref}
                className={cn(
                    "z-10 flex items-center justify-center border border-black/10 bg-white px-6 py-3 rounded-full shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:scale-105 hover:shadow-lg",
                    className
                )}
            >
                <span className="text-xs font-semibold uppercase tracking-wider text-[#171717] whitespace-nowrap">
                    {children}
                </span>
            </div>
            {/* Mobile-only label */}
            {label && (
                <span className="md:hidden text-[10px] font-medium text-neutral-500 uppercase tracking-wide text-center">
                    {label}
                </span>
            )}
        </div>
    )
})

Node.displayName = "Node"

// Beam duration (7 seconds = Slow Motion)
const BEAM_DURATION = 7000
const HEARTBEAT_CYCLE = 2500

interface Pulse {
    id: string         // Unique ID (e.g., "b1-1715000000")
    beamId: string     // Logical Path ID (e.g., "b1")
    phase: "lub" | "dub"
    delay: number      // Jitter delay
    createdAt: number  // Timestamp for pruning
}

export function TechStack() {
    const containerRef = useRef<HTMLDivElement>(null)
    const div1Ref = useRef<HTMLDivElement>(null)
    const div2Ref = useRef<HTMLDivElement>(null)
    const div3Ref = useRef<HTMLDivElement>(null)
    const div4Ref = useRef<HTMLDivElement>(null)
    const div5Ref = useRef<HTMLDivElement>(null)
    const div6Ref = useRef<HTMLDivElement>(null) // Central Logo
    const div7Ref = useRef<HTMLDivElement>(null)
    const div8Ref = useRef<HTMLDivElement>(null)
    const div9Ref = useRef<HTMLDivElement>(null)
    const div10Ref = useRef<HTMLDivElement>(null)
    const div11Ref = useRef<HTMLDivElement>(null)

    // Configuration for the beam paths
    // Maps logical ID to refs and specific props (like reverse)
    const beamConfig = React.useMemo(() => ({
        b1: { from: div1Ref, to: div6Ref, reverse: true },
        b2: { from: div2Ref, to: div6Ref, reverse: true },
        b3: { from: div3Ref, to: div6Ref, reverse: false },
        b4: { from: div4Ref, to: div6Ref, reverse: true },
        b5: { from: div5Ref, to: div6Ref, reverse: false },
        b7: { from: div7Ref, to: div6Ref, reverse: false },
        b8: { from: div8Ref, to: div6Ref, reverse: true },
        b9: { from: div9Ref, to: div6Ref, reverse: false },
        b10: { from: div10Ref, to: div6Ref, reverse: true },
        b11: { from: div11Ref, to: div6Ref, reverse: false },
    }), [])

    // State: Active Pulses (The Particle System)
    const [pulses, setPulses] = React.useState<Pulse[]>([])

    // The Conductor
    React.useEffect(() => {
        const spawnPulses = () => {
            const now = Date.now()
            const beamIds = Object.keys(beamConfig)
            // Shuffle
            const shuffled = [...beamIds].sort(() => 0.5 - Math.random())

            // Assign batches
            const lubBatch = shuffled.slice(0, 4)
            const dubBatch = shuffled.slice(4, 8)

            const newPulses: Pulse[] = []

            // Create Pulse Objects
            lubBatch.forEach(bid => {
                newPulses.push({
                    id: `${bid}-${now}`,
                    beamId: bid,
                    phase: "lub",
                    delay: Math.random() * 0.25, // Jitter
                    createdAt: now
                })
            })

            dubBatch.forEach(bid => {
                newPulses.push({
                    id: `${bid}-${now}`,
                    beamId: bid,
                    phase: "dub",
                    delay: Math.random() * 0.25, // Jitter
                    createdAt: now
                })
            })

            setPulses(current => {
                // Prune old pulses that have finished their duration
                const active = current.filter(p => now - p.createdAt < BEAM_DURATION + 1000)
                return [...active, ...newPulses]
            })
        }

        // Initial spawn
        spawnPulses()

        const interval = setInterval(spawnPulses, HEARTBEAT_CYCLE)
        return () => clearInterval(interval)
    }, [beamConfig])

    return (
        <div
            id="techstack"
            className="relative flex h-[900px] w-full flex-col items-center justify-start overflow-hidden bg-[#f5f5f5] pt-12 md:pb-20 md:shadow-none"
            ref={containerRef}
        >
            <SectionHeader title="MY TECHSTACKS" number="(002)" />

            <div className="flex size-full max-w-2xl flex-col items-stretch justify-between gap-10 mt-12">
                {/* Row 1: React - Go */}
                <div className="flex flex-row items-center justify-between px-16">
                    <Node ref={div8Ref} label="React"><Icons.react /></Node>
                    <Node ref={div9Ref} label="Go"><Icons.go /></Node>
                </div>

                {/* Row 2: GitHub - Solidity */}
                <div className="flex flex-row items-center justify-between px-8">
                    <Node ref={div1Ref} label="GitHub"><Icons.github /></Node>
                    <Node ref={div5Ref} label="Solidity"><Icons.solidity /></Node>
                </div>

                {/* Row 3: Ethers - LOGO - Tailwind */}
                <div className="flex flex-row items-center justify-between px-4 md:px-0">
                    <Node ref={div2Ref} label="Ethers"><Icons.ether /></Node>

                    {/* Central Logo with Heartbeat */}
                    <motion.div
                        ref={div6Ref}
                        className="z-10 flex size-24 items-center justify-center rounded-full bg-white border border-black/10 overflow-hidden"
                        animate={{
                            scale: [1, 1.05, 1, 1.1, 1], // Lub-Dub
                            boxShadow: [
                                "0px 0px 0px 0px rgba(0,0,0,0)",
                                "0px 0px 20px 2px rgba(0,0,0,0.1)", // Lub glow
                                "0px 0px 0px 0px rgba(0,0,0,0)",
                                "0px 0px 25px 5px rgba(0,0,0,0.15)", // Dub glow
                                "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)"
                            ]
                        }}
                        transition={{
                            duration: 1.5, // Active heartbeat duration
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 1 // Wait 1s before next cycle (Total 2.5s)
                        }}
                    >
                        <img src="/logo.svg" alt="Logo" className="w-[120%] h-[120%] object-contain" />
                    </motion.div>

                    <Node ref={div3Ref} label="Tailwind"><Icons.tailwind /></Node>
                </div>

                {/* Row 4: Node.js - Express */}
                <div className="flex flex-row items-center justify-between px-8">
                    <Node ref={div4Ref} label="Node.js"><Icons.nodejs /></Node>
                    <Node ref={div7Ref} label="Express"><Icons.express /></Node>
                </div>

                {/* Row 5: Hardhat - MySQL */}
                <div className="flex flex-row items-center justify-between px-16">
                    <Node ref={div10Ref} label="Hardhat"><Icons.hardhat /></Node>
                    <Node ref={div11Ref} label="MySQL"><Icons.mysql /></Node>
                </div>
            </div>

            {/* Beams - Rendered from Particle System */}
            {pulses.map((pulse) => {
                const config = beamConfig[pulse.beamId as keyof typeof beamConfig]
                if (!config) return null

                return (
                    <AnimatedBeam
                        key={pulse.id}
                        containerRef={containerRef}
                        fromRef={config.from}
                        toRef={config.to}
                        pathColor="rgba(0, 0, 0, 0.2)"
                        gradientStartColor="#171717"
                        gradientStopColor="#171717"
                        reverse={config.reverse}
                        pulsePhase={pulse.phase}
                        delay={pulse.delay}
                        duration={7} // Slow motion duration
                    />
                )
            })}
        </div>
    )
}
