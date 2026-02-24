'use client';

import Link from 'next/link';
import { Phone, X } from 'lucide-react';

interface MobileMenuProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
    return (
        <>
            {/* Mobile Menu Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-[#0c1d3d]/70 backdrop-blur-md z-[90] lg:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed top-0 right-0 bottom-0 w-[85%] sm:w-80 bg-white z-[100] lg:hidden transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-2xl overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col p-6 pb-32">
                    {/* Mobile Menu Close Button (Since it's top-0 now) */}
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 -mr-2 text-[#2463eb]"
                        >
                            <X size={32} />
                        </button>
                    </div>

                    {/* Mobile Menu Header/Badge */}
                    <div className="mb-8">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2463eb]/40 mb-1">Navigation Hub</p>
                        <div className="h-1 w-12 bg-[#2463eb] rounded-full"></div>
                    </div>

                    <div className="space-y-1 mb-10">
                        {[
                            { name: 'Home', href: '/' },
                            { name: 'Service Areas', href: '/service-areas' },
                            { name: 'Fare Quote', href: '/fare-quote' },
                            { name: 'FAQ', href: '/faq' },
                            { name: 'About Us', href: '/about' },
                            { name: 'Contact', href: '/contact' },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                prefetch={false}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-between py-4 text-[#2463eb] border-b border-[#2463eb]/10 hover:text-[#1d4ed8] text-lg font-display font-bold group transition-colors"
                            >
                                {link.name}
                                <span className="text-[#2463eb]/30 group-hover:translate-x-1 transition-transform">&rarr;</span>
                            </Link>
                        ))}

                        <div className="py-6">
                            <span className="block text-[#2463eb]/40 font-black text-[10px] tracking-[0.2em] uppercase mb-4">Our Services</span>
                            <div className="space-y-3">
                                {[
                                    { name: 'MCI Airport Transfers', href: '/airport-shuttle' },
                                    { name: 'Corporate Car Service', href: '/corporate' },
                                    { name: 'Group & Event Shuttles', href: '/group-shuttle' },
                                ].map((s) => (
                                    <Link
                                        key={s.name}
                                        href={s.href}
                                        prefetch={false}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-[#2463eb]/5 text-[#2463eb] font-bold hover:bg-[#2463eb]/5 transition-colors"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-[#2463eb]/20"></div>
                                        {s.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Link
                            href="/reservation"
                            prefetch={false}
                            onClick={() => setIsOpen(false)}
                            className="w-full btn btn-cta flex items-center justify-center py-5 text-lg font-bold shadow-xl shadow-orange-500/30 border-none"
                        >
                            Book Your Ride Now
                        </Link>
                        <a
                            href="tel:913-262-0905"
                            className="w-full flex items-center justify-center gap-3 py-4 bg-[#2463eb]/10 text-[#2463eb] rounded-2xl font-bold border border-[#2463eb]/20 hover:bg-[#2463eb] hover:text-white transition-all"
                        >
                            <Phone size={20} />
                            (913) 262-0905
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
