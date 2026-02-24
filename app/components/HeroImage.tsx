'use client';

import { useState } from 'react';
import Image from 'next/image';
import VisualSkeleton from './VisualSkeleton';

interface HeroImageProps {
    src: string;
    alt: string;
    priority?: boolean;
    className?: string;
}

export default function HeroImage({ src, alt, priority = false, className = '' }: HeroImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    if (priority) {
        return (
            <div className={`relative w-full h-full ${className}`}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority
                    fetchPriority="high"
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    className="object-contain opacity-100"
                />
            </div>
        );
    }

    return (
        <div className={`relative w-full h-full ${className}`}>
            {!isLoaded && <VisualSkeleton className="absolute inset-0 z-10" />}
            <Image
                src={src}
                alt={alt}
                fill
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                className={`object-contain transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setIsLoaded(true)}
            />
        </div>
    );
}
