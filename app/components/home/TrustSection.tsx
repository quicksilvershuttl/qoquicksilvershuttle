'use client';
import Link from 'next/link';
import FadeIn from '../FadeIn';

export default function TrustSection() {
    return (
        <section className="section bg-white text-[#2463eb] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#2463eb]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="container-custom relative z-10">
                <FadeIn className="max-w-4xl mx-auto text-center">
                    <h2 className="mb-6 font-display text-4xl lg:text-5xl">Quicksilver Airport Shuttle Ensures<br /><span className="text-[#2463eb]">Everything Goes According to Plan</span></h2>
                    <p className="text-xl text-slate-600 mb-8 font-light">
                        Your satisfaction is our priority. Experience superior quality, safety, and the fastest airport shuttle service in town without ever compromising your schedule.
                    </p>
                    <p className="text-lg text-slate-500 border-t border-white pt-8 mt-8">
                        Serving Kansas City since 1982 with pride and professionalism.
                    </p>
                    <div className="mt-8">
                        <Link href="/contact" className="btn btn-cta text-xl">
                            Contact Us Today
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
