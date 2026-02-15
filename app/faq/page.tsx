import { Metadata } from 'next';
import { HelpCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';

export const metadata: Metadata = {
    title: 'FAQ | Quicksilver Airport Shuttle - Common Questions',
    description: 'Find answers to frequently asked questions about Quicksilver Airport Shuttle service, booking, pricing, and policies.',
};

export default function FAQPage() {
    const faqs = [
        // ... (data remains the same)
        {
            category: 'Booking & Reservations',
            questions: [
                {
                    question: 'How do I book a ride?',
                    answer: 'You can book online through our reservation system, call us at (913) 262-0905, or email us. We recommend booking at least 24 hours in advance for guaranteed availability.'
                },
                {
                    question: 'How far in advance should I book?',
                    answer: 'We recommend booking at least 24 hours in advance, especially during peak travel times (holidays, weekends). However, we can often accommodate same-day bookings based on availability.'
                },
                {
                    question: 'Can I modify or cancel my reservation?',
                    answer: 'Yes, you can modify or cancel your reservation. We offer free cancellation up to 24 hours before your scheduled pickup time. Cancellations within 24 hours may be subject to a cancellation fee.'
                },
                {
                    question: 'Do I receive a confirmation?',
                    answer: 'Yes, you will receive an email confirmation immediately after booking with all the details of your reservation, including pickup time, location, and driver contact information.'
                }
            ]
        },
        {
            category: 'Pricing & Payment',
            questions: [
                {
                    question: 'How much does the service cost?',
                    answer: 'Our shared shuttle service starts at $35 per person. Private sedan service starts at $55, and private SUV service starts at $75. Exact pricing depends on your pickup location and destination. Use our online quote tool for accurate pricing.'
                },
                {
                    question: 'What payment methods do you accept?',
                    answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), debit cards, and cash. Payment can be made online during booking or directly to the driver.'
                },
                {
                    question: 'Are there any additional fees?',
                    answer: 'The quoted price includes all standard fees. Additional charges may apply for extra stops, excessive luggage, or after-hours service (midnight to 5 AM). Gratuity is not included but appreciated.'
                },
                {
                    question: 'Do you offer discounts?',
                    answer: 'Yes! We offer discounts for round-trip bookings, group travel, corporate accounts, and university students. Contact us for special rates and volume discounts.'
                }
            ]
        },
        {
            category: 'Service & Operations',
            questions: [
                {
                    question: 'What areas do you serve?',
                    answer: 'We serve the entire Kansas City metro area including Kansas City (MO & KS), Overland Park, Olathe, Lawrence, Topeka, Manhattan, Wichita, and surrounding communities. See our Service Areas page for a complete list.'
                },
                {
                    question: 'Do you operate 24/7?',
                    answer: 'Yes! Quicksilver provides 24/7 airport shuttle service to accommodate all flight schedules, including early morning departures and late-night arrivals.'
                },
                {
                    question: 'How early should I schedule my pickup for the airport?',
                    answer: 'We recommend scheduling pickup 2-3 hours before domestic flights and 3-4 hours before international flights. This accounts for travel time, check-in, and security screening.'
                },
                {
                    question: 'Do you track flights?',
                    answer: 'Yes, for airport pickups, we track all incoming flights and adjust pickup times accordingly if your flight is delayed or arrives early. You don\'t need to notify us of flight changes.'
                },
                {
                    question: 'What if my flight is delayed?',
                    answer: 'No problem! We monitor all flights in real-time. If your flight is delayed, we\'ll adjust your pickup time automatically. There\'s no need to call us unless you want to make other arrangements.'
                }
            ]
        },
        {
            category: 'Vehicles & Capacity',
            questions: [
                {
                    question: 'What types of vehicles do you have?',
                    answer: 'We offer a variety of vehicles including sedans, SUVs, vans, and stretched limousines. All vehicles are clean, comfortable, well-maintained, and equipped with air conditioning.'
                },
                {
                    question: 'How many passengers can you accommodate?',
                    answer: 'Our sedans accommodate up to 3 passengers, SUVs up to 6 passengers, and vans up to 14 passengers. For larger groups, we can coordinate multiple vehicles.'
                },
                {
                    question: 'How much luggage can I bring?',
                    answer: 'Each passenger is allowed 2 standard pieces of luggage (1 checked bag + 1 carry-on). If you have additional or oversized luggage, please notify us when booking so we can ensure adequate space.'
                },
                {
                    question: 'Are car seats available?',
                    answer: 'Yes, we can provide child car seats upon request. Please specify the type and number of car seats needed when making your reservation. There may be a small additional fee.'
                }
            ]
        },
        {
            category: 'Safety & Drivers',
            questions: [
                {
                    question: 'Are your drivers licensed and insured?',
                    answer: 'Yes, all our drivers are professionally licensed, fully insured, and undergo comprehensive background checks. They are experienced, courteous, and knowledgeable about the Kansas City area.'
                },
                {
                    question: 'What COVID-19 safety measures do you have?',
                    answer: 'We follow all CDC guidelines including regular vehicle sanitization, driver health screenings, and availability of hand sanitizer. Masks are available upon request.'
                },
                {
                    question: 'How do I identify my driver?',
                    answer: 'Your driver will have a Quicksilver identification badge and will be waiting at the designated pickup location. For airport pickups, they\'ll have a sign with your name.'
                }
            ]
        },
        {
            category: 'Special Services',
            questions: [
                {
                    question: 'Do you provide corporate/business travel services?',
                    answer: 'Yes! We offer corporate accounts with special rates, invoicing, and dedicated service. Contact us to set up a corporate account for your business.'
                },
                {
                    question: 'Can you transport to events (concerts, sports, etc.)?',
                    answer: 'Absolutely! We provide transportation to Arrowhead Stadium, Kauffman Stadium, T-Mobile Center, and other major venues in the Kansas City area.'
                },
                {
                    question: 'Do you serve universities?',
                    answer: 'Yes, we are a preferred transportation provider for Kansas University (KU), Kansas State University (KSU), Pittsburg State, Washburn University, and many other schools. We offer special student rates.'
                },
                {
                    question: 'Can I book a round trip?',
                    answer: 'Yes! We encourage round-trip bookings and offer discounted rates for round-trip service. You can book both legs of your journey at once for convenience.'
                }
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section - REFRESHED */}
            <section className="relative py-32 bg-slate-900 text-white overflow-hidden text-center">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px]"></div>

                <div className="container-custom relative z-10">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-amber-500 font-bold text-xs mb-8 uppercase tracking-widest border border-white/20 backdrop-blur-md">
                            <HelpCircle size={16} />
                            Knowledge Base
                        </div>
                        <h1 className="mb-6 font-display font-bold text-5xl md:text-8xl tracking-tight uppercase leading-[0.9]">
                            Frequently <br />
                            <span className="text-amber-500">Asked Questions</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium italic">
                            Everything you need to know about your premium Kansas City airport transportation journey.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto space-y-16">
                        {faqs.map((category, categoryIndex) => (
                            <FadeIn key={categoryIndex} delay={categoryIndex * 0.1}>
                                <div>
                                    <h2 className="text-3xl font-display font-bold mb-8 pb-4 border-b-2 border-amber-500 text-slate-900 uppercase tracking-wide">
                                        {category.category}
                                    </h2>
                                    <div className="space-y-6">
                                        {category.questions.map((faq, faqIndex) => (
                                            <div
                                                key={faqIndex}
                                                className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-lg transition-all border-l-4 border-l-slate-900 group"
                                            >
                                                <h3 className="text-xl font-bold mb-4 text-slate-900 flex items-start gap-4">
                                                    <span className="text-amber-500 font-display text-2xl group-hover:scale-110 transition-transform">Q:</span>
                                                    <span>{faq.question}</span>
                                                </h3>
                                                <div className="flex items-start gap-4 ml-10">
                                                    <span className="text-slate-400 font-bold text-lg">A:</span>
                                                    <p className="text-slate-600 leading-relaxed text-lg">{faq.answer}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.flatMap(cat => cat.questions).map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />

            {/* Still Have Questions */}
            <section className="section bg-white border-t border-slate-100">
                <div className="container-custom">
                    <FadeIn>
                        <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
                            <h2 className="mb-6 font-display text-4xl font-bold relative z-10">Still Have Questions?</h2>
                            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto relative z-10">
                                Our friendly customer service team is available 24/7 to help you with any questions or concerns about your transportation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                                <a
                                    href="tel:913-262-0905"
                                    className="btn-primary py-4 px-10 text-lg flex items-center justify-center gap-3 hover:scale-105 transition-transform"
                                >
                                    <Phone size={22} />
                                    (913) 262-0905
                                </a>
                                <Link
                                    href="/contact"
                                    className="border-2 border-white/20 hover:border-white text-white py-4 px-10 rounded-full font-bold text-lg transition-all backdrop-blur-sm"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-amber-500 text-slate-900">
                <div className="container-custom text-center">
                    <FadeIn>
                        <h2 className="mb-6 font-display text-4xl font-bold">Ready to Book Your Ride?</h2>
                        <p className="text-xl mb-10 max-w-2xl mx-auto font-medium opacity-90">
                            Experience the Quicksilver difference. Book online or call us 24/7 for reliable KC transportation.
                        </p>
                        <Link href="/reservation" className="btn bg-slate-900 text-white hover:bg-slate-800 text-lg px-12 py-4 shadow-xl inline-block">
                            Book Now
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
