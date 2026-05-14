"use client";

export default function PaymentGateway() {
    return (
        <main className="min-h-screen bg-[#030712] text-white flex items-center justify-center px-6 py-16">

            <div className="w-full max-w-2xl rounded-[36px] border border-white/10 bg-[#0b1120] p-10 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

                <h1 className="text-5xl font-black text-center">
                    Payment Details
                </h1>

                <p className="mt-6 text-center text-zinc-400 text-lg leading-relaxed">
                    Complete the premium subscription using the banking details below.
                </p>

                <div className="mt-12 space-y-6">

                    <Info label="Company" value="TravelAI Premium" />

                    <Info label="IBAN" value="RO49AAAA1B31007593840000" />

                    <Info label="Bank" value="Banca Comercială Română" />

                    <Info label="Reference" value="PREMIUM-SUBSCRIPTION" />

                    <Info label="Amount" value="$12 / month" />

                </div>

            </div>

        </main>
    );
}
function Info({ label, value }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300 font-bold">
                {label}
            </p>

            <p className="mt-3 text-xl font-semibold text-white break-all">
                {value}
            </p>

        </div>
    );
}