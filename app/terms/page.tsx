import Link from 'next/link';

export const metadata = {
    title: 'Terms of Service',
    description: 'Quicksilver Airport Shuttle Terms of Service covering bookings, cancellations, and policies.',
};

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen pt-24 pb-16 bg-white">
            <div className="container-custom max-w-4xl">
                <h1 className="text-4xl font-bold font-display text-[#2463eb] mb-8">Terms of Service</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm space-y-8 text-[#2463eb]/80 leading-relaxed border border-[#2463eb]/10">
                    <p>
                        Welcome to Quicksilver Airport Shuttle. By accessing our website, making a reservation, or using our Kansas City airport shuttle and car services, you agree to comply with and be bound by the following Terms of Service. Please review them carefully.
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold text-[#2463eb] mb-4">1. Booking and Reservations</h2>
                        <p className="mb-4">
                            All reservations made via our website, email, or over the phone are subject to availability.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Bookings must be made in advance. For prime airport shuttle times (e.g., 3 PM - 5 PM at MCI Airport), we recommend booking at least 24 hours prior.</li>
                            <li>You must provide accurate flight details (airline, flight number, time) so our chauffeurs can track your arrival.</li>
                            <li>A confirmation email will be dispatched once a booking is finalized and processed.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#2463eb] mb-4">2. Pricing and Payments</h2>
                        <p>
                            Quicksilver offers fixed 2026 rates on direct airport loops and point-to-point services. All prices shown online are base rates or estimates. Actual fares may be affected by extreme weather, exceptional delays, wait time, or route changes requested dynamically by the passenger. Once a trip fare is quoted and confirmed without itinerary changes, no hidden fees will be added.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#2463eb] mb-4">3. Cancellation and Wait Time Policy</h2>
                        <p className="mb-4">
                            We understand travel plans change. To maintain top-tier service standards, we adhere to the following:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Cancellations:</strong> You may cancel up to 12 hours prior to your scheduled pickup time with no penalty. Late cancellations may incur a fee.</li>
                            <li><strong>Airport Wait Time:</strong> Our chauffeurs grant an exact complimentary grace period (typically 45 minutes on domestic, 60 minutes on international) after your flight actually lands. Time past the grace period is subject to standard hourly wait fees.</li>
                            <li><strong>No-Shows:</strong> If a passenger fails to appear without prior contact, it is considered a non-refundable "no-show".</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#2463eb] mb-4">4. Passenger Conduct and Luggage</h2>
                        <p>
                            To guarantee the highest quality environment, all Quicksilver vehicles are strictly non-smoking (this includes e-cigarettes and vaporizers). Passengers are responsible for any unusual damage or spills incurred within the luxury car limits. We hold zero liability for unstated excessive luggage that does not securely fit in chosen vehicle types (e.g., Economy vs Premium SUV).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#2463eb] mb-4">5. Limitation of Liability</h2>
                        <p>
                            While we guarantee high reliability, Quicksilver Airport Shuttle shall not be held liable for delays out of our control (e.g., sudden massive traffic build-ups, extreme weather acts, road closures caused by accidents) leading to missed flights or meetings. We commit to executing safe, prompt bypass maneuvers using chauffeur expertise whenever circumstances allow.
                        </p>
                    </section>

                    <p className="pt-8 text-sm text-[#2463eb]/50 border-t border-[#2463eb]/10">
                        For further queries or operational disputes, securely reach transparent resolution via our <Link href="/contact" className="text-[#2463eb] font-bold hover:text-[#1d4ed8] transition-colors">Contact page</Link>. Last updated in 2026 for Gotch SEO Trust signals compliance.
                    </p>
                </div>
            </div>
        </main>
    );
}
