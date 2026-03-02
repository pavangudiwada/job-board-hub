'use client'

import { useMemo, useState } from "react"
import { usePathname } from "next/navigation"

type ShareTarget = {
    name: string
    href: string
}

export default function SocialShareBar() {
    const pathname = usePathname()
    const [copied, setCopied] = useState(false)

    const { pageUrl, shareText, targets } = useMemo(() => {
        const origin = typeof window !== "undefined" ? window.location.origin : "https://jobresources.fyi"
        const pageUrl = `${origin}${pathname || "/popular"}`
        const shareText = "Find curated job boards on Job Resources"

        const encodedUrl = encodeURIComponent(pageUrl)
        const encodedText = encodeURIComponent(shareText)

        const targets: ShareTarget[] = [
            { name: "X", href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}` },
            { name: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
            { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
            { name: "Reddit", href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedText}` },
            { name: "WhatsApp", href: `https://wa.me/?text=${encodedText}%20${encodedUrl}` },
            { name: "Telegram", href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}` },
            { name: "Hacker News", href: `https://news.ycombinator.com/submitlink?u=${encodedUrl}&t=${encodedText}` },
            { name: "Email", href: `mailto:?subject=${encodedText}&body=${encodedText}%0A%0A${encodedUrl}` },
        ]

        return { pageUrl, shareText, targets }
    }, [pathname])

    const onCopy = async () => {
        try {
            await navigator.clipboard.writeText(pageUrl)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            setCopied(false)
        }
    }

    const onNativeShare = async () => {
        if (!navigator.share) return
        try {
            await navigator.share({
                title: "Job Resources",
                text: shareText,
                url: pageUrl,
            })
        } catch {
            // Ignore cancelled share dialog.
        }
    }

    return (
        <section
            className="fixed z-50 left-4 right-4 bottom-4 md:left-auto md:right-6 md:bottom-24 md:w-[42rem] rounded-xl border border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur shadow-xl p-3"
            aria-label="Share options"
        >
            <div className="mb-2 flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Share this page
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    Quick share
                </p>
            </div>

            <div className="flex flex-wrap gap-2">
                {targets.map((target) => (
                    <a
                        key={target.name}
                        href={target.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 rounded-md text-sm font-medium transition"
                    >
                        {target.name}
                    </a>
                ))}
                <button
                    type="button"
                    onClick={onCopy}
                    className="px-3 py-2 bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 rounded-md text-sm font-medium transition"
                >
                    {copied ? "Copied!" : "Copy Link"}
                </button>
                {typeof navigator !== "undefined" && "share" in navigator && (
                    <button
                        type="button"
                        onClick={onNativeShare}
                        className="px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md text-sm font-medium transition"
                    >
                        More Apps
                    </button>
                )}
            </div>
        </section>
    )
}
