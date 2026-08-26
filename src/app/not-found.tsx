import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#08090a] text-white flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-extrabold font-heading text-blue-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
        <p className="text-gray-400 text-sm mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
