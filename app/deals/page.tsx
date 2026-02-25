import { Metadata } from 'next';
import Link from 'next/link';
import { Tag, Percent, GraduationCap, MapPin, Building2, ArrowRight, Phone, Shield, Clock, Award, Star, Zap, CheckCircle } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import HeroImage from '../components/HeroImage';
import BackgroundOverlay from '../components/BackgroundOverlay';
import TrustAvatars from '../components/TrustAvatars';

export const metadata: Metadata = {
    title: 'Airport Shuttle Deals & Student Rates | Quicksilver Kansas City',
    description: 'Exclusive airport shuttle deals and discounted university rates across Kansas and Missouri. Save on round trips and student travel from KCI Airport since 1982.',
};

export default function DealsPage() {
    const mainOffers = [
        {
            title: 'Round Trip Bundle',
            discount: '10% VALUE',
            description: 'Secure both your airport departure and return trips together for a consolidated 10% fare reduction.',
            icon: <Percent size={32} />,
            code: 'ROUNDTRIP10',
            popular: true
        },
        {
            title: 'Student Advantage',
            discount: '20% OFF',
            description: 'Verified students receive exclusive 20% discounts on all airport shuttle routes and group transfers.',
            icon: <GraduationCap size={32} />,
            code: 'STUDENT20'
        }
    ];

    const kansasColleges = [
        { name: 'Baker University', price: '$135' },
        { name: 'Benedictine College', price: '$95' },
        { name: 'Emporia State', price: '$155' },
        { name: 'Kansas State Univ.', price: '$155' },
        { name: 'KU Lawrence', price: '$55' },
        { name: 'Washburn Univ.', price: '$75' },
        { name: 'Wichita State', price: '$210' },
        { name: 'Pittsburg State', price: '$310' },
    ];

    const missouriColleges = [
        { name: 'William Jewell', price: '$45' },
        { name: 'Avila University', price: '$75' },
        { name: 'Park University', price: '$45' },
        { name: 'Rockhurst Univ.', price: '$50' },
        { name: 'Univ. of Missouri', price: '$50' },
        { name: 'Missouri Western', price: '$75' },
        { name: 'NW Missouri State', price: '$155' },
        { name: 'UCM Warrensburg', price: '$155' },
    ];

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
                                <Tag size={16} className="text-blue-400" />
                                <span className="text-[10px] sm:text-xs font-black tracking-[0.3em] text-white/90 uppercase">Exclusive Promotions 2026</span>
                            </div>

                            <h1 className="mb-8 font-display font-black leading-[1.05] text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white drop-shadow-2xl">
                                Premium Travel, <br className="hidden sm:block" />
                                <span className="text-blue-400">Better Rates.</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0 font-light px-4 sm:px-0">
                                Exclusive airport shuttle deals and university rates tailored for the Kansas City student and faculty community.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start w-full sm:w-auto mb-16 px-4 sm:px-0">
                                <Link
                                    href="/reservation"
                                    className="btn btn-cta text-lg sm:text-xl px-10 py-5 sm:px-12 sm:py-6 rounded-2xl sm:rounded-3xl shadow-2xl shadow-orange-500/20 active:scale-95 transition-all font-black uppercase tracking-tight flex items-center justify-center gap-3 border-none bg-orange-500 hover:bg-orange-600 w-full sm:w-auto"
                                >
                                    <span>Claim Discount</span>
                                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                                <a
                                    href="tel:913-262-0905"
                                    className="flex items-center justify-center gap-4 text-white hover:text-blue-400 transition-all py-5 px-10 rounded-2xl sm:rounded-3xl border-2 border-white/20 hover:border-blue-400/40 backdrop-blur-md w-full sm:w-auto font-black uppercase tracking-tight"
                                >
                                    <Phone size={20} />
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
                                        alt="Quicksilver Deals"
                                        priority
                                    />
                                </div>

                                {/* Promo Badge */}
                                <div className="absolute -top-10 -right-[5%] bg-white p-10 rounded-[40px] shadow-2xl border border-slate-100 hidden sm:block">
                                    <div className="text-center">
                                        <p className="text-6xl font-black text-blue-600 font-display tracking-tight leading-none mb-2">20%</p>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Max Student Savings</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>
            </section>

            {/* Main Offers */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container-custom px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto -mt-32 relative z-20">
                        {mainOffers.map((deal, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className={`p-12 rounded-[50px] border-2 bg-white transition-all duration-700 h-full group relative overflow-hidden flex flex-col shadow-2xl ${deal.popular ? 'border-blue-500 ring-4 ring-blue-500/10' : 'border-slate-50'}`}>
                                    {deal.popular && (
                                        <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-black px-6 py-2 rounded-bl-3xl uppercase tracking-widest z-30">
                                            Most Popular
                                        </div>
                                    )}
                                    <div className="w-20 h-20 rounded-[28px] bg-blue-50 text-[#2463eb] flex items-center justify-center mb-10 group-hover:bg-[#2463eb] group-hover:text-white transition-all duration-700 shadow-inner">
                                        {deal.icon}
                                    </div>
                                    <h3 className="text-3xl font-black text-[#0c1d37] mb-4 font-display tracking-tight capitalize">{deal.title}</h3>
                                    <div className="inline-flex items-center px-4 py-1.5 bg-green-50 text-green-700 font-black rounded-xl text-xs tracking-widest uppercase mb-8 w-fit">
                                        {deal.discount}
                                    </div>
                                    <p className="text-slate-500 leading-relaxed font-medium text-lg mb-10 flex-grow">{deal.description}</p>

                                    <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Promo Code</span>
                                            <span className="text-sm font-black text-[#0c1d37] tracking-widest">{deal.code}</span>
                                        </div>
                                        <Link href="/reservation" className="btn btn-primary px-8 py-4 rounded-2xl text-xs uppercase font-black tracking-widest group-hover:bg-orange-500 border-none transition-colors">
                                            Redeem
                                        </Link>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* University Rates */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <FadeIn className="text-center max-w-4xl mx-auto mb-24">
                        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-white rounded-full border border-white shadow-xl">
                            <Building2 size={16} className="text-[#2463eb]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Regional Campus Fares</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-[#0c1d37] tracking-tight leading-[1.05] mb-8">
                            University <span className="text-blue-500">Direct.</span>
                        </h2>
                    </FadeIn>

                    <div className="grid lg:grid-cols-2 gap-20">
                        {/* Kansas Schools */}
                        <div>
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-14 h-14 bg-[#0c1d37] rounded-2xl flex items-center justify-center text-white shadow-xl">
                                    <MapPin size={28} />
                                </div>
                                <h3 className="text-3xl font-black text-[#0c1d37] font-display tracking-tight uppercase">Kansas Hubs</h3>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {kansasColleges.map((school, i) => (
                                    <div key={i} className="flex items-center justify-between p-7 bg-white rounded-[32px] border border-white shadow-sm hover:shadow-xl hover:border-blue-50 transition-all duration-500 group">
                                        <span className="font-bold text-slate-600 group-hover:text-blue-600 transition-colors">{school.name}</span>
                                        <span className="font-black text-[#0c1d37] tracking-tight">{school.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Missouri Schools */}
                        <div>
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-14 h-14 bg-[#0c1d37] rounded-2xl flex items-center justify-center text-white shadow-xl">
                                    <MapPin size={28} />
                                </div>
                                <h3 className="text-3xl font-black text-[#0c1d37] font-display tracking-tight uppercase">Missouri Hubs</h3>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {missouriColleges.map((school, i) => (
                                    <div key={i} className="flex items-center justify-between p-7 bg-white rounded-[32px] border border-white shadow-sm hover:shadow-xl hover:border-blue-50 transition-all duration-500 group">
                                        <span className="font-bold text-slate-600 group-hover:text-blue-600 transition-colors">{school.name}</span>
                                        <span className="font-black text-[#0c1d37] tracking-tight">{school.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ FOOTER CTA ═══ */}
            <section className="py-32 bg-[#0c1d37] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.04]"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[180px]"></div>

                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <FadeIn className="text-center max-w-4xl mx-auto flex flex-col items-center">
                        <div className="w-24 h-24 rounded-[32px] bg-white/5 border border-white/10 flex items-center justify-center mb-12 backdrop-blur-xl">
                            <Zap size={48} className="text-white" />
                        </div>

                        <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-[1.1] mb-8">
                            Ready to <span className="text-blue-400">Save?</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-300 mb-12 font-light leading-relaxed">
                            Don't leave your travel to chance. Book your flat-rate university transfer today and travel with total confidence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 w-full justify-center">
                            <Link
                                href="/reservation"
                                className="btn btn-cta text-2xl px-16 py-7 rounded-[32px] shadow-2xl shadow-orange-500/20 active:scale-95 transition-all font-black uppercase tracking-tight flex items-center justify-center gap-4 border-none bg-orange-500 hover:bg-orange-600"
                            >
                                <Award size={28} />
                                Book With Discount
                            </Link>
                            <a
                                href="tel:913-262-0905"
                                className="flex items-center justify-center gap-4 text-white hover:text-white transition-all py-7 px-16 rounded-[32px] border-2 border-white/20 hover:border-white/40 hover:bg-white/5 backdrop-blur-md font-black uppercase tracking-tight text-xl"
                            >
                                <Phone size={24} />
                                <span>Speak to Support</span>
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>


        </main>
    );
}
