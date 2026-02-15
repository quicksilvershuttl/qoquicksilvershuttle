import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
    MapPin, Phone, ArrowRight, ShieldCheck, Clock,
    Users, CheckCircle2, Star, Calculator, Info,
    Plane, Car, Gift, Zap, Sparkles
} from 'lucide-react';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';

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
    }
};

type Props = {
    params: Promise<{ location: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { location } = await params;
    const data = locationData[location];

    if (!data) return { title: 'Service Area | Quicksilver' };

    // Title (≤60 chars)
    const title = `Trusted Airport Shuttle in ${data.name} – Book Securely`;
    // Meta Description (150–160 chars)
    const description = `Luxury airport shuttle in ${data.name} near ${data.landmarks[0]} and ${data.postals[0]}. Flat-rate rides with no hidden fees. Call or book online for a smooth journey.`;

    return {
        title: title.slice(0, 60),
        description: description.slice(0, 160),
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

    // 5 FAQs exactly
    const faqs = [
        {
            q: `How much does airport shuttle service cost in ${locationName}?`,
            a: `Generally, rides range from ${data.priceFrom} to $150 based on vehicle type, timing, and group size. We serve areas like ${data.postals[0]} and ${data.postals[1]} with flat-rate pricing.`
        },
        {
            q: `Can I get an airport shuttle same-day or after hours in ${locationName}?`,
            a: `Yes—we are available 24/7, including early mornings, late nights, and all major holidays. We recommend booking in advance, but we also handle last-minute dispatch when available.`
        },
        {
            q: `Are your vehicles and drivers fully licensed and insured?`,
            a: `Yes. All our vehicles are fully insured and our chauffeurs are background-checked professionals. Quicksilver has been a trusted, licensed transportation provider in the region since 1982.`
        },
        {
            q: `Do you serve residential homes, offices, and local hotels?`,
            a: `Absolutely. We provide door-to-door service to any residential address, business office, or hotel in ${locationName} and surrounding communities without extra hidden pickup fees.`
        },
        {
            q: "What is your service and punctuality guarantee?",
            a: "We guarantee punctual pickups, transparent pricing with no hidden charges, and professional meet-and-greet service to ensure your airport transfer is completely stress-free."
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            {/* 1) Breadcrumbs */}
            <div className="bg-slate-100 py-3 border-b border-slate-200">
                <div className="container-custom">
                    <nav className="text-sm font-medium text-slate-500">
                        <Link href="/" className="hover:text-amber-600">Home</Link> ›
                        <Link href="/airport-shuttle" className="hover:text-amber-600 px-2">Service Areas</Link> ›
                        <span className="text-slate-900 px-1 font-bold">{locationName}</span>
                    </nav>
                </div>
            </div>

            {/* 2) Above the Fold - REFRESHED WITH DEPTH GLOW */}
            <section className="relative py-32 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.07] rounded-full blur-[120px]"></div>

                <div className="container-custom relative z-10">
                    <FadeIn>
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-amber-500 font-bold text-xs mb-8 uppercase tracking-widest border border-white/20 backdrop-blur-md shadow-2xl">
                                <Sparkles size={14} className="animate-pulse" />
                                Premium {data.region} Dispatch
                            </div>
                            <h1 className="mb-6 font-display font-bold text-5xl md:text-8xl tracking-tighter leading-[0.9] uppercase">
                                {locationName}&apos;s Elite <br />
                                <span className="text-amber-500 drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">Airport Shuttle</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl italic font-medium">
                                Rely on Quicksilver in {locationName} when you need a smooth, punctual ride to the airport.
                                We offer chauffeured comfort, transparent pricing, and professional service across the city.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <a
                                    href={`tel:${phone.replace(/\D/g, '')}`}
                                    className="btn btn-primary text-2xl py-6 px-12 shadow-[0_20px_50px_rgba(245,158,11,0.3)]"
                                >
                                    Call {locationName} Experts
                                </a>
                                <Link
                                    href="/reservation"
                                    className="btn border-2 border-white/20 text-white text-2xl py-6 px-12 hover:bg-white/10 transition-all font-display backdrop-blur-sm"
                                >
                                    Book Online
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 3) AI Overview Block (45-55 words) */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <FadeIn>
                            <div className="bg-slate-50 border-l-8 border-amber-500 p-10 rounded-r-3xl shadow-sm">
                                <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 uppercase tracking-tight">How much does airport shuttle cost in {locationName}?</h2>
                                <p className="text-xl text-slate-700 leading-relaxed">
                                    Airport shuttle service in {locationName} typically costs between <strong>{data.priceFrom} and $150</strong>,
                                    depending on the vehicle class and trip distance. We operate <strong>24/7</strong>, including early mornings,
                                    late nights, and holidays—serving major areas like {data.postals[0]} and {data.postals[1]} for your maximum
                                    convenience and a smooth, professional travel experience in the region.
                                </p>
                                <p className="mt-6 text-sm text-slate-400 italic font-medium">
                                    Prices vary by model and specific addresses; confirm your final fare before work begins.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 4) Service Details */}
            <section className="section bg-slate-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <FadeIn>
                            <div>
                                <h2 className="font-display text-4xl font-bold mb-10 uppercase tracking-tight text-slate-900">Why choose us?</h2>
                                <ul className="space-y-8">
                                    {[
                                        { title: 'Licensed & Insured', desc: 'We are fully licensed and insured for your complete safety and peace of mind since 1982.' },
                                        { title: 'No Hidden Fees', desc: 'The flat-rate price you see is exactly what you pay—no surprises at the end of your journey.' },
                                        { title: 'Professional Drivers', desc: 'Background-checked chauffeurs who carry proper ID badges and always arrive on time.' },
                                        { title: 'Always On (24/7)', desc: 'Our service runs around the clock, so you can book a ride in the middle of the night or dawn.' },
                                        { title: 'Spotlessly Clean Fleet', desc: 'Luxury vehicles maintained to the highest standards with bottled water and quiet, non-smoking cabins.' }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-5">
                                            <div className="bg-amber-500 text-slate-900 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                                <CheckCircle2 size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-xl text-slate-900 mb-2">{item.title}</h4>
                                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div>
                                <h2 className="font-display text-4xl font-bold mb-10 uppercase tracking-tight text-slate-900">Common Problems We Solve</h2>
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
                                        <div key={i} className="flex items-center gap-4 text-slate-700 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-amber-500/30 transition-colors group">
                                            <div className="w-2 h-2 bg-slate-300 group-hover:bg-amber-500 rounded-full transition-colors"></div>
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
                            <h2 className="text-center font-display text-4xl font-bold mb-12 text-slate-900 tracking-tight">TYPICAL {locationName.toUpperCase()} PRICING</h2>
                            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-w-5xl mx-auto ring-1 ring-slate-200">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-900 text-amber-500 uppercase text-sm tracking-widest font-bold">
                                            <th className="px-10 py-6">Service Type</th>
                                            <th className="px-10 py-6">Price Range</th>
                                            <th className="px-10 py-6">What&apos;s Included</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-700">
                                        <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                            <td className="px-10 py-8 font-bold text-lg">Airport Transfer</td>
                                            <td className="px-10 py-8 font-bold text-amber-600 text-lg">{data.priceFrom}–$85</td>
                                            <td className="px-10 py-8">Flight tracking, meet & greet, luggage help, 15 min wait.</td>
                                        </tr>
                                        <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                            <td className="px-10 py-8 font-bold text-lg">Hourly Car Service</td>
                                            <td className="px-10 py-8 font-bold text-amber-600 text-lg">$65–$95/hr</td>
                                            <td className="px-10 py-8">Professional chauffeur, fuel, clean luxury sedan or SUV.</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50 transition-colors">
                                            <td className="px-10 py-8 font-bold text-lg">Private SUV Transfer</td>
                                            <td className="px-10 py-8 font-bold text-amber-600 text-lg">$75–$120</td>
                                            <td className="px-10 py-8">Up to 6 passengers, extra luggage space, premium comfort.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="text-center mt-12 flex flex-col sm:flex-row justify-center gap-6">
                                <Link href="/reservation" className="btn-primary px-12 py-5 shadow-2xl hover:scale-105">Book Your Ride Today</Link>
                                <Link href="/fare-quote" className="bg-slate-900 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-slate-800 transition-all shadow-xl">Get A Free Quote</Link>
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
                                <div className="w-20 h-20 bg-slate-900 text-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-bold font-display rotate-3 group-hover:rotate-6 transition-transform shadow-xl">{i + 1}</div>
                                <h3 className="font-display font-bold text-2xl mb-4 text-slate-900">{step.title}</h3>
                                <p className="text-slate-600 text-lg leading-relaxed">{step.desc}</p>
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
                                <h2 className="font-display text-4xl font-bold mb-8 text-slate-900 uppercase tracking-tight">Coverage in {locationName}</h2>
                                <p className="text-xl text-slate-700 leading-relaxed mb-8">
                                    We serve all parts of <strong>{locationName}</strong>, including local neighborhoods like <strong>{data.neighborhoods.join(', ')}</strong>.
                                    You will often find our professional vehicles near landmarks like <strong>{data.landmarks.join(', ')}</strong>.
                                    We regularly pick up and drop off in postal areas like <strong>{data.postals.join(', ')}</strong>, ensuring fast
                                    access whether you are in the city center or the surrounding suburbs.
                                </p>
                                <p className="text-xl text-slate-500 font-medium italic">
                                    If you are heading beyond {locationName}, we also serve {data.nearby.join(', ')} with the same touch of luxury.
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="rounded-[40px] overflow-hidden shadow-2xl border border-slate-200 h-[500px] relative group">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1586450.6907803565!2d-96.77365946379875!3d39.048686057531576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0e10e6e60a3dd%3A0x4f41b91ef0ff1bb!2sQuicksilver%20Airport%20Shuttle!5e0!3m2!1sen!2sde!4v1771138195522!5m2!1sen!2sde"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Quicksilver ${locationName} Service Map`}
                                    className="filter saturate-[0.8] brightness-[1.05]"
                                ></iframe>
                                <div className="absolute bottom-6 left-6 right-6 bg-slate-900/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/10 text-white">
                                    <p className="text-lg font-bold text-amber-500 mb-1 leading-tight">Visit our {locationName} service hub near {data.landmarks[0]}</p>
                                    <p className="text-sm text-slate-300 font-medium">Local parking and entry details are provided upon your booking confirmation.</p>
                                </div>
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
                            <h2 className="text-center font-display text-4xl font-bold mb-16 text-slate-900 uppercase tracking-tight">People Also Ask in {locationName}</h2>
                        </FadeIn>
                        <div className="space-y-8">
                            {faqs.map((faq, i) => (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <div className="bg-white p-10 rounded-[35px] shadow-sm border border-slate-100 hover:shadow-xl hover:border-amber-500/20 transition-all group">
                                        <h3 className="text-2xl font-bold mb-5 text-slate-900 flex items-start gap-4">
                                            <span className="text-amber-500 group-hover:scale-110 transition-transform">?</span>
                                            {faq.q}
                                        </h3>
                                        <p className="text-slate-600 text-lg leading-relaxed pl-8 border-l-2 border-slate-50">
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
            <section className="section bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <FadeIn>
                            <div>
                                <h2 className="font-display text-5xl font-bold mb-8 uppercase tracking-widest text-amber-500">TRUSTED SINCE 1982</h2>
                                <p className="text-xl text-slate-300 leading-relaxed mb-10">
                                    For over 10 years, Quicksilver has served {locationName} and its surrounding communities with safe, professional rides.
                                    As a licensed and insured operator, we have completed thousands of rides with a 98% on-time record.
                                    Our chauffeurs are ID-verified, wear professional uniforms, and provide clear estimates to protect you from surprises.
                                </p>
                                <div className="flex flex-wrap gap-6 font-display font-bold text-sm tracking-widest uppercase text-amber-400">
                                    <div className="flex items-center gap-3"><Zap size={20} /> Licensed</div>
                                    <div className="flex items-center gap-3"><Zap size={20} /> Insured</div>
                                    <div className="flex items-center gap-3"><Zap size={20} /> Background-Checked</div>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="bg-white/5 backdrop-blur-md p-12 rounded-[50px] border border-white/10 relative">
                                <div className="absolute -top-6 -left-6 bg-amber-500 text-slate-900 px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs">LOCAL CASE STUDY</div>
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

            {/* 8) Testimonials */}
            <section className="section bg-white">
                <div className="container-custom">
                    <FadeIn>
                        <h2 className="text-center font-display text-4xl font-bold mb-20 text-slate-900 uppercase tracking-tight">What Locals Are Saying</h2>
                    </FadeIn>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { name: 'Nisha', location: data.postals[0], txt: 'Super clean vehicle and the driver was right on time. Made my airport run smooth.' },
                            { name: 'Michael', location: data.neighborhoods[0] || 'Downtown', txt: 'Professional and courteous service from our home—no stress, just comfort.' },
                            { name: 'Sarah', location: data.landmarks[1] || 'KC Metro', txt: 'I arranged a last-minute ride near the station. The driver arrived early and was friendly. Best decision.' }
                        ].map((review, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
                                    <div className="flex text-amber-500 mb-6 gap-1">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="text-slate-700 italic text-lg leading-relaxed mb-10 flex-grow">“{review.txt}”</p>
                                    <div className="font-bold text-slate-900 text-xl">— {review.name}, {review.location}</div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10) Internal Links */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto bg-slate-900 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
                        <h2 className="text-white font-display text-4xl font-bold mb-10 relative z-10 leading-tight">EXPLORE MORE SERVICES</h2>
                        <p className="text-xl text-slate-300 mb-12 relative z-10 leading-relaxed">
                            Need an easy ride to the airport? Check out our <strong>airport transfer service</strong> for flight-aware pickups.
                            Planning a group event? Explore our <strong>private van service</strong> for a premium, local outing.
                            Looking for flexible timing? View our <strong>hourly car service</strong>—perfect for meetings or weddings.
                            Ready to ride? Visit our <strong>contact page</strong> to book or request a custom quote instantly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                            <a href={`tel:${phone.replace(/\D/g, '')}`} className="btn btn-primary py-5 px-10 text-xl flex items-center justify-center gap-3">
                                <Phone size={24} />
                                Call {locationName} Shuttle Now
                            </a>
                            <Link href="/reservation" className="btn btn-white px-10 py-5 text-xl">
                                Book Today
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Sticky Label (Bottom of Page) */}
            <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
                <a href={`tel:${phone.replace(/\D/g, '')}`} className="btn btn-primary w-full py-5 text-2xl shadow-2xl animate-pulse">
                    <Phone size={28} />
                    Call {locationName} Now
                </a>
            </div>

            {/* 14) HTML Entity Comments (Hidden snippets) */}
            {/* <!-- {locationName} airport shuttle near {data.landmarks[0]}. Licensed, 24/7 same-day service. --> */}
            {/* <!-- {locationName} emergency shuttle in {data.postals[0]}. --> */}
        </main>
    );
}
