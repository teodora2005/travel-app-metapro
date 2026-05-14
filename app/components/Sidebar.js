"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {

    const pathname = usePathname();

    const linkStyle = (path) => ({
        textDecoration: "none",
        color: pathname === path ? "#2563eb" : "#111827",

        background:
            pathname === path
                ? "#eef2ff"
                : "transparent",

        padding: "14px",
        borderRadius: "12px",

        fontWeight:
            pathname === path
                ? "600"
                : "400",

        transition: "0.2s",
    });

    return (

        <div
            style={{
                width: "260px",
                height: "100vh",
                background: "white",
                borderRight: "1px solid #e5e7eb",
                padding: "25px",
                boxSizing: "border-box",

                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >

            <div>

                {/* LOGO -> HOME PAGE */}
                <Link
                    href="/"
                    style={{
                        textDecoration: "none",
                    }}
                >

                    <h2
                        style={{
                            marginBottom: "50px",
                            color: "#2563eb",
                            cursor: "pointer",
                        }}
                    >
                        ✈ TravelApp
                    </h2>

                </Link>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >

                    <Link
                        href="/chatbot"
                        style={linkStyle("/chatbot")}
                    >
                        💬 Chat
                    </Link>

                    <Link
                        href="/itineraries"
                        style={linkStyle("/itineraries")}
                    >
                        📋 My itineraries
                    </Link>

                </div>

            </div>

            <button
                style={{
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    padding: "14px",
                    borderRadius: "14px",
                    cursor: "pointer",
                    fontSize: "15px",
                    fontWeight: "600",
                }}
            >
                + New itinerary
            </button>

        </div>

    );
}