'use client';

import { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import { supabase } from '../utils/supabase';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        serviceType: 'New Reservation',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        formRef.current?.querySelectorAll('input, select, textarea').forEach(el => el.classList.add('was-validated'));

        if (!formRef.current?.checkValidity()) return;
        setStatus('submitting');

        try {
            const { error } = await supabase
                .from('contact_inquiries')
                .insert([{
                    name: formData.name,
                    email: formData.email,
                    service_type: formData.serviceType,
                    message: formData.message,
                    status: 'new'
                }]);

            if (error) throw error;
            setStatus('success');
            setSubmitted(false);
            setFormData({ name: '', email: '', serviceType: 'New Reservation', message: '' });
            formRef.current?.querySelectorAll('input, select, textarea').forEach(el => el.classList.remove('was-validated'));
        } catch (err) {
            console.error('Contact form error:', err);
            setStatus('error');
        }
    };

    const inputClass = "w-full bg-slate-50 border border-transparent rounded-3xl px-8 py-5 text-[#0c1d37] font-bold focus:ring-4 focus:ring-blue-500/10 transition-all outline-none";

    if (status === 'success') {
        return (
            <div className="bg-white p-12 sm:p-16 rounded-[60px] shadow-[0_50px_100px_rgba(0,0,0,0.05)] border-2 border-slate-50 relative overflow-hidden">
                <div className="py-12 text-center">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <h3 className="text-3xl font-black text-[#0c1d37] uppercase tracking-tight mb-4">Message Sent!</h3>
                    <p className="text-slate-500 font-medium mb-8 max-w-sm mx-auto">
                        Thank you for reaching out. Our logistics team will respond within 2 hours during business hours.
                    </p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="btn btn-cta bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase border-none"
                    >
                        Send Another Message
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white p-12 sm:p-16 rounded-[60px] shadow-[0_50px_100px_rgba(0,0,0,0.05)] border-2 border-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/[0.03] rounded-bl-[100px]"></div>

            <h3 className="text-3xl font-black text-[#0c1d37] font-display tracking-tight mb-12">Send A Message.</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 relative z-10" noValidate>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label htmlFor="contact-name" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Full Name</label>
                        <input
                            type="text"
                            id="contact-name"
                            name="name"
                            required
                            maxLength={100}
                            className={inputClass}
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            aria-invalid={submitted && !formData.name ? 'true' : undefined}
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="contact-email" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Email Address</label>
                        <input
                            type="email"
                            id="contact-email"
                            name="email"
                            required
                            maxLength={254}
                            className={inputClass}
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={handleChange}
                            aria-invalid={submitted && !formData.email ? 'true' : undefined}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="contact-service" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Service Type</label>
                    <select
                        id="contact-service"
                        name="serviceType"
                        className={inputClass + " appearance-none cursor-pointer"}
                        value={formData.serviceType}
                        onChange={handleChange}
                    >
                        <option>New Reservation</option>
                        <option>Corporate Account Inquiry</option>
                        <option>General Support</option>
                        <option>Feedback</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Your Inquiry</label>
                    <textarea
                        rows={5}
                        id="contact-message"
                        name="message"
                        required
                        maxLength={2000}
                        className={inputClass + " resize-none"}
                        placeholder="Tell us how we can assist..."
                        value={formData.message}
                        onChange={handleChange}
                        aria-invalid={submitted && !formData.message ? 'true' : undefined}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn btn-cta w-full py-7 rounded-[32px] text-xl font-black uppercase tracking-tight shadow-2xl shadow-orange-500/20 active:scale-95 transition-all flex items-center justify-center gap-4 bg-orange-500 hover:bg-orange-600 border-none disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    <Send size={24} />
                    {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                </button>

                {status === 'error' && (
                    <div role="alert" aria-live="assertive" className="text-red-500 font-bold uppercase tracking-widest text-xs text-center">
                        Something went wrong. Please try again or call us directly.
                    </div>
                )}

                {submitted && !formRef.current?.checkValidity() && (
                    <div role="alert" aria-live="polite" className="text-red-500 font-bold uppercase tracking-widest text-xs text-center">
                        Please fill in all required fields correctly.
                    </div>
                )}
            </form>
        </div>
    );
}
