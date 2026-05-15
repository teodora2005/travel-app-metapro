"use client";

import Link from "next/link";

import {
    Brain,
    UtensilsCrossed,
    ShoppingBag,
    Ticket,
    Map,
} from "lucide-react";

export default function LearnMorePage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

            {/* BACKGROUND */}
            <div className="absolute inset-0">

                <div
                    className="absolute inset-0 bg-cover bg-center scale-105 opacity-10"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop')",
                    }}
                />

                <div className="absolute inset-0 bg-[#020617]/90" />

                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#050816]/70 to-[#050816]" />

                <div className="absolute top-[-200px] left-[-150px] w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[160px]" />

                <div className="absolute bottom-[-250px] right-[-150px] w-[600px] h-[600px] rounded-full bg-cyan-400/10 blur-[180px]" />

            </div>

            {/* HOME BUTTON */}
            <div className="fixed top-8 left-8 z-[9999]">

                <Link
                    href="/"
                    className="group flex items-center gap-4"
                >

                    <div
                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-[0_15px_40px_rgba(59,130,246,0.45)] group-hover:scale-110 transition-all duration-300"
                        style={{
                            padding: 10,
                        }}
                    >
                        ✈
                    </div>

                    <div
                        style={{
                            padding: 6,
                        }}
                    >

                        <h2 className="text-2xl font-black tracking-tight">
                            TravelAI
                        </h2>

                        <p className="text-sm text-zinc-300 font-medium group-hover:text-white transition">
                            Back to Home
                        </p>

                    </div>

                </Link>

            </div>

            {/* CONTENT */}
            <div
                className="relative z-10 w-full max-w-[1700px] mx-auto px-10 lg:px-20 py-32 flex flex-col items-center"
                style={{
                    padding: 16,
                }}
            >

                {/* HERO */}
                <section
                    className="text-center w-full flex flex-col items-center"
                    style={{
                        padding: 20,
                        marginBottom: 20,
                    }}
                >

                    <div
                        className="inline-flex items-center gap-4 px-8 py-5 rounded-full bg-white/[0.05] backdrop-blur-2xl justify-center mx-auto"
                        style={{
                            padding: 18,
                            margin: 10,
                        }}
                    >

                        <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />

                        <span className="text-base uppercase tracking-[0.3em] text-zinc-100 font-bold">
                            AI Powered Tourism Platform
                        </span>

                    </div>

                    <h1
                        className="mt-14 text-7xl md:text-9xl font-black leading-[0.88] tracking-[-0.07em] text-center"
                        style={{
                            padding: 14,
                        }}
                    >

                        Travel smarter.
                        <br />

                        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                            Explore deeper.
                        </span>

                    </h1>

                    <p
                        className="mt-12 max-w-4xl mx-auto text-center text-2xl md:text-3xl font-medium text-zinc-100 leading-[1.9]"
                        style={{
                            padding: 20,
                            margin: 10,
                        }}
                    >

                        TravelAI transforms the way people explore the world.
                        Our intelligent platform creates personalized travel experiences,
                        recommends authentic locations, and helps travelers organize unforgettable journeys effortlessly.

                    </p>

                    <div
                        className="mt-14 flex flex-wrap justify-center gap-5 text-lg font-semibold text-zinc-200"
                        style={{
                            padding: 16,
                            margin: 10,
                        }}
                    >

                        <div
                            className="px-7 py-4 rounded-full bg-white/5 backdrop-blur-xl"
                            style={{
                                padding: 14,
                            }}
                        >
                            AI Powered
                        </div>

                        <div
                            className="px-7 py-4 rounded-full bg-white/5 backdrop-blur-xl"
                            style={{
                                padding: 14,
                            }}
                        >
                            Smart Planning
                        </div>

                        <div
                            className="px-7 py-4 rounded-full bg-white/5 backdrop-blur-xl"
                            style={{
                                padding: 14,
                            }}
                        >
                            Global Destinations
                        </div>

                    </div>

                </section>

                {/* FEATURE HERO */}
                <section
                    className="mt-48 w-full flex justify-center"
                    style={{
                        padding: 18,
                    }}
                >

                    <div
                        className="group relative overflow-hidden rounded-[44px] bg-gradient-to-br from-blue-500/10 to-cyan-500/5 p-14 md:p-20 backdrop-blur-2xl hover:bg-white/[0.04] transition-all duration-500 w-full max-w-7xl"
                        style={{
                            padding: 30,
                            margin: 12,
                        }}
                    >

                        <div className="absolute top-[-100px] right-[-80px] w-[300px] h-[300px] rounded-full bg-cyan-400/10 blur-[120px]" />

                        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center">

                            <div
                                className="w-24 h-24 rounded-[28px] bg-white/10 flex items-center justify-center mx-auto"
                                style={{
                                    padding: 10,
                                    marginBottom: 14,
                                }}
                            >

                                <Brain className="w-12 h-12 text-white" />

                            </div>

                            <h2
                                className="mt-12 text-6xl md:text-7xl font-black leading-[1] text-center mx-auto max-w-5xl"
                                style={{
                                    padding: 16,
                                }}
                            >

                                AI Personalized
                                <br />
                                Travel Planning

                            </h2>

                            <p
                                className="mt-10 max-w-4xl mx-auto text-center text-2xl md:text-3xl font-medium text-zinc-100 leading-[1.8]"
                                style={{
                                    padding: 20,
                                }}
                            >

                                Our intelligent AI engine understands the traveler’s
                                personality, preferences, budget, and goals to generate
                                deeply personalized travel experiences in seconds.

                            </p>

                        </div>

                    </div>

                </section>

                {/* FEATURES GRID */}
                <section
                    className="mt-28 grid lg:grid-cols-2 gap-14 w-full max-w-7xl mx-auto"
                    style={{
                        padding: 20,
                    }}
                >

                    <FeatureCard
                        icon={<UtensilsCrossed className="w-9 h-9 text-white" />}
                        title="Restaurant Recommendations"
                        desc="TravelAI suggests nearby restaurants based on traveler preferences, ratings, distance, and optimized routes."
                    />

                    <FeatureCard
                        icon={<ShoppingBag className="w-9 h-9 text-white" />}
                        title="Local Producers & Markets"
                        desc="Discover artisan shops, authentic local markets, handmade products, and unforgettable cultural experiences."
                    />

                    <FeatureCard
                        icon={<Ticket className="w-9 h-9 text-white" />}
                        title="Ticket Prices & Guidance"
                        desc="Receive intelligent guidance toward trusted booking providers and compare ticket pricing information instantly."
                    />

                    <FeatureCard
                        icon={<Map className="w-9 h-9 text-white" />}
                        title="Interactive Maps"
                        desc="Visualize destinations, optimized routes, nearby attractions, and smart travel paths in real time."
                    />

                </section>

                {/* INFO SECTION */}
                <section
                    className="mt-48 w-full flex justify-center"
                    style={{
                        padding: 20,
                    }}
                >

                    <div
                        className="rounded-[44px] bg-[#0f172a]/70 backdrop-blur-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.35)] text-center w-full max-w-7xl"
                        style={{
                            padding: 18,
                            margin: 10,
                        }}
                    >

                        <div className="flex flex-col items-center">

                            <div
                                className="p-14 md:p-20 flex flex-col items-center text-center"
                                style={{
                                    padding: 28,
                                }}
                            >

                                <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-black">
                                    Platform Vision
                                </p>

                                <h2
                                    className="mt-10 text-6xl md:text-7xl font-black leading-[1]"
                                    style={{
                                        padding: 14,
                                    }}
                                >

                                    More than
                                    <br />
                                    a travel planner

                                </h2>

                                <p
                                    className="mt-12 max-w-4xl text-zinc-100 text-2xl md:text-3xl font-medium leading-[1.8]"
                                    style={{
                                        padding: 18,
                                    }}
                                >

                                    TravelAI combines artificial intelligence,
                                    tourism technologies, and smart recommendations
                                    into one seamless experience for modern travelers.

                                </p>

                                <p
                                    className="mt-10 max-w-4xl text-zinc-300 text-xl leading-[1.9]"
                                    style={{
                                        padding: 18,
                                    }}
                                >

                                    Built using modular architecture,
                                    AI integrations, PostgreSQL storage,
                                    interactive maps, and external tourism APIs.

                                </p>

                            </div>

                            {/* SMALLER STATS SECTION */}
                            <div
                                className="p-8 md:p-10 bg-white/[0.02] w-full flex justify-center"
                                style={{
                                    padding: 12,
                                }}
                            >

                                <div
                                    className="space-y-5 w-full max-w-2xl"
                                    style={{
                                        padding: 10,
                                    }}
                                >

                                    <StatCard
                                        number="AI"
                                        label="Powered Recommendations"
                                    />

                                    <StatCard
                                        number="100+"
                                        label="Countries & Destinations"
                                    />

                                    <StatCard
                                        number="24/7"
                                        label="Accessible Anywhere"
                                    />

                                    <StatCard
                                        number="∞"
                                        label="Personalized Possibilities"
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* CTA */}
                <section
                    className="relative mt-48 overflow-hidden rounded-[44px] bg-gradient-to-br from-blue-500/10 to-cyan-500/5 px-8 py-28 w-full max-w-7xl mx-auto flex justify-center"
                    style={{
                        padding: 24,
                        marginBottom: 40,
                    }}
                >

                    <div className="absolute inset-0 blur-[120px] bg-cyan-500/10" />

                    <div className="relative z-10 w-full flex flex-col items-center justify-center text-center">

                        <p
                            className="text-base uppercase tracking-[0.35em] text-cyan-300 font-bold text-center"
                            style={{
                                padding: 10,
                            }}
                        >
                            AI Powered Travel Intelligence
                        </p>

                        <h2
                            className="mt-10 text-6xl md:text-8xl font-black leading-[0.92] text-center max-w-5xl"
                            style={{
                                padding: 18,
                            }}
                        >

                            Build your perfect
                            <br />
                            journey today.

                        </h2>

                        <p
                            className="mt-10 max-w-4xl mx-auto text-center text-2xl md:text-3xl font-medium text-zinc-100 leading-[1.8]"
                            style={{
                                padding: 18,
                            }}
                        >

                            Intelligent planning.
                            Personalized experiences.
                            Limitless exploration.

                        </p>

                        <Link href="/chatbot">

                            <button
                                className="mt-16 bg-white text-black px-14 py-6 rounded-[28px] text-3xl font-black shadow-[0_20px_60px_rgba(255,255,255,0.18)] hover:scale-[1.04] hover:bg-zinc-100 transition-all duration-300"
                                style={{
                                    padding: 24,
                                }}
                            >

                                Start Exploring

                            </button>

                        </Link>

                    </div>

                </section>

            </div>

        </main>
    );
}

/* FEATURE CARD */

function FeatureCard({ icon, title, desc }) {
    return (
        <div
            className="group rounded-[40px] bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1 text-center flex flex-col items-center"
            style={{
                padding: 32,
                margin: 12,
            }}
        >

            <div
                className="w-20 h-20 rounded-[28px] bg-white/10 flex items-center justify-center"
                style={{
                    padding: 10,
                    marginBottom: 10,
                }}
            >
                {icon}
            </div>

            <h3
                className="mt-10 text-4xl md:text-5xl font-black text-white leading-[1.1] text-center"
                style={{
                    padding: 12,
                }}
            >
                {title}
            </h3>

            <p
                className="mt-8 max-w-[90%] text-zinc-200 leading-[1.9] text-2xl font-medium text-center"
                style={{
                    padding: 14,
                }}
            >
                {desc}
            </p>

        </div>
    );
}

/* STAT CARD */

function StatCard({ number, label }) {
    return (
        <div
            className="rounded-[28px] bg-black/20 backdrop-blur-xl text-center"
            style={{
                padding: 18,
                margin: 6,
            }}
        >

            <h3
                className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                style={{
                    padding: 6,
                }}
            >
                {number}
            </h3>

            <p
                className="mt-4 text-zinc-100 text-xl font-semibold leading-relaxed"
                style={{
                    padding: 6,
                }}
            >
                {label}
            </p>

        </div>
    );
}