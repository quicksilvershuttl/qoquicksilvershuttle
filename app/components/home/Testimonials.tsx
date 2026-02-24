'use client';
import Image from 'next/image';
import { Star, ArrowRight } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function Testimonials() {
    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2463eb]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="mb-6 font-display text-4xl md:text-5xl text-[#2463eb] tracking-tight font-black">
                        Trusted by Kansas City
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-light">
                        Don't just take our word for it. Read verified feedback from our valued customers on our official Google Business profile.
                    </p>
                </FadeIn>

                <div className="flex justify-center w-full mb-12">
                    <FadeIn>
                        <div className="relative w-full max-w-2xl aspect-[4/3] min-h-[300px] md:min-h-[400px] rounded-[40px] overflow-hidden shadow-2xl ring-1 ring-[#2463eb]/10 group">
                            <Image
                                src="/google_review.png"
                                alt="5-star Google Review from customer"
                                fill
                                sizes="(max-width: 768px) 100vw, 800px"
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2463eb]/20 to-transparent pointer-events-none"></div>
                        </div>
                    </FadeIn>
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://www.google.com/maps/place/Quicksilver+Airport+Shuttle/@39.053987,-95.45401,7z/data=!4m8!3m7!1s0x87c0e10e6e60a3dd:0x4f41b91ef0ff1bb!8m2!3d39.0539869!4d-95.4540096!9m1!1b1!16s%2Fg%2F11gmz527by?hl=en&entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-col items-center p-8 bg-white border-2 border-white rounded-3xl shadow-xl hover:shadow-2xl hover:border-[#2463eb]/30 transition-all duration-300 group cursor-pointer w-full max-w-sm mx-auto"
                    >
                        <div className="flex items-center gap-4 mb-3">
                            <div className="text-5xl font-black text-[#2463eb] font-display">4.8</div>
                            <div className="flex flex-col items-start gap-1">
                                <div className="flex gap-1 text-[#2463eb] group-hover:scale-105 transition-transform origin-left">
                                    <Star fill="currentColor" size={24} />
                                    <Star fill="currentColor" size={24} />
                                    <Star fill="currentColor" size={24} />
                                    <Star fill="currentColor" size={24} />
                                    <Star fill="currentColor" size={24} style={{ clipPath: 'inset(0 20% 0 0)' }} />
                                </div>
                                <p className="text-xs text-slate-500 p-0 font-bold uppercase tracking-widest text-left">Based on real reviews</p>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-white w-full flex items-center justify-center text-[#2463eb] font-bold group-hover:text-[#2463eb] transition-colors">
                            <div className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold font-serif text-xs mr-2">G</div>
                            Read all reviews on Google <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
