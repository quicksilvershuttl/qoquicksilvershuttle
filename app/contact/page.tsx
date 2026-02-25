import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, Send, Sparkles, MessageCircle, ArrowRight, Star, Shield, Award, Map, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '../components/FadeIn';
import HeroImage from '../components/HeroImage';
import BackgroundOverlay from '../components/BackgroundOverlay';
import TrustAvatars from '../components/TrustAvatars';

export const metadata: Metadata = {
    title: 'Contact Us | Executive Support Hub | Quicksilver Kansas City',
    description: 'Connect with Kansas City\'s premier airport transportation logistics team. 24/7 human dispatch and corporate account support since 1982.',
};

export default function ContactPage() {
    const phone = '(913) 262-0905';

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
                                <Clock size={16} className="text-blue-400" />
                                <span className="text-[10px] sm:text-xs font-black tracking-[0.3em] text-white/90 uppercase">24/7 Global Support Hub</span>
                            </div>

                            <h1 className="mb-8 font-display font-black leading-[1.05] text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white drop-shadow-2xl">
                                Get In <br className="hidden sm:block" />
                                <span className="text-blue-400">Touch.</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0 font-light">
                                Speak directly with our Kansas City logistics team. No robots, no queues — just immediate travel solutions.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start w-full sm:w-auto mb-16">
                                <Link
                                    href="#contact-form"
                                    className="btn btn-cta text-xl px-12 py-6 rounded-3xl shadow-2xl shadow-orange-500/20 active:scale-95 transition-all font-black uppercase tracking-tight flex items-center justify-center gap-3 border-none bg-orange-500 hover:bg-orange-600 w-full sm:w-auto"
                                >
                                    <span>Send Inquiry</span>
                                    <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                                <a
                                    href={`tel:${phone.replace(/\D/g, '')}`}
                                    className="flex items-center justify-center gap-4 text-white hover:text-blue-400 transition-all py-6 px-10 rounded-3xl border-2 border-white/20 hover:border-blue-400/40 backdrop-blur-md w-full sm:w-auto font-black uppercase tracking-tight"
                                >
                                    <Phone size={24} />
                                    <span>{phone}</span>
                                </a>
                            </div>

                            {/* Social Proof */}
                            <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 pt-10 border-t border-white/10 w-full lg:w-auto mx-auto lg:mx-0">
                                <TrustAvatars />
                                <div className="text-center sm:text-left">
                                    <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500 mb-1">
                                        {[...Array(5)].map((_, i) => (<Star key={i} fill="currentColor" size={16} className="drop-shadow-sm" />))}
                                    </div>
                                    <p className="text-sm font-medium text-slate-400">Trusted by <strong className="text-white">4,000+</strong> KC Riders</p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* ═══ RIGHT COLUMN: Hero Imagery ═══ */}
                        <FadeIn delay={0.25} className="w-full relative flex items-center justify-center pb-8 lg:pb-0">
                            <div className="relative w-full max-w-2xl lg:max-w-full mx-auto">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
                                <div className="relative w-full aspect-[4/3] drop-shadow-[0_40px_100px_rgba(36,99,235,0.4)]">
                                    <HeroImage
                                        src="/Home page images/Saloon Class.png"
                                        alt="Quicksilver Executive Support"
                                        priority
                                    />
                                </div>

                                {/* Status Card */}
                                <div className="absolute -bottom-10 right-[5%] bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 hidden sm:block">
                                    <div className="flex items-center gap-5">
                                        <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
                                        <div>
                                            <p className="font-black text-[#0c1d37] font-display tracking-tight text-xl">Active Dispatch</p>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Awaiting Your Call</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>
            </section>

            {/* Connection Points */}
            <section className="py-24 bg-white relative overflow-hidden" id="contact-form">
                <div className="container-custom px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-start">

                        {/* Info Column */}
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-slate-50 rounded-full border border-slate-100 shadow-sm">
                                <Sparkles size={16} className="text-[#2463eb]" />
                                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Connection Points</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-[#0c1d37] mb-10 tracking-tight leading-[1.05]">
                                Executive <br />
                                <span className="text-blue-500">Support.</span>
                            </h2>

                            <p className="text-xl text-slate-600 mb-12 leading-relaxed font-light">
                                Stationed in the heart of the MCI Airport zone, we ensure seamless communication across the entire metro region.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: 'Call Us 24/7', value: phone, icon: <Phone size={24} />, subtitle: 'Immediate Dispatch & Support' },
                                    { title: 'Email Desk', value: 'info@goquicksilver.com', icon: <Mail size={24} />, subtitle: 'Corporate Accounts & Quotes' },
                                    { title: 'Official HQ', value: 'MCI Airport Zone, KC, MO', icon: <MapPin size={24} />, subtitle: 'Licensed Transportation Hub' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 p-8 bg-slate-50 rounded-[40px] border border-slate-100 shadow-sm group hover:bg-white hover:shadow-2xl hover:border-blue-50 transition-all duration-500">
                                        <div className="w-14 h-14 rounded-2xl bg-[#2463eb]/5 text-[#2463eb] flex items-center justify-center group-hover:bg-[#2463eb] group-hover:text-white transition-all duration-500 shadow-inner">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.subtitle}</p>
                                            <p className="font-black text-[#0c1d37] text-2xl font-display tracking-tight group-hover:text-blue-600 transition-colors capitalize">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        {/* Form Column */}
                        <FadeIn delay={0.25}>
                            <div className="bg-white p-12 sm:p-16 rounded-[60px] shadow-[0_50px_100px_rgba(0,0,0,0.05)] border-2 border-slate-50 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/[0.03] rounded-bl-[100px]"></div>

                                <h3 className="text-3xl font-black text-[#0c1d37] font-display tracking-tight mb-12">Send A Message.</h3>

                                <form className="space-y-8 relative z-10">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Full Name</label>
                                            <input type="text" className="w-full bg-slate-50 border-none rounded-3xl px-8 py-5 text-[#0c1d37] font-bold focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Email Address</label>
                                            <input type="email" className="w-full bg-slate-50 border-none rounded-3xl px-8 py-5 text-[#0c1d37] font-bold focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" placeholder="john@company.com" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Service Type</label>
                                        <select className="w-full bg-slate-50 border-none rounded-3xl px-8 py-5 text-[#0c1d37] font-bold focus:ring-4 focus:ring-blue-500/10 transition-all outline-none appearance-none cursor-pointer">
                                            <option>New Reservation</option>
                                            <option>Corporate Account Inquiry</option>
                                            <option>General Support</option>
                                            <option>Feedback</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Your Inquiry</label>
                                        <textarea rows={5} className="w-full bg-slate-50 border-none rounded-3xl px-8 py-5 text-[#0c1d37] font-bold focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none" placeholder="Tell us how we can assist..."></textarea>
                                    </div>

                                    <button className="btn btn-cta w-full py-7 rounded-[32px] text-xl font-black uppercase tracking-tight shadow-2xl shadow-orange-500/20 active:scale-95 transition-all flex items-center justify-center gap-4 bg-orange-500 hover:bg-orange-600 border-none">
                                        <Send size={24} />
                                        Submit Inquiry
                                    </button>
                                </form>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Mobile Sticky Label */}
            <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
                <a href={`tel:${phone.replace(/\D/g, '')}`} className="btn bg-[#0c1d37] text-white w-full py-5 text-2xl shadow-2xl flex items-center justify-center gap-4 hover:bg-[#122b5e] border-none rounded-2xl ring-4 ring-white">
                    <Phone size={28} />
                    Call Executive Desk
                </a>
            </div>
        </main>
    );
}
