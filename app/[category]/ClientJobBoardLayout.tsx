'use client'

import { useState } from "react"
import Link from "next/link"
import { Board, Category } from "@/data/boards"
import BoardCard from "./BoardCard"
import SearchBar from "@/app/components/SearchBar"
import WelcomeBanner from "@/app/components/WelcomeBanner"
import MobileMenu from "@/app/components/MobileMenu"
import { Analytics } from "@vercel/analytics/next"

interface ClientJobBoardLayoutProps {
    allBoards: Board[];
    initialCategoryBoards: Board[];
    categories: Array<{ id: string; name: string; description: string }>;
    currentCategory: string;
    categoryDescription: string;
}

export default function ClientJobBoardLayout({
    allBoards,
    initialCategoryBoards,
    categories,
    currentCategory,
    categoryDescription
}: ClientJobBoardLayoutProps) {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredBoards = searchQuery 
        ? allBoards.filter(board => {
            const query = searchQuery.toLowerCase()
            return (
                board.name.toLowerCase().includes(query) ||
                board.description.toLowerCase().includes(query) ||
                board.tags?.some(tag => tag.toLowerCase().includes(query))
            )
        })
        : initialCategoryBoards

    const currentCategoryName = categories.find(c => c.id === currentCategory)?.name || currentCategory

    return (
        <div className="flex flex-col h-screen">
            <WelcomeBanner />
            <header className="sticky top-0 z-50 p-4 bg-slate-900 text-white shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-xl font-bold">Job Resources</h1>
                            <p className="text-sm text-gray-300 hidden sm:block">Everything you need to find your next job.</p>
                        </div>
                        {/* Mobile menu button positioned here for mobile */}
                        <div className="md:hidden">
                            <MobileMenu categories={categories} currentCategory={currentCategory} />
                        </div>
                    </div>

                    <div className="flex-1 max-w-xl mx-auto w-full">
                        <SearchBar 
                            value={searchQuery} 
                            onChange={setSearchQuery} 
                            placeholder="Search across all job boards..."
                        />
                    </div>

                    <Link
                        href="https://github.com/pavangudiwada/jobresources"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-md hover:bg-gray-100 transition text-sm font-medium whitespace-nowrap"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        Star us
                    </Link>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                <aside className="hidden md:block sticky top-0 w-64 h-full overflow-y-auto p-4 border-r bg-slate-900 flex-shrink-0">
                    <nav className="space-y-1">
                        {categories.map(cat => (
                            <Link
                                key={cat.id}
                                href={`/${cat.id}`}
                                onClick={() => setSearchQuery("")} // Clear search when changing category
                                className={`block py-2.5 px-4 rounded-lg transition-colors ${cat.id === currentCategory
                                    ? 'bg-blue-600 text-white font-medium shadow-sm'
                                    : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                                    }`}
                            >
                                <div className="font-medium">{cat.name}</div>
                                <div className={`text-xs mt-0.5 ${cat.id === currentCategory ? 'text-blue-100' : 'text-gray-500 group-hover:text-gray-400'}`}>
                                    {cat.description}
                                </div>
                            </Link>
                        ))}
                    </nav>
                </aside>
                
                <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">
                                {searchQuery ? `Search Results for "${searchQuery}"` : `${currentCategoryName} Job Boards`}
                            </h2>
                            {!searchQuery && (
                                <p className="text-gray-500 mt-1">{categoryDescription}</p>
                            )}
                        </div>

                        {filteredBoards.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                                {filteredBoards.map(board => (
                                    <BoardCard key={board.name} board={board} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 bg-white rounded-xl border border-gray-200 shadow-sm">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
                                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-1">No job boards found</h3>
                                <p className="text-gray-500 mb-6">
                                    We couldn't find any job boards matching "{searchQuery}"
                                </p>
                                <button 
                                    onClick={() => setSearchQuery("")}
                                    className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                                >
                                    Clear search and browse all
                                </button>
                            </div>
                        )}

                        {/* Floating "Missing a job board?" pill */}
                        <Link
                            href="https://github.com/pavangudiwada/job-board-hub/issues/new"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex fixed bottom-8 right-8 items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full shadow-lg hover:bg-slate-800 transition-all hover:shadow-xl text-sm font-medium z-40 hover:-translate-y-1"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Add a job board
                        </Link>
                    </div>
                </main>
                <Analytics />
            </div>
        </div>
    )
}
