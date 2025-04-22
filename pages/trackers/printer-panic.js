import Link from 'next/link';

export default function PrinterPanic() {
  return (
    <main className="min-h-screen bg-black text-white font-sans px-6 py-10">
      <h1 className="text-4xl font-bold text-red-400 mb-4">🔴 Printer Panic Indicator</h1>
      <p className="text-sm text-gray-400 mb-6">Last Updated: April 21, 2025</p>

      <section className="mb-8">
        <h2 className="text-2xl text-yellow-300 font-semibold mb-2">🧠 What It Tracks</h2>
        <p className="text-gray-300 text-sm">
          The Printer Panic Indicator measures signs of emergency liquidity injections by the U.S. Federal Reserve and global central banks.
          Commonly referred to as "money printing", this signal highlights structural liquidity shifts that precede market repricing.
        </p>
        <p className="text-gray-500 text-xs mt-2 italic">
          (e.g., RRP drain, dovish Fed language, sudden yield drops, or balance sheet reversals)
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-yellow-300 font-semibold mb-2">📈 Live Readings</h2>
        <ul className="list-disc text-sm pl-6 text-gray-200">
          <li>RRP Facility: <span className="text-white font-bold">$58.4B</span> — steep decline</li>
          <li>Fed Language: “Unexpected softening” (Goolsbee, Apr 20)</li>
          <li>QT: Passive tightening appears paused</li>
          <li>Market Response: Gold + Silver up, BTC stable, yields volatile</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-yellow-300 font-semibold mb-2">🔎 Narrative vs Action</h2>
        <p className="text-gray-300 text-sm">
          Despite official statements promoting resilience, internal Fed language has shifted. “Data dependence” is code
          for reactive printing, and “softness” signals dovish realignment. Balance sheet expansion is becoming inevitable.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-yellow-300 font-semibold mb-2">🧭 Strategic Implications</h2>
        <p className="text-sm text-gray-300">
          Liquidity re-injection precedes asset repricing. Gold and silver rally early. BTC acts as a sovereign bypass
          while equities remain vulnerable to rotation shock. Silver often follows gold in lagged surges during activation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-yellow-300 font-semibold mb-2">🔗 Related Signals</h2>
        <ul className="list-disc text-sm pl-6 text-gray-300">
          <li>
            <Link href="/trackers/gsr" className="text-yellow-300 underline hover:text-yellow-100">
              ⚪ GSR Tracker
            </Link>
          </li>
          <li>
            <Link href="/trackers/fed-bs" className="text-yellow-300 underline hover:text-yellow-100">
              🟤 Fed BS-to-Truth Translator
            </Link>
          </li>
        </ul>
      </section>

      <footer className="text-xs text-gray-500 border-t border-gray-800 pt-4 mt-12">
        <p>Printer Panic Tracker · Monetary Intel · www.monetaryintel.com</p>

      </footer>
    </main>
  );
}
// force rebuild
