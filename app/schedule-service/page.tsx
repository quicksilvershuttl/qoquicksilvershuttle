import { Metadata } from 'next';
import Link from 'next/link';
import { CalendarCheck, ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export const metadata: Metadata = {
    title: 'Schedule Service | Quicksilver Airport Shuttle',
    description: 'Schedule your airport shuttle service with Quicksilver. Book your Kansas City airport transportation.',
};

export default function ScheduleServicePage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
            <div className="container-custom relative z-10 text-center text-white">
                <FadeIn>
                    <div className="w-24 h-24 bg-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-10 rotate-6 shadow-2xl">
                        <CalendarCheck size={48} className="text-slate-900" />
                    </div>
                    <h1 className="mb-6 font-display font-bold text-5xl md:text-6xl tracking-tight uppercase">Schedule Your Service</h1>
                    <p className="text-xl mb-10 max-w-2xl mx-auto text-slate-300 italic">
                        Ready to book your premium airport shuttle? Our secure online reservation system is open 24/7 to confirm your pickup.
                    </p>
                    <Link
                        href="/reservation"
                        className="bg-amber-500 text-slate-900 hover:bg-amber-400 text-xl font-bold px-12 py-5 rounded-full transition-all shadow-xl hover:scale-105 inline-flex items-center gap-3"
                    >
                        Go to Reservations
                        <ArrowRight size={24} />
                    </Link>
                </FadeIn>
            </div>
        </main>
    );
}
