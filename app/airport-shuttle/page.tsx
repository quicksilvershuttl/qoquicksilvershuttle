import { Metadata } from 'next';
import { MapPin, Phone, ArrowRight, Plane, ShieldCheck, Zap, Sparkles, Navigation, Star, Shield, Clock, DollarSign, Award, CheckCircle, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '../components/FadeIn';
import HeroImage from '../components/HeroImage';
import BackgroundOverlay from '../components/BackgroundOverlay';
import TrustAvatars from '../components/TrustAvatars';
import FAQAccordion from '../components/FAQAccordion';

export const metadata: Metadata = {
    title: 'Airport Shuttle Service | All Kansas City Locations | Quicksilver',
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
            {/* ═══ HERO SECTION — Perfect Hero Section framework ═══ */}
            <section className="relative min-h-[90dvh] flex items-center overflow-hidden bg-gradient-to-br from-[#0c1d37] via-[#1a3a6b] to-[#0c1d37] pt-32 pb-24">
                <div className="absolute inset-0 z-0">
                    <BackgroundOverlay />
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[150px] pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 mb-10 px-6 py-2.5 bg-white/[0.08] backdrop-blur-3xl rounded-full border border-white/[0.15] shadow-2xl">
                                <Globe size={18} className="text-blue-400" />
                                <span className="text-[10px] sm:text-xs font-black tracking-[0.3em] text-white/90 uppercase">Regional Transit Network</span>
                            </div>

                            <h1 className="mb-8 font-display font-black leading-[1.05] text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white drop-shadow-2xl">
                                Every City. <br className="hidden sm:block" />
                                <span className="text-blue-400">One Call.</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto font-light">
                                From Overland Park to Topeka, Kansas City to Manhattan — Quicksilver delivers fixed-rate airport shuttles to every corner of the KC metro.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-16">
                                <Link
                                    href="/fare-quote"
                                    className="btn btn-cta text-xl px-12 py-6 rounded-3xl shadow-2xl shadow-orange-500/20 active:scale-95 transition-all font-black uppercase tracking-tight flex items-center justify-center gap-3 border-none bg-orange-500 hover:bg-orange-600 w-full sm:w-auto"
                                >
                                    <span>Calculate Your Fare</span>
                                    <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                                <a
                                    href={`tel:${phone.replace(/\D/g, '')}`}
                                    className="flex items-center justify-center gap-4 text-white hover:text-blue-400 transition-all py-6 px-10 rounded-3xl border-2 border-white/20 hover:border-blue-400/40 backdrop-blur-md w-full sm:w-auto font-black uppercase tracking-tight"
                                >
                                    <Phone size={24} />
                                    <span>{phone}</span>
                                </a>
                            </div>

                            {/* Trust Avatars & Stats */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                                <div className="flex items-center -space-x-3">
                                    {[32, 44, 46, 12, 14].map((id, i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0c1d37] shadow-lg overflow-hidden flex-shrink-0 transition-transform hover:scale-110 hover:z-20">
                                            <img src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${id}.jpg`} alt="Client" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-12 h-12 rounded-full bg-blue-600 border-2 border-[#0c1d37] flex items-center justify-center text-white text-[10px] font-black backdrop-blur-sm z-10 shadow-lg">+4K</div>
                                </div>
                                <div className="text-center sm:text-left">
                                    <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500 mb-1">
                                        {[...Array(5)].map((_, i) => (<Star key={i} fill="currentColor" size={16} className="drop-shadow-sm" />))}
                                    </div>
                                    <p className="text-sm font-medium text-slate-400">Serving <strong className="text-white">26+ Cities</strong> Daily</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Service Pillars */}
            <section className="py-24 bg-white">
                <div className="container-custom px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <MapPin size={32} />, title: 'Door-to-Door', desc: 'Direct pickup from your home or office. No hubs, no transfers.' },
                            { icon: <Clock size={32} />, title: '24/7 Human Dispatch', desc: 'Live specialists available any time, day or night.' },
                            { icon: <DollarSign size={32} />, title: 'Fixed Rates', desc: 'No surge pricing or hidden tolls. Flat rates you can trust.' },
                            { icon: <Plane size={32} />, title: 'Flight Tracked', desc: 'We monitor your flight status live for seamless pickups.' }
                        ].map((feature, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div className="bg-white p-10 rounded-[40px] border-2 border-slate-50 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_100px_rgba(36,99,235,0.08)] hover:border-blue-50 transition-all duration-700 text-center h-full group ring-1 ring-slate-100">
                                    <div className="w-20 h-20 bg-blue-50 text-[#2463eb] rounded-[28px] flex items-center justify-center mx-auto mb-8 shadow-inner group-hover:bg-[#2463eb] group-hover:text-white transition-all duration-700 group-hover:rotate-6">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-black mb-4 text-[#0c1d37] font-display tracking-tight uppercase group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                                    <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Area Hubs */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.03] pointer-events-none"></div>
                <div className="container-custom px-4 sm:px-6">
                    <FadeIn className="text-center max-w-4xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-white rounded-full border border-white shadow-xl">
                            <Sparkles size={16} className="text-[#2463eb]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">Most Frequent Destinies</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-[#0c1d37] tracking-tight leading-[1.05] mb-8">
                            Service <span className="text-blue-500">Hubs.</span>
                        </h2>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {locations.filter(loc => loc.popular).map((location, i) => (
                            <FadeIn key={location.slug} delay={i * 0.1}>
                                <Link
                                    href={`/airport-shuttle/${location.slug}`}
                                    className="bg-white p-12 rounded-[50px] text-center border-2 border-white shadow-[0_30px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_60px_100px_rgba(36,99,235,0.12)] hover:border-blue-50 transition-all duration-1000 flex flex-col items-center h-full group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/[0.03] rounded-bl-[80px] group-hover:bg-blue-500/10 transition-all duration-700"></div>
                                    <div className="w-20 h-20 rounded-[28px] bg-slate-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-700 shadow-inner text-[#2463eb]">
                                        <MapPin size={36} />
                                    </div>
                                    <h3 className="text-2xl font-display font-black mb-6 text-[#0c1d37] uppercase tracking-tighter sm:tracking-tight group-hover:text-blue-600 transition-colors leading-none">{location.name}</h3>
                                    <span className="mt-auto text-blue-500 font-black uppercase tracking-[0.25em] text-[10px] flex items-center gap-3">
                                        Details
                                        <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform" />
                                    </span>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full Network Index */}
            <section className="py-32 bg-white">
                <div className="container-custom px-4 sm:px-6">
                    <FadeIn className="text-center max-w-4xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-6xl font-display font-black text-[#0c1d37] tracking-tight mb-8">Full Metro Coverage</h2>
                        <p className="text-xl text-slate-500 font-light">Over 100 cities served with 40 years of local expertise.</p>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {locations.map((location, i) => (
                            <FadeIn key={location.slug} delay={i * 0.05}>
                                <Link
                                    href={`/airport-shuttle/${location.slug}`}
                                    className="p-8 rounded-[32px] bg-white border-2 border-slate-50 flex items-center justify-between group hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 shadow-sm"
                                >
                                    <span className="font-black text-[#0c1d37] text-lg tracking-tight group-hover:text-blue-600 transition-colors">{location.name}</span>
                                    <ArrowRight size={20} className="text-slate-200 group-hover:text-blue-600 transition-all -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <div className="py-32 bg-slate-50">
                <div className="container-custom px-4 sm:px-6">
                    <FadeIn className="text-center max-w-4xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-6xl font-display font-black text-[#0c1d37] tracking-tight mb-8">Service FAQ</h2>
                    </FadeIn>
                    <div className="max-w-4xl mx-auto">
                        <FAQAccordion
                            faqs={[
                                {
                                    q: "What is the most reliable airport shuttle in KC?",
                                    a: "Quicksilver Airport Shuttle has been the gold standard since 1982. We provide 24/7 fixed-rate private car and shuttle services with professional chauffeurs."
                                },
                                {
                                    q: "How much does a shuttle cost?",
                                    a: "Our rates are fixed. Economy transfers start at $35, Business Saloons at $55, and Premium SUVs at $75. Use our quote tool for your specific zip code."
                                },
                                {
                                    q: "Do you operate 24/7?",
                                    a: "Yes. Our dispatchers and chauffeurs operate 24 hours a day, 365 days a year, including all holidays."
                                },
                                {
                                    q: "Where do I meet my driver?",
                                    a: "At the new MCI terminal, your driver will meet you at the designated commercial pickup zone. They will text you their exact parking pillar number."
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <section className="py-32 bg-[#0c1d37] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.04]"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[180px]"></div>

                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <FadeIn className="text-center max-w-4xl mx-auto flex flex-col items-center">
                        <div className="w-24 h-24 rounded-[32px] bg-white/5 border border-white/10 flex items-center justify-center mb-12 backdrop-blur-xl">
                            <Navigation size={48} className="text-white" />
                        </div>

                        <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-[1.1] mb-8">
                            Fly Confident. <br />
                            <span className="text-blue-400">Arrive Reassured.</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-300 mb-12 font-light leading-relaxed">
                            Reliable airport shuttle for every corner of the Kansas City metropolitan region.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 w-full justify-center">
                            <Link
                                href="/reservation"
                                className="btn btn-cta text-2xl px-16 py-7 rounded-[32px] shadow-2xl shadow-orange-500/20 active:scale-95 transition-all font-black uppercase tracking-tight flex items-center justify-center gap-4 border-none bg-orange-500 hover:bg-orange-600"
                            >
                                <Zap size={28} />
                                Lock In Your Pickup
                            </Link>
                            <a
                                href={`tel:${phone.replace(/\D/g, '')}`}
                                className="flex items-center justify-center gap-4 text-white hover:text-white transition-all py-7 px-16 rounded-[32px] border-2 border-white/20 hover:border-white/40 hover:bg-white/5 backdrop-blur-md font-black uppercase tracking-tight text-xl"
                            >
                                <Phone size={24} />
                                <span>{phone}</span>
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Mobile Sticky Label */}
            <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
                <a href={`tel:${phone.replace(/\D/g, '')}`} className="btn bg-[#0c1d37] text-white w-full py-5 text-2xl shadow-2xl flex items-center justify-center gap-4 hover:bg-[#122b5e] border-none rounded-2xl ring-4 ring-white">
                    <Phone size={28} />
                    Call Dispatch Now
                </a>
            </div>

            {/* Structured Data */}
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
                            "priceRange": "$$"
                        }
                    })
                }}
            />
        </main>
    );
}
