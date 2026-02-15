import { Metadata } from 'next';
import {
    MapPin, Phone, ArrowRight, ShieldCheck, Clock,
    Users, CheckCircle2, Star, Calculator, Info,
    Plane, Car, Gift, Zap, Sparkles, Luggage, Wallet, Navigation, Building2
} from 'lucide-react';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';

export const metadata: Metadata = {
    title: 'Airport Shuttle Wichita | Car Service to KCI & MCI',
    description: 'Premier airport transportation from Wichita to KCI. Reliable, safe, and professional car service. Book your Wichita to Kansas City shuttle 24/7.',
};

export default function WichitaShuttlePage() {
    const phone = '(913) 262-0905';

    const features = [
        {
            title: 'Easy to Use',
            desc: 'Book your shuttle from anywhere in the city via our effortless online reservation system.',
            icon: <Zap className="text-amber-500" size={32} />
        },
        {
            title: 'Budget & Occasion',
            desc: 'A car for every budget—business partners, parties, or trips with heavy luggage.',
            icon: <Wallet className="text-amber-500" size={32} />
        },
        {
            title: 'Safe & Reliable',
            desc: '24/7 shuttle tracking and specialized weather navigation for maximum passenger safety.',
            icon: <Navigation className="text-amber-500" size={32} />
        },
        {
            title: 'Luxury & Clean',
            desc: 'Modern, feature-equipped vehicles maintained to strict premium cleanliness standards.',
            icon: <Sparkles className="text-amber-500" size={32} />
        }
    ];

    const fleetOptions = [
        { title: 'Economy Class', desc: 'Affordable, reliable transportation for daily travel.', icon: <Car size={24} /> },
        { title: 'Saloon Class', desc: 'Premium comfort for corporate or executive needs.', icon: <CheckCircle2 size={24} /> },
        { title: 'Business Class', desc: 'The pinnacle of luxury and professional transit.', icon: <Building2 size={24} /> }
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative py-32 bg-slate-900 text-white overflow-hidden text-center">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px]"></div>

                <div className="container-custom relative z-10">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-amber-500 font-bold text-xs mb-8 uppercase tracking-widest border border-white/20 backdrop-blur-md">
                            <MapPin size={14} />
                            Wichita Executive Dispatch
                        </div>
                        <h1 className="mb-6 font-display font-bold text-5xl md:text-7xl tracking-tight uppercase leading-[0.9]">
                            Wichita to KCI <br />
                            <span className="text-amber-500">Airport Car Service</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium italic">
                            Top-of-the-line transit and shuttle services connecting Kansas&apos;s largest city to KCI Airport 24/7.
                        </p>
                        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/reservation" className="btn btn-primary text-2xl py-6 px-12 group">
                                Book A Reservation
                                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={24} />
                            </Link>
                            <a href={`tel:${phone.replace(/\D/g, '')}`} className="btn border-2 border-white/20 text-white text-2xl py-6 px-12 hover:bg-white/10 transition-all font-display">
                                {phone}
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Wichita Context Section */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <FadeIn>
                            <div className="bg-slate-50 border-l-8 border-amber-500 p-12 rounded-r-[40px] shadow-sm mb-20">
                                <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-6 uppercase tracking-tight">Serving the Air Capital of the World</h2>
                                <p className="text-xl text-slate-700 leading-relaxed mb-6">
                                    Wichita is the largest city in Kansas, with a vibrant population and a legacy of aviation.
                                    Whether you are in prestigious areas like <strong>Riverside</strong> or <strong>College Hill</strong>, or traveling from <strong>Downtown</strong>—east of the Arkansas River and north of Kellogg—Quicksilver is your trusted link to Kansas City International.
                                </p>
                                <p className="text-lg text-slate-500 italic">
                                    Reliable, safe, and top-of-the-line transit services without any hidden charges or hidden fees.
                                </p>
                            </div>
                        </FadeIn>

                        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                            <FadeIn>
                                <div>
                                    <h2 className="font-display text-4xl font-bold mb-6 text-slate-900 uppercase tracking-tight">A Car for Everyone</h2>
                                    <p className="text-xl text-slate-600 leading-relaxed mb-8">
                                        Our economy class, saloon class, and business classes make up the largest fleet in the region.
                                        We provide well-behaved, professional drivers and clean, efficient vehicles for a perfect trip.
                                        Choose from a range of <strong>4, 6, or 8-seater</strong> options at the most competitive rates.
                                    </p>
                                    <div className="bg-slate-900 text-white p-6 rounded-2xl flex items-center gap-4">
                                        <Phone className="text-amber-500" size={32} />
                                        <div>
                                            <div className="text-xs uppercase tracking-widest text-slate-400">Dispatch Support</div>
                                            <div className="text-2xl font-bold font-display">{phone}</div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <div className="bg-slate-900 p-10 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full -mr-24 -mt-24"></div>
                                    <h3 className="text-2xl font-display font-bold mb-8 uppercase tracking-widest text-amber-500">Service Classes</h3>
                                    <div className="space-y-6">
                                        {fleetOptions.map((v, i) => (
                                            <div key={i} className="flex items-center gap-4 group">
                                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                                                    {v.icon}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-lg">{v.title}</div>
                                                    <div className="text-slate-400 text-sm italic">{v.desc}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-10 pt-10 border-t border-white/10">
                                        <p className="text-sm text-slate-400">Available from any Wichita neighborhood to KCI, or KCI to Wichita.</p>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Highlights */}
            <section className="section bg-slate-50 border-y border-slate-200/50">
                <div className="container-custom text-center">
                    <FadeIn>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 uppercase tracking-tight mb-20">The Quicksilver Standard</h2>
                    </FadeIn>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((f, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-xl hover:shadow-2xl transition-all h-full group">
                                    <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors shadow-inner">
                                        {f.icon}
                                    </div>
                                    <h3 className="text-2xl font-display font-bold mb-4 text-slate-900 uppercase">{f.title}</h3>
                                    <p className="text-slate-600 font-medium leading-relaxed">{f.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust & Transparency */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <FadeIn>
                            <h2 className="font-display text-4xl font-bold mb-8 text-slate-900 uppercase tracking-tight">Simple, Transparent Booking</h2>
                            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                                Our services do not need a long list of credentials or hectic forms.
                                Log on, select your reservation type, and enter your details. We guarantee a comfortable, luxurious ride, any day of the week.
                            </p>
                            <div className="bg-slate-900 p-12 rounded-[50px] shadow-2xl relative overflow-hidden text-left border border-slate-800">
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent"></div>
                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                                    <div className="space-y-4">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500 text-slate-900 font-black text-[10px] uppercase tracking-widest">
                                            Instant Dispatch
                                        </div>
                                        <h3 className="text-3xl font-display font-bold text-white tracking-tight">Need a Ride Right Now?</h3>
                                        <p className="text-slate-400 font-medium italic max-w-sm">
                                            Our team works day and night to ensure you get the best shuttle service in Wichita.
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-4 w-full md:w-auto">
                                        <Link href="/reservation" className="btn btn-primary py-5 px-10 text-xl font-bold">
                                            Book Securely & Save
                                        </Link>
                                        <a href={`tel:${phone.replace(/\D/g, '')}`} className="btn border border-white/20 text-white py-4 px-10 text-lg hover:bg-white/5 font-display text-center">
                                            Call Dispatch: {phone}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px]"></div>
                <div className="container-custom relative z-10">
                    <FadeIn>
                        <h2 className="mb-8 font-display text-4xl md:text-6xl font-bold uppercase tracking-tight">Ready to Journey?</h2>
                        <p className="text-xl mb-12 text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
                            Confirm your shuttle with us now and experience the premier airport car service of Wichita.
                        </p>
                        <Link href="/reservation" className="btn btn-primary text-2xl px-12 py-6">
                            Start My Reservation
                            <ArrowRight size={28} className="ml-2" />
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
