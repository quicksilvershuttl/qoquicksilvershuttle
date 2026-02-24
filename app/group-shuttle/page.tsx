import { Metadata } from 'next';
import { Users, Calendar, Bus, Star, Shield, ArrowRight, Phone, Clock, DollarSign, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '../components/FadeIn';
import HeroImage from '../components/HeroImage';
import BackgroundOverlay from '../components/BackgroundOverlay';
import FAQAccordion from '../components/FAQAccordion';

export const metadata: Metadata = {
    title: 'Group Shuttle & Event Transportation in Kansas City | Quicksilver Official',
    description: 'Premier group shuttle and event logistics coordinating transit for 5 to 50+ passengers. Reliability guaranteed for weddings, corporate retreats, and tours since 1982.',
};

export default function GroupShuttlePage() {
    return (
        <main className="min-h-screen bg-white">
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
                            <div className="inline-flex items-center gap-2 mb-7 px-5 py-2 bg-white/[0.07] backdrop-blur-xl rounded-full border border-white/[0.12] shadow-[0_0_30px_rgba(36,99,235,0.1)]">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
                                <p className="text-[11px] font-bold tracking-[0.25em] text-white/80 uppercase">Logistics & Events Team</p>
                            </div>

                            {/* H1 — VALUE PROPOSITION */}
                            <h1 className="mb-4 sm:mb-6 font-display font-black leading-[1.1] text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white drop-shadow-lg text-center lg:text-left">
                                Elite Group <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-blue-300 drop-shadow-xl">
                                    Shuttle Solutions
                                </span>
                            </h1>

                            {/* Supporting Copy */}
                            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl text-center lg:text-left font-light mx-auto lg:mx-0">
                                Whether it&apos;s a wedding party, university debate team, or corporate retreat — we coordinate the routing so you can focus on the event itself.
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto mb-10 sm:mb-12">
                                <Link
                                    href="/contact"
                                    className="btn btn-cta text-base sm:text-lg px-6 py-4 sm:px-9 sm:py-5 group shadow-[0_0_40px_rgba(249,115,22,0.25)] hover:shadow-[0_0_60px_rgba(249,115,22,0.45)] border-none w-full sm:w-auto flex justify-center items-center"
                                >
                                    <span>Request Event Quote</span>
                                    <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform" size={20} />
                                </Link>
                                <a
                                    href="tel:913-262-0905"
                                    className="group flex items-center justify-center gap-2 sm:gap-3 text-white transition-all py-4 px-6 sm:px-7 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/[0.06] backdrop-blur-sm w-full sm:w-auto"
                                >
                                    <Phone size={18} className="text-blue-300 group-hover:text-white transition-colors" />
                                    <span className="font-bold tracking-wide text-sm sm:text-base">(913) 262-0905</span>
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
                                    ].map((src, i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0f2044] shadow-lg overflow-hidden flex-shrink-0">
                                            <img src={src} alt="Client" className="object-cover w-full h-full" />
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
                                    { label: '5-50+ Passengers', icon: <Users size={16} className="text-blue-600" /> },
                                    { label: '24/7 Logistics', icon: <Clock size={16} className="text-blue-600" /> },
                                    { label: 'Fixed Group Rates', icon: <DollarSign size={16} className="text-blue-600" /> },
                                    { label: '40+ Years', icon: <Award size={16} className="text-amber-500" /> },
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
                                {/* Glow behind imagery */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#2463eb]/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"></div>

                                {/* Main Vehicle Image */}
                                <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-auto lg:h-[400px] drop-shadow-[0_20px_60px_rgba(36,99,235,0.4)]">
                                    <HeroImage
                                        src="/Home page images/Saloon Class.png"
                                        alt="Quicksilver premium group shuttle for KC events"
                                        priority
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none"></div>
            </section>


            {/* Event Types */}
            <section className="section bg-white border-y border-slate-100">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <FadeIn>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0c1d37] mb-6 uppercase tracking-tight">Specialties</h2>
                            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
                                With over 40 years of local network experience, we&apos;ve executed logistics for the metro&apos;s largest events.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Wedding Logistics', desc: 'Hotel-to-venue loops, bachelor/bachelorette transit, and out-of-town guest coordination.' },
                            { title: 'Corporate Retreats', desc: 'Transporting your entire team from MCI safely to convention centers or off-site venues.' },
                            { title: 'University & Athletic', desc: 'Reliable van service for KU, KSU, and UMKC student organizations and sports teams.' },
                            { title: 'Stadiums & Concerts', desc: 'Avoid the chaos of Arrowhead or T-Mobile Center traffic with drop-off at the VIP gates.' }
                        ].map((event, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="p-8 rounded-[35px] border border-slate-100 bg-white hover:bg-[#0c1d37] hover:text-white transition-all duration-500 h-full group flex flex-col items-start cursor-pointer shadow-sm hover:shadow-2xl">
                                    <h3 className="text-2xl font-bold text-[#0c1d37] group-hover:text-white mb-4 transition-colors">{event.title}</h3>
                                    <p className="text-slate-500 group-hover:text-white/80 font-medium leading-relaxed mb-6 flex-1">
                                        {event.desc}
                                    </p>
                                    <Link href="/contact" className="mt-auto group-hover:text-white text-blue-600 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                                        Plan Your Event <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Signals */}
            <section className="section bg-white border-b border-slate-100">
                <div className="container-custom">
                    <div className="bg-white rounded-[40px] shadow-xl border border-slate-100 p-10 md:p-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-bl-full pointer-events-none"></div>
                        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0c1d37] mb-6 uppercase tracking-tight">The Quicksilver Group Advantage</h2>
                                <p className="text-xl text-slate-500 mb-8 leading-relaxed font-medium">
                                    Coordinating large groups requires specialized communication. We assign a dedicated Logistics Dispatcher to every event contract.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {[
                                        { icon: <Shield size={16} />, title: 'High-Capacity Fleet Options', text: <>Review our <Link href="/tools/vehicle-quiz" className="text-blue-600 font-bold hover:underline">fleet quiz guide</Link> for capacities ranging from 7 to 15 passengers per vehicle.</> },
                                        { icon: <Star size={16} />, title: 'Seamless Regional Access', text: <>We provide group transport to all parts of the metro, including <Link href="/airport-shuttle/lawrence" className="text-blue-600 font-bold hover:underline">Lawrence</Link>, <Link href="/airport-shuttle/topeka" className="text-blue-600 font-bold hover:underline">Topeka</Link>, and <Link href="/airport-shuttle/manhattan" className="text-blue-600 font-bold hover:underline">Manhattan</Link>.</> },
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0c1d37]">{item.title}</h4>
                                                <p className="text-slate-500 text-sm">{item.text}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-[#0c1d37] text-white p-8 rounded-3xl shadow-2xl relative">
                                <Bus size={120} className="absolute right-4 bottom-4 text-white opacity-[0.03]" />
                                <h3 className="text-xl font-bold font-display uppercase tracking-widest text-white mb-6">Group Dispatch Center</h3>
                                <p className="text-white/80 font-medium mb-6 leading-relaxed">
                                    Direct communication is essential for events. Contact our group coordination desk today to secure your dates.
                                </p>
                                <a href="tel:913-262-0905" className="btn btn-cta border-none text-2xl font-bold py-6 w-full flex justify-center shadow-none mb-4">
                                    Call (913) 262-0905
                                </a>
                                <p className="text-xs text-white/50 text-center uppercase tracking-widest">Available 24/7/365</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* KC Group Shuttle & Event Logistics: Expert FAQs */}
            <FAQAccordion
                title="KC Group Shuttle & Event Logistics: Expert FAQs"
                faqs={[
                    {
                        q: "How many passengers can your group shuttles accommodate?",
                        a: "Our versatile fleet can handle groups of all sizes. We specialize in coordinating transit for small parties of 5 up to large event groups of 50 or more passengers using multiple dedicated high-capacity vans."
                    },
                    {
                        q: "Do you provide shuttle services for weddings in Kansas City?",
                        a: "Yes, wedding logistics is one of our primary specialties. We coordinate hotel-to-venue loops, transport out-of-town guests from MCI, and provide safe late-night transit for bridal parties and guests across the KC metro."
                    },
                    {
                        q: "Can we book a dedicated van for a corporate retreat or convention?",
                        a: "Absolutely. We provide dedicated event logistics for corporate clients, including multi-day shuttle service between Kansas City International Airport (MCI), downtown hotels, and convention centers like Bartle Hall."
                    },
                    {
                        q: "How does billing work for large group event contracts?",
                        a: "We offer streamlined corporate and event billing. After an initial quote and deposit, we can provide consolidated invoicing, monthly billing for frequent partners, and detailed trip reporting for your records."
                    },
                    {
                        q: "Is there enough room for luggage in your group vans?",
                        a: "Our group vans are specifically selected for their high-capacity luggage space. Even with 10+ passengers, our vehicles provide ample room for suitcases, gear, and supplies, making them ideal for university teams and large families."
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
                                "name": "How many passengers can your group shuttles accommodate?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Quicksilver coordinates transit for groups ranging from 5 to 50+ passengers using a fleet of high-capacity dedicated vans."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you provide shuttle services for weddings in Kansas City?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, we specialize in wedding logistics including hotel-to-venue loops and guest transfers across the entire Kansas City metropolitan area."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can we book a dedicated van for a corporate retreat or convention?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, we provide dedicated event shuttle services for corporate retreats, conventions, and business meetings throughout KC."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How does billing work for large group event contracts?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We offer consolidated invoicing, corporate billing options, and transparent fixed-rate contracts for all group transportation."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is there enough room for luggage in your group vans?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Our premium group vans are equipped with massive luggage cabins to handle suitcases and gear for 10-15 passengers simultaneously."
                                }
                            }
                        ]
                    })
                }}
            />
            {/* JSON-LD Service Schema for Group Shuttle */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Group Shuttle & Event Transportation",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Quicksilver Airport Shuttle",
                            "telephone": "+19132620905"
                        },
                        "areaServed": "Kansas City Metro",
                        "description": "Coordinated group transportation for weddings, corporate events, and large parties in Kansas City."
                    })
                }}
            />

            {/* Mobile Sticky Label */}
            <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
                <a href="tel:913-262-0905" className="btn btn-cta w-full py-5 text-2xl shadow-2xl flex items-center justify-center gap-4 border-none">
                    <Phone size={28} />
                    Call Group Desk
                </a>
            </div>
        </main>
    );
}
