import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, Send, Sparkles, MessageCircle, ArrowRight, Star, Shield, Award } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';
import HeroImage from '../components/HeroImage';
import BackgroundOverlay from '../components/BackgroundOverlay';

export const metadata: Metadata = {
    title: 'Contact Us | Airport Car Service Support | Quicksilver Airport car',
    description: 'Quicksilver provides premium airport shuttle and private car services in the Kansas City metro. Professional chauffeurs and flat-rate pricing since 1982.',
};

export default function ContactPage() {
    const phone = '(913) 262-0905';

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
                                <p className="text-[11px] font-bold tracking-[0.25em] text-white/80 uppercase">24/7 Support Hub · Since 1982</p>
                            </div>

                            {/* H1 — VALUE PROPOSITION */}
                            <h1 className="mb-4 sm:mb-6 font-display font-black leading-[1.1] text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white drop-shadow-lg text-center lg:text-left">
                                Get In <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-blue-300 drop-shadow-xl">
                                    Touch
                                </span>
                            </h1>

                            {/* Supporting Copy */}
                            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl text-center lg:text-left font-light mx-auto lg:mx-0">
                                We&apos;re here to help around the clock. Reach out for reservations, custom corporate quotes, or immediate travel support in Kansas City.
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto mb-10 sm:mb-12">
                                <a
                                    href="#contact-form"
                                    className="btn btn-cta text-base sm:text-lg px-6 py-4 sm:px-9 sm:py-5 group shadow-[0_0_40px_rgba(249,115,22,0.25)] hover:shadow-[0_0_60px_rgba(249,115,22,0.45)] border-none w-full sm:w-auto flex justify-center items-center"
                                >
                                    <span>Send Message</span>
                                    <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-y-2 transition-transform" size={20} />
                                </a>
                                <a
                                    href={`tel:${phone.replace(/\D/g, '')}`}
                                    className="group flex items-center justify-center gap-2 sm:gap-3 text-white transition-all py-4 px-6 sm:px-7 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/[0.06] backdrop-blur-sm w-full sm:w-auto"
                                >
                                    <Phone size={18} className="text-blue-300 group-hover:text-white transition-colors" />
                                    <span className="font-bold tracking-wide text-sm sm:text-base">{phone}</span>
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
                                            <img src={imgSrc} alt="Customer" className="w-full h-full object-cover" />
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

                            {/* Credibility Badges */}
                            <div className="flex flex-wrap xl:flex-nowrap whitespace-nowrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mx-auto lg:mx-0">
                                {[
                                    { label: 'Instant Dispatch', icon: <Clock size={16} className="text-[#2463eb]" /> },
                                    { label: '5.0 Rating', icon: <Star size={16} className="text-amber-500" /> },
                                    { label: 'Secure Support', icon: <Shield size={16} className="text-[#2463eb]" /> },
                                    { label: '24/7/365', icon: <Award size={16} className="text-amber-500" /> },
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
                                        alt="Quicksilver Kansas City contact and support hub"
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


            {/* Contact Information & Form */}
            <section className="section bg-white scroll-mt-20" id="contact-form">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20">
                        {/* Contact Information */}
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2463eb]/10 text-[#2463eb] font-black text-[10px] uppercase tracking-widest mb-6">
                                <Sparkles size={12} className="text-[#2463eb]" />
                                Connection Points
                            </div>
                            <h2 className="mb-8 font-display text-4xl font-bold text-[#2463eb] uppercase tracking-tight">Executive Support</h2>
                            <p className="text-xl text-[#2463eb]/70 mb-12 leading-relaxed">
                                Our dedicated team is stationed in the heart of the metro,
                                ensuring seamless communication for every flight, every day.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: <Phone size={28} />, label: 'Call Us 24/7', value: phone, href: `tel:${phone.replace(/\D/g, '')}`, desc: 'For immediate dispatch and reservations' },
                                    { icon: <Mail size={28} />, label: 'Email Support', value: 'info@goquicksilver.com', href: 'mailto:info@goquicksilver.com', desc: 'Response within 24 business hours' },
                                    { icon: <MapPin size={28} />, label: 'Quicksilver Airport Shuttle', value: 'MCI Airport Zone', desc: 'Kansas City, MO 64153, USA' },
                                    { icon: <Clock size={28} />, label: 'Hours of Operation', value: 'Open 24/7/365', desc: 'Including all major holidays' }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-6 sm:p-8 bg-white rounded-[35px] border border-[#2463eb]/10 hover:shadow-xl hover:border-[#2463eb]/30 transition-all group text-center sm:text-left">
                                        <div className="w-16 h-16 rounded-2xl bg-[#2463eb] flex items-center justify-center flex-shrink-0 text-white group-hover:bg-white group-hover:text-[#2463eb] group-hover:border group-hover:border-[#2463eb] transition-colors shadow-lg">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#2463eb]/50 mb-1">{item.label}</h3>
                                            {item.href ? (
                                                <a href={item.href} className="text-xl sm:text-2xl font-display font-bold text-[#2463eb] hover:text-[#1d4ed8] transition-colors break-words">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <div className="text-xl sm:text-2xl font-display font-bold text-[#2463eb]">{item.value}</div>
                                            )}
                                            <p className="text-[#2463eb]/60 mt-2 font-medium italic text-sm sm:text-base">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}

                                {/* Verified Local Business Citation Badge */}
                                <div className="mt-10 p-6 bg-slate-50 border border-slate-200 rounded-[30px] flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                                        <Shield size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900 uppercase tracking-tight">Verified Local Transportation Provider</p>
                                        <p className="text-xs text-slate-500">Official MCI Airport Zone Licensed Dispatch · Reg: #82-KC-641</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Contact Form */}
                        <FadeIn delay={0.2}>
                            <div className="bg-white p-10 md:p-16 rounded-[50px] shadow-2xl border border-[#2463eb]/10 h-full relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#2463eb]/5 rounded-bl-full"></div>
                                <h2 className="mb-8 font-display text-3xl font-bold text-[#2463eb] uppercase">Send A Message</h2>
                                <form className="space-y-8 relative z-10">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <label htmlFor="name" className="block text-xs font-black uppercase tracking-widest text-[#2463eb]/50 mb-3 ml-1">Full Name</label>
                                            <input type="text" id="name" name="name" required className="w-full px-6 py-4 bg-white border border-[#2463eb]/20 rounded-2xl focus:ring-2 focus:ring-[#2463eb] focus:border-transparent transition-all outline-none font-medium" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-xs font-black uppercase tracking-widest text-[#2463eb]/50 mb-3 ml-1">Email Address</label>
                                            <input type="email" id="email" name="email" required className="w-full px-6 py-4 bg-white border border-[#2463eb]/20 rounded-2xl focus:ring-2 focus:ring-[#2463eb] focus:border-transparent transition-all outline-none font-medium" placeholder="john@example.com" />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <label htmlFor="phone" className="block text-xs font-black uppercase tracking-widest text-[#2463eb]/50 mb-3 ml-1">Phone Number</label>
                                            <input type="tel" id="phone" name="phone" className="w-full px-6 py-4 bg-white border border-[#2463eb]/20 rounded-2xl focus:ring-2 focus:ring-[#2463eb] focus:border-transparent transition-all outline-none font-medium" placeholder="(913) 555-0123" />
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-xs font-black uppercase tracking-widest text-[#2463eb]/50 mb-3 ml-1">Service Type</label>
                                            <select id="subject" name="subject" required className="w-full px-6 py-4 bg-white border border-[#2463eb]/20 rounded-2xl focus:ring-2 focus:ring-[#2463eb] focus:border-transparent transition-all outline-none font-medium">
                                                <option value="">Select Option</option>
                                                <option value="reservation">New Reservation</option>
                                                <option value="quote">Request Quote</option>
                                                <option value="existing">Existing Reservation</option>
                                                <option value="corporate">Corporate Account</option>
                                                <option value="feedback">Feedback</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-xs font-black uppercase tracking-widest text-[#2463eb]/50 mb-3 ml-1">Inquiry Details</label>
                                        <textarea id="message" name="message" required rows={5} className="w-full px-6 py-4 bg-white border border-[#2463eb]/20 rounded-2xl focus:ring-2 focus:ring-[#2463eb] focus:border-transparent transition-all resize-none outline-none font-medium" placeholder="Tell us how we can assist your travel..."></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-cta w-full text-xl py-6 flex items-center justify-center gap-3 border-none shadow-orange-500/20 shadow-xl font-bold">
                                        <Send size={24} />
                                        Inquire Now
                                    </button>

                                    <p className="text-sm text-[#2463eb]/40 text-center italic font-medium">
                                        All transmissions are secure and encrypted.
                                    </p>
                                </form>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

        </main>
    );
}
