import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
      <h2 className="text-3xl font-bold text-center p-8 bg-opacity-20">
        This page can not be found.
      </h2>
      <Link
        href={"/"}
        className="mt-8 px-6 py-3 bg-orange-200 text-orange-700 font-semibold rounded-lg shadow-lg hover:shadow-none transition-shadow"
      >
        Go to home
      </Link>
    </div>
  );
}
