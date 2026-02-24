'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PlaneTakeoff, Clock, MapPin, Calculator, AlertTriangle, ShieldCheck, ArrowRight, Phone, Sparkles, Navigation, ChevronRight } from 'lucide-react';
import FadeIn from '../../components/FadeIn';

export default function DepartureCalculator() {
    const [flightTime, setFlightTime] = useState('12:00');
    const [flightType, setFlightType] = useState('domestic');
    const [originCity, setOriginCity] = useState('kansas-city');
    const [calculatedTime, setCalculatedTime] = useState<string | null>(null);

    const driveTimes: Record<string, number> = {
        'kansas-city': 35,
        'overland-park': 50,
        'olathe': 55,
        'lawrence': 65,
        'lees-summit': 60,
        'blue-springs': 55,
        'manhattan': 130,
        'topeka': 80
    };

    const cities = [
        { id: 'kansas-city', name: 'Kansas City (Downtown/Plaza)' },
        { id: 'overland-park', name: 'Overland Park, KS' },
        { id: 'olathe', name: 'Olathe, KS' },
        { id: 'lawrence', name: 'Lawrence, KS' },
        { id: 'lees-summit', name: "Lee's Summit, MO" },
        { id: 'blue-springs', name: 'Blue Springs, MO' },
        { id: 'manhattan', name: 'Manhattan, KS' },
        { id: 'topeka', name: 'Topeka, KS' }
    ];

    const calculateDeparture = (e: React.FormEvent) => {
        e.preventDefault();
        const [hours, minutes] = flightTime.split(':').map(Number);
        let date = new Date();
        date.setHours(hours, minutes, 0, 0);
        const airportBufferMins = flightType === 'domestic' ? 120 : 180;
        const travelMins = driveTimes[originCity] + 15;
        date.setMinutes(date.getMinutes() - (airportBufferMins + travelMins));
        const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setCalculatedTime(formattedTime);
    };

    return (
        <main className="min-h-screen bg-slate-50 py-32 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/20 rounded-full blur-[140px] -z-10 animate-pulse-glow"></div>
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #0c1d37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container-custom relative z-10 max-w-5xl mx-auto">
                <FadeIn>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0c1d37] text-white font-black text-[10px] mb-8 uppercase tracking-[0.25em] shadow-lg border border-white/10">
                            <Navigation size={14} className="text-blue-400" />
                            Precision Transit Logistics
                        </div>
                        <h1 className="font-display font-black text-4xl md:text-7xl tracking-tight text-[#0c1d37] mb-8 uppercase leading-none">
                            MCI Arrival <br />
                            <span className="text-blue-600">Time Calculator</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">
                            Calculate your optimal home departure time for the new MCI single terminal based on real-world traffic data.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Calculator Form */}
                    <div className="lg:col-span-12">
                        <div className="bg-white rounded-[60px] shadow-2xl border border-slate-100 p-8 md:p-16 relative overflow-hidden">
                            <form onSubmit={calculateDeparture} className="relative z-10">
                                <div className="grid md:grid-cols-3 gap-10 mb-12">
                                    <div className="space-y-4">
                                        <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 ml-1">
                                            <Clock size={14} className="text-blue-600" />
                                            Flight Departure
                                        </label>
                                        <input
                                            type="time"
                                            required
                                            value={flightTime}
                                            onChange={(e) => setFlightTime(e.target.value)}
                                            className="w-full px-8 py-6 bg-slate-50 border-2 border-transparent rounded-[32px] focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none font-black text-2xl text-[#0c1d37] transition-all shadow-inner"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 ml-1">
                                            <PlaneTakeoff size={14} className="text-blue-600" />
                                            Flight Type
                                        </label>
                                        <div className="grid grid-cols-2 gap-2 p-1 bg-slate-50 rounded-[32px] border-2 border-transparent shadow-inner">
                                            <button
                                                type="button"
                                                onClick={() => setFlightType('domestic')}
                                                className={`py-5 px-4 rounded-[28px] font-black text-sm uppercase tracking-widest transition-all ${flightType === 'domestic' ? 'bg-white text-blue-600 shadow-sm scale-100' : 'text-slate-400'}`}
                                            >
                                                Domestic
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setFlightType('international')}
                                                className={`py-5 px-4 rounded-[28px] font-black text-sm uppercase tracking-widest transition-all ${flightType === 'international' ? 'bg-white text-blue-600 shadow-sm scale-100' : 'text-slate-400'}`}
                                            >
                                                Intl
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 ml-1">
                                            <MapPin size={14} className="text-blue-600" />
                                            Starting From
                                        </label>
                                        <select
                                            value={originCity}
                                            onChange={(e) => setOriginCity(e.target.value)}
                                            className="w-full px-8 py-6 bg-slate-50 border-2 border-transparent rounded-[32px] focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none font-black text-lg text-[#0c1d37] transition-all shadow-inner appearance-none"
                                        >
                                            {cities.map(c => (
                                                <option key={c.id} value={c.id}>{c.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-cta bg-blue-600 hover:bg-blue-700 text-white w-full py-8 text-2xl font-black rounded-[32px] shadow-2xl flex items-center justify-center gap-4 hover:scale-[1.02] transition-all border-none group">
                                    <Calculator size={28} />
                                    <span>Calculate Departure Routine</span>
                                    <ArrowRight className="group-hover:translate-x-3 transition-transform" size={28} />
                                </button>
                            </form>

                            {/* Results Area */}
                            {calculatedTime && (
                                <FadeIn>
                                    <div className="mt-16 pt-16 border-t border-slate-50 relative">
                                        <div className="bg-[#0c1d37] rounded-[50px] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                                            <div className="relative z-10">
                                                <h3 className="text-blue-400 font-black text-xs uppercase tracking-[0.4em] mb-6">Optimized Departure Window</h3>
                                                <p className="text-white/60 font-bold mb-4 uppercase text-sm">You should depart by:</p>
                                                <div className="text-7xl md:text-9xl font-display font-black text-white tracking-tighter mb-8 animate-float">
                                                    {calculatedTime}
                                                </div>

                                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
                                                    <div className="bg-white/5 border border-white/10 rounded-[28px] p-6 flex items-start gap-4 text-left">
                                                        <AlertTriangle className="text-amber-400 shrink-0" size={24} />
                                                        <p className="text-xs text-white/50 leading-relaxed font-medium">
                                                            Calculation incorporates a <strong>15-minute traffic buffer</strong> and specific <strong>MCI terminal check-in</strong> latency for 2026.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="mt-16 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                                                    <div className="text-left">
                                                        <p className="text-xl font-bold text-white mb-2">Avoid the drive entirely.</p>
                                                        <p className="text-white/40 text-sm">Professional chauffeured service starting at $35.</p>
                                                    </div>
                                                    <Link href="/reservation" className="btn bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-[24px] font-black text-lg shadow-xl flex items-center gap-4 transition-all border-none">
                                                        Book Quicksilver Instead <ChevronRight size={20} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            )}
                        </div>
                    </div>
                </div>

                {/* Micro-SEO Text Layer */}
                <div className="mt-20 text-center">
                    <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em] max-w-2xl mx-auto leading-loose">
                        *MCI Logistics Engine v4.2. Recommended arrival for domestic flights: 120mins prior. International: 180mins. Calculations reflect average I-70/I-435 transit density.
                    </p>
                </div>
            </div>

            {/* Mobile Sticky CTA */}
            <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
                <a href="tel:913-262-0905" className="btn bg-[#0c1d37] text-white w-full py-5 text-xl font-black uppercase tracking-tight shadow-2xl border-none rounded-2xl flex items-center justify-center gap-4 active:scale-95 transition-all">
                    <Phone size={24} />
                    Expert Assistance
                </a>
            </div>
        </main>
    );
}
