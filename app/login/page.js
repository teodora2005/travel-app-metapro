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

        console.log({
            email,
            password,
        });
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

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/75"></div>

                {/* GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black/40 to-cyan-900/40"></div>

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col justify-between p-16 w-full">

                    {/* TOP */}
                    <div>

                        {/* LOGO */}
                        <div className="flex items-center gap-4 mb-16">

                            <div className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">

                                <Plane className="text-white w-8 h-8" />

                            </div>

                            <h1 className="text-4xl font-bold text-white">
                                TravelApp
                            </h1>

                        </div>

                        {/* HERO TEXT */}
                        <div className="max-w-2xl">

                            <p className="text-cyan-300 font-semibold tracking-[0.3em] uppercase mb-6">
                                Premium Travel Platform
                            </p>

                            <h2 className="text-7xl font-bold text-white leading-[1.1] mb-8">
                                Explore the world with unforgettable experiences.
                            </h2>

                            <p className="text-2xl text-gray-300 leading-relaxed max-w-xl">
                                Discover breathtaking destinations, premium travel plans,
                                and personalized adventures tailored exactly for you.
                            </p>

                        </div>

                    </div>

                    {/* BOTTOM CARDS */}
                    <div className="grid grid-cols-2 gap-6">

                        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-7">

                            <div className="flex items-center gap-3 mb-4">

                                <MapPin className="text-cyan-300 w-6 h-6" />

                                <h3 className="text-white font-semibold text-xl">
                                    120+ Destinations
                                </h3>

                            </div>

                            <p className="text-gray-300 text-lg">
                                Discover amazing places all around the globe.
                            </p>

                        </div>

                        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-7">

                            <div className="flex items-center gap-3 mb-4">

                                <Star className="text-yellow-300 w-6 h-6" />

                                <h3 className="text-white font-semibold text-xl">
                                    4.9 Rating
                                </h3>

                            </div>

                            <p className="text-gray-300 text-lg">
                                Thousands of happy travelers trust our platform.
                            </p>

                        </div>

                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-1/2 flex items-center justify-center px-12 bg-zinc-950 relative">

                {/* GLOW */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full"></div>

                {/* LOGIN CARD */}
                <div className="relative z-10 w-full max-w-2xl">

                    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] px-14 py-16 shadow-2xl">

                        {/* MOBILE LOGO */}
                        <div className="lg:hidden flex justify-center mb-10">

                            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">

                                <Plane className="text-white w-8 h-8" />

                            </div>

                        </div>

                        {/* HEADER */}
                        <div className="mb-10">

                            <h1 className="text-6xl font-bold text-white mb-5 leading-none">
                                Welcome Back
                            </h1>

                            <p className="text-gray-400 text-xl leading-relaxed max-w-xl">
                                Login to continue your next adventure and access your personalized travel dashboard.
                            </p>

                        </div>

                        {/* FORM */}
                        <form
                            onSubmit={handleLogin}
                            className="space-y-7"
                        >

                            {/* EMAIL */}
                            <div>

                                <label className="block text-base text-gray-300 mb-3 font-medium">
                                    Email Address
                                </label>

                                <div className="relative">

                                    <Mail className="absolute left-5 top-5 text-gray-400 w-5 h-5 pointer-events-none" />

                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl pl-16 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 focus:bg-white/10 transition text-lg"
                                    />

                                </div>

                            </div>

                            {/* PASSWORD */}
                            <div>

                                <label className="block text-base text-gray-300 mb-3 font-medium">
                                    Password
                                </label>

                                <div className="relative">

                                    <Lock className="absolute left-5 top-5 text-gray-400 w-5 h-5 pointer-events-none" />

                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl pl-16 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 focus:bg-white/10 transition text-lg"
                                    />

                                </div>

                            </div>

                            {/* OPTIONS */}
                            <div className="flex items-center justify-between pt-1">

                                <label className="flex items-center gap-3 text-gray-400 text-sm cursor-pointer">

                                    <input
                                        type="checkbox"
                                        className="w-4 h-4"
                                    />

                                    Remember me

                                </label>

                                <button
                                    type="button"
                                    className="text-cyan-400 hover:text-cyan-300 transition text-sm font-medium"
                                >
                                    Forgot password?
                                </button>

                            </div>

                            {/* LOGIN BUTTON */}
                            <button
                                type="submit"
                                className="w-full h-16 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 text-white font-bold text-xl hover:scale-[1.01] active:scale-[0.99] transition duration-300 shadow-2xl"
                            >
                                Sign In
                            </button>

                        </form>

                        {/* DIVIDER */}
                        <div className="flex items-center gap-5 my-10">

                            <div className="flex-1 h-px bg-white/10"></div>

                            <span className="text-gray-500 text-sm tracking-[0.2em] whitespace-nowrap">
                                OR CONTINUE WITH
                            </span>

                            <div className="flex-1 h-px bg-white/10"></div>

                        </div>

                        {/* GOOGLE BUTTON */}
                        <button
                            className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl text-white font-semibold hover:bg-white/10 transition duration-300 text-lg"
                        >
                            Continue with Google
                        </button>

                        {/* REGISTER */}
                        <p className="text-center text-gray-400 mt-10 text-lg">

                            Don&apos;t have an account?{" "}

                            <Link
                                href="/register"
                                className="text-cyan-400 hover:text-cyan-300 font-semibold transition"
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