export default function Loading() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50/30">
            <div className="text-center">
                {/* Animated logo spinner */}
                <div className="relative w-20 h-20 mx-auto mb-8">
                    <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#2463eb] animate-spin"></div>
                    <div className="absolute inset-3 rounded-full border-4 border-transparent border-b-orange-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
                </div>

                {/* Loading text */}
                <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em] animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
}
