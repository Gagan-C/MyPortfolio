import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="mb-6 text-lg">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="text-blue-400 hover:underline">Go back home</Link>
    </div>
  );
}
