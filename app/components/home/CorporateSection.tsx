'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Briefcase, ArrowRight } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function CorporateSection() {
    return (
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <FadeIn className="lg:w-1/2">
                        <div className="relative w-full aspect-[4/3] max-h-[400px] lg:max-h-[500px] rounded-[40px] overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0 bg-[#2463eb]/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                            <Image src="/Home page images/Business Class.png" alt="Corporate Car Service in Kansas City" fill className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl z-20">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#2463eb]/10 text-[#2463eb] rounded-full flex items-center justify-center">
                                        <Briefcase size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#2463eb]">Executive Accounts</p>
                                        <p className="text-sm text-slate-500">Streamlined booking & billing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-slate-50 border border-white rounded-full shadow-sm text-[#2463eb]">
                            <Briefcase size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">Executive Transport</span>
                        </div>
                        <h2 className="mb-6 font-display text-4xl md:text-5xl text-[#2463eb] tracking-tight font-black leading-tight">
                            Corporate Car Service <br /> in Kansas City
                        </h2>
                        <div className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                            <p>
                                Our premier executive division is tailored for business professionals who require dependable, discreet, and seamless transportation throughout the metro area. From direct airport transfers to downtown meeting loops, our vetted chauffeurs provide the highest standard of corporate travel.
                            </p>
                            <p>
                                We understand that your time is your most valuable asset. For dedicated corporate accounts, we offer streamlined billing, priority dispatch, and guaranteed vehicle availability. We proudly service the Financial District, Crossroads, and all major corporate headquarters across Overland Park and Lenexa.
                            </p>
                        </div>
                        <Link href="/corporate" className="btn btn-cta px-8 py-4 shadow-xl shadow-orange-500/20 w-full sm:w-auto inline-flex justify-center items-center font-bold">
                            Explore Corporate Fleet <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
