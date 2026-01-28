'use client'

import { ReactLenis, useLenis } from 'lenis/react'
import { ReactNode, useEffect } from 'react'
import { usePathname } from 'next/navigation'

function ScrollReset() {
    const pathname = usePathname()
    const lenis = useLenis()

    useEffect(() => {
        lenis?.scrollTo(0, { immediate: true })
    }, [pathname, lenis])

    return null
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
            <ScrollReset />
            {children}
        </ReactLenis>
    )
}
