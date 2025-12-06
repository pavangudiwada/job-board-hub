'use client'

import { useState } from 'react'
import { Category } from '@/data/categories'

interface MobileMenuProps {
    categories: Array<{ id: string; name: string; description: string }>
    currentCategory: string
}

export default function MobileMenu({ categories, currentCategory }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="md:hidden">
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition"
                aria-label="Toggle menu"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="text-sm font-medium">Categories</span>
            </button>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Menu */}
                    <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white rounded-lg shadow-xl z-50 max-h-[60vh] overflow-y-auto">
                        <nav className="p-2">
                            {categories.map(cat => (
                                <a
                                    key={cat.id}
                                    href={`/${cat.id}`}
                                    className={`block py-3 px-4 rounded-lg transition ${cat.id === currentCategory
                                            ? 'bg-blue-100 text-blue-700 font-medium'
                                            : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <div className="font-medium">{cat.name}</div>
                                    <div className="text-xs text-gray-500 mt-0.5">{cat.description}</div>
                                </a>
                            ))}
                        </nav>
                    </div>
                </>
            )}
        </div>
    )
}
