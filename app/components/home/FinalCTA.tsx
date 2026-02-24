'use client';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function FinalCTA() {
    return (
        <section className="section bg-[#2463eb] text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 mix-blend-multiply"></div>
            <div className="container-custom text-center relative z-10">
                <FadeIn>
                    <h2 className="mb-6 font-display text-4xl lg:text-5xl font-black">Ready to Book Your Ride?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80 font-light">
                        Experience the best Kansas City airport shuttle with the Quicksilver difference. Book online or call us 24/7.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12 w-full max-w-2xl mx-auto">
                        <Link href="/reservation" className="btn btn-cta shadow-xl text-xl w-full sm:w-auto px-12 border-none font-bold">
                            Book Online Now
                        </Link>
                        <a href="tel:913-262-0905" className="btn bg-white text-[#2463eb] hover:bg-slate-50 text-xl w-full sm:w-auto px-12 flex items-center justify-center gap-3 font-bold shadow-xl">
                            <Phone size={24} />
                            Call 913-262-0905
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
