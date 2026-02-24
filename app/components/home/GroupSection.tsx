'use client';
import Link from 'next/link';
import { Users, ArrowRight } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function GroupSection() {
    return (
        <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-white/50 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
                    <FadeIn delay={0.2} className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-white border border-white rounded-full shadow-sm text-[#2463eb]">
                            <Users size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">High-Capacity Transit</span>
                        </div>
                        <h2 className="mb-6 font-display text-3xl md:text-5xl text-[#2463eb] tracking-tight font-black leading-tight">
                            Group Shuttles & Event <br /> Logistics in Kansas City
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-8">
                            <p>
                                Coordinating transportation for large parties requires specialized logistics and high-capacity fleets. Whether you are planning a corporate retreat, a university athletic event, or a large family gathering, our group transportation services ensure everyone arrives together and on time.
                            </p>
                            <p>
                                We handle the routing complexities—like avoiding stadium traffic at Arrowhead or T-Mobile Center—so you can focus entirely on your event. Our luxury vans are equipped with climate control, ample luggage space, and premium seating to keep your entire group comfortable during transit.
                            </p>
                        </div>
                        <Link href="/group-shuttle" className="btn btn-cta px-8 py-4 shadow-xl font-bold">
                            View Group Rates <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </FadeIn>

                    <FadeIn className="lg:w-1/2 w-full">
                        <div className="relative w-full aspect-[4/3] max-h-[400px] lg:max-h-[500px] rounded-[40px] bg-[#2463eb] overflow-hidden shadow-2xl flex items-center justify-center group mt-8 lg:mt-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#2463eb] to-[#2463eb] opacity-80"></div>
                            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
                            <div className="relative z-10 text-center px-10">
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
                                    <Users size={40} className="text-white" />
                                </div>
                                <h3 className="text-3xl font-display font-bold text-white mb-4">Dedicated Vans</h3>
                                <p className="text-slate-300 text-lg">Perfect for 10+ passengers with full luggage capacity.</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
