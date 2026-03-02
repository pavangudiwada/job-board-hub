'use client'

import { type ReactNode, useMemo, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

type ShareItem = {
    name: string
    href: string
    hoverClass: string
    icon: ReactNode
}

function IconButton({ item }: { item: ShareItem }) {
    return (
        <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 transition dark:border-gray-600 dark:bg-slate-900 dark:text-gray-300 ${item.hoverClass}`}
            aria-label={item.name}
        >
            {item.icon}
            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
                {item.name}
            </span>
        </a>
    )
}

export default function FloatingActionBar() {
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)

    const items = useMemo(() => {
        const origin =
            typeof window !== "undefined"
                ? window.location.origin
                : "https://jobresources.fyi"
        const pageUrl = `${origin}${pathname || "/popular"}`
        const text = "Find curated job boards on Job Resources"
        const encodedUrl = encodeURIComponent(pageUrl)
        const encodedText = encodeURIComponent(text)

        const shareItems: ShareItem[] = [
            {
                name: "X",
                href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
                hoverClass: "hover:bg-black hover:text-white hover:border-black",
                icon: (
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                        <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.4 22H3.3l7.3-8.4L1 2h6.3l4.4 5.8L18.9 2zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20z" />
                    </svg>
                ),
            },
            {
                name: "LinkedIn",
                href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
                hoverClass: "hover:text-[#0A66C2]",
                icon: (
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                    </svg>
                ),
            },
            {
                name: "Reddit",
                href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedText}`,
                hoverClass: "hover:text-[#FF4500]",
                icon: (
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                        <path d="M14.74 14.29a1.5 1.5 0 10-2.99 0 1.5 1.5 0 002.99 0zm-4.78 0a1.5 1.5 0 10-2.99 0 1.5 1.5 0 002.99 0zm8.76-1.08a2.2 2.2 0 00-1.49-3.76 2.2 2.2 0 00-2.07 1.45 8.06 8.06 0 00-2.95-.56l.5-2.34 1.63.35a1.56 1.56 0 101.54-1.24c-.63 0-1.18.38-1.42.91l-1.98-.42a.8.8 0 00-.94.61l-.64 3.03a8.24 8.24 0 00-3.54.62 2.2 2.2 0 00-4.26.75c0 .9.54 1.67 1.3 2.01a3.7 3.7 0 00-.07.72c0 2.8 3.23 5.06 7.22 5.06s7.22-2.27 7.22-5.06a3.8 3.8 0 00-.05-.63z" />
                    </svg>
                ),
            },
            {
                name: "WhatsApp",
                href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
                hoverClass: "hover:text-[#25D366]",
                icon: (
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                        <path d="M20 12a8 8 0 10-15.2 3.4L4 20l4.7-.8A8 8 0 1020 12zm-4.4 2.3c-.2.6-1.1 1-1.6 1-.4 0-.9.2-3-1-2.5-1.4-4.1-3.8-4.2-4-.1-.2-1-1.3-1-2.5s.6-1.8.8-2c.2-.2.5-.3.6-.3h.5c.2 0 .4 0 .5.4.2.5.7 1.8.8 2 .1.2.1.3 0 .5l-.3.5c-.1.1-.2.3-.1.5.1.2.6 1 1.3 1.6.9.8 1.6 1 1.9 1.1.2.1.4 0 .5-.1l.7-.8c.1-.2.3-.2.5-.1.2.1 1.6.8 1.9 1 .3.2.4.3.4.5 0 .1 0 .6-.2 1.1z" />
                    </svg>
                ),
            },
            {
                name: "Telegram",
                href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
                hoverClass: "hover:text-[#229ED9]",
                icon: (
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                        <path d="M9.7 14.7l-.4 4.6c.6 0 .8-.2 1.1-.5l2.7-2.6 5.5 4c1 .6 1.7.3 2-.9l3.5-16.4v-.1c.4-1.7-.6-2.4-1.6-2L1.8 8.7c-1.7.7-1.7 1.7-.3 2.1l5.3 1.7L19 5c.6-.4 1.2-.2.8.2" />
                    </svg>
                ),
            },
            {
                name: "Email",
                href: `mailto:?subject=${encodedText}&body=${encodedText}%0A%0A${encodedUrl}`,
                hoverClass: "hover:text-[#EA4335]",
                icon: (
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.2l-8 4.8-8-4.8V6l8 4.8L20 6v2.2z" />
                    </svg>
                ),
            },
        ]

        return shareItems
    }, [pathname])

    return (
        <>
            <div className="hidden md:block fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
                <div className="mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white/95 px-3 py-2 shadow-xl backdrop-blur dark:border-gray-700 dark:bg-slate-900/95">
                    <Link
                        href="https://github.com/pavangudiwada/job-board-hub/issues/new"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 transition hover:text-blue-600 dark:border-gray-600 dark:bg-slate-900 dark:text-gray-300"
                        aria-label="Add job board"
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                            <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z" />
                        </svg>
                        <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
                            Add job board
                        </span>
                    </Link>

                    {items.map((item) => (
                        <IconButton key={item.name} item={item} />
                    ))}
                </div>
            </div>

            <div className="md:hidden fixed bottom-5 right-5 z-50">
                {mobileOpen && (
                    <div className="absolute bottom-14 right-0 w-56 rounded-2xl border border-gray-200 bg-white/95 p-3 shadow-xl backdrop-blur dark:border-gray-700 dark:bg-slate-900/95">
                        <div className="grid grid-cols-4 gap-2">
                            <Link
                                href="https://github.com/pavangudiwada/job-board-hub/issues/new"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 transition hover:text-blue-600 dark:border-gray-600 dark:bg-slate-900 dark:text-gray-300"
                                aria-label="Add job board"
                            >
                                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                                    <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z" />
                                </svg>
                            </Link>
                            {items.map((item) => (
                                <IconButton key={item.name} item={item} />
                            ))}
                        </div>
                    </div>
                )}

                <button
                    type="button"
                    onClick={() => setMobileOpen((prev) => !prev)}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg"
                    aria-label={mobileOpen ? "Close share options" : "Open share options"}
                    aria-expanded={mobileOpen}
                >
                    <svg
                        viewBox="0 0 24 24"
                        className={`h-6 w-6 fill-current transition-transform ${mobileOpen ? "rotate-45" : "rotate-0"}`}
                    >
                        <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z" />
                    </svg>
                </button>
            </div>
        </>
    )
}
