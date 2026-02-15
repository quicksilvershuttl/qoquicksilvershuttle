import { Metadata } from 'next';
import { MapPin, Phone, ArrowRight, CheckCircle2, Plane, Music, Trophy, Building, Map as MapIcon } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';

export const metadata: Metadata = {
    title: 'Service Areas | Quicksilver Airport Shuttle Coverage',
    description: 'Quicksilver Airport Shuttle serves the entire Kansas City metropolitan area, including all major airports, stadiums, music venues, and over 100 surrounding cities and communities.',
};

export default function ServiceAreasPage() {
    const categories = [
        {
            title: 'Airports We Serve',
            icon: <Plane className="text-amber-500" size={32} />,
            items: [
                'Kansas City International Airport – MCI',
                'Charles B. Wheeler Airport – Downtown Airport',
                'Johnson County Executive Airport',
                'Lees Summit Municipal Airport',
                'New Century AirCenter'
            ]
        },
        {
            title: 'Sports Stadiums',
            icon: <Trophy className="text-amber-500" size={32} />,
            items: [
                'Arrowhead Stadium',
                'Kansas Speedway',
                'Kauffman Stadium',
                'Sporting Park',
                'Truman Sports Complex'
            ]
        },
        {
            title: 'Music Venues & Halls',
            icon: <Music className="text-amber-500" size={32} />,
            items: [
                'Cricket Wireless Amphitheatre (Sandstone)',
                'Sprint Center (T-Mobile Center)',
                'Starlight Theatre',
                'The Midland',
                'The Riot Room',
                'Uptown Theatre',
                'Kauffman Center for the Performing Arts'
            ]
        }
    ];

    const majorDistricts = [
        'Arts District, Kansas City', 'Bartle Hall', 'Country Club District',
        'Country Club Plaza Kansas City', 'Downtown Kansas City', 'KU Medical Center Campus',
        'North Kansas City', 'River Market', 'The Crossroads Arts District',
        'The Kemper Museum of Contemporary Art', 'The Nelson-Atkins Museum of Art',
        'The Northland', 'Union Station, Kansas City', 'University of Kansas Hospital (KUMED)',
        'Waldo Residential District', 'Westport and West Bottoms'
    ];

    const cities = [
        'Avondale, MO', 'Basehor, KS', 'Bates County, MO', 'Belton, MO', 'Birmingham, MO',
        'Blue Springs, MO', 'Bonner Springs, KS', 'Buckner, MO', 'Caldwell County, MO',
        'Cass County, MO', 'Clay County, MO', 'Claycomo, MO', 'Clinton County, MO',
        'De Soto, KS', 'Edgerton, KS', 'Edwardsville, KS', 'Excelsior Springs, MO',
        'Fairway, KS', 'Franklin County, KS', 'Garden City, MO', 'Gardner, KS',
        'Gladstone, MO', 'Glenaire, MO', 'Grain Valley, MO', 'Grandview, MO',
        'Greenwood, MO', 'Harrisonville, MO', 'Houston Lake, MO', 'Independence, MO',
        'Jackson County, MO', 'Johnson County, KS', 'Kansas City, KS', 'Kearney, MO',
        'Lafayette County, MO', 'Lake Waukomis, MO', 'Lansing, KS', 'Lawrence, KS',
        'Lawson, MO', 'Leavenworth County, KS', 'Leavenworth, KS', 'Leawood, KS',
        'Lees Summit, MO', 'Lenexa, KS', 'Levasy, MO', 'Lexington, MO', 'Liberty, MO',
        'Linn County, KS', 'Junction City, KS', 'Linwood, KS', 'Lone Jack, MO',
        'Louisburg, KS', 'Manhattan, KS', 'Merriam, KS', 'Miami County, KS',
        'Mission Hills, KS', 'Mission Woods, KS', 'Mission, KS', 'Missouri City, MO',
        'Napoleon, MO', 'North Kansas City, MO', 'Northmoor, MO', 'Oaks, MO',
        'Oakview, MO', 'Oakwood Park, MO', 'Oakwood, MO', 'Odessa, MO', 'Olathe, KS',
        'Orrick, MO', 'Ottawa, KS', 'Overland Park, KS', 'Paola, KS', 'Parkville, MO',
        'Peculiar, MO', 'Platte City, MO', 'Fort Riley, KS', 'Platte County, MO',
        'Platte Woods, MO', 'Pleasant Hill, MO', 'Pleasant Valley, MO', 'Prairie Village, KS',
        'Randolph, MO', 'Ray County, MO', 'Raymore, MO', 'Raytown, MO', 'Richmond, MO',
        'River Bend, MO', 'Riverside, MO', 'Roeland Park, KS', 'Shawnee, KS',
        'Sibley, MO', 'Smithville, MO', 'Spring Hill, KS', 'Sugar Creek, MO',
        'Tonganoxie, KS', 'Topeka, KS', 'Unity Village, MO', 'Weatherby Lake, MO',
        'Wellington, MO', 'Westwood Hills, KS', 'Westwood, KS', 'Wyandotte County, KS'
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section - REFRESHED */}
            <section className="relative py-32 bg-slate-900 text-white overflow-hidden text-center">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px]"></div>

                <div className="container-custom relative z-10">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-amber-500 font-bold text-xs mb-8 uppercase tracking-widest border border-white/20 backdrop-blur-md">
                            <MapIcon size={16} />
                            Regional Coverage
                        </div>
                        <h1 className="mb-6 font-display font-bold text-5xl md:text-8xl tracking-tight uppercase leading-[0.9]">
                            Our Service <br />
                            <span className="text-amber-500">Areas</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium italic">
                            Quicksilver provides premium airport shuttle service throughout the Kansas City metro
                            and surrounding communities. Available 24/7, wherever you need us.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Major Destinations Category Grid */}
            <section className="section bg-white">
                <div className="container-custom">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="mb-4 font-display text-4xl font-bold text-slate-900 uppercase tracking-tight">Major Destinations</h2>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto italic font-medium">
                                Direct transfers to all major hubs, venues, and stadiums in the region.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {categories.map((cat, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div className="bg-slate-50 border border-slate-100 p-8 rounded-[40px] hover:shadow-2xl hover:bg-white transition-all h-full group border-b-4 border-b-transparent hover:border-b-amber-500">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                                        {cat.icon}
                                    </div>
                                    <h3 className="text-2xl font-display font-bold mb-6 text-slate-900 uppercase tracking-tight">{cat.title}</h3>
                                    <ul className="space-y-4">
                                        {cat.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                                                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2.5 flex-shrink-0"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    {/* Districts & Institutions */}
                    <FadeIn>
                        <div className="bg-slate-900 rounded-[50px] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-10">
                                    <Building className="text-amber-500" size={40} />
                                    <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight">Key Districts & Institutions</h2>
                                </div>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
                                    {majorDistricts.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors cursor-default group">
                                            <div className="w-2 h-2 bg-amber-500 rounded-full group-hover:scale-150 transition-transform"></div>
                                            <span className="font-medium text-lg tracking-tight">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Cities & Communities Grid */}
            <section className="section bg-slate-50 border-y border-slate-100">
                <div className="container-custom">
                    <FadeIn>
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full border border-slate-200 mb-6 shadow-sm">
                                <MapIcon className="text-amber-500" size={20} />
                                <span className="font-bold text-slate-900 tracking-widest uppercase text-sm">Full Geographic Reach</span>
                            </div>
                            <h2 className="mb-4 font-display text-4xl md:text-5xl font-bold text-slate-900 uppercase tracking-tight">Cities & Communities</h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                                We provide 24/7 door-to-door service to over 100 cities across Missouri and Kansas.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {cities.map((city, index) => (
                            <FadeIn key={index} delay={(index % 4) * 0.05}>
                                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-amber-500/30 transition-all flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                                        <MapPin size={20} />
                                    </div>
                                    <span className="font-bold text-slate-700 group-hover:text-slate-900 transition-colors tracking-tight text-lg">{city}</span>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coverage Map Info */}
            <section className="section bg-white">
                <div className="container-custom">
                    <FadeIn>
                        <div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden text-white">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
                            <h2 className="mb-6 font-display text-4xl font-bold relative z-10">Can&apos;t Find Your Location?</h2>
                            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto relative z-10">
                                We serve many additional locations throughout Kansas and Missouri beyond this list.
                                Our fleet is mobile and ready for special dispatch requests.
                                Call us to confirm availability for your specific area.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                                <a
                                    href="tel:913-262-0905"
                                    className="btn btn-primary py-4 px-10 text-xl flex items-center justify-center gap-3"
                                >
                                    <Phone size={24} />
                                    (913) 262-0905
                                </a>
                                <Link
                                    href="/contact"
                                    className="btn btn-secondary py-4 px-10 text-xl"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Service Features CTA */}
            <section className="py-20 bg-amber-500 text-slate-900">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        <FadeIn delay={0.1}>
                            <div className="text-center group">
                                <div className="text-6xl font-display font-extrabold mb-4 group-hover:scale-110 transition-transform">24/7</div>
                                <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Round-the-Clock</h3>
                                <p className="font-medium opacity-80 uppercase text-xs">Always at your service</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="text-center group border-y md:border-y-0 md:border-x border-slate-900/10 py-10 md:py-0">
                                <div className="text-6xl font-display font-extrabold mb-4 group-hover:scale-110 transition-transform">40+</div>
                                <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Years of service</h3>
                                <p className="font-medium opacity-80 uppercase text-xs">Since 1982 in KC</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className="text-center group">
                                <div className="text-6xl font-display font-extrabold mb-4 group-hover:scale-110 transition-transform">$35</div>
                                <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Starting Fare</h3>
                                <p className="font-medium opacity-80 uppercase text-xs">Premium Value Pricing</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </main>
    );
}
