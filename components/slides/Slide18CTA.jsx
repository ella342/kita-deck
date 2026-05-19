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

const nextsteps = [
  { num: 'I.', label: 'Book a pilot', desc: 'Bring your own documents. We run Capture against them and report accuracy within 48 hours.' },
  { num: 'II.', label: 'Get API access', desc: 'Developer sandbox available immediately. Full OpenAPI spec, Python SDK, and sample data included.' },
  { num: 'III.', label: 'Talk to the team', desc: 'Discuss your specific document mix, volumes, and integration timeline with our solutions team.' },
];

export default function Slide18CTA() {
  return (
    <div style={{ width: '1440px', height: '900px', background: T.bgDark, padding: '36px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: T.greenAccent, flexShrink: 0 }} />
          <span style={{ fontFamily: T.inter, fontSize: '20px', fontWeight: 700, color: T.white, letterSpacing: '-0.5px' }}>kita</span>
        </div>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>18 — LET'S TALK</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: T.greenAccent, flexShrink: 0 }} />
            <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.greenAccent, letterSpacing: '0.1em' }}>NEXT STEPS</span>
          </div>
          <h1 style={{ fontFamily: T.inter, fontSize: '88px', fontWeight: 800, color: T.white, letterSpacing: '-4px', lineHeight: 1, margin: 0 }}>
            Ready to<br />go live?
          </h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'right', paddingBottom: '8px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.textMuted, letterSpacing: '0.06em' }}>EMAIL</span>
            <span style={{ fontFamily: T.inter, fontSize: '18px', color: T.white }}>team@kita.finance</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.textMuted, letterSpacing: '0.06em' }}>WEB</span>
            <span style={{ fontFamily: T.inter, fontSize: '18px', color: T.white }}>kita.finance</span>
          </div>
        </div>
      </div>

      {/* Next steps cards */}
      <div style={{ display: 'flex', gap: '16px' }}>
        {nextsteps.map(({ num, label, desc }) => (
          <div key={num} style={{ flex: 1, background: T.cardDark, border: `1px solid ${T.borderDark}`, borderRadius: '12px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.textMuted, letterSpacing: '0.1em' }}>{num}</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontFamily: T.inter, fontSize: '22px', fontWeight: 700, color: T.white }}>{label}</span>
              <span style={{ fontFamily: T.inter, fontSize: '15px', color: T.textMuted, lineHeight: 1.6 }}>{desc}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom strip */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: T.cardDark, border: `1px solid ${T.borderDark}`, borderRadius: '12px', padding: '20px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>YC W26</span>
          <div style={{ width: '1px', height: '16px', background: T.borderDark }} />
          <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>SOC 2 TYPE II</span>
          <div style={{ width: '1px', height: '16px', background: T.borderDark }} />
          <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>ISO 27001</span>
          <div style={{ width: '1px', height: '16px', background: T.borderDark }} />
          <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>GDPR COMPLIANT</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: T.greenAccent, borderRadius: '100px', padding: '12px 24px', cursor: 'pointer' }}>
          <span style={{ fontFamily: T.inter, fontSize: '14px', fontWeight: 700, color: T.bgDark }}>Book a pilot →</span>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>KITA / CAPTURE / 2026</span>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>18 / 19</span>
      </div>
    </div>
  );
}
