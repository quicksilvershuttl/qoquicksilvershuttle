'use client';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import FadeIn from '../FadeIn';
import Link from 'next/link';

export default function FAQSection() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/[0.02] rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container-custom max-w-5xl mx-auto relative z-10 px-4 sm:px-6">
                <FadeIn className="text-center mb-24 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-slate-50 rounded-full border border-slate-100 shadow-sm group">
                        <HelpCircle size={16} className="text-[#2463eb] group-hover:rotate-12 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Service Transparency</span>
                    </div>

                    <h2 className="mb-8 font-display text-4xl sm:text-5xl md:text-7xl font-black text-[#2463eb] tracking-tight leading-[1.05]">
                        Frequently Asked <br className="hidden sm:block" />
                        <span className="text-blue-500">Questions.</span>
                    </h2>

                    <p className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
                        Clear, definitive answers to help you navigate your Kansas City airport transportation with absolute confidence.
                    </p>
                </FadeIn>

                <div className="space-y-6 max-w-4xl mx-auto">
                    {[
                        {
                            q: "How much does an airport shuttle in Kansas City cost in 2026?",
                            a: "Quicksilver Airport Shuttle offers fixed 2026 rates starting from $35 for economy transfers, $55 for business class sedans, and $75 for premium SUVs. Unlike rideshare platforms, our rates are fixed and predictable."
                        },
                        {
                            q: "How do I book an airport shuttle to MCI?",
                            a: "You can book through our secure online reservation system or via our 24/7 human-operated dispatch at 913-262-0905. We recommend booking 24 hours in advance to guarantee vehicle availability."
                        },
                        {
                            q: "What happens if my flight to MCI is delayed?",
                            a: "Our dispatch center monitors live flight telemetry via satellite tracking. If your flight is delayed, diverted, or arrives early, your chauffeur dynamically adjusts. We will be there exactly when you touch down, guaranteed."
                        },
                        {
                            q: "Are there discounted university shuttle rates?",
                            a: "Yes. We maintain strategic transit partnerships with major institutions including KU, K-State, and Baker University. We offer specialized, fixed-rate student routes across the entire Mid-West region."
                        },
                        {
                            q: "Is Quicksilver pet-friendly?",
                            a: "Absolutely. We provide pet-friendly transportation across the KC Metro. We simply require pets to be safely secured in a travel carrier for the comfort and safety of both passengers and our chauffeurs."
                        }
                    ].map((faq, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <details className="group bg-white border-2 border-slate-50 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(36,99,235,0.08)] hover:border-blue-50 transition-all duration-500 overflow-hidden ring-1 ring-slate-100">
                                <summary className="flex items-center justify-between p-10 cursor-pointer list-none font-black text-[#2463eb] text-lg md:text-2xl font-display tracking-tight group-open:bg-blue-50/30 transition-colors">
                                    <span className="pr-10">{faq.q}</span>
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#2463eb] group-hover:bg-[#2463eb] group-hover:text-white transition-all duration-500 group-open:rotate-180 flex-shrink-0">
                                        <ChevronDown size={24} />
                                    </div>
                                </summary>
                                <div className="px-10 pb-12 pt-6 text-slate-500 text-lg leading-relaxed font-medium bg-white">
                                    <div className="pl-0 md:pl-4 border-l-4 border-blue-100 italic">
                                        {faq.a}
                                    </div>
                                    <div className="mt-10">
                                        <Link href="/faq" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#2463eb] hover:gap-4 transition-all">
                                            Read More Details <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </details>
                        </FadeIn>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link href="/faq" className="text-sm font-black text-slate-400 uppercase tracking-[0.35em] hover:text-[#2463eb] transition-colors">
                        View Complete Knowledge Base
                    </Link>
                </div>
            </div>
        </section>
    );
}
