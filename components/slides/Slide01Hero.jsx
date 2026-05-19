const T = {
  bgDark: '#0A1F0F',
  greenAccent: '#4CAF72',
  white: '#FFFFFF',
  textMuted: '#8A9E8F',
  inter: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

export default function Slide01Hero() {
  return (
    <div style={{ width: '1440px', height: '900px', background: T.bgDark, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', boxSizing: 'border-box' }}>
      {/* Top labels */}
      <div style={{ position: 'absolute', top: '36px', left: '64px' }}>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>CAPTURE · 2026</span>
      </div>
      <div style={{ position: 'absolute', top: '36px', right: '64px' }}>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>CAPTURE · 2026</span>
      </div>

      {/* Sphere */}
      <div style={{
        position: 'absolute',
        right: '-80px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '880px',
        height: '880px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 60% 30%, #9ADCB0 0%, #5DC984 10%, #3A9457 25%, #2D6A3F 45%, #1C4828 68%, #0E2A17 88%, #091A0E 100%)',
      }} />

      {/* Headline */}
      <div style={{ position: 'absolute', left: '64px', top: '50%', transform: 'translateY(-50%)' }}>
        <div style={{ fontFamily: T.inter, fontSize: '114px', fontWeight: 800, color: T.white, lineHeight: 0.95, letterSpacing: '-5px' }}>
          Read anything.
        </div>
        <div style={{ fontFamily: T.inter, fontSize: '114px', fontWeight: 800, color: T.greenAccent, lineHeight: 0.95, letterSpacing: '-5px' }}>
          Extract everything.
        </div>
      </div>

      {/* Mid-left label */}
      <div style={{ position: 'absolute', left: '64px', bottom: '36px' }}>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>KITA / CAPTURE / 2026</span>
      </div>
      <div style={{ position: 'absolute', right: '64px', bottom: '36px' }}>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>01 / 19</span>
      </div>
    </div>
  );
}
