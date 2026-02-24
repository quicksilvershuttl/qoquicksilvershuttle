'use client';
import { ChevronDown } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function FAQSection() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container-custom max-w-4xl mx-auto">
                <FadeIn className="text-center mb-16">
                    <h2 className="mb-6 font-display text-4xl md:text-5xl text-[#2463eb] tracking-tight font-black">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-light">
                        Clear answers to your most pressing questions about our Kansas City airport shuttle services.
                    </p>
                </FadeIn>

                <div className="space-y-4">
                    {[
                        {
                            q: "How much does an airport shuttle in Kansas City cost in 2026?",
                            a: "Quicksilver Airport Shuttle offers fixed 2026 rates starting from $35 for economy transfers, $55 for business class sedans, and $75 for premium SUVs to and from MCI Airport. Our rates are completely transparent with no hidden surge fees."
                        },
                        {
                            q: "How do I book an airport shuttle to MCI in Kansas City?",
                            a: "You can seamlessly book your Quicksilver airport shuttle or car service online through our digital reservation system or call our 24/7 dispatch at 913-262-0905. We highly recommend booking at least 24 hours in advance."
                        },
                        {
                            q: "Are there discounted university shuttle rates in Kansas?",
                            a: "Yes, Quicksilver offers specialized, direct shuttle routes for university students across Kansas and Missouri at fixed rates, including Baker University, Benedictine College, and Bethany College."
                        },
                        {
                            q: "What happens if my flight is delayed?",
                            a: "Our dispatch team monitors live flight telemetry for all Kansas City International Airport (MCI) arrivals. If your flight is delayed or arrives early, your chauffeur will adjust their schedule to be there exactly when you land, at no extra cost."
                        },
                        {
                            q: "Does Quicksilver provide pet-friendly airport transportation?",
                            a: "Yes, we offer pet-friendly airport shuttle services across Kansas City. We only ask that your pets are safely secured in a travel carrier during transit to ensure the comfort and safety of all passengers and our chauffeurs."
                        }
                    ].map((faq, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <details className="group bg-slate-50 border border-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ring-1 ring-[#2463eb]/5">
                                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-[#2463eb] text-lg font-display">
                                    {faq.q}
                                    <ChevronDown className="text-[#2463eb] transition-transform duration-300 group-open:rotate-180" size={24} />
                                </summary>
                                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-[#2463eb]/10 pt-4 bg-white">
                                    {faq.a}
                                </div>
                            </details>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
