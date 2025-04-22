import Link from 'next/link';

export async function getServerSideProps() {
  const fallback = { rrp: 58000, status: 'PANIC', trend: '↓', updated: 'Unavailable' };

  try {
    const res = await fetch(
      'https://api.stlouisfed.org/fred/series/observations?series_id=RRPONTSYD&api_key=c820e0ce56eee34bb625b87367825a49&file_type=json&sort_order=desc&limit=10'
    );
    const data = await res.json();

    // Filter out entries where value is "."
    const valid = data.observations.filter(obs => obs.value !== ".");

    if (valid.length < 2) throw new Error("Insufficient valid RRP data.");

    const latest = valid[0];
    const prev = valid[1];

    const rrp = parseFloat(latest.value);
    const trend = rrp > parseFloat(prev.value) ? '↑' : rrp < parseFloat(prev.value) ? '↓' : '→';

    let status = 'SAFE';
    if (rrp < 100) status = 'RISK';
    if (rrp < 60) status = 'PANIC';

    return {
      props: {
        rrp: rrp.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0
        }),
        trend,
        status,
        updated: latest.date
      }
    };
  } catch (err) {
    console.error('RRP fetch failed:', err);
    return { props: fallback };
  }
}


export default function PrinterPanic({ rrp, trend, status, updated }) {
  return (
    <main className="min-h-screen bg-black text-white font-sans px-6 py-10">
      <h1 className="text-4xl font-bold text-red-500 mb-2">🔴 Printer Panic Indicator</h1>
      <p className="text-sm text-gray-400 mb-6">Live Reverse Repo Monitor · Status: <span className="font-bold text-white">{status}</span></p>

      <section className="mb-6">
        <h2 className="text-2xl text-red-300 font-semibold mb-2">📡 Live RRP Data</h2>
        <ul className="text-sm text-gray-300 list-disc pl-6">
          <li>RRP Balance: <span className="text-white font-bold">{rrp}</span></li>
          <li>Trend: <span className="text-white font-bold">{trend}</span></li>
          <li>Signal: <span className="text-white font-bold">{status}</span></li>
          <li>Last Updated: <span className="text-white">{updated}</span></li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl text-red-300 font-semibold mb-2">🚨 Interpretation</h2>
        <p className="text-sm text-gray-300">
          This indicator tracks the Fed’s Reverse Repo Facility as a proxy for systemic liquidity stress.
          RRP under $100B = risk. RRP under $60B = panic. Rising usage may signal cash hoarding by institutions.
          Falling RRP suggests the Fed is draining its dry powder or preparing to intervene.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl text-red-300 font-semibold mb-2">🧭 Strategic Implications</h2>
        <p className="text-sm text-gray-300">
          Panic-level RRP drain typically precedes either stealth QE or emergency rate pivots.
          This page lights up when the monetary system is leaking through its seams.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl text-red-300 font-semibold mb-2">🔗 Related Trackers</h2>
        <ul className="list-disc text-sm pl-6 text-gray-300">
          <li>
            <Link href="/trackers/gsr" className="text-yellow-300 underline hover:text-yellow-100">
              ⚪ GSR Tracker
            </Link>
          </li>
          <li>
            <Link href="/trackers/fed-bs" className="text-yellow-300 underline hover:text-yellow-100">
              🟤 Fed BS Translator
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
