import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="relative">
        <h1 className="text-6xl font-bold text-center p-8 text-orange-700 bg-opacity-20">
          Welcome to My Recipe App
        </h1>
        <p className="absolute bottom-0 right-0 text-sm text-gray-500">
          updated by muhammadderic
        </p>
      </div>

      <Link
        href="/recipe-list"
        className="mt-8 px-6 py-3 bg-orange-200 text-orange-700 font-semibold rounded-lg shadow-lg hover:shadow-none transition-shadow"
      >
        Explore Recipes
      </Link>
    </div>

  );
}
