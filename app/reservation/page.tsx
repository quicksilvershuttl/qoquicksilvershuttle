'use client';

import { useState, useRef } from 'react';
import { Calendar, MapPin, Users, Luggage, Phone, Clock, CreditCard, ShieldCheck, Plane, Car, Sparkles, HelpCircle, ArrowRight, Shield, Star, Award, DollarSign, ChevronDown, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';
import HeroImage from '../components/HeroImage';
import BackgroundOverlay from '../components/BackgroundOverlay';
import { supabase } from '../utils/supabase';

export default function ReservationPage() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        serviceType: '',
        tripType: '',
        pickup: '',
        dropoff: '',
        date: '',
        time: '',
        passengers: '',
        luggage: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const inputClass = "w-full pl-14 pr-6 py-5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none font-bold text-[#0c1d37] placeholder:text-slate-400 shadow-sm";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Mark all inputs as validated so CSS shows red borders on invalid
        formRef.current?.querySelectorAll('input, select').forEach(el => el.classList.add('was-validated'));
        if (!formRef.current?.checkValidity()) return;
        setStatus('submitting');

        try {
            const { error } = await supabase
                .from('bookings')
                .insert([{
                    service_type: formData.serviceType,
                    trip_type: formData.tripType,
                    pickup_address: formData.pickup,
                    dropoff_address: formData.dropoff,
                    pickup_date: formData.date,
                    pickup_time: formData.time,
                    passengers: parseInt(formData.passengers),
                    luggage: parseInt(formData.luggage),
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    status: 'pending'
                }]);

            if (error) throw error;
            setStatus('success');
            setSubmitted(false);
            // Reset form
            setFormData({
                serviceType: '',
                tripType: '',
                pickup: '',
                dropoff: '',
                date: '',
                time: '',
                passengers: '',
                luggage: '',
                firstName: '',
                lastName: '',
                email: '',
                phone: ''
            });
            formRef.current?.querySelectorAll('input, select').forEach(el => el.classList.remove('was-validated'));
        } catch (err) {
            console.error('Booking error:', err);
            setStatus('error');
        }
    };

    return (
        <main className="min-h-screen bg-slate-50">
            {/* ═══ HERO SECTION — "Perfect Hero Section" framework ═══ */}
            <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-gradient-to-br from-[#0c1d3d] via-[#122b5e] to-[#0f2044] pt-24 pb-12">
                {/* Ambient Background Effects */}
                <div className="absolute inset-0 z-0">
                    <BackgroundOverlay />
                    <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[180px] animate-pulse-glow pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[150px] animate-float pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container-custom relative z-10 px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-8 lg:pt-0">

                        {/* ═══ LEFT COLUMN: Value Proposition ═══ */}
                        <FadeIn className="text-white flex flex-col items-center lg:items-start text-center lg:text-left">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 mb-7 px-5 py-2 bg-white/[0.07] backdrop-blur-xl rounded-full border border-white/[0.12] shadow-[0_0_30px_rgba(37,99,235,0.1)]">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
                                <p className="text-[11px] font-black tracking-[0.25em] text-white/80 uppercase">Guaranteed On-Time Pickup</p>
                            </div>

                            {/* H1 — VALUE PROPOSITION */}
                            <h1 className="mb-4 sm:mb-6 font-display font-black leading-[1.05] text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-white drop-shadow-lg text-center lg:text-left">
                                Secure Your <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-blue-300 drop-shadow-xl">
                                    Reservation
                                </span>
                            </h1>

                            {/* Supporting Copy */}
                            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-xl text-center lg:text-left font-medium mx-auto lg:mx-0">
                                Premium KCI airport transportation with seamless 24/7 online booking. Join over 500,000 travelers who trust Quicksilver.
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto mb-10 sm:mb-12">
                                <a
                                    href="#form"
                                    className="btn btn-cta bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-xl px-6 py-4 sm:px-12 sm:py-6 group shadow-[0_0_40px_rgba(37,99,235,0.25)] border-none w-full sm:w-auto flex justify-center items-center font-black rounded-2xl"
                                >
                                    <span>Start Booking</span>
                                    <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform" size={24} />
                                </a>
                                <a
                                    href="tel:913-262-0905"
                                    className="group flex items-center justify-center gap-2 sm:gap-3 text-white transition-all py-4 px-6 sm:px-8 rounded-2xl border-2 border-white/20 hover:border-blue-400 hover:bg-white/[0.06] backdrop-blur-sm w-full sm:w-auto font-black uppercase tracking-tight"
                                >
                                    <Phone size={20} className="text-blue-300 group-hover:text-white transition-colors" />
                                    <span>(913) 262-0905</span>
                                </a>
                            </div>

                            {/* Social Proof — identical to Homepage */}
                            <div className="flex flex-col sm:flex-row items-center gap-5 mb-10 pt-8 border-t border-white/10 w-full lg:w-auto mx-auto lg:mx-0">
                                <div className="flex items-center -space-x-3">
                                    {[
                                        'https://randomuser.me/api/portraits/men/32.jpg',
                                        'https://randomuser.me/api/portraits/women/44.jpg',
                                        'https://randomuser.me/api/portraits/men/46.jpg',
                                        'https://randomuser.me/api/portraits/women/12.jpg',
                                        'https://randomuser.me/api/portraits/men/14.jpg'
                                    ].map((imgSrc, i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0f2044] shadow-lg overflow-hidden flex-shrink-0">
                                            <img src={imgSrc} alt="Verified Quicksilver customer" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full bg-white/10 border-2 border-[#0f2044] flex items-center justify-center text-white/70 text-[10px] font-bold backdrop-blur-sm z-10">+4K</div>
                                </div>
                                <div className="flex flex-col gap-0.5 items-center sm:items-start">
                                    <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
                                        {[...Array(5)].map((_, i) => (<Star key={i} fill="currentColor" size={14} />))}
                                        <span className="text-white/60 text-sm ml-1 font-medium">4.8/5</span>
                                    </div>
                                    <p className="text-sm text-slate-400"><strong className="text-white/80">Rick, Scott & 4,000+ riders</strong> trust Quicksilver</p>
                                </div>
                            </div>

                            {/* Credibility Badges — white pill style same as homepage */}
                            <div className="flex flex-wrap xl:flex-nowrap whitespace-nowrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mx-auto lg:mx-0">
                                {[
                                    { label: 'Fully Insured', icon: <Shield size={16} className="text-[#2463eb]" /> },
                                    { label: 'Fixed Rates', icon: <DollarSign size={16} className="text-[#2463eb]" /> },
                                    { label: '24/7 Dispatch', icon: <Clock size={16} className="text-[#2463eb]" /> },
                                    { label: 'TripAdvisor ★', icon: <Award size={16} className="text-amber-500" /> },
                                ].map((badge, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-white text-[#0f2044] px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-lg shadow-black/20 hover:-translate-y-1 transition-transform">
                                        {badge.icon}
                                        <span>{badge.label}</span>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        {/* ═══ RIGHT COLUMN: Hero Imagery — no floating card, same as homepage ═══ */}
                        <FadeIn delay={0.25} className="w-full relative flex items-center justify-center pb-8 lg:pb-0">
                            <div className="relative w-full max-w-lg lg:max-w-full mx-auto">
                                {/* Glow behind vehicle */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#2463eb]/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"></div>

                                {/* Main Vehicle Image */}
                                <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-auto lg:h-[400px] drop-shadow-[0_20px_60px_rgba(36,99,235,0.4)]">
                                    <HeroImage
                                        src="/Home page images/Saloon Class.png"
                                        alt="Quicksilver secure airport shuttle reservation"
                                        priority
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none"></div>
            </section>


            {/* Reservation Form */}
            <section id="form" className="section bg-slate-50 relative z-30">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <FadeIn>
                            <div className="bg-white p-6 md:p-20 rounded-[60px] shadow-2xl border border-slate-100 relative -mt-40 z-20 overflow-hidden">
                                {status === 'success' ? (
                                    <div className="py-20 text-center">
                                        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                                            <CheckCircle2 size={48} />
                                        </div>
                                        <h2 className="text-4xl font-black text-[#0c1d37] uppercase mb-4 tracking-tight">Booking Received!</h2>
                                        <p className="text-xl text-slate-500 font-medium max-w-md mx-auto mb-10">
                                            Your reservation request has been submitted successfully. A dispatcher will review and confirm your trip shortly.
                                        </p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="btn btn-cta bg-blue-600 text-white px-10 py-4 rounded-2xl font-black uppercase"
                                        >
                                            Book Another Ride
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 opacity-40"></div>

                                        <div className="mb-16 text-center md:text-left border-b border-slate-50 pb-12">
                                            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#0c1d37] text-white font-black text-[10px] mb-8 uppercase tracking-[0.2em] shadow-lg">
                                                <ShieldCheck size={14} className="text-blue-400" />
                                                Secure 256-Bit Encrypted Form
                                            </div>
                                            <h2 className="font-display text-4xl md:text-5xl font-black text-[#0c1d37] uppercase tracking-tight mb-6">
                                                Plan Your <span className="text-blue-600">Journey</span>
                                            </h2>
                                            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                                                Complete the details below for an instant booking. For immediate dispatch assistance, call our 24/7 line at{' '}
                                                <a href="tel:913-262-0905" className="text-blue-600 font-black hover:text-[#0c1d37] transition-colors border-b-2 border-blue-100">
                                                    (913) 262-0905
                                                </a>
                                            </p>
                                        </div>

                                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-16" noValidate>
                                            {/* 1. Service Type */}
                                            <div>
                                                <label className="block text-xs font-black text-slate-400 mb-10 uppercase tracking-[0.3em] flex items-center gap-4">
                                                    <span className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-sm font-black shadow-lg shadow-blue-200">01</span>
                                                    Step One: Select Service
                                                </label>
                                                <div className="grid md:grid-cols-3 gap-8">
                                                    {[
                                                        { value: 'shared', label: 'Shared Shuttle', price: 'From $35', desc: 'Budget Friendly', icon: <Users size={28} /> },
                                                        { value: 'sedan', label: 'Private Sedan', price: 'From $55', desc: 'Executive Class', icon: <Car size={28} /> },
                                                        { value: 'suv', label: 'Private SUV', price: 'From $75', desc: 'Family / Large Group', icon: <ShieldCheck size={28} /> }
                                                    ].map((option) => (
                                                        <label key={option.value} className="relative cursor-pointer group">
                                                            <input
                                                                type="radio"
                                                                name="serviceType"
                                                                value={option.value}
                                                                className="peer sr-only"
                                                                required
                                                                checked={formData.serviceType === option.value}
                                                                onChange={handleChange}
                                                            />
                                                            <div className="p-10 rounded-[40px] bg-slate-50 border-2 border-transparent text-center peer-checked:border-blue-600 peer-checked:bg-white peer-checked:shadow-2xl transition-all duration-500 flex flex-col items-center h-full hover:bg-white hover:border-slate-100">
                                                                <div className="w-16 h-16 rounded-[24px] bg-white shadow-sm flex items-center justify-center mb-6 transition-all duration-500 text-slate-400 peer-checked:text-blue-600 peer-checked:scale-110 group-hover:scale-110">
                                                                    {option.icon}
                                                                </div>
                                                                <h3 className="font-black text-[#0c1d37] uppercase tracking-tight mb-2 text-lg">{option.label}</h3>
                                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{option.desc}</p>
                                                                <div className="mt-auto pt-4 flex flex-col items-center">
                                                                    <p className="text-blue-600 font-black text-2xl tracking-tighter">{option.price}</p>
                                                                    <div className="w-6 h-6 rounded-full border-2 border-slate-200 mt-4 flex items-center justify-center group-hover:border-blue-300 transition-colors peer-checked:border-blue-600 peer-checked:bg-blue-600">
                                                                        <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* 2. Trip Type */}
                                            <div>
                                                <label className="block text-xs font-black text-slate-400 mb-10 uppercase tracking-[0.3em] flex items-center gap-4">
                                                    <span className="w-10 h-10 rounded-2xl bg-[#0c1d37] text-white flex items-center justify-center text-sm font-black shadow-lg">02</span>
                                                    Step Two: Select Direction
                                                </label>
                                                <div className="grid md:grid-cols-2 gap-8">
                                                    {[
                                                        { value: 'to-airport', label: 'Ride to Airport (MCI)', desc: 'From Home, Hotel, or Office', icon: <Plane className="rotate-45" size={24} /> },
                                                        { value: 'from-airport', label: 'Pickup from Airport', desc: 'Meet Chauffeur at Terminal', icon: <Plane className="rotate-[225deg]" size={24} /> }
                                                    ].map((option) => (
                                                        <label key={option.value} className="relative cursor-pointer group">
                                                            <input
                                                                type="radio"
                                                                name="tripType"
                                                                value={option.value}
                                                                className="peer sr-only"
                                                                required
                                                                checked={formData.tripType === option.value}
                                                                onChange={handleChange}
                                                            />
                                                            <div className="p-8 rounded-[32px] bg-slate-50 border-2 border-transparent peer-checked:border-blue-600 peer-checked:bg-white peer-checked:shadow-xl transition-all duration-500 flex items-center gap-6 group">
                                                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-400 peer-checked:text-blue-600 transition-colors">
                                                                    {option.icon}
                                                                </div>
                                                                <div>
                                                                    <h3 className="font-black text-[#0c1d37] uppercase tracking-tight text-lg">{option.label}</h3>
                                                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{option.desc}</p>
                                                                </div>
                                                                <div className="ml-auto w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center peer-checked:border-blue-600 peer-checked:bg-blue-600 transition-all">
                                                                    <div className="w-2 h-2 rounded-full bg-white scale-0 peer-checked:scale-100 transition-transform"></div>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* 3. Trip Specs Row */}
                                            <div className="space-y-12 bg-slate-50 p-10 md:p-14 rounded-[50px] border border-slate-100">
                                                <div className="grid md:grid-cols-2 gap-12">
                                                    {/* Location Specs */}
                                                    <div className="space-y-10">
                                                        <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Pickup & Dropoff</label>
                                                        <div className="relative group">
                                                            <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={22} />
                                                            <input
                                                                type="text"
                                                                id="pickup"
                                                                name="pickup"
                                                                required
                                                                maxLength={200}
                                                                className={inputClass}
                                                                placeholder="Enter Pickup Address"
                                                                value={formData.pickup}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                        <div className="relative group">
                                                            <Plane className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={22} />
                                                            <input
                                                                type="text"
                                                                id="dropoff"
                                                                name="dropoff"
                                                                required
                                                                maxLength={200}
                                                                className={inputClass}
                                                                placeholder="Enter Destination Address"
                                                                value={formData.dropoff}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Time Specs */}
                                                    <div className="space-y-10">
                                                        <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Date & Schedule</label>
                                                        <div className="relative group">
                                                            <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={22} />
                                                            <input
                                                                type="date"
                                                                id="date"
                                                                name="date"
                                                                required
                                                                className={inputClass}
                                                                value={formData.date}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                        <div className="relative group">
                                                            <Clock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={22} />
                                                            <input
                                                                type="time"
                                                                id="time"
                                                                name="time"
                                                                required
                                                                className={inputClass}
                                                                value={formData.time}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Capacity Specs */}
                                                <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-slate-200/50">
                                                    <div className="relative group">
                                                        <Users className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={22} />
                                                        <select
                                                            id="passengers"
                                                            name="passengers"
                                                            required
                                                            className={inputClass + " appearance-none cursor-pointer"}
                                                            value={formData.passengers}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="">Total Passengers *</option>
                                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(num => (
                                                                <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                                                            ))}
                                                        </select>
                                                        <ChevronDown size={20} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" />
                                                    </div>
                                                    <div className="relative group">
                                                        <Luggage className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={22} />
                                                        <select
                                                            id="luggage"
                                                            name="luggage"
                                                            required
                                                            className={inputClass + " appearance-none cursor-pointer"}
                                                            value={formData.luggage}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="">Luggage Count *</option>
                                                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                                                <option key={num} value={num}>{num} {num === 1 ? 'Bag' : 'Bags'}</option>
                                                            ))}
                                                        </select>
                                                        <ChevronDown size={20} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* 4. Contact Info */}
                                            <div className="bg-[#0c1d37] p-10 md:p-16 rounded-[50px] shadow-2xl relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                                                <div className="flex flex-col items-center mb-12 text-center">
                                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-xl border border-white/10">
                                                        <Users className="text-blue-400" size={32} />
                                                    </div>
                                                    <h3 className="text-2xl font-display font-black text-white uppercase tracking-tight mb-2">Passenger Details</h3>
                                                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest">For Dispatch Communication Only</p>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                                                    {[
                                                        { id: 'firstName', placeholder: 'First Name *', name: 'firstName' },
                                                        { id: 'lastName', placeholder: 'Last Name *', name: 'lastName' },
                                                        { id: 'email', placeholder: 'Email Address *', type: 'email', name: 'email' },
                                                        { id: 'phone', placeholder: 'Cell Phone *', type: 'tel', name: 'phone' },
                                                    ].map(field => (
                                                        <input
                                                            key={field.id}
                                                            type={field.type || 'text'}
                                                            id={field.id}
                                                            name={field.name}
                                                            required
                                                            maxLength={field.type === 'email' ? 254 : field.type === 'tel' ? 20 : 100}
                                                            className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none font-bold text-white placeholder:text-white/20 hover:bg-white/[0.08]"
                                                            placeholder={field.placeholder}
                                                            value={(formData as any)[field.name]}
                                                            onChange={handleChange}
                                                            aria-invalid={submitted && !(formData as any)[field.name] ? 'true' : undefined}
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            {/* 7. Submit */}
                                            <div className="pt-8 text-center">
                                                <button
                                                    type="submit"
                                                    disabled={status === 'submitting'}
                                                    className="btn btn-cta bg-blue-600 hover:bg-blue-700 text-white w-full text-2xl py-8 shadow-2xl flex items-center justify-center gap-6 border-none rounded-[32px] font-black group scale-100 hover:scale-[1.02] transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                                                >
                                                    {status === 'submitting' ? 'Processing...' : 'Confirm Secure Reservation'}
                                                    {status !== 'submitting' && <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />}
                                                </button>

                                                {status === 'error' && (
                                                    <div role="alert" aria-live="assertive" className="mt-4 text-red-500 font-bold uppercase tracking-widest text-xs">
                                                        Something went wrong. Please check your connection and try again.
                                                    </div>
                                                )}

                                                {submitted && !formRef.current?.checkValidity() && (
                                                    <div role="alert" aria-live="polite" className="mt-4 text-red-500 font-bold uppercase tracking-widest text-xs">
                                                        Please fill in all required fields correctly before submitting.
                                                    </div>
                                                )}

                                                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-12 text-slate-400 text-xs font-black uppercase tracking-[0.2em]">
                                                    <div className="flex items-center gap-3">
                                                        <ShieldCheck size={20} className="text-green-500" />
                                                        SSL Encrypted
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <DollarSign size={20} className="text-blue-600" />
                                                        Pay Upon Pickup
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <Clock size={20} className="text-slate-300" />
                                                        Free Cancellations
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </>
                                )}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Help & Trust Section */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        <FadeIn className="bg-slate-50 p-12 rounded-[50px] border border-slate-100 group hover:shadow-2xl transition-all duration-500">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-[24px] flex items-center justify-center mb-8 shadow-xl shadow-blue-200 group-hover:rotate-12 transition-transform">
                                <Phone size={32} />
                            </div>
                            <h3 className="text-3xl font-display font-black text-[#0c1d37] mb-4 uppercase tracking-tight">Need It Now?</h3>
                            <p className="text-slate-500 font-medium mb-10 leading-relaxed">If you are within 4 hours of your pickup, please call for immediate live dispatch.</p>
                            <a href="tel:913-262-0905" className="text-4xl font-black text-[#0c1d37] tracking-tighter hover:text-blue-600 transition-colors block">
                                (913) 262-0905
                            </a>
                        </FadeIn>

                        <FadeIn delay={0.1} className="bg-[#0c1d37] p-12 rounded-[50px] text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16"></div>
                            <div className="w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/10 rounded-[24px] flex items-center justify-center mb-8 group-hover:-rotate-12 transition-transform">
                                <Star className="text-amber-400" size={32} fill="currentColor" />
                            </div>
                            <h3 className="text-3xl font-display font-black mb-4 uppercase tracking-tight">Legacy Trust</h3>
                            <p className="text-white/60 font-medium mb-10 leading-relaxed">Kansas City's most reliable airport shuttle since 1982. Professional and safe.</p>
                            <Link href="/about" className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-blue-400 hover:text-white transition-colors">
                                View Our Fleet <ArrowRight size={16} />
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </section>


        </main>
    );
}
