'use client';
import Link from 'next/link';
import { GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function UniversityDeals() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2463eb]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

            <div className="container-custom relative z-10 px-4 sm:px-6">
                <FadeIn className="text-center mb-20 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-white rounded-full shadow-xl border border-white group">
                        <GraduationCap size={18} className="text-[#2463eb] group-hover:rotate-12 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Academic Transit Partner</span>
                    </div>

                    <h2 className="mb-8 font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#2463eb] tracking-tight leading-[1.1]">
                        Discounted University <br className="hidden sm:block" />
                        <span className="text-blue-500">Shuttle Rates</span>
                    </h2>

                    <p className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
                        Quicksilver provides safe, reliable, and specialized airport shuttle routes for university students across Kansas and Missouri at highly competitive, fixed rates.
                    </p>
                </FadeIn>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { name: 'Baker University', price: '$135', location: 'Baldwin City, KS' },
                        { name: 'Benedictine College', price: '$65', location: 'Atchison, KS' },
                        { name: 'Bethany College', price: '$260', location: 'Lindsborg, KS' },
                        { name: 'Haskell University', price: '$135', location: 'Lawrence, KS' }
                    ].map((deal, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="group relative bg-white border border-white p-10 rounded-[48px] text-center shadow-xl hover:shadow-[0_40px_80px_rgba(36,99,235,0.15)] transition-all duration-700 hover:-translate-y-3 overflow-hidden ring-1 ring-slate-100 h-full flex flex-col">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#2463eb]/[0.03] rounded-bl-[80px] -mr-8 -mt-8 transition-all duration-700 group-hover:bg-[#2463eb]/5 group-hover:scale-110"></div>

                                <div className="mb-8">
                                    <h3 className="text-2xl font-black mb-2 font-display text-[#2463eb] tracking-tight">{deal.name}</h3>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{deal.location}</p>
                                </div>

                                <div className="w-12 h-1.5 bg-[#2463eb]/10 mx-auto mb-10 rounded-full group-hover:w-20 group-hover:bg-[#2463eb]/30 transition-all duration-500"></div>

                                <div className="mb-10 flex-grow">
                                    <p className="text-5xl font-black text-[#2463eb] font-display tracking-tighter drop-shadow-sm group-hover:scale-110 transition-transform duration-500">
                                        {deal.price}
                                        <span className="text-sm font-black text-slate-300 ml-1 uppercase tracking-widest">Base</span>
                                    </p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-3 flex items-center justify-center gap-2">
                                        <ShieldCheck size={14} className="text-green-500" /> Fixed Student Rate
                                    </p>
                                </div>

                                <Link
                                    href="/reservation"
                                    prefetch={false}
                                    className="btn btn-cta w-full border-none flex items-center justify-center gap-3 transition-all duration-500 py-5 rounded-3xl font-black uppercase tracking-tight shadow-xl shadow-orange-500/20 active:scale-95 group-hover:bg-orange-600"
                                >
                                    <span>Book Now</span>
                                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-slate-400 text-xs font-black uppercase tracking-[0.3em]">
                        Student ID Required · Group Discounts Available · Serving 15+ Campuses
                    </p>
                </div>
            </div>
        </section>
    );
}
