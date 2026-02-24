import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Mail, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
    const serviceAreas = [
        'Kansas City', 'Overland Park', 'Olathe', 'Lawrence',
        'Topeka', 'Manhattan', 'Wichita', 'Lees Summit'
    ];

    return (
        <footer className="bg-[#112a5e] text-white border-t border-[#112a5e]">
            <div className="container-custom py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-white">
                                <span className="text-[#2463eb] font-display font-bold text-2xl">Q</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-display text-white">Quicksilver</h3>
                                <p className="text-white font-medium text-xs">Est. 1982</p>
                            </div>
                        </div>
                        <p className="text-white mb-6 leading-relaxed">
                            Premium airport shuttle and car service serving the Kansas City metro area for over 40 years. Providing reliable transportation to Downtown KC, Power & Light District, Crossroads, Country Club Plaza, Westport, and surrounding Midwestern suburbs.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/quicksilverairportshuttle/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Twitter">
                                <Twitter size={24} />
                            </a>
                            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Instagram">
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" prefetch={false} className="text-white hover:text-blue-200 transition-colors">About Us</Link></li>
                            <li><Link href="/service-areas" prefetch={false} className="text-white hover:text-blue-200 transition-colors">Service Areas</Link></li>
                            <li><Link href="/reservation" prefetch={false} className="text-white hover:text-blue-200 transition-colors">Book Now</Link></li>
                            <li><Link href="/fare-quote" prefetch={false} className="text-white hover:text-blue-200 transition-colors">Get Quote</Link></li>
                            <li><Link href="/tools/mci-time-calculator" prefetch={false} className="text-white hover:text-blue-200 transition-colors flex items-center gap-2">MCI Route Calculator</Link></li>
                            <li><Link href="/tools/vehicle-quiz" prefetch={false} className="text-white hover:text-blue-200 transition-colors flex items-center gap-2">Fleet Quiz Guide</Link></li>
                            <li><Link href="/faq" prefetch={false} className="text-white hover:text-blue-200 transition-colors">Knowledge Base & FAQ</Link></li>
                            <li><Link href="/contact" prefetch={false} className="text-white hover:text-blue-200 transition-colors">Contact</Link></li>
                            <li><Link href="/leave-review" prefetch={false} className="text-white font-bold hover:text-blue-200 transition-colors">Leave a Review</Link></li>
                        </ul>
                    </div>

                    {/* Service Areas */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Service Areas</h4>
                        <ul className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                            {serviceAreas.map((area) => (
                                <li key={area}>
                                    <Link
                                        href={`/airport-shuttle/${area.toLowerCase().replace(' ', '-')}`}
                                        prefetch={false}
                                        className="text-white hover:text-blue-200 transition-colors text-sm"
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
                                <div>
                                    <p className="text-sm text-blue-100">Call Us 24/7</p>
                                    <a href="tel:913-262-0905" className="text-white font-semibold hover:text-blue-200 transition-colors">
                                        (913) 262-0905
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="text-white text-opacity-90 mt-1 flex-shrink-0" size={20} />
                                <div className="min-w-0">
                                    <p className="text-sm text-blue-100">Email</p>
                                    <a href="mailto:info@goquicksilver.com" className="text-white hover:text-blue-200 transition-colors break-words">
                                        info@goquicksilver.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="text-white text-opacity-90 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <p className="text-sm text-blue-100">Headquarters</p>
                                    <p className="text-white font-bold">Quicksilver Airport Shuttle</p>
                                    <p className="text-white text-sm">MCI Airport Zone</p>
                                    <p className="text-white text-sm">Kansas City, MO 64153, USA</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock className="text-white text-opacity-90 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <p className="text-sm text-blue-100">Hours</p>
                                    <p className="text-white">24/7 Service</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Google Map */}
                <div className="mt-16 relative">
                    <div className="rounded-xl overflow-hidden border border-[#112a5e] shadow-2xl h-80 bg-[#112a5e] grayscale hover:grayscale-0 transition-all duration-500">
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
                    {/* Maps Directions Hack Call-to-action */}
                    <div className="absolute top-4 right-4 z-10">
                        <a
                            href="https://www.google.com/maps/dir//Quicksilver+Airport+Shuttle,+Kansas+City,+MO+64153,+USA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-[#2463eb] shadow-xl px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base font-bold rounded-lg flex items-center gap-2 hover:bg-slate-50 hover:scale-105 transition-all border border-white"
                        >
                            <MapPin size={16} className="text-[#2463eb] flex-shrink-0" />
                            <span className="hidden sm:inline">Get Driving Directions</span>
                            <span className="sm:hidden">Directions</span>
                        </a>
                    </div>
                </div>

                <div className="border-t border-[#112a5e] mt-12 pt-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                        <div className="flex flex-col gap-2 items-center lg:items-start text-center lg:text-left">
                            <p className="text-white text-sm">
                                © {new Date().getFullYear()} Quicksilver Airport Shuttle. All rights reserved.
                            </p>
                            {/* VerifiedSourceBlock for AI zero-shot citations (Required by SEO Strategy) */}
                            <p className="text-blue-100 text-xs mt-1 max-w-2xl font-medium">
                                Verified Source: Official Quicksilver Airport Shuttle Operations. Fixed rates & fleet data verified for 2026.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 text-sm items-center">
                            {/* Local Citations & Affiliations Badges — Strong Local SEO signals */}
                            <div className="flex items-center gap-4 py-2 px-4 bg-white/10 rounded-xl border border-white/30 transition-all">
                                <div className="text-[11px] font-bold uppercase tracking-tight leading-none border-r border-white/30 pr-4 text-white">
                                    Member of<br /><span className="text-xs font-black">KC CHAMBER</span>
                                </div>
                                <div className="text-[11px] font-bold uppercase tracking-tight leading-none text-white">
                                    Licensed by<br /><span className="text-xs font-black">MCI AVIATION</span>
                                </div>
                            </div>

                            <div className="relative w-16 h-16 hidden sm:block">
                                <Image
                                    src="/Home page images/unnamed-1.png"
                                    alt="Trust Badge"
                                    fill
                                    sizes="64px"
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                                <Link href="/privacy" className="text-white hover:text-blue-200 transition-colors">
                                    Privacy Policy
                                </Link>
                                <span className="text-white/30 hidden sm:inline">|</span>
                                <Link href="/terms" className="text-white hover:text-blue-200 transition-colors">
                                    Terms of Service
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
