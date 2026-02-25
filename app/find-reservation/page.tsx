import { Metadata } from 'next';
import { Search, Phone, Mail, ArrowRight, Hash, Clock, Shield, Award, Star } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';
import HeroImage from '../components/HeroImage';
import BackgroundOverlay from '../components/BackgroundOverlay';

export const metadata: Metadata = {
    title: 'Find Your Reservation | Manage Your Booking | Quicksilver Airport Shuttle',
    description: 'Look up, modify, or manage your existing Quicksilver reservation. Enter your confirmation number to access your premium airport shuttle booking.',
};

export default function FindReservationPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* ═══ HERO SECTION ═══ */}
            <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-gradient-to-br from-[#0c1d3d] via-[#122b5e] to-[#0f2044] pt-24 pb-12">
                <div className="absolute inset-0 z-0">
                    <BackgroundOverlay />
                    <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[180px] animate-pulse-glow pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[150px] animate-float pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-8 lg:pt-0">

                        <FadeIn className="text-white flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 mb-7 px-5 py-2 bg-white/[0.07] backdrop-blur-xl rounded-full border border-white/[0.12]">
                                <Shield size={14} className="text-blue-300" />
                                <p className="text-[11px] font-bold tracking-[0.25em] text-white/80 uppercase">Secure Reservation Access</p>
                            </div>

                            <h1 className="mb-4 sm:mb-6 font-display font-black leading-[1.1] text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white drop-shadow-lg text-center lg:text-left">
                                Find Your <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-blue-300 drop-shadow-xl">
                                    Reservation
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl text-center lg:text-left font-light mx-auto lg:mx-0">
                                Access your existing booking to view trip details, make adjustments, or manage cancellations. Quick and secure.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto mb-10 sm:mb-12">
                                <a
                                    href="#lookup"
                                    className="btn btn-cta text-base sm:text-lg px-6 py-4 sm:px-9 sm:py-5 group shadow-[0_0_40px_rgba(249,115,22,0.25)] hover:shadow-[0_0_60px_rgba(249,115,22,0.45)] border-none w-full sm:w-auto flex justify-center items-center"
                                >
                                    <span>Look Up Booking</span>
                                    <Search className="ml-2 sm:ml-3 group-hover:scale-110 transition-transform" size={20} />
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
                                            <img src={imgSrc} alt="Verified Quicksilver customer" className="w-full h-full object-cover" />
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
                                    { label: 'SSL Secured', icon: <Shield size={16} className="text-[#2463eb]" /> },
                                    { label: '24/7 Access', icon: <Clock size={16} className="text-[#2463eb]" /> },
                                    { label: 'Instant Results', icon: <Search size={16} className="text-[#2463eb]" /> },
                                    { label: 'Since 1982', icon: <Award size={16} className="text-amber-500" /> },
                                ].map((badge, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-white text-[#0f2044] px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-lg shadow-black/20 hover:-translate-y-1 transition-transform">
                                        {badge.icon}
                                        <span>{badge.label}</span>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.25} className="w-full relative flex items-center justify-center pb-8 lg:pb-0">
                            <div className="relative w-full max-w-lg lg:max-w-full mx-auto">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#2463eb]/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"></div>
                                <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-auto lg:h-[400px] drop-shadow-[0_20px_60px_rgba(36,99,235,0.4)]">
                                    <HeroImage
                                        src="/Home page images/Saloon Class.png"
                                        alt="Quicksilver find your reservation"
                                        priority
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none"></div>
            </section>

            {/* Lookup Form */}
            <section id="lookup" className="section bg-slate-50 scroll-mt-24">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto">
                        <FadeIn>
                            <div className="bg-white rounded-[50px] shadow-2xl border border-slate-100 p-10 md:p-14 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-bl-full opacity-60"></div>

                                <div className="text-center mb-12 relative z-10">
                                    <h2 className="font-display text-3xl font-black text-[#0c1d37] uppercase tracking-tight mb-2">Look Up Your Booking</h2>
                                    <p className="text-slate-400 font-medium text-sm">Enter your confirmation details below</p>
                                </div>

                                <form className="space-y-8 relative z-10">
                                    <div className="space-y-3">
                                        <label htmlFor="confirmationNumber" className="block text-sm font-black text-[#0c1d37] uppercase tracking-[0.2em]">Confirmation Number *</label>
                                        <div className="relative">
                                            <Hash className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                            <input type="text" id="confirmationNumber" name="confirmationNumber" required
                                                className="w-full pl-14 pr-6 py-5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none font-mono font-black text-[#0c1d37] tracking-wider placeholder:text-slate-300 placeholder:font-sans placeholder:font-medium placeholder:tracking-normal shadow-sm"
                                                placeholder="QS-XXXXX-XXXX" />
                                        </div>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Found in your confirmation email.</p>
                                    </div>

                                    <div className="space-y-3">
                                        <label htmlFor="email" className="block text-sm font-black text-[#0c1d37] uppercase tracking-[0.2em]">Email Address *</label>
                                        <div className="relative">
                                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                            <input type="email" id="email" name="email" required
                                                className="w-full pl-14 pr-6 py-5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none font-bold text-[#0c1d37] placeholder:text-slate-300 shadow-sm"
                                                placeholder="Email used during reservation" />
                                        </div>
                                    </div>

                                    <button type="submit"
                                        className="group w-full bg-[#0c1d37] hover:bg-[#162d4f] text-white font-black text-xl py-6 rounded-2xl shadow-xl hover:shadow-2xl flex items-center justify-center gap-4 transition-all hover:scale-[1.01]">
                                        <Search size={26} />
                                        Retrieve Reservation
                                        <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform ml-auto opacity-60" />
                                    </button>
                                </form>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="mt-14 text-center">
                                <h3 className="text-2xl font-display font-black text-[#0c1d37] uppercase tracking-tight mb-3">Can&apos;t Find It?</h3>
                                <p className="text-slate-500 font-medium mb-10 leading-relaxed">Our dispatch team is available 24/7 to help you locate your booking.</p>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <a href="tel:913-262-0905"
                                        className="group bg-[#0c1d37] text-white p-8 rounded-[32px] hover:shadow-2xl transition-all flex flex-col items-center shadow-lg">
                                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <Phone className="text-blue-300" size={28} />
                                        </div>
                                        <h4 className="text-lg font-display font-black mb-1 uppercase tracking-tight">Call Direct</h4>
                                        <p className="text-white font-black text-xl tracking-tighter">(913) 262-0905</p>
                                        <span className="mt-3 bg-white/10 border border-white/20 text-white/70 py-1 px-3 rounded-full text-xs font-bold uppercase tracking-widest">24/7</span>
                                    </a>
                                    <Link href="/contact"
                                        className="group bg-white border border-slate-100 text-[#0c1d37] p-8 rounded-[32px] hover:shadow-2xl transition-all flex flex-col items-center shadow-lg">
                                        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all border border-slate-100">
                                            <Mail className="text-blue-600 group-hover:text-white transition-colors" size={28} />
                                        </div>
                                        <h4 className="text-lg font-display font-black mb-1 uppercase tracking-tight">Contact Us</h4>
                                        <span className="text-[#0c1d37] font-black text-xl flex items-center gap-2">
                                            Help Center <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <span className="mt-3 bg-slate-50 border border-slate-100 text-slate-400 py-1 px-3 rounded-full text-xs font-bold uppercase tracking-widest">Fast Reply</span>
                                    </Link>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </main>
    );
}
