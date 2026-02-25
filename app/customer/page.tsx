import { Metadata } from 'next';
import Link from 'next/link';
import { User, Phone, Search, CalendarPlus, ShieldCheck, Zap, Award, Star, ArrowRight, Clock } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import HeroImage from '../components/HeroImage';
import BackgroundOverlay from '../components/BackgroundOverlay';

export const metadata: Metadata = {
    title: 'Customer Portal | Manage Your Airport Shuttle Bookings | Quicksilver',
    description: 'Access the Quicksilver customer portal to make new reservations, manage existing bookings, or contact dispatch 24/7. Kansas City\'s premium airport shuttle since 1982.',
};

export default function CustomerPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* ═══ HERO SECTION ═══ */}
            <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-gradient-to-br from-[#0c1d3d] via-[#122b5e] to-[#0f2044] pt-24 pb-12">
                <div className="absolute inset-0 z-0">
                    <BackgroundOverlay />
                    <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[180px] animate-pulse-glow pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[150px] animate-float pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-8 lg:pt-0">

                        <FadeIn className="text-white flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 mb-7 px-5 py-2 bg-white/[0.07] backdrop-blur-xl rounded-full border border-white/[0.12]">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
                                <p className="text-[11px] font-bold tracking-[0.25em] text-white/80 uppercase">Premium Member Access</p>
                            </div>

                            <h1 className="mb-4 sm:mb-6 font-display font-black leading-[1.1] text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white drop-shadow-lg text-center lg:text-left">
                                Customer <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-blue-300 drop-shadow-xl">
                                    Portal
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl text-center lg:text-left font-light mx-auto lg:mx-0">
                                Streamlined management for your premium airport transportation. Book, manage, or get support — all in one place.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto mb-10 sm:mb-12">
                                <Link
                                    href="/reservation"
                                    className="btn btn-cta text-base sm:text-lg px-6 py-4 sm:px-9 sm:py-5 group shadow-[0_0_40px_rgba(249,115,22,0.25)] hover:shadow-[0_0_60px_rgba(249,115,22,0.45)] border-none w-full sm:w-auto flex justify-center items-center"
                                >
                                    <span>Book a Ride</span>
                                    <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform" size={20} />
                                </Link>
                                <a
                                    href="tel:913-262-0905"
                                    className="group flex items-center justify-center gap-2 sm:gap-3 text-white transition-all py-4 px-6 sm:px-7 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/[0.06] backdrop-blur-sm w-full sm:w-auto"
                                >
                                    <Phone size={18} className="text-blue-300 group-hover:text-white transition-colors" />
                                    <span className="font-bold tracking-wide text-sm sm:text-base">(913) 262-0905</span>
                                </a>
                            </div>

                            {/* Social Proof — identical to homepage */}
                            <div className="flex flex-col sm:flex-row items-center gap-5 mb-10 pt-8 border-t border-white/10 w-full lg:w-auto mx-auto lg:mx-0">
                                <div className="flex items-center -space-x-3">
                                    {[
                                        'https://randomuser.me/api/portraits/men/32.jpg',
                                        'https://randomuser.me/api/portraits/women/44.jpg',
                                        'https://randomuser.me/api/portraits/men/46.jpg',
                                        'https://randomuser.me/api/portraits/women/12.jpg',
                                        'https://randomuser.me/api/portraits/men/14.jpg'
                                    ].map((imgSrc, i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0f2044] shadow-lg overflow-hidden flex-shrink-0">
                                            <img src={imgSrc} alt="Verified Quicksilver customer" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full bg-white/10 border-2 border-[#0f2044] flex items-center justify-center text-white/70 text-[10px] font-bold backdrop-blur-sm z-10">+4K</div>
                                </div>
                                <div className="flex flex-col gap-0.5 items-center sm:items-start">
                                    <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
                                        {[...Array(5)].map((_, i) => (<Star key={i} fill="currentColor" size={14} />))}
                                        <span className="text-white/60 text-sm ml-1 font-medium">4.8/5</span>
                                    </div>
                                    <p className="text-sm text-slate-400"><strong className="text-white/80">Rick, Scott & 4,000+ riders</strong> trust Quicksilver</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap xl:flex-nowrap whitespace-nowrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mx-auto lg:mx-0">
                                {[
                                    { label: 'Priority Support', icon: <ShieldCheck size={16} className="text-[#2463eb]" /> },
                                    { label: 'Best Rates', icon: <Award size={16} className="text-amber-500" /> },
                                    { label: '24/7 Dispatch', icon: <Clock size={16} className="text-[#2463eb]" /> },
                                    { label: '5-Star Service', icon: <Star size={16} className="text-amber-400" fill="currentColor" /> },
                                ].map((badge, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-white text-[#0f2044] px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-lg shadow-black/20 hover:-translate-y-1 transition-transform">
                                        {badge.icon}
                                        <span>{badge.label}</span>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.25} className="w-full relative flex items-center justify-center pb-8 lg:pb-0">
                            <div className="relative w-full max-w-lg lg:max-w-full mx-auto">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#2463eb]/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"></div>
                                <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-auto lg:h-[400px] drop-shadow-[0_20px_60px_rgba(36,99,235,0.4)]">
                                    <HeroImage
                                        src="/Home page images/Saloon Class.png"
                                        alt="Quicksilver customer portal manage bookings"
                                        priority
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none"></div>
            </section>

            {/* Quick Actions */}
            <section className="section bg-slate-50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto -mt-28 relative z-20">
                        <FadeIn delay={0.1}>
                            <Link href="/reservation" className="bg-white border border-slate-100 p-10 rounded-[40px] text-center group hover:shadow-2xl hover:border-blue-100 transition-all block h-full shadow-xl">
                                <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:bg-blue-600 transition-colors border border-slate-100">
                                    <CalendarPlus className="text-blue-600 group-hover:text-white transition-colors" size={36} />
                                </div>
                                <h3 className="text-xl font-display font-black mb-3 text-[#0c1d37] uppercase tracking-tight">New Booking</h3>
                                <p className="text-slate-500 font-medium leading-relaxed mb-8 text-sm">Schedule a new premium airport shuttle for your upcoming trip.</p>
                                <span className="text-blue-600 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                                    Book Now <Zap size={14} />
                                </span>
                            </Link>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <Link href="/find-reservation" className="bg-white border border-slate-100 p-10 rounded-[40px] text-center group hover:shadow-2xl hover:border-blue-100 transition-all block h-full shadow-xl">
                                <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:bg-blue-600 transition-colors border border-slate-100">
                                    <Search className="text-blue-600 group-hover:text-white transition-colors" size={36} />
                                </div>
                                <h3 className="text-xl font-display font-black mb-3 text-[#0c1d37] uppercase tracking-tight">Find Booking</h3>
                                <p className="text-slate-500 font-medium leading-relaxed mb-8 text-sm">Look up or manage your existing reservation with your confirmation number.</p>
                                <span className="text-blue-600 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                                    Find Reservation <Zap size={14} />
                                </span>
                            </Link>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <a href="tel:913-262-0905" className="bg-[#0c1d37] text-white p-10 rounded-[40px] text-center group hover:shadow-2xl transition-all block h-full shadow-xl hover:bg-[#162d4f] relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-bl-full -mr-8 -mt-8"></div>
                                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/10 group-hover:scale-110 transition-transform">
                                    <Phone size={36} className="text-blue-300" />
                                </div>
                                <h3 className="text-xl font-display font-black mb-2 uppercase tracking-tight">Call Support</h3>
                                <p className="text-white font-black text-2xl mb-2 tracking-tighter">(913) 262-0905</p>
                                <p className="text-white/50 text-xs font-bold uppercase tracking-[0.2em] mb-8">24/7 Priority Line</p>
                                <span className="bg-white/10 border border-white/20 py-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-widest">Dedicated Dispatch</span>
                            </a>
                        </FadeIn>
                    </div>

                    {/* Benefits */}
                    <div className="mt-24 max-w-5xl mx-auto">
                        <FadeIn>
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-xs mb-4 uppercase tracking-widest border border-blue-100">
                                    <Star size={14} />
                                    Why Travel With Us?
                                </div>
                                <h2 className="font-display text-4xl font-black text-[#0c1d37] uppercase tracking-tight">Premium Benefits</h2>
                            </div>
                        </FadeIn>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: <ShieldCheck className="text-blue-600" size={28} />, title: 'Guaranteed Reliability', desc: 'Your vehicle is dispatched and on time, every single trip.' },
                                { icon: <Award className="text-blue-600" size={28} />, title: 'Best Local Rates', desc: 'Flat-rate pricing — no surge, no surprises, ever.' },
                                { icon: <Zap className="text-blue-600" size={28} />, title: 'Priority Dispatch', desc: 'Portal bookings receive priority in our scheduling system.' },
                            ].map((b, i) => (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <div className="bg-white p-8 rounded-3xl border border-slate-100 flex items-start gap-5 hover:border-blue-100 transition-colors shadow-sm hover:shadow-lg">
                                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex-shrink-0 flex items-center justify-center border border-blue-100">
                                            {b.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-black text-[#0c1d37] mb-2 uppercase tracking-tight">{b.title}</h4>
                                            <p className="text-slate-500 font-medium leading-relaxed text-sm">{b.desc}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
