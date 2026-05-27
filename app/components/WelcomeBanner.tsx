'use client'

import { useEffect, useState } from 'react'

export default function WelcomeBanner() {
    const [isVisible, setIsVisible] = useState<boolean | null>(null)

    useEffect(() => {
        const bannerDismissed = sessionStorage.getItem('welcomeBannerDismissed')
        const frame = requestAnimationFrame(() => {
            setIsVisible(!bannerDismissed)
        })

        return () => cancelAnimationFrame(frame)
    }, [])

    const handleClose = () => {
        setIsVisible(false)
        sessionStorage.setItem('welcomeBannerDismissed', 'true')
    }

    if (!isVisible) return null

    return (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 relative">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">👋</span>
                    <p className="text-sm md:text-base">
                        <span className="font-semibold">Welcome to Job Resources!</span> We&apos;re expanding soon with <span className="font-medium">communities, learning resources, and more</span> to supercharge your job hunt. Stay tuned!
                    </p>
                </div>
                <button
                    onClick={handleClose}
                    className="flex-shrink-0 p-1 hover:bg-white/20 rounded-full transition"
                    aria-label="Close banner"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
