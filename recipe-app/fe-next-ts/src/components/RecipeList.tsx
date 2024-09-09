import Link from "next/link"

const RecipeList = () => {
  return (
    <div>
      <Link href={`/`}>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm transition-transform hover:scale-105 cursor-pointer">
          <div className="p-6 bg-white rounded-md overflow-hidden shadow-md">
            <h3 className="text-lg font-bold text-gray-900">recipe name</h3>

            {/* Recipe Information */}
            <div className="mt-4 flex items-center justify-between gap-2">
              <p className="text-lg text-gray-600">Rating: 100</p>
              <p className="text-md text-gray-600 font-bold">cuisine</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default RecipeList
