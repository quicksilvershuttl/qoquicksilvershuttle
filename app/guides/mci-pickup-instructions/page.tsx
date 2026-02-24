import { Metadata } from 'next';
import { Plane, MapPin, Phone, MessageSquare, ShieldCheck, ArrowRight, Info, Luggage, Navigation, Clock, Star, Shield, DollarSign, Award } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';
import HeroImage from '../../components/HeroImage';
import BackgroundOverlay from '../../components/BackgroundOverlay';

export const metadata: Metadata = {
    title: 'MCI Arrival Pickup Instructions | Where to Meet Your Driver | Quicksilver',
    description: 'The official 2026 guide for meeting your Quicksilver chauffeur at Kansas City International Airport (MCI). Clear instructions for the new single terminal.',
};

export default function MCIPickupGuide() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* ═══ HERO SECTION — Homepage-identical framework ═══ */}
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
                            <div className="inline-flex items-center gap-2 mb-7 px-5 py-2 bg-white/[0.07] backdrop-blur-xl rounded-full border border-white/[0.12] shadow-[0_0_30px_rgba(36,99,235,0.1)]">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
                                <p className="text-[11px] font-bold tracking-[0.25em] text-white/80 uppercase">MCI Logistics SOP · Official Guide</p>
                            </div>

                            <h1 className="mb-4 sm:mb-6 font-display font-black leading-[1.05] text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white drop-shadow-lg text-center lg:text-left">
                                MCI Arrival <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-blue-300 drop-shadow-xl">
                                    Protocol.
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl text-center lg:text-left font-light mx-auto lg:mx-0">
                                The definitive 2026 protocol for meeting your chauffeur at the new Kansas City International Airport single terminal. Easy, clear, stress-free.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto mb-10 sm:mb-12">
                                <Link
                                    href="/fare-quote"
                                    className="btn btn-cta text-base sm:text-lg px-6 py-4 sm:px-9 sm:py-5 group shadow-[0_0_40px_rgba(249,115,22,0.25)] hover:shadow-[0_0_60px_rgba(249,115,22,0.45)] border-none w-full sm:w-auto flex justify-center items-center"
                                >
                                    <span>Book Your Ride</span>
                                    <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform" size={20} />
                                </Link>
                                <a
                                    href="tel:9132620905"
                                    className="group flex items-center justify-center gap-2 sm:gap-3 text-white transition-all py-4 px-6 sm:px-7 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/[0.06] backdrop-blur-sm w-full sm:w-auto"
                                >
                                    <Phone size={18} className="text-blue-300 group-hover:text-white transition-colors" />
                                    <span className="font-bold tracking-wide text-sm sm:text-base">(913) 262-0905</span>
                                </a>
                            </div>

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
                                            <img src={imgSrc} alt="Customer" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full bg-white/10 border-2 border-[#0f2044] flex items-center justify-center text-white/70 text-[10px] font-bold backdrop-blur-sm z-10">+4K</div>
                                </div>
                                <div className="flex flex-col gap-0.5 items-center sm:items-start">
                                    <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
                                        {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={14} />)}
                                        <span className="text-white/60 text-sm ml-1 font-medium">4.9/5</span>
                                    </div>
                                    <p className="text-sm text-slate-400"><strong className="text-white/80">Rick, Scott & 4,000+ riders</strong> trust Quicksilver</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap xl:flex-nowrap whitespace-nowrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mx-auto lg:mx-0">
                                {[
                                    { label: 'Driver Texted', icon: <MessageSquare size={16} className="text-[#2463eb]" /> },
                                    { label: 'Meet & Greet', icon: <Navigation size={16} className="text-[#2463eb]" /> },
                                    { label: 'Fixed Pricing', icon: <DollarSign size={16} className="text-[#2463eb]" /> },
                                    { label: '24/7 Support', icon: <Clock size={16} className="text-amber-500" /> },
                                ].map((badge, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-white text-[#0f2044] px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-lg shadow-black/20 hover:-translate-y-1 transition-transform">
                                        {badge.icon}<span>{badge.label}</span>
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
                                        alt="Quicksilver chauffeur MCI airport pickup Kansas City"
                                        priority
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none"></div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="container-custom max-w-5xl">
                    <div className="grid md:grid-cols-12 gap-16 items-start">
                        <div className="md:col-span-12 space-y-16">
                            <FadeIn>
                                <div className="flex flex-col md:flex-row gap-12 items-start">
                                    <div className="shrink-0 w-24 h-24 bg-blue-50 text-blue-600 rounded-[32px] flex items-center justify-center border border-blue-100 shadow-sm font-black text-3xl">01</div>
                                    <div className="space-y-6">
                                        <h2 className="text-3xl font-display font-black text-[#0c1d37] uppercase tracking-tight">The Digital Handshake</h2>
                                        <p className="text-xl text-slate-500 leading-relaxed font-medium">
                                            As soon as your flight touches down at MCI, your chauffeur will send a text message to the phone number on your reservation. This message will include their direct mobile number and vehicle details (color/model/plate).
                                        </p>
                                        <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 flex items-start gap-4">
                                            <MessageSquare className="text-blue-600 shrink-0" size={24} />
                                            <p className="text-sm font-bold text-slate-700 italic">&ldquo;Hello! This is [Driver Name] from Quicksilver. I am on-site at MCI. Please text me once you have your luggage.&rdquo;</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.1}>
                                <div className="flex flex-col md:flex-row gap-12 items-start">
                                    <div className="shrink-0 w-24 h-24 bg-slate-50 text-slate-400 rounded-[32px] flex items-center justify-center border border-slate-100 shadow-sm font-black text-3xl">02</div>
                                    <div className="space-y-6">
                                        <h2 className="text-3xl font-display font-black text-[#0c1d37] uppercase tracking-tight">Claim Your Assets</h2>
                                        <p className="text-xl text-slate-500 leading-relaxed font-medium">
                                            Proceed to the lower-level baggage claim area. <strong>Do not signal your driver until you are physically standing with all your luggage.</strong> Airport security prohibits vehicles from waiting at the curb for more than 2 minutes.
                                        </p>
                                        <div className="flex items-center gap-6">
                                            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-slate-100 shadow-sm">
                                                <Luggage size={18} className="text-blue-600" />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-[#0c1d37]">Baggage Claim 1-7</span>
                                            </div>
                                            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-slate-100 shadow-sm">
                                                <Plane size={18} className="text-blue-600" />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-[#0c1d37]">Arrivals Level</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <div className="flex flex-col md:flex-row gap-12 items-start">
                                    <div className="shrink-0 w-24 h-24 bg-blue-600 text-white rounded-[32px] flex items-center justify-center shadow-2xl font-black text-3xl">03</div>
                                    <div className="space-y-6">
                                        <h2 className="text-3xl font-display font-black text-[#0c1d37] uppercase tracking-tight">The Departure Point</h2>
                                        <p className="text-xl text-slate-500 leading-relaxed font-medium">
                                            Exit the building through the doors nearest your carousel. Cross the FIRST lane (private cars) and look for the <strong>Commercial Ground Transportation</strong> pillars. Your driver will pull into the designated area within 3-5 minutes of your &ldquo;Ready&rdquo; confirmation.
                                        </p>
                                        <div className="bg-[#0c1d37] text-white p-10 rounded-[50px] shadow-2xl relative overflow-hidden">
                                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl -mr-16 -mb-16"></div>
                                            <h4 className="text-blue-400 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Critical Intel</h4>
                                            <p className="text-xl font-medium leading-relaxed">
                                                Look for the Quicksilver placard in the vehicle window. Your chauffeur will exit to assist with your luggage immediately upon arrival.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>

                    <FadeIn delay={0.3}>
                        <div className="mt-32 p-12 md:p-20 bg-slate-50 border border-slate-100 rounded-[60px] text-center">
                            <h2 className="text-4xl font-display font-black text-[#0c1d37] mb-8 uppercase tracking-tight">Need Immediate Assistance?</h2>
                            <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium">
                                If you cannot locate your driver or have any issues with flight delays, call our central Kansas City dispatch hub.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <a href="tel:9132620905" className="btn bg-[#0c1d37] text-white px-12 py-7 text-2xl font-black rounded-3xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-4 border-none">
                                    <Phone size={28} />
                                    (913) 262-0905
                                </a>
                                <Link href="/find-reservation" className="btn bg-white border-2 border-slate-200 text-[#0c1d37] px-12 py-7 font-black rounded-3xl text-xl flex items-center justify-center gap-4 transition-all hover:border-[#0c1d37]">
                                    Track Flight Link <ArrowRight size={24} />
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "MCI Airport Pickup Instructions",
                        "description": "How to meet your Quicksilver chauffeur at the Kansas City International Airport (MCI) terminal.",
                        "step": [
                            { "@type": "HowToStep", "name": "Receive Text Notification", "text": "Upon landing, check your phone for a text from your driver with vehicle and contact details." },
                            { "@type": "HowToStep", "name": "Collect Luggage", "text": "Retrieve all checked bags from baggage claim before signaling the driver." },
                            { "@type": "HowToStep", "name": "Proceed to Meeting Point", "text": "Exit to the Commercial Ground Transportation lane and meet your driver." }
                        ]
                    })
                }}
            />
        </main>
    );
}
