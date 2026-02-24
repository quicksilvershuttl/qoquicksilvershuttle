'use client';
import { Star, Navigation, DollarSign, MapPin, Clock } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function Welcome() {
    return (
        <section className="section bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2463eb]/5 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/50 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
                    <FadeIn className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-white border border-white rounded-full shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-[#2463eb] animate-pulse"></div>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Reliability Redefined</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-display font-black leading-tight text-[#2463eb] mb-6 tracking-tight">
                            Looking for a Reliable <br />
                            <span className="text-[#2463eb]">Kansas City Airport Shuttle?</span>
                        </h2>

                        <div className="text-lg text-slate-600 space-y-6">
                            <p className="font-semibold text-[#2463eb] text-xl leading-relaxed">
                                Quicksilver Airport Shuttle provides fixed-rate, 24/7 premium airport car and shuttle service to Kansas City International Airport (MCI) and the surrounding Mid-West areas.
                            </p>
                            <p className="leading-relaxed">
                                Since 1982, we have been offering dedicated transportation to Wheeler Executive Airport, major venues like Arrowhead Stadium and Kauffman Stadium, as well as preferred transport for Kansas University (KU) and Kansas State University (KSU).
                            </p>

                            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-white/50 mt-8 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#2463eb]/5 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                                <h3 className="font-display font-bold text-[#2463eb] mb-3 flex items-center gap-3 text-xl">
                                    <Star size={24} className="text-[#2463eb] fill-[#2463eb] flex-shrink-0" />
                                    Chauffeur Insights for MCI Airport
                                </h3>
                                <p className="text-slate-600 italic font-medium leading-relaxed relative z-10">
                                    "Our experienced drivers report that the 3 PM to 5 PM shift at MCI Airport is the busiest due to peak arrival times. We recommend scheduling your airport transfer at least <strong className="text-[#2463eb]">2.5 hours before</strong> domestic departures to ensure a stress-free experience."
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {[
                            { title: 'The Lowest Rates', desc: 'Premium rides at highly competitive, fixed rates from any destination.', icon: <DollarSign size={28} /> },
                            { title: 'Point to Point', desc: 'Direct, private car service tailored entirely to your schedule.', icon: <MapPin size={28} /> },
                            { title: 'Instant Booking', desc: 'Enjoy 24/7 dispatch and return service to and from the Airport.', icon: <Clock size={28} /> },
                            { title: 'Wide Coverage', desc: 'Serving Kansas City, MO, Overland Park, Lenexa, and beyond.', icon: <Navigation size={28} /> }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-white hover:shadow-2xl hover:border-[#2463eb]/30 transition-all duration-500 group flex flex-col h-full hover:-translate-y-2">
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#2463eb] mb-6 group-hover:bg-[#2463eb] group-hover:text-white transition-colors duration-500 shadow-inner">
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-[#2463eb] font-display">{feature.title}</h4>
                                <p className="text-[#2463eb] text-opacity-70 leading-relaxed text-sm flex-grow">{feature.desc}</p>
                            </div>
                        ))}
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
