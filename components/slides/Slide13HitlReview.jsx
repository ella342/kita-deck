const T = {
  bgDark: '#0A1F0F',
  greenPrimary: '#2D6A3F',
  greenAccent: '#4CAF72',
  amber: '#D4A84B',
  red: '#E05252',
  white: '#FFFFFF',
  textMuted: '#8A9E8F',
  cardDark: '#132B18',
  borderDark: '#1E3D24',
  inter: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

const queue = [
  { id: 'REV-0041', name: 'Maria S. Reyes', doc: 'Bank statement · BPI', confidence: '43%', flag: 'Pixel splice detected', status: 'IN REVIEW', color: T.amber },
  { id: 'REV-0042', name: 'Jose A. Santos', doc: 'Bank statement · Metrobank', confidence: '71%', flag: 'Cross-doc period mismatch', status: 'PENDING', color: T.textMuted },
  { id: 'REV-0043', name: 'Ana R. Cruz', doc: 'Payslip · DOLE format', confidence: '58%', flag: 'Font inconsistency flagged', status: 'PENDING', color: T.textMuted },
  { id: 'REV-0040', name: 'Ramon D. Lim', doc: 'Bank statement · UnionBank', confidence: '89%', flag: 'Auto-approved · No flags', status: 'RESOLVED', color: T.greenAccent },
];

export default function Slide13HitlReview() {
  return (
    <div style={{ width: '1440px', height: '900px', background: T.bgDark, padding: '36px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: T.greenAccent, flexShrink: 0 }} />
          <span style={{ fontFamily: T.inter, fontSize: '20px', fontWeight: 700, color: T.white, letterSpacing: '-0.5px' }}>kita</span>
        </div>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>13 — HITL REVIEW</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: T.greenAccent, flexShrink: 0 }} />
            <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.greenAccent, letterSpacing: '0.1em' }}>HUMAN-IN-THE-LOOP</span>
          </div>
          <h1 style={{ fontFamily: T.inter, fontSize: '72px', fontWeight: 800, color: T.white, letterSpacing: '-3px', lineHeight: 1, margin: 0 }}>
            Human review,<br />when you need it.
          </h1>
        </div>
        <p style={{ fontFamily: T.inter, fontSize: '16px', color: T.textMuted, lineHeight: 1.6, maxWidth: '380px', textAlign: 'right', paddingBottom: '8px' }}>
          Low-confidence extractions and fraud flags route to a review queue. Analysts see the evidence, approve or reject, and feed decisions back into the model.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '32px' }}>
        {/* Queue */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>REVIEW QUEUE · TODAY</span>
            <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.greenAccent, letterSpacing: '0.06em' }}>2 PENDING</span>
          </div>
          {queue.map(({ id, name, doc, confidence, flag, status, color }, i) => (
            <div key={id} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 0', borderTop: `1px solid ${T.borderDark}` }}>
              <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, width: '72px', flexShrink: 0 }}>{id}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>
                <span style={{ fontFamily: T.inter, fontSize: '14px', fontWeight: 600, color: T.white }}>{name}</span>
                <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted }}>{doc}</span>
              </div>
              <span style={{ fontFamily: T.inter, fontSize: '13px', color: T.textMuted, flex: 1, lineHeight: 1.4 }}>{flag}</span>
              <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.white, width: '36px', textAlign: 'right', flexShrink: 0 }}>{confidence}</span>
              <span style={{ fontFamily: T.mono, fontSize: '11px', color, letterSpacing: '0.06em', width: '90px', textAlign: 'right', flexShrink: 0 }}>{status}</span>
            </div>
          ))}
        </div>

        {/* Expanded review card */}
        <div style={{ width: '320px', flexShrink: 0, background: T.cardDark, border: `1px solid ${T.borderDark}`, borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.06em' }}>REV-0041</span>
            <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.amber, letterSpacing: '0.06em' }}>IN REVIEW</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontFamily: T.inter, fontSize: '16px', fontWeight: 700, color: T.white }}>Maria S. Reyes</span>
            <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted }}>BPI · Bank Statement · Jan–Mar 2024</span>
          </div>
          <div style={{ background: T.bgDark, borderRadius: '8px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontFamily: T.mono, fontSize: '10px', color: T.red, letterSpacing: '0.06em' }}>● PIXEL SPLICE DETECTED</span>
            <span style={{ fontFamily: T.inter, fontSize: '12px', color: T.textMuted, lineHeight: 1.5 }}>Account number region rasterized at 2.4× the surrounding text. Splice probability 0.94.</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted }}>Model confidence</span>
              <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.amber }}>43%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted }}>Routed to</span>
              <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.white }}>Senior Analyst</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ flex: 1, background: T.red, borderRadius: '8px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.white, letterSpacing: '0.06em' }}>REJECT</span>
            </div>
            <div style={{ flex: 1, background: T.greenPrimary, borderRadius: '8px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.white, letterSpacing: '0.06em' }}>APPROVE</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>KITA / CAPTURE / 2026</span>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>13 / 19</span>
      </div>
    </div>
  );
}
