import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-900 flex items-center justify-center">
      <div className="bg-gray-300 border-8 border-black p-8 max-w-lg shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center text-black">
        <h1 className="text-4xl font-black mb-6">404</h1>
        <p className="text-2xl font-bold mb-8">Page Not Found</p>
        <Link
          href="/"
          className="bg-[#ff5252] text-white font-bold px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
