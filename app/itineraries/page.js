"use client";

import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Link from "next/link";

export default function ItinerariesPage() {

    const [itineraries, setItineraries] = useState([]);

    useEffect(() => {

        const saved =
            JSON.parse(localStorage.getItem("itineraries")) || [];

        setItineraries(saved);

    }, []);

    return (

        <div
            style={{
                display: "flex",
            }}
        >

            <Sidebar />

            <div
                style={{
                    padding: "40px",
                    background: "#f5f7fb",
                    minHeight: "100vh",
                    width: "100%",
                }}
            >

                <h1>My itineraries</h1>

                {itineraries.length === 0 ? (

                    <p>No itineraries saved.</p>

                ) : (

                    <div>

                        {itineraries.map((item, index) => (

                            <Link
                                key={index}
                                href={`/itineraries/${index}`}
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >

                                <div
                                    style={{
                                        background: "white",
                                        padding: "20px",
                                        borderRadius: "15px",
                                        marginTop: "20px",
                                        border: "1px solid #ddd",
                                        transition: "0.2s",
                                        cursor: "pointer",
                                    }}
                                >

                                    <h2>{item.destination}</h2>

                                    <p>{item.summary}</p>

                                    <button
                                        style={{
                                            marginTop: "15px",
                                            background: "#2563eb",
                                            color: "white",
                                            border: "none",
                                            padding: "10px 16px",
                                            borderRadius: "10px",
                                            cursor: "pointer",
                                        }}
                                        onClick={(e) => {

                                            e.preventDefault();

                                            const updated =
                                                itineraries.filter(
                                                    (_, i) => i !== index
                                                );

                                            setItineraries(updated);

                                            localStorage.setItem(
                                                "itineraries",
                                                JSON.stringify(updated)
                                            );

                                        }}
                                    >
                                        Delete
                                    </button>

                                </div>

                            </Link>

                        ))}

                    </div>

                )}

            </div>

        </div>

    );
}