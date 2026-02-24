import { Metadata } from 'next';
import { ShieldCheck, Users, Clock, Award, Target, MessageSquare, Star, Info, Phone, ArrowRight, Shield, DollarSign } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '../components/FadeIn';
import HeroImage from '../components/HeroImage';
import BackgroundOverlay from '../components/BackgroundOverlay';
import TrustAvatars from '../components/TrustAvatars';

export const metadata: Metadata = {
    title: 'About Quicksilver Airport Shuttle | Kansas City Logistics Experts',
    description: 'Serving the Kansas City metro since 1982. Learn about our 40-year legacy of punctuality, safety, and premium airport transportation services.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* ═══ HERO SECTION — "Perfect Hero Section" framework ═══ */}
            <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-gradient-to-br from-[#0c1d3d] via-[#122b5e] to-[#0f2044] pt-24 pb-12">
                {/* Ambient Background Effects */}
                <div className="absolute inset-0 z-0">
                    <BackgroundOverlay />
                    <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#2463eb]/8 rounded-full blur-[180px] animate-pulse-glow pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[150px] animate-float pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-8 lg:pt-0">

                        {/* ═══ LEFT COLUMN: Value Proposition ═══ */}
                        <FadeIn className="text-white flex flex-col items-center lg:items-start text-center lg:text-left">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 mb-7 px-5 py-2 bg-white/[0.07] backdrop-blur-xl rounded-full border border-white/[0.12] shadow-[0_0_30px_rgba(36,99,235,0.1)]">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
                                <p className="text-[11px] font-bold tracking-[0.25em] text-white/80 uppercase">Our Legacy & Mission</p>
                            </div>

                            {/* H1 — VALUE PROPOSITION */}
                            <h1 className="mb-4 sm:mb-6 font-display font-black leading-[1.1] text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white drop-shadow-lg text-center lg:text-left">
                                40+ Years of <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-blue-300 drop-shadow-xl">
                                    KC Excellence
                                </span>
                            </h1>

                            {/* Supporting Copy */}
                            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl text-center lg:text-left font-light mx-auto lg:mx-0">
                                Since 1982, Quicksilver has been the Kansas City metro&apos;s most trusted airport shuttle & car service. We built our reputation on punctuality and treat every rider like family.
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto mb-10 sm:mb-12">
                                <Link
                                    href="/fare-quote"
                                    className="btn btn-cta text-base sm:text-lg px-6 py-5 sm:px-9 sm:py-5 group shadow-[0_0_40px_rgba(249,115,22,0.25)] hover:shadow-[0_0_60px_rgba(249,115,22,0.45)] border-none w-full sm:w-auto flex justify-center items-center"
                                >
                                    <span>Get a Free Quote</span>
                                    <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform" size={20} />
                                </Link>
                                <a
                                    href="tel:913-262-0905"
                                    className="group flex items-center justify-center gap-2 sm:gap-3 text-white transition-all py-5 px-6 sm:px-7 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/[0.06] backdrop-blur-sm w-full sm:w-auto"
                                >
                                    <Phone size={18} className="text-blue-300 group-hover:text-white transition-colors" />
                                    <span className="font-bold tracking-wide text-sm sm:text-base">(913) 262-0905</span>
                                </a>
                            </div>

                            {/* Social Proof */}
                            <div className="flex flex-col sm:flex-row items-center gap-5 mb-10 pt-8 border-t border-white/10 w-full lg:w-auto mx-auto lg:mx-0">
                                <TrustAvatars />
                                <div className="flex flex-col gap-0.5 items-center sm:items-start">
                                    <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
                                        {[...Array(5)].map((_, i) => (<Star key={i} fill="currentColor" size={14} />))}
                                        <span className="text-white text-sm ml-1 font-bold">4.9/5</span>
                                    </div>
                                    <p className="text-sm text-slate-300"><strong className="text-white">Rick, Scott & 4,000+ riders</strong> trust Quicksilver</p>
                                </div>
                            </div>

                            {/* Credibility Badges */}
                            <div className="flex flex-wrap xl:flex-nowrap whitespace-nowrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mx-auto lg:mx-0">
                                {[
                                    { label: 'Fully Insured', icon: <Shield size={16} className="text-[#2463eb]" /> },
                                    { label: '24/7 Dispatch', icon: <Clock size={16} className="text-[#2463eb]" /> },
                                    { label: 'Fixed Pricing', icon: <DollarSign size={16} className="text-[#2463eb]" /> },
                                    { label: '40+ Years', icon: <Award size={16} className="text-amber-500" /> },
                                ].map((badge, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-white text-[#0f2044] px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-lg shadow-black/20 hover:-translate-y-1 transition-transform">
                                        {badge.icon}
                                        <span>{badge.label}</span>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        {/* ═══ RIGHT COLUMN: Hero Imagery ═══ */}
                        <FadeIn delay={0.25} className="w-full relative flex items-center justify-center pb-8 lg:pb-0">
                            <div className="relative w-full max-w-lg lg:max-w-full mx-auto">
                                {/* Glow behind vehicle */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#2463eb]/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"></div>

                                {/* Main Vehicle Image */}
                                <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-auto lg:h-[400px] drop-shadow-[0_20px_60px_rgba(36,99,235,0.4)]">
                                    <HeroImage
                                        src="/Home page images/Saloon Class.png"
                                        alt="Quicksilver premium car service heritage in Kansas City"
                                        priority
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none"></div>
            </section>


            {/* Who We Are */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2463eb]/10 text-[#2463eb] font-bold text-sm mb-6 uppercase tracking-widest border border-[#2463eb]/20">
                                <Users size={16} />
                                Who We Are
                            </div>
                            <h2 className="mb-4 font-display text-4xl font-bold text-[#2463eb] uppercase tracking-tight">Your Trusted KC Transport Partner</h2>
                            <p className="text-xl text-[#2463eb]/70 mb-8 leading-relaxed">
                                Quicksilver Airport Shuttle is a premium airport car service and shuttle provider located in Kansas City, Missouri. Since 1982, we specialize in reliable transportation to Kansas City International Airport (MCI), Wheeler Executive Airport, Arrowhead Stadium, and Kauffman Stadium. We offer fixed-rate point-to-point transfers for corporate travel, university students, and large groups.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    'Shared-Ride Private Van',
                                    'Private Sedan Service',
                                    'Local Personal Drivers',
                                    'Private SUV',
                                    'Taxi Cab Service',
                                    'Stretched Limousine'
                                ].map((service, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#2463eb]/20 font-bold text-[#2463eb]">
                                        <div className="w-2 h-2 bg-[#2463eb] rounded-full"></div>
                                        {service}
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="relative p-8 md:p-10 bg-[#2463eb] rounded-[50px] shadow-2xl overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                                <div className="relative z-10 text-center py-10 md:py-16">
                                    <div className="text-7xl md:text-8xl font-display font-black text-white mb-4 group-hover:scale-110 transition-transform duration-500">40+</div>
                                    <div className="text-xl md:text-2xl font-bold text-white uppercase tracking-[0.2em] mb-4">Years of Excellence</div>
                                    <p className="text-white/70 text-base md:text-lg uppercase tracking-widest">Established 1982</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* E-E-A-T Framework Section */}
            <section className="section bg-white border-y border-[#2463eb]/10">
                <div className="container-custom">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2463eb] text-white font-bold text-xs mb-6 uppercase tracking-widest">
                                Verified Expertise
                            </div>
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#2463eb] uppercase tracking-tight">Locally Tested. <span className="text-[#2463eb]">Globally Trusted.</span></h2>
                            <p className="text-xl text-[#2463eb]/70 max-w-3xl mx-auto mt-6">
                                We don&apos;t just drive; we navigate the intricacies of Kansas City transit with decades of real-world data and hands-on experience.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { letter: 'E', title: 'Experience', text: 'Operating continuously since 1982, we have tracked millions of miles across the KC Metro area. We know the fastest detours around I-435 traffic and exact MCI security choke points during holidays.' },
                            { letter: 'E', title: 'Expertise', text: 'Every Quicksilver chauffeur undergoes rigorous 6-week local topography training, defensive driving certification, and FAA flight tracking coordination to eliminate airport wait times.' },
                            { letter: 'A', title: 'Authority', text: 'We are the trusted transit partner for major regional universities (KU, KSU) and corporate executives. Our operational data and on-time performance metrics are locally recognized industry standards.' },
                            { letter: 'T', title: 'Trust', text: 'Transparent flat-rate pricing, publicly verifiable licensing, comprehensive fleet insurance, and an unyielding commitment to passenger safety backing our 4.8/5 aggregate satisfaction score.' },
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#2463eb]/10 h-full">
                                    <h3 className="text-2xl font-bold text-[#2463eb] mb-4 flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#2463eb]/10 text-[#2463eb] rounded-full flex items-center justify-center font-black">{item.letter}</div>
                                        {item.title}
                                    </h3>
                                    <p className="text-[#2463eb]/70">{item.text}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Facts */}
            <section className="section bg-white border-t border-[#2463eb]/10">
                <div className="container-custom max-w-4xl">
                    <FadeIn className="bg-[#2463eb] text-white rounded-[40px] p-10 md:p-14 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                        <h2 className="mb-8 font-display text-3xl font-bold uppercase tracking-tight text-white">Quick Facts About Quicksilver</h2>

                        <div className="space-y-6 relative z-10">
                            {[
                                { q: 'What is Quicksilver Airport Shuttle?', a: 'Quicksilver Airport Shuttle is a premium, fixed-rate luxury car and airport shuttle service operating in Kansas City, Missouri. We provide 24/7 private transportation to and from Kansas City International Airport (MCI).' },
                                { q: 'Who does Quicksilver Airport Shuttle help?', a: 'We exclusively help corporate executives, business travelers, university students (KU and KSU), and large families who prioritize safety, comfort, and absolute punctuality over unpredictable rideshare apps.' },
                                { q: 'Where is the Quicksilver headquarters located?', a: 'The headquarters for Quicksilver Airport Shuttle is located at the MCI Airport Zone in Kansas City, MO 64153, USA. Passengers can reach our 24/7 centralized dispatch directly at (913) 262-0905.' },
                            ].map((item, i) => (
                                <div key={i} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
                                    <h3 className="text-xl font-bold text-white mb-2">{item.q}</h3>
                                    <p className="text-white/80">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section bg-[#2463eb] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
                <div className="container-custom relative z-10">
                    <FadeIn>
                        <div className="text-center mb-20">
                            <h2 className="mb-4 font-display text-4xl md:text-5xl font-bold uppercase tracking-tight">What Our Customers Are Saying</h2>
                            <p className="text-xl text-white/70">Word on the street from our valued passengers.</p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { text: "The owner personifies honor and integrity. The company also gives a personal touch from their drivers. I would not hesitate to use them. Or recommend their services to anyone.", author: "Rick Carlton", rating: 5 },
                            { text: "Had the best driver, his name was Haarun! Do request him if ur booking a driver. Very professional, car has lots of leg space, which is good after a long flight. Very friendly and on time.", author: "Scott Daniel", rating: 5 },
                            { text: "I had a very good time with this service they was on time good service polite and clean car . I will use them again , and tell my friends and family to use this service.", author: "Nimra Malik", rating: 5 }
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="bg-white/10 backdrop-blur-sm p-10 rounded-[40px] border border-white/20 h-full flex flex-col hover:bg-white/20 transition-all">
                                    <div className="flex text-white mb-6 gap-1">
                                        {[...Array(item.rating)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="text-lg italic text-white/80 leading-relaxed mb-8 flex-grow">&ldquo;{item.text}&rdquo;</p>
                                    <div className="font-bold text-xl text-white border-t border-white/20 pt-6">
                                        &mdash; {item.author}
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section bg-white">
                <div className="container-custom">
                    <FadeIn>
                        <div className="text-center mb-20">
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#2463eb] uppercase tracking-tight">Why Choose Us?</h2>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: <Award className="text-[#2463eb]" size={32} />, title: 'Award-winning Company', description: 'We have won 4 awards for our efficient services in the region.' },
                            { icon: <Clock className="text-[#2463eb]" size={32} />, title: 'Available 24/7', description: 'Book airport shuttle services through Quicksilver. We\'re available 24/7.' },
                            { icon: <ShieldCheck className="text-[#2463eb]" size={32} />, title: 'Safety First', description: 'Your Safety is our Top Priority. Drivers professionally trained, insured, and licensed.' },
                            { icon: <Star className="text-[#2463eb]" size={32} />, title: 'Save Money & Time', description: 'Fixed rates with no surprises. Guaranteed reliability every single time.' }
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 0.1} className="text-center p-8 bg-white rounded-[30px] border border-[#2463eb]/10 group hover:bg-[#2463eb] hover:shadow-2xl transition-all h-full">
                                <div className="w-20 h-20 bg-[#2463eb]/10 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:bg-white transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-[#2463eb] group-hover:text-white uppercase tracking-tight">{item.title}</h3>
                                <p className="text-[#2463eb]/70 group-hover:text-white/80 font-medium leading-relaxed">{item.description}</p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="section bg-[#2463eb] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <div className="flex items-center gap-4 mb-8">
                                <Target className="text-white" size={40} />
                                <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white">Our Mission</h2>
                            </div>
                            <p className="text-2xl text-white/80 leading-tight mb-8 font-medium">
                                We are an on-demand shared-ride vehicle service. We use large vehicles with lots of storage.
                                We understand the stress of air travel and our reliability and advance reservations reduce that pressure.
                            </p>
                            <div className="bg-white/10 border border-white/20 p-8 rounded-3xl backdrop-blur-md">
                                <div className="flex items-start gap-4">
                                    <Info className="text-white mt-1 flex-shrink-0" size={24} />
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-wider">Note on Reservations</h4>
                                        <p className="text-white/70 leading-relaxed font-medium capitalize">
                                            If you have a round trip reservation and want to cancel both trips, you will need to cancel each reservation individually.
                                            Each round trip reservation has a different confirmation number. The Quicksilver team understands passenger concerns and is here to assist.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className="p-12 bg-white rounded-[50px] shadow-2xl relative">
                                <MessageSquare className="text-[#2463eb]/5 absolute top-10 right-10" size={120} />
                                <h3 className="text-[#2463eb] font-display text-3xl font-bold mb-8 uppercase tracking-tight">Need Assistance?</h3>
                                <p className="text-[#2463eb]/70 text-lg mb-10 font-medium">
                                    Our team analyzed the most common passenger worries and we&apos;ve refined our service to address them directly.
                                    Safety and punctuality are guaranteed.
                                </p>
                                <div className="space-y-6">
                                    <a href="tel:913-262-0905" className="btn btn-primary w-full py-5 text-xl flex items-center justify-center gap-4">
                                        <Phone size={24} />
                                        Call Support Now
                                    </a>
                                    <a href="/contact" className="btn bg-[#2463eb]/10 text-[#2463eb] hover:bg-[#2463eb] hover:text-white w-full py-5 text-xl flex items-center justify-center border border-[#2463eb]/20 transition-all">
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </main>
    );
}
