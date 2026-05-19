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

const categories = [
  {
    name: 'Banking',
    docs: ['Bank statements', 'Passbook records', 'Transaction histories', 'Savings certificates', 'Term deposit slips'],
  },
  {
    name: 'Identity',
    docs: ['National ID / PhilSys', 'Passport', "Driver's license", 'Voter ID', 'UMID / SSS card'],
  },
  {
    name: 'Income',
    docs: ['Payslips', 'Employment contracts', 'ITR / BIR 2316', 'Certificate of employment', 'Business financials'],
  },
  {
    name: 'Government',
    docs: ['SSS records', 'Pag-IBIG statements', 'PhilHealth', 'BIR tax clearance', 'Business permits'],
  },
];

const regions = [
  { code: 'PH', label: 'Philippines' },
  { code: 'SG', label: 'Singapore' },
  { code: 'MY', label: 'Malaysia' },
  { code: 'ID', label: 'Indonesia' },
  { code: 'TH', label: 'Thailand' },
  { code: 'US', label: 'United States' },
  { code: 'MX', label: 'Mexico' },
  { code: 'BR', label: 'Brazil' },
  { code: 'NG', label: 'Nigeria' },
  { code: 'KE', label: 'Kenya' },
];

export default function Slide12DocumentCoverage() {
  return (
    <div style={{ width: '1440px', height: '900px', background: T.bgLight, padding: '36px 64px 32px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: T.greenPrimary, flexShrink: 0 }} />
          <span style={{ fontFamily: T.inter, fontSize: '20px', fontWeight: 700, color: T.bgDark, letterSpacing: '-0.5px' }}>kita</span>
        </div>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>12 — DOCUMENT COVERAGE</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: T.greenPrimary, flexShrink: 0 }} />
            <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.greenPrimary, letterSpacing: '0.1em' }}>COVERAGE</span>
          </div>
          <h1 style={{ fontFamily: T.inter, fontSize: '72px', fontWeight: 800, color: T.bgDark, letterSpacing: '-3px', lineHeight: 1, margin: 0 }}>
            50+ document types.<br />4 continents.
          </h1>
        </div>
        <p style={{ fontFamily: T.inter, fontSize: '16px', color: T.textMuted, lineHeight: 1.6, maxWidth: '380px', textAlign: 'right', paddingBottom: '8px' }}>
          Pre-trained on financial documents from Southeast Asia, the Americas, and Africa — no setup required for supported markets.
        </p>
      </div>

      {/* Document categories grid */}
      <div style={{ display: 'flex', gap: '16px' }}>
        {categories.map(({ name, docs }) => (
          <div key={name} style={{ flex: 1, background: T.white, border: `1px solid ${T.borderLight}`, borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontFamily: T.inter, fontSize: '13px', fontWeight: 700, color: T.bgDark, letterSpacing: '-0.2px' }}>{name}</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {docs.map((doc) => (
                <div key={doc} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: T.greenPrimary, flexShrink: 0 }} />
                  <span style={{ fontFamily: T.inter, fontSize: '13px', color: T.textMuted, lineHeight: 1.4 }}>{doc}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Region bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0', background: T.cardLight, border: `1px solid ${T.borderLight}`, borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ padding: '18px 24px', borderRight: `1px solid ${T.borderLight}`, flexShrink: 0 }}>
          <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>SUPPORTED MARKETS</span>
        </div>
        <div style={{ display: 'flex', gap: '0', flex: 1 }}>
          {regions.map(({ code, label }, i) => (
            <div key={code} style={{ display: 'flex', flexDirection: 'column', gap: '3px', padding: '14px 20px', borderLeft: i > 0 ? `1px solid ${T.borderLight}` : 'none', flex: 1 }}>
              <span style={{ fontFamily: T.mono, fontSize: '12px', fontWeight: 700, color: T.bgDark }}>{code}</span>
              <span style={{ fontFamily: T.inter, fontSize: '11px', color: T.textMuted }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>KITA / CAPTURE / 2026</span>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>12 / 19</span>
      </div>
    </div>
  );
}
