
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10 font-sans">
      <h1 className="text-4xl text-yellow-400 font-bold mb-4">Monetary Intel</h1>
      <p className="text-lg text-gray-300 mb-8">Live financial and geopolitical intelligence signals.</p>
      <Link href="/trackers" className="text-yellow-300 underline hover:text-yellow-100">
        👉 Explore Live Trackers
      </Link>
    </main>
  );
}
