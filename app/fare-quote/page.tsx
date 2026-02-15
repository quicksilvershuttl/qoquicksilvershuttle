import { Metadata } from 'next';
import { Calculator, MapPin, Users, Luggage, ArrowRight, Info, Award } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';

export const metadata: Metadata = {
    title: 'Get Fare Quote | Quicksilver Airport Shuttle Price Calculator',
    description: 'Calculate your airport shuttle fare instantly. Get accurate pricing for your Kansas City airport transportation.',
};

export default function FareQuotePage() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative py-28 bg-slate-900 text-white overflow-hidden text-center">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="container-custom relative z-10">
                    <FadeIn>
                        <Calculator className="mx-auto mb-6 text-amber-500" size={64} />
                        <h1 className="mb-6 font-display font-bold text-5xl md:text-6xl tracking-tight uppercase">Get Your Fare Quote</h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Calculate your airport shuttle fare instantly. Transparent, flat-rate pricing with no hidden fees for your peace of mind.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Quote Calculator */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <FadeIn>
                            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 relative -mt-20 z-20">
                                <h2 className="mb-10 text-center font-display text-3xl font-bold text-slate-900">Calculate Your Instant Fare</h2>

                                <form className="space-y-8">
                                    {/* Locations Row */}
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <label htmlFor="pickup" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                                                <MapPin className="inline mr-2 text-amber-500" size={18} />
                                                Pickup Location *
                                            </label>
                                            <input
                                                type="text"
                                                id="pickup"
                                                name="pickup"
                                                required
                                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                                                placeholder="Enter city or full address"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="dropoff" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                                                <MapPin className="inline mr-2 text-amber-500" size={18} />
                                                Dropoff Location *
                                            </label>
                                            <select
                                                id="dropoff"
                                                name="dropoff"
                                                required
                                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                                            >
                                                <option value="">Select destination</option>
                                                <option value="mci">Kansas City International Airport (MCI)</option>
                                                <option value="wheeler">Wheeler Executive Airport</option>
                                                <option value="other">Other Location</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Service Type */}
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">
                                            Select Service Type *
                                        </label>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            {[
                                                { value: 'shared', label: 'Shared Shuttle', price: '$35' },
                                                { value: 'sedan', label: 'Private Sedan', price: '$55' },
                                                { value: 'suv', label: 'Private SUV', price: '$75' }
                                            ].map((option) => (
                                                <label key={option.value} className="relative cursor-pointer group">
                                                    <input
                                                        type="radio"
                                                        name="serviceType"
                                                        value={option.value}
                                                        className="peer sr-only"
                                                        required
                                                    />
                                                    <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-100 text-center peer-checked:border-amber-500 peer-checked:bg-amber-50/30 transition-all group-hover:border-slate-300">
                                                        <h3 className="font-bold mb-2 text-slate-900">{option.label}</h3>
                                                        <p className="text-amber-600 font-bold text-2xl">From {option.price}</p>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Details Row */}
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <label htmlFor="passengers" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                                                <Users className="inline mr-2 text-amber-500" size={18} />
                                                Number of Passengers *
                                            </label>
                                            <select
                                                id="passengers"
                                                name="passengers"
                                                required
                                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                                            >
                                                <option value="">Select</option>
                                                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                                    <option key={num} value={num}>{num}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="luggage" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                                                <Luggage className="inline mr-2 text-amber-500" size={18} />
                                                Luggage Count
                                            </label>
                                            <select
                                                id="luggage"
                                                name="luggage"
                                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                                            >
                                                <option value="">Select</option>
                                                {[0, 1, 2, 3, 4, 5, 6].map(num => (
                                                    <option key={num} value={num}>{num}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Round Trip */}
                                    <div className="flex items-center gap-4 bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                                        <input
                                            type="checkbox"
                                            id="roundTrip"
                                            name="roundTrip"
                                            className="w-6 h-6 text-amber-500 border-slate-300 rounded focus:ring-amber-500 cursor-pointer"
                                        />
                                        <label htmlFor="roundTrip" className="text-lg font-bold text-slate-900 cursor-pointer">
                                            Return / Round Trip <span className="text-green-600 ml-2">(SAVE 10%)</span>
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-full text-2xl shadow-xl flex items-center justify-center gap-3"
                                    >
                                        <Calculator size={24} />
                                        Calculate Instant Fare
                                    </button>
                                </form>
                            </div>
                        </FadeIn>

                        {/* Info Box */}
                        <FadeIn delay={0.2}>
                            <div className="mt-12 bg-slate-900 p-8 rounded-2xl text-white shadow-lg border border-slate-800">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                                        <Info size={20} className="text-slate-900" />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold">Pricing Guide & Information</h3>
                                </div>
                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                                    <div className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2.5 flex-shrink-0"></div>
                                        <p className="text-slate-300 text-lg"><strong className="text-white">Shared Shuttle:</strong> Most economical option for single travelers.</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2.5 flex-shrink-0"></div>
                                        <p className="text-slate-300 text-lg"><strong className="text-white">Private Sedan:</strong> Direct service (up to 3 passengers).</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2.5 flex-shrink-0"></div>
                                        <p className="text-slate-300 text-lg"><strong className="text-white">Private SUV:</strong> Extra space (up to 6 passengers with luggage).</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2.5 flex-shrink-0"></div>
                                        <p className="text-slate-300 text-lg"><strong className="text-white">Round Trip:</strong> Automatic 10% discount applied to your quote.</p>
                                    </div>
                                </div>
                                <p className="mt-8 pt-6 border-t border-slate-800 text-slate-400 font-medium italic">
                                    * All quoted prices include standard luggage (2 items per passenger).
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Pricing Guide Table */}
            <section className="section bg-white border-t border-slate-100">
                <div className="container-custom">
                    <FadeIn>
                        <div className="text-center mb-24">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 font-bold text-sm mb-6 uppercase tracking-widest border border-amber-500/20">
                                <Award size={16} />
                                Direct Flat Rates
                            </div>
                            <h2 className="mb-4 font-display text-4xl md:text-5xl font-bold text-slate-900 uppercase tracking-tight">Current Sample Fares</h2>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                                Transparent airport transfer rates from various Kansas City locations to MCI Airport.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                        {[
                            { from: 'Kansas City', shared: '$35', sedan: '$55', suv: '$75' },
                            { from: 'Overland Park', shared: '$40', sedan: '$60', suv: '$80' },
                            { from: 'Lawrence', shared: '$50', sedan: '$75', suv: '$95' },
                            { from: 'Topeka', shared: '$65', sedan: '$95', suv: '$115' },
                            { from: 'Manhattan', shared: '$85', sedan: '$125', suv: '$150' },
                            { from: 'Olathe', shared: '$45', sedan: '$65', suv: '$85' },
                        ].map((route, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 hover:border-amber-500 transition-all hover:shadow-2xl hover:bg-white group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                                    <h3 className="text-2xl font-display font-bold mb-8 text-slate-900 group-hover:text-amber-600 transition-colors uppercase tracking-tight relative z-10">{route.from}</h3>
                                    <div className="space-y-6 relative z-10">
                                        <div className="flex justify-between items-center py-3 border-b border-slate-200/50">
                                            <span className="text-slate-500 font-bold uppercase tracking-wider text-xs">Shared:</span>
                                            <span className="font-bold text-slate-900 text-2xl tracking-tighter">{route.shared}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-slate-200/50">
                                            <span className="text-slate-500 font-bold uppercase tracking-wider text-xs">Private Sedan:</span>
                                            <span className="font-bold text-amber-600 text-2xl tracking-tighter">{route.sedan}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3">
                                            <span className="text-slate-500 font-bold uppercase tracking-wider text-xs">Private SUV:</span>
                                            <span className="font-bold text-slate-900 text-2xl tracking-tighter">{route.suv}</span>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px]"></div>
                <div className="container-custom relative z-10">
                    <FadeIn>
                        <h2 className="mb-8 font-display text-4xl md:text-5xl font-bold uppercase tracking-tight">Ready to Book Your Pickup?</h2>
                        <p className="text-xl mb-12 text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Secure your flat-rate fare and guarantee your availability by booking your reservation today.
                        </p>
                        <Link
                            href="/reservation"
                            className="btn btn-primary text-2xl px-12 py-6"
                        >
                            Confirm Reservation
                            <ArrowRight size={28} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
