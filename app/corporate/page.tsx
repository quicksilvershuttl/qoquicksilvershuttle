import { Metadata } from 'next';
import { Briefcase, Clock, ShieldCheck, MapPin, CheckCircle, ArrowRight, Phone, Star, Shield, DollarSign, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '../components/FadeIn';
import HeroImage from '../components/HeroImage';
import BackgroundOverlay from '../components/BackgroundOverlay';
import FAQAccordion from '../components/FAQAccordion';

export const metadata: Metadata = {
    title: 'Corporate Car Service in Kansas City | Quicksilver Executive Official',
    description: 'Expert corporate car service and executive transportation in Kansas City. 24/7 availability, professional chauffeurs, and premium billing since 1982.',
};

export default function CorporatePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* ═══ HERO SECTION — "Perfect Hero Section" framework ═══ */}
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

                        {/* ═══ LEFT COLUMN: Value Proposition ═══ */}
                        <FadeIn className="text-white flex flex-col items-center lg:items-start text-center lg:text-left">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 mb-7 px-5 py-2 bg-white/[0.07] backdrop-blur-xl rounded-full border border-white/[0.12] shadow-[0_0_30px_rgba(36,99,235,0.1)]">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
                                <p className="text-[11px] font-bold tracking-[0.25em] text-white/80 uppercase">Executive Division & VIP Services</p>
                            </div>

                            {/* H1 — VALUE PROPOSITION */}
                            <h1 className="mb-4 sm:mb-6 font-display font-black leading-[1.1] text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white drop-shadow-lg text-center lg:text-left">
                                Corporate Travel, <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-blue-300 drop-shadow-xl">
                                    Perfected.
                                </span>
                            </h1>

                            {/* Supporting Copy */}
                            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl text-center lg:text-left font-light mx-auto lg:mx-0">
                                We specialize in dedicated accounts for Kansas City&apos;s leading executives. Punctual, discreet, and seamlessly integrated with your business itinerary.
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto mb-10 sm:mb-12">
                                <Link
                                    href="/contact"
                                    className="btn btn-cta text-base sm:text-lg px-6 py-4 sm:px-9 sm:py-5 group shadow-[0_0_40px_rgba(249,115,22,0.25)] hover:shadow-[0_0_60px_rgba(249,115,22,0.45)] border-none w-full sm:w-auto flex justify-center items-center"
                                >
                                    <span>Set Up Corporate Account</span>
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
                                    ].map((imgSrc, i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0f2044] shadow-lg overflow-hidden flex-shrink-0">
                                            <img src={imgSrc} alt="Executive Client" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full bg-white/10 border-2 border-[#0f2044] flex items-center justify-center text-white/70 text-[10px] font-bold backdrop-blur-sm z-10">+4K</div>
                                </div>
                                <div className="flex flex-col gap-0.5 items-center sm:items-start">
                                    <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
                                        {[...Array(5)].map((_, i) => (<Star key={i} fill="currentColor" size={14} />))}
                                        <span className="text-white/60 text-sm ml-1 font-medium">5.0/5</span>
                                    </div>
                                    <p className="text-sm text-slate-400"><strong className="text-white/80">Rick, Scott & 4,000+ riders</strong> trust Quicksilver</p>
                                </div>
                            </div>

                            {/* Credibility Badges */}
                            <div className="flex flex-wrap xl:flex-nowrap whitespace-nowrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mx-auto lg:mx-0">
                                {[
                                    { label: 'NDA Compliant', icon: <Shield size={16} className="text-[#2463eb]" /> },
                                    { label: '24/7 Dispatch', icon: <Clock size={16} className="text-[#2463eb]" /> },
                                    { label: 'Monthly Billing', icon: <DollarSign size={16} className="text-[#2463eb]" /> },
                                    { label: 'Fortune 500 Trusted', icon: <Award size={16} className="text-amber-500" /> },
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
                                        alt="Quicksilver Executive Car Service KC"
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


            {/* Core Features */}
            <section className="section bg-white border-b border-[#2463eb]/10 relative">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <FadeIn>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#2463eb] uppercase tracking-tight mb-6">Built for Business</h2>
                            <p className="text-xl text-[#2463eb]/70">Your time is your most valuable asset. Our corporate service is designed to eliminate travel friction completely.</p>
                        </FadeIn>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <ShieldCheck size={32} />, title: 'Vetted Chauffeurs', desc: 'Our executive drivers sign strict NDAs and undergo rigorous background checks, ensuring discretion and safety for VIP transport.' },
                            { icon: <Clock size={32} />, title: 'On-Time Guarantee', desc: 'We utilize state-of-the-art flight tracking and local traffic algorithms. We are on site 15 minutes prior to exact pickup.' },
                            { icon: <Briefcase size={32} />, title: 'Streamlined Billing', desc: 'Monthly invoicing, expense integrations, and corporate portals simplify travel spend for your accounting department.' }
                        ].map((feature, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="p-8 rounded-[30px] border border-[#2463eb]/10 bg-white hover:bg-[#2463eb] hover:shadow-xl transition-all duration-300 h-full group">
                                    <div className="w-16 h-16 rounded-2xl bg-[#2463eb]/10 text-[#2463eb] group-hover:bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#2463eb] group-hover:text-white mb-4">{feature.title}</h3>
                                    <p className="text-[#2463eb]/70 group-hover:text-white/80 leading-relaxed font-medium">{feature.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Area Expansion */}
            <section className="section bg-white border-t border-[#2463eb]/10">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <div className="relative rounded-[40px] overflow-hidden aspect-square border border-[#2463eb]/10 shadow-2xl bg-[#2463eb]/5 flex items-center justify-center">
                                <Briefcase size={120} className="text-[#2463eb] opacity-20" />
                                <div className="absolute bottom-6 left-6 right-6 bg-white backdrop-blur-md p-6 rounded-3xl border border-[#2463eb]/20 shadow-xl">
                                    <p className="text-[#2463eb] font-bold flex items-center gap-2">
                                        <CheckCircle size={20} className="text-[#2463eb]" />
                                        Direct Airport Transfers
                                    </p>
                                    <p className="text-[#2463eb] font-bold flex items-center gap-2 mt-2">
                                        <CheckCircle size={20} className="text-[#2463eb]" />
                                        Downtown Meeting Loops
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#2463eb] mb-6 uppercase tracking-tight">The Executive Route</h2>
                            <p className="text-lg text-[#2463eb]/70 mb-8 leading-relaxed">
                                Our corporate transit network connects Kansas City International Airport with major business districts. Whether it&apos;s the financial hub in Downtown KC, tech campuses in Overland Park, or corporate centers in the Northland, we provide uninterrupted connectivity.
                            </p>

                            <h3 className="text-xl font-bold text-[#2463eb] uppercase tracking-widest mb-4">Dedicated Corporate Routes:</h3>
                            <ul className="grid grid-cols-2 gap-4 mb-8">
                                {[
                                    { href: '/airport-shuttle/kansas-city', label: 'MCI to Downtown KC' },
                                    { href: '/airport-shuttle/overland-park', label: 'MCI to Overland Park' },
                                    { href: '/airport-shuttle/olathe', label: 'MCI to Olathe South' },
                                    { href: '/airport-shuttle', label: 'General Airport Shuttle' },
                                ].map((route, i) => (
                                    <li key={i} className="flex items-center gap-2 text-[#2463eb] font-medium hover:text-[#1d4ed8] transition-colors">
                                        <MapPin size={18} className="text-[#2463eb]" />
                                        <Link href={route.href}>{route.label}</Link>
                                    </li>
                                ))}
                            </ul>

                            <blockquote className="p-6 bg-[#2463eb]/5 border-l-4 border-[#2463eb] rounded-r-2xl italic text-[#2463eb]/80 font-medium">
                                &ldquo;Quicksilver has managed our C-Suite&apos;s transportation for 5 years. They are the only service in KC that consistently hits the marks for our strict SLAs.&rdquo;
                                <span className="block mt-2 font-bold text-[#2463eb] uppercase text-xs tracking-widest">— VP of Operations, Fortune 500 Co.</span>
                            </blockquote>
                        </FadeIn>
                    </div>
                </div>
            </section>
            {/* Executive Car Service & Corporate Travel: FAQ */}
            <FAQAccordion
                title="Executive Car Service & Corporate Travel: FAQ"
                faqs={[
                    {
                        q: "How do I set up a corporate account for my company?",
                        a: "Setting up an executive account is simple. Contact our corporate desk at 913-262-0905 or use our contact form. We provide assigned logistics dispatchers, consolidated monthly billing, and priority booking portals for all registered enterprises."
                    },
                    {
                        q: "Do you offer monthly billing for frequent business travelers?",
                        a: "Yes, Quicksilver specializes in streamlined corporate accounting. We offer consolidated monthly invoicing and can integrate with most expense management platforms to simplify your travel logistics."
                    },
                    {
                        q: "What is your SLA for on-time arrivals?",
                        a: "We maintain a 99% on-time arrival rate. Our chauffeurs arrive at least 15 minutes prior to your scheduled pickup time, utilizing real-time flight telemetry and traffic algorithms to ensure your business schedule remains uninterrupted."
                    },
                    {
                        q: "Are your executive chauffeurs background-checked and vetted?",
                        a: "Every Quicksilver executive chauffeur is strictly background-checked, professionally trained in defensive driving, and signs a comprehensive NDA to ensure absolute discretion and security for our VIP clients."
                    },
                    {
                        q: "Can you accommodate last-minute executive travel requests?",
                        a: "Our 24/7 dedicated dispatch center is equipped to handle urgent travel changes. While we recommend booking in advance, we maintain a standby fleet for our corporate account holders to ensure availability for last-minute itinerary shifts."
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
                                "name": "How do I set up a corporate account for my company?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Call 913-262-0905 to register for a corporate account which includes monthly billing, priority dispatch, and a dedicated logisitcs manager."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer monthly billing for frequent business travelers?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, we provide consolidated monthly invoicing and expense reporting for all registered corporate partners."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is your SLA for on-time arrivals?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We maintain a 99% on-time record with chauffeurs arriving 15 minutes ahead of schedule as standard practice."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are your executive chauffeurs background-checked and vetted?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, all chauffeurs undergo rigorous vetting, background checks, and periodic training to maintain executive standards."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can you accommodate last-minute executive travel requests?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We offer priority standby service for corporate account holders to handle urgent, last-minute travel needs 24/7."
                                }
                            }
                        ]
                    })
                }}
            />
            {/* JSON-LD Service Schema for Corporate Car Service */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Corporate Car Service",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Quicksilver Airport Shuttle",
                            "telephone": "+19132620905"
                        },
                        "areaServed": "Kansas City Metro",
                        "description": "Executive transportation and corporate car services for businesses in Kansas City."
                    })
                }}
            />

            {/* Mobile Sticky Label */}
            <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
                <a href="tel:913-262-0905" className="btn bg-[#0c1d37] text-white w-full py-5 text-2xl shadow-2xl flex items-center justify-center gap-4 hover:bg-[#122b5e] border-none">
                    <Phone size={28} />
                    Call Executive Desk
                </a>
            </div>
        </main>
    );
}
