import { Metadata } from 'next';
import { Tag, Gift, Percent, Star, Users, ArrowRight, ShieldCheck, GraduationCap, MapPin, Sparkles, Building2 } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';

export const metadata: Metadata = {
    title: 'University Deals | Quicksilver Airport Shuttle Special Offers',
    description: 'Special airport shuttle rates for over 50 Kansas and Missouri colleges and universities. Save on your Kansas City airport transportation.',
};

export default function DealsPage() {
    const mainOffers = [
        {
            title: 'Round Trip Discount',
            discount: '10% OFF',
            description: 'Book both your departure and return trips together and save 10% on your total fare instantly.',
            icon: <Percent className="text-amber-500" size={40} />,
            code: 'ROUNDTRIP10',
            terms: 'Valid for all service types.'
        },
        {
            title: 'Student ID Discount',
            discount: '20% OFF',
            description: 'Active students save 20% on all airport shuttle services with a valid student identification card.',
            icon: <GraduationCap className="text-amber-500" size={40} />,
            code: 'STUDENT20',
            terms: 'Valid student ID must be presented.'
        }
    ];

    const kansasColleges = [
        { name: 'Hesston College', price: '$390.00' },
        { name: 'Barclay College', price: '$600.00' },
        { name: 'Benedictine College', price: '$65.00' },
        { name: 'Bethany College', price: '$260.00' },
        { name: 'Bethel College', price: '$380.00' },
        { name: 'Brown Mackie', price: '$340.00' },
        { name: 'Central Christian College', price: '$260.00' },
        { name: 'Kansas Christian College', price: '$55.00' },
        { name: 'Southwestern College', price: '$70.00' },
        { name: 'St. Mary\'s College', price: '$195.00' },
        { name: 'Sterling College', price: '$495.00' },
        { name: 'Tabor College', price: '$350.00' },
        { name: 'The Art Institute', price: '$60.00' },
        { name: 'Vatterott College', price: '$45.00' },
        { name: 'Manhattan Christian College', price: '$255.00' },
        { name: 'McPherson College', price: '$400.00' },
        { name: 'Saint Paul School', price: '$70.00' },
        { name: 'Emporia State University', price: '$245.00' },
        { name: 'Fort Hays State University', price: '$545.00' },
        { name: 'Friends University', price: '$50.00' },
        { name: 'Haskell Indian Nations Univ.', price: '$100.00' },
        { name: 'Kansas State University', price: '$195.00' },
        { name: 'Kansas Wesleyan University', price: '$360.00' },
        { name: 'MidAmerica Nazarene Univ.', price: '$75.00' },
        { name: 'Ottawa University', price: '$140.00' },
        { name: 'Pittsburg State University', price: '$280.00' },
        { name: 'University of Kansas', price: '$100.00' },
        { name: 'University of Saint Mary', price: '$45.00' },
        { name: 'Washburn University', price: '$120.00' },
        { name: 'Wichita State University', price: '$410.00' },
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
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative py-32 bg-slate-900 text-white overflow-hidden text-center">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px]"></div>
                <div className="container-custom relative z-10">
                    <FadeIn>
                        <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/20 shadow-2xl">
                            <Tag className="text-amber-500" size={52} />
                        </div>
                        <h1 className="mb-6 font-display font-bold text-5xl md:text-7xl tracking-tight uppercase">Special Deals</h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
                            Premium KCI airport transportation rates tailored for students, faculty, and local travelers.
                            Reliable service across Kansas and Missouri.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Featured Offers */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto -mt-24 relative z-20">
                        {mainOffers.map((deal, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div className="bg-white border border-slate-100 p-10 rounded-[40px] group hover:shadow-2xl hover:border-amber-500/30 transition-all flex flex-col h-full shadow-xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-[100px] group-hover:bg-amber-500/10 transition-colors"></div>
                                    <div className="flex items-start gap-6 mb-8 relative z-10">
                                        <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                                            {deal.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-display font-bold mb-2 text-slate-900 uppercase tracking-tight">{deal.title}</h3>
                                            <div className="inline-block px-4 py-1 bg-amber-500 text-slate-900 font-black rounded-full text-xs tracking-[0.2em] uppercase">
                                                {deal.discount}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 mb-8 font-medium leading-relaxed relative z-10">{deal.description}</p>
                                    <div className="mt-auto pt-6 border-t border-slate-100 relative z-10 flex items-center justify-between">
                                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Code: {deal.code}</span>
                                        <Link href="/reservation" className="text-amber-600 font-black uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-3 transition-all">
                                            Apply Offer <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* University Rates Section */}
            <section className="section bg-slate-50 border-t border-slate-200/50">
                <div className="container-custom">
                    <FadeIn>
                        <div className="text-center mb-24">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-amber-500 font-bold text-xs mb-6 uppercase tracking-widest border border-slate-800">
                                <Building2 size={16} />
                                Campus Direct Fares
                            </div>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 uppercase tracking-tight mb-4">University Special Rates</h2>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">Flat-rate transportation connecting students and faculty to KCI Airport.</p>
                        </div>
                    </FadeIn>

                    <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
                        {/* Kansas Schools */}
                        <div>
                            <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-6">
                                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-slate-900">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="text-3xl font-display font-bold text-slate-900 uppercase tracking-tight">Kansas Institutions</h3>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {kansasColleges.map((school, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 flex justify-between items-center group hover:border-amber-500/30 transition-colors shadow-sm">
                                        <span className="font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{school.name}</span>
                                        <span className="font-black text-amber-600 tracking-tighter">{school.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Missouri Schools */}
                        <div>
                            <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-6">
                                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-amber-500">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="text-3xl font-display font-bold text-slate-900 uppercase tracking-tight">Missouri Institutions</h3>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {missouriColleges.map((school, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 flex justify-between items-center group hover:border-amber-500/30 transition-colors shadow-sm">
                                        <span className="font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{school.name}</span>
                                        <span className="font-black text-amber-600 tracking-tighter">{school.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px]"></div>
                <div className="container-custom relative z-10">
                    <FadeIn>
                        <h2 className="mb-8 font-display text-4xl md:text-6xl font-bold uppercase tracking-tight">Lock In Your Student Rate</h2>
                        <p className="text-xl mb-12 text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
                            Don&apos;t leave your travel to chance. Book your flat-rate university transfer today and travel with confidence.
                        </p>
                        <Link
                            href="/reservation"
                            className="btn btn-primary text-2xl px-12 py-6"
                        >
                            Book Your Pickup Now
                            <ArrowRight size={28} className="ml-2" />
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
