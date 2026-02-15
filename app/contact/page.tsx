import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, Send, Sparkles, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';

export const metadata: Metadata = {
    title: 'Contact Us | Quicksilver Airport Shuttle',
    description: 'Contact Quicksilver Airport Shuttle for reservations, questions, or support. Available 24/7 at (913) 262-0905.',
};

export default function ContactPage() {
    const phone = '(913) 262-0905';

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section - REFRESHED */}
            <section className="relative py-32 bg-slate-900 text-white overflow-hidden text-center">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px]"></div>

                <div className="container-custom relative z-10">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-amber-500 font-bold text-xs mb-8 uppercase tracking-widest border border-white/20 backdrop-blur-md">
                            <MessageCircle size={16} />
                            24/7 Support Hub
                        </div>
                        <h1 className="mb-6 font-display font-bold text-5xl md:text-8xl tracking-tight uppercase leading-[0.9]">
                            Get In <br />
                            <span className="text-amber-500">Touch</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium italic">
                            We&apos;re here to help around the clock. Reach out for reservations,
                            custom quotes, or immediate travel support.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Contact Information & Form */}
            <section className="section bg-white scroll-mt-20" id="contact-form">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20">
                        {/* Contact Information */}
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-900 font-black text-[10px] uppercase tracking-widest mb-6">
                                <Sparkles size={12} className="text-amber-500" />
                                Connection Points
                            </div>
                            <h2 className="mb-8 font-display text-4xl font-bold text-slate-900 uppercase tracking-tight">Executive Support</h2>
                            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                                Our dedicated team is stationed in the heart of the metro,
                                ensuring seamless communication for every flight, every day.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        icon: <Phone size={28} />,
                                        label: 'Call Us 24/7',
                                        value: phone,
                                        href: `tel:${phone.replace(/\D/g, '')}`,
                                        desc: 'For immediate dispatch and reservations'
                                    },
                                    {
                                        icon: <Mail size={28} />,
                                        label: 'Email Support',
                                        value: 'info@goquicksilver.com',
                                        href: 'mailto:info@goquicksilver.com',
                                        desc: 'Response within 24 business hours'
                                    },
                                    {
                                        icon: <MapPin size={28} />,
                                        label: 'Service Headquarters',
                                        value: 'Kansas City Metro',
                                        desc: 'Serving MCI and all regional airports'
                                    },
                                    {
                                        icon: <Clock size={28} />,
                                        label: 'Hours of Operation',
                                        value: 'Open 24/7/365',
                                        desc: 'Including all major holidays'
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-6 p-8 bg-slate-50 rounded-[35px] border border-slate-100 hover:shadow-xl hover:border-amber-500/20 transition-all group">
                                        <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center flex-shrink-0 text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors shadow-lg">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</h3>
                                            {item.href ? (
                                                <a href={item.href} className="text-2xl font-display font-bold text-slate-900 hover:text-amber-600 transition-colors">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <div className="text-2xl font-display font-bold text-slate-900">{item.value}</div>
                                            )}
                                            <p className="text-slate-500 mt-2 font-medium italic">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        {/* Contact Form */}
                        <FadeIn delay={0.2}>
                            <div className="bg-white p-10 md:p-16 rounded-[50px] shadow-2xl border border-slate-100 h-full relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full"></div>
                                <h2 className="mb-8 font-display text-3xl font-bold text-slate-900 uppercase">Send A Message</h2>
                                <form className="space-y-8 relative z-10">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <label htmlFor="name" className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">Full Name</label>
                                            <input type="text" id="name" name="name" required className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none font-medium" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">Email Address</label>
                                            <input type="email" id="email" name="email" required className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none font-medium" placeholder="john@example.com" />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <label htmlFor="phone" className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">Phone Number</label>
                                            <input type="tel" id="phone" name="phone" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none font-medium" placeholder="(913) 555-0123" />
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">Service Type</label>
                                            <select id="subject" name="subject" required className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none bg-white font-medium">
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
                                        <label htmlFor="message" className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">Inquiry Details</label>
                                        <textarea id="message" name="message" required rows={5} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none outline-none font-medium" placeholder="Tell us how we can assist your travel..."></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary w-full text-2xl py-6 flex items-center justify-center gap-3">
                                        <Send size={24} />
                                        Inquire Now
                                    </button>

                                    <p className="text-sm text-slate-400 text-center italic font-medium">
                                        All transmissions are secure and encrypted.
                                    </p>
                                </form>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="section bg-slate-50 border-t border-slate-100">
                <div className="container-custom">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Our Regional Hub</h2>
                            <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium italic">
                                Centrally located to provide the fastest response times for every Kansas City neighborhood.
                            </p>
                        </div>
                        <div className="rounded-[50px] overflow-hidden shadow-2xl border border-slate-200 h-[600px] relative bg-slate-200 group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1586450.6907803565!2d-96.77365946379875!3d39.048686057531576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0e10e6e60a3dd%3A0x4f41b91ef0ff1bb!2sQuicksilver%20Airport%20Shuttle!5e0!3m2!1sen!2sde!4v1771138195522!5m2!1sen!2sde"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Quicksilver Airport Shuttle Service Map"
                                className="filter saturate-[0.8] contrast-[1.1]"
                            ></iframe>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
