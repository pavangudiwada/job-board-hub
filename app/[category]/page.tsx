import { hubCategories } from "@/data/categories"
import { getBoardsByCategory, Category, boards } from "@/data/boards"
import ClientJobBoardLayout from "./ClientJobBoardLayout"

export default async function JobBoards({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params as { category: Category }

    const currentCategory = hubCategories.find(cat => cat.id === category)

    return (
        <ClientJobBoardLayout
            allBoards={boards}
            initialCategoryBoards={getBoardsByCategory(category)}
            categories={hubCategories}
            currentCategory={category}
            categoryDescription={currentCategory?.description || ""}
        />
    )
}