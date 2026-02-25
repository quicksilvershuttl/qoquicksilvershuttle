import Link from 'next/link';
import { Home, Phone, Search, ArrowRight, MapPin } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50"></div>
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-orange-500/5 rounded-full blur-[80px]"></div>

            <div className="container-custom relative z-10 text-center px-4 py-20">
                {/* 404 Badge */}
                <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-red-50 rounded-full border border-red-100">
                    <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
                    <span className="text-xs font-bold tracking-[0.25em] text-red-500 uppercase">Page Not Found</span>
                </div>

                {/* Big 404 */}
                <h1 className="text-[120px] sm:text-[180px] font-black text-[#0c1d37]/5 leading-none font-display select-none">
                    404
                </h1>

                {/* Message */}
                <div className="-mt-12 sm:-mt-16">
                    <h2 className="text-3xl sm:text-4xl font-black text-[#0c1d37] font-display tracking-tight mb-4">
                        Wrong Terminal?
                    </h2>
                    <p className="text-lg text-slate-500 max-w-md mx-auto mb-10 leading-relaxed">
                        The page you&apos;re looking for has departed. Let us help you find your way back to the right gate.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
                    <Link
                        href="/"
                        className="btn btn-cta text-base px-8 py-4 group border-none flex items-center gap-3"
                    >
                        <Home size={18} />
                        <span>Back to Home</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/reservation"
                        className="btn btn-primary text-base px-8 py-4 flex items-center gap-3"
                    >
                        <MapPin size={18} />
                        <span>Book a Ride</span>
                    </Link>
                </div>

                {/* Quick Links */}
                <div className="border-t border-slate-200 pt-10 max-w-lg mx-auto">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Popular Destinations</p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {[
                            { label: 'Get a Quote', href: '/fare-quote' },
                            { label: 'Service Areas', href: '/service-areas' },
                            { label: 'FAQ', href: '/faq' },
                            { label: 'Contact Us', href: '/contact' },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-bold text-[#0c1d37] hover:border-blue-300 hover:bg-blue-50 transition-all hover:-translate-y-0.5"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Call CTA */}
                <div className="mt-10">
                    <a
                        href="tel:913-262-0905"
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0c1d37] transition-colors text-sm"
                    >
                        <Phone size={14} />
                        <span>Need help? Call <strong>(913) 262-0905</strong></span>
                    </a>
                </div>
            </div>
        </main>
    );
}
