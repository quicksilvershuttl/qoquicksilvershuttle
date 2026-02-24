'use client';
import Link from 'next/link';
import { Car, DollarSign, Clock, Plane, CheckCircle, Shield } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function HowToBook() {
    return (
        <section className="section bg-slate-50">
            <div className="container-custom">
                <FadeIn className="text-center mb-12">
                    <h2 className="text-center mb-12 font-display">How Do I Book an Airport Shuttle in Kansas City?</h2>
                    <div className="max-w-4xl mx-auto mb-12">
                        <p className="text-base sm:text-lg text-[#2463eb] text-opacity-80 text-center mb-8">
                            Booking a reliable airport shuttle with Quicksilver is designed to be seamless. Our digital reservation system allows you to schedule your Kansas City airport car service instantly, securing your fixed 2026 rate without hidden fees.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {[
                        { icon: <Car size={32} />, text: 'Comfortable, reliable and luxurious vehicles' },
                        { icon: <DollarSign size={32} />, text: 'All-inclusive, fixed price' },
                        { icon: <Clock size={32} />, text: '24/7 availability' },
                        { icon: <Plane size={32} />, text: 'Airport shuttle or Airport car service' },
                        { icon: <CheckCircle size={32} />, text: 'No additional fee' },
                        { icon: <Shield size={32} />, text: 'Fast, safe and courteous drivers' }
                    ].map((item, index) => (
                        <FadeIn key={index} delay={index * 0.05}>
                            <div className="card p-6 flex items-center gap-4 hover:border-[#2463eb]/30 transition-colors">
                                <div className="text-[#2463eb] flex-shrink-0 bg-[#2463eb]/10 p-3 rounded-full">{item.icon}</div>
                                <p className="font-semibold text-[#2463eb] text-opacity-90">{item.text}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/contact" className="btn btn-outline text-xl">
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
