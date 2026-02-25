'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Application error:', error);
    }, [error]);

    return (
        <main className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-red-50/20 to-slate-50"></div>

            <div className="container-custom relative z-10 text-center px-4 py-20 max-w-xl mx-auto">
                {/* Error icon */}
                <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-red-100">
                    <AlertTriangle size={36} className="text-red-500" />
                </div>

                <h2 className="text-3xl font-black text-[#0c1d37] font-display tracking-tight mb-4">
                    Something Went Wrong
                </h2>
                <p className="text-slate-500 leading-relaxed mb-10">
                    We apologize for the inconvenience. Our dispatch team has been notified.
                    Please try again or contact us directly for immediate assistance.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-10">
                    <button
                        onClick={() => reset()}
                        className="btn btn-cta text-base px-8 py-4 group border-none flex items-center gap-3"
                    >
                        <RefreshCw size={18} className="group-hover:animate-spin" />
                        <span>Try Again</span>
                    </button>
                    <Link
                        href="/"
                        className="btn btn-primary text-base px-8 py-4 flex items-center gap-3"
                    >
                        <Home size={18} />
                        <span>Go Home</span>
                    </Link>
                </div>

                {/* Phone fallback */}
                <div className="border-t border-slate-200 pt-8">
                    <a
                        href="tel:913-262-0905"
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0c1d37] transition-colors"
                    >
                        <Phone size={16} />
                        <span>Need immediate help? Call <strong>(913) 262-0905</strong></span>
                    </a>
                </div>

                {/* Error code for debugging */}
                {error.digest && (
                    <p className="mt-6 text-[10px] text-slate-300 font-mono tracking-widest">
                        REF: {error.digest}
                    </p>
                )}
            </div>
        </main>
    );
}
