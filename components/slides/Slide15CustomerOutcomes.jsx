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

const stats = [
  { value: '93%', label: 'Field extraction accuracy', sub: 'Across all document types and markets' },
  { value: '8×', label: 'Faster than manual review', sub: 'Median time: 28s vs. 4h per application' },
  { value: '60%', label: 'Reduction in fraud losses', sub: 'For lenders using Capture fraud signals' },
];

const quotes = [
  {
    text: "We cut underwriting time from 4 hours to under 30 minutes. The fraud detection alone saved us $2M in bad loans last quarter.",
    author: 'Chief Credit Officer',
    org: 'Mid-sized rural bank · Philippines',
  },
  {
    text: "Kita's coverage of regional bank formats is unlike anything else we evaluated. It worked on day one without any fine-tuning.",
    author: 'VP of Engineering',
    org: 'Digital lending platform · Southeast Asia',
  },
];

export default function Slide15CustomerOutcomes() {
  return (
    <div style={{ width: '1440px', height: '900px', background: T.bgDark, padding: '36px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: T.greenAccent, flexShrink: 0 }} />
          <span style={{ fontFamily: T.inter, fontSize: '20px', fontWeight: 700, color: T.white, letterSpacing: '-0.5px' }}>kita</span>
        </div>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>15 — CUSTOMER OUTCOMES</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: T.greenAccent, flexShrink: 0 }} />
            <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.greenAccent, letterSpacing: '0.1em' }}>OUTCOMES</span>
          </div>
          <h1 style={{ fontFamily: T.inter, fontSize: '72px', fontWeight: 800, color: T.white, letterSpacing: '-3px', lineHeight: 1, margin: 0 }}>
            Results lenders measure.
          </h1>
        </div>
        <p style={{ fontFamily: T.inter, fontSize: '16px', color: T.textMuted, lineHeight: 1.6, maxWidth: '380px', textAlign: 'right', paddingBottom: '8px' }}>
          Early customers include rural banks, digital lenders, and fintech platforms across Southeast Asia — measured against their own benchmarks.
        </p>
      </div>

      {/* Stat cards */}
      <div style={{ display: 'flex', gap: '16px' }}>
        {stats.map(({ value, label, sub }) => (
          <div key={label} style={{ flex: 1, background: T.cardDark, border: `1px solid ${T.borderDark}`, borderRadius: '12px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontFamily: T.inter, fontSize: '64px', fontWeight: 800, color: T.greenAccent, letterSpacing: '-3px', lineHeight: 1 }}>{value}</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontFamily: T.inter, fontSize: '16px', fontWeight: 600, color: T.white }}>{label}</span>
              <span style={{ fontFamily: T.inter, fontSize: '13px', color: T.textMuted, lineHeight: 1.5 }}>{sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quotes */}
      <div style={{ display: 'flex', gap: '16px' }}>
        {quotes.map(({ text, author, org }) => (
          <div key={author} style={{ flex: 1, background: T.cardDark, border: `1px solid ${T.borderDark}`, borderRadius: '12px', padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '20px' }}>
            <span style={{ fontFamily: T.inter, fontSize: '15px', color: T.white, lineHeight: 1.6 }}>"{text}"</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontFamily: T.inter, fontSize: '13px', fontWeight: 600, color: T.greenAccent }}>{author}</span>
              <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted }}>{org}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>KITA / CAPTURE / 2026</span>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>15 / 19</span>
      </div>
    </div>
  );
}
