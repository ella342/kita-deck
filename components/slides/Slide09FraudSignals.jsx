const T = {
  bgDark: '#0A1F0F',
  greenPrimary: '#2D6A3F',
  greenAccent: '#4CAF72',
  red: '#E05252',
  white: '#FFFFFF',
  textMuted: '#8A9E8F',
  cardDark: '#132B18',
  borderDark: '#1E3D24',
  inter: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

const signals = [
  { num: '01', name: 'Pixel forensics', sub: 'Splice & rasterization detection', detail: 'Account number region rasterized at 2.4× the surrounding text. Splice probability 0.94.', status: 'FLAGGED' },
  { num: '02', name: 'Metadata forensics', sub: 'EXIF, fonts, layers, edit history', detail: 'PDF created in Adobe Illustrator, not bank\'s known templating engine. 3 hidden layers detected.', status: 'FLAGGED' },
  { num: '03', name: 'Cross-doc consistency', sub: 'Reconcile across the application file', detail: "Period on this statement (Jan–Mar) doesn't match payslip period (Feb–Apr) submitted in same file.", status: 'FLAGGED' },
  { num: '04', name: 'Behavioral anomaly', sub: 'Transaction pattern detection', detail: 'Three deposits at ₱49,500 in one week — structuring pattern below regulatory reporting threshold.', status: 'FLAGGED' },
  { num: '05', name: 'Watchlist enrichment', sub: 'OFAC, PEP, sanctions, adverse media', detail: 'No matches across 14 active lists. Identity cleared.', status: 'CLEAR' },
];

export default function Slide09FraudSignals() {
  return (
    <div style={{ width: '1440px', height: '900px', background: T.bgDark, padding: '36px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#4CAF72', flexShrink: 0 }} />
          <span style={{ fontFamily: T.inter, fontSize: '20px', fontWeight: 700, color: T.white, letterSpacing: '-0.5px' }}>kita</span>
        </div>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>09 — FRAUD SIGNALS</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: T.red, flexShrink: 0 }} />
            <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.red, letterSpacing: '0.1em' }}>CAPABILITY 03 — FRAUD SIGNALS</span>
          </div>
          <h1 style={{ fontFamily: T.inter, fontSize: '72px', fontWeight: 800, color: T.white, letterSpacing: '-3px', lineHeight: 1, margin: 0 }}>
            Catch what reviewers miss.
          </h1>
        </div>
        <p style={{ fontFamily: T.inter, fontSize: '16px', color: T.textMuted, lineHeight: 1.6, maxWidth: '380px', textAlign: 'right', paddingBottom: '8px' }}>
          Five forensic systems run on every document. Output is a per-decision risk envelope with explainable evidence.
        </p>
      </div>

      {/* Two-column layout: document preview + signals table */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
        {/* Document preview */}
        <div style={{ width: '340px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>DOCUMENT UNDER REVIEW</span>
          <div style={{ background: T.white, borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ width: '120px', height: '12px', background: T.bgDark, borderRadius: '2px' }} />
              <span style={{ fontFamily: T.mono, fontSize: '10px', color: T.textMuted }}>PAGE 1 / 4</span>
            </div>
            {[['Account Name', 'Maria S. Reyes'], ['Account No.', '3344 0019 9182'], ['Currency', 'PHP'], ['Period', 'Jan 2024 – Mar 2024']].map(([l, v]) => (
              <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 10px', background: '#FFF5F5', border: '1px solid #FFCCCC', borderRadius: '4px' }}>
                <span style={{ fontFamily: T.mono, fontSize: '11px', color: '#888' }}>{l}</span>
                <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.bgDark }}>{v}</span>
              </div>
            ))}
            {[80, 60, 90, 45, 70].map((w, i) => (
              <div key={i} style={{ height: '7px', background: i % 2 === 0 ? '#FFCCCC' : '#E0E0E0', borderRadius: '2px', width: `${w}%` }} />
            ))}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ background: T.bgDark, borderRadius: '100px', padding: '6px 16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: T.greenAccent }} />
                <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.white, letterSpacing: '0.06em' }}>4 SIGNALS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Signals table */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>SIGNALS DETECTED · 5 FORENSIC SYSTEMS</span>
            <div style={{ background: T.red, borderRadius: '100px', padding: '6px 14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: T.white }} />
              <span style={{ fontFamily: T.mono, fontSize: '10px', color: T.white, letterSpacing: '0.06em' }}>RISK · HIGH</span>
            </div>
          </div>
          {signals.map(({ num, name, sub, detail, status }) => (
            <div key={num} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '16px 20px', borderTop: `1px solid ${T.borderDark}` }}>
              <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.textMuted, width: '24px', flexShrink: 0 }}>{num}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', width: '200px', flexShrink: 0 }}>
                <span style={{ fontFamily: T.inter, fontSize: '14px', fontWeight: 600, color: T.white }}>{name}</span>
                <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted }}>{sub}</span>
              </div>
              <span style={{ fontFamily: T.inter, fontSize: '13px', color: T.textMuted, flex: 1, lineHeight: 1.5 }}>{detail}</span>
              <span style={{ fontFamily: T.mono, fontSize: '11px', color: status === 'FLAGGED' ? T.red : T.greenAccent, letterSpacing: '0.08em', flexShrink: 0 }}>{status}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>KITA / CAPTURE / 2026</span>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>09 / 19</span>
      </div>
    </div>
  );
}
