'use client';
import { DollarSign, Shield, Clock, Award, HeartHandshake, Navigation } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function Guarantee() {
    return (
        <section className="py-24 bg-white text-[#2463eb] relative overflow-hidden border-y border-white">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.03]"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-royal/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <FadeIn className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="mb-4 font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight">
                        The <span className="text-[#2463eb]">Quicksilver</span> Guarantee
                    </h2>
                    <p className="text-xl text-slate-600 font-light">
                        We aren't a rideshare app. We are a locally-owned, globally-minded executive car service. We guarantee your satisfaction on every single metric.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: <DollarSign size={32} />, title: 'Absolute Fixed Pricing', description: 'No surge pricing. No hidden tolls. The quote you receive is the exact final price you pay.' },
                        { icon: <Shield size={32} />, title: 'Fully Vetted Chauffeurs', description: 'Every driver undergoes strict background checks, localized route testing, and customer service training.' },
                        { icon: <Clock size={32} />, title: 'Guaranteed Punctuality', description: 'We monitor live flight telemetry. Whether you land early or late, your chauffeur will be waiting.' },
                        { icon: <Award size={32} />, title: '40+ Years of Legacy', description: 'Operating in Kansas City since 1982. We possess institutional knowledge that apps simply cannot match.' },
                        { icon: <HeartHandshake size={32} />, title: 'Impeccable Comfort', description: 'Pristine, non-smoking interiors with complimentary water and quiet-ride options available.' },
                        { icon: <Navigation size={32} />, title: 'Hyperlocal Routing', description: 'We bypass heavy I-435 traffic using proven, time-tested local arteries to ensure you never miss a flight.' }
                    ].map((benefit, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="bg-slate-50 border border-white shadow-md p-8 rounded-[32px] hover:shadow-xl hover:border-[#2463eb]/20 transition-all duration-300 h-full group">
                                <div className="w-16 h-16 rounded-2xl bg-white border border-white flex items-center justify-center mb-6 text-[#2463eb] group-hover:bg-[#2463eb] group-hover:text-white transition-all shadow-sm">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 font-display text-[#2463eb]">{benefit.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{benefit.description}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
