'use client';

import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

export default function MobileActionTray() {
    return (
        <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-md">
            <div className="bg-[#0c1d3d]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-between gap-4">
                <a
                    href="tel:913-262-0905"
                    className="flex flex-col items-center justify-center gap-1 flex-1 py-4 text-white hover:bg-white/5 rounded-2xl transition-colors min-h-[56px]"
                >
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <Phone size={20} className="text-white" />
                    </div>
                </a>

                <Link
                    href="/reservation"
                    prefetch={false}
                    className="flex-[1.8] flex items-center justify-center gap-2 bg-[#2463eb] py-6 px-4 rounded-2xl text-white font-bold text-sm shadow-lg shadow-[#2463eb]/30 hover:bg-[#1d4ed8] active:scale-95 transition-all min-h-[56px]"
                >
                    <Mail size={18} className="text-white/80" />
                    <span>BOOK NOW</span>
                </Link>

                <Link
                    href="/fare-quote"
                    prefetch={false}
                    className="flex flex-col items-center justify-center gap-1 flex-1 py-4 text-white hover:bg-white/5 rounded-2xl transition-colors min-h-[56px]"
                >
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    </div>
                </Link>
            </div>
        </div>
    );
}
