import { RecipeProps } from "@/types/types"
import Link from "next/link"

const RecipeDetails = ({ recipe }: { recipe: RecipeProps }) => {
  return (
    <div>
      <Link
        href={"/recipe-list"}
        className="mt-8 mb-4 px-6 py-3 bg-orange-200 text-orange-700 font-semibold rounded-lg shadow-lg hover:shadow-none transition-shadow w-fit"
      >
        Go to recipe list
      </Link>

      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-950">
              {recipe.name}
            </h2>

            <div className="gap-4 mt-5">
              <p className="text-2xl text-gray-700">
                {recipe.mealType}
              </p>
            </div>

            <div className="mt-5">
              <p className="text-xl text-gray-800">
                {recipe.cuisine}
              </p>
            </div>

            {/* recipeDetails Ingredients */}
            <div className="mt-5">
              <h3 className="text-lg font-bold text-gray-700">
                Ingredients
              </h3>

              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                {recipe?.ingredients.map((item) => (
                  <li key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails
