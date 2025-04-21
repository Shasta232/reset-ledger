import Link from 'next/link';

export default function FedBSTranslator() {
  return (
    <main className="min-h-screen bg-black text-white font-sans px-6 py-10">
      <h1 className="text-4xl font-bold text-gray-200 mb-4">🟤 Fed BS-to-Truth Translator</h1>
      <p className="text-sm text-gray-400 mb-6">Last Updated: April 21, 2025</p>

      <h2 className="text-2xl text-yellow-300 font-semibold mb-4">🧾 Fed Says → Truth Means</h2>
      <table className="text-sm text-gray-200 border border-gray-700 w-full text-left">
        <thead className="bg-gray-800 text-yellow-300">
          <tr>
            <th className="px-4 py-2">Fed Says</th>
            <th className="px-4 py-2">Truth Means</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="px-4 py-2">“Resilient labor market”</td><td className="px-4 py-2">We can't justify cuts yet</td></tr>
          <tr><td className="px-4 py-2">“Data dependent”</td><td className="px-4 py-2">We need narrative cover to pivot</td></tr>
          <tr><td className="px-4 py-2">“Soft landing”</td><td className="px-4 py-2">We hope the market doesn't crash first</td></tr>
          <tr><td className="px-4 py-2">“Price stability”</td><td className="px-4 py-2">We’ll tolerate inflation</td></tr>
          <tr><td className="px-4 py-2">“QT continues”</td><td className="px-4 py-2">Until something breaks</td></tr>
        </tbody>
      </table>

      <p className="text-xs text-gray-500 mt-6 border-t border-gray-800 pt-4">
        Linked Tracker: <Link href="/trackers/printer-panic" className="text-yellow-300 underline">Printer Panic Indicator</Link>
      </p>
    </main>
  );
}
