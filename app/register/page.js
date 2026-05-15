"use client";

import { useState } from "react";
import Link from "next/link";

import { User, Mail, Lock, Plane, MapPin, Star } from "lucide-react";

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

        console.log({ name, email, password });
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
                <div className="absolute inset-0 bg-black/75" />
                {/* GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-black/40 to-blue-900/40" />

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col justify-between w-full p-16">
                    {/* LOGO */}
                    <div className="flex items-center gap-4 mb-16">
                        <div className="w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
                            <Plane className="text-white w-8 h-8" />
                        </div>
                        <h1 className="text-4xl font-bold text-white">TravelApp</h1>
                    </div>

                    {/* HERO TEXT */}
                    <div className="max-w-2xl">
                        <p className="text-cyan-300 font-semibold tracking-[0.3em] uppercase mb-6">
                            Begin Your Journey
                        </p>

                        <h2 className="text-6xl font-bold text-white leading-[1.1] mb-8">
                            Create memories that last forever.
                        </h2>

                        <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                            Join thousands of travelers discovering amazing destinations and
                            unforgettable experiences worldwide.
                        </p>
                    </div>

                    {/* BOTTOM CARDS */}
                    <div className="grid grid-cols-2 gap-6 mt-10">
                        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <MapPin className="text-cyan-300 w-6 h-6" />
                                <h3 className="text-white font-semibold text-lg">
                                    Personalized Trips
                                </h3>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Tailored travel experiences designed specifically around your
                                preferences.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <Star className="text-yellow-300 w-6 h-6" />
                                <h3 className="text-white font-semibold text-lg">
                                    Trusted Platform
                                </h3>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Thousands of happy users trust our premium travel platform.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:w-1/2 flex items-center justify-center px-10 bg-zinc-950 relative">
                {/* GLOW */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />

                {/* REGISTER CARD */}
                <div className="relative z-10 w-full max-w-2xl">
                    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-12">
                        {/* MOBILE LOGO */}
                        <div className="lg:hidden flex justify-center mb-10">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                                <Plane className="text-white w-8 h-8" />
                            </div>
                        </div>

                        {/* HEADER */}
                        <div className="mb-10 text-center">
                            <h1 className="text-5xl font-bold text-white mb-4">
                                Create Account
                            </h1>
                            <p className="text-gray-400 leading-relaxed">
                                Sign up and start planning your next unforgettable adventure
                                today.
                            </p>
                        </div>

                        {/* FORM */}
                        <form onSubmit={handleRegister} className="space-y-6">
                            {/* FULL NAME */}
                            <div>
                                <label className="block text-sm text-gray-300 mb-2 font-medium">
                                    Full Name
                                </label>

                                {/* IMPORTANT: flex container = no overlap ever */}
                                <div className="flex items-center w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-4 focus-within:border-cyan-400 focus-within:bg-white/10 transition">
                                    <User className="text-gray-400 w-5 h-5 mr-3" />
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500 text-lg"
                                    />
                                </div>
                            </div>

                            {/* EMAIL */}
                            <div>
                                <label className="block text-sm text-gray-300 mb-2 font-medium">
                                    Email Address
                                </label>

                                <div className="flex items-center w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-4 focus-within:border-cyan-400 focus-within:bg-white/10 transition">
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
                            <div>
                                <label className="block text-sm text-gray-300 mb-2 font-medium">
                                    Password
                                </label>

                                <div className="flex items-center w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-4 focus-within:border-cyan-400 focus-within:bg-white/10 transition">
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

                            {/* CONFIRM PASSWORD */}
                            <div>
                                <label className="block text-sm text-gray-300 mb-2 font-medium">
                                    Confirm Password
                                </label>

                                <div className="flex items-center w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-4 focus-within:border-cyan-400 focus-within:bg-white/10 transition">
                                    <Lock className="text-gray-400 w-5 h-5 mr-3" />
                                    <input
                                        type="password"
                                        placeholder="Confirm your password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500 text-lg"
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
                            <div className="flex-1 h-px bg-white/10" />
                            <span className="text-gray-500 text-sm tracking-[0.2em] whitespace-nowrap">
                OR CONTINUE WITH
              </span>
                            <div className="flex-1 h-px bg-white/10" />
                        </div>

                        {/* GOOGLE BUTTON */}
                        <button className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl text-white font-semibold hover:bg-white/10 transition duration-300 text-lg">
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