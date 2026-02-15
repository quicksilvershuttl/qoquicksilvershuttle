import { Metadata } from 'next';
import Link from 'next/link';
import { User, Phone, Search, CalendarPlus, ShieldCheck, Zap, Award, Star } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export const metadata: Metadata = {
    title: 'Customer Portal | Quicksilver Airport Shuttle',
    description: 'Access your Quicksilver customer account. View reservations, manage bookings, and update preferences.',
};

export default function CustomerPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative py-32 bg-slate-900 text-white overflow-hidden text-center">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px]"></div>
                <div className="container-custom relative z-10">
                    <FadeIn>
                        <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/20 shadow-2xl rotate-3">
                            <User className="text-amber-500" size={52} />
                        </div>
                        <h1 className="mb-6 font-display font-bold text-5xl md:text-7xl tracking-tight uppercase">Customer Portal</h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium italic">
                            Streamlined management for your premium airport transportation needs.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Quick Actions */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto -mt-24 relative z-20">
                        <FadeIn delay={0.1}>
                            <Link href="/reservation" className="bg-white border border-slate-100 p-12 rounded-[40px] text-center group hover:shadow-2xl hover:border-amber-500/30 transition-all block h-full shadow-xl">
                                <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                                    <CalendarPlus className="text-amber-500 group-hover:text-slate-900 transition-colors" size={40} />
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-4 text-slate-900 uppercase tracking-tight">New Booking</h3>
                                <p className="text-slate-500 font-medium leading-relaxed mb-8">Schedule a new premium airport shuttle or car service for your upcoming trip.</p>
                                <span className="text-amber-600 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                                    Book Now <Zap size={16} />
                                </span>
                            </Link>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <Link href="/find-reservation" className="bg-white border border-slate-100 p-12 rounded-[40px] text-center group hover:shadow-2xl hover:border-amber-500/30 transition-all block h-full shadow-xl">
                                <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                                    <Search className="text-amber-500 group-hover:text-slate-900 transition-colors" size={40} />
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-4 text-slate-900 uppercase tracking-tight">Find Booking</h3>
                                <p className="text-slate-500 font-medium leading-relaxed mb-8">Look up, modify, or manage your existing reservations with your confirmation number.</p>
                                <span className="text-amber-600 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                                    Manage Reservation <Zap size={16} />
                                </span>
                            </Link>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <a href="tel:913-262-0905" className="bg-slate-900 text-white p-12 rounded-[40px] text-center group hover:shadow-2xl transition-all block h-full relative overflow-hidden shadow-xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-50"></div>
                                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors relative z-10">
                                    <Phone size={40} className="text-amber-500 group-hover:text-slate-900 transition-colors" />
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-4 relative z-10 uppercase tracking-tight">Call Support</h3>
                                <p className="text-3xl text-white font-black mb-2 relative z-10 tracking-tighter">(913) 262-0905</p>
                                <p className="text-amber-400 text-sm relative z-10 font-bold uppercase tracking-[0.2em] mb-8">24/7 Priority Line</p>
                                <span className="bg-white/10 py-2 px-4 rounded-full text-xs font-bold uppercase tracking-widest relative z-10 border border-white/10">Dedicated Dispatch</span>
                            </a>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Preferred Benefits */}
            <section className="section bg-slate-50">
                <div className="container-custom">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 font-bold text-sm mb-4 uppercase tracking-widest border border-amber-500/20">
                                <Star size={16} />
                                Why Travel With Us?
                            </div>
                            <h2 className="font-display text-4xl font-bold text-slate-900 uppercase tracking-tight">Premium Member Benefits</h2>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <ShieldCheck className="text-amber-500" size={32} />,
                                title: 'Guaranteed Reliability',
                                desc: 'Our reservation system ensures your vehicle is dispatched and on time, every time.'
                            },
                            {
                                icon: <Award className="text-amber-500" size={32} />,
                                title: 'Best Local Rates',
                                desc: 'Get access to direct, flat-rate pricing without the surge of rideshare apps.'
                            },
                            {
                                icon: <Zap className="text-amber-500" size={32} />,
                                title: 'Priority Dispatch',
                                desc: 'Customer portal bookings receive priority in our internal scheduling system.'
                            }
                        ].map((benefit, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="bg-white p-8 rounded-3xl border border-slate-100 flex items-start gap-6 hover:border-amber-500/30 transition-colors">
                                    <div className="w-16 h-16 bg-slate-50 md:bg-white rounded-2xl flex-shrink-0 flex items-center justify-center shadow-sm">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{benefit.title}</h4>
                                        <p className="text-slate-500 font-medium leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Notice */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <FadeIn>
                        <div className="max-w-3xl mx-auto text-center border-t border-slate-100 pt-16">
                            <div className="inline-flex items-center gap-3 text-slate-400 mb-4">
                                <ShieldCheck size={20} />
                                <span className="text-xs font-bold uppercase tracking-widest">Secure Portal</span>
                            </div>
                            <p className="text-slate-400 text-sm font-medium leading-loose">
                                Your personal information and booking data are protected with 256-bit encryption.
                                Quicksilver Airport Shuttle values your privacy and security.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
