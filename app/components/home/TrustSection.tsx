'use client';
import Link from 'next/link';
import { Star, ArrowRight, ShieldCheck } from 'lucide-react';
import FadeIn from '../FadeIn';
import TrustAvatars from '../TrustAvatars';

export default function TrustSection() {
    return (
        <section className="py-32 bg-white text-[#2463eb] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/[0.02] rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

            <div className="container-custom relative z-10 px-4 sm:px-6">
                <FadeIn className="max-w-5xl mx-auto text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 mb-10 px-5 py-2 bg-slate-50 rounded-full border border-slate-100 shadow-sm group">
                        <ShieldCheck size={16} className="text-green-500 group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Corporate Reliability Index</span>
                    </div>

                    <h2 className="mb-10 font-display text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-[#2463eb]">
                        Quicksilver Ensures Everything <br className="hidden md:block" />
                        <span className="text-blue-500">Goes According to Plan.</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-600 mb-16 font-light leading-relaxed max-w-3xl mx-auto">
                        Your satisfaction is our absolute priority. Experience superior quality, safety, and the fastest airport shuttle service in Kansas City without ever compromising your schedule.
                    </p>

                    {/* High-Impact Social Proof Card */}
                    <div className="w-full max-w-2xl bg-white p-10 md:p-12 rounded-[60px] shadow-[0_40px_100px_rgba(36,99,235,0.08)] border-2 border-slate-50 flex flex-col items-center gap-8 mb-16 hover:shadow-[0_40px_120px_rgba(36,99,235,0.12)] transition-shadow duration-700 group">
                        <div className="flex flex-col items-center gap-6">
                            <TrustAvatars />
                            <div className="flex flex-col items-center">
                                <div className="flex items-center gap-1.5 text-amber-500 mb-3 group-hover:scale-105 transition-transform">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} fill="currentColor" size={24} className="drop-shadow-sm" />
                                    ))}
                                </div>
                                <div className="text-4xl font-black text-[#2463eb] font-display tracking-tighter mb-1">4.9/5</div>
                                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Aggregate Rating</p>
                            </div>
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>

                        <p className="text-lg text-slate-500 font-medium leading-relaxed italic">
                            "Trusted by <strong className="text-[#2463eb] font-black">4,000+ happy riders</strong> across the Kansas City Metro every single year since 1982."
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-8">
                        <Link
                            href="/contact"
                            className="btn btn-cta text-xl px-14 py-6 shadow-2xl shadow-orange-500/20 active:scale-95 transition-all rounded-[32px] font-black uppercase tracking-tight flex items-center justify-center gap-3 border-none group bg-orange-500 hover:bg-orange-600"
                        >
                            <span>Contact Us Today</span>
                            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                        </Link>

                        <div className="text-left">
                            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.35em] mb-1">Local Heritage</p>
                            <p className="text-sm font-bold text-slate-500">Kansas City's Most Established Fleet</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
