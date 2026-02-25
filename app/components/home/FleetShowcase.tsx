'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Briefcase, Star, ArrowRight } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function FleetShowcase() {
    return (
        <section className="py-32 relative overflow-hidden bg-slate-50">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.03]"></div>
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/4 translate-y-1/4"></div>

            <div className="container-custom relative z-10 px-4 sm:px-6">
                <FadeIn className="text-center mb-24 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-white rounded-full shadow-xl border border-white group">
                        <Star size={16} className="text-[#2463eb] fill-[#2463eb]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Premium Luxury Standards</span>
                    </div>

                    <h2 className="mb-8 font-display text-4xl sm:text-5xl md:text-7xl font-black text-[#2463eb] tracking-tight leading-[1.1]">
                        The <span className="text-blue-500">Executive</span> Fleet
                    </h2>

                    <p className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
                        Experience absolute comfort. Every vehicle undergoes daily cleanliness audits and is operated by professionally trained, ID-badged chauffeurs.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {[
                        {
                            name: 'Economy Class',
                            desc: 'Discreet, practical, and highly comfortable for solo travelers or small groups.',
                            price: 'From $35',
                            image: '/Home page images/Economy Class.png',
                            seats: '3',
                            bags: '2',
                            badge: 'Value Selection'
                        },
                        {
                            name: 'Business Saloon',
                            desc: 'The executive standard. Extra legroom, leather interiors, and modern amenities.',
                            price: 'From $55',
                            image: '/Home page images/Saloon Class.png',
                            seats: '4',
                            bags: '3',
                            popular: true,
                            badge: 'Most Popular'
                        },
                        {
                            name: 'Premium SUV',
                            desc: 'Commanding presence with massive cabin space for large families and heavy luggage.',
                            price: 'From $75',
                            image: '/Home page images/Business Class.png',
                            seats: '6',
                            bags: '6',
                            badge: 'Maximum Space'
                        }
                    ].map((vehicle, index) => (
                        <FadeIn key={index} delay={index * 0.15}>
                            <div className={`relative p-10 rounded-[60px] bg-white border-2 ${vehicle.popular ? 'border-[#2463eb] shadow-2xl shadow-blue-500/20' : 'border-white shadow-xl'} transition-all duration-700 group flex flex-col h-full hover:-translate-y-4 overflow-hidden`}>
                                {vehicle.popular && (
                                    <div className="absolute top-0 right-0 bg-[#2463eb] text-white text-[10px] font-black px-8 py-3 rounded-bl-[40px] uppercase tracking-widest flex items-center gap-2 z-20">
                                        <Star size={12} fill="currentColor" /> {vehicle.badge}
                                    </div>
                                )}
                                {!vehicle.popular && (
                                    <div className="absolute top-8 left-10">
                                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none">{vehicle.badge}</span>
                                    </div>
                                )}

                                <div className="relative w-full h-56 mt-4 mb-10 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-700 ease-out z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                                    <Image
                                        src={vehicle.image}
                                        alt={`${vehicle.name} for Kansas City Airport Service`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 500px"
                                        className="object-contain"
                                        priority={index === 0}
                                    />
                                </div>

                                <div className="relative z-10 flex flex-col flex-grow">
                                    <h3 className="text-3xl font-black mb-4 font-display text-[#2463eb] tracking-tight">{vehicle.name}</h3>
                                    <p className="text-slate-500 text-sm mb-10 font-medium leading-relaxed flex-grow">{vehicle.desc}</p>

                                    <div className="flex items-center gap-6 mb-10 pt-8 border-t border-slate-50">
                                        <div className="flex items-center gap-2.5 text-slate-400">
                                            <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-[#2463eb] transition-colors">
                                                <Users size={18} />
                                            </div>
                                            <span className="text-sm font-black text-slate-600 tracking-tight">{vehicle.seats}</span>
                                        </div>
                                        <div className="flex items-center gap-2.5 text-slate-400">
                                            <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-[#2463eb] transition-colors">
                                                <Briefcase size={18} />
                                            </div>
                                            <span className="text-sm font-black text-slate-600 tracking-tight">{vehicle.bags}</span>
                                        </div>
                                        <div className="ml-auto flex flex-col items-end">
                                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Base Rate</span>
                                            <div className="font-display font-black text-3xl text-[#2463eb] tracking-tighter shadow-sm">
                                                {vehicle.price}
                                            </div>
                                        </div>
                                    </div>

                                    <Link
                                        href="/reservation"
                                        className="btn btn-cta w-full py-6 rounded-3xl border-none shadow-2xl shadow-orange-500/20 active:scale-95 group-hover:bg-orange-600 transition-all font-black uppercase tracking-tight flex items-center justify-center gap-3"
                                    >
                                        <span>Reserve Vehicle</span>
                                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
