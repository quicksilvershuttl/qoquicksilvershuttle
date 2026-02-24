'use client';
import Link from 'next/link';
import { Calculator, Briefcase, Star } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function PricingTable() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container-custom">
                <FadeIn className="text-center mb-16">
                    <h2 className="mb-6 font-display font-black text-4xl md:text-5xl text-[#2463eb] tracking-tight">2026 Transparent Pricing Structure</h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        We reject the unpredictable surge-pricing models of rideshare apps. Below is our fixed-tier structure for Kansas City Airport transfers. Exact rates vary slightly by specific local zip code.
                    </p>
                </FadeIn>

                <FadeIn delay={0.2} className="max-w-5xl mx-auto">
                    {/* MOBILE VIEW — Premium Cards */}
                    <div className="lg:hidden space-y-6">
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
                                color: 'text-green-600',
                                popular: true
                            },
                            {
                                tier: 'Premium SUV',
                                badge: 'High Capacity',
                                ideal: 'Large families or golf groups traveling with excessive luggage/equipment.',
                                luggage: '6-7 Check-in Bags',
                                price: '$75',
                                color: 'text-green-600'
                            }
                        ].map((item, i) => (
                            <div key={i} className={`bg-white rounded-3xl p-8 border ${item.popular ? 'border-[#2463eb] ring-1 ring-[#2463eb]' : 'border-slate-100'} shadow-xl relative overflow-hidden`}>
                                {item.popular && (
                                    <div className="absolute top-0 right-0 bg-[#2463eb] text-white text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-widest">
                                        Recommended
                                    </div>
                                )}
                                <div className="mb-6">
                                    <span className="inline-block text-[10px] font-bold text-[#2463eb] bg-[#2463eb]/10 px-3 py-1 rounded-full uppercase tracking-widest mb-2">{item.badge}</span>
                                    <h3 className="text-2xl font-display font-black text-[#2463eb]">{item.tier}</h3>
                                </div>
                                <div className="space-y-4 mb-8">
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.ideal}</p>
                                    <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest">
                                        <Briefcase size={14} className="text-[#2463eb]" />
                                        {item.luggage}
                                    </div>
                                </div>
                                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Starting From</span>
                                    <span className={`text-3xl font-display font-black ${item.color}`}>{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* DESKTOP VIEW — Traditional Table */}
                    <div className="hidden lg:block bg-white rounded-[40px] shadow-2xl border border-white overflow-hidden ring-1 ring-[#2463eb]/5">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="bg-[#2463eb] text-white">
                                        <th className="p-8 font-display font-bold text-lg uppercase tracking-wider">Service Tier</th>
                                        <th className="p-8 font-display font-bold text-lg uppercase tracking-wider">Ideal Passenger</th>
                                        <th className="p-8 font-display font-bold text-lg uppercase tracking-wider">Luggage Limit</th>
                                        <th className="p-8 font-display font-bold text-lg uppercase tracking-wider text-white">Base Rate</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-slate-100 text-[#2463eb]">
                                    <tr className="hover:bg-[#2463eb]/5 transition-colors group">
                                        <td className="p-8">
                                            <div className="font-bold text-[#2463eb] text-xl font-display mb-1 flex items-center gap-2">Economy Sedan</div>
                                            <span className="text-sm font-medium text-[#2463eb] bg-[#2463eb]/10 px-3 py-1 rounded-full">Standard Transit</span>
                                        </td>
                                        <td className="p-8 text-slate-600 leading-relaxed">Budget-conscious solo travelers or couples needing direct airport drop-offs.</td>
                                        <td className="p-8 text-slate-600"><span className="flex items-center gap-2"><Briefcase size={16} /> 2 Check-in Bags</span></td>
                                        <td className="p-8 font-bold text-[#2463eb] text-2xl font-display group-hover:scale-110 transition-transform origin-left">From $35</td>
                                    </tr>
                                    <tr className="hover:bg-[#2463eb]/5 transition-colors group">
                                        <td className="p-8">
                                            <div className="font-bold text-[#2463eb] text-xl font-display mb-1 flex items-center gap-2">Business Saloon <Star size={16} className="text-[#2463eb] fill-[#2463eb]" /></div>
                                            <span className="text-sm font-medium text-[#2463eb] bg-[#2463eb]/10 px-3 py-1 rounded-full">Most Popular</span>
                                        </td>
                                        <td className="p-8 text-slate-600 leading-relaxed">Corporate executives requiring extra legroom to work during transit.</td>
                                        <td className="p-8 text-slate-600"><span className="flex items-center gap-2"><Briefcase size={16} /> 3 Check-in Bags</span></td>
                                        <td className="p-8 font-bold text-green-600 text-2xl font-display group-hover:scale-110 transition-transform origin-left">From $55</td>
                                    </tr>
                                    <tr className="hover:bg-[#2463eb]/5 transition-colors group">
                                        <td className="p-8">
                                            <div className="font-bold text-[#2463eb] text-xl font-display mb-1 flex items-center gap-2">Premium SUV</div>
                                            <span className="text-sm font-medium text-[#2463eb] bg-[#2463eb]/10 px-3 py-1 rounded-full">High Capacity</span>
                                        </td>
                                        <td className="p-8 text-slate-600 leading-relaxed">Large families or golf groups traveling with excessive luggage/equipment.</td>
                                        <td className="p-8 text-slate-600"><span className="flex items-center gap-2"><Briefcase size={16} /> 6-7 Check-in Bags</span></td>
                                        <td className="p-8 font-bold text-green-600 text-2xl font-display group-hover:scale-110 transition-transform origin-left">From $75</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/fare-quote" className="btn btn-cta text-base sm:text-lg px-8 sm:px-10 py-4 outline-none border-none shadow-xl shadow-orange-500/30">
                            <Calculator size={20} className="mr-3" /> Execute Exact Fare Calculation
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
