'use client';
import Link from 'next/link';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function FinalCTA() {
    return (
        <section className="section bg-[#2463eb] text-white relative overflow-hidden py-32">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 mix-blend-multiply"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

            <div className="container-custom text-center relative z-10 px-4 sm:px-6">
                <FadeIn className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-xl">
                        <Sparkles size={16} className="text-blue-200" />
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-white/90">Experience the difference</span>
                    </div>

                    <h2 className="mb-8 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                        Ready to Book Your <br className="hidden sm:block" />
                        <span className="text-blue-100">Kansas City</span> Ride?
                    </h2>

                    <p className="text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-white/80 font-light leading-relaxed">
                        Join 500,000+ satisfied travelers who trust the Quicksilver difference. Secure your fixed-rate airport shuttle in under 60 seconds.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-2xl mx-auto">
                        <Link
                            href="/reservation"
                            className="btn btn-cta shadow-[0_20px_50px_rgba(249,115,22,0.3)] text-xl w-full sm:w-auto px-12 py-6 border-none font-black uppercase tracking-tight flex items-center justify-center gap-3 group bg-orange-500 hover:bg-orange-600 transition-all active:scale-95"
                        >
                            <span>Book Online Now</span>
                            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                        <a
                            href="tel:913-262-0905"
                            className="btn bg-white/10 backdrop-blur-md text-white border-2 border-white/20 hover:bg-white hover:text-[#2463eb] text-xl w-full sm:w-auto px-12 py-6 flex items-center justify-center gap-3 font-black uppercase tracking-tight transition-all active:scale-95"
                        >
                            <Phone size={24} />
                            913-262-0905
                        </a>
                    </div>

                    <p className="mt-12 text-sm text-white/50 font-bold uppercase tracking-[0.2em]">
                        24/7 Dispatch · Fixed Rates · Guaranteed Punctuality
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}
