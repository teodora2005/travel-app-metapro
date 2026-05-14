"use client";

import "../chatbot.css";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function ChatbotPage() {

    const testBackendConnection = async () => {

        try {

            const response = await fetch(
                "http://localhost:8080/api/chatbot/questions"
            );

            const data = await response.json();

            console.log("BACKEND RESPONSE:", data);

        } catch (error) {

            console.error("BACKEND ERROR:", error);

        }

    };

    const questions = [
        "Which city would you like to visit?",
        "How many days will your trip last?",
        "What is your approximate budget?",
        "What are your interests?"
    ];

    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: questions[0]
        }
    ]);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [input, setInput] = useState("");

    const [itinerary, setItinerary] = useState(null);

    const generateRandomItinerary = () => {

        const itineraries = [

            {
                destination: "Rome",

                summary:
                    "A cultural journey through ancient landmarks and authentic Italian food.",

                days: [
                    {
                        dayNumber: 1,

                        title: "Ancient Rome",

                        places: [
                            "Colosseum",
                            "Roman Forum",
                            "Pantheon"
                        ]
                    },

                    {
                        dayNumber: 2,

                        title: "Historic Center",

                        places: [
                            "Trevi Fountain",
                            "Spanish Steps",
                            "Piazza Navona"
                        ]
                    }
                ]
            },

            {
                destination: "Paris",

                summary:
                    "A romantic getaway filled with museums, cafes and iconic sights.",

                days: [
                    {
                        dayNumber: 1,

                        title: "Classic Paris",

                        places: [
                            "Eiffel Tower",
                            "Louvre Museum",
                            "Seine River"
                        ]
                    },

                    {
                        dayNumber: 2,

                        title: "Art & Cafes",

                        places: [
                            "Montmartre",
                            "Sacre Coeur",
                            "Latin Quarter"
                        ]
                    }
                ]
            }

        ];

        const randomIndex =
            Math.floor(Math.random() * itineraries.length);

        setItinerary(itineraries[randomIndex]);
    };

    const handleSend = () => {

        if (input === "") return;

        const userMessage = {
            sender: "user",
            text: input
        };

        const updatedMessages = [
            ...messages,
            userMessage
        ];

        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length) {

            updatedMessages.push({
                sender: "bot",
                text: questions[nextQuestion]
            });

        } else {

            updatedMessages.push({
                sender: "bot",
                text: "Perfect! Your itinerary is ready."
            });

            generateRandomItinerary();

        }

        setMessages(updatedMessages);

        setCurrentQuestion(nextQuestion);

        setInput("");
    };

    return (

        <div
            style={{
                display: "flex",
            }}
        >

            <Sidebar />

            <div className="page">

                <div className="chat-section">

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            marginBottom: "10px",
                        }}
                    >

                        <div
                            style={{
                                width: "45px",
                                height: "45px",
                                borderRadius: "50%",
                                background: "#eef2ff",

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",

                                fontSize: "22px",
                            }}
                        >
                            🤖
                        </div>

                        <div>

                            <h2
                                style={{
                                    margin: 0,
                                }}
                            >
                                Travel Assistant
                            </h2>

                            <button
                                onClick={testBackendConnection}
                                style={{
                                    padding: "10px",
                                    marginTop: "10px",
                                    marginBottom: "10px",
                                    cursor: "pointer",
                                }}
                            >
                                Test Backend
                            </button>

                            <p
                                style={{
                                    margin: 0,
                                    color: "#16a34a",
                                    fontSize: "14px",
                                }}
                            >
                                ● Online
                            </p>

                        </div>

                    </div>

                    <div className="messages">

                        {messages.map((message, index) => (

                            <div
                                key={index}
                                className={`message-row ${message.sender}`}
                            >

                                <div
                                    className={`message ${message.sender}`}
                                >
                                    {message.text}
                                </div>

                            </div>

                        ))}

                    </div>

                    <div className="input-area">

                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSend();
                                }
                            }}
                            placeholder="Write here..."
                            className="input"
                        />

                        <button
                            onClick={handleSend}
                            className="send-button"
                        >
                            Send
                        </button>

                    </div>

                </div>

                <div className="itinerary-section">

                    <h1>Your itinerary</h1>

                    {!itinerary ? (

                        <p>No itinerary generated yet.</p>

                    ) : (

                        <div>

                            <h2>{itinerary.destination}</h2>

                            <p>{itinerary.summary}</p>

                            {itinerary.days.map((day) => (

                                <div
                                    key={day.dayNumber}
                                    className="day-card"
                                >

                                    <div className="day-title">
                                        Day {day.dayNumber}
                                    </div>

                                    <p>{day.title}</p>

                                    <ul>

                                        {day.places.map((place, index) => (

                                            <li key={index}>
                                                {place}
                                            </li>

                                        ))}

                                    </ul>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

            </div>

        </div>

    );
}