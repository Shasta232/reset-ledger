import Link from 'next/link';

export async function getServerSideProps() {
  const fallback = { gold: 3450, silver: 33.0, gsr: 104.5 };

  try {
    const headers = {
      'x-access-token': 'goldapi-3tb84sm9s4fz1g-io',
      'Content-Type': 'application/json'
    };

    const goldRes = await fetch('https://www.goldapi.io/api/XAU/USD', { headers });
    const silverRes = await fetch('https://www.goldapi.io/api/XAG/USD', { headers });

    const goldData = await goldRes.json();
    const silverData = await silverRes.json();

    const gold = goldData.price;
    const silver = silverData.price;
    const gsr = +(gold / silver).toFixed(2);

    return { props: { gold: gold.toFixed(2), silver: silver.toFixed(2), gsr } };
  } catch (err) {
    return { props: fallback };
  }
}

export default function GSRTracker({ gold, silver, gsr }) {
  return (
    <main className="min-h-screen bg-black text-white font-sans px-6 py-10">
      <h1 className="text-4xl font-bold text-gray-200 mb-4">⚪ GSR Tracker (Gold–Silver Ratio)</h1>
      <p className="text-sm text-gray-400 mb-6">Live Update · Signal Tracker</p>

      <section className="mb-8">
        <h2 className="text-2xl text-yellow-300 font-semibold mb-2">🧠 What It Tracks</h2>
        <p className="text-gray-300 text-sm">
          The Gold–Silver Ratio (GSR) measures how many ounces of silver are equivalent in value to one ounce of gold.
          It is a key signal for precious metal traders, central banks, and sovereign hedgers. High GSR suggests silver is undervalued relative to gold.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-yellow-300 font-semibold mb-2">📈 Live Readings</h2>
        <ul className="list-disc text-sm pl-6 text-gray-200">
          <li>Gold Price: <span className="text-white font-bold">${gold}</span></li>
          <li>Silver Price: <span className="text-white font-bold">${silver}</span></li>
          <li>Current GSR: <span className="text-white font-bold">{gsr}</span> — auto-calculated</li>
          <li>Trigger Zone: GSR &lt; 100 = Silver ignition likely</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-yellow-300 font-semibold mb-2">🔎 Interpretation</h2>
        <p className="text-gray-300 text-sm">
          When GSR compresses below 100, silver often enters a violent catch-up rally. This typically follows gold breakouts
          and coincides with monetary panic signals or liquidity events.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-yellow-300 font-semibold mb-2">🧭 Strategic Implications</h2>
        <p className="text-sm text-gray-300">
          A declining GSR signals capital rotation. Institutions may rebalance into silver, mining equities, or physical metals
          as gold becomes top-heavy. Watch for GSR under 95 to confirm breakout phase. Historically, GSR under 80 has preceded vertical moves in silver.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-yellow-300 font-semibold mb-2">🔗 Related Trackers</h2>
        <ul className="list-disc text-sm pl-6 text-gray-300">
          <li>
            <Link href="/trackers/printer-panic" className="text-yellow-300 underline hover:text-yellow-100">
              🔴 Printer Panic Indicator
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
        <p>GSR Tracker · Monetary Intel · www.monetaryintel.com</p>
      </footer>
    </main>
  );
}
