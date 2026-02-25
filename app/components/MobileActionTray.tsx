'use client';

import Link from 'next/link';
import { Phone, Calendar, Calculator } from 'lucide-react';

export default function MobileActionTray() {
    return (
        <div className="md:hidden fixed bottom-6 left-6 right-6 z-[100]">
            <div className="bg-[#0c1d37]/90 backdrop-blur-2xl border border-white/10 rounded-[32px] p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex items-center justify-between gap-2 ring-1 ring-white/10">
                <a
                    href="tel:913-262-0905"
                    className="flex flex-col items-center justify-center gap-1 flex-1 py-4 text-white hover:bg-white/5 rounded-2xl active:scale-95 transition-all"
                >
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-1">
                        <Phone size={22} className="text-blue-400" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Call Now</span>
                </a>

                <Link
                    href="/reservation"
                    className="flex-[2] flex flex-col items-center justify-center gap-1 bg-blue-600 py-4 px-4 rounded-[24px] text-white font-black text-sm shadow-xl shadow-blue-600/30 hover:bg-blue-500 active:scale-95 transition-all"
                >
                    <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-blue-100" />
                        <span className="uppercase tracking-tight">Book Pickup</span>
                    </div>
                </Link>

                <Link
                    href="/fare-quote"
                    className="flex flex-col items-center justify-center gap-1 flex-1 py-4 text-white hover:bg-white/5 rounded-2xl active:scale-95 transition-all"
                >
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-1">
                        <Calculator size={22} className="text-orange-400" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Quote</span>
                </Link>
            </div>
        </div>
    );
}
