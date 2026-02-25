'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
                <div className="container-custom">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group py-3 md:py-2 min-h-[48px]">
                            <div className="flex flex-col">
                                <span className="text-xl md:text-2xl font-bold font-display text-[#2463eb] leading-none tracking-tight group-hover:text-[#2463eb] transition-colors">QUICKSILVER</span>
                                <span className="text-[8px] md:text-[10px] text-[#2463eb] font-bold tracking-[0.2em] uppercase group-hover:text-[#2463eb] transition-colors">AIRPORT SHUTTLE</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            <Link href="/" prefetch={false} className="text-[#2463eb] hover:text-[#2463eb] font-medium transition-colors relative group">
                                Home
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2463eb] group-hover:w-full transition-all duration-300"></span>
                            </Link>

                            {/* Faceted Services Menu (Conversion Focused) */}
                            <div className="relative group">
                                <button className="flex items-center gap-1 text-[#2463eb] hover:text-[#2463eb] font-medium transition-colors">
                                    Services
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>
                                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left flex flex-col overflow-hidden">
                                    <Link href="/airport-shuttle" prefetch={false} className="px-6 py-4 hover:bg-slate-50 text-[#2463eb] hover:text-[#2463eb] font-medium border-b border-slate-50 transition-colors">
                                        MCI Airport Transfers
                                    </Link>
                                    <Link href="/corporate" prefetch={false} className="px-6 py-4 hover:bg-slate-50 text-[#2463eb] hover:text-[#2463eb] font-medium border-b border-slate-50 transition-colors">
                                        Corporate Car Service
                                    </Link>
                                    <Link href="/group-shuttle" prefetch={false} className="px-6 py-4 hover:bg-slate-50 text-[#2463eb] hover:text-[#2463eb] font-medium transition-colors">
                                        Group & Event Shuttles
                                    </Link>
                                </div>
                            </div>

                            <Link href="/service-areas" prefetch={false} className="text-[#2463eb] hover:text-[#2463eb] font-medium transition-colors relative group">
                                Service Areas
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2463eb] group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            <Link href="/faq" prefetch={false} className="text-[#2463eb] hover:text-[#2463eb] font-medium transition-colors relative group">
                                FAQ
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2463eb] group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </div>

                        <div className="hidden lg:flex items-center gap-4">
                            <Link href="/reservation" className="btn btn-cta px-8 py-3 text-sm tracking-widest font-bold border-none">
                                BOOK NOW
                            </Link>
                            <div className="relative w-16 h-16 ml-4">
                                <Image
                                    src="/Home page images/unnamed-1.png"
                                    alt="Quicksilver TripAdvisor Certificate of Excellence"
                                    fill
                                    sizes="64px"
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Phone Number - Desktop & Tablet */}
                        <div className="hidden md:flex items-center">
                            <a
                                href="tel:913-262-0905"
                                className="flex items-center gap-2 text-[#2463eb] font-bold hover:text-[#1d4ed8] transition-colors px-4 py-2"
                            >
                                <Phone size={18} />
                                (913) 262-0905
                            </a>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="flex items-center lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-4 -mr-2 text-[#2463eb] hover:text-[#2463eb] transition-transform active:scale-90 flex items-center justify-center min-w-[48px] min-h-[48px]"
                                aria-label="Toggle Navigation Menu"
                            >
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
}


