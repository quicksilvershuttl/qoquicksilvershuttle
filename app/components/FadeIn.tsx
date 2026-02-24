'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

// Shared observer to reduce TBT (Total Blocking Time)
let sharedObserver: IntersectionObserver | null = null;
const observerCallbacks = new Map<Element, (isIntersecting: boolean) => void>();

function getSharedObserver() {
    if (typeof window === 'undefined') return null;

    if (!sharedObserver) {
        sharedObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const callback = observerCallbacks.get(entry.target);
                if (callback && entry.isIntersecting) {
                    callback(true);
                }
            });
        }, { threshold: 0.1 });
    }
    return sharedObserver;
}

export default function FadeIn({
    children,
    delay = 0,
    direction = 'up',
    className = '',
}: {
    children: ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    className?: string;
}) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = getSharedObserver();
        const element = domRef.current;

        if (observer && element) {
            const callback = (intersecting: boolean) => {
                if (intersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                    observerCallbacks.delete(element);
                }
            };

            observerCallbacks.set(element, callback);
            observer.observe(element);
        }

        return () => {
            if (observer && element) {
                observer.unobserve(element);
                observerCallbacks.delete(element);
            }
        };
    }, []);

    const directions = {
        up: 'translate-y-10',
        down: '-translate-y-10',
        left: 'translate-x-10',
        right: '-translate-x-10',
    };

    return (
        <div
            ref={domRef}
            className={`${className} transition-all duration-1000 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] ${isVisible
                ? 'opacity-100 translate-x-0 translate-y-0'
                : `opacity-0 ${directions[direction]}`
                }`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
}
