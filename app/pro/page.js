
"use client";

import { useRouter } from "next/navigation";
import {
    Sparkles,
    Globe,
    Plane,
    Zap,
    ShieldCheck,
} from "lucide-react";

export default function ProPage() {
    const router = useRouter();

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white flex items-center justify-center px-6 py-14">

            {/* BACKGROUND */}
            <div
                className="absolute inset-0 bg-cover bg-center scale-110"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')",
                }}
            />

            {/* OVERLAYS */}
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#030712]/40 to-[#030712]/95" />

            {/* GLOW */}
            <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-cyan-400/10 blur-[140px]" />

            {/* CARD */}
            <div className="relative z-10 w-full max-w-2xl rounded-[38px] border border-white/10 bg-[#0b1120]/85 backdrop-blur-2xl shadow-[0_25px_120px_rgba(0,0,0,0.6)] overflow-hidden">

                {/* TOP LIGHT */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

                <div className="px-8 py-10 md:px-14 md:py-14">

                    {/* BADGE */}
                    <div className="flex justify-center">

                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2.5">

                            <Sparkles className="w-4 h-4 text-cyan-300" />

                            <span className="text-xs uppercase tracking-[0.28em] font-bold text-cyan-100">
                                Premium Membership
                            </span>

                        </div>

                    </div>

                    {/* HERO */}
                    <div className="mt-10 text-center">

                        <h1 className="text-5xl md:text-7xl font-black leading-[0.92] tracking-[-0.05em] text-white">
                            Upgrade your
                            <br />

                            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-blue-500 bg-clip-text text-transparent">
                                travel experience
                            </span>

                        </h1>

                        <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl leading-[1.8] text-zinc-300 font-medium">
                            Smarter AI itineraries, premium travel recommendations,
                            faster responses, and intelligent planning built for modern travelers.
                        </p>

                    </div>

                    {/* FEATURES */}
                    <div className="mt-12 space-y-4">

                        <Feature
                            icon={<Sparkles className="w-6 h-6 text-cyan-300" />}
                            title="Unlimited AI Itineraries"
                            desc="Generate personalized travel plans without limitations."
                        />

                        <Feature
                            icon={<Plane className="w-6 h-6 text-cyan-300" />}
                            title="Travel Anywhere"
                            desc="Access your saved trips across all devices worldwide."
                        />

                        <Feature
                            icon={<Globe className="w-6 h-6 text-cyan-300" />}
                            title="Global Destinations"
                            desc="Discover curated travel experiences in 100+ countries."
                        />

                        <Feature
                            icon={<Zap className="w-6 h-6 text-cyan-300" />}
                            title="Priority AI Responses"
                            desc="Receive faster planning and premium AI recommendations."
                        />

                    </div>

                    {/* PRICE */}
                    <div className="mt-14 text-center">

                        <div className="flex items-end justify-center gap-2">

                            <span className="text-7xl md:text-8xl font-black tracking-[-0.05em] text-white">
                                $12
                            </span>

                            <span className="text-zinc-400 text-xl md:text-2xl mb-3 font-semibold">
                                /month
                            </span>

                        </div>

                        <p className="mt-3 text-zinc-400 text-base">
                            Cancel anytime. Instant premium access.
                        </p>

                    </div>

                    {/* BUTTON */}
                    <button
                        onClick={() => router.push("/payment-gateway")}
                        className="group mt-12 w-full rounded-[24px] bg-gradient-to-r from-cyan-400 to-blue-500 py-5 text-white text-xl md:text-2xl font-black shadow-[0_18px_60px_rgba(34,211,238,0.35)] transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_22px_70px_rgba(34,211,238,0.45)] active:scale-[0.98]"
                    >

                        <span className="flex items-center justify-center gap-3">
                            Upgrade to Premium
                        </span>

                    </button>

                    {/* SECURITY */}
                    <div className="mt-7 flex items-center justify-center gap-2 text-zinc-400 text-sm">

                        <ShieldCheck className="w-4 h-4 text-cyan-300" />

                        <span>
                            Secure encrypted payment protection
                        </span>

                    </div>

                    {/* PAYMENT METHODS */}
                    <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm font-bold text-zinc-300 tracking-[0.15em]">

                        <span className="rounded-full bg-white/5 px-4 py-2 border border-white/5">
                            VISA
                        </span>

                        <span className="rounded-full bg-white/5 px-4 py-2 border border-white/5">
                            MASTERCARD
                        </span>

                        <span className="rounded-full bg-white/5 px-4 py-2 border border-white/5">
                            APPLE PAY
                        </span>

                        <span className="rounded-full bg-white/5 px-4 py-2 border border-white/5">
                            PAYPAL
                        </span>

                    </div>

                </div>

            </div>

        </main>
    );
}

/* ---------------- FEATURE CARD ---------------- */

function Feature({ icon, title, desc }) {
    return (
        <div className="group flex items-start gap-4 rounded-[24px] border border-white/6 bg-white/[0.04] px-5 py-5 transition-all duration-300 hover:bg-white/[0.07] hover:border-cyan-400/20">

            {/* ICON */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 border border-cyan-400/15">

                {icon}

            </div>

            {/* TEXT */}
            <div>

                <h3 className="text-white text-xl font-black leading-tight">
                    {title}
                </h3>

                <p className="mt-2 text-zinc-300 text-[15px] md:text-base leading-[1.7] font-medium">
                    {desc}
                </p>

            </div>

        </div>
    );
}
