import { Metadata } from 'next';
import { Users, Calendar, Bus, Star, Shield, ArrowRight, Phone, Clock, DollarSign, Award, MapPin, CheckCircle } from 'lucide-react';
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
                                <Users size={16} className="text-blue-400" />
                                <span className="text-[10px] sm:text-xs font-black tracking-[0.3em] text-white/90 uppercase">Logistics & Events Division</span>
                            </div>

                            <h1 className="mb-8 font-display font-black leading-[1.05] text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white drop-shadow-2xl">
                                Elite Group <br className="hidden sm:block" />
                                <span className="text-blue-400">Shuttle Solutions.</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0 font-light">
                                From 5 to 50+ passengers — we coordinate the complex routing of weddings, corporate retreats, and athletic teams so you don't have to.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start w-full sm:w-auto mb-16">
                                <Link
                                    href="/contact"
                                    className="btn btn-cta text-xl px-12 py-6 rounded-3xl shadow-2xl shadow-orange-500/20 active:scale-95 transition-all font-black uppercase tracking-tight flex items-center justify-center gap-3 border-none bg-orange-500 hover:bg-orange-600 w-full sm:w-auto"
                                >
                                    <span>Plan Your Event</span>
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

                            {/* Trust Badge */}
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                {[
                                    { label: '5-50+ Passengers', icon: <Users size={16} /> },
                                    { label: 'High-Capacity Fleet', icon: <Bus size={16} /> },
                                    { label: 'Guaranteed Capacity', icon: <Shield size={16} /> },
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
                                        alt="Quicksilver High-Capacity Shuttle"
                                        priority
                                    />
                                </div>

                                {/* Capacity Badge */}
                                <div className="absolute -bottom-10 right-[5%] bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 hidden sm:block">
                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                                            <Users size={28} />
                                        </div>
                                        <div>
                                            <p className="text-3xl font-black text-[#0c1d37] font-display tracking-tight">50+</p>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Passenger Groups</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>
            </section>

            {/* Specialties */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <FadeIn className="text-center max-w-4xl mx-auto mb-24">
                        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-slate-50 rounded-full border border-slate-100 shadow-sm">
                            <Star size={16} className="text-[#2463eb]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Event Excellence</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-[#0c1d37] tracking-tight leading-[1.05] mb-8">
                            Our <span className="text-blue-500">Specialties.</span>
                        </h2>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { title: 'Weddings', desc: 'Precise hotel-to-venue loops and CLI donor transit. We manage the guest lists so you don\'t have to.' },
                            { title: 'Corporate', desc: 'Seamlessly moving departments between MCI and Convention Centers with dedicated coordinators.' },
                            { title: 'Athletics', desc: 'Trusted by regional university teams for equipment-heavy transit and match-day logistics.' },
                            { title: 'Leisure', desc: 'VIP stadium drop-offs at Arrowhead and Kauffman, bypassing the standard congestion layers.' }
                        ].map((event, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="p-12 rounded-[50px] border-2 border-slate-50 bg-white hover:bg-[#0c1d37] hover:shadow-2xl transition-all duration-700 h-full group relative overflow-hidden flex flex-col">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/[0.03] rounded-bl-[80px] group-hover:bg-blue-500/10 transition-all duration-700"></div>
                                    <h3 className="text-3xl font-black text-[#0c1d37] group-hover:text-white mb-6 font-display tracking-tight capitalize">{event.title}</h3>
                                    <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed font-medium text-lg mb-8 flex-grow">{event.desc}</p>
                                    <Link href="/contact" className="text-blue-600 group-hover:text-blue-400 font-black uppercase tracking-widest text-xs flex items-center gap-2">
                                        Quote Now <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Group Advantage */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <FadeIn>
                            <div className="relative rounded-[60px] overflow-hidden aspect-square shadow-2xl group">
                                <Image
                                    src="/Home page images/Group Class.png"
                                    alt="Group Logistics KC"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-[#0c1d37] mb-10 tracking-tight leading-[1.05]">
                                The Group <br />
                                <span className="text-blue-500">Advantage.</span>
                            </h2>

                            <p className="text-xl text-slate-600 mb-12 leading-relaxed font-light">
                                High-capacity transit requires more than just big vehicles—it requires active communication. We assign a dedicated Logistics Hub Dispatcher to every event contract.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: 'High-Capacity Storage', text: 'Ample room for group luggage, sports gear, or event supplies.' },
                                    { title: 'Assigned Coordinator', text: 'One point of contact for all routing changes and driver comms.' },
                                    { title: 'Fixed Group Contracts', text: 'No surprise fees regardless of traffic or flight delays.' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 p-8 bg-white rounded-[40px] border border-white shadow-sm">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                                            <CheckCircle size={24} />
                                        </div>
                                        <div>
                                            <p className="font-black text-[#0c1d37] text-xl font-display tracking-tight">{item.title}</p>
                                            <p className="text-slate-500">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <div className="py-32 bg-white">
                <div className="container-custom px-4 sm:px-6">
                    <FadeIn className="text-center max-w-4xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-6xl font-display font-black text-[#0c1d37] tracking-tight mb-8">Group FAQ</h2>
                    </FadeIn>
                    <div className="max-w-4xl mx-auto">
                        <FAQAccordion
                            faqs={[
                                {
                                    q: "How many people can you transport at once?",
                                    a: "We can handle groups from 5 to 50+ passengers. For larger groups, we coordinate multiple high-capacity shuttle vans with a centralized dispatch hub."
                                },
                                {
                                    q: "Do you offer wedding shuttle services?",
                                    a: "Yes. We specialize in wedding logistics, providing hotel-to-venue loops, bachelor party transport, and MCI airport shuttle for out-of-town guests."
                                },
                                {
                                    q: "Can we book a van for university events?",
                                    a: "Absolutely. We are the preferred provider for KU and KSU student organizations, debate teams, and athletic squads moving across the region."
                                },
                                {
                                    q: "Is there enough luggage room for a full van?",
                                    a: "Our private SUVs and Cargo-Transit vans are specifically designed for high-capacity group travel with massive luggage cabins for sports gear and suitcases."
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
                            <Bus size={48} className="text-white" />
                        </div>

                        <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-[1.1] mb-8">
                            Ready for the <span className="text-blue-400">Main Event.</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-300 mb-12 font-light leading-relaxed">
                            Securing dates for large groups early is critical. Speak with our event team today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 w-full justify-center">
                            <Link
                                href="/contact"
                                className="btn btn-cta text-2xl px-16 py-7 rounded-[32px] shadow-2xl shadow-orange-500/20 active:scale-95 transition-all font-black uppercase tracking-tight flex items-center justify-center gap-4 border-none bg-orange-500 hover:bg-orange-600"
                            >
                                <Calendar size={28} />
                                Request Event Quote
                            </Link>
                            <a
                                href="tel:913-262-0905"
                                className="flex items-center justify-center gap-4 text-white hover:text-white transition-all py-7 px-16 rounded-[32px] border-2 border-white/20 hover:border-white/40 hover:bg-white/5 backdrop-blur-md font-black uppercase tracking-tight text-xl"
                            >
                                <Phone size={24} />
                                <span>Speak to Group Desk</span>
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Mobile Sticky Label */}
            <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
                <a href="tel:913-262-0905" className="btn bg-[#0c1d37] text-white w-full py-5 text-2xl shadow-2xl flex items-center justify-center gap-4 hover:bg-[#122b5e] border-none rounded-2xl ring-4 ring-white">
                    <Phone size={28} />
                    Call Group Desk
                </a>
            </div>
        </main>
    );
}
