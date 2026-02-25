import { Metadata } from 'next';
import { MousePointer2, Calculator, CalendarCheck, CheckCircle, ArrowRight, ShieldCheck, Clock, Phone, Info, Zap, Star, Shield, DollarSign, Award } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';
import HeroImage from '../../components/HeroImage';
import BackgroundOverlay from '../../components/BackgroundOverlay';

export const metadata: Metadata = {
    title: 'How to Book Your MCI Shuttle | 3-Step Guide | Quicksilver Official',
    description: 'A step-by-step guide to booking your Kansas City airport transportation. Learn how to get quotes, select vehicles, and secure your on-time pickup.',
};

export default function HowToBookPage() {
    const steps = [
        {
            title: 'Generate Instant Quote',
            desc: 'Use our digital quote engine to calculate your fixed rate. No hidden fees or surge pricing multipliers.',
            icon: <Calculator size={32} className="text-blue-600" />,
            link: '/fare-quote',
            linkText: 'Open Quote Engine'
        },
        {
            title: 'Select Your Fleet Class',
            desc: 'Choose from Business Sedan, Luxury SUV, or Executive Van based on your group size and luggage requirements.',
            icon: <Zap size={32} className="text-blue-600" />,
            link: '/tools/vehicle-quiz',
            linkText: 'View Fleet Guide'
        },
        {
            title: 'Secure Your Slot',
            desc: 'Complete the secure reservation form. You will receive an instant email confirmation with your booking ID.',
            icon: <CalendarCheck size={32} className="text-blue-600" />,
            link: '/reservation',
            linkText: 'Go to Reservation'
        }
    ];

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
                                <p className="text-[11px] font-bold tracking-[0.25em] text-white/80 uppercase">Customer SOP · Standard Operating Procedure</p>
                            </div>

                            <h1 className="mb-4 sm:mb-6 font-display font-black leading-[1.05] text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white drop-shadow-lg text-center lg:text-left">
                                How To <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-blue-300 drop-shadow-xl">
                                    Book Your Ride.
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl text-center lg:text-left font-light mx-auto lg:mx-0">
                                The comprehensive 2026 guide to securing premium airport transportation in Kansas City. 3 simple steps to your perfect ride.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto mb-10 sm:mb-12">
                                <Link
                                    href="/fare-quote"
                                    className="btn btn-cta text-base sm:text-lg px-6 py-4 sm:px-9 sm:py-5 group shadow-[0_0_40px_rgba(249,115,22,0.25)] hover:shadow-[0_0_60px_rgba(249,115,22,0.45)] border-none w-full sm:w-auto flex justify-center items-center"
                                >
                                    <span>Get a Free Quote</span>
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
                                            <img src={imgSrc} alt="Verified Quicksilver customer" className="w-full h-full object-cover" />
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
                                    { label: 'Fully Insured', icon: <Shield size={16} className="text-[#2463eb]" /> },
                                    { label: '24/7 Dispatch', icon: <Clock size={16} className="text-[#2463eb]" /> },
                                    { label: 'Fixed Pricing', icon: <DollarSign size={16} className="text-[#2463eb]" /> },
                                    { label: '3 Easy Steps', icon: <CheckCircle size={16} className="text-amber-500" /> },
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
                                        alt="Quicksilver premium sedan for Kansas City airport booking guide"
                                        priority
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none"></div>
            </section>

            {/* Steps Section */}
            <section className="py-24 bg-white">
                <div className="container-custom max-w-5xl">
                    <div className="space-y-12">
                        {steps.map((step, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1}>
                                <div className="group relative bg-white rounded-[50px] p-10 md:p-16 border border-slate-100 shadow-xl hover:shadow-2xl transition-all overflow-hidden flex flex-col md:flex-row gap-12 items-center">
                                    <div className="flex-shrink-0 relative">
                                        <div className="w-40 h-40 bg-slate-50 rounded-[48px] flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                            {step.icon}
                                        </div>
                                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#0c1d37] text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg">
                                            0{idx + 1}
                                        </div>
                                    </div>
                                    <div className="flex-grow text-center md:text-left">
                                        <h2 className="text-3xl font-display font-black text-[#0c1d37] mb-4 uppercase tracking-tight">{step.title}</h2>
                                        <p className="text-xl text-slate-500 font-medium leading-relaxed mb-8 max-w-xl">{step.desc}</p>
                                        <Link href={step.link} className="inline-flex items-center gap-3 text-blue-600 font-black uppercase text-xs tracking-widest border-b-2 border-blue-100 hover:border-blue-600 transition-all pb-1">
                                            {step.linkText}
                                            <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.4}>
                        <div className="mt-24 bg-[#0c1d37] rounded-[60px] p-12 md:p-20 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                                        <ShieldCheck className="text-blue-400" size={24} />
                                    </div>
                                    <h2 className="text-3xl font-display font-black uppercase tracking-tight">Pro-Booking Tips</h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <div className="flex gap-6">
                                            <div className="shrink-0 text-blue-400 font-black text-2xl tracking-tighter">01</div>
                                            <p className="text-white/60 font-medium leading-loose">
                                                <strong>Book 24 Hours Ahead:</strong> While we often accommodate last-minute requests, booking 24 hours in advance guarantees your specific vehicle of choice.
                                            </p>
                                        </div>
                                        <div className="flex gap-6">
                                            <div className="shrink-0 text-blue-400 font-black text-2xl tracking-tighter">02</div>
                                            <p className="text-white/60 font-medium leading-loose">
                                                <strong>International Buffer:</strong> For international flights, calculate your departure with a 3-hour airport arrival window.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-sm">
                                        <h3 className="text-white font-black uppercase tracking-widest text-xs mb-6">Need Instant Support?</h3>
                                        <p className="text-white/80 text-xl font-medium mb-8">Speak directly with our local KC dispatch team.</p>
                                        <a href="tel:9132620905" className="btn bg-blue-600 hover:bg-blue-700 text-white w-full py-6 text-2xl font-black rounded-3xl shadow-2xl flex items-center justify-center gap-4 border-none">
                                            <Phone size={28} />
                                            (913) 262-0905
                                        </a>
                                    </div>
                                </div>
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
                        "name": "How to Book a Kansas City Airport Shuttle",
                        "description": "Step-by-step instructions for booking premium airport car service to MCI.",
                        "step": [
                            { "@type": "HowToStep", "name": "Get a Quote", "text": "Enter your pickup and drop-off locations in the fare quote engine to see fixed-rate pricing." },
                            { "@type": "HowToStep", "name": "Choose Vehicle", "text": "Select the vehicle category that matches your group size and luggage needs." },
                            { "@type": "HowToStep", "name": "Reserve Online", "text": "Fill out the reservation form and receive your confirmation code." }
                        ]
                    })
                }}
            />
        </main>
    );
}
