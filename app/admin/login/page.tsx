'use client';

import { useState } from 'react';
import { supabase } from '../../utils/supabase';
import { ShieldCheck, LogIn, Mail, Lock, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error: authError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (authError) throw authError;

            router.push('/admin/dashboard');
        } catch (err: any) {
            setError(err.message || 'Failed to login');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6 bg-gradient-to-br from-[#0c1d3d] to-[#0f2044]">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-[40px] shadow-2xl p-10 md:p-14 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16"></div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-slate-100 rounded-full">
                            <ShieldCheck className="text-blue-600" size={18} />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Secure Admin Access</span>
                        </div>

                        <h1 className="text-3xl font-display font-black text-[#0c1d37] uppercase tracking-tight mb-2">Login</h1>
                        <p className="text-slate-500 font-medium mb-10">Enter your credentials to access the Quicksilver dispatch dashboard.</p>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                                <div className="relative group">
                                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-bold text-[#0c1d37]"
                                        placeholder="admin@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Password</label>
                                <div className="relative group">
                                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-bold text-[#0c1d37]"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            {error && (
                                <p className="text-red-500 text-sm font-bold bg-red-50 p-4 rounded-xl border border-red-100 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                    {error}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70"
                            >
                                {loading ? (
                                    <Loader2 className="animate-spin" size={24} />
                                ) : (
                                    <>
                                        <span>Sign In</span>
                                        <LogIn size={20} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                <p className="text-center mt-10 text-white/40 text-xs font-bold uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} Quicksilver Official. All Rights Reserved.
                </p>
            </div>
        </main>
    );
}
