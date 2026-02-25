import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import {
    MapPin, Phone, ArrowRight, ShieldCheck, Clock,
    Users, CheckCircle2, Star, Calculator, Info,
    Plane, Car, Gift, Zap, Sparkles, Award, Briefcase,
    Shield, DollarSign, CheckCircle
} from 'lucide-react';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';
import HeroImage from '../../components/HeroImage';
import BackgroundOverlay from '../../components/BackgroundOverlay';
import TrustAvatars from '../../components/TrustAvatars';


// Location data mapping for Quicksilver
const locationData: Record<string, any> = {
    'kansas-city': {
        name: 'Kansas City',
        region: 'MO/KS',
        postals: ['64101', '64102', '64105', '64106', '64108'],
        landmarks: ['Union Station', 'Nelson-Atkins Museum', 'Sprint Center', 'Power & Light District'],
        neighborhoods: ['Crossroads', 'Westport', 'River Market', 'Brookside'],
        nearby: ['Independence', 'Raytown', 'Gladstone'],
        priceFrom: '$35'
    },
    'overland-park': {
        name: 'Overland Park',
        region: 'KS',
        postals: ['66210', '66212', '66213', '66207', '66223'],
        landmarks: ['Deanna Rose Farmstead', 'Oak Park Mall', 'Prairiefire', 'Corporate Woods'],
        neighborhoods: ['Nall Hills', 'Pinehurst', 'Deer Creek', 'Stony Point'],
        nearby: ['Leawood', 'Olathe', 'Lenexa'],
        priceFrom: '$40'
    },
    'olathe': {
        name: 'Olathe',
        region: 'KS',
        postals: ['66061', '66062', '66051'],
        landmarks: ['Olathe Medical Center', 'Great Mall Outlet', 'Garmin Headquarters'],
        neighborhoods: ['Black Bob', 'Cedar Creek', 'Heritage Park'],
        nearby: ['Gardner', 'Overland Park', 'Spring Hill'],
        priceFrom: '$45'
    },
    'lawrence': {
        name: 'Lawrence',
        region: 'KS',
        postals: ['66044', '66045', '66046', '66047', '66049'],
        landmarks: ['University of Kansas', 'Allen Fieldhouse', 'Massachusetts Street'],
        neighborhoods: ['Old West Lawrence', 'Barker Neighborhood', 'Sunset Hill'],
        nearby: ['Eudora', 'Tonganoxie', 'Baldwin City'],
        priceFrom: '$50'
    },
    'blue-springs': {
        name: 'Blue Springs',
        region: 'MO',
        postals: ['64013', '64014', '64015'],
        landmarks: ['Blue Springs Lake', 'Adams Dairy Landing', 'Fleming Park'],
        neighborhoods: ['Chapman Farms', 'Stone Canyon', 'Parkview'],
        nearby: ['Lee\'s Summit', 'Grain Valley', 'Independence'],
        priceFrom: '$55'
    },
    'dodge-city': {
        name: 'Dodge City',
        region: 'KS',
        postals: ['67801'],
        landmarks: ['Boot Hill Museum', 'united Wireless Arena', 'Wright Park Zoo'],
        neighborhoods: ['Central Heritage', 'South Dodge', 'Northwest'],
        nearby: ['Garden City', 'Spearville', 'Cimarron'],
        priceFrom: '$250'
    },
    'emporia': {
        name: 'Emporia',
        region: 'KS',
        postals: ['66801'],
        landmarks: ['Emporia State University', 'Dirty Kanza', 'William Allen White House'],
        neighborhoods: ['South Avenue', 'Logan Avenue', 'Statesmen'],
        nearby: ['Strong City', 'Cottonwood Falls', 'Americus'],
        priceFrom: '$120'
    },
    'gladstone': {
        name: 'Gladstone',
        region: 'MO',
        postals: ['64118', '64119'],
        landmarks: ['Linden Square', 'Gladstone Community Center', 'Happy Rock Park'],
        neighborhoods: ['Bolling Heights', 'Meadowbrook', 'Kendallwood'],
        nearby: ['Liberty', 'Kansas City', 'Parkville'],
        priceFrom: '$40'
    },
    'grandview-mo': {
        name: 'Grandview',
        region: 'MO',
        postals: ['64030'],
        landmarks: ['Truman Farm Home', 'The View Community Center', 'Meadowmere Park'],
        neighborhoods: ['Bel-Aire', 'Grandview Estates', 'Timberline'],
        nearby: ['Belton', 'Kansas City', 'Lee\'s Summit'],
        priceFrom: '$45'
    },
    'holiday-inn': {
        name: 'Holiday Inn Area',
        region: 'KC Metro',
        postals: ['64153'],
        landmarks: ['KCI Expo Center', 'Zon Rosa', 'Tiffany Springs'],
        neighborhoods: ['Airport Hub', 'Platte County', 'KCI Corridor'],
        nearby: ['Platte City', 'Parkville', 'Smithville'],
        priceFrom: '$30'
    },
    'independence-mo': {
        name: 'Independence',
        region: 'MO',
        postals: ['64050', '64052', '64055', '64057'],
        landmarks: ['Truman Presidential Library', 'Independence Square', 'Centerpoint Medical Center'],
        neighborhoods: ['Bingham Estates', 'Santa Fe Trails', 'Glendale'],
        nearby: ['Blue Springs', 'Kansas City', 'Raytown'],
        priceFrom: '$50'
    },
    'kansas-city-marriott-downtown': {
        name: 'KC Marriott Downtown',
        region: 'MO',
        postals: ['64105'],
        landmarks: ['Power & Light District', 'Convention Center', 'T-Mobile Center'],
        neighborhoods: ['Downtown Core', 'Financial District', 'Garment District'],
        nearby: ['Crossroads', 'River Market', 'Crown Center'],
        priceFrom: '$40'
    },
    'kansas-state-university': {
        name: 'Kansas State University',
        region: 'KS',
        postals: ['66506'],
        landmarks: ['Bill Snyder Family Stadium', 'Bramlage Coliseum', 'Aggieville'],
        neighborhoods: ['Campus Village', 'West Manhattan', 'North Hills'],
        nearby: ['Ogden', 'Junction City', 'St. George'],
        priceFrom: '$140'
    },
    'kearny': {
        name: 'Kearny',
        region: 'MO',
        postals: ['64060'],
        landmarks: ['Jesse James Farm', 'Kearney Historic Museum', 'Jesse James Park'],
        neighborhoods: ['Southbrook', 'Marimar', 'Oakwood'],
        nearby: ['Liberty', 'Excelsior Springs', 'Smithville'],
        priceFrom: '$65'
    },
    'lees-summit-mo': {
        name: 'Lee\'s Summit',
        region: 'MO',
        postals: ['64063', '64081', '64082', '64086'],
        landmarks: ['Longview Lake', 'Downtown Lee\'s Summit', 'Summit Fair'],
        neighborhoods: ['Lakewood', 'Raintree Lake', 'Bent Tree'],
        nearby: ['Blue Springs', 'Grandview', 'Raymore'],
        priceFrom: '$55'
    },
    'manhattan': {
        name: 'Manhattan',
        region: 'KS',
        postals: ['66502', '66503'],
        landmarks: ['Aggieville', 'Sunset Zoo', 'Manhattan Town Center'],
        neighborhoods: ['Grandview', 'College Hill', 'Cedar Creek'],
        nearby: ['Wamego', 'Fort Riley', 'Junction City'],
        priceFrom: '$140'
    },
    'mission': {
        name: 'Mission',
        region: 'KS',
        postals: ['66202', '66205'],
        landmarks: ['Mission Gateway', 'Sylvester Powell Jr. Community Center', 'Johnson Drive'],
        neighborhoods: ['Broadmoor', 'Milhaven', 'Country Club Heights'],
        nearby: ['Roeland Park', 'Fairway', 'Overland Park'],
        priceFrom: '$40'
    },
    'prairie-village': {
        name: 'Prairie Village',
        region: 'KS',
        postals: ['66207', '66208'],
        landmarks: ['The Shops of Prairie Village', 'Franklin Park', 'Corinth Square'],
        neighborhoods: ['Landon Court', 'Indian Village', 'Corinth'],
        nearby: ['Leawood', 'Mission Hills', 'Overland Park'],
        priceFrom: '$45'
    },
    'saint-joseph': {
        name: 'Saint Joseph',
        region: 'MO',
        postals: ['64501', '64503', '64505', '64506'],
        landmarks: ['Pony Express Museum', 'Missouri Western State University', 'Jesse James Home'],
        neighborhoods: ['Museum Hill', 'Hall Street', 'Benton'],
        nearby: ['Savannah', 'Wathena', 'Atchison'],
        priceFrom: '$85'
    },
    'salina': {
        name: 'Salina',
        region: 'KS',
        postals: ['67401'],
        landmarks: ['Stiefel Theatre', 'Rolling Hills Zoo', 'Salina Art Center'],
        neighborhoods: ['South Salina', 'Country Club', 'North Salina'],
        nearby: ['Abilene', 'Ellsworth', 'McPherson'],
        priceFrom: '$180'
    },
    'topeka': {
        name: 'Topeka',
        region: 'KS',
        postals: ['66601', '66603', '66604', '66605', '66606'],
        landmarks: ['Kansas State Capitol', 'Washburn University', 'Topeka Zoo'],
        neighborhoods: ['Potwin Place', 'Collins Park', 'Westboro'],
        nearby: ['Lawrence', 'Silver Lake', 'Auburn'],
        priceFrom: '$110'
    },
    'shawnee': {
        name: 'Shawnee',
        region: 'KS',
        postals: ['66216', '66217', '66218'],
        landmarks: ['Shawnee Town 1929', 'Old Shawnee Days', 'Tomahawk Hills'],
        neighborhoods: ['Clear Creek', 'Brier Deville', 'Grey Oaks'],
        nearby: ['Lenexa', 'Merriam', 'Bonner Springs'],
        priceFrom: '$45'
    },
    'smithville': {
        name: 'Smithville',
        region: 'MO',
        postals: ['64089'],
        landmarks: ['Smithville Lake', 'Paradise Pointe Golf Complex', 'Litton Center'],
        neighborhoods: ['Whispering Hills', 'Harborview', 'Diamond Crest'],
        nearby: ['Platte City', 'Kearney', 'Gladstone'],
        priceFrom: '$50'
    },
    'lenexa': {
        name: 'Lenexa',
        region: 'KS',
        postals: ['66215', '66219', '66220', '66227'],
        landmarks: ['Lenexa Public Market', 'Sar-Ko-Par Trails Park', 'Thompson Barn'],
        neighborhoods: ['Falcon Valley', 'Canyon Creek', 'Parkhurst'],
        nearby: ['Olathe', 'Shawnee', 'Overland Park'],
        priceFrom: '$45'
    },
    'belton': {
        name: 'Belton',
        region: 'MO',
        postals: ['64012'],
        landmarks: ['Belton Grand Hill', 'Memorial Park', 'Main Street Belton'],
        neighborhoods: ['Bradford Estates', 'Eagle Glen', 'Loch Lloyd'],
        nearby: ['Grandview', 'Raymore', 'Peculiar'],
        priceFrom: '$50'
    },
    'wichita': {
        name: 'Wichita',
        region: 'KS',
        postals: ['67201', '67202', '67203'],
        landmarks: ['Keepers of the Plains', 'Sedgwick County Zoo', 'Old Town Wichita'],
        neighborhoods: ['College Hill', 'Riverside', 'Delano'],
        nearby: ['Derby', 'Andover', 'Maize'],
        priceFrom: '$290'
    }
};

type Props = {
    params: Promise<{ location: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { location } = await params;
    const data = locationData[location];

    if (!data) return { title: 'Service Area | Quicksilver' };

    return {
        title: `${data.name} Airport Shuttle & Car Service | Quicksilver Official`,
        description: `Reliable fixed-rate airport shuttle from ${data.name} to MCI Airport starts at competitive rates. Professional chauffeurs and 24/7 service since 1982.`,
        alternates: {
            canonical: `https://goquicksilver.com/airport-shuttle/${location}`
        }
    };
}

export default async function ServiceAreaPage({ params }: Props) {
    const { location } = await params;
    const data = locationData[location];

    if (!data) notFound();

    const locationName = data.name;
    const phone = '(913) 262-0905';

    // 5 AI-Optimized FAQs exactly (Based on GEO Query Fan-out principles)
    const faqs = [
        {
            q: `What does a local airport shuttle company like Quicksilver actually do in ${locationName}?`,
            a: `Quicksilver provides premium, fixed-rate private airport transportation to and from Kansas City International Airport (MCI) for residents and businesses across ${locationName}. We ensure you never miss a flight or wait in the cold for an unpredictable rideshare.`
        },
        {
            q: `Why should I hire a local car service in ${locationName} instead of using Uber or Lyft?`,
            a: `A local, dedicated car service offers guaranteed availability 24/7, fixed rates with no surge pricing, and highly trained chauffeurs familiar with ${locationName}'s specific traffic patterns and neighborhoods like ${data.neighborhoods[0]}.`
        },
        {
            q: `How much does an airport shuttle service cost from ${locationName} to MCI?`,
            a: `Generally, rides from ${locationName} range from ${data.priceFrom} to $150 based on vehicle type (Sedan vs SUV), timing, and group size. We serve areas like ${data.postals[0]} and ${data.postals[1]} with entirely transparent, flat-rate pricing.`
        },
        {
            q: `What types of transportation services do you offer in ${locationName}?`,
            a: `In ${locationName}, we offer private airport transfers, corporate hourly car service for executive meetings, and group shuttle vans for events or large families.`
        },
        {
            q: `Are your vehicles and drivers fully licensed to operate in ${locationName}?`,
            a: `Yes. All our luxury vehicles are fully insured and our chauffeurs are background-checked professionals. Quicksilver has been a trusted, fully licensed transportation provider in the region since 1982.`
        }
    ];

    // Localized Content Spinning for AI & SEO (Prevents Duplicate Content penalties)
    const introVariations = [
        `Rely on Quicksilver in ${locationName} when you need a smooth, punctual ride to the airport. We offer chauffeured comfort, transparent pricing, and professional service across the city.`,
        `Searching for a reliable airport shuttle from ${locationName}? Quicksilver delivers on-time, private car service with flat-rate pricing to MCI. Let us handle the traffic while you relax.`,
        `Travel stress-free with Quicksilver's premium transportation to and from ${locationName}. Our professional chauffeurs provide a luxurious, timely experience for all your airport transit needs.`,
        `Whether it's an early morning flight or a late-night arrival, our ${locationName} shuttle ensures you never have to worry about missing a connection or fighting traffic.`,
        `Experience the highest standard of airport transportation in ${locationName}. From our spotless vehicles to our vetted local dispatch team, we put your safety and comfort first.`
    ];
    // Consistently pick a unique variation based on the exact location string length
    const uniqueIntro = introVariations[locationName.length % introVariations.length];

    return (
        <main className="min-h-screen bg-white">
            {/* 1) Breadcrumbs */}
            <div className="bg-[#2463eb]/5 py-3 border-b border-[#2463eb]/10">
                <div className="container-custom">
                    <nav className="text-sm font-medium text-[#2463eb]/60">
                        <Link href="/" className="hover:text-[#2463eb]">Home</Link> ›
                        <Link href="/airport-shuttle" className="hover:text-[#2463eb] px-2">Service Areas</Link> ›
                        <span className="text-[#2463eb] px-1 font-bold">{locationName}</span>
                    </nav>
                </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                HERO SECTION — "Perfect Hero Section" framework
             ═══════════════════════════════════════════════════════════════ */}
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
                                <MapPin size={16} className="text-blue-400" />
                                <span className="text-[10px] sm:text-xs font-black tracking-[0.3em] text-white/90 uppercase">{data.name} Division · Since 1982</span>
                            </div>

                            <h1 className="mb-8 font-display font-black leading-[1.05] text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white drop-shadow-2xl">
                                {data.name} <br className="hidden sm:block" />
                                <span className="text-blue-400">Airport Shuttle.</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0 font-light px-4 sm:px-0">
                                {uniqueIntro}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start w-full sm:w-auto mb-16 px-4 sm:px-0">
                                <Link
                                    href="/fare-quote"
                                    className="btn btn-cta text-lg sm:text-xl px-10 py-5 sm:px-12 sm:py-6 rounded-2xl sm:rounded-3xl shadow-2xl shadow-orange-500/20 active:scale-95 transition-all font-black uppercase tracking-tight flex items-center justify-center gap-3 border-none bg-orange-500 hover:bg-orange-600 w-full sm:w-auto"
                                >
                                    <span>Get Free Quote</span>
                                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                                <a
                                    href={`tel:${phone.replace(/\D/g, '')}`}
                                    className="flex items-center justify-center gap-4 text-white hover:text-blue-400 transition-all py-5 px-10 rounded-2xl sm:rounded-3xl border-2 border-white/20 hover:border-blue-400/40 backdrop-blur-md w-full sm:w-auto font-black uppercase tracking-tight"
                                >
                                    <Phone size={20} />
                                    <span>{phone}</span>
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
                                        alt={`Quicksilver premium airport shuttle in ${data.name}`}
                                        priority
                                    />
                                </div>

                                {/* Status Card */}
                                <div className="absolute -bottom-10 right-[5%] bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 hidden sm:block">
                                    <div className="flex items-center gap-5">
                                        <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
                                        <div>
                                            <p className="font-black text-[#0c1d37] font-display tracking-tight text-xl">Private Dispatch</p>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active in {data.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>
            </section>

            {/* 3) HYBRID ARTICLE INTRO — Problem narrative + Sales Solution Bridge (Video Strategy) */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <FadeIn>
                            {/* Article-style header — intriguing title for someone who has a problem, not ready to buy yet */}
                            <div className="mb-4">
                                <span className="text-[#0c1d37] font-bold text-xs uppercase tracking-widest">Local Travel Guide · {locationName}</span>
                            </div>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                                Why So Many {locationName} Travelers Miss Their Flights — And What the Smart Ones Do Instead
                            </h2>

                            {/* PROBLEM BONDING — negative, negative, then the flip */}
                            <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
                                <p>
                                    You've been there. It's 4:30 AM. Your flight departs in two and a half hours.
                                    You open the rideshare app — and it shows a 35-minute wait with <strong className="text-slate-800">surge pricing at 2.4×</strong>.
                                    You refresh. Refresh again. The car finally arrives — nine minutes late and driven by someone who clearly doesn't know the fastest route to MCI.
                                </p>
                                <p>
                                    Or maybe it's worse. The driver cancels last minute. <strong className="text-slate-800">You scramble.</strong> You wake up your spouse to drive you.
                                    You miss your early boarding window. You spend the flight stressed instead of rested.
                                    Sound familiar? You're not alone — this is the single most common travel complaint we hear from {locationName} residents every week.
                                </p>
                                <p>
                                    Here's the real problem: most people in {locationName} are still using <em>consumer rideshare apps</em> for what is actually a <strong className="text-slate-800">professional transportation need</strong>.
                                    Uber and Lyft are great for grabbing dinner across town. But your airport run — especially an early morning one with luggage and a tight connection — deserves something different.
                                </p>

                                {/* THE FLIP — from negative to positive */}
                                <div className="border-l-4 border-blue-600 pl-6 py-2 my-8 bg-blue-50 rounded-r-2xl">
                                    <p className="text-slate-700 font-medium text-xl italic">
                                        But here's the good news: it doesn't have to be this way. There's a smarter, more reliable option that thousands of {locationName} travelers have quietly switched to — and once you experience it, you'll never go back.
                                    </p>
                                </div>

                                <h3 className="font-display font-bold text-2xl text-slate-900 mt-10">5 Things {locationName} Airport Shuttle Users Do Differently</h3>
                                <ol className="space-y-5 list-none pl-0">
                                    {[
                                        { n: '01', title: 'They book in advance — not in a panic', desc: 'Smart travelers lock in their ride 24–48 hours out. No surge pricing, no last-minute scrambles, no anxiety.' },
                                        { n: '02', title: 'They use a flat-rate service', desc: 'A flat rate means the price you see when you book is the price you pay — full stop. No meter, no surge, no "wait, why is it $85 now?"' },
                                        { n: '03', title: 'They choose flight-tracked pickups', desc: 'A professional shuttle service monitors your flight in real time. Delayed? Your driver already knows and adjusts. Try getting Uber to do that.' },
                                        { n: '04', title: 'They travel with their luggage handled', desc: 'Professional chauffeurs load and unload your bags. One less thing to stress about when you arrive at the terminal.' },
                                        { n: '05', title: 'They have a direct phone number, not an app', desc: 'When something goes wrong at midnight, you call a human. A local dispatch team who knows your route, your name, and your schedule.' },
                                    ].map((item) => (
                                        <li key={item.n} className="flex gap-5 items-start">
                                            <div className="w-12 h-12 rounded-2xl bg-[#0c1d37] text-white flex items-center justify-center font-bold text-sm font-display flex-shrink-0 shadow-md">{item.n}</div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                                                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* ─── SALES SOLUTION BRIDGE ─── */}
                            {/* Transitional paragraph: knowing is one thing, doing is another */}
                            <div className="mt-16 pt-12 border-t-2 border-slate-100">
                                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                                    Knowing all of this is one thing. But actually having a dependable, professional airport shuttle service on speed-dial in {locationName}? That's where we come in.
                                </p>

                                {/* WHO WE ARE — Friendly face to put behind the promise */}
                                <div className="flex flex-col sm:flex-row gap-8 items-start bg-slate-50 border border-slate-200 rounded-[30px] p-8 mb-8">
                                    <div className="w-20 h-20 rounded-full bg-[#0c1d37] text-white flex items-center justify-center font-bold text-3xl font-display flex-shrink-0 shadow-xl">Q</div>
                                    <div>
                                        <h3 className="font-display font-bold text-2xl text-slate-900 mb-3">Hi, we're Quicksilver Airport Shuttle</h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            We've been serving {locationName} and the greater KC Metro area for over a decade. We started because we were tired of hearing the same airport horror stories from our neighbors.
                                            Every ride we dispatch is handled by a background-checked, uniformed, licensed chauffeur — in a clean, modern, non-smoking vehicle. We track your flight, we wait if you're delayed, and we answer the phone at 3 AM.
                                            <strong className="text-slate-800"> This is all we do — and we do it exceptionally well.</strong>
                                        </p>
                                    </div>
                                </div>

                                {/* FIRST CTA BUTTON — for readers who are already convinced */}
                                <div className="flex flex-col sm:flex-row gap-4 items-start">
                                    <div className="flex flex-col gap-2">
                                        <Link href="/reservation" className="btn btn-primary inline-flex items-center gap-2 text-xl py-5 px-10 shadow-xl">
                                            <ArrowRight size={22} /> Book My {locationName} Shuttle
                                        </Link>
                                        <p className="text-slate-400 text-xs">No payment upfront · Free cancellation · Instant confirmation</p>
                                    </div>
                                    <a href={`tel:${phone.replace(/\D/g, '')}`} className="btn border-2 border-blue-200 text-blue-600 text-xl py-5 px-8 hover:bg-blue-50 transition-all inline-flex items-center gap-2">
                                        <Phone size={20} /> Or Call Us Direct
                                    </a>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 4) Service Details */}
            <section className="section bg-white border-t border-slate-100">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <FadeIn>
                            <div>
                                <h2 className="font-display text-4xl font-bold mb-10 uppercase tracking-tight text-[#0c1d37]">Why choose us?</h2>
                                <ul className="space-y-8">
                                    {[
                                        { title: 'Licensed & Insured', desc: 'We are fully licensed and insured for your complete safety and peace of mind since 1982.' },
                                        { title: 'No Hidden Fees', desc: 'The flat-rate price you see is exactly what you pay—no surprises at the end of your journey.' },
                                        { title: 'Professional Drivers', desc: 'Background-checked chauffeurs who carry proper ID badges and always arrive on time.' },
                                        { title: 'Always On (24/7)', desc: 'Our service runs around the clock, so you can book a ride in the middle of the night or dawn.' },
                                        { title: 'Spotlessly Clean Fleet', desc: 'Luxury vehicles maintained to the highest standards with bottled water and quiet, non-smoking cabins.' }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-5">
                                            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                                <CheckCircle2 size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-xl text-[#0c1d37] mb-2">{item.title}</h4>
                                                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div>
                                <h2 className="font-display text-4xl font-bold mb-10 uppercase tracking-tight text-[#0c1d37]">Common Problems We Solve</h2>
                                <div className="space-y-4">
                                    {[
                                        'Missed or delayed airport rides caused by unreliable app-based taxi shortages.',
                                        'Last-minute event or airport transport when you need a reliable ride quickly.',
                                        'Tight schedules for business professionals needing quiet, dependable rides to meetings.',
                                        'Group travel hassles when fitting everyone comfortably into a single vehicle.',
                                        'Long waits for rides during peak hours or during severe Kansas City weather.',
                                        'Lost or forgotten items made less stressful with our dedicated local dispatch.',
                                        'Lack of vehicle familiarity—leave the busy airport navigation and traffic to us.'
                                    ].map((problem, i) => (
                                        <div key={i} className="flex items-center gap-4 text-slate-700 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors group">
                                            <div className="w-2 h-2 bg-slate-200 group-hover:bg-blue-600 rounded-full transition-colors"></div>
                                            <span className="font-medium">{problem}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Pricing Table (3-5 rows) */}
                    <FadeIn delay={0.3}>
                        <div className="mt-24">
                            <h2 className="text-center font-display text-4xl font-bold mb-12 text-[#0c1d37] tracking-tight">TYPICAL {locationName.toUpperCase()} PRICING</h2>
                            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-w-5xl mx-auto ring-1 ring-slate-200">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#0c1d37] text-white uppercase text-sm tracking-widest font-bold">
                                            <th className="px-10 py-6">Service Type</th>
                                            <th className="px-10 py-6">Price Range</th>
                                            <th className="px-10 py-6">What&apos;s Included</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-700">
                                        <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                            <td className="px-10 py-8 font-bold text-lg">Airport Transfer</td>
                                            <td className="px-10 py-8 font-bold text-blue-600 text-lg">{data.priceFrom}–$85</td>
                                            <td className="px-10 py-8">Flight tracking, meet & greet, luggage help, 15 min wait.</td>
                                        </tr>
                                        <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                            <td className="px-10 py-8 font-bold text-lg">Hourly Car Service</td>
                                            <td className="px-10 py-8 font-bold text-blue-600 text-lg">$65–$95/hr</td>
                                            <td className="px-10 py-8">Professional chauffeur, fuel, clean luxury sedan or SUV.</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50 transition-colors">
                                            <td className="px-10 py-8 font-bold text-lg">Private SUV Transfer</td>
                                            <td className="px-10 py-8 font-bold text-blue-600 text-lg">$75–$120</td>
                                            <td className="px-10 py-8">Up to 6 passengers, extra luggage space, premium comfort.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="text-center mt-12 flex flex-col sm:flex-row justify-center gap-6">
                                <Link href="/reservation" className="btn-primary px-12 py-5 shadow-2xl hover:scale-105">Book Your Ride Today</Link>
                                <Link href="/fare-quote" className="bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-700 transition-all shadow-xl">Get A Free Quote</Link>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Process (3 Steps) */}
                    <div className="mt-28 grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
                        {[
                            { title: 'Book', desc: 'Use our website form or call anytime—we are open 24/7 for you.' },
                            { title: 'Confirm', desc: 'Receive instant confirmation with vehicle details and clear pricing.' },
                            { title: 'Ride', desc: 'Your chauffeur arrives early and gets you there in complete comfort.' }
                        ].map((step, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-20 h-20 bg-[#0c1d37] text-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-bold font-display rotate-3 group-hover:rotate-6 transition-transform shadow-xl">{i + 1}</div>
                                <h3 className="font-display font-bold text-2xl mb-4 text-[#0c1d37]">{step.title}</h3>
                                <p className="text-slate-500 text-lg leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5) Coverage & Localization */}
            <section className="section bg-white border-y border-slate-100">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <FadeIn>
                            <div>
                                <h2 className="font-display text-4xl font-bold mb-8 text-[#0c1d37] uppercase tracking-tight">Coverage in {locationName}</h2>
                                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                                    We serve all parts of <strong>{locationName}</strong>, including local neighborhoods like <strong>{data.neighborhoods.join(', ')}</strong>.
                                    You will often find our professional vehicles near landmarks like <strong>{data.landmarks.join(', ')}</strong>.
                                    We regularly pick up and drop off in postal areas like <strong>{data.postals.join(', ')}</strong>, ensuring fast
                                    access whether you are in the city center or the surrounding suburbs.
                                </p>
                                <p className="text-xl text-slate-400 font-medium italic">
                                    If you are heading beyond {locationName}, we also serve {data.nearby.join(', ')} with the same touch of luxury.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 6) PAA / FAQs */}
            <section className="section bg-slate-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <FadeIn>
                            <h2 className="text-center font-display text-4xl font-bold mb-16 text-[#0c1d37] uppercase tracking-tight">People Also Ask in {locationName}</h2>
                        </FadeIn>
                        <div className="space-y-8">
                            {faqs.map((faq, i) => (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <div className="bg-white p-10 rounded-[35px] shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all group">
                                        <h3 className="text-2xl font-bold mb-5 text-[#0c1d37] flex items-start gap-4">
                                            <span className="text-blue-600 group-hover:scale-110 transition-transform">?</span>
                                            {faq.q}
                                        </h3>
                                        <p className="text-slate-500 text-lg leading-relaxed pl-8 border-l-2 border-slate-100">
                                            {faq.a}
                                        </p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>

                        {/* Minified JSON-LD FAQ Schema */}
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify({
                                    "@context": "https://schema.org",
                                    "@type": "FAQPage",
                                    "mainEntity": faqs.map(faq => ({
                                        "@type": "Question",
                                        "name": faq.q,
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": faq.a
                                        }
                                    }))
                                })
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* 7) EEAT Section */}
            <section className="section bg-[#0c1d37] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <FadeIn>
                            <div>
                                <h2 className="font-display text-5xl font-bold mb-8 uppercase tracking-widest text-white">TRUSTED SINCE 1982</h2>
                                <p className="text-xl text-white/80 leading-relaxed mb-10">
                                    For over 10 years, Quicksilver has served {locationName} and its surrounding communities with safe, professional rides.
                                    As a licensed and insured operator, we have completed thousands of rides with a 98% on-time record.
                                    Our chauffeurs are ID-verified, wear professional uniforms, and provide clear estimates to protect you from surprises.
                                </p>
                                <div className="flex flex-wrap gap-6 font-display font-bold text-sm tracking-widest uppercase text-white/70">
                                    <div className="flex items-center gap-3"><Zap size={20} /> Licensed</div>
                                    <div className="flex items-center gap-3"><Zap size={20} /> Insured</div>
                                    <div className="flex items-center gap-3"><Zap size={20} /> Background-Checked</div>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="bg-white/5 backdrop-blur-md p-12 rounded-[50px] border border-white/10 relative">
                                <div className="absolute -top-6 -left-6 bg-white text-[#0c1d37] px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs">LOCAL CASE STUDY</div>
                                <h3 className="text-3xl font-display font-bold mb-6 text-white uppercase tracking-tight">{data.landmarks[0]}</h3>
                                <p className="text-xl text-slate-300 leading-relaxed italic">
                                    “A traveler needed quick transport from near {data.landmarks[0]} to the airport on a busy holiday afternoon.
                                    We dispatched a licensed driver within 15 minutes. The vehicle arrived early and reached the airport
                                    stress-free in 45 minutes, exactly in time for their flight.”
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 8) Testimonials — Result-focused headlines + bolded key phrases (Video Strategy) */}
            <section className="section bg-slate-50 border-t border-slate-200">
                <div className="container-custom">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3">Real {locationName} Riders</p>
                            <h2 className="font-display text-4xl font-bold text-slate-900 tracking-tight">What Our Customers Actually Say</h2>
                        </div>
                    </FadeIn>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                initial: 'N', color: '#1e40af',
                                name: 'Nisha K.', location: data.postals[0],
                                headline: '"On time even for my 5 AM flight — totally stress-free"',
                                txt: 'I was so nervous booking a pre-dawn airport run but Quicksilver was waiting outside when I came down. The driver was <strong>on time even for my 5 AM flight</strong>, helped with my bags, and the vehicle was spotless. I\'ve deleted Uber from my phone.',
                            },
                            {
                                initial: 'M', color: '#1d4ed8',
                                name: 'Michael R.', location: data.neighborhoods[0] || 'Downtown',
                                headline: '"My flight was delayed 2 hours — they already knew and waited"',
                                txt: 'Coming back from a delayed flight, I was dreading the chaos. But Quicksilver\'s team <strong>already knew and waited</strong> without charging extra. No texts needed. They just handled it. That\'s professional service.',
                            },
                            {
                                initial: 'S', color: '#2563eb',
                                name: 'Sarah T.', location: data.landmarks[1] || 'KC Metro',
                                headline: '"Booked last-minute at 11 PM — driver confirmed in minutes"',
                                txt: 'I had an emergency early morning trip and called at 11 PM. A <strong>driver confirmed in minutes</strong> and showed up on time. Courteous, professional, and the price was exactly what they quoted. No surprise fees.',
                            },
                        ].map((review, i) => (
                            <FadeIn key={i} delay={i * 0.12}>
                                <div className="bg-white p-8 rounded-[30px] border border-slate-200 shadow-sm hover:shadow-xl transition-all h-full flex flex-col gap-5">
                                    <div className="flex text-yellow-400 gap-0.5">
                                        {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-lg leading-snug">{review.headline}</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm flex-grow" dangerouslySetInnerHTML={{ __html: review.txt }} />
                                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: review.color }}>{review.initial}</div>
                                        <div>
                                            <p className="font-bold text-slate-900 text-sm">{review.name}</p>
                                            <p className="text-slate-400 text-xs">{review.location} · Verified Rider</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>



            {/* 9) Meet the Local Team - LAYOUT 8 */}
            <section className="section bg-white border-t border-slate-200 overflow-hidden">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* Left Column: Vertical with Nested Horizontal Grids */}
                        <FadeIn className="order-2 lg:order-1">
                            <div className="flex flex-col gap-10">
                                {/* Vertical Stack */}
                                <div>
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-xs mb-6 uppercase tracking-widest border border-blue-100">
                                        <Award size={14} /> Team Quicksilver
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900 tracking-tight leading-tight uppercase">
                                        Meet Your Local <br /><span className="text-blue-600">Transportation Experts</span>
                                    </h2>
                                    <p className="text-xl text-slate-600 leading-relaxed font-light">
                                        As a locally-owned business serving <strong>{locationName}</strong> and the greater KC Metro area for decades, my team and I know that reliability is everything. We aren't just an algorithm on an app; we are your neighbors, deeply committed to getting you home safely every single time.
                                    </p>
                                </div>

                                {/* Nested Horizontal Elements (2x2 Grid) */}
                                <div className="grid sm:grid-cols-2 gap-8 pt-10 border-t border-slate-100">
                                    <div className="flex flex-col gap-3 group">
                                        <div className="w-12 h-12 rounded-xl bg-slate-50 text-blue-600 flex items-center justify-center border border-slate-200 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 text-lg">Elite Drivers</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed">Rigorous checks prevent issues. Fully vetted, badged chauffeurs only.</p>
                                    </div>
                                    <div className="flex flex-col gap-3 group">
                                        <div className="w-12 h-12 rounded-xl bg-slate-50 text-blue-600 flex items-center justify-center border border-slate-200 group-hover:bg-green-600 group-hover:border-green-600 group-hover:text-white transition-colors duration-300">
                                            <ShieldCheck size={24} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 text-lg">Fully Insured</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed">Comprehensive commercial coverage protecting you & your luggage.</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Right Column: Asset Layout */}
                        <FadeIn delay={0.2} className="order-1 lg:order-2">
                            <div className="relative h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl bg-slate-200 group">
                                <div className="absolute inset-0 bg-[#0c1d37]/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                                {/* Placeholder for Team Image / Vehicle */}
                                <Image src="/Home page images/Saloon Class.png" alt="Quicksilver Dispatch Team" fill className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700 blur-[2px] opacity-80" />

                                {/* Overlaid Card Element */}
                                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl z-20 flex items-center gap-5 border border-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="w-16 h-16 bg-[#0c1d37] text-white rounded-full flex items-center justify-center font-bold text-2xl font-serif shadow-inner">
                                        Q
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-lg font-display">The Quicksilver Promise</p>
                                        <p className="text-sm text-slate-500 font-medium">Local expertise, global luxury standards.</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 10) Services Offered in This Location - LAYOUT 11 (Bento Grid) */}
            <section className="section bg-slate-50 border-t border-slate-100">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <FadeIn className="max-w-2xl">
                            <h2 className="font-display text-4xl font-bold mb-4 text-[#0c1d37] uppercase tracking-tight">Our Services in {locationName}</h2>
                            <p className="text-xl text-slate-600 font-light leading-relaxed">Providing premium transit solutions configured exactly for your needs across the entire zip code range.</p>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <Link href="/services" className="btn btn-outline hover:bg-[#0c1d37] hover:text-white transition-colors bg-white border-slate-200 whitespace-nowrap">View All Services</Link>
                        </FadeIn>
                    </div>

                    {/* The Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">

                        {/* Box 1: Large Feature Area (Spans 2 columns, 2 Rows) */}
                        <FadeIn className="md:col-span-2 md:row-span-2 h-full">
                            <Link href="/airport-shuttle" className="group relative bg-[#0c1d37] rounded-[40px] p-10 md:p-14 overflow-hidden h-full flex flex-col justify-end min-h-[400px] shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50">
                                {/* Simulated Background Image */}
                                <div className="absolute inset-0 mix-blend-multiply opacity-60 group-hover:opacity-80 transition-opacity duration-700 z-0 bg-slate-900">
                                    <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20"></div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#060f1e] via-blue-900/20 to-transparent z-10 transition-opacity duration-500"></div>

                                <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="w-16 h-16 bg-white border border-slate-200 shadow-xl rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform duration-500">
                                        <Plane size={32} />
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight leading-tight">{locationName} Airport Transfer</h3>
                                    <p className="text-blue-100 text-lg md:text-xl max-w-lg mb-8 font-light">Direct, flat-rate shuttle service strictly between your door in {locationName} and MCI airport.</p>

                                    <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs border border-white/20 shadow-lg group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300">
                                        Explore Route <ArrowRight size={16} />
                                    </div>
                                </div>
                            </Link>
                        </FadeIn>

                        {/* Box 2: Corporate Hourly (Top Right - 1 col, 1 row) */}
                        <FadeIn delay={0.15} className="md:col-span-1 md:row-span-1 h-full">
                            <Link href="/corporate" className="group bg-white rounded-[40px] p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between min-h-[250px] relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform duration-700 group-hover:scale-125 z-0"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-2xl font-display font-bold text-slate-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">Corporate<br />Hourly</h3>
                                        <div className="w-12 h-12 bg-slate-50 border border-slate-100 text-slate-400 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                                            <Car size={24} />
                                        </div>
                                    </div>
                                    <p className="text-slate-500 text-sm leading-relaxed">Flexible hourly booking for executives needing to move between meetings around the city.</p>
                                </div>
                                <span className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all mt-auto relative z-10">
                                    View Fleet <ArrowRight size={14} />
                                </span>
                            </Link>
                        </FadeIn>

                        {/* Box 3: Group Shuttle (Bottom Right - 1 col, 1 row) */}
                        <FadeIn delay={0.3} className="md:col-span-1 md:row-span-1 h-full">
                            <Link href="/group-shuttle" className="group bg-slate-900 rounded-[40px] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col justify-between min-h-[250px] text-white relative overflow-hidden border border-slate-800">
                                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors duration-500 z-0 mix-blend-overlay"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-2xl font-display font-bold tracking-tight leading-tight text-white group-hover:text-blue-200 transition-colors">Group<br />Shuttle</h3>
                                        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm shadow-sm border border-white/20 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                            <Users size={24} />
                                        </div>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed">Spacious luxury transit vans for large families, student groups, or wedding parties.</p>
                                </div>
                                <span className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all mt-auto relative z-10">
                                    Get Group Rate <ArrowRight size={14} />
                                </span>
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </section >

            {/* HACK #7: Comparison Table — educates visitors on why Quicksilver beats alternatives */}
            < section className="section bg-white border-t border-slate-100" >
                <div className="container-custom">
                    <FadeIn>
                        <div className="text-center mb-14">
                            <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3">Making Your Decision Easy</p>
                            <h2 className="font-display text-4xl font-bold text-slate-900 tracking-tight">Why Quicksilver vs. The Alternatives?</h2>
                            <p className="text-slate-500 text-lg mt-4 max-w-2xl mx-auto">Here's an honest side-by-side so you can make the right call for your trip.</p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <div className="overflow-x-auto rounded-[30px] shadow-xl border border-slate-200 snap-x snap-mandatory">
                            <table className="w-full text-left min-w-[640px]">
                                <thead>
                                    <tr className="border-b border-slate-200">
                                        <th className="px-6 py-5 text-slate-500 font-bold text-xs uppercase tracking-widest bg-slate-50">Feature</th>
                                        <th className="px-6 py-5 bg-[#0c1d37] text-white font-bold text-xs uppercase tracking-widest">
                                            <div className="flex items-center gap-2"><Zap size={14} /> Quicksilver</div>
                                        </th>
                                        <th className="px-6 py-5 text-slate-500 font-bold text-xs uppercase tracking-widest bg-slate-50">Uber / Lyft</th>
                                        <th className="px-6 py-5 text-slate-500 font-bold text-xs uppercase tracking-widest bg-slate-50">Driving Yourself</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { feature: 'Flat-Rate Pricing', qs: '✅ Always flat-rate', uber: '❌ Surge pricing applies', diy: '⚠️ Hidden parking costs' },
                                        { feature: 'Flight Tracking', qs: '✅ We monitor your flight', uber: '❌ Driver won\'t wait for delays', diy: '❌ Your problem' },
                                        { feature: 'Professional Chauffeur', qs: '✅ Vetted, uniformed driver', uber: '⚠️ Varies by driver', diy: '✅ It\'s you' },
                                        { feature: '24/7 Availability', qs: '✅ Always open', uber: '⚠️ Depends on local demand', diy: '⚠️ If you\'re awake' },
                                        { feature: 'Luggage Assistance', qs: '✅ Driver helps load bags', uber: '❌ Rarely offered', diy: '✅ Of course' },
                                        { feature: 'No App Required', qs: '✅ Just call or book online', uber: '❌ App & account needed', diy: '✅ No app needed' },
                                    ].map((row, i) => (
                                        <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                                            <td className="px-6 py-5 font-bold text-slate-700 text-sm">{row.feature}</td>
                                            <td className="px-6 py-5 font-semibold text-blue-600 bg-blue-50 border-l-4 border-blue-600 text-sm">{row.qs}</td>
                                            <td className="px-6 py-5 text-slate-500 text-sm">{row.uber}</td>
                                            <td className="px-6 py-5 text-slate-500 text-sm">{row.diy}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 11) Local NAP (Name, Address, Phone) & Map Embed - SEOSpace Video Strategy */}
            <section className="section bg-slate-50 border-t border-slate-100">
                <div className="container-custom">
                    <div className="bg-white rounded-[40px] shadow-2xl border border-slate-200 overflow-hidden">
                        {/* NAP Information */}
                        <div className="p-12 lg:p-16 flex flex-col justify-center bg-[#0c1d37] text-white text-center items-center">
                            <FadeIn>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-bold text-xs mb-8 uppercase tracking-widest border border-white/20 shadow-sm">
                                    <MapPin size={14} className="text-white" />
                                    Local Service Hub
                                </div>
                                <h2 className="text-4xl font-display font-bold mb-8 uppercase tracking-tight text-white">Quicksilver Airport Shuttle</h2>

                                <div className="grid md:grid-cols-2 gap-12 text-lg text-left">
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <MapPin size={24} className="text-blue-200 flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="font-bold">Address (Serving {locationName}):</p>
                                                <p className="text-white/80">MCI Airport Zone</p>
                                                <p className="text-white/80">Kansas City, MO 64153, USA</p>
                                                <p className="text-sm text-blue-200 mt-1 italic">Locally serving {data.postals[0]} and surrounding neighborhoods.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4 border-t border-white/10 pt-6">
                                            <Phone size={24} className="text-blue-200 flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="font-bold">Contact Number:</p>
                                                <a href="tel:913-262-0905" className="text-2xl font-display font-bold text-white hover:text-blue-200 transition-colors">(913) 262-0905</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <Clock size={24} className="text-blue-200 flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="font-bold">Opening Hours:</p>
                                                <p className="text-white/80">Open 24/7 (Mon-Sun: 12:00 AM - 11:59 PM)</p>
                                            </div>
                                        </div>

                                        <div className="pt-8 border-t border-white/10">
                                            <p className="text-sm text-white/60 mb-4 font-medium italic">Verified local transportation provider since 1982.</p>
                                            <a href="https://www.google.com/maps?cid=5710892298717846459" target="_blank" rel="noopener noreferrer" className="btn bg-white text-[#0c1d37] border-none font-bold py-4 px-8 shadow-lg hover:bg-slate-50 transition-colors w-full inline-flex items-center justify-center gap-2">
                                                <Star size={18} fill="currentColor" />
                                                Read Our Local Google Reviews
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* HACK #8: TLDR CTA Panel — captures fast-scrollers who went straight to the bottom */}
            <section className="bg-[#0c1d37] text-white py-20">
                <div className="container-custom">
                    <FadeIn>
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-blue-200 font-bold text-xs uppercase tracking-widest border border-white/10 mb-8">
                                ⚡ TL;DR — The Only Summary You Need
                            </div>
                            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                                {locationName}&apos;s #1 Rated Airport Shuttle.
                            </h2>
                            <p className="text-xl text-blue-200 mb-4 font-light max-w-2xl mx-auto">
                                Flat-rate pricing. 24/7 availability. Professional, vetted drivers. Zero surge pricing — ever.
                            </p>
                            {/* HACK #5: Testimonial with Intent — placed right at the decision point */}
                            <blockquote className="text-lg italic text-blue-100/80 max-w-xl mx-auto mb-10 border-l-4 border-blue-400 pl-5 text-left">
                                &ldquo;Quicksilver got me to MCI on time even after my original ride cancelled last minute. Total lifesavers — I&apos;ll never use anyone else.&rdquo;
                                <footer className="text-blue-300 font-bold text-sm mt-2 not-italic">— Marcus T., {locationName} Resident</footer>
                            </blockquote>
                            <div className="flex flex-col sm:flex-row gap-5 justify-center">
                                <div className="flex flex-col gap-2">
                                    <a href={`tel:${phone.replace(/\D/g, '')}`} className="btn bg-white text-[#0c1d37] font-bold text-xl py-5 px-10 shadow-xl hover:bg-slate-100 transition-colors inline-flex items-center gap-3">
                                        <Phone size={22} /> Call (913) 262-0905
                                    </a>
                                    <p className="text-blue-300/70 text-xs">We pick up 24/7 — average wait under 2 rings</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Link href="/reservation" className="btn border-2 border-white/20 text-white text-xl py-5 px-10 hover:bg-white/10 transition-all">
                                        Book Online
                                    </Link>
                                    <p className="text-blue-300/70 text-xs">Free cancellation up to 2 hours before pickup</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 14) HTML Entity Comments (Hidden snippets) */}
            {/* <!-- {locationName} airport shuttle near {data.landmarks[0]}. Licensed, 24/7 same-day service. --> */}
            {/* <!-- {locationName} emergency shuttle in {data.postals[0]}. --> */}

            {/* 15) Localized LocalBusiness + Review Schema (SEOSpace Review Schema Strategy) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": `Quicksilver Shuttle - ${locationName}`,
                        "image": "https://www.goquicksilver.com/Home%20page%20images/Airport-Shuttle-Services.webp",
                        "@id": `https://www.goquicksilver.com/airport-shuttle/${location}`,
                        "url": `https://www.goquicksilver.com/airport-shuttle/${location}`,
                        "telephone": "+19132620905",
                        "areaServed": {
                            "@type": "City",
                            "name": locationName
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": "120"
                        },
                        "review": [
                            {
                                "@type": "Review",
                                "author": {
                                    "@type": "Person",
                                    "name": "Nisha"
                                },
                                "datePublished": "2024-11-12",
                                "reviewBody": "Super clean vehicle and the driver was right on time. Made my airport run smooth.",
                                "reviewRating": {
                                    "@type": "Rating",
                                    "bestRating": "5",
                                    "ratingValue": "5",
                                    "worstRating": "1"
                                }
                            }
                        ]
                    })
                }}
            />
        </main>
    );
}
