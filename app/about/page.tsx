import { Metadata } from 'next';
import { ShieldCheck, Users, Clock, Award, Target, MessageSquare, Star, Info, Phone, ArrowRight, Shield, DollarSign, History, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '../components/FadeIn';
import HeroImage from '../components/HeroImage';
import BackgroundOverlay from '../components/BackgroundOverlay';
import TrustAvatars from '../components/TrustAvatars';

export const metadata: Metadata = {
    title: 'About Quicksilver Airport Shuttle | Kansas City Logistics Experts',
    description: 'Serving the Kansas City metro since 1982. Learn about our 40-year legacy of punctuality, safety, and premium airport transportation services.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* ═══ HERO SECTION — "Perfect Hero Section" framework ═══ */}
            <section className="relative min-h-[90dvh] flex items-center overflow-hidden bg-gradient-to-br from-[#0c1d37] via-[#1a3a6b] to-[#0c1d37] pt-24 pb-12">
                {/* Ambient Background Effects */}
                <div className="absolute inset-0 z-0">
                    <BackgroundOverlay />
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[150px] pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

                        {/* ═══ LEFT COLUMN: Value Proposition ═══ */}
                        <FadeIn className="text-white flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-white/[0.08] backdrop-blur-3xl rounded-full border border-white/[0.15] shadow-2xl">
                                <History size={16} className="text-blue-400" />
                                <span className="text-[10px] sm:text-xs font-black tracking-[0.3em] text-white/90 uppercase">Our 40-Year Legacy</span>
                            </div>

                            <h1 className="mb-8 font-display font-black leading-[1.05] text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white drop-shadow-2xl">
                                KC Excellence, <br className="hidden sm:block" />
                                <span className="text-blue-400">Since 1982.</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0 font-light">
                                Since 1982, Quicksilver has been the Kansas City metro's most trusted partner for airport transit. We built our reputation on punctuality and a commitment to treating every rider like family.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start w-full sm:w-auto mb-16">
                                <Link
                                    href="/fare-quote"
                                    className="btn btn-cta text-xl px-12 py-6 rounded-3xl shadow-2xl shadow-orange-500/20 active:scale-95 transition-all font-black uppercase tracking-tight flex items-center justify-center gap-3 border-none bg-orange-500 hover:bg-orange-600 w-full sm:w-auto"
                                >
                                    <span>Get Your Quote</span>
                                    <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                                <a
                                    href="tel:913-262-0905"
                                    className="flex items-center justify-center gap-4 text-white hover:text-blue-400 transition-all py-6 px-10 rounded-3xl border-2 border-white/20 hover:border-blue-400/40 backdrop-blur-md w-full sm:w-auto font-black uppercase tracking-tight"
                                >
                                    <Phone size={24} />
                                    <span>913-262-0905</span>
                                </a>
                            </div>

                            {/* Social Proof */}
                            <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 pt-10 border-t border-white/10 w-full lg:w-auto mx-auto lg:mx-0">
                                <TrustAvatars />
                                <div className="text-center sm:text-left">
                                    <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500 mb-1">
                                        {[...Array(5)].map((_, i) => (<Star key={i} fill="currentColor" size={16} className="drop-shadow-sm" />))}
                                    </div>
                                    <p className="text-sm font-medium text-slate-400">Preferred by <strong className="text-white">4,000+</strong> KC Residents</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                {[
                                    { label: 'Fully Insured', icon: <ShieldCheck size={16} /> },
                                    { label: '24/7 Human Dispatch', icon: <Clock size={16} /> },
                                    { label: 'Licensed Chauffeurs', icon: <Award size={16} /> },
                                ].map((badge, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 text-white/70 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-sm">
                                        <span className="text-blue-400">{badge.icon}</span>
                                        {badge.label}
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        {/* ═══ RIGHT COLUMN: Hero Imagery ═══ */}
                        <FadeIn delay={0.25} className="w-full relative flex items-center justify-center pb-8 lg:pb-0">
                            <div className="relative w-full max-w-2xl lg:max-w-full mx-auto">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
                                <div className="relative w-full aspect-[4/3] drop-shadow-[0_40px_100px_rgba(36,99,235,0.4)]">
                                    <HeroImage
                                        src="/Home page images/Saloon Class.png"
                                        alt="Quicksilver Heritage Kansas City"
                                        priority
                                    />
                                </div>

                                {/* Heritage Badge */}
                                <div className="absolute -top-10 -right-[5%] bg-white p-10 rounded-[40px] shadow-2xl border border-slate-100 hidden sm:block">
                                    <div className="text-center">
                                        <p className="text-6xl font-black text-[#0c1d37] font-display tracking-tight leading-none mb-2">40+</p>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Years of Service</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>
            </section>

            {/* Who We Are */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-slate-50 rounded-full border border-slate-100 shadow-sm group">
                                <Users size={16} className="text-[#2463eb]" />
                                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">The Human Element</span>
                            </div>

                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-[#0c1d37] mb-10 tracking-tight leading-[1.05]">
                                Your Trusted <br />
                                <span className="text-blue-500">KC Partner.</span>
                            </h2>

                            <p className="text-xl text-slate-600 mb-12 leading-relaxed font-light max-w-2xl">
                                Quicksilver Airport Shuttle is a premium airport car service and shuttle provider located in Kansas City, Missouri. Since 1982, we've specialized in reliable transportation to MCI Airport, Wheeler Executive, and major local venues.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { label: 'Shared-Ride Efficiency', icon: <Users size={20} /> },
                                    { label: 'Private Sedan Luxury', icon: <Award size={20} /> },
                                    { label: 'Executive SUVs', icon: <Shield size={20} /> },
                                    { label: 'Large Group Vans', icon: <Users size={20} /> },
                                ].map((service, i) => (
                                    <div key={i} className="flex items-center gap-5 p-6 bg-slate-50 rounded-[32px] border border-slate-100 group hover:bg-white hover:shadow-xl hover:border-blue-50 transition-all duration-500">
                                        <div className="w-12 h-12 rounded-2xl bg-[#2463eb]/5 text-[#2463eb] flex items-center justify-center group-hover:bg-[#2463eb] group-hover:text-white transition-all duration-500 shadow-inner">
                                            {service.icon}
                                        </div>
                                        <span className="font-bold text-[#0c1d37] text-lg tracking-tight">{service.label}</span>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2} className="relative">
                            <div className="relative w-full aspect-square rounded-[60px] overflow-hidden shadow-[0_50px_100px_rgba(36,99,235,0.1)] group">
                                <Image
                                    src="/Home page images/Business Class.png"
                                    alt="Quicksilver Professionals"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1d37]/80 via-transparent to-transparent opacity-60"></div>

                                <div className="absolute bottom-10 left-10 p-10 bg-white/95 backdrop-blur-3xl rounded-[48px] border border-white/50 shadow-2xl max-w-sm">
                                    <Heart size={32} className="text-red-500 mb-6 fill-red-500" />
                                    <p className="text-[#0c1d37] text-2xl font-black font-display tracking-tight leading-none mb-2">Locally Owned</p>
                                    <p className="text-slate-500 font-medium">Supporting the Kansas City community for 4 decades.</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* E-E-A-T Showcase */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/[0.02] rounded-full blur-[150px] pointer-events-none"></div>

                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <FadeIn className="text-center max-w-4xl mx-auto mb-24">
                        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-white rounded-full border border-white shadow-xl">
                            <ShieldCheck size={16} className="text-[#2463eb]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Verified Excellence Framework</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-[#0c1d37] tracking-tight leading-[1.05] mb-8">
                            Tested Legacy. <br />
                            <span className="text-blue-500">Unmatched Trust.</span>
                        </h2>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { letter: 'E', title: 'Experience', text: 'Tracking millions of miles since 1982. We know every KC shortcut, bypass, and airport security optimization strategy.' },
                            { letter: 'E', title: 'Expertise', text: 'Rigorous chauffeur topography testing and FAA flight tracking coordination to eliminate waiting times.' },
                            { letter: 'A', title: 'Authority', text: 'The preferred partner for regional universities and C-Suite executives across the Fortune 500 landscape.' },
                            { letter: 'T', title: 'Trust', text: 'Transparent flat-rate pricing and an unyielding commitment to security backing our elite satisfaction scores.' },
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="bg-white p-12 rounded-[50px] border-2 border-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:border-blue-50 transition-all duration-700 h-full group">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#2463eb] flex items-center justify-center font-black text-3xl font-display mb-10 group-hover:bg-[#2463eb] group-hover:text-white transition-all duration-700 shadow-inner">
                                        {item.letter}
                                    </div>
                                    <h3 className="text-2xl font-black text-[#0c1d37] mb-6 font-display tracking-tight">{item.title}</h3>
                                    <p className="text-slate-500 leading-relaxed font-medium text-lg">{item.text}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Facts Banner */}
            <section className="py-32 bg-white">
                <div className="container-custom max-w-5xl mx-auto px-4 sm:px-6">
                    <FadeIn className="bg-[#0c1d37] p-16 md:p-24 rounded-[80px] shadow-[0_50px_100px_rgba(12,29,55,0.3)] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.03] mix-blend-overlay"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl sm:text-6xl font-display font-black text-white mb-16 tracking-tight leading-none group-hover:translate-x-2 transition-transform duration-700">Quick Facts.</h2>

                            <div className="space-y-12">
                                {[
                                    { q: 'What defines Quicksilver?', a: 'Quicksilver is a premium, fixed-rate 24/7 luxury car and airport shuttle service operating as the primary provider for Kansas City International Airport (MCI) since 1982.' },
                                    { q: 'Who do we serve?', a: 'We cater to corporate executives, frequent business travelers, and university groups who prioritize safety, comfort, and absolute punctuality over unpredictable rideshare apps.' },
                                    { q: 'Where are we based?', a: 'Our centralized operations hub is located directly in the MCI Airport Zone, providing instantaneous dispatch capabilities across the entire KC Metro area at (913) 262-0905.' },
                                ].map((item, i) => (
                                    <div key={i} className="grid md:grid-cols-[1fr_2fr] gap-8 items-start border-t border-white/10 pt-12 first:border-0 first:pt-0 group/fact">
                                        <h3 className="text-blue-400 font-black text-xl font-display tracking-tight group-hover/fact:text-white transition-colors">{item.q}</h3>
                                        <p className="text-slate-300 text-xl font-light leading-relaxed">{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ═══ FOOTER CTA ═══ */}
            <section className="py-32 bg-[#0c1d37] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.04]"></div>
                <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[180px]"></div>

                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <FadeIn className="text-center max-w-4xl mx-auto flex flex-col items-center">
                        <div className="w-24 h-24 rounded-[32px] bg-white/5 border border-white/10 flex items-center justify-center mb-12 backdrop-blur-xl">
                            <Target size={48} className="text-white" />
                        </div>

                        <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-[1.1] mb-8">
                            Experience the <br />
                            <span className="text-blue-400">Quicksilver Multiplier.</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-300 mb-12 font-light leading-relaxed">
                            Reliability isn't just a promise; it's our 4-decade legacy. Join the thousands of KC residents who travel with confidence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 w-full justify-center">
                            <Link
                                href="/fare-quote"
                                className="btn btn-cta text-2xl px-16 py-7 rounded-[32px] shadow-2xl shadow-orange-500/20 active:scale-95 transition-all font-black uppercase tracking-tight flex items-center justify-center gap-4 border-none bg-orange-500 hover:bg-orange-600"
                            >
                                <DollarSign size={28} />
                                Calculate Your Fare
                            </Link>
                            <a
                                href="tel:913-262-0905"
                                className="flex items-center justify-center gap-4 text-white hover:text-white transition-all py-7 px-16 rounded-[32px] border-2 border-white/20 hover:border-white/40 hover:bg-white/5 backdrop-blur-md font-black uppercase tracking-tight text-xl"
                            >
                                <Phone size={24} />
                                <span>Talk to the Team</span>
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
