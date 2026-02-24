'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Briefcase } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function FleetShowcase() {
    return (
        <section className="section relative overflow-hidden bg-slate-50 text-[#2463eb]">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.03]"></div>
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-royal/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>

            <div className="container-custom relative z-10">
                <FadeIn className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="mb-6 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight">
                        The <span className="text-[#2463eb]">Executive</span> Fleet
                    </h2>
                    <p className="text-xl text-slate-600 font-light leading-relaxed">
                        Step into absolute comfort. Every vehicle in our fleet undergoes rigorous daily cleanliness audits and is operated by our professionally trained, ID-badged chauffeurs.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        { name: 'Economy Class', desc: 'Discreet, practical, and highly comfortable for solo travelers.', price: 'From $35', image: '/Home page images/Economy Class.png', seats: '3', bags: '2' },
                        { name: 'Business Saloon', desc: 'The executive standard. Extra legroom and premium leather interiors.', price: 'From $55', image: '/Home page images/Saloon Class.png', seats: '4', bags: '3' },
                        { name: 'Premium SUV', desc: 'Commanding presence with massive cabin space for groups and luggage.', price: 'From $75', image: '/Home page images/Business Class.png', seats: '6', bags: '6' }
                    ].map((vehicle, index) => (
                        <FadeIn key={index} delay={index * 0.15}>
                            <div className="relative p-8 rounded-[40px] bg-white border border-white shadow-xl shadow-white/50 hover:shadow-2xl hover:border-[#2463eb]/30 transition-all duration-500 group overflow-hidden">
                                <div className="absolute -inset-1 bg-gradient-to-br from-royal/0 via-royal/0 to-royal/0 group-hover:from-royal/5 group-hover:via-transparent group-hover:to-transparent rounded-[40px] transition-all duration-700 blur-lg -z-10"></div>
                                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-48 h-48 bg-royal/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                                <div className="relative w-full h-48 mb-8 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-700 ease-out z-10 drop-shadow-xl">
                                    <Image
                                        src={vehicle.image}
                                        alt={`${vehicle.name} for Kansas City Airport Service`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                                        className="object-contain"
                                    />
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-2 font-display text-[#2463eb]">{vehicle.name}</h3>
                                    <p className="text-slate-500 text-sm h-10 mb-6 font-light">{vehicle.desc}</p>

                                    <div className="flex items-center gap-4 mb-8 pt-6 border-t border-white">
                                        <div className="flex items-center gap-2 text-slate-600">
                                            <Users size={16} className="text-[#2463eb]" />
                                            <span className="text-sm font-medium">{vehicle.seats}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-600">
                                            <Briefcase size={16} className="text-[#2463eb]" />
                                            <span className="text-sm font-medium">{vehicle.bags}</span>
                                        </div>
                                        <div className="ml-auto font-display font-bold text-2xl text-[#2463eb]">
                                            {vehicle.price}
                                        </div>
                                    </div>

                                    <Link href="/reservation" className="btn btn-primary w-full shadow-[0_0_20px_rgba(36,99,235,0.2)] border-none transition-all duration-300">
                                        Reserve Vehicle
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
