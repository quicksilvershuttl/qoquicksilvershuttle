'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Briefcase, ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function CorporateSection() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-500/[0.01] rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container-custom relative z-10 px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20 xl:gap-24">
                    <FadeIn className="lg:w-1/2 order-2 lg:order-1">
                        <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] max-h-[650px] rounded-[60px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)] group">
                            <div className="absolute inset-0 bg-[#0c1d37]/20 group-hover:bg-transparent transition-all duration-1000 z-10 pointer-events-none"></div>
                            <Image
                                src="/Home page images/Business Class.png"
                                alt="Corporate Car Service in Kansas City"
                                fill
                                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                            />

                            {/* Floating Stats Card */}
                            <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-2xl p-8 rounded-[40px] shadow-2xl z-20 border border-white/50 group-hover:translate-y-[-10px] transition-transform duration-700">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-[#2463eb] text-white rounded-[24px] flex items-center justify-center shadow-lg shadow-blue-500/30">
                                        <TrendingUp size={32} />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-black text-[#0c1d37] font-display tracking-tight">Tier 1 Reliability</p>
                                        <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">99.9% On-Time Performance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="lg:w-1/2 order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 mb-10 px-5 py-2 bg-slate-50 rounded-full border border-slate-100 shadow-sm group">
                            <Briefcase size={16} className="text-[#2463eb]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Global Executive Standards</span>
                        </div>

                        <h2 className="mb-10 font-display text-4xl sm:text-5xl md:text-7xl font-black text-[#2463eb] tracking-tight leading-[1.05]">
                            Corporate Car <br className="hidden sm:block" />
                            <span className="text-blue-500">Service.</span>
                        </h2>

                        <div className="space-y-8 text-xl text-slate-600 leading-relaxed mb-12 font-light">
                            <p className="font-bold text-[#0c1d37] text-2xl leading-snug">
                                Tailored for business professionals who require dependable, discreet, and seamless transportation throughout the KC Metro.
                            </p>
                            <p>
                                We understand that your time is your most valuable asset. For dedicated corporate accounts, we offer streamlined billing, priority dispatch, and guaranteed vehicle availability.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                {[
                                    'Streamlined Monthly Billing',
                                    'Priority 24/7 Dispatch',
                                    'Discreet Executive Fleet',
                                    'Vetted Chauffeurs Only'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-black text-[#0c1d37] uppercase tracking-wide">
                                        <ShieldCheck size={20} className="text-green-500 flex-shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-8">
                            <Link
                                href="/corporate"
                                className="btn btn-cta text-xl px-14 py-6 shadow-2xl shadow-orange-500/20 active:scale-95 transition-all rounded-[32px] font-black uppercase tracking-tight flex items-center justify-center gap-3 border-none group bg-orange-500 hover:bg-orange-600 w-full sm:w-auto"
                            >
                                <span>Explore Fleet</span>
                                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                            </Link>

                            <div className="text-left hidden sm:block">
                                <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.35em] mb-1 text-center sm:text-left">Availability</p>
                                <p className="text-sm font-bold text-slate-500 text-center sm:text-left">Guaranteed Vehicle Access</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
