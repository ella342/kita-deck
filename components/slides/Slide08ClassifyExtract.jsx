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

export default function Slide08ClassifyExtract() {
  const classifyRows = [
    { label: 'Bank statement', pct: '99.4%', high: true },
    { label: 'Government ID', pct: '0.4%', high: false },
    { label: 'Payslip', pct: '0.2%', high: false },
  ];
  const extractRows = [
    ['Account holder', 'Danilo Dela Cruz'],
    ['Account no.', '1234 56789 1234'],
    ['Currency', 'PHP'],
    ['Period', "Nov '23 – Feb '24"],
    ['Opening balance', '₱111,336.49'],
    ['Closing balance', '₱3,485.72'],
    ['Avg daily balance', '₱62,799.36'],
  ];

  return (
    <div style={{ width: '1440px', height: '900px', background: T.bgLight, padding: '36px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: T.greenPrimary, flexShrink: 0 }} />
          <span style={{ fontFamily: T.inter, fontSize: '20px', fontWeight: 700, color: T.bgDark, letterSpacing: '-0.5px' }}>kita</span>
        </div>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>08 — CLASSIFY & EXTRACT</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: T.greenPrimary, flexShrink: 0 }} />
            <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.greenPrimary, letterSpacing: '0.1em' }}>CAPABILITY 02 — CLASSIFY & EXTRACT</span>
          </div>
          <h1 style={{ fontFamily: T.inter, fontSize: '64px', fontWeight: 800, color: T.bgDark, letterSpacing: '-2.5px', lineHeight: 1, margin: 0 }}>
            One model. Every template.<br />No retraining.
          </h1>
        </div>
        <p style={{ fontFamily: T.inter, fontSize: '16px', color: T.textMuted, lineHeight: 1.6, maxWidth: '360px', textAlign: 'right', paddingBottom: '4px' }}>
          Drop in any document. Capture identifies the type, locates fields, and outputs them as structured data — no template engineering, no model fine-tuning.
        </p>
      </div>

      {/* 3-step flow */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '24px', alignItems: 'flex-start' }}>
        {/* 01 INPUT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
          <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.textMuted, letterSpacing: '0.1em' }}>01 / INPUT</span>
          <div style={{ background: T.white, border: `1px solid ${T.borderLight}`, borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[100, 75, 60, 85, 40].map((w, i) => (
              <div key={i} style={{ height: '8px', background: i === 2 ? T.greenAccent : '#D0CCC0', borderRadius: '2px', width: `${w}%` }} />
            ))}
          </div>
        </div>

        <div style={{ paddingTop: '40px', fontSize: '20px', color: T.textMuted, flexShrink: 0 }}>→</div>

        {/* 02 CLASSIFY */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1.4 }}>
          <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.textMuted, letterSpacing: '0.1em' }}>02 / CLASSIFY</span>
          <div style={{ background: T.white, border: `1px solid ${T.borderLight}`, borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {classifyRows.map(({ label, pct, high }) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: high ? T.cardLight : 'transparent', borderRadius: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: high ? T.greenAccent : T.borderLight }} />
                  <span style={{ fontFamily: T.inter, fontSize: '14px', color: high ? T.bgDark : T.textMuted }}>{label}</span>
                </div>
                <span style={{ fontFamily: T.mono, fontSize: '13px', color: high ? T.bgDark : T.textMuted }}>{pct}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px', borderTop: `1px solid ${T.borderLight}` }}>
              <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.06em' }}>DETECTED LAYOUT</span>
              <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted }}>Metrobank · PH · Retail</span>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: '40px', fontSize: '20px', color: T.textMuted, flexShrink: 0 }}>→</div>

        {/* 03 EXTRACT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1.4 }}>
          <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.textMuted, letterSpacing: '0.1em' }}>03 / EXTRACT</span>
          <div style={{ background: T.white, border: `1px solid ${T.borderLight}`, borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px' }}>
              <span style={{ fontFamily: T.mono, fontSize: '10px', color: T.textMuted, letterSpacing: '0.08em' }}>EXTRACTED FIELDS</span>
              <span style={{ fontFamily: T.mono, fontSize: '10px', color: T.greenAccent, letterSpacing: '0.04em' }}>● 23 of 23</span>
            </div>
            {extractRows.map(([label, value]) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderTop: `1px solid ${T.borderLight}` }}>
                <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.textMuted }}>{label}</span>
                <span style={{ fontFamily: T.mono, fontSize: '12px', color: label === 'Avg daily balance' ? T.greenAccent : T.bgDark, textAlign: 'right' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>KITA / CAPTURE / 2026</span>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>08 / 19</span>
      </div>
    </div>
  );
}
