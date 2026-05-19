const T = {
  bgDark: '#0A1F0F',
  greenPrimary: '#2D6A3F',
  greenAccent: '#4CAF72',
  white: '#FFFFFF',
  textMuted: '#8A9E8F',
  cardDark: '#132B18',
  inter: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: T.greenAccent, flexShrink: 0 }} />
    <span style={{ fontFamily: T.inter, fontSize: '20px', fontWeight: 700, color: T.white, letterSpacing: '-0.5px' }}>kita</span>
  </div>
);

const RegionCard = ({ name, body }) => (
  <div style={{ background: T.cardDark, border: `1px solid ${T.greenPrimary}`, borderRadius: '16px', padding: '32px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <span style={{ fontFamily: T.mono, fontSize: '10px', color: T.greenAccent, letterSpacing: '0.12em' }}>LIVE</span>
    <div style={{ fontFamily: T.inter, fontSize: '20px', fontWeight: 700, color: T.white }}>{name}</div>
    <div style={{ fontFamily: T.inter, fontSize: '14px', color: T.textMuted, lineHeight: 1.6 }}>{body}</div>
  </div>
);

export default function Slide02WhoItsFor() {
  return (
    <div style={{ width: '1440px', height: '900px', background: T.bgDark, padding: '36px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box', fontFamily: T.inter }}>
      {/* Top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo />
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>02 — WHO IT'S FOR</span>
      </div>

      {/* Headline section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: T.greenAccent, flexShrink: 0 }} />
          <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.greenAccent, letterSpacing: '0.1em' }}>BUILT FOR LENDERS ANYWHERE IN THE WORLD.</span>
        </div>
        <h1 style={{ fontFamily: T.inter, fontSize: '72px', fontWeight: 800, color: T.white, letterSpacing: '-3px', lineHeight: 1, margin: 0 }}>
          Pick the region.<br />See what we've built for it.
        </h1>
      </div>

      {/* 2×2 card grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <RegionCard name="Southeast Asia" body="GCash, BDO, BIR, e-KTP, BPJS — every Filipino and Indonesian borrower document, parsed and verified in seconds." />
          <RegionCard name="United States" body="W-2s, 1099s, 4506-T transcripts, bank statements, business filings — reading the long tail of CDFI and SMB lending docs." />
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <RegionCard name="Latin America" body="CURP, RFC, OXXO receipts, Nubank and Mercado Pago statements — the documents Mexican, Brazilian, and Colombian lenders actually see." />
          <RegionCard name="Africa" body="M-Pesa, BVN, KRA, SARS — mobile-money statements and regional government IDs from Nigeria, Kenya, and South Africa." />
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>KITA / CAPTURE / 2026</span>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>02 / 19</span>
      </div>
    </div>
  );
}
