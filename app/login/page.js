"use client";

import { useState } from "react";
import Link from "next/link";

import {
    Mail,
    Lock,
    Plane,
    MapPin,
    Star
} from "lucide-react";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <div className="min-h-screen flex bg-black overflow-hidden">

            {/* LEFT SIDE */}
            <div
                className="hidden lg:flex lg:w-1/2 relative bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
                }}
            >

                <div className="absolute inset-0 bg-black/75" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black/40 to-cyan-900/40" />

                <div className="relative z-10 flex flex-col justify-between w-full p-16">

                    {/* LOGO */}
                    <div className="flex items-center gap-4 mb-16">

                        <div className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
                            <Plane className="text-white w-8 h-8" />
                        </div>

                        <h1 className="text-4xl font-bold text-white">
                            TravelApp
                        </h1>

                    </div>

                    {/* HERO */}
                    <div className="max-w-2xl">

                        <p className="text-cyan-300 font-semibold tracking-[0.3em] uppercase mb-6">
                            Premium Travel Platform
                        </p>

                        <h2 className="text-6xl font-bold text-white leading-[1.1] mb-8">
                            Explore the world with unforgettable experiences.
                        </h2>

                        <p className="text-xl text-gray-300 leading-relaxed">
                            Discover breathtaking destinations, premium travel plans,
                            and personalized adventures tailored exactly for you.
                        </p>

                    </div>

                    {/* CARDS */}
                    <div className="grid grid-cols-2 gap-6 mt-10">

                        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

                            <div className="flex items-center gap-3 mb-2">

                                <MapPin className="text-cyan-300 w-6 h-6" />

                                <h3 className="text-white font-semibold text-lg">
                                    120+ Destinations
                                </h3>

                            </div>

                            <p className="text-gray-300 text-sm">
                                Discover amazing places all around the globe.
                            </p>

                        </div>

                        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

                            <div className="flex items-center gap-3 mb-2">

                                <Star className="text-yellow-300 w-6 h-6" />

                                <h3 className="text-white font-semibold text-lg">
                                    4.9 Rating
                                </h3>

                            </div>

                            <p className="text-gray-300 text-sm">
                                Thousands of happy travelers trust our platform.
                            </p>

                        </div>

                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-1/2 flex items-center justify-center px-12 bg-zinc-950 relative">

                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full" />

                <div className="relative z-10 w-full max-w-2xl">

                    {/* CARD */}
                    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl px-14 py-16 shadow-2xl">

                        {/* HEADER */}
                        <div className="text-center mb-16">

                            <h1 className="text-5xl font-bold text-white mb-5">
                                Welcome Back
                            </h1>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                Login to continue your adventure.
                            </p>

                        </div>

                        {/* FORM */}
                        <form
                            onSubmit={handleLogin}
                            className="space-y-16 mt-16"
                        >

                            {/* EMAIL */}
                            <div className="space-y-4">

                                <label className="text-gray-300 text-base block font-medium">
                                    Email Address
                                </label>

                                <div className="flex items-center w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-4">

                                    <Mail className="text-gray-400 w-5 h-5 mr-3" />

                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500 text-lg"
                                    />

                                </div>

                            </div>

                            {/* PASSWORD */}
                            <div className="space-y-4">

                                <label className="text-gray-300 text-base block font-medium">
                                    Password
                                </label>

                                <div className="flex items-center w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-4">

                                    <Lock className="text-gray-400 w-5 h-5 mr-3" />

                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500 text-lg"
                                    />

                                </div>

                            </div>

                            {/* OPTIONS */}
                            <div className="flex justify-between items-center text-lg text-gray-400 pt-8 pb-4">

                                <label className="flex items-center gap-3">

                                    <input type="checkbox" />

                                    Remember me

                                </label>

                                <button
                                    type="button"
                                    className="text-cyan-400 hover:text-cyan-300 transition"
                                >
                                    Forgot password?
                                </button>

                            </div>

                            {/* BUTTON */}
                            <button
                                type="submit"
                                className="w-full h-16 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 text-white font-semibold text-xl hover:scale-[1.01] transition-all duration-300 mt-8"
                            >
                                Sign In
                            </button>

                        </form>

                        {/* FOOTER */}
                        <p className="text-center text-gray-400 mt-16 text-lg">

                            Don&apos;t have an account?{" "}

                            <Link
                                href="/register"
                                className="text-cyan-400 hover:text-cyan-300"
                            >
                                Create Account
                            </Link>

                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}