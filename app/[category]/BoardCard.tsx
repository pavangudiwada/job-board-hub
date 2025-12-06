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

    return (
        <div className="group relative p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all">
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{board.name}</h3>
                    <p className="text-sm text-gray-600">{board.description}</p>
                </div>

                <div className="flex gap-2 ml-3 opacity-0 group-hover:opacity-100 transition-opacity ">
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
                    <Link
                        href={`${board.link}?ref=mywebsite`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Visit site"
                        className="p-2 rounded-full hover:bg-blue-50 transition"
                    >
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </Link>
                </div>
            </div >
        </div >
    )
}
