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

export default function Slide00Gate() {
  return (
    <div style={{ width: '1440px', height: '900px', background: T.bgLight, display: 'flex', flexDirection: 'column', fontFamily: T.inter, boxSizing: 'border-box', position: 'relative' }}>
      {/* Logo top-left */}
      <div style={{ position: 'absolute', top: '36px', left: '64px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: T.greenPrimary }} />
        <span style={{ fontFamily: T.inter, fontSize: '20px', fontWeight: 700, color: T.bgDark, letterSpacing: '-0.5px' }}>kita</span>
      </div>

      {/* Centered form */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '28px' }}>
        <h1 style={{ fontFamily: T.inter, fontSize: '72px', fontWeight: 800, color: T.bgDark, letterSpacing: '-3px', lineHeight: 1, margin: 0, textAlign: 'center' }}>
          Request access.
        </h1>
        <p style={{ fontFamily: T.inter, fontSize: '16px', color: T.textMuted, margin: 0 }}>
          Enter your work email to continue.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '440px' }}>
          <input
            type="email"
            placeholder="you@company.com"
            style={{ width: '100%', padding: '16px 20px', fontSize: '16px', fontFamily: T.inter, background: '#FFFFFF', border: `1px solid ${T.borderLight}`, borderRadius: '10px', color: T.bgDark, outline: 'none', boxSizing: 'border-box' }}
          />
          <button style={{ width: '100%', padding: '16px', fontSize: '16px', fontFamily: T.inter, fontWeight: 600, color: '#FFFFFF', background: T.greenPrimary, border: 'none', borderRadius: '10px', cursor: 'pointer' }}>
            Continue →
          </button>
        </div>
        <p style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.06em', margin: 0 }}>
          KITA CAPTURE · DOCUMENT AI
        </p>
      </div>
    </div>
  );
}
