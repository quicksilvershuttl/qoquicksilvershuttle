import { Metadata } from 'next';
import { MapPin, Phone, ArrowRight, Plane, ShieldCheck, Zap, Sparkles, Navigation } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';

export const metadata: Metadata = {
    title: 'Airport Shuttle Service | All Kansas City Locations | Quicksilver',
    description: 'Quicksilver Airport Shuttle serves all Kansas City metro locations. View our complete service area coverage for MCI airport transportation.',
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
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative py-32 bg-slate-900 text-white overflow-hidden text-center">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px]"></div>

                <div className="container-custom relative z-10">
                    <FadeIn>
                        <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/20 shadow-2xl">
                            <Plane className="text-amber-500" size={52} />
                        </div>
                        <h1 className="mb-6 font-display font-bold text-5xl md:text-7xl tracking-tight uppercase">Airport Shuttle</h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
                            Premium KCI airport transportation serving the entire Kansas City metropolitan area.
                            Reliable, fixed-rate transfers since 1982.
                        </p>
                        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/reservation" className="btn btn-primary text-2xl py-6 px-12 group">
                                Book Your Ride
                                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={24} />
                            </Link>
                            <a href={`tel:${phone.replace(/\D/g, '')}`} className="btn border-2 border-white/20 text-white text-2xl py-6 px-12 hover:bg-white/10 transition-all font-display">
                                {phone}
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Service Pillars */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <MapPin />, title: 'Door-to-Door', desc: 'Direct pickup from your home or office' },
                            { icon: <Navigation />, title: '24/7 Service', desc: 'Any time, day or night availability' },
                            { icon: <Zap />, title: 'Fixed Rates', desc: 'No surcharges or hidden fees' },
                            { icon: <ShieldCheck />, title: 'Flight Tracked', desc: 'We monitor your flight status live' }
                        ].map((feature, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div className="bg-slate-50 p-8 rounded-[30px] border border-slate-100 text-center group hover:bg-white hover:shadow-xl transition-all h-full">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-amber-500 shadow-sm group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-slate-900 uppercase tracking-tight">{feature.title}</h3>
                                    <p className="text-slate-600 font-medium leading-relaxed">{feature.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Area Hubs */}
            <section className="section bg-slate-50">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-amber-500 font-bold text-xs mb-6 uppercase tracking-widest border border-slate-800">
                                <Sparkles size={14} />
                                Regional Coverage
                            </div>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 uppercase tracking-tight">Popular Service Hubs</h2>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-xl text-slate-600 max-w-md font-medium italic">
                                Most requested pickup and dropoff portals across the metro.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
                        {locations.filter(loc => loc.popular).map((location, i) => (
                            <FadeIn key={location.slug} delay={i * 0.1}>
                                <Link
                                    href={`/airport-shuttle/${location.slug}`}
                                    className="bg-white p-10 rounded-[40px] text-center group hover:shadow-2xl hover:border-amber-500/30 border border-slate-100 transition-all flex flex-col items-center h-full shadow-lg relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full group-hover:bg-amber-500/10 transition-colors"></div>
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner text-amber-500">
                                        <MapPin size={32} />
                                    </div>
                                    <h3 className="text-xl font-display font-bold mb-4 text-slate-900 uppercase tracking-tight relative z-10">{location.name}</h3>
                                    <span className="mt-auto text-amber-600 font-black uppercase tracking-widest text-[10px] flex items-center gap-2">
                                        Explore Details
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full Network Index */}
            <section className="section bg-white border-y border-slate-100">
                <div className="container-custom">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl font-bold text-slate-900 uppercase tracking-tight">Full Metro Coverage</h2>
                            <p className="text-lg text-slate-500 font-medium">Over 100 cities served with local expertise and executive care.</p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {locations.map((location, i) => (
                            <FadeIn key={location.slug} delay={i * 0.05}>
                                <Link
                                    href={`/airport-shuttle/${location.slug}`}
                                    className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between group hover:border-amber-500/30 hover:bg-white transition-all shadow-sm"
                                >
                                    <span className="font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{location.name}</span>
                                    <ArrowRight size={16} className="text-slate-300 group-hover:text-amber-500 transition-colors -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100" />
                                </Link>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px]"></div>
                <div className="container-custom relative z-10">
                    <FadeIn>
                        <h2 className="mb-8 font-display text-4xl md:text-6xl font-bold uppercase tracking-tight">Fly Confident & Reassured</h2>
                        <p className="text-xl mb-12 text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium capitalize">
                            reliable airport shuttle for every corner of the kansas city metropolitan region.
                        </p>
                        <Link href="/reservation" className="btn btn-primary text-2xl px-12 py-6">
                            Lock In Your Pickup
                            <ArrowRight size={28} className="ml-2" />
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
