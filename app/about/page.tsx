import { Metadata } from 'next';
import { ShieldCheck, Users, Clock, Award, Target, MessageSquare, Star, Info, Phone } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export const metadata: Metadata = {
    title: 'About Us | Quicksilver Airport Shuttle',
    description: 'Learn about Quicksilver Airport Shuttle - serving Kansas City since 1982 with premium airport transportation services.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section - REFRESHED */}
            <section className="relative py-32 bg-slate-900 text-white overflow-hidden text-center">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px]"></div>

                <div className="container-custom relative z-10">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-amber-500 font-bold text-xs mb-8 uppercase tracking-widest border border-white/20 backdrop-blur-md">
                            <Info size={16} />
                            Our Legacy
                        </div>
                        <h1 className="mb-6 font-display font-bold text-5xl md:text-8xl tracking-tight uppercase leading-[0.9]">
                            About <br />
                            <span className="text-amber-500">Quicksilver</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium italic">
                            Serving the Kansas City Metropolitan area with reliability and integrity since 1982.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Who We Are */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 font-bold text-sm mb-6 uppercase tracking-widest border border-amber-500/20">
                                <Users size={16} />
                                Who We Are
                            </div>
                            <h2 className="mb-8 font-display text-4xl font-bold text-slate-900 uppercase tracking-tight">Your Trusted KC Transport Partner</h2>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                Whether you are traveling alone or with a group, we have the vehicle and service plan to fit your needs.
                                <strong> Quicksilver Airport Shuttle</strong> is Kansas City&apos;s premier airport shuttle and airport car service provider,
                                offering trusted transportation <strong>since 1982</strong>.
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
                                    <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 font-bold text-slate-700">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                        {service}
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="relative p-10 bg-slate-900 rounded-[50px] shadow-2xl overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                                <div className="relative z-10 text-center py-16">
                                    <div className="text-8xl font-display font-black text-amber-500 mb-4 group-hover:scale-110 transition-transform duration-500">40+</div>
                                    <div className="text-2xl font-bold text-white uppercase tracking-[0.2em] mb-4">Years of Excellence</div>
                                    <p className="text-slate-400 text-lg uppercase tracking-widest">Established 1982</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
                <div className="container-custom relative z-10">
                    <FadeIn>
                        <div className="text-center mb-20">
                            <h2 className="mb-4 font-display text-4xl md:text-5xl font-bold uppercase tracking-tight">What Our Customers Are Saying</h2>
                            <p className="text-xl text-slate-400">Word on the street from our valued passengers.</p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                text: "The owner personifies honor and integrity. The company also gives a personal touch from their drivers. I would not hesitate to use them. Or recommend their services to anyone.",
                                author: "Rick Carlton",
                                rating: 5
                            },
                            {
                                text: "Had the best driver, his name was Haarun! Do request him if ur booking a driver. Very professional, car has lots of leg space, which is good after a long flight. Very friendly and on time.",
                                author: "Scott Daniel",
                                rating: 5
                            },
                            {
                                text: "I had a very good time with this service they was on time good service polite and clean car . I will use them again , and tell my friends and family to use this service.",
                                author: "Nimra Malik",
                                rating: 5
                            }
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="bg-slate-800/50 backdrop-blur-sm p-10 rounded-[40px] border border-slate-700/50 h-full flex flex-col hover:bg-slate-800 transition-all">
                                    <div className="flex text-amber-500 mb-6 gap-1">
                                        {[...Array(item.rating)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="text-lg italic text-slate-300 leading-relaxed mb-8 flex-grow">&ldquo;{item.text}&rdquo;</p>
                                    <div className="font-bold text-xl text-white border-t border-slate-700 pt-6">
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
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 uppercase tracking-tight">Why Choose Us?</h2>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Award className="text-amber-500" size={32} />,
                                title: 'Award-winning Company',
                                description: 'We have won 4 awards for our efficient services in the region.'
                            },
                            {
                                icon: <Clock className="text-amber-500" size={32} />,
                                title: 'Available 24/7',
                                description: 'Book airport shuttle services through Quicksilver. We&apos;re available 24/7.'
                            },
                            {
                                icon: <ShieldCheck className="text-amber-500" size={32} />,
                                title: 'Safety First',
                                description: 'Your Safety is our Top Priority. Drivers professionally trained, insured, and licensed.'
                            },
                            {
                                icon: <Star className="text-amber-500" size={32} />,
                                title: 'Save Money & Time',
                                description: 'Fixed rates with no surprises. Guaranteed reliability every single time.'
                            }
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 0.1} className="text-center p-8 bg-slate-50 rounded-[30px] border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all h-full">
                                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-slate-900 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">{item.description}</p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="section bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent"></div>
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <div className="flex items-center gap-4 mb-8">
                                <Target className="text-amber-500" size={40} />
                                <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white">Our Mission</h2>
                            </div>
                            <p className="text-2xl text-slate-300 leading-tight mb-8 font-medium">
                                We are an on-demand shared-ride vehicle service. We use large vehicles with lots of storage.
                                We understand the stress of air travel and our reliability and advance reservations reduce that pressure.
                            </p>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
                                <div className="flex items-start gap-4">
                                    <Info className="text-amber-500 mt-1 flex-shrink-0" size={24} />
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-wider">Note on Reservations</h4>
                                        <p className="text-slate-400 leading-relaxed font-medium capitalize">
                                            If you have a round trip reservation and want to cancel both trips, you will need to cancel each reservation individually.
                                            Each round trip reservation has a different confirmation number. The Quicksilver team understands passenger concerns and is here to assist.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className="p-12 bg-white rounded-[50px] shadow-2xl relative">
                                <MessageSquare className="text-slate-900/5 absolute top-10 right-10" size={120} />
                                <h3 className="text-slate-900 font-display text-3xl font-bold mb-8 uppercase tracking-tight">Need Assistance?</h3>
                                <p className="text-slate-600 text-lg mb-10 font-medium">
                                    Our team analyzed the most common passenger worries and we&apos;ve refined our service to address them directly.
                                    Safety and punctuality are guaranteed.
                                </p>
                                <div className="space-y-6">
                                    <a href="tel:913-262-0905" className="btn btn-primary w-full py-5 text-xl flex items-center justify-center gap-4">
                                        <Phone size={24} />
                                        Call Support Now
                                    </a>
                                    <a href="/contact" className="btn btn-secondary w-full py-5 text-xl shadow-none">
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
