const T = {
  bgDark: '#0A1F0F',
  greenPrimary: '#2D6A3F',
  greenAccent: '#4CAF72',
  white: '#FFFFFF',
  textMuted: '#8A9E8F',
  cardDark: '#132B18',
  inter: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

const InsightCard = ({ num, icon, category, headline, body, rows }) => (
  <div style={{ flex: 1, background: T.cardDark, borderRadius: '16px', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <span style={{ fontSize: '18px' }}>{icon}</span>
      <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.greenAccent, letterSpacing: '0.1em' }}>{num} / {category}</span>
    </div>
    <div style={{ fontFamily: T.inter, fontSize: '22px', fontWeight: 700, color: T.white, lineHeight: 1.2 }}>{headline}</div>
    <p style={{ fontFamily: T.inter, fontSize: '14px', color: T.textMuted, lineHeight: 1.6, margin: 0 }}>{body}</p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
      {rows.map(([label, value]) => (
        <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #1E3D24', paddingTop: '8px' }}>
          <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.06em' }}>{label}</span>
          <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.04em', textAlign: 'right' }}>{value}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function Slide06ProductOverview() {
  return (
    <div style={{ width: '1440px', height: '900px', background: T.bgDark, padding: '36px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: T.greenAccent, flexShrink: 0 }} />
          <span style={{ fontFamily: T.inter, fontSize: '20px', fontWeight: 700, color: T.white, letterSpacing: '-0.5px' }}>kita</span>
        </div>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>06 — WHAT CAPTURE OUTPUTS</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: T.greenAccent, flexShrink: 0 }} />
            <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.greenAccent, letterSpacing: '0.1em' }}>DOCUMENTS IN. INSIGHTS OUT.</span>
          </div>
          <h1 style={{ fontFamily: T.inter, fontSize: '72px', fontWeight: 800, color: T.white, letterSpacing: '-3px', lineHeight: 1, margin: 0 }}>
            One platform.<br />Three kinds of insight.
          </h1>
        </div>
        <p style={{ fontFamily: T.inter, fontSize: '16px', color: T.textMuted, lineHeight: 1.6, maxWidth: '340px', textAlign: 'right', paddingBottom: '8px' }}>
          Capture turns any borrower document into the analysis you actually need: pre-built or custom.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <InsightCard
          num="01" icon="🛡" category="FRAUD SIGNALS"
          headline="Detect tampered, forged, or synthetic documents."
          body="Pixel-level forensics, metadata mismatch, font drift, cross-doc consistency, and watchlist enrichment."
          rows={[['Tampering', '22 checks'], ['Metadata', 'EXIF, fonts, layers'], ['Cross-doc', 'consistency'], ['Watchlist', 'OFAC, PEP, sanctions']]}
        />
        <InsightCard
          num="02" icon="📈" category="CREDIT INSIGHTS"
          headline="Decision-grade insight from raw financials."
          body="Cash flow, average daily balance, income verification, debt-to-income, recurring deposits, expense categorization."
          rows={[['Cash flow', 'ADB, NSF, vol.'], ['Income', 'Verified, banded'], ['DTI', 'Computed, audited'], ['Categories', 'Spend, transfers']]}
        />
        <InsightCard
          num="03" icon="⚙️" category="CUSTOM ANALYSIS"
          headline="Any analysis you can describe."
          body="Define your own fields, scoring rules, and red flags. Capture's model adapts — no template engineering required."
          rows={[['Custom fields', 'Plain-English'], ['Rules', 'Cross-doc logic'], ['Scoring', 'Custom risk models'], ['Outputs', 'JSON, CSV, API']]}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>KITA / CAPTURE / 2026</span>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>06 / 19</span>
      </div>
    </div>
  );
}
