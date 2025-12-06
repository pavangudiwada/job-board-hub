'use client'

import Link from "next/link"
import Image from "next/image"
import { Board } from "@/data/boards"
import { useState } from "react"

export default function BoardCard({ board }: { board: Board }) {
    const [copied, setCopied] = useState(false)
    const [showAllTags, setShowAllTags] = useState(false)

    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        navigator.clipboard.writeText(board.link)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const truncatedDescription = board.description.length > 80
        ? board.description.substring(0, 80) + '...'
        : board.description

    const visibleTags = board.tags?.slice(0, 3) || []
    const remainingTags = board.tags?.slice(3) || []

    // Extract domain for favicon
    const domain = new URL(board.link).hostname

    return (
        <div className="group relative bg-white border-2 border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
            <div className="p-5 flex flex-col h-full">
                {/* Header with title and favicon */}
                <div className="mb-3">
                    <div className="flex items-center gap-2 mb-1.5">
                        <Image
                            src={`https://www.google.com/s2/favicons?domain=${domain}&sz=32`}
                            alt=""
                            width={20}
                            height={20}
                            className="flex-shrink-0"
                            unoptimized
                        />
                        <h3 className="text-lg font-bold text-gray-900">{board.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{truncatedDescription}</p>
                </div>

                {/* Tags */}
                {board.tags && board.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {visibleTags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                        {remainingTags.length > 0 && (
                            <div className="relative">
                                <span
                                    className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full cursor-pointer hover:bg-gray-200"
                                    onMouseEnter={() => setShowAllTags(true)}
                                    onMouseLeave={() => setShowAllTags(false)}
                                >
                                    +{remainingTags.length}
                                </span>
                                {showAllTags && (
                                    <div className="absolute z-10 bottom-full mb-2 left-0 bg-white border-2 border-gray-200 rounded-lg shadow-lg p-2 min-w-max">
                                        <div className="flex flex-wrap gap-1.5">
                                            {remainingTags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}

                {/* Copy button and explore button in same row */}
                <div className="mt-auto flex items-center gap-2">
                    <button
                        onClick={handleCopy}
                        title="Copy link"
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${copied
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {copied ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            )}
                        </svg>
                        {copied ? 'Copied!' : 'Copy'}
                    </button>

                    <Link
                        href={`${board.link}?ref=jobboardhub`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                    >
                        Explore Board
                        <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}
