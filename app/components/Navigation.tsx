'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Phone, Menu, X, MapPin, Mail, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/service-areas', label: 'Service Areas' },
        { href: '/reservation', label: 'Book Now' },
        { href: '/fare-quote', label: 'Get Quote' },
        { href: '/faq', label: 'FAQ' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold font-display text-slate-900 leading-none tracking-tight group-hover:text-amber-600 transition-colors">QUICKSILVER</span>
                            <span className="text-[10px] text-amber-600 font-bold tracking-[0.2em] uppercase group-hover:text-slate-900 transition-colors">AIRPORT SHUTTLE</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-slate-700 hover:text-amber-600 font-medium transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Phone Number */}
                    <a
                        href="tel:913-262-0905"
                        className="hidden md:flex items-center gap-2 btn btn-primary px-6 py-2"
                    >
                        <Phone size={18} />
                        (913) 262-0905
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-slate-700 hover:text-amber-600"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-200 animate-fade-in">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-3 text-slate-700 hover:text-amber-600 hover:bg-slate-50 px-4 rounded-lg transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="tel:913-262-0905"
                            className="flex items-center gap-2 mt-4 btn btn-primary justify-center"
                        >
                            <Phone size={18} />
                            (913) 262-0905
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}

export function Footer() {
    const serviceAreas = [
        'Kansas City', 'Overland Park', 'Olathe', 'Lawrence',
        'Topeka', 'Manhattan', 'Wichita', 'Lees Summit'
    ];

    return (
        <footer className="bg-slate-900 text-white border-t border-slate-800">
            <div className="container-custom py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                                <span className="text-amber-500 font-display font-bold text-2xl">Q</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-display text-amber-500">Quicksilver</h3>
                                <p className="text-xs text-slate-400">Est. 1982</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Premium airport shuttle and car service serving Kansas City metro area for over 40 years.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/service-areas" className="text-gray-400 hover:text-white transition-colors">Service Areas</Link></li>
                            <li><Link href="/reservation" className="text-gray-400 hover:text-white transition-colors">Book Now</Link></li>
                            <li><Link href="/fare-quote" className="text-gray-400 hover:text-white transition-colors">Get Quote</Link></li>
                            <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Service Areas */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Service Areas</h4>
                        <ul className="space-y-3">
                            {serviceAreas.map((area) => (
                                <li key={area}>
                                    <Link
                                        href={`/airport-shuttle/${area.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {area}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <p className="text-sm text-gray-400">Call Us 24/7</p>
                                    <a href="tel:913-262-0905" className="text-white font-semibold hover:text-blue-400 transition-colors">
                                        (913) 262-0905
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <a href="mailto:info@goquicksilver.com" className="text-white hover:text-blue-400 transition-colors">
                                        info@goquicksilver.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <p className="text-sm text-gray-400">Service Area</p>
                                    <p className="text-white">Kansas City Metro</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <p className="text-sm text-gray-400">Hours</p>
                                    <p className="text-white">24/7 Service</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Google Map */}
                <div className="mt-16 rounded-xl overflow-hidden border border-slate-700 shadow-2xl h-80 relative bg-slate-800 grayscale hover:grayscale-0 transition-all duration-500">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1586450.6907803565!2d-96.77365946379875!3d39.048686057531576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0e10e6e60a3dd%3A0x4f41b91ef0ff1bb!2sQuicksilver%20Airport%20Shuttle!5e0!3m2!1sen!2sde!4v1771138195522!5m2!1sen!2sde"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Quicksilver Location Map"
                    ></iframe>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Quicksilver Airport Shuttle. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
}
