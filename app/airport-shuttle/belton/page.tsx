import { Metadata } from 'next';
import {
    Phone, ArrowRight, Plane,
    Car, Users, Zap, Sparkles, Wallet, Navigation,
    Star, Shield, Clock, DollarSign, Award
} from 'lucide-react';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';
import HeroImage from '../../components/HeroImage';

export const metadata: Metadata = {
    title: 'Airport Shuttle Belton | Reliable Ride to KCI & MCI',
    description: 'The best airport shuttle and car service in Belton, MO. Professional drivers, fixed rates, and 24/7 service from Belton to KCI Airport and back.',
};

export default function BeltonShuttlePage() {
    const phone = '(913) 262-0905';

    const features = [
        { title: 'Easy to Use', desc: 'Book your airport shuttle from anywhere in the city via our seamless online portal.', icon: <Zap className="text-blue-600" size={32} /> },
        { title: 'Budget & Occasion', desc: 'A car service for every budget and occasion—business, parties, or trips with heavy luggage.', icon: <Wallet className="text-blue-600" size={32} /> },
        { title: 'Safe & Reliable', desc: '24/7 shuttle tracking and professional weather navigation to ensure you arrive safely.', icon: <Navigation className="text-blue-600" size={32} /> },
        { title: 'Luxury & Clean', desc: 'All vehicles come equipped with modern features and maintained to the highest cleanliness standards.', icon: <Sparkles className="text-blue-600" size={32} /> }
    ];

    const fleetOptions = [
        { title: '4-Seater Sedan', desc: 'Perfect for solo travelers or small groups.', icon: <Car size={24} /> },
        { title: '6-Seater SUV', desc: 'Spacious and comfortable for family trips.', icon: <Users size={24} /> },
        { title: '8-Seater Van', desc: 'The largest capacity variant for group transfers.', icon: <Users size={24} /> }
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            {/* ═══ HERO SECTION — Homepage-identical framework ═══ */}
            <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-gradient-to-br from-[#0c1d3d] via-[#122b5e] to-[#0f2044] pt-24 pb-12">
                {/* Ambient Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('/Home%20page%20images/Airport-Shuttle-Services.webp')] bg-cover bg-center opacity-[0.06]"></div>
                    <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[180px] animate-pulse-glow pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[150px] animate-float pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-8 lg:pt-0">

                        {/* ═══ LEFT COLUMN ═══ */}
                        <FadeIn className="text-white flex flex-col items-center lg:items-start text-center lg:text-left">

                            <div className="inline-flex items-center gap-2 mb-7 px-5 py-2 bg-white/[0.07] backdrop-blur-xl rounded-full border border-white/[0.12] shadow-[0_0_30px_rgba(36,99,235,0.1)]">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
                                <p className="text-[11px] font-bold tracking-[0.25em] text-white/80 uppercase">Belton Premium Dispatch · Since 1982</p>
                            </div>

                            <h1 className="mb-4 sm:mb-6 font-display font-black leading-[1.05] text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white drop-shadow-lg text-center lg:text-left">
                                Belton to KCI <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-blue-300 drop-shadow-xl">
                                    Airport Shuttle.
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl text-center lg:text-left font-light mx-auto lg:mx-0">
                                The most reliable, safe, and professional airport car service from anywhere in Belton to KCI and back. Fixed rates, no hidden charges.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto mb-10 sm:mb-12">
                                <Link
                                    href="/fare-quote"
                                    className="btn btn-cta text-base sm:text-lg px-6 py-4 sm:px-9 sm:py-5 group shadow-[0_0_40px_rgba(249,115,22,0.25)] hover:shadow-[0_0_60px_rgba(249,115,22,0.45)] border-none w-full sm:w-auto flex justify-center items-center"
                                >
                                    <span>Get a Free Quote</span>
                                    <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform" size={20} />
                                </Link>
                                <a
                                    href={`tel:${phone.replace(/\D/g, '')}`}
                                    className="group flex items-center justify-center gap-2 sm:gap-3 text-white transition-all py-4 px-6 sm:px-7 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/[0.06] backdrop-blur-sm w-full sm:w-auto"
                                >
                                    <Phone size={18} className="text-blue-300 group-hover:text-white transition-colors" />
                                    <span className="font-bold tracking-wide text-sm sm:text-base">{phone}</span>
                                </a>
                            </div>

                            {/* Social Proof */}
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
                                    <div className="w-10 h-10 rounded-full bg-white/10 border-2 border-[#0f2044] flex items-center justify-center text-white/70 text-[10px] font-bold backdrop-blur-sm z-10">
                                        +4K
                                    </div>
                                </div>
                                <div className="flex flex-col gap-0.5 items-center sm:items-start">
                                    <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
                                        {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={14} />)}
                                        <span className="text-white/60 text-sm ml-1 font-medium">4.9/5</span>
                                    </div>
                                    <p className="text-sm text-slate-400"><strong className="text-white/80">Rick, Scott & 4,000+ riders</strong> trust Quicksilver</p>
                                </div>
                            </div>

                            {/* Credibility Badges */}
                            <div className="flex flex-wrap xl:flex-nowrap whitespace-nowrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mx-auto lg:mx-0">
                                {[
                                    { label: 'Fully Insured', icon: <Shield size={16} className="text-[#2463eb]" /> },
                                    { label: '24/7 Dispatch', icon: <Clock size={16} className="text-[#2463eb]" /> },
                                    { label: 'Fixed Pricing', icon: <DollarSign size={16} className="text-[#2463eb]" /> },
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
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#2463eb]/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"></div>
                                <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-auto lg:h-[400px] drop-shadow-[0_20px_60px_rgba(36,99,235,0.4)]">
                                    <HeroImage
                                        src="/Home page images/Saloon Class.png"
                                        alt="Quicksilver premium Belton to KCI airport shuttle sedan"
                                        priority
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none"></div>
            </section>

            {/* Intro Content */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <FadeIn>
                            <div className="bg-slate-50 border-l-8 border-[#0c1d37] p-12 rounded-r-[40px] shadow-sm mb-20">
                                <h2 className="text-2xl md:text-3xl font-display font-bold text-[#0c1d37] mb-6 uppercase tracking-tight">Your Dedicated Belton Service</h2>
                                <p className="text-xl text-slate-600 leading-relaxed">
                                    If you live in Belton and looking for a ride or a airport shuttle service from Belton to KCI or from Kansas City international airport to Belton,
                                    <strong> Quicksilver airport shuttle is here to serve you!</strong> Here at Quicksilver, we provide the best airport shuttle and airport car service
                                    from all over Belton to KCI Airport and from KCI Airport to back in the city.
                                </p>
                            </div>
                        </FadeIn>

                        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                            <FadeIn>
                                <div>
                                    <h2 className="font-display text-4xl font-bold mb-6 text-[#0c1d37] uppercase tracking-tight">Guaranteed Satisfaction</h2>
                                    <p className="text-xl text-slate-600 leading-relaxed mb-8">
                                        Customer satisfaction is one of our primary concerns. We make sure everything goes according to our user&apos;s plan.
                                        Our dedicated team ensures providing you with the best vehicles in the market at competitive, transparent rates.
                                    </p>
                                    <div className="text-[#0c1d37] font-black text-2xl uppercase tracking-tighter italic">
                                        Best prices! Win-win!
                                    </div>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <div className="bg-[#0c1d37] p-10 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                                    <h3 className="text-2xl font-display font-bold mb-8 uppercase tracking-widest text-white">Fleet Options</h3>
                                    <div className="space-y-6">
                                        {fleetOptions.map((v, i) => (
                                            <div key={i} className="flex items-center gap-4 group">
                                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white group-hover:bg-white/20 transition-colors">
                                                    {v.icon}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-lg">{v.title}</div>
                                                    <div className="text-white/60 text-sm">{v.desc}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="section bg-slate-50 border-t border-slate-200">
                <div className="container-custom text-center">
                    <FadeIn>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0c1d37] uppercase tracking-tight mb-20">Premium Features</h2>
                    </FadeIn>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((f, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-xl hover:shadow-2xl transition-all h-full group">
                                    <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-50 transition-colors shadow-inner">
                                        {f.icon}
                                    </div>
                                    <h3 className="text-2xl font-display font-bold mb-4 text-[#0c1d37] uppercase">{f.title}</h3>
                                    <p className="text-slate-500 font-medium leading-relaxed">{f.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#0c1d37] text-white text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="container-custom relative z-10">
                    <FadeIn>
                        <h2 className="mb-8 font-display text-4xl md:text-6xl font-bold uppercase tracking-tight">Ready for Belton&apos;s Best?</h2>
                        <p className="text-xl mb-12 text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
                            Book your airport shuttle or airport car service with Quicksilver and avail the best shuttle services in Belton!
                        </p>
                        <Link href="/reservation" className="btn btn-cta text-xl px-12 py-6 inline-flex items-center gap-3">
                            Book A Reservation
                            <ArrowRight size={24} className="ml-2" />
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
