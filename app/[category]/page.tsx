import { hubCategories } from "@/data/categories"
import { getBoardsByCategory, Category } from "@/data/boards"
import BoardCard from "./BoardCard"

export default async function JobBoards({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params as { category: Category }

    const currentCategory = hubCategories.find(cat => cat.id === category)

    return (
        <div>
            <header className="p-4 bg-slate-900 text-white">
                <h1>JobBoardHub</h1>
                <p>Find specialized job boards</p>
            </header>

            <div className="flex">
                <aside className="w-48 p-4 border-r">
                    <nav>

                        {hubCategories.map(category => (
                            <a key={category.id} href={`/${category.id}`} className="block py-2">
                                {category.name}
                            </a>
                        ))}
                    </nav>
                </aside>
                <main className="flex-1 p-6">
                    <h2 className="text-2xl font-bold mb-4">{currentCategory?.name || category} Job Boards</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {getBoardsByCategory(category).map(board => (
                            <BoardCard key={board.name} board={board} />
                        ))}
                    </div>
                </main>

            </div>
        </div >


    )
}