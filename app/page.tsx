export default function Home() {
    return (
        <main className="min-h-screen text-white">

            {/* Hero Section */}
            <section
                className="min-h-screen bg-cover bg-center relative"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
                }}
            >

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Navbar */}
                <nav className="relative z-10 flex justify-between items-center px-10 py-6">

                    <h1 className="text-3xl font-bold">
                        TravelApp
                    </h1>

                    <div className="flex gap-8 text-lg">
                        <a href="#" className="hover:text-gray-300 transition">
                            Home
                        </a>

                        <a href="#" className="hover:text-gray-300 transition">
                            Destinations
                        </a>

                        <a href="#" className="hover:text-gray-300 transition">
                            About
                        </a>

                        <a href="#" className="hover:text-gray-300 transition">
                            Login
                        </a>
                    </div>

                </nav>

                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[85vh] px-6">

                    <h2 className="text-7xl font-bold max-w-5xl leading-tight">
                        Explore The World Like Never Before
                    </h2>

                    <p className="text-xl text-gray-200 mt-8 max-w-2xl leading-relaxed">
                        Plan unforgettable trips, discover breathtaking destinations,
                        and create personalized travel experiences with ease.
                    </p>

                    <div className="flex gap-6 mt-10">

                        <button className="px-8 py-4 bg-white text-black rounded-2xl text-lg font-semibold hover:scale-105 transition">
                            Start Exploring
                        </button>

                        <button className="px-8 py-4 border border-white rounded-2xl text-lg font-semibold hover:bg-white hover:text-black transition">
                            Learn More
                        </button>

                    </div>

                </div>

            </section>

        </main>
    );
}