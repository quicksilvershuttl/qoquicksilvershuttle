'use client';

export const dynamic = 'force-dynamic';


import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase';
import {
    LayoutDashboard,
    Calendar,
    Car,
    Users,
    Luggage,
    Phone,
    Mail,
    MapPin,
    Clock,
    CheckCircle2,
    Clock4,
    XCircle,
    ChevronRight,
    Search,
    Filter,
    LogOut,
    User,
    RefreshCw
} from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Booking {
    id: string;
    created_at: string;
    service_type: string;
    trip_type: string;
    pickup_address: string;
    dropoff_address: string;
    pickup_date: string;
    pickup_time: string;
    passengers: number;
    luggage: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    status: 'pending' | 'confirmed' | 'cancelled';
}

export default function AdminDashboard() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'confirmed' | 'cancelled'>('all');
    const router = useRouter();

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                router.push('/admin/login');
            } else {
                setUser(session.user);
                fetchBookings();
            }
        };
        checkUser();
    }, []);

    const fetchBookings = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('bookings')
            .select('*')
            .order('created_at', { ascending: false });

        if (!error && data) {
            setBookings(data);
        }
        setLoading(false);
    };

    const updateStatus = async (id: string, newStatus: Booking['status']) => {
        const { error } = await supabase
            .from('bookings')
            .update({ status: newStatus })
            .eq('id', id);

        if (!error) {
            setBookings(prev => prev.map(b => b.id === id ? { ...b, status: newStatus } : b));
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/admin/login');
    };

    const filteredBookings = bookings.filter(b => {
        const matchesSearch =
            `${b.first_name} ${b.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
            b.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            b.pickup_address.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesFilter = statusFilter === 'all' || b.status === statusFilter;

        return matchesSearch && matchesFilter;
    });

    const stats = {
        total: bookings.length,
        pending: bookings.filter(b => b.status === 'pending').length,
        confirmed: bookings.filter(b => b.status === 'confirmed').length
    };

    if (!user) return null;

    return (
        <main className="min-h-screen bg-[#f8fafc] text-[#0c1d37]">
            {/* Sidebar / Header Navigation */}
            <nav className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-slate-200 z-50 px-6 md:px-12 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                        <LayoutDashboard size={22} />
                    </div>
                    <div>
                        <h1 className="text-xl font-black uppercase tracking-tight">Quicksilver Dispatch</h1>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Management Cloud v1.0</p>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="hidden md:flex flex-col items-end">
                        <span className="text-sm font-black text-[#0c1d37]">{user.email}</span>
                        <span className="text-[10px] font-black uppercase tracking-tighter text-green-500 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            Online System Ready
                        </span>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-100 hover:bg-red-50 transition-all group"
                    >
                        <LogOut size={20} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>
            </nav>

            {/* Dashboard Content */}
            <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                        { label: 'Total Reservations', value: stats.total, icon: <LayoutDashboard />, color: 'blue' },
                        { label: 'Pending Review', value: stats.pending, icon: <Clock4 />, color: 'amber' },
                        { label: 'Confirmed Trips', value: stats.confirmed, icon: <CheckCircle2 />, color: 'green' }
                    ].map((stat, i) => (
                        <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex items-center justify-between hover:shadow-xl transition-all duration-500 group">
                            <div>
                                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{stat.label}</p>
                                <p className="text-4xl font-black tracking-tighter">{stat.value}</p>
                            </div>
                            <div className={`w-14 h-14 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                {stat.icon}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Control bar */}
                <div className="flex flex-col xl:flex-row items-center justify-between gap-6 mb-8">
                    <div className="relative w-full xl:max-w-md group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Search by name, email, or address..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-14 pr-6 py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-300 font-bold transition-all text-sm"
                        />
                    </div>

                    <div className="flex items-center gap-4 w-full xl:w-auto">
                        <div className="flex items-center gap-2 bg-white border border-slate-200 p-1.5 rounded-2xl">
                            {(['all', 'pending', 'confirmed', 'cancelled'] as const).map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setStatusFilter(filter)}
                                    className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${statusFilter === filter
                                        ? 'bg-[#0c1d37] text-white shadow-lg'
                                        : 'text-slate-400 hover:text-[#0c1d37] hover:bg-slate-50'
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={fetchBookings}
                            className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all flex-shrink-0"
                        >
                            <RefreshCw size={20} className={loading ? 'animate-spin' : ''} />
                        </button>
                    </div>
                </div>

                {/* Bookings List */}
                <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden min-h-[500px]">
                    {loading && bookings.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-[500px]">
                            <Loader2 className="animate-spin text-blue-600 mb-4" size={48} />
                            <p className="text-slate-400 font-black uppercase tracking-widest text-xs">Syncing with Secure Database...</p>
                        </div>
                    ) : filteredBookings.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-[500px] text-center px-12">
                            <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mb-6">
                                <Search size={32} />
                            </div>
                            <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">No Reservations Found</h3>
                            <p className="text-slate-400 font-medium max-w-sm">We couldn't find any bookings matching your current search criteria or filters.</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50/50 border-b border-slate-100">
                                    <tr>
                                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Rider Info</th>
                                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Trip Details</th>
                                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Schedule</th>
                                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Equipment</th>
                                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Status</th>
                                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {filteredBookings.map((booking) => (
                                        <tr key={booking.id} className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="px-8 py-8">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-black text-lg">
                                                        {booking.first_name[0]}{booking.last_name[0]}
                                                    </div>
                                                    <div>
                                                        <p className="font-black text-base leading-none mb-1">{booking.first_name} {booking.last_name}</p>
                                                        <div className="flex flex-col gap-1">
                                                            <a href={`mailto:${booking.email}`} className="text-xs text-slate-400 flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                                                                <Mail size={12} /> {booking.email}
                                                            </a>
                                                            <a href={`tel:${booking.phone}`} className="text-xs text-slate-400 flex items-center gap-1.5 hover:text-blue-600 transition-colors font-bold">
                                                                <Phone size={12} /> {booking.phone}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-8 max-w-xs">
                                                <div className="space-y-3">
                                                    <div className="flex items-start gap-2">
                                                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                            <MapPin size={10} />
                                                        </div>
                                                        <div>
                                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Pickup</p>
                                                            <p className="text-xs font-bold line-clamp-1">{booking.pickup_address}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                            <ChevronRight size={10} />
                                                        </div>
                                                        <div>
                                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">To</p>
                                                            <p className="text-xs font-bold line-clamp-1">{booking.dropoff_address}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-8">
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex items-center gap-2 text-sm font-black text-[#0c1d37]">
                                                        <Calendar size={16} className="text-blue-500" />
                                                        {new Date(booking.pickup_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                                                        <Clock size={16} className="text-slate-300" />
                                                        {booking.pickup_time}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-8">
                                                <div className="flex items-center justify-center gap-6">
                                                    <div className="text-center">
                                                        <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center mx-auto mb-1 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                                            <Users size={18} />
                                                        </div>
                                                        <p className="text-[10px] font-black text-[#0c1d37]">{booking.passengers}</p>
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center mx-auto mb-1 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                                            <Luggage size={18} />
                                                        </div>
                                                        <p className="text-[10px] font-black text-[#0c1d37]">{booking.luggage}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-8">
                                                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] inline-flex items-center gap-2 ${booking.status === 'confirmed' ? 'bg-green-50 text-green-600' :
                                                    booking.status === 'cancelled' ? 'bg-red-50 text-red-600' :
                                                        'bg-amber-50 text-amber-600 animate-pulse'
                                                    }`}>
                                                    <span className={`w-1.5 h-1.5 rounded-full ${booking.status === 'confirmed' ? 'bg-green-500' :
                                                        booking.status === 'cancelled' ? 'bg-red-500' :
                                                            'bg-amber-500'
                                                        }`}></span>
                                                    {booking.status}
                                                </span>
                                            </td>
                                            <td className="px-8 py-8 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    {booking.status !== 'confirmed' && (
                                                        <button
                                                            onClick={() => updateStatus(booking.id, 'confirmed')}
                                                            className="w-10 h-10 rounded-xl bg-green-50 text-green-600 hover:bg-green-600 hover:text-white transition-all flex items-center justify-center shadow-sm"
                                                            title="Confirm Booking"
                                                        >
                                                            <CheckCircle2 size={18} />
                                                        </button>
                                                    )}
                                                    {booking.status !== 'cancelled' && (
                                                        <button
                                                            onClick={() => updateStatus(booking.id, 'cancelled')}
                                                            className="w-10 h-10 rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all flex items-center justify-center shadow-sm"
                                                            title="Cancel Booking"
                                                        >
                                                            <XCircle size={18} />
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Background Decorations */}
            <div className="fixed top-0 right-0 -z-10 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="fixed bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-slate-100/50 rounded-full blur-[100px] pointer-events-none"></div>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
                body {
                    font-family: 'Inter', sans-serif;
                }
            `}</style>
        </main>
    );
}

const Loader2 = ({ size, className }: { size?: number, className?: string }) => <RefreshCw size={size} className={`animate-spin ${className}`} />;
