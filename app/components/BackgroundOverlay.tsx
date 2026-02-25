import Image from 'next/image';

interface BackgroundOverlayProps {
    src?: string;
    opacity?: string;
    className?: string;
}

export default function BackgroundOverlay({
    src = "/Home page images/Airport-Shuttle-Services.webp",
    opacity = "opacity-[0.06]",
    className = ""
}: BackgroundOverlayProps) {
    return (
        <div className={`absolute inset-0 -z-10 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
            <Image
                src={src}
                alt=""
                fill
                className={`object-cover object-center ${opacity}`}
                sizes="100vw"
                quality={10}
                loading="lazy"
                fetchPriority="low"
            />
        </div>
    );
}
