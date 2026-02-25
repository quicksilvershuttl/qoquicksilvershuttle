import { Metadata } from 'next';
import { HelpCircle, Phone, ArrowRight, Shield, Clock, Award, Star, MessageSquareQuote } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';
import HeroImage from '../components/HeroImage';
import BackgroundOverlay from '../components/BackgroundOverlay';
import { faqs } from '../data/faqs';

export const metadata: Metadata = {
    title: 'Airport Shuttle FAQ | Kansas City Airport Car Service Questions | Quicksilver',
    description: 'Expert answers to your Kansas City airport shuttle questions. Pricing, flight tracking, 24/7 booking, and more. Serving MCI since 1982.',
};

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* ═══ HERO SECTION — Perfect Hero Section framework ═══ */}
            <section className="relative min-h-[90dvh] flex items-center overflow-hidden bg-gradient-to-br from-[#0c1d37] via-[#1a3a6b] to-[#0c1d37] pt-32 pb-24">
                <div className="absolute inset-0 z-0">
                    <BackgroundOverlay />
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[150px] pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 mb-10 px-6 py-2.5 bg-white/[0.08] backdrop-blur-3xl rounded-full border border-white/[0.15] shadow-2xl">
                                <HelpCircle size={18} className="text-blue-400" />
                                <span className="text-[10px] sm:text-xs font-black tracking-[0.3em] text-white/90 uppercase">Transit Knowledge Base</span>
                            </div>

                            <h1 className="mb-8 font-display font-black leading-[1.05] text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white drop-shadow-2xl">
                                Got Questions? <br className="hidden sm:block" />
                                <span className="text-blue-400">We Have Answers.</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto font-light">
                                Definitive insights into your Kansas City airport transportation – from fixed pricing and flight tracking to executive logistics.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-16">
                                <Link
                                    href="/reservation"
                                    className="btn btn-cta text-xl px-12 py-6 rounded-3xl shadow-2xl shadow-orange-500/20 active:scale-95 transition-all font-black uppercase tracking-tight flex items-center justify-center gap-3 border-none bg-orange-500 hover:bg-orange-600 w-full sm:w-auto"
                                >
                                    <span>Reserve Your Ride</span>
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

                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    { label: 'Licensed & Insured', icon: <Shield size={16} /> },
                                    { label: '24/7 Human Dispatch', icon: <Clock size={16} /> },
                                    { label: 'Flight Tracking', icon: <Award size={16} /> },
                                    { label: 'Google 4.8★', icon: <Star size={16} className="fill-amber-500 text-amber-500" /> },
                                ].map((badge, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 text-white/70 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-sm">
                                        <span className="text-blue-400">{badge.icon}</span>
                                        {badge.label}
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ═══ CATEGORY NAV ═══ */}
            <section className="py-20 bg-slate-50 border-y border-slate-100 sticky top-20 z-40 backdrop-blur-xl bg-white/80">
                <div className="container-custom">
                    <div className="flex overflow-x-auto pb-4 sm:pb-0 hide-scrollbar gap-4 sm:justify-center">
                        {faqs.map((cat, idx) => (
                            <a
                                key={idx}
                                href={`#${cat.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                className="px-8 py-4 bg-white rounded-2xl border-2 border-slate-100 text-center whitespace-nowrap hover:border-[#2463eb] hover:shadow-xl hover:shadow-blue-500/5 transition-all text-xs font-black uppercase tracking-widest text-slate-400 hover:text-[#2463eb]"
                            >
                                {cat.category}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FAQ CONTENT ═══ */}
            <section className="py-32 bg-white">
                <div className="container-custom max-w-6xl mx-auto px-4 sm:px-6">
                    {faqs.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            id={category.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                            className="mb-32 scroll-mt-48"
                        >
                            <FadeIn>
                                <div className="flex items-center gap-8 mb-16">
                                    <h2 className="text-3xl md:text-4xl font-display font-black text-[#0c1d37] tracking-tight">
                                        {category.category}
                                    </h2>
                                    <div className="h-0.5 flex-1 bg-gradient-to-r from-blue-100 to-transparent"></div>
                                </div>

                                <div className="grid gap-10 md:grid-cols-2">
                                    {category.questions.map((faq, faqIndex) => (
                                        <div
                                            key={faqIndex}
                                            className="bg-white p-10 rounded-[48px] border-2 border-slate-50 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_100px_rgba(36,99,235,0.08)] hover:border-blue-50 transition-all duration-700 group flex flex-col h-full ring-1 ring-slate-100"
                                        >
                                            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#2463eb] mb-8 group-hover:bg-[#2463eb] group-hover:text-white transition-all duration-700 shadow-inner">
                                                <MessageSquareQuote size={24} />
                                            </div>

                                            <h3 className="font-display font-black text-[#0c1d37] mb-6 text-2xl leading-tight group-hover:text-[#2463eb] transition-colors">
                                                {faq.question}
                                            </h3>

                                            <div className="flex-grow text-slate-500 text-lg leading-relaxed font-medium">
                                                <div className="pl-6 border-l-4 border-slate-100 italic transition-colors group-hover:border-blue-100">
                                                    {faq.answer}
                                                </div>
                                            </div>

                                            {faq.linkUrl && (
                                                <div className="mt-10 pt-8 border-t border-slate-50">
                                                    <Link
                                                        href={faq.linkUrl}
                                                        className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-[#2463eb] hover:gap-5 transition-all"
                                                    >
                                                        {faq.linkText || 'Learn More'}
                                                        <ArrowRight size={16} />
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══ FINAL CTA ═══ */}
            <section className="py-32 bg-[#0c1d37] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.04]"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[180px]"></div>

                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <FadeIn className="text-center max-w-4xl mx-auto flex flex-col items-center">
                        <div className="w-24 h-24 rounded-[32px] bg-white/5 border border-white/10 flex items-center justify-center mb-12 backdrop-blur-xl">
                            <Phone size={48} className="text-white" />
                        </div>

                        <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-[1.1] mb-8">
                            Still Have Questions? <br />
                            <span className="text-blue-400">Our Experts Are Standby.</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-300 mb-12 font-light leading-relaxed">
                            Our human-operated dispatch team is available 24/7. Call us directly for custom group logistics or immediate roadside assistance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 w-full justify-center">
                            <a
                                href="tel:913-262-0905"
                                className="btn btn-cta text-2xl px-16 py-7 rounded-[32px] shadow-2xl shadow-orange-500/20 active:scale-95 transition-all font-black uppercase tracking-tight flex items-center justify-center gap-4 border-none bg-orange-500 hover:bg-orange-600"
                            >
                                <Phone size={28} />
                                (913) 262-0905
                            </a>
                            <Link
                                href="/reservation"
                                className="flex items-center justify-center gap-4 text-white hover:text-white transition-all py-7 px-16 rounded-[32px] border-2 border-white/20 hover:border-white/40 hover:bg-white/5 backdrop-blur-md font-black uppercase tracking-tight text-xl"
                            >
                                <span>Book Online</span>
                                <ArrowRight size={24} />
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
