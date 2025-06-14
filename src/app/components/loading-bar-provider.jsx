
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function LoadingBarProvider() {
    const pathname = usePathname();

    useEffect(() => {
        NProgress.configure({ showSpinner: false, trickleSpeed: 100 });
        NProgress.start();

        const timer = setTimeout(() => {
            NProgress.done();
        }, 500);

        return () => {
            clearTimeout(timer);
            NProgress.done();
        };
    }, [pathname]);

    return null;
}
