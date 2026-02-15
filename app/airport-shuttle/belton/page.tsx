import { Metadata } from 'next';
import {
    MapPin, Phone, ArrowRight, ShieldCheck, Clock,
    Users, CheckCircle2, Star, Calculator, Info,
    Plane, Car, Gift, Zap, Sparkles, Luggage, Wallet, Navigation
} from 'lucide-react';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';

export const metadata: Metadata = {
    title: 'Airport Shuttle Belton | Reliable Ride to KCI & MCI',
    description: 'The best airport shuttle and car service in Belton, MO. Professional drivers, fixed rates, and 24/7 service from Belton to KCI Airport and back.',
};

export default function BeltonShuttlePage() {
    const phone = '(913) 262-0905';

    const features = [
        {
            title: 'Easy to Use',
            desc: 'Book your airport shuttle and airport car service from anywhere in the city via our seamless online portal.',
            icon: <Zap className="text-amber-500" size={32} />
        },
        {
            title: 'Budget & Occasion',
            desc: 'A car service for every budget and occasion—business partners, parties, or trips with heavy luggage.',
            icon: <Wallet className="text-amber-500" size={32} />
        },
        {
            title: 'Safe & Reliable',
            desc: '24/7 shuttle tracking and professional weather navigation to ensure you arrive safely and on time.',
            icon: <Navigation className="text-amber-500" size={32} />
        },
        {
            title: 'Luxury & Clean',
            desc: 'All our vehicles come equipped with modern features and are maintained to the highest cleanliness standards.',
            icon: <Sparkles className="text-amber-500" size={32} />
        }
    ];

    const fleetOptions = [
        { title: '4-Seater Sedan', desc: 'Perfect for solo travelers or small groups.', icon: <Car size={24} /> },
        { title: '6-Seater SUV', desc: 'Spacious and comfortable for family trips.', icon: <Users size={24} /> },
        { title: '8-Seater Van', desc: 'The largest capacity variant for group transfers.', icon: <Users size={24} /> }
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
                            <Plane size={14} />
                            Belton Premium Dispatch
                        </div>
                        <h1 className="mb-6 font-display font-bold text-5xl md:text-7xl tracking-tight uppercase leading-[0.9]">
                            Belton to KCI <br />
                            <span className="text-amber-500">Airport Shuttle</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium italic">
                            The most reliable, safe, and professional airport car service from anywhere in Belton to KCI and back.
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

            {/* Intro Content */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <FadeIn>
                            <div className="bg-slate-50 border-l-8 border-amber-500 p-12 rounded-r-[40px] shadow-sm mb-20">
                                <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-6 uppercase tracking-tight">Your Dedicated Belton Service</h2>
                                <p className="text-xl text-slate-700 leading-relaxed">
                                    If you live in Belton and looking for a ride or a airport shuttle service from Belton to KCI or from Kansas City international airport to Belton,
                                    <strong> Quicksilver airport shuttle is here to serve you!</strong> Here at Quicksilver, we provide the best airport shuttle and airport car service
                                    from all over Belton to KCI Airport and from KCI Airport to back in the city.
                                </p>
                            </div>
                        </FadeIn>

                        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                            <FadeIn>
                                <div>
                                    <h2 className="font-display text-4xl font-bold mb-6 text-slate-900 uppercase tracking-tight">Guaranteed Satisfaction</h2>
                                    <p className="text-xl text-slate-600 leading-relaxed mb-8">
                                        Customer satisfaction is one of our primary concerns. We make sure everything goes according to our user&apos;s plan.
                                        Our dedicated team ensures providing you with the best vehicles in the market at competitive, transparent rates.
                                    </p>
                                    <div className="text-amber-600 font-black text-2xl uppercase tracking-tighter italic">
                                        Best prices! Win-win!
                                    </div>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <div className="bg-slate-900 p-10 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -mr-16 -mt-16"></div>
                                    <h3 className="text-2xl font-display font-bold mb-8 uppercase tracking-widest text-amber-500">Fleet Options</h3>
                                    <div className="space-y-6">
                                        {fleetOptions.map((v, i) => (
                                            <div key={i} className="flex items-center gap-4 group">
                                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                                                    {v.icon}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-lg">{v.title}</div>
                                                    <div className="text-slate-400 text-sm">{v.desc}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="section bg-slate-50 border-y border-slate-200/50">
                <div className="container-custom text-center">
                    <FadeIn>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 uppercase tracking-tight mb-20">Premium Features</h2>
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

            {/* Support section */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <FadeIn>
                            <h2 className="font-display text-4xl font-bold mb-8 text-slate-900 uppercase tracking-tight">Fixed & Transparent Charges</h2>
                            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                                No matter where we pick you up from and where we drop you, there will always be a fixed and transparent fee without any hidden charges.
                                Feel free to book a shuttle from us anytime you want, any day of the week.
                            </p>
                            <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-slate-900 p-10 rounded-[50px] shadow-2xl border border-slate-800">
                                <div className="flex items-center gap-4 text-left">
                                    <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-slate-900 shadow-lg">
                                        <Phone size={32} />
                                    </div>
                                    <div>
                                        <div className="text-amber-500 font-black text-xs uppercase tracking-[0.3em] mb-1">Dispatch Support</div>
                                        <div className="text-white font-display text-2xl font-bold">{phone}</div>
                                    </div>
                                </div>
                                <div className="h-px w-full md:w-px md:h-12 bg-white/10"></div>
                                <Link href="/reservation" className="btn btn-primary px-10 py-5 text-xl">
                                    Book Online Now
                                </Link>
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
                        <h2 className="mb-8 font-display text-4xl md:text-6xl font-bold uppercase tracking-tight">Ready for Belton&apos;s Best?</h2>
                        <p className="text-xl mb-12 text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
                            Book your airport shuttle or Airport car service with Quicksilver and avail the best shuttle services in Belton!
                        </p>
                        <Link href="/reservation" className="btn btn-primary text-2xl px-12 py-6">
                            Book A Reservation
                            <ArrowRight size={28} className="ml-2" />
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
