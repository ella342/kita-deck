const T = {
  bgDark: '#0A1F0F',
  greenPrimary: '#2D6A3F',
  greenAccent: '#4CAF72',
  white: '#FFFFFF',
  textMuted: '#8A9E8F',
  cardDark: '#132B18',
  borderDark: '#1E3D24',
  inter: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

const capabilities = [
  {
    num: 'CAPABILITY 1',
    title: 'Derive credit signals from any document',
    body: 'We ran a backtest across 50,000 loan files at one of the largest microlenders in emerging markets. From documents alone — the kind any borrower can provide — we identified 20–30 signals that meaningfully split credit risk and are statistically justifiable additions to an existing credit model.',
    implication: 'File uploads are a signal source, not just a compliance step. We can derive predictive signal from anything a borrower submits.',
    relevant: 'MoreTyme credit limit tiering · Savii salary lending · SanlamTyme JVCo affordability assessment',
  },
  {
    num: 'CAPABILITY 2',
    title: 'Turn document chaos into a structured data lake',
    body: 'At TRBank, we ingested millions of pages of low-quality, heterogeneous documents and converted them into a clean, structured, queryable data asset. Low-resolution scans, inconsistent formats, handwritten records — all of it processed into data the credit team can actually use.',
    implication: 'Your historical document archive is not a cost center. It is an untapped data asset.',
    relevant: 'Any GoTyme market where legacy document volume exists',
  },
  {
    num: 'CAPABILITY 3',
    title: 'Extend your MCA reach beyond platform data',
    body: "GoTyme's platform-led MCA model works cleanly for merchants with deep transaction history. It systematically excludes the ones who don't — new TikTok Shop sellers, recently onboarded Foodpanda merchants, SMEs whose sales history lives outside your platforms. We ingest the documents those merchants already have — GCash statements, bank statements, BIR filings — and return structured signals your credit engine can act on. Same underwriting logic, wider addressable base.",
    implication: 'Reach the merchants platform data alone leaves behind — same underwriting logic, wider addressable base.',
    relevant: 'GoTyme MCA Philippines · Indonesia · Hong Kong',
  },
];

const Card = ({ num, title, body, implication, relevant }) => (
  <div style={{ background: T.cardDark, border: `1px solid ${T.borderDark}`, borderRadius: '16px', padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <span style={{ fontFamily: T.mono, fontSize: '10px', color: T.greenAccent, letterSpacing: '0.12em' }}>{num}</span>
    <div style={{ fontFamily: T.inter, fontSize: '21px', fontWeight: 700, color: T.white, lineHeight: 1.2, letterSpacing: '-0.4px' }}>{title}</div>
    <div style={{ fontFamily: T.inter, fontSize: '13px', color: T.textMuted, lineHeight: 1.55 }}>{body}</div>

    <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ borderLeft: `2px solid ${T.greenAccent}`, paddingLeft: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span style={{ fontFamily: T.mono, fontSize: '9px', color: T.greenAccent, letterSpacing: '0.14em' }}>THE IMPLICATION</span>
        <span style={{ fontFamily: T.inter, fontSize: '13px', fontWeight: 500, color: T.white, lineHeight: 1.5 }}>{implication}</span>
      </div>

      <div style={{ borderTop: `1px solid ${T.borderDark}`, paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span style={{ fontFamily: T.mono, fontSize: '9px', color: T.textMuted, letterSpacing: '0.14em' }}>RELEVANT FOR</span>
        <span style={{ fontFamily: T.inter, fontSize: '12px', fontWeight: 600, color: T.greenAccent, lineHeight: 1.5 }}>{relevant}</span>
      </div>
    </div>
  </div>
);

export default function Slide19GoTyme() {
  return (
    <div style={{ width: '1440px', height: '900px', background: T.bgDark, padding: '36px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box', fontFamily: T.inter }}>
      {/* Top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: T.greenAccent, flexShrink: 0 }} />
          <span style={{ fontFamily: T.inter, fontSize: '20px', fontWeight: 700, color: T.white, letterSpacing: '-0.5px' }}>kita</span>
        </div>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>19 — WHAT WE CAN DO</span>
      </div>

      {/* Header section */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: T.greenAccent, flexShrink: 0 }} />
            <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.greenAccent, letterSpacing: '0.1em' }}>KITA · WHAT WE CAN DO FOR YOU</span>
          </div>
          <h1 style={{ fontFamily: T.inter, fontSize: '52px', fontWeight: 800, color: T.white, letterSpacing: '-2px', lineHeight: 1.04, margin: 0, maxWidth: '780px' }}>
            We slot into your existing workflow and make it AI-native.
          </h1>
        </div>
        <p style={{ fontFamily: T.inter, fontSize: '16px', color: T.textMuted, lineHeight: 1.6, maxWidth: '320px', textAlign: 'right', paddingBottom: '6px' }}>
          Three live capabilities, built for lenders operating at your scale.
        </p>
      </div>

      {/* Capability cards */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'stretch' }}>
        {capabilities.map((c) => (
          <Card key={c.num} {...c} />
        ))}
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>KITA / FOR GOTYME / 2026</span>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>19 / 20</span>
      </div>
    </div>
  );
}
