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

const metrics = [
  { label: 'Avg monthly income', value: '₱84,200', sub: 'Trailing 3-month average', status: 'HEALTHY', color: T.greenAccent },
  { label: 'Debt service ratio', value: '28%', sub: 'Of gross monthly income', status: 'HEALTHY', color: T.greenAccent },
  { label: 'Cash flow volatility', value: 'LOW', sub: 'σ = 0.12 · 3-month window', status: 'STABLE', color: T.greenAccent },
  { label: '3-month income trend', value: '+14%', sub: 'Month-over-month change', status: '↑ RISING', color: T.greenAccent },
];

const txns = [
  { date: 'Mar 28', desc: 'Payroll — Jollibee Corp', amount: '+₱42,000', type: 'credit' },
  { date: 'Mar 15', desc: 'BPI Housing Loan', amount: '-₱12,500', type: 'debit' },
  { date: 'Mar 12', desc: 'Palawan Remittance', amount: '+₱5,000', type: 'credit' },
  { date: 'Mar 05', desc: 'SSS Contribution', amount: '-₱1,125', type: 'debit' },
  { date: 'Feb 28', desc: 'Payroll — Jollibee Corp', amount: '+₱42,000', type: 'credit' },
];

export default function Slide10CreditInsights() {
  return (
    <div style={{ width: '1440px', height: '900px', background: T.bgDark, padding: '36px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: T.greenAccent, flexShrink: 0 }} />
          <span style={{ fontFamily: T.inter, fontSize: '20px', fontWeight: 700, color: T.white, letterSpacing: '-0.5px' }}>kita</span>
        </div>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>10 — CREDIT INSIGHTS</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: T.greenAccent, flexShrink: 0 }} />
            <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.greenAccent, letterSpacing: '0.1em' }}>CAPABILITY 04 — CREDIT INSIGHTS</span>
          </div>
          <h1 style={{ fontFamily: T.inter, fontSize: '72px', fontWeight: 800, color: T.white, letterSpacing: '-3px', lineHeight: 1, margin: 0 }}>
            Decision-grade insight<br />from raw financials.
          </h1>
        </div>
        <p style={{ fontFamily: T.inter, fontSize: '16px', color: T.textMuted, lineHeight: 1.6, maxWidth: '380px', textAlign: 'right', paddingBottom: '8px' }}>
          Capture computes income, debt service, volatility, and trend signals directly from transactions — no spreadsheets, no manual formulas.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
        {/* Transaction list */}
        <div style={{ width: '340px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>RAW INPUT · BANK TRANSACTIONS</span>
          <div style={{ background: T.cardDark, border: `1px solid ${T.borderDark}`, borderRadius: '12px', overflow: 'hidden' }}>
            {txns.map(({ date, desc, amount, type }, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 20px', borderBottom: i < txns.length - 1 ? `1px solid ${T.borderDark}` : 'none' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontFamily: T.inter, fontSize: '13px', color: T.white }}>{desc}</span>
                  <span style={{ fontFamily: T.mono, fontSize: '10px', color: T.textMuted }}>{date}</span>
                </div>
                <span style={{ fontFamily: T.mono, fontSize: '13px', color: type === 'credit' ? T.greenAccent : T.textMuted }}>{amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Computed metrics */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>COMPUTED CREDIT SIGNALS</span>
            <div style={{ background: T.greenAccent, borderRadius: '100px', padding: '6px 14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: T.bgDark }} />
              <span style={{ fontFamily: T.mono, fontSize: '10px', color: T.bgDark, fontWeight: 700, letterSpacing: '0.06em' }}>RECOMMEND · APPROVE</span>
            </div>
          </div>
          {metrics.map(({ label, value, sub, status, color }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '18px 20px', borderTop: `1px solid ${T.borderDark}` }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', flex: 1 }}>
                <span style={{ fontFamily: T.inter, fontSize: '14px', fontWeight: 600, color: T.white }}>{label}</span>
                <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted }}>{sub}</span>
              </div>
              <span style={{ fontFamily: T.inter, fontSize: '28px', fontWeight: 800, color: T.white, minWidth: '100px', textAlign: 'right' }}>{value}</span>
              <span style={{ fontFamily: T.mono, fontSize: '11px', color, letterSpacing: '0.08em', minWidth: '80px', textAlign: 'right' }}>{status}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 20px', borderTop: `1px solid ${T.borderDark}`, background: 'rgba(76,175,114,0.06)', borderRadius: '0 0 12px 12px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <span style={{ fontFamily: T.inter, fontSize: '14px', fontWeight: 600, color: T.white }}>Decision confidence</span>
              <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted }}>Composite credit model score</span>
            </div>
            <span style={{ fontFamily: T.inter, fontSize: '36px', fontWeight: 800, color: T.greenAccent }}>91%</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>KITA / CAPTURE / 2026</span>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>10 / 19</span>
      </div>
    </div>
  );
}
