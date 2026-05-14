"use client";

import { useState } from "react";
import Link from "next/link";

import {
    User,
    Mail,
    Lock,
    Plane,
    MapPin,
    Star
} from "lucide-react";

export default function RegisterPage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        console.log({
            name,
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
                        "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')",
                }}
            >

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/75"></div>

                {/* GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-black/40 to-blue-900/40"></div>

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
                                Begin Your Journey
                            </p>

                            <h2 className="text-7xl font-bold text-white leading-[1.1] mb-8">
                                Create memories that last forever.
                            </h2>

                            <p className="text-2xl text-gray-300 leading-relaxed max-w-xl">
                                Join thousands of travelers discovering amazing destinations and unforgettable experiences worldwide.
                            </p>

                        </div>

                    </div>

                    {/* BOTTOM CARDS */}
                    <div className="grid grid-cols-2 gap-6">

                        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-7">

                            <div className="flex items-center gap-3 mb-4">

                                <MapPin className="text-cyan-300 w-6 h-6" />

                                <h3 className="text-white font-semibold text-xl">
                                    Personalized Trips
                                </h3>

                            </div>

                            <p className="text-gray-300 text-lg">
                                Tailored travel experiences designed for you.
                            </p>

                        </div>

                        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-7">

                            <div className="flex items-center gap-3 mb-4">

                                <Star className="text-yellow-300 w-6 h-6" />

                                <h3 className="text-white font-semibold text-xl">
                                    Trusted Platform
                                </h3>

                            </div>

                            <p className="text-gray-300 text-lg">
                                Thousands of happy users around the world.
                            </p>

                        </div>

                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-1/2 flex items-center justify-center px-12 bg-zinc-950 relative">

                {/* GLOW */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full"></div>

                {/* REGISTER CARD */}
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
                                Create Account
                            </h1>

                            <p className="text-gray-400 text-xl leading-relaxed max-w-xl">
                                Sign up and start planning your next unforgettable adventure today.
                            </p>

                        </div>

                        {/* FORM */}
                        <form
                            onSubmit={handleRegister}
                            className="space-y-7"
                        >

                            {/* FULL NAME */}
                            <div>

                                <label className="block text-base text-gray-300 mb-3 font-medium">
                                    Full Name
                                </label>

                                <div className="relative">

                                    <User className="absolute left-5 top-5 text-gray-400 w-5 h-5 pointer-events-none" />

                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl pl-16 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 focus:bg-white/10 transition text-lg"
                                    />

                                </div>

                            </div>

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

                            {/* CONFIRM PASSWORD */}
                            <div>

                                <label className="block text-base text-gray-300 mb-3 font-medium">
                                    Confirm Password
                                </label>

                                <div className="relative">

                                    <Lock className="absolute left-5 top-5 text-gray-400 w-5 h-5 pointer-events-none" />

                                    <input
                                        type="password"
                                        placeholder="Confirm your password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl pl-16 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 focus:bg-white/10 transition text-lg"
                                    />

                                </div>

                            </div>

                            {/* BUTTON */}
                            <button
                                type="submit"
                                className="w-full h-16 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 text-white font-bold text-xl hover:scale-[1.01] active:scale-[0.99] transition duration-300 shadow-2xl"
                            >
                                Create Account
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

                        {/* LOGIN */}
                        <p className="text-center text-gray-400 mt-10 text-lg">

                            Already have an account?{" "}

                            <Link
                                href="/login"
                                className="text-cyan-400 hover:text-cyan-300 font-semibold transition"
                            >
                                Sign In
                            </Link>

                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}