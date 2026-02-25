'use client';

import { usePathname } from 'next/navigation';
import MobileActionTray from './MobileActionTray';

export default function LayoutShell({
    navigation,
    footer,
    children,
}: {
    navigation: React.ReactNode;
    footer: React.ReactNode;
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isAdmin = pathname.startsWith('/admin');

    return (
        <>
            {!isAdmin && navigation}
            <div className={isAdmin ? '' : 'pt-20'}>
                {children}
            </div>
            {!isAdmin && <MobileActionTray />}
            {!isAdmin && footer}
        </>
    );
}
