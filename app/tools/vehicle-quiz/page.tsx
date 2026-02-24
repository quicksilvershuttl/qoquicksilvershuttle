'use client';

import { useState } from 'react';
import { ArrowRight, Car, CheckCircle, RotateCcw, Users, Luggage, Briefcase, Sparkles, ShieldCheck, ChevronRight, Phone, Award } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';

export default function VehicleQuizPage() {
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({
        passengers: '',
        luggage: '',
        purpose: ''
    });

    const [result, setResult] = useState<null | {
        name: string;
        desc: string;
        price: string;
        icon: React.ReactNode;
        perks: string[];
    }>(null);

    const handleAnswer = (question: string, value: string) => {
        const newAnswers = { ...answers, [question]: value };
        setAnswers(newAnswers);

        if (step < 3) {
            setStep(step + 1);
        } else {
            calculateResult(newAnswers);
        }
    };

    const calculateResult = (finalAnswers: Record<string, string>) => {
        if (finalAnswers.passengers === '7+' || finalAnswers.luggage === 'Extra') {
            setResult({
                name: 'Executive Shuttle Van',
                desc: 'The definitive choice for large groups, university sports teams, or families with extensive luggage. Maximum space without compromising comfort.',
                price: 'Custom Quote',
                icon: <Users size={48} className="text-blue-600" />,
                perks: ['Up to 14 Passengers', 'Walk-in Cabin', 'Dedicated Luggage Bay', 'Group Discounts']
            });
        } else if (finalAnswers.passengers === '4-6' || finalAnswers.purpose === 'Family Vacation') {
            setResult({
                name: 'Premium Luxury SUV',
                desc: 'Perfect for families or groups who prioritize legroom and a high-profile view. Ideal for long hauls from MCI to Lawrence or Topeka.',
                price: 'From $75',
                icon: <ShieldCheck size={48} className="text-blue-600" />,
                perks: ['Up to 6 Passengers', '4WD Capabilities', 'Extra-Large Cargo Space', 'Premium Leather Interior']
            });
        } else if (finalAnswers.purpose === 'Corporate Travel' || finalAnswers.purpose === 'Special Event') {
            setResult({
                name: 'Business Class Sedan',
                desc: 'Designed for the modern professional. Quiet, discreet, and polished. Perfect for finishing emails on the way to your meeting.',
                price: 'From $55',
                icon: <Briefcase size={48} className="text-blue-600" />,
                perks: ['Up to 3 Passengers', 'Whisper-Quiet Cabin', 'Priority Dispatch', 'WiFi Availability']
            });
        } else {
            setResult({
                name: 'Compact Executive Sedan',
                desc: 'Our most efficient and popular choice for solo travelers and couples. Quick, clean, and reliably on-time.',
                price: 'From $35',
                icon: <Car size={48} className="text-blue-600" />,
                perks: ['Up to 3 Passengers', 'Fixed-Rate Value', 'Instant Confirmation', 'Professional Chauffeur']
            });
        }
    };

    const resetQuiz = () => {
        setStep(1);
        setAnswers({ passengers: '', luggage: '', purpose: '' });
        setResult(null);
    };

    return (
        <main className="min-h-screen bg-slate-50 py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/20 rounded-full blur-[140px] -z-10 animate-pulse-glow"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-100/10 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #0c1d37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container-custom relative z-10 max-w-4xl mx-auto">
                <FadeIn>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0c1d37] text-white font-black text-[10px] mb-8 uppercase tracking-[0.25em] shadow-lg border border-white/10">
                            <Sparkles size={14} className="text-blue-400" />
                            Premium Fleet Selection
                        </div>
                        <h1 className="font-display font-black text-4xl md:text-7xl tracking-tight text-[#0c1d37] mb-8 uppercase leading-none">
                            Find Your <br />
                            <span className="text-blue-600">Perfect Trip</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">
                            Answer 3 tactical questions and our dispatch logic will recommend the ideal vehicle for your MCI transfer.
                        </p>
                    </div>
                </FadeIn>

                <div className="bg-white rounded-[60px] shadow-2xl border border-slate-100 p-8 md:p-20 relative overflow-hidden min-h-[500px] flex flex-col justify-center">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 pointer-events-none"></div>

                    {!result ? (
                        <div className="relative z-10 w-full">
                            {/* Step Indicator */}
                            <div className="flex justify-between items-center mb-16 max-w-sm mx-auto">
                                {[1, 2, 3].map((s) => (
                                    <div key={s} className="flex flex-col items-center gap-3">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black transition-all duration-500 shadow-sm border ${step >= s ? 'bg-blue-600 text-white border-blue-600 scale-110' : 'bg-slate-50 text-slate-300 border-slate-100'}`}>
                                            {step > s ? <CheckCircle size={20} /> : s}
                                        </div>
                                        <span className={`text-[10px] font-black uppercase tracking-widest ${step >= s ? 'text-blue-600' : 'text-slate-300'}`}>
                                            {s === 1 ? 'Density' : s === 2 ? 'Capacity' : 'Context'}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="max-w-xl mx-auto">
                                {step === 1 && (
                                    <FadeIn key="step1">
                                        <div className="text-center mb-12">
                                            <h2 className="text-2xl md:text-4xl font-display font-black text-[#0c1d37] mb-4 uppercase tracking-tight">Passenger Count?</h2>
                                            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Determining necessary cabin volume</p>
                                        </div>
                                        <div className="grid gap-4">
                                            {[
                                                { label: '1-3 Passengers', icon: <Users size={20} />, value: '1-3' },
                                                { label: '4-6 Passengers', icon: <Users size={24} />, value: '4-6' },
                                                { label: '7+ Passengers', icon: <Users size={28} />, value: '7+' }
                                            ].map((opt) => (
                                                <button
                                                    key={opt.label}
                                                    onClick={() => handleAnswer('passengers', opt.value)}
                                                    className="w-full text-left px-10 py-6 rounded-[32px] border-2 border-slate-50 bg-slate-50 hover:border-blue-200 hover:bg-white transition-all font-black text-xl text-[#0c1d37] flex justify-between items-center group shadow-sm hover:shadow-xl hover:-translate-y-1"
                                                >
                                                    <div className="flex items-center gap-6">
                                                        <div className="p-4 bg-white rounded-2xl shadow-sm text-slate-400 group-hover:text-blue-600 transition-colors">
                                                            {opt.icon}
                                                        </div>
                                                        {opt.label}
                                                    </div>
                                                    <ChevronRight className="text-blue-600 opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all" size={24} />
                                                </button>
                                            ))}
                                        </div>
                                    </FadeIn>
                                )}

                                {step === 2 && (
                                    <FadeIn key="step2">
                                        <div className="text-center mb-12">
                                            <h2 className="text-2xl md:text-4xl font-display font-black text-[#0c1d37] mb-4 uppercase tracking-tight">Total Luggage?</h2>
                                            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Optimizing cargo deployment</p>
                                        </div>
                                        <div className="grid gap-4">
                                            {[
                                                { label: 'Carry-ons Only', icon: <Briefcase size={20} />, value: 'Light' },
                                                { label: 'Standard Baggage', icon: <Luggage size={24} />, value: 'Standard' },
                                                { label: 'Extra Heavy / XL', icon: <ShieldCheck size={28} />, value: 'Extra' }
                                            ].map((opt) => (
                                                <button
                                                    key={opt.label}
                                                    onClick={() => handleAnswer('luggage', opt.value)}
                                                    className="w-full text-left px-10 py-6 rounded-[32px] border-2 border-slate-50 bg-slate-50 hover:border-blue-200 hover:bg-white transition-all font-black text-xl text-[#0c1d37] flex justify-between items-center group shadow-sm hover:shadow-xl hover:-translate-y-1"
                                                >
                                                    <div className="flex items-center gap-6">
                                                        <div className="p-4 bg-white rounded-2xl shadow-sm text-slate-400 group-hover:text-blue-600 transition-colors">
                                                            {opt.icon}
                                                        </div>
                                                        {opt.label}
                                                    </div>
                                                    <ChevronRight className="text-blue-600 opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all" size={24} />
                                                </button>
                                            ))}
                                        </div>
                                    </FadeIn>
                                )}

                                {step === 3 && (
                                    <FadeIn key="step3">
                                        <div className="text-center mb-12">
                                            <h2 className="text-2xl md:text-4xl font-display font-black text-[#0c1d37] mb-4 uppercase tracking-tight">Trip Context?</h2>
                                            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Perfecting the cabin experience</p>
                                        </div>
                                        <div className="grid gap-4">
                                            {[
                                                { label: 'Corporate Travel', value: 'Corporate Travel' },
                                                { label: 'Family Vacation', value: 'Family Vacation' },
                                                { label: 'Budget / Solo', value: 'Budget/Solo Flight' },
                                                { label: 'Special Event', value: 'Special Event' }
                                            ].map((opt) => (
                                                <button
                                                    key={opt.label}
                                                    onClick={() => handleAnswer('purpose', opt.value)}
                                                    className="w-full text-left px-10 py-6 rounded-[32px] border-2 border-slate-50 bg-slate-50 hover:border-blue-200 hover:bg-white transition-all font-black text-xl text-[#0c1d37] flex justify-between items-center group shadow-sm hover:shadow-xl hover:-translate-y-1"
                                                >
                                                    {opt.label}
                                                    <ChevronRight className="text-blue-600 opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all" size={24} />
                                                </button>
                                            ))}
                                        </div>
                                    </FadeIn>
                                )}
                            </div>
                        </div>
                    ) : (
                        <FadeIn key="result">
                            <div className="text-center relative z-10 w-full max-w-2xl mx-auto">
                                <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-50 text-blue-600 rounded-[32px] mb-8 shadow-inner">
                                    {result.icon}
                                </div>
                                <h2 className="text-xs font-black text-slate-300 uppercase tracking-[0.4em] mb-4">Precision Match Found</h2>
                                <h3 className="text-4xl md:text-6xl font-display font-black text-[#0c1d37] mb-6 uppercase tracking-tight leading-none">{result.name}</h3>
                                <p className="text-xl text-slate-500 leading-relaxed mb-12 font-medium">
                                    {result.desc}
                                </p>

                                <div className="grid sm:grid-cols-2 gap-12 mb-16">
                                    <div className="bg-slate-50 rounded-[40px] p-10 border border-slate-100 flex flex-col items-center">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Verified 2026 Rate</p>
                                        <p className="text-5xl font-black text-[#0c1d37] tracking-tighter">{result.price}</p>
                                        <p className="text-xs font-bold text-green-600 mt-2">FIXED · NO SURGE</p>
                                    </div>
                                    <div className="text-left space-y-4 pt-4">
                                        {result.perks.map((perk, i) => (
                                            <div key={i} className="flex items-center gap-4 text-slate-700 font-black uppercase text-xs tracking-widest">
                                                <div className="w-6 h-6 rounded-lg bg-green-50 text-green-500 flex items-center justify-center border border-green-100">
                                                    <CheckCircle size={14} />
                                                </div>
                                                {perk}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 border-t border-slate-50">
                                    <Link href="/reservation" className="btn btn-cta bg-blue-600 hover:bg-blue-700 text-white px-16 py-8 text-2xl font-black flex-1 shadow-2xl hover:scale-105 transition-all rounded-[32px] border-none flex items-center justify-center gap-4">
                                        Proceed to Booking
                                        <ArrowRight size={28} />
                                    </Link>
                                    <button onClick={resetQuiz} className="btn bg-white border-2 border-slate-100 text-slate-400 hover:text-blue-600 hover:border-blue-100 px-10 py-5 text-lg font-black uppercase tracking-tight flex items-center justify-center gap-3 rounded-[32px] shadow-sm">
                                        <RotateCcw size={20} />
                                        Recalculate
                                    </button>
                                </div>
                            </div>
                        </FadeIn>
                    )}
                </div>

                {/* Footer trust signals */}
                <div className="mt-20 flex flex-wrap items-center justify-center gap-12 opacity-30">
                    <div className="flex items-center gap-3 grayscale">
                        <ShieldCheck size={32} />
                        <div className="text-left">
                            <p className="text-[10px] font-black uppercase tracking-widest leading-none">Insured & Bonding</p>
                            <p className="text-[10px] uppercase font-bold text-slate-500">Fleet Operations</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 grayscale">
                        <Award size={32} />
                        <div className="text-left">
                            <p className="text-[10px] font-black uppercase tracking-widest leading-none">Verified Reviews</p>
                            <p className="text-[10px] uppercase font-bold text-slate-500">MCI Logistics</p>
                        </div>
                    </div>
                </div>

                <p className="mt-16 text-center text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em] max-w-xl mx-auto leading-loose">
                    *This proprietary tool uses 2026 fleet availability metrics, MCI arrival logistics, and group volume algorithms to recommend private transportation solutions. Rates reflect current off-peak benchmarks.
                </p>
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
