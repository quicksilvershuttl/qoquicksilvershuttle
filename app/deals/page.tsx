import { Metadata } from 'next';
import Link from 'next/link';
import { Tag, Percent, GraduationCap, MapPin, Building2, ArrowRight, Phone, Shield, Clock, Award, Star } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import HeroImage from '../components/HeroImage';
import BackgroundOverlay from '../components/BackgroundOverlay';

export const metadata: Metadata = {
    title: 'Airport Shuttle Deals & Student Rates | Quicksilver Kansas City',
    description: 'Exclusive airport shuttle deals and discounted university rates across Kansas and Missouri. Save on round trips and student travel from KCI Airport since 1982.',
};

export default function DealsPage() {
    const mainOffers = [
        {
            title: 'Round Trip Discount',
            discount: '10% OFF',
            description: 'Book both your departure and return trips together and save 10% on your total fare instantly.',
            icon: <Percent className="text-blue-600" size={40} />,
            code: 'ROUNDTRIP10',
        },
        {
            title: 'Student Discount',
            discount: '20% OFF',
            description: 'Active students save 20% on all airport shuttle services with a valid student identification card.',
            icon: <GraduationCap className="text-blue-600" size={40} />,
            code: 'STUDENT20',
        }
    ];

    const kansasColleges = [
        { name: 'Baker University', price: '$135.00' },
        { name: 'Benedictine College', price: '$95.00' },
        { name: 'Emporia State University', price: '$155.00' },
        { name: 'Fort Hays State University', price: '$385.00' },
        { name: 'Friends University', price: '$210.00' },
        { name: 'Johnson County Community College', price: '$55.00' },
        { name: 'Kansas State University', price: '$155.00' },
        { name: 'Kansas Wesleyan University', price: '$195.00' },
        { name: 'Mid-America Nazarene University', price: '$45.00' },
        { name: 'Newman University', price: '$235.00' },
        { name: 'Ottawa University', price: '$55.00' },
        { name: 'Pittsburg State University', price: '$310.00' },
        { name: 'Sterling College', price: '$210.00' },
        { name: 'Tabor College', price: '$225.00' },
        { name: 'University of Kansas', price: '$55.00' },
        { name: 'Washburn University', price: '$75.00' },
        { name: 'Wichita State University', price: '$210.00' },
    ];

    const missouriColleges = [
        { name: 'College of the Ozarks', price: '$455.00' },
        { name: 'Columbia College', price: '$285.00' },
        { name: 'Cottey College', price: '$255.00' },
        { name: 'Culver College', price: '$460.00' },
        { name: 'Missouri Valley College', price: '$210.00' },
        { name: 'Stephens College', price: '$285.00' },
        { name: 'Westminster College', price: '$335.00' },
        { name: 'William Jewell College', price: '$45.00' },
        { name: 'Donnelly College', price: '$35.00' },
        { name: 'Baker University', price: '$135.00' },
        { name: 'National American Univ.', price: '$65.00' },
        { name: 'Avila University', price: '$75.00' },
        { name: 'Evangel University', price: '$365.00' },
        { name: 'Fontbonne University', price: '$510.00' },
        { name: 'Hannibal-LaGrange Univ.', price: '$410.00' },
        { name: 'Lindenwood University', price: '$285.00' },
        { name: 'Maryville University', price: '$490.00' },
        { name: 'Missouri Baptist University', price: '$495.00' },
        { name: 'Missouri Western State Univ.', price: '$75.00' },
        { name: 'Northwest Missouri Univ.', price: '$155.00' },
        { name: 'Park University', price: '$45.00' },
        { name: 'Rockhurst University', price: '$50.00' },
        { name: 'Saint Louis University', price: '$520.00' },
        { name: 'Southwest Baptist Univ.', price: '$310.00' },
        { name: 'Univ. of Central Missouri', price: '$155.00' },
        { name: 'Washington Univ. in St. Louis', price: '$515.00' },
        { name: 'University of Missouri', price: '$50.00' },
        { name: 'William Woods University', price: '$335.00' },
    ];

    return (
        <main className="min-h-screen bg-white">
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
                                <Tag size={14} className="text-white/80" />
                                <p className="text-[11px] font-bold tracking-[0.25em] text-white/80 uppercase">Student & University Rates</p>
                            </div>

                            <h1 className="mb-4 sm:mb-6 font-display font-black leading-[1.05] text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white drop-shadow-lg text-center lg:text-left">
                                Special <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-blue-300 drop-shadow-xl">
                                    Deals.
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl text-center lg:text-left font-light mx-auto lg:mx-0">
                                Premium KCI airport transportation rates tailored for students, faculty, and local travelers. Reliable service across Kansas and Missouri.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto mb-10 sm:mb-12">
                                <Link
                                    href="/reservation"
                                    className="btn btn-cta text-base sm:text-lg px-6 py-4 sm:px-9 sm:py-5 group shadow-[0_0_40px_rgba(249,115,22,0.25)] border-none w-full sm:w-auto flex justify-center items-center"
                                >
                                    <span>Book at Discounted Rate</span>
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

                            <div className="flex flex-wrap xl:flex-nowrap whitespace-nowrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mx-auto lg:mx-0">
                                {[
                                    { label: 'Student Friendly', icon: <GraduationCap size={16} className="text-[#2463eb]" /> },
                                    { label: 'Flat Rates', icon: <Tag size={16} className="text-[#2463eb]" /> },
                                    { label: 'No Surge Pricing', icon: <Shield size={16} className="text-[#2463eb]" /> },
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
                                        alt="Quicksilver airport shuttle deals and student rates"
                                        priority
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none"></div>
            </section>

            {/* Featured Offers */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto -mt-24 relative z-20">
                        {mainOffers.map((deal, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div className="bg-white border border-slate-100 p-10 rounded-[40px] group hover:shadow-2xl hover:border-blue-100 transition-all flex flex-col h-full shadow-xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] group-hover:bg-blue-100/50 transition-colors"></div>
                                    <div className="flex items-start gap-6 mb-8 relative z-10">
                                        <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                                            {deal.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-display font-bold mb-2 text-[#0c1d37] uppercase tracking-tight">{deal.title}</h3>
                                            <div className="inline-block px-4 py-1 bg-blue-600 text-white font-black rounded-full text-xs tracking-[0.2em] uppercase">
                                                {deal.discount}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-slate-500 mb-8 font-medium leading-relaxed relative z-10">{deal.description}</p>
                                    <div className="mt-auto pt-6 border-t border-slate-100 relative z-10 flex items-center justify-between">
                                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Code: {deal.code}</span>
                                        <Link href="/reservation" className="text-blue-600 font-black uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-3 transition-all">
                                            Apply Offer <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* University Rates */}
            <section className="section bg-slate-50 border-t border-slate-100">
                <div className="container-custom">
                    <FadeIn>
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-xs mb-6 uppercase tracking-widest border border-blue-100">
                                <Building2 size={16} />
                                Campus Direct Fares
                            </div>
                            <h2 className="font-display text-4xl md:text-5xl font-black text-[#0c1d37] uppercase tracking-tight mb-4">University Special Rates</h2>
                            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Flat-rate transportation connecting students and faculty to KCI Airport.</p>
                        </div>
                    </FadeIn>

                    <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
                        <div>
                            <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-6">
                                <div className="w-12 h-12 bg-[#0c1d37] rounded-xl flex items-center justify-center text-white">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="text-3xl font-display font-black text-[#0c1d37] uppercase tracking-tight">Kansas Institutions</h3>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {kansasColleges.map((school, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 flex justify-between items-center group hover:border-blue-100 transition-colors shadow-sm hover:shadow-md">
                                        <span className="font-bold text-slate-600 group-hover:text-[#0c1d37] transition-colors text-sm">{school.name}</span>
                                        <span className="font-black text-green-600 tracking-tighter">{school.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-6">
                                <div className="w-12 h-12 bg-[#0c1d37] rounded-xl flex items-center justify-center text-white">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="text-3xl font-display font-black text-[#0c1d37] uppercase tracking-tight">Missouri Institutions</h3>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {missouriColleges.map((school, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 flex justify-between items-center group hover:border-blue-100 transition-colors shadow-sm hover:shadow-md">
                                        <span className="font-bold text-slate-600 group-hover:text-[#0c1d37] transition-colors text-sm">{school.name}</span>
                                        <span className="font-black text-green-600 tracking-tighter">{school.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#0c1d37] text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.04]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="container-custom relative z-10">
                    <FadeIn>
                        <h2 className="mb-8 font-display text-4xl md:text-6xl font-black uppercase tracking-tight">Lock In Your Student Rate</h2>
                        <p className="text-xl mb-12 text-white/70 max-w-2xl mx-auto leading-relaxed font-medium">
                            Don&apos;t leave your travel to chance. Book your flat-rate university transfer today and travel with confidence.
                        </p>
                        <Link href="/reservation" className="btn btn-cta font-bold text-2xl px-12 py-6 shadow-xl inline-flex items-center gap-3 border-none">
                            Book Your Pickup Now
                            <ArrowRight size={28} />
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
