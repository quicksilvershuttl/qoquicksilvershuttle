import { Metadata } from 'next';
import { HelpCircle, Phone, ArrowRight, Shield, Clock, Award, Star } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';
import HeroImage from '../components/HeroImage';
import BackgroundOverlay from '../components/BackgroundOverlay';
import { faqs } from '../data/faqs';

export const metadata: Metadata = {
    title: 'Airport Shuttle FAQ | Airport Car Service Questions | Quicksilver Airport car',
    description: 'Answers to all your questions about Quicksilver Kansas City airport shuttle. Pricing, booking, policies — all in one place. Serving KC since 1982.',
};

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* ═══ HERO SECTION — Perfect Hero Section framework ═══ */}
            <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-gradient-to-br from-[#0c1d3d] via-[#122b5e] to-[#0f2044] pt-24 pb-12">
                <div className="absolute inset-0 z-0">
                    <BackgroundOverlay />
                    <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[180px] animate-pulse-glow pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[150px] animate-float pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-8 lg:pt-0">

                        {/* LEFT COLUMN */}
                        <FadeIn className="text-white flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 mb-7 px-5 py-2 bg-white/[0.07] backdrop-blur-xl rounded-full border border-white/[0.12] shadow-[0_0_30px_rgba(36,99,235,0.1)]">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
                                <p className="text-[11px] font-bold tracking-[0.25em] text-white/80 uppercase">Knowledge Base · Since 1982</p>
                            </div>

                            <h1 className="mb-4 sm:mb-6 font-display font-black leading-[1.1] text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white drop-shadow-lg text-center lg:text-left">
                                Got Questions? <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-blue-300 drop-shadow-xl">
                                    We Have Answers.
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl text-center lg:text-left font-light mx-auto lg:mx-0">
                                Everything you need to know about your premium Kansas City airport transportation — pricing, booking, policies, and logistics.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto mb-10 sm:mb-12">
                                <a
                                    href="#faqs"
                                    className="btn btn-cta text-base sm:text-lg px-6 py-4 sm:px-9 sm:py-5 group shadow-[0_0_40px_rgba(249,115,22,0.25)] hover:shadow-[0_0_60px_rgba(249,115,22,0.45)] border-none w-full sm:w-auto flex justify-center items-center"
                                >
                                    <span>Browse All FAQs</span>
                                    <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform" size={20} />
                                </a>
                                <a
                                    href="tel:913-262-0905"
                                    className="group flex items-center justify-center gap-2 sm:gap-3 text-white transition-all py-4 px-6 sm:px-7 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/[0.06] backdrop-blur-sm w-full sm:w-auto"
                                >
                                    <Phone size={18} className="text-blue-300 group-hover:text-white transition-colors" />
                                    <span className="font-bold tracking-wide text-sm sm:text-base">(913) 262-0905</span>
                                </a>
                            </div>

                            {/* Social Proof — identical to homepage */}
                            <div className="flex flex-col sm:flex-row items-center gap-5 mb-10 pt-8 border-t border-white/10 w-full lg:w-auto mx-auto lg:mx-0">
                                <div className="flex items-center -space-x-3">
                                    {[
                                        'https://randomuser.me/api/portraits/men/32.jpg',
                                        'https://randomuser.me/api/portraits/women/44.jpg',
                                        'https://randomuser.me/api/portraits/men/46.jpg',
                                        'https://randomuser.me/api/portraits/women/12.jpg',
                                        'https://randomuser.me/api/portraits/men/14.jpg'
                                    ].map((imgSrc, i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0f2044] shadow-lg overflow-hidden flex-shrink-0">
                                            <img src={imgSrc} alt="Customer" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full bg-white/10 border-2 border-[#0f2044] flex items-center justify-center text-white/70 text-[10px] font-bold backdrop-blur-sm z-10">+4K</div>
                                </div>
                                <div className="flex flex-col gap-0.5 items-center sm:items-start">
                                    <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
                                        {[...Array(5)].map((_, i) => (<Star key={i} fill="currentColor" size={14} />))}
                                        <span className="text-white/60 text-sm ml-1 font-medium">4.8/5</span>
                                    </div>
                                    <p className="text-sm text-slate-400"><strong className="text-white/80">Rick, Scott & 4,000+ riders</strong> trust Quicksilver</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap xl:flex-nowrap whitespace-nowrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mx-auto lg:mx-0">
                                {[
                                    { label: 'Fully Insured', icon: <Shield size={16} className="text-[#2463eb]" /> },
                                    { label: '24/7 Dispatch', icon: <Clock size={16} className="text-[#2463eb]" /> },
                                    { label: 'Fixed Pricing', icon: <HelpCircle size={16} className="text-[#2463eb]" /> },
                                    { label: 'TripAdvisor ★', icon: <Award size={16} className="text-amber-500" /> },
                                ].map((badge, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-white text-[#0f2044] px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-lg shadow-black/20 hover:-translate-y-1 transition-transform">
                                        {badge.icon}
                                        <span>{badge.label}</span>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        {/* RIGHT COLUMN — identical to homepage: no floating card */}
                        <FadeIn delay={0.25} className="w-full relative flex items-center justify-center pb-8 lg:pb-0">
                            <div className="relative w-full max-w-lg lg:max-w-full mx-auto">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#2463eb]/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"></div>
                                <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-auto lg:h-[400px] drop-shadow-[0_20px_60px_rgba(36,99,235,0.4)]">
                                    <HeroImage
                                        src="/Home page images/Saloon Class.png"
                                        alt="Quicksilver Kansas City airport shuttle FAQ"
                                        priority
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none"></div>
            </section>

            {/* ═══ CATEGORY NAV ═══ */}
            <section id="faqs" className="py-12 bg-slate-50 border-b border-slate-200 scroll-mt-24">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {faqs.map((cat, idx) => (
                            <a
                                key={idx}
                                href={`#${cat.category.toLowerCase().replace(/\s+/g, '-')}`}
                                className="p-4 bg-white rounded-2xl border border-slate-200 text-center hover:border-blue-600 hover:shadow-md transition-all group"
                            >
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover:text-blue-600">Category</p>
                                <p className="text-sm font-bold text-slate-800 line-clamp-1">{cat.category}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        {faqs.map((category, categoryIndex) => (
                            <div
                                key={categoryIndex}
                                id={category.category.toLowerCase().replace(/\s+/g, '-')}
                                className="mb-24 scroll-mt-32"
                            >
                                <FadeIn>
                                    <div className="flex items-center gap-6 mb-12">
                                        <div className="h-px flex-1 bg-slate-200"></div>
                                        <h2 className="text-2xl md:text-3xl font-display font-black text-[#0c1d37] uppercase tracking-tight px-6 py-3 bg-slate-50 rounded-full border border-slate-200">
                                            {category.category}
                                        </h2>
                                        <div className="h-px flex-1 bg-slate-200"></div>
                                    </div>

                                    <div className="grid gap-8 lg:grid-cols-2">
                                        {category.questions.map((faq, faqIndex) => (
                                            <div
                                                key={faqIndex}
                                                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all group"
                                            >
                                                <h3 className="font-display font-black text-[#0c1d37] mb-4 text-xl leading-snug group-hover:text-blue-600 transition-colors">
                                                    {faq.question}
                                                </h3>
                                                <p className="text-slate-500 leading-relaxed font-medium">{faq.answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                </FadeIn>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Still Have Questions */}
            <section className="py-24 bg-[#0c1d37] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.04]"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]"></div>
                <div className="container-custom relative z-10 text-center">
                    <FadeIn>
                        <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase tracking-tight mb-6">
                            Still Have Questions?
                        </h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-medium">
                            Our dispatch team is available 24/7. Call us directly for reservations or any travel questions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:913-262-0905" className="btn btn-cta border-none shadow-xl inline-flex items-center gap-3">
                                <Phone size={22} />
                                (913) 262-0905
                            </a>
                            <Link href="/reservation" className="btn bg-white/10 border border-white/20 text-white hover:bg-white/20 inline-flex items-center gap-2">
                                Book Online <ArrowRight size={18} />
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
