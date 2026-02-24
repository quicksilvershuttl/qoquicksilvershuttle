import { Metadata } from 'next';
import { Calculator, MapPin, Users, Luggage, ArrowRight, Info, Award, Phone, Shield, Star, DollarSign, Clock, Plane, ChevronDown, Car, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '../components/FadeIn';
import HeroImage from '../components/HeroImage';
import BackgroundOverlay from '../components/BackgroundOverlay';

export const metadata: Metadata = {
    title: 'Instant Fare Quote | Kansas City Airport Shuttle Pricing | Quicksilver Official',
    description: 'Calculate your Kansas City airport transport costs instantly. Transparent flat rates, no surge pricing, and professional service since 1982.',
};

export default function FareQuotePage() {
    const inputClass = "w-full pl-14 pr-6 py-5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none font-bold text-[#0c1d37] placeholder:text-slate-400 shadow-sm";

    return (
        <main className="min-h-screen bg-slate-50">
            {/* ═══ HERO SECTION — "Perfect Hero Section" framework ═══ */}
            <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-gradient-to-br from-[#0c1d3d] via-[#122b5e] to-[#0f2044] pt-24 pb-12">
                {/* Ambient Background Effects */}
                <div className="absolute inset-0 z-0">
                    <BackgroundOverlay />
                    <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[180px] animate-pulse-glow pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[150px] animate-float pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-8 lg:pt-0">

                        {/* ═══ LEFT COLUMN: Value Proposition ═══ */}
                        <FadeIn className="text-white flex flex-col items-center lg:items-start text-center lg:text-left">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 mb-7 px-5 py-2 bg-white/[0.07] backdrop-blur-xl rounded-full border border-white/[0.12] shadow-[0_0_30px_rgba(37,99,235,0.1)]">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
                                <p className="text-[11px] font-black tracking-[0.25em] text-white/80 uppercase">No Surge Pricing · Ever</p>
                            </div>

                            {/* H1 — VALUE PROPOSITION */}
                            <h1 className="mb-4 sm:mb-6 font-display font-black leading-[1.05] text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white drop-shadow-lg text-center lg:text-left uppercase">
                                Transparent <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-blue-300 drop-shadow-xl">
                                    Flat Rates
                                </span>
                            </h1>

                            {/* Supporting Copy */}
                            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl text-center lg:text-left font-medium mx-auto lg:mx-0">
                                Calculate your Kansas City airport transport costs instantly. No hidden fees, no surge multipliers, and zero surprises.
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto mb-10 sm:mb-12">
                                <a
                                    href="#calculator"
                                    className="btn btn-cta bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-xl px-6 py-4 sm:px-12 sm:py-6 group shadow-[0_0_40px_rgba(37,99,235,0.25)] border-none w-full sm:w-auto flex justify-center items-center font-black rounded-2xl"
                                >
                                    <span>Calculate Fare</span>
                                    <Calculator className="ml-2 sm:ml-3 group-hover:rotate-12 transition-transform" size={24} />
                                </a>
                                <a
                                    href="tel:913-262-0905"
                                    className="group flex items-center justify-center gap-2 sm:gap-3 text-white transition-all py-4 px-6 sm:px-8 rounded-2xl border-2 border-white/20 hover:border-blue-400 hover:bg-white/[0.06] backdrop-blur-sm w-full sm:w-auto font-black uppercase tracking-tight"
                                >
                                    <Phone size={20} className="text-blue-300 group-hover:text-white transition-colors" />
                                    <span>(913) 262-0905</span>
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

                            {/* Credibility Badges */}
                            <div className="flex flex-wrap xl:flex-nowrap whitespace-nowrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mx-auto lg:mx-0">
                                {[
                                    { label: 'Fixed Rates', icon: <DollarSign size={16} className="text-[#2463eb]" /> },
                                    { label: '24/7 Support', icon: <Clock size={16} className="text-[#2463eb]" /> },
                                    { label: 'Guaranteed', icon: <Shield size={16} className="text-[#2463eb]" /> },
                                    { label: 'TripAdvisor ★', icon: <Award size={16} className="text-amber-500" /> },
                                ].map((badge, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-white text-[#0f2044] px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-lg shadow-black/20 hover:-translate-y-1 transition-transform">
                                        {badge.icon}
                                        <span>{badge.label}</span>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        {/* ═══ RIGHT COLUMN: Hero Imagery ═══ */}
                        <FadeIn delay={0.25} className="w-full relative flex items-center justify-center pb-8 lg:pb-0">
                            <div className="relative w-full max-w-lg lg:max-w-full mx-auto">
                                {/* Glow behind vehicle */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#2463eb]/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"></div>

                                {/* Main Vehicle Image */}
                                <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-auto lg:h-[400px] drop-shadow-[0_20px_60px_rgba(36,99,235,0.4)]">
                                    <HeroImage
                                        src="/Home page images/Saloon Class.png"
                                        alt="Quicksilver transparent pricing and fare quotes"
                                        priority
                                    />
                                </div>

                                {/* Floating Card — Guarantee */}
                                <div className="absolute -top-4 right-4 sm:right-12 bg-white p-6 rounded-[32px] shadow-2xl border border-blue-100 flex flex-col items-center">
                                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-3">
                                        <DollarSign className="text-blue-600" size={24} />
                                    </div>
                                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Guarantee</p>
                                    <p className="text-2xl font-display font-black text-[#0c1d37] leading-none uppercase">Flat Rates</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none"></div>
            </section>


            {/* Quote Calculator */}
            <section id="calculator" className="section bg-slate-50 relative z-30">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <FadeIn>
                            <div className="bg-white p-6 md:p-20 rounded-[60px] shadow-2xl border border-slate-100 relative -mt-40 z-20 overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 opacity-40"></div>

                                <div className="mb-16 text-center md:text-left border-b border-slate-50 pb-12">
                                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#0c1d37] text-white font-black text-[10px] mb-8 uppercase tracking-[0.2em] shadow-lg">
                                        <Calculator size={14} className="text-blue-400" />
                                        Instant Pricing Calculator
                                    </div>
                                    <h2 className="font-display text-4xl md:text-5xl font-black text-[#0c1d37] uppercase tracking-tight mb-6">
                                        Calculate Your <span className="text-blue-600">Fare</span>
                                    </h2>
                                    <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                                        Enter your trip details to see exact pricing. No registration required for instant quotes.
                                    </p>
                                </div>

                                <form className="space-y-16">
                                    {/* Locations Row */}
                                    <div className="grid md:grid-cols-2 gap-12 bg-slate-50 p-10 md:p-14 rounded-[50px] border border-slate-100">
                                        <div className="space-y-10">
                                            <label htmlFor="pickup" className="block text-xs font-black text-slate-400 uppercase tracking-[0.3em]">
                                                Pickup Point
                                            </label>
                                            <div className="relative group">
                                                <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transision-colors" size={22} />
                                                <input
                                                    type="text"
                                                    id="pickup"
                                                    name="pickup"
                                                    required
                                                    className={inputClass}
                                                    placeholder="Enter city or full address"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-10">
                                            <label htmlFor="dropoff" className="block text-xs font-black text-slate-400 uppercase tracking-[0.3em]">
                                                Destination
                                            </label>
                                            <div className="relative group">
                                                <Plane className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={22} />
                                                <select
                                                    id="dropoff"
                                                    name="dropoff"
                                                    required
                                                    className={inputClass + " appearance-none cursor-pointer"}
                                                >
                                                    <option value="">Select Destination</option>
                                                    <option value="mci">Kansas City Intl Airport (MCI)</option>
                                                    <option value="wheeler">Wheeler Executive Airport</option>
                                                    <option value="other">Other Location</option>
                                                </select>
                                                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={20} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Service Type */}
                                    <div>
                                        <label className="block text-xs font-black text-slate-400 mb-10 uppercase tracking-[0.3em] flex items-center gap-4">
                                            <span className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-sm font-black shadow-lg">02</span>
                                            Select Service Class
                                        </label>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {[
                                                { value: 'shared', label: 'Shared Shuttle', price: '$35', icon: <Users size={28} /> },
                                                { value: 'sedan', label: 'Private Sedan', price: '$55', icon: <Car size={28} /> },
                                                { value: 'suv', label: 'Private SUV', price: '$75', icon: <ShieldCheck size={28} /> }
                                            ].map((option) => (
                                                <label key={option.value} className="relative cursor-pointer group">
                                                    <input
                                                        type="radio"
                                                        name="serviceType"
                                                        value={option.value}
                                                        className="peer sr-only"
                                                        required
                                                    />
                                                    <div className="p-10 rounded-[40px] bg-slate-50 border-2 border-transparent text-center peer-checked:border-blue-600 peer-checked:bg-white peer-checked:shadow-2xl transition-all duration-500 flex flex-col items-center h-full hover:bg-white hover:border-slate-100">
                                                        <div className="w-16 h-16 rounded-[24px] bg-white shadow-sm flex items-center justify-center mb-6 transition-all duration-500 text-slate-400 peer-checked:text-blue-600">
                                                            {option.icon}
                                                        </div>
                                                        <h3 className="font-black text-[#0c1d37] uppercase tracking-tight mb-4 text-lg">{option.label}</h3>
                                                        <div className="mt-auto pt-4 flex flex-col items-center">
                                                            <p className="text-blue-600 font-black text-2xl tracking-tighter">From {option.price}</p>
                                                            <div className="w-6 h-6 rounded-full border-2 border-slate-200 mt-4 flex items-center justify-center group-hover:border-blue-300 transition-colors peer-checked:border-blue-600 peer-checked:bg-blue-600">
                                                                <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Capacity & Saved Row */}
                                    <div className="grid md:grid-cols-2 gap-12 items-end">
                                        <div className="space-y-10">
                                            <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Passengers & Luggage</label>
                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="relative group">
                                                    <Users size={20} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600" />
                                                    <select id="passengers" name="passengers" required className={inputClass + " appearance-none cursor-pointer"}>
                                                        <option value="">Count</option>
                                                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => <option key={num} value={num}>{num}</option>)}
                                                    </select>
                                                </div>
                                                <div className="relative group">
                                                    <Luggage size={20} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600" />
                                                    <select id="luggage" name="luggage" className={inputClass + " appearance-none cursor-pointer"}>
                                                        <option value="">Bags</option>
                                                        {[0, 1, 2, 3, 4, 5, 6].map(num => <option key={num} value={num}>{num}</option>)}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 bg-green-50 p-6 rounded-[32px] border border-green-100 shadow-sm transition-all hover:shadow-lg">
                                            <input
                                                type="checkbox"
                                                id="roundTrip"
                                                name="roundTrip"
                                                className="w-10 h-10 text-blue-600 border-slate-200 rounded-2xl focus:ring-blue-600 cursor-pointer shadow-sm"
                                            />
                                            <label htmlFor="roundTrip" className="flex flex-col cursor-pointer">
                                                <span className="text-sm font-black text-[#0c1d37] uppercase tracking-tight">Round Trip Bundle</span>
                                                <span className="text-xs font-bold text-green-600 uppercase tracking-widest">Instant 10% Savings Applied</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-8 text-center pt-12 border-t border-slate-50">
                                        <button type="submit" className="btn btn-cta bg-blue-600 hover:bg-blue-700 text-white w-full text-2xl py-8 shadow-2xl flex items-center justify-center gap-6 border-none rounded-[32px] font-black group scale-100 hover:scale-[1.02] transition-all">
                                            Calculate Instant Fare
                                            <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
                                        </button>

                                        <div className="flex flex-wrap items-center justify-center gap-10 mt-12 text-slate-400 text-xs font-black uppercase tracking-[0.2em]">
                                            <div className="flex items-center gap-3"><Shield size={18} className="text-green-500" /> Fixed Pricing</div>
                                            <div className="flex items-center gap-3"><Clock size={18} className="text-blue-400" /> No Wait Times</div>
                                            <div className="flex items-center gap-3"><Star size={18} className="text-amber-400" /> Verified Rates</div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Pricing Guide Table */}
            <section className="section bg-white border-t border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-50/50 pointer-events-none"></div>

                <div className="container-custom relative z-10">
                    <FadeIn>
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-blue-50 text-blue-600 font-black text-[10px] mb-8 uppercase tracking-[0.2em] border border-blue-100 shadow-sm">
                                <Award size={16} />
                                Optimized 2026 Fleet Rates
                            </div>
                            <h2 className="mb-6 font-display text-4xl md:text-6xl font-black text-[#0c1d37] uppercase tracking-tight">Popular Route <span className="text-blue-600">Benchmarks</span></h2>
                            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                                Standard flat rates from key Kansas City districts to MCI Airport. Compare our reliability vs rideshare variability.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { from: 'Downtown KC', shared: '$35', sedan: '$55', suv: '$75' },
                            { from: 'Overland Park', shared: '$40', sedan: '$60', suv: '$80' },
                            { from: 'Lawrence, KS', shared: '$55', sedan: '$85', suv: '$110' },
                            { from: 'Topeka, KS', shared: '$75', sedan: '$105', suv: '$135' },
                            { from: 'Olathe, KS', shared: '$45', sedan: '$65', suv: '$85' },
                            { from: 'Lee\'s Summit', shared: '$45', sedan: '$65', suv: '$85' },
                        ].map((route, index) => (
                            <FadeIn key={index} delay={index * 0.05} className="bg-white p-12 rounded-[50px] border border-slate-100 hover:border-blue-200 transition-all hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)] group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 group-hover:bg-blue-100 transition-colors"></div>
                                <h3 className="text-3xl font-display font-black mb-10 text-[#0c1d37] uppercase tracking-tight relative z-10">{route.from}</h3>
                                <div className="space-y-6 relative z-10">
                                    <div className="flex justify-between items-center py-4 border-b border-slate-50 group-hover:border-blue-50 transition-colors">
                                        <span className="text-slate-400 font-black uppercase tracking-widest text-[10px]">Shared</span>
                                        <span className="font-black text-green-600 text-2xl tracking-tighter">{route.shared}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 border-b border-slate-50 group-hover:border-blue-50 transition-colors">
                                        <span className="text-slate-400 font-black uppercase tracking-widest text-[10px]">Private Sedan</span>
                                        <span className="font-black text-green-600 text-2xl tracking-tighter">{route.sedan}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4">
                                        <span className="text-slate-400 font-black uppercase tracking-widest text-[10px]">Private SUV</span>
                                        <span className="font-black text-green-600 text-2xl tracking-tighter">{route.suv}</span>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-[#0c1d37] text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px]"></div>
                <div className="container-custom relative z-10">
                    <FadeIn>
                        <h2 className="mb-8 font-display text-4xl md:text-7xl font-black uppercase tracking-tight leading-none">Ready to Book <br />Your Pickup?</h2>
                        <p className="text-xl md:text-2xl mb-16 text-white/50 max-w-2xl mx-auto font-medium leading-relaxed">
                            Secure your flat-rate fare and guarantee your availability by booking your reservation today.
                        </p>
                        <Link href="/reservation" className="btn btn-cta bg-blue-600 hover:bg-blue-700 text-white text-2xl px-16 py-8 font-black shadow-2xl inline-flex items-center gap-6 border-none rounded-[32px] hover:scale-105 transition-all">
                            Confirm Reservation
                            <ArrowRight size={32} />
                        </Link>
                    </FadeIn>
                </div>
            </section>

            {/* Mobile Sticky Label */}
            <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
                <a href="tel:913-262-0905" className="btn btn-cta bg-blue-600 text-white w-full py-5 text-2xl shadow-2xl flex items-center justify-center gap-4 border-none rounded-2xl active:scale-95 transition-all">
                    <Phone size={28} />
                    Call For Low Rates
                </a>
            </div>
        </main>
    );
}
