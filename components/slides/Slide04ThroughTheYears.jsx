const T = {
  bgLight: '#F5F2EB',
  bgDark: '#0A1F0F',
  greenPrimary: '#2D6A3F',
  greenAccent: '#4CAF72',
  textMuted: '#8A9E8F',
  cardLight: '#EDEAE0',
  borderLight: '#D0CCC0',
  inter: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

const EraCard = ({ period, era, body, tag, dark }) => (
  <div style={{ flex: 1, background: dark ? T.bgDark : '#FFFFFF', border: `1px solid ${T.borderLight}`, borderRadius: '16px', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.textMuted, letterSpacing: '0.06em' }}>{period}</span>
    <div style={{ fontFamily: T.inter, fontSize: '22px', fontWeight: 700, color: dark ? '#FFFFFF' : T.bgDark }}>{era}</div>
    <p style={{ fontFamily: T.inter, fontSize: '14px', color: T.textMuted, lineHeight: 1.6, margin: 0, flex: 1 }}>{body}</p>
    <span style={{ fontFamily: T.mono, fontSize: '11px', color: dark ? T.greenAccent : T.textMuted, letterSpacing: '0.06em' }}>{tag}</span>
  </div>
);

export default function Slide04ThroughTheYears() {
  return (
    <div style={{ width: '1440px', height: '900px', background: T.bgLight, padding: '36px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box', fontFamily: T.inter }}>
      {/* Top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: T.greenPrimary, flexShrink: 0 }} />
          <span style={{ fontFamily: T.inter, fontSize: '20px', fontWeight: 700, color: T.bgDark, letterSpacing: '-0.5px' }}>kita</span>
        </div>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>04 — THE STATE OF DOCUMENT AI</span>
      </div>

      {/* Headline */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: '40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: T.greenPrimary, flexShrink: 0 }} />
            <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.greenPrimary, letterSpacing: '0.1em' }}>DOCUMENT PROCESSING, THROUGH THE YEARS</span>
          </div>
          <h1 style={{ fontFamily: T.inter, fontSize: '64px', fontWeight: 800, color: T.bgDark, letterSpacing: '-2.5px', lineHeight: 1, margin: 0, maxWidth: '680px' }}>
            Most of finance still reads documents like it's 2010.
          </h1>
        </div>
        <p style={{ fontFamily: T.inter, fontSize: '16px', color: T.textMuted, lineHeight: 1.6, maxWidth: '320px', textAlign: 'right', paddingTop: '56px' }}>
          Document AI evolved in four eras. Capture is the first that's actually built for messy, real-world finance documents.
        </p>
      </div>

      {/* Era cards */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <EraCard period="1950 – 1990" era="Manual" body="Mail, paper, and pen. Underwriters read every page by hand." tag="Hours per file" />
        <EraCard period="1991 – 2010" era="Digital" body="Fax, email, retype. Same manual review, just over a wire." tag="Same review, faster" />
        <EraCard period="2011 – 2023" era="OCR & Templates" body="One template per layout. Breaks the moment a doc shifts a font, format, or country." tag="Brittle, low coverage" />
        <EraCard period="2024 – Now" era="AI-Native" body="One model. Any document. Reads, classifies, validates, and outputs structured insight at scale." tag="Kita Capture" dark />
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>KITA / CAPTURE / 2026</span>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>04 / 19</span>
      </div>
    </div>
  );
}
