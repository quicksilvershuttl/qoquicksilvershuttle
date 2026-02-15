import { Metadata } from 'next';
import { Search, Phone, Mail, ArrowRight, Sparkles, Hash } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';

export const metadata: Metadata = {
    title: 'Find Your Reservation | Quicksilver Airport Shuttle',
    description: 'Look up your existing Quicksilver Airport Shuttle reservation. View, modify, or cancel your booking.',
};

export default function FindReservationPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative py-32 bg-slate-900 text-white overflow-hidden text-center">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px]"></div>
                <div className="container-custom relative z-10">
                    <FadeIn>
                        <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/20 shadow-2xl rotate-12">
                            <Search className="text-amber-500" size={52} />
                        </div>
                        <h1 className="mb-6 font-display font-bold text-5xl md:text-7xl tracking-tight uppercase">Find Reservation</h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium italic">
                            Access your existing booking to view trip details, make necessary adjustments, or manage cancellations.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Search Form */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <FadeIn>
                            <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl border border-slate-100 relative -mt-32 z-20">
                                <div className="text-center mb-16">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-amber-500 font-bold text-xs mb-6 uppercase tracking-widest border border-slate-800">
                                        <Sparkles size={14} />
                                        Secure Retrieval
                                    </div>
                                    <h2 className="font-display text-4xl font-bold text-slate-900 uppercase tracking-tight">Manage Your Booking</h2>
                                </div>

                                <form className="space-y-10 max-w-2xl mx-auto">
                                    <div className="space-y-4">
                                        <label htmlFor="confirmationNumber" className="block text-sm font-black text-slate-900 uppercase tracking-[0.2em] ml-2">
                                            Confirmation Number *
                                        </label>
                                        <div className="relative">
                                            <Hash className="absolute left-6 top-1/2 -translate-y-1/2 text-amber-500" size={20} />
                                            <input
                                                type="text"
                                                id="confirmationNumber"
                                                name="confirmationNumber"
                                                required
                                                className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none font-mono font-black text-slate-900 tracking-wider placeholder:text-slate-400 placeholder:font-sans placeholder:font-medium placeholder:tracking-normal"
                                                placeholder="QS-XXXXX-XXXX"
                                            />
                                        </div>
                                        <p className="text-xs text-slate-400 ml-2 font-bold uppercase tracking-widest">
                                            Located in your confirmation email sent after booking.
                                        </p>
                                    </div>

                                    <div className="space-y-4 text-left">
                                        <label htmlFor="email" className="block text-sm font-black text-slate-900 uppercase tracking-[0.2em] ml-2">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-amber-500" size={20} />
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none font-bold text-slate-900 placeholder:text-slate-400"
                                                placeholder="Email used during reservation"
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-full text-2xl py-6 flex items-center justify-center gap-4 group"
                                        >
                                            <Search size={28} className="group-hover:scale-110 transition-transform" />
                                            Retrieve Reservation
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </FadeIn>

                        {/* Help Support Section */}
                        <div className="mt-28 text-center">
                            <FadeIn delay={0.2}>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 font-bold text-sm mb-6 uppercase tracking-widest border border-amber-500/20">
                                    Need Professional Assistance?
                                </div>
                                <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900 uppercase tracking-tight">Can&apos;t find your details?</h3>
                                <p className="text-xl text-slate-600 mb-16 max-w-2xl mx-auto font-medium italic">
                                    Our executive dispatchers are available 24/7 to help you locate and manage your premium transportation booking.
                                </p>
                            </FadeIn>

                            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                                <FadeIn delay={0.3}>
                                    <a
                                        href="tel:913-262-0905"
                                        className="bg-white border border-slate-100 p-12 rounded-[40px] hover:shadow-2xl hover:border-amber-500/30 transition-all flex flex-col items-center group shadow-xl relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                                        <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors shadow-sm relative z-10">
                                            <Phone className="text-amber-500 group-hover:text-slate-900 transition-colors" size={40} />
                                        </div>
                                        <h4 className="text-2xl font-display font-bold mb-4 text-slate-900 uppercase tracking-tight relative z-10">Direct Support</h4>
                                        <p className="text-amber-600 font-black text-3xl tracking-tighter relative z-10">(913) 262-0905</p>
                                        <span className="mt-8 bg-slate-900 text-white py-2 px-4 rounded-full text-xs font-bold uppercase tracking-widest relative z-10 border border-slate-800">24/7 Priority Line</span>
                                    </a>
                                </FadeIn>

                                <FadeIn delay={0.4}>
                                    <Link
                                        href="/contact"
                                        className="bg-white border border-slate-100 p-12 rounded-[40px] hover:shadow-2xl hover:border-amber-500/30 transition-all flex flex-col items-center group shadow-xl relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                                        <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors shadow-sm relative z-10">
                                            <Mail className="text-amber-500 group-hover:text-slate-900 transition-colors" size={40} />
                                        </div>
                                        <h4 className="text-2xl font-display font-bold mb-4 text-slate-900 uppercase tracking-tight relative z-10">Online Inquiry</h4>
                                        <span className="text-amber-600 font-black text-3xl tracking-tighter flex items-center gap-3 relative z-10 uppercase">
                                            Help Center
                                            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                                        </span>
                                        <span className="mt-8 bg-slate-50 text-slate-500 py-2 px-4 rounded-full text-xs font-bold uppercase tracking-widest relative z-10 border border-slate-100">Fast Response</span>
                                    </Link>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
