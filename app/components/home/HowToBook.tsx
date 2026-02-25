'use client';
import Link from 'next/link';
import { CalendarCheck2, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function HowToBook() {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/[0.02] rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

            <div className="container-custom relative z-10 px-4 sm:px-6">
                <FadeIn className="text-center mb-24 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-white rounded-full shadow-xl border border-white group">
                        <CalendarCheck2 size={16} className="text-[#2463eb] group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Fast & Secure Booking</span>
                    </div>

                    <h2 className="mb-8 font-display text-4xl sm:text-5xl md:text-7xl font-black text-[#2463eb] tracking-tight leading-[1.05]">
                        How Do I Book My <br className="hidden sm:block" />
                        <span className="text-blue-500">Airport Shuttle?</span>
                    </h2>

                    <p className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
                        Booking a reliable airport shuttle with Quicksilver is seamless. Reserve your Kansas City airport car service instantly and secure your fixed rate.
                    </p>
                </FadeIn>

                <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative mb-24">
                    {/* Visual Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[100px] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent z-0"></div>

                    {[
                        {
                            step: '01',
                            title: 'Enter Trip Details',
                            desc: 'Specify your pickup location, destination, and flight schedule in our intuitive booking engine.',
                            icon: <MapPin size={32} />
                        },
                        {
                            step: '02',
                            title: 'Select Your Fleet',
                            desc: 'Choose from our Economy, Business, or SUV tiers based on your passenger and luggage requirements.',
                            icon: <CheckCircle2 size={32} />
                        },
                        {
                            step: '03',
                            title: 'Instant Confirmation',
                            desc: 'Receive immediate SMS and email confirmation with your chauffeur\'s details and live tracking info.',
                            icon: <ShieldCheck size={32} />
                        }
                    ].map((item, index) => (
                        <FadeIn key={index} delay={index * 0.2}>
                            <div className="relative bg-white p-12 rounded-[60px] shadow-[0_30px_80px_rgba(0,0,0,0.03)] border-2 border-white hover:border-blue-50 hover:shadow-[0_40px_100px_rgba(36,99,235,0.08)] transition-all duration-700 group flex flex-col items-center text-center z-10 h-full">
                                <div className="absolute top-8 right-10">
                                    <span className="text-5xl font-black text-slate-50 font-display transition-colors group-hover:text-blue-50 tabular-nums">{item.step}</span>
                                </div>

                                <div className="w-20 h-20 rounded-[32px] bg-slate-50 text-[#2463eb] flex items-center justify-center mb-10 group-hover:bg-[#2463eb] group-hover:text-white group-hover:rotate-6 transition-all duration-700 shadow-inner">
                                    {item.icon}
                                </div>

                                <h3 className="text-2xl font-black mb-6 font-display text-[#2463eb] tracking-tight">{item.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                    <Link
                        href="/reservation"
                        className="btn btn-cta text-xl px-14 py-6 shadow-2xl shadow-orange-500/20 active:scale-95 transition-all rounded-[32px] font-black uppercase tracking-tight flex items-center justify-center gap-3 border-none group bg-orange-500 hover:bg-orange-600"
                    >
                        <span>Book Online Now</span>
                        <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                    </Link>

                    <div className="flex items-center gap-4 text-slate-400">
                        <div className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center group">
                            <Clock size={20} className="text-slate-400 group-hover:text-[#2463eb]" />
                        </div>
                        <div className="text-left">
                            <p className="text-[10px] font-black uppercase tracking-widest leading-tight text-slate-300">Fast Setup</p>
                            <p className="text-sm font-bold text-slate-500">Confirm in &lt; 60 Seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
