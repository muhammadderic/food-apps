import { RecipeProps } from "@/types/types";

export const fetchAllRecipes = async (): Promise<RecipeProps[]> => {
  try {
    const recipeResponse = await fetch("https://dummyjson.com/recipes");

    if (!recipeResponse.ok) {
      throw new Error(`Error: ${recipeResponse.statusText}`);
    }

    const recipes = await recipeResponse.json();

    return recipes?.recipes;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
}