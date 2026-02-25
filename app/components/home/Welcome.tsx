'use client';
import { Star, Navigation, DollarSign, MapPin, Clock, ShieldCheck } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function Welcome() {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/[0.04] rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>

            <div className="container-custom relative z-10 px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-center mb-24">
                    <FadeIn className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 mb-10 px-5 py-2 bg-white rounded-full shadow-xl border border-white group">
                            <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Reliability Index: 99.8%</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-[1.05] text-[#2463eb] mb-10 tracking-tight">
                            Reliable <br className="hidden sm:block" />
                            <span className="text-blue-500">Kansas City</span> <br className="hidden sm:block" />
                            Airport Shuttle.
                        </h2>

                        <div className="text-xl text-slate-600 space-y-8 max-w-xl">
                            <p className="font-bold text-[#2463eb] text-2xl leading-snug">
                                Quicksilver Provides fixed-rate, 24/7 premium airport car and shuttle service to Kansas City International Airport (MCI).
                            </p>
                            <p className="leading-relaxed font-light">
                                Since 1982, we have been the definitive transport solution for Wheeler Executive Airport, major venues like Arrowhead Stadium, and preferred transit for KU and K-State campuses.
                            </p>

                            <div className="bg-white p-10 rounded-[48px] shadow-[0_40px_100px_rgba(36,99,235,0.06)] border border-slate-50 mt-12 relative overflow-hidden group hover:shadow-[0_40px_120px_rgba(36,99,235,0.1)] transition-shadow duration-700">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[#2463eb]/[0.02] rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-700"></div>
                                <h3 className="font-display font-black text-[#2463eb] mb-6 flex items-center gap-4 text-2xl tracking-tight">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                                        <Star size={24} className="text-[#2463eb] fill-[#2463eb]" />
                                    </div>
                                    MCI Chauffeur Insights
                                </h3>
                                <p className="text-slate-500 italic font-medium leading-relaxed relative z-10 pl-4 border-l-4 border-blue-100">
                                    "MCI peak congestion typically occurs between <strong className="text-[#2463eb] font-black">3 PM and 5 PM</strong>. We strictly recommend scheduling your departure at least <strong className="text-[#2463eb] font-black">2.5 hours prior</strong> to domestic flights to ensure a seamless arrival."
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 w-full relative">
                        {/* Subtle background glow for features */}
                        <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

                        {[
                            { title: 'The Lowest Rates', desc: 'Premium rides at highly competitive, fixed rates from any destination.', icon: <DollarSign size={32} /> },
                            { title: 'Point to Point', desc: 'Direct, private car service tailored entirely to your schedule.', icon: <MapPin size={32} /> },
                            { title: 'Instant Booking', desc: 'Enjoy 24/7 dispatch and return service to and from the Airport.', icon: <Clock size={32} /> },
                            { title: 'Wide Coverage', desc: 'Serving Kansas City, MO, Overland Park, Lenexa, and beyond.', icon: <Navigation size={32} /> }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-10 rounded-[48px] shadow-[0_30px_60px_rgba(0,0,0,0.02)] border-2 border-white hover:shadow-[0_40px_100px_rgba(36,99,235,0.08)] hover:border-blue-50 transition-all duration-700 group flex flex-col h-full hover:-translate-y-3 z-10">
                                <div className="w-16 h-16 rounded-[24px] bg-slate-50 flex items-center justify-center text-[#2463eb] mb-8 group-hover:bg-[#2463eb] group-hover:text-white transition-all duration-700 shadow-inner group-hover:rotate-6">
                                    {feature.icon}
                                </div>
                                <h4 className="text-2xl font-black mb-4 text-[#2463eb] font-display tracking-tight">{feature.title}</h4>
                                <p className="text-slate-500 font-medium leading-relaxed text-sm flex-grow">{feature.desc}</p>
                                <div className="mt-8 pt-8 border-t border-slate-50">
                                    <span className="text-[10px] font-black text-[#2463eb] uppercase tracking-widest flex items-center gap-2">
                                        <ShieldCheck size={14} className="text-green-500" /> Guaranteed
                                    </span>
                                </div>
                            </div>
                        ))}
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
