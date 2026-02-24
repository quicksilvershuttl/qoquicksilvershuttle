'use client';

interface VisualSkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    borderRadius?: string;
}

export default function VisualSkeleton({
    className = '',
    width = '100%',
    height = '100%',
    borderRadius = '0.75rem'
}: VisualSkeletonProps) {
    return (
        <div
            className={`relative overflow-hidden bg-slate-800/20 backdrop-blur-sm ${className}`}
            style={{
                width,
                height,
                borderRadius,
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
        </div>
    );
}
