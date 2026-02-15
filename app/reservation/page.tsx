import { Metadata } from 'next';
import { Calendar, MapPin, Users, Luggage, Phone, Clock, CreditCard, ShieldCheck, Plane, Car, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';

export const metadata: Metadata = {
    title: 'Book Your Ride | Quicksilver Airport Shuttle Reservation',
    description: 'Book your Kansas City airport shuttle online. Easy reservation system, instant confirmation, best rates guaranteed.',
};

export default function ReservationPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative py-32 bg-slate-900 text-white overflow-hidden text-center">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px]"></div>
                <div className="container-custom relative z-10">
                    <FadeIn>
                        <h1 className="mb-6 font-display font-bold text-5xl md:text-7xl tracking-tight uppercase">Reserve Your Journey</h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
                            Premium KCI airport transportation with instant confirmation.
                            Seamless, reliable, and available 24/7.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Reservation Form */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <FadeIn>
                            <div className="bg-white p-8 md:p-16 rounded-[50px] shadow-2xl border border-slate-100 relative -mt-32 z-20 overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -mr-16 -mt-16"></div>

                                <div className="mb-14 text-center md:text-left border-b border-slate-100 pb-10">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-amber-500 font-bold text-xs mb-6 uppercase tracking-widest border border-slate-800">
                                        <Sparkles size={14} />
                                        Secure Reservation Form
                                    </div>
                                    <h2 className="font-display text-4xl font-bold text-slate-900 uppercase tracking-tight mb-4">Reservation Details</h2>
                                    <p className="text-xl text-slate-600 font-medium">
                                        For immediate assistance, our dispatch is ready at{' '}
                                        <a href="tel:913-262-0905" className="text-amber-600 font-black hover:text-amber-500 transition-colors border-b-2 border-amber-600/20">
                                            (913) 262-0905
                                        </a>
                                    </p>
                                </div>

                                <form className="space-y-12">
                                    {/* 1. Service Type Selection */}
                                    <div>
                                        <label className="block text-sm font-black text-slate-900 mb-8 uppercase tracking-[0.2em] flex items-center gap-4">
                                            <span className="w-8 h-8 rounded-lg bg-amber-500 text-slate-900 flex items-center justify-center text-xs font-black">1</span>
                                            Select Service Type *
                                        </label>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            {[
                                                { value: 'shared', label: 'Shared Shuttle', price: 'From $35', icon: <Users size={24} /> },
                                                { value: 'sedan', label: 'Private Sedan', price: 'From $55', icon: <Car size={24} /> },
                                                { value: 'suv', label: 'Private SUV', price: 'From $75', icon: <ShieldCheck size={24} /> }
                                            ].map((option) => (
                                                <label key={option.value} className="relative cursor-pointer group">
                                                    <input
                                                        type="radio"
                                                        name="serviceType"
                                                        value={option.value}
                                                        className="peer sr-only"
                                                        required
                                                    />
                                                    <div className="p-8 rounded-3xl bg-slate-50 border-2 border-slate-100 text-center peer-checked:border-amber-500 peer-checked:bg-amber-50/20 transition-all hover:border-slate-300 h-full flex flex-col items-center">
                                                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-amber-500 peer-checked:bg-amber-500 peer-checked:text-slate-900">
                                                            {option.icon}
                                                        </div>
                                                        <h3 className="font-bold mb-2 text-slate-900 uppercase tracking-tight">{option.label}</h3>
                                                        <p className="text-amber-600 font-black text-lg">{option.price}</p>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 2. Trip Type Selection */}
                                    <div>
                                        <label className="block text-sm font-black text-slate-900 mb-8 uppercase tracking-[0.2em] flex items-center gap-4">
                                            <span className="w-8 h-8 rounded-lg bg-amber-500 text-slate-900 flex items-center justify-center text-xs font-black">2</span>
                                            Select Trip Direction *
                                        </label>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {[
                                                { value: 'to-airport', label: 'Going to the Airport', icon: <Plane className="rotate-45" /> },
                                                { value: 'from-airport', label: 'Arriving from Airport', icon: <Plane className="rotate-[225deg]" /> }
                                            ].map((option) => (
                                                <label key={option.value} className="relative cursor-pointer group">
                                                    <input
                                                        type="radio"
                                                        name="tripType"
                                                        value={option.value}
                                                        className="peer sr-only"
                                                        required
                                                    />
                                                    <div className="p-8 rounded-3xl bg-slate-50 border-2 border-slate-100 text-center peer-checked:border-amber-500 peer-checked:bg-amber-50/20 transition-all hover:border-slate-300 flex items-center justify-center gap-4">
                                                        <div className="text-amber-500 group-hover:scale-110 transition-transform">
                                                            {option.icon}
                                                        </div>
                                                        <h3 className="font-bold text-slate-900 uppercase tracking-tight">{option.label}</h3>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 3. Address Details */}
                                    <div className="space-y-8">
                                        <label className="block text-sm font-black text-slate-900 mb-8 uppercase tracking-[0.2em] flex items-center gap-4">
                                            <span className="w-8 h-8 rounded-lg bg-amber-500 text-slate-900 flex items-center justify-center text-xs font-black">3</span>
                                            Location Information *
                                        </label>
                                        <div className="grid gap-8">
                                            <div className="relative">
                                                <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-amber-500" size={20} />
                                                <input
                                                    type="text"
                                                    id="pickup"
                                                    name="pickup"
                                                    required
                                                    className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none font-bold text-slate-900 placeholder:text-slate-400"
                                                    placeholder="Pickup Address, City, Zip"
                                                />
                                            </div>
                                            <div className="relative">
                                                <Plane className="absolute left-6 top-1/2 -translate-y-1/2 text-amber-500" size={20} />
                                                <input
                                                    type="text"
                                                    id="dropoff"
                                                    name="dropoff"
                                                    required
                                                    className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none font-bold text-slate-900 placeholder:text-slate-400"
                                                    placeholder="Airport Terminal or Full Destination Address"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* 4. Date & Time */}
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="relative">
                                            <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-amber-500" size={20} />
                                            <input
                                                type="date"
                                                id="date"
                                                name="date"
                                                required
                                                className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none font-bold text-slate-900"
                                            />
                                        </div>
                                        <div className="relative">
                                            <Clock className="absolute left-6 top-1/2 -translate-y-1/2 text-amber-500" size={20} />
                                            <input
                                                type="time"
                                                id="time"
                                                name="time"
                                                required
                                                className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none font-bold text-slate-900"
                                            />
                                        </div>
                                    </div>

                                    {/* 5. Passengers & Luggage */}
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="relative">
                                            <Users className="absolute left-6 top-1/2 -translate-y-1/2 text-amber-500" size={20} />
                                            <select
                                                id="passengers"
                                                name="passengers"
                                                required
                                                className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none font-bold text-slate-900 appearance-none pointer-events-auto"
                                            >
                                                <option value="">Number of Passengers *</option>
                                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                                    <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="relative">
                                            <Luggage className="absolute left-6 top-1/2 -translate-y-1/2 text-amber-500" size={20} />
                                            <select
                                                id="luggage"
                                                name="luggage"
                                                required
                                                className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none font-bold text-slate-900 appearance-none pointer-events-auto"
                                            >
                                                <option value="">Luggage Count *</option>
                                                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                                    <option key={num} value={num}>{num} {num === 1 ? 'Bag' : 'Bags'}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* 6. Contact Info */}
                                    <div className="bg-slate-900 p-10 rounded-[40px] border border-slate-800 shadow-xl relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl"></div>
                                        <label className="block text-sm font-black text-amber-500 mb-10 uppercase tracking-[0.2em] text-center">
                                            Passenger Contact Information
                                        </label>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none font-bold text-white placeholder:text-slate-500"
                                                placeholder="First Name *"
                                            />
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                required
                                                className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none font-bold text-white placeholder:text-slate-500"
                                                placeholder="Last Name *"
                                            />
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none font-bold text-white placeholder:text-slate-500"
                                                placeholder="Email Address *"
                                            />
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none font-bold text-white placeholder:text-slate-500"
                                                placeholder="Phone Number *"
                                            />
                                        </div>
                                    </div>

                                    {/* 7. Final Step */}
                                    <div className="pt-6">
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-full text-2xl py-6 shadow-2xl flex items-center justify-center gap-4"
                                        >
                                            Complete Reservation
                                            <ArrowRight size={28} />
                                        </button>
                                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-10 text-slate-500 text-sm font-bold uppercase tracking-widest">
                                            <div className="flex items-center gap-2">
                                                <ShieldCheck size={20} className="text-green-500" />
                                                256-Bit Encrypted
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CreditCard size={20} className="text-slate-400" />
                                                No Prepayment Required
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock size={20} className="text-amber-500" />
                                                Cancel Anytime
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </FadeIn>

                        {/* Help Section */}
                        <FadeIn delay={0.3}>
                            <div className="mt-20 grid md:grid-cols-2 gap-8 items-stretch">
                                <div className="bg-slate-900 rounded-[40px] p-12 text-white shadow-2xl flex flex-col justify-center items-center text-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
                                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform">
                                        <Phone size={32} className="text-amber-500" />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold mb-4 relative z-10 uppercase tracking-tight">Need Fast Assistance?</h3>
                                    <p className="text-slate-400 mb-8 max-w-xs relative z-10 font-medium">Our dispatchers are available 24/7 for immediate bookings.</p>
                                    <a href="tel:913-262-0905" className="text-3xl font-black text-amber-500 relative z-10 tracking-tighter">
                                        (913) 262-0905
                                    </a>
                                </div>
                                <div className="bg-white rounded-[40px] p-12 border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8">
                                        <HelpCircle size={32} className="text-slate-400" />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold mb-4 text-slate-900 uppercase tracking-tight">Booking Questions?</h3>
                                    <p className="text-slate-500 mb-8 max-w-xs font-medium">Check our FAQ or contact our support team for specialized requests.</p>
                                    <Link href="/faq" className="text-amber-600 font-black uppercase tracking-widest text-sm hover:gap-3 transition-all flex items-center gap-2">
                                        View FAQ <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </main>
    );
}
