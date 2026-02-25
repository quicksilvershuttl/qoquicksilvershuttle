'use client';
import Link from 'next/link';
import { Users, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function GroupSection() {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/[0.02] rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

            <div className="container-custom relative z-10 px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20 xl:gap-24">
                    <FadeIn className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 mb-10 px-5 py-2 bg-white rounded-full shadow-xl border border-white group">
                            <Users size={16} className="text-[#2463eb]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">High-Capacity Logistics</span>
                        </div>

                        <h2 className="mb-10 font-display text-4xl sm:text-5xl md:text-7xl font-black text-[#2463eb] tracking-tight leading-[1.05]">
                            Group <br className="hidden sm:block" />
                            <span className="text-blue-500">Shuttles.</span>
                        </h2>

                        <div className="space-y-8 text-xl text-slate-600 leading-relaxed mb-12 font-light max-w-xl mx-auto lg:mx-0">
                            <p className="font-bold text-[#0c1d37] text-2xl leading-snug">
                                Coordinating transportation for large groups requires specialized routing and a high-capacity fleet.
                            </p>
                            <p>
                                Whether you are planning a corporate retreat, a university athletic event, or a large family gathering, our group services ensure everyone arrives together and on time. We handle the complexities of KC traffic—so you can focus on the event.
                            </p>
                            <div className="space-y-4 pt-4">
                                {[
                                    'Specialized Stadium Routing',
                                    'Luxury Executive Vans',
                                    'Dedicated Event Dispatcher',
                                    'Ample Luggage & Gear Space'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-xs font-black text-[#0c1d37] uppercase tracking-wider justify-center lg:justify-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#2463eb]"></div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Link
                            href="/group-shuttle"
                            className="btn btn-cta text-xl px-14 py-6 shadow-2xl shadow-orange-500/20 active:scale-95 transition-all rounded-[32px] font-black uppercase tracking-tight flex items-center justify-center gap-3 border-none group bg-orange-500 hover:bg-orange-600 w-full sm:w-auto"
                        >
                            <span>View Group Rates</span>
                            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </FadeIn>

                    <FadeIn delay={0.2} className="lg:w-1/2 w-full">
                        <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-square max-h-[650px] rounded-[60px] bg-[#0c1d37] overflow-hidden shadow-[0_50px_100px_rgba(12,29,55,0.3)] flex items-center justify-center group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0c1d37] to-[#1a3a6b] opacity-90 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 mix-blend-overlay"></div>

                            {/* Floating Destination Badge */}
                            <div className="absolute top-10 left-10 bg-white/10 backdrop-blur-xl p-5 border border-white/20 rounded-[32px] flex items-center gap-4 z-20 group-hover:translate-y-[-5px] transition-transform duration-700">
                                <MapPin size={24} className="text-white" />
                                <div>
                                    <p className="text-[10px] font-black text-white/50 uppercase tracking-widest leading-none mb-1">Top Venue</p>
                                    <p className="text-sm font-bold text-white leading-none">Arrowhead Stadium</p>
                                </div>
                            </div>

                            <div className="relative z-10 text-center px-12">
                                <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-10 border border-white/20 group-hover:bg-blue-600 transition-all duration-700 group-hover:rotate-12 group-hover:scale-110 shadow-2xl">
                                    <Users size={48} className="text-white" />
                                </div>
                                <h3 className="text-4xl sm:text-5xl font-display font-black text-white mb-6 tracking-tight">Dedicated <br /> Vans.</h3>
                                <p className="text-blue-200 text-xl font-light mb-10 max-w-xs mx-auto">Perfect for <span className="text-white font-bold">10-14 passengers</span> with full luggage capacity.</p>

                                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full group-hover:bg-white/10 transition-colors">
                                    <ShieldCheck size={18} className="text-green-400 font-black" />
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Fully Insured & Vetted</span>
                                </div>
                            </div>

                            {/* Corner Decoration */}
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-tl-[80px] group-hover:bg-blue-600/20 transition-all duration-700"></div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
