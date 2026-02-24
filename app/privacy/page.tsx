import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy',
    description: 'Quicksilver Airport Shuttle Privacy Policy regarding data collection, security, and use.',
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen pt-24 pb-16 bg-white">
            <div className="container-custom max-w-4xl">
                <h1 className="text-4xl font-bold font-display text-[#2463eb] mb-8">Privacy Policy</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm space-y-6 text-[#2463eb]/80 border border-[#2463eb]/10">
                    <p>
                        At Quicksilver Airport Shuttle, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our Kansas City airport shuttle and car services.
                    </p>

                    <h2 className="text-2xl font-bold text-[#2463eb] mt-8 mb-4">1. Information We Collect</h2>
                    <p>
                        When you book a reservation, schedule a service, or contact us for a fare quote, we may collect the following information:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Name, email address, and phone number.</li>
                        <li>Pickup and drop-off locations (e.g., MCI Airport, home address, hotel).</li>
                        <li>Flight details for arriving and departing flights.</li>
                        <li>Payment and billing information securely processed via our payment gateway.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#2463eb] mt-8 mb-4">2. How We Use Your Information</h2>
                    <p>
                        The information we collect is used strictly to provide the best airport shuttle service possible:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>To confirm, process, and execute your transportation reservation.</li>
                        <li>To communicate with you regarding dispatch (e.g., chauffeur arrival, flight tracking).</li>
                        <li>To improve our digital reservation ecosystem and website user experience.</li>
                        <li>To send promotional emails (only if you have opted in).</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-[#2463eb] mt-8 mb-4">3. Data Security and Sharing</h2>
                    <p>
                        We implement industry-standard security measures, including SSL encryption, to ensure your data is safe throughout your usage of our website. We do not sell or share your personal data with third-party marketers. We may share essential data only with our chauffeurs or dispatchers strictly to complete your ride.
                    </p>

                    <h2 className="text-2xl font-bold text-[#2463eb] mt-8 mb-4">4. Contact Information</h2>
                    <p>
                        If you have any questions regarding this Privacy Policy or how we handle your data alongside our airport car service operations, please <Link href="/contact" className="text-[#2463eb] font-bold hover:underline">contact us</Link>.
                    </p>

                    <p className="pt-8 text-sm text-[#2463eb]/40">
                        Last Updated: 2026. Quicksilver Airport Shuttle.
                    </p>
                </div>
            </div>
        </main>
    );
}
