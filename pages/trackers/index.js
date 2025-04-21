
import Link from 'next/link';

const trackers = [
  { slug: 'printer-panic', title: '🔴 Printer Panic Indicator' },
  { slug: 'gsr', title: '⚪ GSR Tracker' },
  { slug: 'fed-bs', title: '🟤 Fed BS-to-Truth Translator' },
  { slug: 'reset-watch', title: '🟡 Monetary Reset Watch' },
  { slug: 'flatulence', title: '🔵 Flatulence Index' },
  { slug: 'narrative-drift', title: '🟣 Narrative Drift Watch' }
];

export default function TrackersIndex() {
  return (
    <main className="min-h-screen bg-black text-white font-sans px-6 py-10">
      <h1 className="text-3xl text-yellow-400 font-bold mb-6">📊 Intelligence Trackers</h1>
      <ul className="list-disc pl-6 text-gray-300 space-y-2">
        {trackers.map((tracker) => (
          <li key={tracker.slug}>
            <Link href={`/trackers/${tracker.slug}`} className="text-yellow-300 underline hover:text-yellow-100">
              {tracker.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
