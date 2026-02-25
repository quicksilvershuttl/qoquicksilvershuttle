'use client';
import Image from 'next/image';
import { Star, ArrowRight, Quote } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function Testimonials() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/[0.02] rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

            <div className="container-custom relative z-10 px-4 sm:px-6">
                <FadeIn className="text-center mb-24 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 mb-10 px-5 py-2 bg-slate-50 rounded-full border border-slate-100 shadow-sm group">
                        <Star size={16} className="text-[#2463eb] fill-[#2463eb]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Verified Client Feedback</span>
                    </div>

                    <h2 className="mb-10 font-display text-4xl sm:text-5xl md:text-7xl font-black text-[#2463eb] tracking-tight leading-[1.05]">
                        Trusted by <br className="hidden sm:block" />
                        <span className="text-blue-500">Kansas City.</span>
                    </h2>

                    <p className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
                        Don't just take our word for it. Read verified feedback from our valued customers on our official Google Business profile.
                    </p>
                </FadeIn>

                <div className="flex flex-col lg:flex-row items-center gap-20 max-w-7xl mx-auto">
                    {/* LEFT: Featured Review Image */}
                    <FadeIn className="lg:w-1/2 w-full">
                        <div className="relative w-full aspect-[4/3] rounded-[60px] overflow-hidden shadow-[0_40px_100px_rgba(36,99,235,0.12)] border-8 border-white group">
                            <Image
                                src="/google_review.png"
                                alt="5-star Google Review from customer"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 800px"
                                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1d37]/40 via-transparent to-transparent opacity-60 pointer-events-none"></div>

                            {/* Floating Quote Icon */}
                            <div className="absolute top-10 left-10 w-20 h-20 bg-[#2463eb] text-white rounded-[32px] flex items-center justify-center shadow-2xl group-hover:rotate-[-5deg] transition-transform duration-700">
                                <Quote size={40} fill="currentColor" />
                            </div>
                        </div>
                    </FadeIn>

                    {/* RIGHT: Live Rating Card */}
                    <FadeIn delay={0.2} className="lg:w-1/2 w-full flex flex-col items-center lg:items-start">
                        <div className="w-full max-w-xl bg-slate-50 p-12 md:p-16 rounded-[60px] border-2 border-white shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-700">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.03] pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform duration-700">
                                        <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-serif text-2xl font-black">G</div>
                                    </div>
                                    <h3 className="text-3xl font-black text-[#0c1d37] font-display tracking-tight">Google Rating</h3>
                                </div>

                                <div className="flex items-center gap-6 mb-10">
                                    <div className="text-8xl font-black text-[#2463eb] font-display tracking-tighter drop-shadow-sm">4.8</div>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex gap-1.5 text-amber-500">
                                            {[...Array(4)].map((_, i) => (<Star key={i} fill="currentColor" size={28} className="drop-shadow-sm" />))}
                                            <Star fill="currentColor" size={28} className="drop-shadow-sm" style={{ clipPath: 'inset(0 20% 0 0)' }} />
                                        </div>
                                        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Verified Excellence</p>
                                    </div>
                                </div>

                                <p className="text-xl text-slate-500 mb-12 font-medium leading-relaxed leading-relaxed max-w-md">
                                    "Consistently rated the #1 airport shuttle service in Kansas City for punctuality and professional chauffeur conduct."
                                </p>

                                <a
                                    href="https://www.google.com/maps/place/Quicksilver+Airport+Shuttle/@39.053987,-95.45401,7z/data=!4m8!3m7!1s0x87c0e10e6e60a3dd:0x4f41b91ef0ff1bb!8m2!3d39.0539869!4d-95.4540096!9m1!1b1!16s%2Fg%2F11gmz527by?hl=en&entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-cta w-full lg:w-auto px-10 py-5 rounded-[32px] shadow-2xl shadow-orange-500/10 active:scale-95 transition-all font-black uppercase tracking-tight flex items-center justify-center gap-3 border-none group-hover:bg-orange-600"
                                >
                                    <span>Read All Google Reviews</span>
                                    <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
