'use client'

import Link from "next/link"
import { Board } from "@/data/boards"
import { useState } from "react"

export default function BoardCard({ board }: { board: Board }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault()
        navigator.clipboard.writeText(board.link)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const truncatedDescription = board.description.length > 120
        ? board.description.substring(0, 120) + '...'
        : board.description

    return (
        <div className="group relative p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">{board.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{truncatedDescription}</p>
                    </div>

                    <div className="flex gap-2 ml-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                            onClick={handleCopy}
                            title={copied ? "Copied!" : "Copy link"}
                            className={`p-2 rounded-full transition cursor-pointer ${copied ? 'bg-green-100' : 'hover:bg-gray-100'}`}
                        >
                            {copied ? (
                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Metadata badges */}
                {board.tags && board.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {board.tags.slice(0, 5).map((tag, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md"
                            >
                                {tag}
                            </span>
                        ))}
                        {board.tags.length > 5 && (
                            <span className="px-2 py-1 text-xs font-medium text-gray-500">
                                +{board.tags.length - 5}
                            </span>
                        )}
                    </div>
                )}

                {/* Visit Board button */}
                <div className="mt-auto">
                    <Link
                        href={`${board.link}?ref=jobboardhub`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Visit Board
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}
