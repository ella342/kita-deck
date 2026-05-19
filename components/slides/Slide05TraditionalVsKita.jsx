const T = {
  bgLight: '#F5F2EB',
  bgDark: '#0A1F0F',
  greenPrimary: '#2D6A3F',
  greenAccent: '#4CAF72',
  red: '#E05252',
  white: '#FFFFFF',
  textMuted: '#8A9E8F',
  cardDark: '#132B18',
  borderLight: '#D0CCC0',
  inter: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

const Pill = ({ label }) => (
  <div style={{ background: T.white, border: `1px solid ${T.borderLight}`, borderRadius: '100px', padding: '9px 16px', fontFamily: T.inter, fontSize: '12px', fontWeight: 500, color: T.bgDark, whiteSpace: 'nowrap', flexShrink: 0 }}>{label}</div>
);

const Arrow = () => (
  <span style={{ fontFamily: T.inter, fontSize: '14px', color: T.textMuted, padding: '0 8px', flexShrink: 0 }}>→</span>
);

const KitaCard = ({ num, title, body }) => (
  <div style={{ background: T.cardDark, border: `1px solid ${T.greenPrimary}`, borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
    <span style={{ fontFamily: T.mono, fontSize: '10px', color: T.greenAccent, letterSpacing: '0.12em' }}>{num}</span>
    <div style={{ fontFamily: T.inter, fontSize: '18px', fontWeight: 700, color: T.white }}>{title}</div>
    <div style={{ fontFamily: T.inter, fontSize: '13px', color: T.textMuted, lineHeight: 1.5 }}>{body}</div>
  </div>
);

export default function Slide05TraditionalVsKita() {
  return (
    <div style={{ width: '1440px', height: '900px', display: 'flex', flexDirection: 'column', background: T.bgLight }}>
      {/* TOP HALF */}
      <div style={{ width: '1440px', height: '450px', flexShrink: 0, background: T.bgLight, padding: '36px 64px 36px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: T.greenPrimary, flexShrink: 0 }} />
            <span style={{ fontFamily: T.inter, fontSize: '20px', fontWeight: 700, color: T.bgDark, letterSpacing: '-0.5px' }}>kita</span>
          </div>
          <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>05 — THE CAPTURE DIFFERENCE</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: T.red, flexShrink: 0 }} />
              <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.red, letterSpacing: '0.1em' }}>TRADITIONAL FLOW</span>
            </div>
            <h2 style={{ fontFamily: T.inter, fontSize: '72px', fontWeight: 800, color: T.bgDark, letterSpacing: '-3px', lineHeight: 1, margin: 0 }}>2–4h per file.</h2>
          </div>
          <p style={{ fontFamily: T.inter, fontSize: '13px', color: T.textMuted, lineHeight: 1.6, maxWidth: '320px', textAlign: 'right', paddingBottom: '8px' }}>
            Seven handoffs. Dozens of hours. Every file reviewed by someone paid to read the same thing twice.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'nowrap' }}>
          <Pill label="Document scan" /><Arrow />
          <Pill label="Manual entry" /><Arrow />
          <Pill label="Visual review" /><Arrow />
          <Pill label="Cross-check" /><Arrow />
          <Pill label="Validate" /><Arrow />
          <Pill label="Final review" /><Arrow />
          <Pill label="Decision" />
        </div>
      </div>

      {/* BOTTOM HALF */}
      <div style={{ width: '1440px', height: '450px', flexShrink: 0, background: T.bgDark, borderTopLeftRadius: '16px', borderTopRightRadius: '16px', padding: '36px 64px 32px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: T.greenAccent, flexShrink: 0 }} />
          <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.greenAccent, letterSpacing: '0.1em' }}>KITA CAPTURE FLOW</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'flex-start' }}>
          <KitaCard num="01 / INGEST" title="Read" body="Any format. Any resolution. PDFs, photos, scans, screenshots." />
          <KitaCard num="02 / UNDERSTAND" title="Classify, extract, validate" body="One model. Cross-doc consistency. Fraud signals built in." />
          <KitaCard num="03 / OUTPUT" title="Decision-ready insight" body="Fraud flags, credit insights, custom analysis. JSON, CSV, PDF." />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 24px', flexShrink: 0, alignSelf: 'center' }}>
            <div style={{ fontFamily: T.inter, fontSize: '96px', fontWeight: 800, color: T.white, lineHeight: 0.9, letterSpacing: '-4px' }}>
              {'<'}30<span style={{ color: T.greenAccent }}>s</span>
            </div>
            <div style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.1em', paddingTop: '10px' }}>PER FILE</div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>KITA / CAPTURE / 2026</span>
          <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>05 / 19</span>
        </div>
      </div>
    </div>
  );
}
