const LOGO = "https://app.paper.design/file-assets/01KRW9RKQ8CMS38RV87YYFQ9EV/01KRWC6EJA4G1AXHVAH2Z43R43.png";

// Decile chart geometry shared by all three cards (viewBox 380x170, x from 30 to 370).
const X = [30, 67.8, 105.6, 143.3, 181.1, 218.9, 256.7, 294.4, 332.2, 370];
const CHARTS = [
  {
    title: "Bank cash-flow score", r2: "0.98", badge: null,
    y: [40.5, 63.6, 64.9, 76.6, 84.4, 90.9, 101.9, 102.9, 119.5, 129.9],
    mean: 87.6, first: { text: "44%", x: 30, y: 26 }, last: { text: "16%", y: 150 },
  },
  {
    title: "Universal document score", r2: "0.96", badge: null,
    y: [33, 55.1, 59.7, 64.2, 66.2, 79.8, 86.6, 89.9, 97.4, 111.7],
    mean: 74.3, first: { text: "46%", x: 30, y: 20 }, last: { text: "22%", y: 132 },
  },
  {
    title: "Capture-fidelity score", r2: "0.97", badge: "+ 10 more",
    y: [23.2, 39.6, 56, 65.8, 72.3, 82.2, 88.7, 95.3, 101.9, 111.7],
    mean: 73.7, first: { text: "49%", x: 52, y: 18 }, last: { text: "22%", y: 132 },
  },
];

function DecileCard({ c }) {
  const points = c.y.map((y, i) => `${X[i]},${y}`).join(" ");
  return (
    <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #00000014', borderRadius: '14px', boxSizing: 'border-box', display: 'flex', flex: 1, flexDirection: 'column', gap: '2px', height: '237px', paddingBlock: '15px 18px', paddingInline: '20px' }}>
      <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ color: '#16291C', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '17px', fontWeight: 700, lineHeight: '22px' }}>{c.title}</div>
        {c.badge && (
          <div style={{ backgroundColor: '#16291C', borderRadius: '16px', paddingBlock: '3px', paddingInline: '10px' }}>
            <div style={{ color: '#4CAF72', fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', lineHeight: '14px' }}>{c.badge}</div>
          </div>
        )}
      </div>
      <div style={{ color: '#5A7060', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '12.5px', lineHeight: '16px' }}>linear R² {c.r2}</div>
      <svg width="372" height="170" viewBox="0 0 380 170" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <line x1="30" y1={c.mean} x2="370" y2={c.mean} stroke="#B0492F" strokeWidth="1.2" strokeDasharray="4 4" style={{ opacity: 0.55 }} />
        <polyline points={points} fill="none" stroke="#2D6A3F" strokeWidth="2.6" />
        {c.y.map((y, i) => <circle key={i} cx={X[i]} cy={y} r="4" fill="#2D6A3F" />)}
        <text x={c.first.x} y={c.first.y} fontFamily="Geist" fontWeight="700" fontSize="13" fill="#B0492F">{c.first.text}</text>
        <text x="370" y={c.last.y} fontFamily="Geist" fontWeight="700" fontSize="13" textAnchor="end" fill="#2D6A3F">{c.last.text}</text>
        <text x="200" y="166" fontFamily="Geist" fontSize="11" textAnchor="middle" fill="#8A968D">riskiest → safest score decile</text>
      </svg>
    </div>
  );
}

export default function M08Results() {
  return (
    <div style={{ backgroundColor: '#F4EFE3', borderBottomColor: '#2D6A3F', borderBottomStyle: 'solid', borderBottomWidth: '7px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', width: '1440px', height: '900px', overflow: 'clip', WebkitFontSmoothing: 'antialiased' }}>
      <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', paddingInline: '64px', paddingTop: '36px' }}>
        <div style={{ backgroundImage: `url(${LOGO})`, backgroundPosition: 'left center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', flexShrink: 0, height: '87px', width: '130px' }} />
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '14px', paddingInline: '68px 64px', paddingTop: '10px' }}>
        <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
          <div style={{ color: '#4CAF72', fontFamily: 'system-ui, sans-serif', fontSize: '13px', lineHeight: '16px' }}>●</div>
          <div style={{ color: '#4CAF72', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', lineHeight: '16px', textTransform: 'uppercase' }}>results</div>
        </div>
        <div style={{ color: '#16291C', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '58px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '104%', maxWidth: '1100px' }}>
          Kita predicted repayment more accurately than credit score.
        </div>
      </div>
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '24px', paddingInline: '64px', paddingTop: '8px' }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', gap: '24px', width: '100%' }}>
          <div style={{ backgroundColor: '#EDEAE0', border: '1px solid #00000014', borderRadius: '16px', boxSizing: 'border-box', display: 'flex', flex: 1, flexDirection: 'column', gap: '8px', height: '225px', paddingBlock: '21px 24px', paddingInline: '28px' }}>
            <div style={{ color: '#16291C', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '19px', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: '128%' }}>With Kita:</div>
            <div style={{ color: '#2D6A3F', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '48px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '100%' }}>+2.4 GINI</div>
            <div style={{ color: '#4A5247', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '16px', lineHeight: '145%', maxWidth: '580px' }}>
              In an 8,000-document backtest, Kita increased predictive power by 15% relative over the bureau score alone.
            </div>
          </div>
          <div style={{ backgroundColor: '#EDEAE0', border: '1px solid #00000014', borderRadius: '16px', boxSizing: 'border-box', display: 'flex', flex: 1, flexDirection: 'column', gap: '8px', height: '225px', paddingBlock: '19px 24px', paddingInline: '28px' }}>
            <div style={{ color: '#16291C', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '19px', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: '128%' }}>Richest Docs: Bank Statements, Payslips, etc.</div>
            <div style={{ color: '#2D6A3F', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '48px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '100%' }}>+7.0 GINI</div>
            <div style={{ color: '#4CAF72', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '14px', fontWeight: 600, letterSpacing: '0.1em', lineHeight: '18px', textTransform: 'uppercase' }}>+0.036 AUC</div>
            <div style={{ color: '#4A5247', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '16px', lineHeight: '145%', maxWidth: '580px' }}>
              Where Kita reads the richest financial signal, the lift more than triples — a 57% relative improvement over the bureau score alone.
            </div>
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', width: '1312px' }}>
          <div style={{ color: '#2D6A3F', fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '14px', fontWeight: 600, letterSpacing: '0.12em', lineHeight: '18px', textTransform: 'uppercase' }}>
            Default rate by score decile — monotonic risk splitting
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', gap: '20px' }}>
            {CHARTS.map((c) => <DecileCard key={c.title} c={c} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
