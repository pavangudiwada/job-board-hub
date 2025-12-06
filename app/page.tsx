import { hubCategories } from "@/data/categories"

export default function Home() {
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
                {category.name} Jobs
              </a>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <h2>Welcome</h2>
          <p>Click a category on the left</p>
        </main>
      </div>
    </div>
  )
}
