"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import {
    Plane,
    MapPin,
    Star,
    Compass,
    Sparkles
} from "lucide-react";

export default function Home() {

    const router = useRouter();
    const isLoggedIn = false;

    return (
        <main className="min-h-screen bg-black text-white overflow-hidden relative">

            {/* BACKGROUND */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
                }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/75"></div>

            {/* GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-black/50 to-blue-900/30"></div>

            {/* GLOW */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full"></div>

            {/* CONTENT */}
            <div className="relative z-10">

                {/* NAVBAR */}
                <nav className="w-full flex items-center justify-between px-8 lg:px-16 py-8">

                    {/* LOGO */}
                    <div className="flex items-center gap-4">

                        <div className="w-14 h-14 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center">

                            <Plane className="text-white w-7 h-7" />

                        </div>

                        <h1 className="text-3xl font-bold">
                            TravelApp
                        </h1>

                    </div>

                    {/* NAV LINKS */}
                    <div className="hidden lg:flex items-center gap-10 text-lg text-gray-300">

                        <button className="hover:text-white transition">
                            Destinations
                        </button>

                        <button className="hover:text-white transition">
                            Experiences
                        </button>

                        <button className="hover:text-white transition">
                            Pricing
                        </button>

                        <button className="hover:text-white transition">
                            About
                        </button>

                    </div>

                    {/* AUTH */}
                    <div className="flex items-center gap-5">

                        {isLoggedIn ? (

                            <div className="flex items-center gap-5">

                                <Link
                                    href="/profile"
                                    className="text-gray-300 hover:text-white transition"
                                >
                                    Profile
                                </Link>

                                <button
                                    className="px-6 py-3 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 transition"
                                >
                                    Logout
                                </button>

                            </div>

                        ) : (

                            <>

                                <Link
                                    href="/login"
                                    className="text-gray-300 hover:text-white transition"
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/register"
                                    className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 text-white font-semibold hover:scale-[1.03] transition duration-300 shadow-2xl"
                                >
                                    Get Started
                                </Link>

                            </>

                        )}

                    </div>

                </nav>

                {/* HERO SECTION */}
                <section className="min-h-[85vh] flex items-center px-8 lg:px-16">

                    <div className="grid lg:grid-cols-2 gap-20 items-center w-full">

                        {/* LEFT */}
                        <div>

                            {/* BADGE */}
                            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl mb-10">

                                <Sparkles className="w-5 h-5 text-cyan-300" />

                                <span className="text-sm tracking-[0.2em] uppercase text-cyan-200 font-semibold">
                                    AI Powered Travel Platform
                                </span>

                            </div>

                            {/* TITLE */}
                            <h1 className="text-6xl lg:text-8xl font-bold leading-[0.95] mb-10">

                                Explore The World
                                <br />

                                <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                                    Like Never Before
                                </span>

                            </h1>

                            {/* DESCRIPTION */}
                            <p className="text-2xl text-gray-300 leading-relaxed max-w-2xl mb-12">

                                Discover breathtaking destinations,
                                personalized travel experiences,
                                and AI-powered trip planning designed for modern explorers.

                            </p>

                            {/* BUTTONS */}
                            <div className="flex flex-wrap gap-6">

                                {/* START */}
                                <button
                                    onClick={() => router.push("/register")}
                                    className="px-10 py-5 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 text-white text-xl font-bold hover:scale-[1.03] transition duration-300 shadow-2xl"
                                >
                                    Start Exploring
                                </button>

                                {/* LEARN MORE */}
                                <button
                                    onClick={() => router.push("/learn-more")}
                                    className="px-10 py-5 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl text-xl font-semibold hover:bg-white/15 transition"
                                >
                                    Learn More
                                </button>

                                {/* GO PRO */}
                                <button
                                    onClick={() => router.push("/pro")}
                                    className="px-10 py-5 rounded-3xl border border-yellow-400/30 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-black text-xl font-black hover:scale-[1.03] transition duration-300 shadow-[0_20px_60px_rgba(251,191,36,0.35)]"
                                >
                                    Go Pro
                                </button>

                            </div>

                        </div>

                        {/* RIGHT */}
                        <div className="grid gap-6">

                            {/* CARD 1 */}
                            <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 hover:bg-white/15 transition duration-300">

                                <div className="flex items-center gap-5 mb-6">

                                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center">

                                        <MapPin className="w-8 h-8 text-cyan-300" />

                                    </div>

                                    <div>

                                        <h3 className="text-2xl font-bold text-white">
                                            120+ Destinations
                                        </h3>

                                        <p className="text-gray-400 text-lg">
                                            Discover places worldwide
                                        </p>

                                    </div>

                                </div>

                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Explore hand-picked premium destinations
                                    and hidden gems tailored to your travel style.
                                </p>

                            </div>

                            {/* CARD 2 */}
                            <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 hover:bg-white/15 transition duration-300">

                                <div className="flex items-center gap-5 mb-6">

                                    <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center">

                                        <Compass className="w-8 h-8 text-blue-300" />

                                    </div>

                                    <div>

                                        <h3 className="text-2xl font-bold text-white">
                                            Smart AI Planning
                                        </h3>

                                        <p className="text-gray-400 text-lg">
                                            Personalized recommendations
                                        </p>

                                    </div>

                                </div>

                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Let AI generate optimized itineraries,
                                    experiences, and routes in seconds.
                                </p>

                            </div>

                            {/* CARD 3 */}
                            <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 hover:bg-white/15 transition duration-300">

                                <div className="flex items-center gap-5 mb-6">

                                    <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 flex items-center justify-center">

                                        <Star className="w-8 h-8 text-yellow-300" />

                                    </div>

                                    <div>

                                        <h3 className="text-2xl font-bold text-white">
                                            Premium Experience
                                        </h3>

                                        <p className="text-gray-400 text-lg">
                                            Trusted by travelers
                                        </p>

                                    </div>

                                </div>

                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Thousands of users trust TravelApp
                                    for luxury travel planning and seamless experiences.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

                {/* STATS */}
                <section className="px-8 lg:px-16 pb-20">

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

                            <h3 className="text-5xl font-bold text-cyan-300 mb-3">
                                50K+
                            </h3>

                            <p className="text-gray-400 text-lg">
                                Active Travelers
                            </p>

                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

                            <h3 className="text-5xl font-bold text-blue-300 mb-3">
                                120+
                            </h3>

                            <p className="text-gray-400 text-lg">
                                Destinations
                            </p>

                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

                            <h3 className="text-5xl font-bold text-yellow-300 mb-3">
                                4.9★
                            </h3>

                            <p className="text-gray-400 text-lg">
                                User Rating
                            </p>

                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

                            <h3 className="text-5xl font-bold text-cyan-300 mb-3">
                                24/7
                            </h3>

                            <p className="text-gray-400 text-lg">
                                AI Assistance
                            </p>

                        </div>

                    </div>

                </section>

            </div>

        </main>
    );
}