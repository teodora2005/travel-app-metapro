"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Sidebar from "../../components/Sidebar";

export default function ItineraryDetailsPage() {

    const params = useParams();

    const [itinerary, setItinerary] = useState(null);

    useEffect(() => {

        const saved =
            JSON.parse(localStorage.getItem("itineraries")) || [];

        const selectedItinerary =
            saved[params.id];

        setItinerary(selectedItinerary);

    }, [params.id]);

    if (!itinerary) {

        return (

            <div
                style={{
                    padding: "40px",
                }}
            >
                Loading...
            </div>

        );

    }

    return (

        <div
            style={{
                display: "flex",
                background: "#f5f7fb",
                minHeight: "100vh",
            }}
        >

            <Sidebar />

            <div
                style={{
                    padding: "40px",
                    width: "100%",
                }}
            >

                <h1>
                    {itinerary.destination}
                </h1>

                <p
                    style={{
                        color: "#6b7280",
                        marginBottom: "30px",
                    }}
                >
                    {itinerary.summary}
                </p>

                {itinerary.days.map((day) => (

                    <div
                        key={day.dayNumber}
                        style={{
                            background: "white",
                            padding: "25px",
                            borderRadius: "20px",
                            marginBottom: "25px",
                            border: "1px solid #e5e7eb",
                        }}
                    >

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >

                            <div>

                                <h2>
                                    Day {day.dayNumber}
                                </h2>

                                <p
                                    style={{
                                        color: "#6b7280",
                                    }}
                                >
                                    {day.title}
                                </p>

                            </div>

                        </div>

                        <h3>Places</h3>

                        <ul>

                            {day.places.map((place, index) => (

                                <li key={index}>
                                    {place}
                                </li>

                            ))}

                        </ul>

                        <div
                            style={{
                                marginTop: "25px",
                                background: "#e5e7eb",
                                height: "250px",
                                borderRadius: "15px",

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",

                                color: "#6b7280",
                            }}
                        >
                            Map placeholder
                        </div>

                    </div>

                ))}

            </div>

        </div>

    );
}