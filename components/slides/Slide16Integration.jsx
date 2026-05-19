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

const IntCard = ({ num, title, body }) => (
  <div style={{ background: T.white, border: `1px solid ${T.borderLight}`, borderRadius: '12px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
    <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.textMuted, letterSpacing: '0.1em' }}>{num}</span>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ fontFamily: T.inter, fontSize: '28px', fontWeight: 700, color: T.bgDark, lineHeight: 1.1 }}>{title}</div>
      <div style={{ fontFamily: T.inter, fontSize: '16px', color: T.textMuted, lineHeight: 1.6 }}>{body}</div>
    </div>
  </div>
);

export default function Slide16Integration() {
  return (
    <div style={{ width: '1440px', height: '900px', background: T.bgLight, padding: '36px 64px 32px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: T.greenPrimary, flexShrink: 0 }} />
          <span style={{ fontFamily: T.inter, fontSize: '20px', fontWeight: 700, color: T.bgDark, letterSpacing: '-0.5px' }}>kita</span>
        </div>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>16 — INTEGRATION</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: T.greenPrimary, flexShrink: 0 }} />
            <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.greenPrimary, letterSpacing: '0.1em' }}>THREE WAYS TO CONNECT</span>
          </div>
          <h1 style={{ fontFamily: T.inter, fontSize: '72px', fontWeight: 800, color: T.bgDark, letterSpacing: '-3px', lineHeight: 1, margin: 0 }}>
            Deploy in minutes,<br />not months.
          </h1>
        </div>
        <p style={{ fontFamily: T.inter, fontSize: '16px', color: T.textMuted, lineHeight: 1.6, maxWidth: '380px', textAlign: 'right', paddingBottom: '8px' }}>
          No rip-and-replace. Capture fits into your existing workflow via the integration method that works for your team.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <IntCard num="I." title="Python SDK" body="Install, authenticate, and start processing in under 10 lines. Type hints and async support included." />
        <IntCard num="II." title="REST API" body="Language-agnostic HTTP endpoints with webhook callbacks. Output in JSON, CSV, Excel, or custom. OpenAPI spec included." />
        <IntCard num="III." title="Web Portal" body="No-code portal to upload documents, review extractions, and export results. No engineering required." />
      </div>

      <div style={{ display: 'flex', border: `1px solid ${T.borderLight}`, borderRadius: '12px', background: T.cardLight, overflow: 'hidden' }}>
        {[
          { label: 'Output formats', value: 'JSON · CSV · Excel · Custom' },
          { label: 'Auth', value: 'API key · OAuth 2.0' },
          { label: 'Docs', value: 'OpenAPI spec included' },
        ].map(({ label, value }, i) => (
          <>
            {i > 0 && <div key={`div-${i}`} style={{ width: '1px', background: T.borderLight, flexShrink: 0 }} />}
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '20px 32px', flex: 1 }}>
              <span style={{ fontFamily: T.inter, fontSize: '13px', fontWeight: 700, color: T.bgDark }}>{label}</span>
              <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.textMuted, letterSpacing: '0.04em' }}>{value}</span>
            </div>
          </>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>KITA / CAPTURE / 2026</span>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>16 / 19</span>
      </div>
    </div>
  );
}
