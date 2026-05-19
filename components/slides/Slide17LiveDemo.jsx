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

const steps = [
  { num: '01', label: 'Upload', desc: 'Drop any bank statement, payslip, or ID — any format, any quality.' },
  { num: '02', label: 'Process', desc: 'Capture classifies, extracts, and runs fraud signals in real time.' },
  { num: '03', label: 'Review output', desc: 'Structured JSON, credit metrics, and flagged signals ready in seconds.' },
];

export default function Slide17LiveDemo() {
  return (
    <div style={{ width: '1440px', height: '900px', background: T.bgLight, padding: '36px 64px 32px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: T.greenPrimary, flexShrink: 0 }} />
          <span style={{ fontFamily: T.inter, fontSize: '20px', fontWeight: 700, color: T.bgDark, letterSpacing: '-0.5px' }}>kita</span>
        </div>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>17 — LIVE DEMO</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: T.greenPrimary, flexShrink: 0 }} />
            <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.greenPrimary, letterSpacing: '0.1em' }}>LIVE</span>
          </div>
          <h1 style={{ fontFamily: T.inter, fontSize: '72px', fontWeight: 800, color: T.bgDark, letterSpacing: '-3px', lineHeight: 1, margin: 0 }}>
            See it process<br />your documents.
          </h1>
        </div>
        <p style={{ fontFamily: T.inter, fontSize: '16px', color: T.textMuted, lineHeight: 1.6, maxWidth: '380px', textAlign: 'right', paddingBottom: '8px' }}>
          Upload a real document — any bank, any format. Results in under 30 seconds.
        </p>
      </div>

      {/* Demo frame */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'stretch' }}>
        {/* Upload zone */}
        <div style={{ flex: 1, background: T.white, border: `2px dashed ${T.borderLight}`, borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', padding: '48px' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: T.cardLight, border: `1px solid ${T.borderLight}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '28px', height: '36px', border: `2px solid ${T.borderLight}`, borderRadius: '4px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: '6px' }}>
              <div style={{ width: '14px', height: '2px', background: T.greenPrimary, borderRadius: '1px' }} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontFamily: T.inter, fontSize: '16px', fontWeight: 600, color: T.bgDark }}>Drop a document here</span>
            <span style={{ fontFamily: T.inter, fontSize: '13px', color: T.textMuted }}>PDF, JPG, PNG — any bank, any quality</span>
          </div>
          <div style={{ background: T.bgDark, borderRadius: '100px', padding: '12px 28px' }}>
            <span style={{ fontFamily: T.inter, fontSize: '14px', fontWeight: 600, color: T.white }}>Choose file</span>
          </div>
        </div>

        {/* Steps */}
        <div style={{ width: '400px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '0' }}>
          {steps.map(({ num, label, desc }, i) => (
            <div key={num} style={{ display: 'flex', gap: '20px', padding: '28px 0', borderTop: i > 0 ? `1px solid ${T.borderLight}` : 'none' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0', flexShrink: 0 }}>
                <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.greenPrimary, letterSpacing: '0.08em' }}>{num}</span>
                {i < steps.length - 1 && (
                  <div style={{ width: '1px', flex: 1, background: T.borderLight, marginTop: '8px' }} />
                )}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontFamily: T.inter, fontSize: '18px', fontWeight: 700, color: T.bgDark }}>{label}</span>
                <span style={{ fontFamily: T.inter, fontSize: '14px', color: T.textMuted, lineHeight: 1.5 }}>{desc}</span>
              </div>
            </div>
          ))}

          <div style={{ background: T.cardLight, border: `1px solid ${T.borderLight}`, borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: T.inter, fontSize: '13px', color: T.textMuted }}>Average processing time</span>
            <span style={{ fontFamily: T.mono, fontSize: '20px', fontWeight: 700, color: T.bgDark }}>28s</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>KITA / CAPTURE / 2026</span>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>17 / 19</span>
      </div>
    </div>
  );
}
