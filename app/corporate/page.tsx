import { Metadata } from 'next';
import { Briefcase, Clock, ShieldCheck, MapPin, CheckCircle, ArrowRight, Phone, Star, Shield, DollarSign, Award, TrendingUp, Search } from 'lucide-react';
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
            <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-gradient-to-br from-[#0c1d37] via-[#1a3a6b] to-[#0c1d37] pt-24 pb-12">
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
                                <Briefcase size={16} className="text-blue-400" />
                                <span className="text-[10px] sm:text-xs font-black tracking-[0.3em] text-white/90 uppercase">Executive Division</span>
                            </div>

                            <h1 className="mb-8 font-display font-black leading-[1.05] text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white drop-shadow-2xl">
                                Corporate Travel, <br className="hidden sm:block" />
                                <span className="text-blue-400">Perfected.</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0 font-light px-4 sm:px-0">
                                We specialize in dedicated accounts for Kansas City's leading executives. Punctual, discreet, and seamlessly integrated with your business itinerary.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start w-full sm:w-auto mb-16 px-4 sm:px-0">
                                <Link
                                    href="/contact"
                                    className="btn btn-cta text-lg sm:text-xl px-10 py-5 sm:px-12 sm:py-6 rounded-2xl sm:rounded-3xl shadow-2xl shadow-orange-500/20 active:scale-95 transition-all font-black uppercase tracking-tight flex items-center justify-center gap-3 border-none bg-orange-500 hover:bg-orange-600 w-full sm:w-auto"
                                >
                                    <span>Open Account</span>
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
                                <div className="flex items-center -space-x-3">
                                    {[32, 44, 46, 12, 14].map((id, i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0c1d37] shadow-lg overflow-hidden flex-shrink-0 transition-transform hover:scale-110 hover:z-20">
                                            <img src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${id}.jpg`} alt="Quicksilver corporate client" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-12 h-12 rounded-full bg-blue-600 border-2 border-[#0c1d37] flex items-center justify-center text-white text-[10px] font-black backdrop-blur-sm z-10 shadow-lg">+4K</div>
                                </div>
                                <div className="text-center sm:text-left">
                                    <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500 mb-1">
                                        {[...Array(5)].map((_, i) => (<Star key={i} fill="currentColor" size={16} className="drop-shadow-sm" />))}
                                    </div>
                                    <p className="text-sm font-medium text-slate-400">Trusted by <strong className="text-white">Fortune 500</strong> C-Suites</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                {[
                                    { label: 'NDA Compliant', icon: <Shield size={16} /> },
                                    { label: '24/7 Human Dispatch', icon: <Clock size={16} /> },
                                    { label: 'Monthly Billing', icon: <DollarSign size={16} /> },
                                ].map((badge, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 text-white/70 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-sm hover:bg-white/10 transition-colors">
                                        <span className="text-blue-400">{badge.icon}</span>
                                        {badge.label}
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        {/* ═══ RIGHT COLUMN: Hero Imagery ═══ */}
                        <FadeIn delay={0.25} className="w-full relative flex items-center justify-center pb-8 lg:pb-0">
                            <div className="relative w-full max-w-2xl lg:max-w-full mx-auto">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
                                <div className="relative w-full aspect-[4/3] drop-shadow-[0_40px_100px_rgba(36,99,235,0.4)]">
                                    <HeroImage
                                        src="/Home page images/Saloon Class.png"
                                        alt="Quicksilver Executive Car Service KC"
                                        priority
                                    />
                                </div>

                                {/* Floating Stats Card */}
                                <div className="absolute -bottom-10 right-[5%] bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 hidden sm:block">
                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                                            <TrendingUp size={28} />
                                        </div>
                                        <div>
                                            <p className="text-3xl font-black text-[#0c1d37] font-display tracking-tight">99.9%</p>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">On-Time Performance</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>
            </section>

            {/* Core Features */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <FadeIn className="text-center max-w-4xl mx-auto mb-24">
                        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-slate-50 rounded-full border border-slate-100 shadow-sm group">
                            <Star size={16} className="text-[#2463eb] fill-[#2463eb]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Corporate Standards</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-[#0c1d37] tracking-tight leading-[1.05] mb-8">
                            Built for <span className="text-blue-500">Business.</span>
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
                            Your time is your most valuable asset. Our corporate service is designed to eliminate travel friction completely.
                        </p>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { icon: <ShieldCheck size={36} />, title: 'Vetted Chauffeurs', desc: 'Our executive drivers sign strict NDAs and undergo rigorous background checks, ensuring discretion and safety for VIP transport.' },
                            { icon: <Clock size={36} />, title: 'On-Time Guarantee', desc: 'We utilize state-of-the-art flight tracking and local traffic algorithms. We are on site 15 minutes prior to exact pickup.' },
                            { icon: <DollarSign size={36} />, title: 'Streamlined Billing', desc: 'Monthly invoicing, expense integrations, and corporate portals simplify travel spend for your accounting department.' }
                        ].map((feature, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="p-12 rounded-[50px] border-2 border-slate-50 bg-white hover:bg-[#0c1d37] hover:shadow-2xl transition-all duration-700 h-full group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/[0.03] rounded-bl-[80px] group-hover:bg-blue-500/10 transition-all duration-700"></div>
                                    <div className="w-20 h-20 rounded-[28px] bg-slate-50 text-[#2463eb] group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center mb-10 group-hover:rotate-6 transition-all duration-700 shadow-inner">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-3xl font-black text-[#0c1d37] group-hover:text-white mb-6 font-display tracking-tight">{feature.title}</h3>
                                    <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed font-medium text-lg">{feature.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Executive Route */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-500/[0.02] rounded-full blur-[150px] pointer-events-none"></div>

                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <FadeIn>
                            <div className="relative rounded-[60px] overflow-hidden aspect-square shadow-[0_50px_100px_rgba(0,0,0,0.15)] group">
                                <Image
                                    src="/Home page images/Business Class.png"
                                    alt="Corporate Car Service KC"
                                    fill
                                    className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1d37]/60 via-transparent to-transparent opacity-60"></div>

                                <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-4">
                                    <div className="bg-white/95 backdrop-blur-xl p-8 rounded-[40px] shadow-2xl border border-white/50">
                                        <div className="space-y-4">
                                            <p className="text-[#0c1d37] font-black flex items-center gap-4 text-lg">
                                                <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                                    <CheckCircle size={18} />
                                                </div>
                                                Direct Airport Transfers
                                            </p>
                                            <p className="text-[#0c1d37] font-black flex items-center gap-4 text-lg">
                                                <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                                    <CheckCircle size={18} />
                                                </div>
                                                Downtown Meeting Loops
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-white rounded-full shadow-xl border border-white group">
                                <MapPin size={16} className="text-[#2463eb]" />
                                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Regional Coverage</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-[#0c1d37] mb-10 tracking-tight leading-[1.05]">
                                The Executive <br />
                                <span className="text-blue-500">Route.</span>
                            </h2>

                            <p className="text-xl text-slate-600 mb-12 leading-relaxed font-light">
                                Our corporate transit network connects MCI with major business districts. Whether it's the financial hub in Downtown KC, tech campuses in Overland Park, or corporate centers in the Northland, we provide uninterrupted connectivity.
                            </p>

                            <div className="bg-white p-10 rounded-[48px] shadow-[0_30px_60px_rgba(0,0,0,0.03)] border-2 border-white mb-12">
                                <h3 className="text-xs font-black text-slate-300 uppercase tracking-[0.3em] mb-8">Priority Routes</h3>
                                <div className="grid sm:grid-cols-2 gap-y-6 gap-x-10">
                                    {[
                                        { href: '/airport-shuttle/kansas-city', label: 'MCI to Downtown KC' },
                                        { href: '/airport-shuttle/overland-park', label: 'MCI to Overland Park' },
                                        { href: '/airport-shuttle/olathe', label: 'MCI to Olathe South' },
                                        { href: '/airport-shuttle', label: 'General Airport Transit' },
                                    ].map((route, i) => (
                                        <Link
                                            key={i}
                                            href={route.href}
                                            className="flex items-center gap-4 text-[#0c1d37] font-black hover:text-[#2463eb] transition-all group/link"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-blue-100 group-hover/link:bg-blue-500 transition-colors"></div>
                                            <span className="text-lg tracking-tight">{route.label}</span>
                                            <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-blue-500" />
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-[#0c1d37] p-10 rounded-[48px] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.03] rounded-bl-[60px]"></div>
                                <QuoteIcon className="absolute top-8 left-8 text-white/[0.05] pointer-events-none" size={120} />
                                <p className="relative z-10 text-white text-xl italic font-light leading-relaxed mb-6">
                                    "Quicksilver has managed our C-Suite's transportation for 5 years. They are the only service in KC that consistently hits the marks for our strict SLAs."
                                </p>
                                <p className="relative z-10 text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">
                                    — VP of Operations, Fortune 500 Co.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Corporate FAQ */}
            <div className="py-32 bg-white">
                <div className="container-custom px-4 sm:px-6">
                    <FadeIn className="text-center max-w-4xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-6xl font-display font-black text-[#0c1d37] tracking-tight mb-8">Executive FAQ</h2>
                        <p className="text-lg text-slate-500 font-medium">Specific answers for corporate logistics managers and executive assistants.</p>
                    </FadeIn>
                    <div className="max-w-4xl mx-auto">
                        <FAQAccordion
                            faqs={[
                                {
                                    q: "How do I set up a corporate account?",
                                    a: "Setting up an executive account is simple. Contact our corporate desk at 913-262-0905 or use our contact form. We provide assigned logistics dispatchers, consolidated monthly billing, and priority booking portals for all registered enterprises."
                                },
                                {
                                    q: "Do you offer monthly billing?",
                                    a: "Yes, Quicksilver specializes in streamlined corporate accounting. We offer consolidated monthly invoicing and can integrate with most expense management platforms to simplify your travel logistics."
                                },
                                {
                                    q: "What is your SLA for on-time arrivals?",
                                    a: "We maintain a 99.9% on-time performance rate. Our chauffeurs arrive at least 15 minutes prior to your scheduled pickup time, utilizing real-time flight telemetry and traffic algorithms to ensure your business schedule remains uninterrupted."
                                },
                                {
                                    q: "Are chauffeurs background-checked?",
                                    a: "Every Quicksilver executive chauffeur is strictly background-checked, professionally trained in defensive driving, and signs a comprehensive NDA to ensure absolute discretion and security for our VIP clients."
                                },
                                {
                                    q: "Can you accommodate last-minute requests?",
                                    a: "Our 24/7 dedicated dispatch center is equipped to handle urgent travel changes. While we recommend booking in advance, we maintain a standby fleet for our corporate account holders to ensure availability for last-minute itinerary shifts."
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>

            {/* ═══ FOOTER CTA ═══ */}
            <section className="py-32 bg-[#0c1d37] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.04]"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[180px]"></div>

                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <FadeIn className="text-center max-w-4xl mx-auto flex flex-col items-center">
                        <div className="w-24 h-24 rounded-[32px] bg-white/5 border border-white/10 flex items-center justify-center mb-12 backdrop-blur-xl">
                            <Briefcase size={48} className="text-white" />
                        </div>

                        <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-[1.1] mb-8">
                            Empower Your <span className="text-blue-400">Mobile Office.</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-300 mb-12 font-light leading-relaxed">
                            Join over 500 Kansas City corporations who trust Quicksilver for their high-stakes transportation needs.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 w-full justify-center">
                            <Link
                                href="/contact"
                                className="btn btn-cta text-2xl px-16 py-7 rounded-[32px] shadow-2xl shadow-orange-500/20 active:scale-95 transition-all font-black uppercase tracking-tight flex items-center justify-center gap-4 border-none bg-orange-500 hover:bg-orange-600"
                            >
                                <Award size={28} />
                                Apply For Account
                            </Link>
                            <a
                                href="tel:913-262-0905"
                                className="flex items-center justify-center gap-4 text-white hover:text-white transition-all py-7 px-16 rounded-[32px] border-2 border-white/20 hover:border-white/40 hover:bg-white/5 backdrop-blur-md font-black uppercase tracking-tight text-xl"
                            >
                                <Phone size={24} />
                                <span>Speak to a Manager</span>
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>



            {/* Structured Data */}
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
                            "telephone": "+19132620905",
                            "priceRange": "$$$"
                        },
                        "areaServed": {
                            "@type": "State",
                            "name": "Kansas"
                        },
                        "description": "Premium executive car service and corporate transportation for Kansas City businesses."
                    })
                }}
            />
        </main>
    );
}

function QuoteIcon({ className, size }: { className?: string, size?: number }) {
    return (
        <svg
            width={size || 40}
            height={size || 40}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c.5 1.5-1.5 3.5-3.5 4.5-.5.25-.5 1 .5 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c.5 1.5-1.5 3.5-3.5 4.5-.5.25-.5 1 .5 1z" />
        </svg>
    );
}
