import RecipeList from "@/components/RecipeList"
import { fetchAllRecipes } from "@/services/recipeServices"
import Link from "next/link"

const RecipeListPage = async () => {
  const recipes = await fetchAllRecipes();

  return (
    <div className="w-full p-8 flex flex-col">
      <Link
        href={"/"}
        className="mt-8 mb-4 px-6 py-3 bg-orange-200 text-orange-700 font-semibold rounded-lg shadow-lg hover:shadow-none transition-shadow w-fit"
      >
        Home
      </Link>


      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          recipes.map((recipe => (
            <RecipeList key={recipe.id} recipe={recipe} />
          )))
        }
      </ul>
    </div>
  )
}

export default RecipeListPage
