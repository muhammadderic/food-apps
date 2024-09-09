import RecipeList from "@/components/RecipeList"
import Link from "next/link"

const RecipeListPage = () => {
  return (
    <div className="w-full p-8 flex flex-col">
      <Link
        href={"/"}
        className="mt-8 mb-4 px-6 py-3 bg-orange-200 text-orange-700 font-semibold rounded-lg shadow-lg hover:shadow-none transition-shadow w-fit"
      >
        Home
      </Link>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <RecipeList key="1" />
        <RecipeList key="2" />
        <RecipeList key="3" />
        <RecipeList key="4" />
      </ul>
    </div>
  )
}

export default RecipeListPage
