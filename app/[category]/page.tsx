import { hubCategories } from "@/data/categories"
import Link from "next/link"

export default async function JobBoards({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params

    const currentCategory = hubCategories.find(cat => cat.id === category)

    return (
        <div>
            <header className="p-8 bg-slate-900 text-white">
                <h1>JobBoardHub</h1>
                <p>Find specialized job boards</p>
            </header>

            <div className="flex">
                <aside className="w-64 p-8 border-r">
                    <nav>

                        {hubCategories.map(category => (
                            <a key={category.id} href={`/${category.id}`} className="block py-2">
                                {category.name}
                            </a>
                        ))}
                    </nav>
                </aside>
                <main className="flex-1 p-8">
                    <h2>{currentCategory?.name || category} Job Boards</h2>
                    <p>This is a new page</p>



                </main>
            </div>

        </div>

    )
}