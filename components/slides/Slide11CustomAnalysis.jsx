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

const examples = [
  {
    prompt: 'Flag all deposits above ₱100,000 in the last 90 days',
    output: '3 transactions flagged. Largest: ₱149,500 on Feb 12 (Sender: GCash). Pattern: structuring risk noted.',
    tag: 'FRAUD SCREEN',
  },
  {
    prompt: 'Compute net take-home pay after all recurring deductions',
    output: 'Gross salary ₱84,200 · Deductions ₱14,350 (SSS, Pag-IBIG, tax) · Net take-home ₱69,850 / month',
    tag: 'INCOME',
  },
  {
    prompt: 'Identify recurring merchant relationships and categorize spend',
    output: 'Housing 31% · Utilities 9% · Food 22% · Transport 14% · Savings/remittance 18% · Other 6%',
    tag: 'CATEGORIZATION',
  },
  {
    prompt: 'Does this applicant show signs of salary advance dependency?',
    output: 'Yes — 4 instances of sub-₱5,000 balance in the 5 days before payroll. Pattern is consistent across 3 consecutive months.',
    tag: 'BEHAVIORAL',
  },
];

export default function Slide11CustomAnalysis() {
  return (
    <div style={{ width: '1440px', height: '900px', background: T.bgDark, padding: '36px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: T.greenAccent, flexShrink: 0 }} />
          <span style={{ fontFamily: T.inter, fontSize: '20px', fontWeight: 700, color: T.white, letterSpacing: '-0.5px' }}>kita</span>
        </div>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>11 — CUSTOM ANALYSIS</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: T.greenAccent, flexShrink: 0 }} />
            <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.greenAccent, letterSpacing: '0.1em' }}>CAPABILITY 05 — CUSTOM ANALYSIS</span>
          </div>
          <h1 style={{ fontFamily: T.inter, fontSize: '72px', fontWeight: 800, color: T.white, letterSpacing: '-3px', lineHeight: 1, margin: 0 }}>
            Any analysis<br />you can describe.
          </h1>
        </div>
        <p style={{ fontFamily: T.inter, fontSize: '16px', color: T.textMuted, lineHeight: 1.6, maxWidth: '380px', textAlign: 'right', paddingBottom: '8px' }}>
          Write the question in plain language. Capture executes it against structured document data and returns a structured answer — no SQL, no code.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>EXAMPLE QUERIES · PLAIN LANGUAGE IN, STRUCTURED DATA OUT</span>
        </div>
        {examples.map(({ prompt, output, tag }, i) => (
          <div key={i} style={{ display: 'flex', gap: '0', borderTop: `1px solid ${T.borderDark}`, padding: '16px 0' }}>
            <div style={{ width: '80px', flexShrink: 0, paddingTop: '2px' }}>
              <span style={{ fontFamily: T.mono, fontSize: '10px', color: T.greenAccent, letterSpacing: '0.06em' }}>{tag}</span>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, flexShrink: 0 }}>›</span>
                <span style={{ fontFamily: T.mono, fontSize: '13px', color: T.white, lineHeight: 1.5 }}>{prompt}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', paddingLeft: '2px' }}>
                <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.greenAccent, flexShrink: 0 }}>←</span>
                <span style={{ fontFamily: T.inter, fontSize: '13px', color: T.textMuted, lineHeight: 1.5 }}>{output}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>KITA / CAPTURE / 2026</span>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>11 / 19</span>
      </div>
    </div>
  );
}
