import { Metadata } from 'next';
import { MapPin, Phone, ArrowRight, CheckCircle2, Plane, Music, Trophy, Building, Map as MapIcon, Award, Clock, Shield, DollarSign, Star } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';
import HeroImage from '../components/HeroImage';
import BackgroundOverlay from '../components/BackgroundOverlay';
import TrustAvatars from '../components/TrustAvatars';

export const metadata: Metadata = {
    title: 'Service Areas | Kansas City Airport Shuttle Coverage | Quicksilver Airport car',
    description: 'Quicksilver provides premium airport shuttle and private car services in the Kansas City metro. Professional chauffeurs and flat-rate pricing since 1982.',
};

export default function ServiceAreasPage() {
    const categories = [
        {
            title: 'Airports We Serve',
            icon: <Plane size={32} />,
            items: [
                { name: 'Kansas City International Airport – MCI', slug: 'kansas-city' },
                { name: 'Charles B. Wheeler Airport – Downtown Airport', slug: 'kansas-city' },
                { name: 'Johnson County Executive Airport', slug: 'olathe' },
                { name: 'Lees Summit Municipal Airport', slug: 'lees-summit-mo' },
                { name: 'New Century AirCenter', slug: 'olathe' }
            ]
        },
        {
            title: 'Sports Stadiums',
            icon: <Trophy size={32} />,
            items: [
                { name: 'Arrowhead Stadium', slug: 'kansas-city' },
                { name: 'Kansas Speedway', slug: 'kansas-city' },
                { name: 'Kauffman Stadium', slug: 'kansas-city' },
                { name: 'Sporting Park', slug: 'kansas-city' },
                { name: 'Truman Sports Complex', slug: 'kansas-city' }
            ]
        },
        {
            title: 'Music Venues & Halls',
            icon: <Music size={32} />,
            items: [
                { name: 'Cricket Wireless Amphitheatre (Sandstone)', slug: 'kansas-city' },
                { name: 'Sprint Center (T-Mobile Center)', slug: 'kansas-city' },
                { name: 'Starlight Theatre', slug: 'kansas-city' },
                { name: 'The Midland', slug: 'kansas-city' },
                { name: 'The Riot Room', slug: 'kansas-city' },
                { name: 'Uptown Theatre', slug: 'kansas-city' },
                { name: 'Kauffman Center for the Performing Arts', slug: 'kansas-city' }
            ]
        }
    ];

    const majorDistricts = [
        { name: 'Arts District, Kansas City', slug: 'kansas-city' },
        { name: 'Bartle Hall', slug: 'kansas-city' },
        { name: 'Country Club District', slug: 'kansas-city' },
        { name: 'Country Club Plaza Kansas City', slug: 'kansas-city' },
        { name: 'Downtown Kansas City', slug: 'kansas-city' },
        { name: 'KU Medical Center Campus', slug: 'kansas-city' },
        { name: 'North Kansas City', slug: 'kansas-city' },
        { name: 'River Market', slug: 'kansas-city' },
        { name: 'The Crossroads Arts District', slug: 'kansas-city' },
        { name: 'The Kemper Museum of Contemporary Art', slug: 'kansas-city' },
        { name: 'The Nelson-Atkins Museum of Art', slug: 'kansas-city' },
        { name: 'The Northland', slug: 'kansas-city' },
        { name: 'Union Station, Kansas City', slug: 'kansas-city' },
        { name: 'University of Kansas Hospital (KUMED)', slug: 'kansas-city' },
        { name: 'Waldo Residential District', slug: 'kansas-city' },
        { name: 'Westport and West Bottoms', slug: 'kansas-city' }
    ];

    const cities = [
        { name: 'Kansas City, MO', slug: 'kansas-city' },
        { name: 'Overland Park, KS', slug: 'overland-park' },
        { name: 'Olathe, KS', slug: 'olathe' },
        { name: 'Lawrence, KS', slug: 'lawrence' },
        { name: 'Blue Springs, MO', slug: 'blue-springs' },
        { name: 'Dodge City, KS', slug: 'dodge-city' },
        { name: 'Emporia, KS', slug: 'emporia' },
        { name: 'Gladstone, MO', slug: 'gladstone' },
        { name: 'Grandview, MO', slug: 'grandview-mo' },
        { name: 'Independence, MO', slug: 'independence-mo' },
        { name: 'Kearney, MO', slug: 'kearny' },
        { name: "Lee's Summit, MO", slug: 'lees-summit-mo' },
        { name: 'Manhattan, KS', slug: 'manhattan' },
        { name: 'Mission, KS', slug: 'mission' },
        { name: 'Prairie Village, KS', slug: 'prairie-village' },
        { name: 'Saint Joseph, MO', slug: 'saint-joseph' },
        { name: 'Salina, KS', slug: 'salina' },
        { name: 'Topeka, KS', slug: 'topeka' },
        { name: 'Shawnee, KS', slug: 'shawnee' },
        { name: 'Smithville, MO', slug: 'smithville' },
        { name: 'Lenexa, KS', slug: 'lenexa' },
        { name: 'Holiday Inn Area', slug: 'holiday-inn' },
        { name: 'KC Marriott Downtown', slug: 'kansas-city-marriott-downtown' },
        { name: 'Kansas State University', slug: 'kansas-state-university' },
        { name: 'Avondale, MO' }, { name: 'Basehor, KS' }, { name: 'Belton, MO' },
        { name: 'Bonner Springs, KS' }, { name: 'De Soto, KS' }, { name: 'Excelsior Springs, MO' },
        { name: 'Fairway, KS' }, { name: 'Gardner, KS' }, { name: 'Harrisonville, MO' },
        { name: 'Liberty, MO' }, { name: 'Parkville, MO' }, { name: 'Platte City, MO' },
        { name: 'Raymore, MO' }, { name: 'Raytown, MO' }, { name: 'Riverside, MO' }
    ];

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
                                <MapIcon size={14} className="text-white/80" />
                                <p className="text-[11px] font-bold tracking-[0.25em] text-white/80 uppercase">Regional Coverage · 24/7 Availability</p>
                            </div>

                            {/* H1 — VALUE PROPOSITION */}
                            <h1 className="mb-4 sm:mb-6 font-display font-black leading-[1.1] text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white drop-shadow-lg text-center lg:text-left">
                                Our Service <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-blue-300 drop-shadow-xl">
                                    Areas
                                </span>
                            </h1>

                            {/* Supporting Copy */}
                            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl text-center lg:text-left font-light mx-auto lg:mx-0">
                                Quicksilver provides premium airport shuttle service throughout the Kansas City metro and surrounding communities. From Lawrence to Blue Springs, we&apos;re wherever you need us.
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto mb-10 sm:mb-12">
                                <Link
                                    href="/reservation"
                                    className="btn btn-cta text-base sm:text-lg px-6 py-5 sm:px-9 sm:py-5 group shadow-[0_0_40px_rgba(249,115,22,0.25)] hover:shadow-[0_0_60px_rgba(249,115,22,0.45)] border-none w-full sm:w-auto flex justify-center items-center"
                                >
                                    <span>Book a Ride</span>
                                    <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform" size={20} />
                                </Link>
                                <a
                                    href="tel:913-262-0905"
                                    className="group flex items-center justify-center gap-2 sm:gap-3 text-white transition-all py-5 px-6 sm:px-7 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/[0.06] backdrop-blur-sm w-full sm:w-auto"
                                >
                                    <Phone size={18} className="text-blue-300 group-hover:text-white transition-colors" />
                                    <span className="font-bold tracking-wide text-sm sm:text-base">(913) 262-0905</span>
                                </a>
                            </div>

                            {/* Social Proof — identical to homepage */}
                            <div className="flex flex-col sm:flex-row items-center gap-5 mb-10 pt-8 border-t border-white/10 w-full lg:w-auto mx-auto lg:mx-0">
                                <TrustAvatars />
                                <div className="flex flex-col gap-0.5 items-center sm:items-start">
                                    <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
                                        {[...Array(5)].map((_, i) => (<Star key={i} fill="currentColor" size={14} />))}
                                        <span className="text-white text-sm ml-1 font-bold">4.8/5</span>
                                    </div>
                                    <p className="text-sm text-slate-300"><strong className="text-white">Rick, Scott & 4,000+ riders</strong> trust Quicksilver</p>
                                </div>
                            </div>

                            {/* Credibility Badges */}
                            <div className="flex flex-wrap xl:flex-nowrap whitespace-nowrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mx-auto lg:mx-0">
                                {[
                                    { label: 'Licensed & Bonded', icon: <CheckCircle2 size={16} className="text-[#2463eb]" /> },
                                    { label: 'Professional Drivers', icon: <MapIcon size={16} className="text-[#2463eb]" /> },
                                    { label: '24/7 Dispatch', icon: <Clock size={16} className="text-[#2463eb]" /> },
                                    { label: 'Trusted Since 1982', icon: <Award size={16} className="text-amber-500" /> },
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
                                        alt="Quicksilver Kansas City metro service areas"
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


            {/* Major Destinations */}
            <section className="section bg-white">
                <div className="container-custom">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="mb-4 font-display text-4xl font-bold text-[#0c1d37] uppercase tracking-tight">Major Destinations</h2>
                            <p className="text-xl text-slate-500 max-w-2xl mx-auto italic font-medium">
                                Direct transfers to all major hubs, venues, and stadiums in the region.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {categories.map((cat, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div className="bg-white border border-slate-100 p-8 rounded-[40px] hover:shadow-2xl hover:border-blue-100 transition-all h-full group border-b-4 border-b-transparent hover:border-b-blue-600">
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#0c1d37] group-hover:text-white transition-colors">
                                        {cat.icon}
                                    </div>
                                    <h3 className="text-2xl font-display font-bold mb-6 text-[#0c1d37] uppercase tracking-tight">{cat.title}</h3>
                                    <ul className="space-y-4">
                                        {cat.items.map((item, i) => (
                                            <li key={i}>
                                                <Link href={`/airport-shuttle/${item.slug}`} className="flex items-start gap-3 text-slate-500 font-medium hover:text-[#0c1d37] transition-colors group/item">
                                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    {/* Districts & Institutions */}
                    <FadeIn>
                        <div className="bg-[#0c1d37] rounded-[50px] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-10">
                                    <Building className="text-white" size={40} />
                                    <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight">Key Districts & Institutions</h2>
                                </div>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
                                    {majorDistricts.map((item, i) => (
                                        <Link key={i} href={`/airport-shuttle/${item.slug}`} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                                            <div className="w-2 h-2 bg-white/60 rounded-full group-hover:scale-150 transition-transform"></div>
                                            <span className="font-medium text-lg tracking-tight">{item.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Cities Grid */}
            <section className="section bg-white border-y border-slate-100">
                <div className="container-custom">
                    <FadeIn>
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full border border-slate-200 mb-6 shadow-sm">
                                <MapIcon className="text-blue-600" size={20} />
                                <span className="font-bold text-[#0c1d37] tracking-widest uppercase text-sm">Full Geographic Reach</span>
                            </div>
                            <h2 className="mb-4 font-display text-4xl md:text-5xl font-bold text-[#0c1d37] uppercase tracking-tight">Cities & Communities</h2>
                            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium">
                                We provide 24/7 door-to-door service to over 100 cities across Missouri and Kansas.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {cities.map((city, index) => {
                            const Inner = () => (
                                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all flex items-center gap-4 group h-full">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors flex-shrink-0 ${city.slug ? 'bg-blue-50 text-blue-600 group-hover:bg-[#0c1d37] group-hover:text-white' : 'bg-slate-50 text-slate-300'}`}>
                                        <MapPin size={20} />
                                    </div>
                                    <span className={`font-bold transition-colors tracking-tight text-lg ${city.slug ? 'text-[#0c1d37] group-hover:text-blue-600' : 'text-slate-300'}`}>{city.name}</span>
                                </div>
                            );
                            return (
                                <FadeIn key={index} delay={(index % 4) * 0.05} className="h-full">
                                    {city.slug ? (
                                        <Link href={`/airport-shuttle/${city.slug}`} className="block h-full">
                                            <Inner />
                                        </Link>
                                    ) : (
                                        <Inner />
                                    )}
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-white">
                <div className="container-custom">
                    <FadeIn>
                        <div className="max-w-5xl mx-auto bg-[#0c1d37] rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden text-white mb-20">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
                            <h2 className="mb-6 font-display text-4xl font-bold relative z-10">Can&apos;t Find Your Location?</h2>
                            <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto relative z-10">
                                We serve many additional locations throughout Kansas and Missouri beyond this list.
                                Our fleet is mobile and ready for special dispatch requests.
                                Call us to confirm availability for your specific area.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10 w-full max-w-2xl mx-auto">
                                <a href="tel:913-262-0905" className="btn btn-cta py-4 px-10 text-xl flex items-center justify-center gap-3 font-bold shadow-xl border-none transition-all hover:scale-105">
                                    <Phone size={24} />
                                    (913) 262-0905
                                </a>
                                <Link href="/contact" className="btn bg-white text-[#0c1d37] hover:bg-slate-50 py-4 px-10 text-xl font-bold shadow-lg transition-all hover:scale-105">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Topical Authority */}
                    <FadeIn>
                        <div className="max-w-4xl mx-auto text-left py-12 border-t border-slate-100">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-xs mb-6 uppercase tracking-widest border border-blue-100">
                                <Building size={16} />
                                Local Transportation Intelligence 2026
                            </div>
                            <h2 className="mb-6 font-display text-3xl font-bold text-[#0c1d37] tracking-tight">Kansas City Metro Traffic Patterns & MCI Airport Access</h2>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    As Kansas City&apos;s trusted airport car service since 1982, our chauffeurs possess unparalleled logistical knowledge of local traffic arteries. When navigating to <strong>Kansas City International Airport (MCI)</strong> from Overland Park or Lenexa, generic GPS routing often overlooks critical chokepoints on I-435 and I-29 during the 4:00 PM to 6:30 PM rush hour.
                                </p>
                                <ul className="list-disc pl-5 my-6 space-y-4">
                                    <li><strong>The I-29 Corridor:</strong> Primary access to MCI Airport. Our drivers monitor daily construction updates near the I-29 and Highway 169 interchange, dynamically routing via NW 112th St. when outbound traffic stalls.</li>
                                    <li><strong>Event Day Congestion:</strong> Transfers overlapping with Arrowhead Stadium or Kauffman Stadium events require a mandatory 45-minute buffer. Our dispatch system automatically alerts passengers of these localized delays.</li>
                                    <li><strong>Cross-State Logistics:</strong> Traveling from Lawrence (KU) or Manhattan (KSU)? The I-70 Eastbound approach requires strict timing. We utilize historical 2026 traffic data to guarantee an on-time arrival at the new MCI single terminal.</li>
                                </ul>
                                <p>
                                    This deep, local expertise ensures that a Quicksilver private SUV or shared-ride van isn&apos;t just a ride—it&apos;s a calculated, optimized transit solution designed to eliminate travel anxiety in the Mid-West.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Stats CTA */}
            <section className="py-20 bg-[#0c1d37] text-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {[
                            { stat: '24/7', title: 'Round-the-Clock', sub: 'Always at your service' },
                            { stat: '40+', title: 'Years of service', sub: 'Since 1982 in KC' },
                            { stat: '$35', title: 'Starting Fare', sub: 'Premium Value Pricing' },
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className={`text-center group${i === 1 ? ' border-y md:border-y-0 md:border-x border-white/20 py-10 md:py-0' : ''}`}>
                                    <div className="text-6xl font-display font-extrabold mb-4 group-hover:scale-110 transition-transform">{item.stat}</div>
                                    <h3 className="text-xl font-bold uppercase tracking-wider mb-2">{item.title}</h3>
                                    <p className="font-medium text-white/70 uppercase text-xs">{item.sub}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
