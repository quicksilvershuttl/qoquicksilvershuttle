'use client';
import Link from 'next/link';
import { Users, ArrowRight } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function UniversityDeals() {
    return (
        <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#2463eb]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>

            <div className="container-custom relative z-10">
                <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-white border border-white rounded-full shadow-sm text-[#2463eb]">
                        <Users size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">Student Transit</span>
                    </div>
                    <h2 className="mb-6 font-display text-3xl md:text-5xl text-[#2463eb] tracking-tight font-black">
                        Discounted University <br /> Shuttle Rates
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-light">
                        Quicksilver Airport Shuttle offers specialized, direct shuttle routes for university students across Kansas and Missouri at highly competitive, fixed rates.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { name: 'Baker University', price: '$135.00' },
                        { name: 'Barclay College', price: '$600.00' },
                        { name: 'Benedictine College', price: '$65.00' },
                        { name: 'Bethany College', price: '$260.00' }
                    ].map((deal, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="group relative bg-white border border-white p-8 rounded-[32px] text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ring-1 ring-[#2463eb]/5">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#2463eb]/10 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110 pointer-events-none"></div>

                                <h3 className="text-xl font-bold mb-3 font-display text-[#2463eb]">{deal.name}</h3>
                                <div className="w-12 h-1 bg-[#2463eb]/30 mx-auto mb-8 rounded-full"></div>

                                <div className="mb-8">
                                    <span className="text-sm font-semibold text-[#2463eb] text-opacity-70 uppercase tracking-wider block mb-1">Fixed Rate</span>
                                    <p className="text-4xl font-black text-green-600 font-display tracking-tight group-hover:text-green-500 transition-colors duration-300">{deal.price}</p>
                                </div>

                                <Link href="/reservation" prefetch={false} className="btn btn-cta w-full border-none flex items-center justify-center gap-2 transition-all duration-300 py-4 rounded-xl font-bold">
                                    Book Shuttle
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
