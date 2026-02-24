import { Metadata } from 'next';
import { MapPin, Phone, ArrowRight, Plane, ShieldCheck, Zap, Sparkles, Navigation, Star, Shield, Clock, DollarSign, Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '../components/FadeIn';
import HeroImage from '../components/HeroImage';
import BackgroundOverlay from '../components/BackgroundOverlay';
import TrustAvatars from '../components/TrustAvatars';
import FAQAccordion from '../components/FAQAccordion';

export const metadata: Metadata = {
    title: 'Airport Shuttle Service | All Kansas City Locations | Quicksilver Airport car',
    description: 'Quicksilver provides premium airport shuttle and private car services in the Kansas City metro. Professional chauffeurs and flat-rate pricing since 1982.',
};

export default function AirportShuttleIndexPage() {
    const locations = [
        { name: 'Kansas City', slug: 'kansas-city', popular: true },
        { name: 'Overland Park', slug: 'overland-park', popular: true },
        { name: 'Olathe', slug: 'olathe', popular: true },
        { name: 'Lawrence', slug: 'lawrence', popular: true },
        { name: 'Belton', slug: 'belton', popular: true },
        { name: 'Topeka', slug: 'topeka' },
        { name: 'Manhattan', slug: 'manhattan' },
        { name: 'Wichita', slug: 'wichita' },
        { name: 'Lees Summit', slug: 'lees-summit-mo' },
        { name: 'Independence', slug: 'independence-mo' },
        { name: 'Blue Springs', slug: 'blue-springs' },
        { name: 'Shawnee', slug: 'shawnee' },
        { name: 'Lenexa', slug: 'lenexa' },
        { name: 'Salina', slug: 'salina' },
        { name: 'Emporia', slug: 'emporia' },
        { name: 'Saint Joseph', slug: 'saint-joseph' },
        { name: 'Gladstone', slug: 'gladstone' },
        { name: 'Grandview', slug: 'grandview-mo' },
        { name: 'Prairie Village', slug: 'prairie-village' },
        { name: 'Mission', slug: 'mission' },
        { name: 'Dodge City', slug: 'dodge-city' },
        { name: 'Kearny', slug: 'kearny' },
        { name: 'Smithville', slug: 'smithville' },
        { name: 'Kansas State University', slug: 'kansas-state-university' },
        { name: 'Kansas City Marriott Downtown', slug: 'kansas-city-marriott-downtown' },
        { name: 'Holiday Inn', slug: 'holiday-inn' },
    ];

    const phone = '(913) 262-0905';

    return (
        <main className="min-h-screen bg-white">
            {/* ═══════════════════════════════════════════════════════════════
                HERO SECTION — "Perfect Hero Section" framework:
                Step 1: Clear Value Proposition
                Step 2: Split Layout (text left, imagery right)
                Step 3: Creative Concept (fleet coverage map)
                Step 4: Developed Imagery (vehicle showcase)
                Step 5: Design System (typography, colors, button hierarchy)
                Step 6: Optimization (social proof, free CTA, credibility logos)
             ═══════════════════════════════════════════════════════════════ */}
            <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-gradient-to-br from-[#0c1d3d] via-[#122b5e] to-[#0f2044] pt-24 pb-12">
                {/* Ambient Background Effects */}
                <div className="absolute inset-0 z-0">
                    <BackgroundOverlay />
                    <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#2463eb]/8 rounded-full blur-[180px] animate-pulse-glow pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[150px] animate-float pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-8 lg:pt-0">

                        {/* ═══ LEFT COLUMN: Value Proposition + CTAs + Social Proof ═══ */}
                        <FadeIn className="text-white flex flex-col items-center lg:items-start text-center lg:text-left">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 mb-7 px-5 py-2 bg-white/[0.07] backdrop-blur-xl rounded-full border border-white/[0.12] shadow-[0_0_30px_rgba(36,99,235,0.1)]">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
                                <p className="text-[11px] font-bold tracking-[0.25em] text-white/80 uppercase">26+ Cities Covered Across KC Metro</p>
                            </div>

                            {/* H1 — VALUE PROPOSITION */}
                            <h1 className="mb-4 sm:mb-6 font-display font-black leading-[1.1] text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white drop-shadow-lg text-center lg:text-left">
                                Every City. <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-blue-300 drop-shadow-xl">
                                    One Call.
                                </span>
                            </h1>

                            {/* Supporting Copy */}
                            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl text-center lg:text-left font-light mx-auto lg:mx-0">
                                From Overland Park to Topeka, Kansas City to Manhattan — Quicksilver delivers
                                fixed-rate airport shuttles to every corner of the KC metro. 24/7 dispatch, professional chauffeurs, no surge pricing.
                            </p>

                            {/* ═══ CTAs — Primary (orange) + Ghost (outline) ═══ */}
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto mb-10 sm:mb-12">
                                <Link
                                    href="/fare-quote"
                                    className="btn btn-cta text-base sm:text-lg px-6 py-5 sm:px-9 sm:py-5 group shadow-[0_0_40px_rgba(249,115,22,0.25)] hover:shadow-[0_0_60px_rgba(249,115,22,0.45)] border-none w-full sm:w-auto flex justify-center items-center"
                                >
                                    <span>Get a Free Quote</span>
                                    <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform" size={20} />
                                </Link>
                                <a
                                    href={`tel:${phone.replace(/\D/g, '')}`}
                                    className="group flex items-center justify-center gap-2 sm:gap-3 text-white transition-all py-5 px-6 sm:px-7 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/[0.06] backdrop-blur-sm w-full sm:w-auto"
                                >
                                    <Phone size={18} className="text-blue-300 group-hover:text-white transition-colors" />
                                    <span className="font-bold tracking-wide text-sm sm:text-base">{phone}</span>
                                </a>
                            </div>

                            {/* ═══ SOCIAL PROOF — Stacked avatars + rating ═══ */}
                            <div className="flex flex-col sm:flex-row items-center gap-5 mb-10 pt-8 border-t border-white/10 w-full lg:w-auto mx-auto lg:mx-0">
                                {/* Stacked Avatars */}
                                <TrustAvatars />
                                <div className="flex flex-col gap-0.5 items-center sm:items-start">
                                    <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} fill="currentColor" size={14} />
                                        ))}
                                        <span className="text-white text-sm ml-1 font-bold">4.9/5</span>
                                    </div>
                                    <p className="text-sm text-slate-300">
                                        <strong className="text-white">Rick, Scott & 4,000+ riders</strong> trust Quicksilver
                                    </p>
                                </div>
                            </div>

                            {/* ═══ CREDIBILITY LOGOS ═══ */}
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
                                {/* Glow behind vehicle */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#2463eb]/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"></div>

                                {/* Main Vehicle Image */}
                                <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-auto lg:h-[400px] drop-shadow-[0_20px_60px_rgba(36,99,235,0.4)]">
                                    <HeroImage
                                        src="/Home page images/Saloon Class.png"
                                        alt="Quicksilver premium airport shuttle vehicle serving all Kansas City metro locations"
                                        priority
                                    />
                                </div>


                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Service Pillars */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <MapPin />, title: 'Door-to-Door', desc: 'Direct pickup from your home or office' },
                            { icon: <Navigation />, title: '24/7 Service', desc: 'Any time, day or night availability' },
                            { icon: <Zap />, title: 'Fixed Rates', desc: 'No surcharges or hidden fees' },
                            { icon: <ShieldCheck />, title: 'Flight Tracked', desc: 'We monitor your flight status live' }
                        ].map((feature, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div className="bg-white p-8 rounded-[30px] border border-[#2463eb]/10 text-center group hover:bg-white hover:shadow-xl transition-all h-full">
                                    <div className="w-16 h-16 bg-[#2463eb]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#2463eb] shadow-sm group-hover:bg-[#2463eb] group-hover:text-white transition-colors">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-[#2463eb] uppercase tracking-tight">{feature.title}</h3>
                                    <p className="text-[#2463eb]/60 font-medium leading-relaxed">{feature.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Area Hubs */}
            <section className="section bg-slate-50">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2463eb]/10 text-[#2463eb] font-bold text-xs mb-6 uppercase tracking-widest border border-[#2463eb]/20">
                                <Sparkles size={14} />
                                Regional Coverage
                            </div>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#2463eb] uppercase tracking-tight">Popular Service Hubs</h2>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-xl text-[#2463eb]/60 max-w-md font-medium italic">
                                Most requested pickup and dropoff portals across the metro.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
                        {locations.filter(loc => loc.popular).map((location, i) => (
                            <FadeIn key={location.slug} delay={i * 0.1}>
                                <Link
                                    href={`/airport-shuttle/${location.slug}`}
                                    className="bg-white p-10 rounded-[40px] text-center group hover:shadow-2xl hover:border-[#2463eb]/30 border border-[#2463eb]/10 transition-all flex flex-col items-center h-full shadow-lg relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#2463eb]/5 rounded-bl-full group-hover:bg-[#2463eb]/10 transition-colors"></div>
                                    <div className="w-16 h-16 rounded-2xl bg-[#2463eb]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner text-[#2463eb]">
                                        <MapPin size={32} />
                                    </div>
                                    <h3 className="text-xl font-display font-bold mb-4 text-[#2463eb] uppercase tracking-tight relative z-10">{location.name}</h3>
                                    <span className="mt-auto text-[#2463eb] font-black uppercase tracking-widest text-[10px] flex items-center gap-2">
                                        Explore Details
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full Network Index */}
            <section className="section bg-white border-y border-slate-100">
                <div className="container-custom">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl font-bold text-[#2463eb] uppercase tracking-tight">Full Metro Coverage</h2>
                            <p className="text-lg text-[#2463eb]/50 font-medium">Over 100 cities served with local expertise and executive care.</p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {locations.map((location, i) => (
                            <FadeIn key={location.slug} delay={i * 0.05}>
                                <Link
                                    href={`/airport-shuttle/${location.slug}`}
                                    className="p-5 rounded-2xl bg-white border border-[#2463eb]/10 flex items-center justify-between group hover:border-[#2463eb]/30 hover:shadow-sm transition-all shadow-sm"
                                >
                                    <span className="font-bold text-[#2463eb]/70 group-hover:text-[#2463eb] transition-colors">{location.name}</span>
                                    <ArrowRight size={16} className="text-[#2463eb]/20 group-hover:text-[#2463eb] transition-colors -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100" />
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kansas City Airport Shuttle: Frequently Asked Questions */}
            <FAQAccordion
                title="Kansas City Airport Shuttle: Frequently Asked Questions"
                faqs={[
                    {
                        q: "What is the most reliable airport shuttle service in Kansas City?",
                        a: "Quicksilver Airport Shuttle has been the gold standard for Kansas City airport transportation since 1982. We provide 24/7 fixed-rate private car and shuttle services, ensuring you never miss a flight or wait for an unpredictable rideshare."
                    },
                    {
                        q: "How much does a private airport shuttle to MCI cost?",
                        a: "Our private airport shuttle rates are fixed and transparent. For 2026, economy transfers start at $35, while business class sedans and premium SUVs range from $55 to $75 depending on your specific destination in the KC metro area."
                    },
                    {
                        q: "Do you offer 24/7 airport car service for early morning flights?",
                        a: "Yes, Quicksilver operates 24 hours a day, 7 days a week. Our dispatchers monitor flight telemetry in real-time, ensuring your chauffeur is ready for you regardless of the hour, even for the earliest morning departures from MCI."
                    },
                    {
                        q: "What is the difference between a shuttle and a private car service?",
                        a: "A standard shuttle often involves shared rides and multiple stops. Quicksilver specializes in private, direct airport car services, meaning you have a dedicated vehicle and driver for your group with no unexpected detours."
                    },
                    {
                        q: "Are Quicksilver drivers professionally vetted and insured?",
                        a: "Every Quicksilver chauffeur is strictly background-checked, professionally trained, and carries an official ID badge. We are fully insured and bonded, providing a level of safety and reliability that exceeds standard rideshare platforms."
                    }
                ]}
            />

            {/* JSON-LD FAQ Schema for SEO Dominance */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What is the most reliable airport shuttle service in Kansas City?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Quicksilver Airport Shuttle has been the gold standard for Kansas City airport transportation since 1982, providing 24/7 fixed-rate private car and shuttle services."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How much does a private airport shuttle to MCI cost?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "For 2026, economy transfers start at $35, with business class and SUV options ranging from $55 to $75 in the KC metro area."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer 24/7 airport car service for early morning flights?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, Quicksilver operates 24/7 and monitors flight telemetry in real-time to ensure punctual pick-ups for any flight time."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is the difference between a shuttle and a private car service?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Unlike shared shuttles, Quicksilver provides private, direct-to-destination service without extra stops."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are Quicksilver drivers professionally vetted and insured?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, every chauffeur is background-checked, professionally trained, and Quicksilver is fully insured and bonded."
                                }
                            }
                        ]
                    })
                }}
            />

            {/* JSON-LD Service Schema for Airport Shuttle Service */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Airport Shuttle Service",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Quicksilver Airport Shuttle",
                            "telephone": "+19132620905",
                            "image": "https://www.goquicksilver.com/Home%20page%20images/Airport-Shuttle-Services.webp",
                            "priceRange": "$$"
                        },
                        "areaServed": {
                            "@type": "State",
                            "name": "Kansas"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Airport Transportation Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Private Airport Sedan"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Shared-Ride Shuttle"
                                    }
                                }
                            ]
                        }
                    })
                }}
            />

            {/* CTA */}
            <section className="py-24 bg-[#2463eb] text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px]"></div>
                <div className="container-custom relative z-10">
                    <FadeIn>
                        <h2 className="mb-8 font-display text-4xl md:text-6xl font-bold uppercase tracking-tight">Fly Confident & Reassured</h2>
                        <p className="text-xl mb-12 text-white/80 max-w-2xl mx-auto leading-relaxed font-medium capitalize">
                            reliable airport shuttle for every corner of the kansas city metropolitan region.
                        </p>
                        <Link href="/reservation" className="btn btn-cta border-none shadow-xl text-2xl px-12 py-6">
                            Lock In Your Pickup
                            <ArrowRight size={28} className="ml-2" />
                        </Link>
                    </FadeIn>
                </div>
            </section>

            {/* Mobile Sticky Label */}
            <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
                <a href={`tel:${phone.replace(/\D/g, '')}`} className="btn btn-primary w-full py-5 text-2xl shadow-2xl flex items-center justify-center gap-4">
                    <Phone size={28} />
                    Call Dispatch Now
                </a>
            </div>
        </main>
    );
}
