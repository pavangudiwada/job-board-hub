import { hubCategories } from "@/data/categories"
import { getBoardsByCategory, Category } from "@/data/boards"
import { seoFooterCollections } from "@/data/seoCollections"
import BoardExplorer from "./BoardExplorer"
import FloatingActionBar from "./FloatingActionBar"
import Link from "next/link"
import WelcomeBanner from "@/app/components/WelcomeBanner"
import MobileMenu from "@/app/components/MobileMenu"
import { Analytics } from "@vercel/analytics/next"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type RouteParams = { category: string }

export async function generateStaticParams() {
    return hubCategories.map((category) => ({ category: category.id }))
}

export async function generateMetadata(
    { params }: { params: Promise<RouteParams> }
): Promise<Metadata> {
    const { category } = await params
    const currentCategory = hubCategories.find((cat) => cat.id === category)

    if (!currentCategory) {
        return {
            title: "Category Not Found | Job Resources",
            robots: { index: false, follow: false },
        }
    }

    const title = `${currentCategory.name} Job Boards | Job Resources`
    const description = `Browse curated ${currentCategory.name.toLowerCase()} job boards to find your next opportunity.`

    return {
        title,
        description,
        alternates: {
            canonical: `/${currentCategory.id}`,
        },
        openGraph: {
            title,
            description,
            url: `/${currentCategory.id}`,
            type: "website",
        },
        twitter: {
            title,
            description,
            card: "summary_large_image",
        },
    }
}

export default async function JobBoards({ params }: { params: Promise<RouteParams> }) {
    const { category } = await params as { category: Category }

    const currentCategory = hubCategories.find(cat => cat.id === category)
    const boards = getBoardsByCategory(category)
    if (!currentCategory) {
        notFound()
    }

    return (
        <div className="flex flex-col h-screen">
            <WelcomeBanner />
            <header className="sticky top-0 z-50 p-4 bg-slate-900 text-white">
                <div className="flex items-center justify-between mb-3 md:mb-0">
                    <div>
                        <h1 className="text-xl font-bold">Job Resources</h1>
                        <p className="text-sm">Everything you need to find your next job.</p>
                    </div>
                    <Link
                        href="https://github.com/pavangudiwada/job-resources"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-md hover:bg-gray-100 transition text-sm font-medium"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        Star us on GitHub
                    </Link>
                </div>
                {/* Mobile menu */}
                <div className="relative">
                    <MobileMenu categories={hubCategories} currentCategory={category} />
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                <aside className="hidden md:block sticky top-0 w-48 h-[calc(100vh-72px)] overflow-y-auto p-4 border-r bg-slate-900">
                    <nav>

                        {hubCategories.map(cat => (
                            <a
                                key={cat.id}
                                href={`/${cat.id}`}
                                className={`block py-2 px-3 rounded transition ${cat.id === category
                                    ? 'bg-blue-100 text-blue-700 font-medium'
                                    : 'hover:text-blue-700'
                                    }`}
                            >
                                {cat.name}
                            </a>
                        ))}
                    </nav>
                </aside>
                <main className="flex-1 p-6 pb-40 md:pb-28 overflow-y-auto">
                    <h2 className="text-2xl font-bold mb-4">{currentCategory.name} Job Boards</h2>
                    <BoardExplorer boards={boards} />

                    <section className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Explore Best Job Collections</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            Browse curated pages for high-intent searches like open source, security, startup, and AI/ML roles.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {seoFooterCollections.map((collection) => (
                                <Link
                                    key={collection.slug}
                                    href={`/best/${collection.slug}`}
                                    className="px-3 py-2 bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 rounded-md text-sm font-medium transition"
                                >
                                    {collection.title}
                                </Link>
                            ))}
                        </div>
                    </section>
                </main>
                <Analytics />
            </div>
            <FloatingActionBar />
        </div >


    )
}
