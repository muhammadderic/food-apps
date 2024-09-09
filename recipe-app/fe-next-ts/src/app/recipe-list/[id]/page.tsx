import RecipeDetails from "@/components/RecipeDetails"
import { fetchRecipeById } from "@/services/recipeServices"

const RecipeDetailsPage = async ({ params }: { params: { id: string } }) => {
  const recipe = await fetchRecipeById(params?.id);

  return (
    <div className="w-full p-8 flex flex-col">
      <RecipeDetails recipe={recipe} />
    </div>
  )
}

export default RecipeDetailsPage
