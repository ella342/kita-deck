const T = {
  bgLight: '#F5F2EB',
  bgDark: '#0A1F0F',
  greenPrimary: '#2D6A3F',
  greenAccent: '#4CAF72',
  white: '#FFFFFF',
  textMuted: '#8A9E8F',
  cardLight: '#EDEAE0',
  borderLight: '#D0CCC0',
  inter: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

const rows = [
  { dimension: 'Document understanding', kita: 'Full semantic + visual', ocr: 'Text coordinates only', llm: 'General-purpose', manual: 'Human judgment' },
  { dimension: 'Fraud signal detection', kita: '5 forensic systems', ocr: 'None', llm: 'Basic pattern match', manual: 'Inconsistent' },
  { dimension: 'Credit-ready outputs', kita: 'Income, DSR, cash flow', ocr: 'Raw text', llm: 'Summarized text', manual: 'Analyst notes' },
  { dimension: 'Regional coverage', kita: '10 markets, pre-trained', ocr: 'Language-only', llm: 'English-primary', manual: 'Depends on staff' },
  { dimension: 'Setup time', kita: '< 1 day', ocr: '4–12 weeks', llm: '4–8 weeks', manual: 'Immediate (but costly)' },
  { dimension: 'Accuracy on financials', kita: '> 99%', ocr: '70–85%', llm: '85–92%', manual: '92–96%' },
  { dimension: 'Cost per document', kita: 'Cents', ocr: '$0.50–$2', llm: '$0.20–$1', manual: '$5–$40' },
];

const cols = [
  { label: 'KITA CAPTURE', isKita: true },
  { label: 'TRADITIONAL OCR', isKita: false },
  { label: 'GENERIC LLM', isKita: false },
  { label: 'MANUAL REVIEW', isKita: false },
];

export default function Slide14ComparedToIndustry() {
  return (
    <div style={{ width: '1440px', height: '900px', background: T.bgLight, padding: '36px 64px 32px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: T.greenPrimary, flexShrink: 0 }} />
          <span style={{ fontFamily: T.inter, fontSize: '20px', fontWeight: 700, color: T.bgDark, letterSpacing: '-0.5px' }}>kita</span>
        </div>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>14 — COMPARED TO INDUSTRY</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: T.greenPrimary, flexShrink: 0 }} />
            <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.greenPrimary, letterSpacing: '0.1em' }}>COMPETITIVE POSITIONING</span>
          </div>
          <h1 style={{ fontFamily: T.inter, fontSize: '72px', fontWeight: 800, color: T.bgDark, letterSpacing: '-3px', lineHeight: 1, margin: 0 }}>
            Built deeper,<br />not broader.
          </h1>
        </div>
        <p style={{ fontFamily: T.inter, fontSize: '16px', color: T.textMuted, lineHeight: 1.6, maxWidth: '380px', textAlign: 'right', paddingBottom: '8px' }}>
          Purpose-built for financial document intelligence — not a general tool adapted for lending, not an OCR wrapper with a nice API.
        </p>
      </div>

      {/* Comparison table */}
      <div style={{ border: `1px solid ${T.borderLight}`, borderRadius: '12px', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ display: 'flex', background: T.cardLight, borderBottom: `1px solid ${T.borderLight}` }}>
          <div style={{ width: '220px', flexShrink: 0, padding: '14px 20px' }}>
            <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>DIMENSION</span>
          </div>
          {cols.map(({ label, isKita }) => (
            <div key={label} style={{ flex: 1, padding: '14px 20px', background: isKita ? T.bgDark : 'transparent', borderLeft: `1px solid ${T.borderLight}` }}>
              <span style={{ fontFamily: T.mono, fontSize: '11px', color: isKita ? T.greenAccent : T.textMuted, letterSpacing: '0.08em' }}>{label}</span>
            </div>
          ))}
        </div>
        {/* Rows */}
        {rows.map(({ dimension, kita, ocr, llm, manual }, i) => (
          <div key={dimension} style={{ display: 'flex', borderTop: i > 0 ? `1px solid ${T.borderLight}` : 'none' }}>
            <div style={{ width: '220px', flexShrink: 0, padding: '14px 20px' }}>
              <span style={{ fontFamily: T.inter, fontSize: '13px', color: T.textMuted }}>{dimension}</span>
            </div>
            {[kita, ocr, llm, manual].map((val, j) => (
              <div key={j} style={{ flex: 1, padding: '14px 20px', background: j === 0 ? '#0A1F0F' : 'transparent', borderLeft: `1px solid ${T.borderLight}` }}>
                <span style={{ fontFamily: j === 0 ? T.mono : T.inter, fontSize: '13px', color: j === 0 ? T.greenAccent : T.bgDark }}>{val}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>KITA / CAPTURE / 2026</span>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>14 / 19</span>
      </div>
    </div>
  );
}
