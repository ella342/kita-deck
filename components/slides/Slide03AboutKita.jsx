// Founder photos: place carmel-limcaoco.jpg and rhea-malhotra.jpg in /public/images/
const T = {
  bgDark: '#0A1F0F',
  greenPrimary: '#2D6A3F',
  greenAccent: '#4CAF72',
  white: '#FFFFFF',
  textMuted: '#8A9E8F',
  cardDark: '#132B18',
  borderDark: '#2D6A3F',
  inter: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

const FounderCard = ({ initials, role, name, bio, linkedin }) => (
  <div style={{ background: T.cardDark, border: `1px solid ${T.borderDark}`, borderRadius: '16px', padding: '32px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
    <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: `radial-gradient(circle at 35% 35%, #4CAF72, #1C4828)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <span style={{ fontFamily: T.inter, fontSize: '32px', fontWeight: 700, color: T.white }}>{initials}</span>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <span style={{ fontFamily: T.mono, fontSize: '10px', color: T.textMuted, letterSpacing: '0.1em' }}>{role}</span>
      <div style={{ fontFamily: T.inter, fontSize: '22px', fontWeight: 700, color: T.white }}>{name}</div>
    </div>
    <p style={{ fontFamily: T.inter, fontSize: '14px', color: T.textMuted, lineHeight: 1.6, margin: 0 }}>{bio}</p>
    <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.04em', marginTop: 'auto' }}>{linkedin}</span>
  </div>
);

const StatItem = ({ label, sub }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
    <span style={{ fontFamily: T.inter, fontSize: '16px', fontWeight: 700, color: T.white }}>{label}</span>
    <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.04em' }}>{sub}</span>
  </div>
);

export default function Slide03AboutKita() {
  return (
    <div style={{ width: '1440px', height: '900px', background: T.bgDark, padding: '36px 64px 0 64px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', fontFamily: T.inter }}>
      {/* Top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: T.greenAccent, flexShrink: 0 }} />
          <span style={{ fontFamily: T.inter, fontSize: '20px', fontWeight: 700, color: T.white, letterSpacing: '-0.5px' }}>kita</span>
        </div>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>03 — ABOUT KITA</span>
      </div>

      {/* Section label + headline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: T.greenAccent, flexShrink: 0 }} />
          <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.greenAccent, letterSpacing: '0.1em' }}>THE TEAM BEHIND KITA CAPTURE</span>
        </div>
        <h1 style={{ fontFamily: T.inter, fontSize: '72px', fontWeight: 800, color: T.white, letterSpacing: '-3px', lineHeight: 1, margin: 0 }}>About Kita.</h1>
      </div>

      {/* Founder cards */}
      <div style={{ display: 'flex', gap: '20px', flex: 1, alignItems: 'center' }}>
        <FounderCard
          initials="CL"
          role="CO-FOUNDER · CEO"
          name="Carmel Limcaoco"
          bio="Stanford Symbolic Systems & Music, MS Computer Science. Shipped features at Apple in computational audio. UN awardee at 16, launched the first Product Fellowship in the Philippines."
          linkedin="linkedin.com/in/carmellimcaoco/"
        />
        <FounderCard
          initials="RM"
          role="CO-FOUNDER · CTO"
          name="Rhea Malhotra"
          bio="Stanford BS & MS in Computer Science, incoming PhD in CV & Robotics. Firestone Medal recipient — sole highest honor of the Stanford CS Department. 7 internationally recognized papers."
          linkedin="linkedin.com/in/rhea-malhotra-198744142/"
        />
      </div>

      {/* Stat bar */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0', borderTop: '1px solid #1E3D24', paddingTop: '24px', paddingBottom: '32px', marginTop: '24px' }}>
        <StatItem label={<><span style={{ color: T.white }}>YC </span><span style={{ color: T.greenAccent }}>W26</span></>} sub="Y Combinator Winter 2026" />
        <div style={{ width: '1px', background: '#1E3D24', height: '40px', margin: '0 40px' }} />
        <StatItem label="Stanford AI" sub="Research & engineering roots" />
        <div style={{ width: '1px', background: '#1E3D24', height: '40px', margin: '0 40px' }} />
        <StatItem label="SOC 2" sub="Type II in active engagement" />
      </div>
    </div>
  );
}
