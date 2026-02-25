'use client';
import Link from 'next/link';
import { Calculator, Briefcase, Star, ArrowRight } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function PricingTable() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[#2463eb]/[0.02] -z-10"></div>
            <div className="container-custom relative z-10">
                <FadeIn className="text-center mb-20 max-w-4xl mx-auto">
                    <h2 className="mb-6 font-display font-black text-4xl md:text-5xl lg:text-7xl text-[#2463eb] tracking-tight leading-tight">
                        Transparent <span className="text-blue-500">2026</span> <br className="hidden sm:block" />
                        Pricing Structure
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-light">
                        We reject the unpredictable surge-pricing models of rideshare apps. Below is our fixed-tier structure for Kansas City Airport transfers. Exact rates vary slightly by specific local zip code.
                    </p>
                </FadeIn>

                <FadeIn delay={0.2} className="max-w-6xl mx-auto">
                    {/* MOBILE VIEW — Premium Cards */}
                    <div className="lg:hidden space-y-6 px-4">
                        {[
                            {
                                tier: 'Economy Sedan',
                                badge: 'Standard Transit',
                                ideal: 'Budget-conscious solo travelers or couples needing direct airport drop-offs.',
                                luggage: '2 Check-in Bags',
                                price: '$35',
                                color: 'text-[#2463eb]'
                            },
                            {
                                tier: 'Business Saloon',
                                badge: 'Most Popular',
                                ideal: 'Corporate executives requiring extra legroom to work during transit.',
                                luggage: '3 Check-in Bags',
                                price: '$55',
                                color: 'text-[#2463eb]',
                                popular: true
                            },
                            {
                                tier: 'Premium SUV',
                                badge: 'High Capacity',
                                ideal: 'Large families or golf groups traveling with excessive luggage/equipment.',
                                luggage: '6-7 Check-in Bags',
                                price: '$75',
                                color: 'text-[#2463eb]'
                            }
                        ].map((item, i) => (
                            <div key={i} className={`bg-white rounded-[40px] p-8 border-2 ${item.popular ? 'border-[#2463eb] shadow-2xl shadow-[#2463eb]/20' : 'border-slate-100'} shadow-xl relative overflow-hidden`}>
                                {item.popular && (
                                    <div className="absolute top-0 right-0 bg-[#2463eb] text-white text-[10px] font-black px-6 py-2 rounded-bl-3xl uppercase tracking-widest flex items-center gap-2">
                                        <Star size={12} fill="currentColor" /> Recommended
                                    </div>
                                )}
                                <div className="mb-6">
                                    <span className="inline-block text-[10px] font-black text-[#2463eb] bg-[#2463eb]/10 px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">{item.badge}</span>
                                    <h3 className="text-3xl font-display font-black text-[#2463eb]">{item.tier}</h3>
                                </div>
                                <div className="space-y-4 mb-8">
                                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.ideal}</p>
                                    <div className="flex items-center gap-3 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] pt-4 border-t border-slate-50">
                                        <Briefcase size={16} className="text-[#2463eb]" />
                                        {item.luggage}
                                    </div>
                                </div>
                                <div className="pt-8 flex items-center justify-between">
                                    <span className="text-slate-400 font-black text-[10px] uppercase tracking-[0.2em]">Starting From</span>
                                    <span className={`text-4xl font-display font-black ${item.color}`}>{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* DESKTOP VIEW — Traditional Table */}
                    <div className="hidden lg:block bg-white rounded-[60px] shadow-2xl border border-white overflow-hidden ring-1 ring-slate-100 p-2">
                        <div className="overflow-x-auto rounded-[50px]">
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="bg-slate-50 text-[#0c1d37]">
                                        <th className="p-10 font-display font-black text-xs uppercase tracking-[0.3em]">Service Tier</th>
                                        <th className="p-10 font-display font-black text-xs uppercase tracking-[0.3em]">Ideal Passenger / Purpose</th>
                                        <th className="p-10 font-display font-black text-xs uppercase tracking-[0.3em]">Luggage</th>
                                        <th className="p-10 font-display font-black text-xs uppercase tracking-[0.3em]">Base Rate</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-slate-50 text-[#2463eb]">
                                    {[
                                        {
                                            tier: 'Economy Sedan',
                                            badge: 'Standard Transit',
                                            desc: 'Budget-conscious solo travelers or couples needing direct airport drop-offs.',
                                            luggage: '2 Check-in Bags',
                                            price: 'From $35',
                                            star: false
                                        },
                                        {
                                            tier: 'Business Saloon',
                                            badge: 'Most Popular',
                                            desc: 'Corporate executives requiring extra legroom to work during transit.',
                                            luggage: '3 Check-in Bags',
                                            price: 'From $55',
                                            star: true,
                                            popular: true
                                        },
                                        {
                                            tier: 'Premium SUV',
                                            badge: 'High Capacity',
                                            desc: 'Large families or golf groups traveling with excessive luggage/equipment.',
                                            luggage: '6-7 Check-in Bags',
                                            price: 'From $75',
                                            star: false
                                        }
                                    ].map((row, idx) => (
                                        <tr key={idx} className={`hover:bg-[#2463eb]/[0.02] transition-colors group ${row.popular ? 'bg-blue-50/30' : ''}`}>
                                            <td className="p-10">
                                                <div className="font-black text-[#2463eb] text-2xl font-display mb-2 flex items-center gap-3">
                                                    {row.tier}
                                                    {row.star && <Star size={20} className="text-[#2463eb] fill-[#2463eb]" />}
                                                </div>
                                                <span className="text-[10px] font-black text-[#2463eb] bg-[#2463eb]/10 px-4 py-1.5 rounded-full uppercase tracking-widest">{row.badge}</span>
                                            </td>
                                            <td className="p-10 text-slate-500 font-medium leading-relaxed max-w-xs">{row.desc}</td>
                                            <td className="p-10">
                                                <span className="flex items-center gap-3 text-slate-400 font-black text-[10px] uppercase tracking-[0.2em]">
                                                    <Briefcase size={20} className="text-[#2463eb]" /> {row.luggage}
                                                </span>
                                            </td>
                                            <td className="p-10">
                                                <div className="font-black text-[#2463eb] text-4xl font-display tracking-tight group-hover:scale-110 transition-transform origin-left drop-shadow-sm">
                                                    {row.price}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-20 text-center">
                        <Link href="/fare-quote" className="btn btn-cta text-xl px-12 py-6 shadow-2xl shadow-orange-500/25 flex items-center justify-center gap-4 group max-w-md mx-auto h-auto min-h-0 border-none rounded-3xl active:scale-95 transition-all">
                            <Calculator size={24} />
                            <span>Calculate Exact Fare</span>
                            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                        <p className="mt-8 text-slate-400 text-xs font-black uppercase tracking-[0.3em]">No surge pricing · 24/7 Availability · Professional Chauffeurs</p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
