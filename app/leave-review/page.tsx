import { Metadata } from 'next';
import { Star, MessageCircle, ArrowRight, Heart, Phone, Award, Shield, Clock } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import HeroImage from '../components/HeroImage';
import BackgroundOverlay from '../components/BackgroundOverlay';

export const metadata: Metadata = {
    title: 'Leave a Review | Share Your Experience | Quicksilver Airport Shuttle',
    description: 'Love your Quicksilver ride? Leave us a 5-star Google review and help other Kansas City travelers discover the most reliable airport shuttle service since 1982.',
};

export default function LeaveReviewPage() {
    const googleReviewLink = "https://g.page/r/CXtFXPvRz-FNEBo/review";

    return (
        <main className="min-h-screen bg-white">
            {/* ═══ HERO SECTION ═══ */}
            <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-gradient-to-br from-[#0c1d3d] via-[#122b5e] to-[#0f2044] pt-24 pb-12">
                <div className="absolute inset-0 z-0">
                    <BackgroundOverlay />
                    <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-[180px] animate-pulse-glow pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[150px] animate-float pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-8 lg:pt-0">

                        <FadeIn className="text-white flex flex-col items-center lg:items-start text-center lg:text-left">
                            {/* Stars */}
                            <div className="flex gap-2 mb-7 text-amber-400">
                                {[1, 2, 3, 4, 5].map(s => (
                                    <Star key={s} size={32} fill="currentColor" />
                                ))}
                            </div>

                            <div className="inline-flex items-center gap-2 mb-7 px-5 py-2 bg-white/[0.07] backdrop-blur-xl rounded-full border border-white/[0.12]">
                                <Heart size={14} className="text-rose-400 fill-rose-400" />
                                <p className="text-[11px] font-bold tracking-[0.25em] text-white/80 uppercase">Your Voice Matters</p>
                            </div>

                            <h1 className="mb-4 sm:mb-6 font-display font-black leading-[1.1] text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white drop-shadow-lg text-center lg:text-left">
                                How Was Your <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 drop-shadow-xl">
                                    Experience?
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl text-center lg:text-left font-light mx-auto lg:mx-0">
                                Our priority is flawless airport transportation. If we earned your trust, please take 30 seconds to support our local KC business with a 5-star review.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto mb-10 sm:mb-12">
                                <a
                                    href={googleReviewLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-cta text-base sm:text-lg px-6 py-4 sm:px-9 sm:py-5 group shadow-[0_0_40px_rgba(249,115,22,0.25)] hover:shadow-[0_0_60px_rgba(249,115,22,0.45)] border-none w-full sm:w-auto flex justify-center items-center"
                                >
                                    <span>Leave a Google Review</span>
                                    <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform" size={20} />
                                </a>
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
                                    { label: 'Fully Insured', icon: <Shield size={16} className="text-[#2463eb]" /> },
                                    { label: '5-Star Service', icon: <Star size={16} className="text-amber-400" fill="currentColor" /> },
                                    { label: 'Since 1982', icon: <Award size={16} className="text-amber-500" /> },
                                    { label: '24/7 Dispatch', icon: <Clock size={16} className="text-[#2463eb]" /> },
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
                                        alt="Quicksilver airport shuttle happy customers"
                                        priority
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none"></div>
            </section>

            {/* Review Cards */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto">
                        <FadeIn>
                            <div className="text-center mb-12">
                                <h2 className="font-display text-4xl font-black text-[#0c1d37] uppercase tracking-tight mb-3">Choose Your Platform</h2>
                                <p className="text-slate-500 font-medium">Select where you&apos;d like to leave your review.</p>
                            </div>

                            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-10">
                                <p className="text-amber-800 text-sm font-bold leading-relaxed">
                                    💡 <strong>Pro Tip:</strong> Google loves photos! Upload a pic of your ride or driver — and mention your driver&apos;s name. It helps us serve you even better next time!
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 mb-10">
                                <a href={googleReviewLink} target="_blank" rel="noopener noreferrer"
                                    className="group flex items-center gap-4 bg-[#0c1d37] hover:bg-[#162d4f] text-white font-black text-xl px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MessageCircle size={24} />
                                    </div>
                                    <span className="flex-1">Review on Google</span>
                                    <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform opacity-60" />
                                </a>
                                <a href="https://www.yelp.com/biz/quicksilver-airport-shuttle" target="_blank" rel="noopener noreferrer"
                                    className="group flex items-center gap-4 bg-[#FF1A1A] hover:bg-[#E00000] text-white font-black text-xl px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Star size={24} fill="currentColor" />
                                    </div>
                                    <span className="flex-1">Review on Yelp</span>
                                    <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform opacity-60" />
                                </a>
                                <a href="https://www.trustpilot.com" target="_blank" rel="noopener noreferrer"
                                    className="group flex items-center gap-4 bg-[#00B67A] hover:bg-[#009e6a] text-white font-black text-xl px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Star size={24} fill="currentColor" />
                                    </div>
                                    <span className="flex-1">Review on Trustpilot</span>
                                    <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform opacity-60" />
                                </a>
                            </div>

                            <div className="border-t border-slate-100 pt-8 text-center">
                                <p className="text-slate-500 font-medium text-sm">
                                    Had an issue? Please{' '}
                                    <a href="/contact" className="text-blue-600 font-bold hover:underline">contact us directly</a>{' '}
                                    so we can make it right immediately.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </main>
    );
}
