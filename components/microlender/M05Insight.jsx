const LOGO = "https://app.paper.design/file-assets/01KRW9RKQ8CMS38RV87YYFQ9EV/01KRWC6EJA4G1AXHVAH2Z43R43.png";

const rowLabel = { boxSizing: 'border-box', color: '#16291C', flexShrink: 0, fontFamily: '"Geist", system-ui, sans-serif', fontSize: '19px', fontWeight: 700, lineHeight: '26px', width: '218px' };
const rowArrow = { boxSizing: 'border-box', color: '#4CAF72', flexShrink: 0, fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '17px', fontWeight: 700, lineHeight: '26px', width: '22px' };
const rowBody = { color: '#5A7060', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '17px', lineHeight: '25px' };
const mockLabel = { color: '#16291C', fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', lineHeight: '16px', textTransform: 'uppercase' };
const mockKey = { color: '#5A7060', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '12px', lineHeight: '16px' };
const mono12 = (color, weight = 400) => ({ color, fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '12px', fontWeight: weight, lineHeight: '16px' });
const pill = (extra) => ({ position: 'absolute', backgroundColor: '#16291C', borderRadius: '20px', boxShadow: '#16291C33 0px 6px 16px', paddingBlock: '7px', paddingInline: '13px', ...extra });
const pillText = (color = '#4CAF72') => ({ color, fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', lineHeight: '14px', textTransform: 'uppercase' });

function SignalRow({ label, body }) {
  return (
    <div style={{ alignItems: 'baseline', borderTop: '1px solid #D8D3C6', boxSizing: 'border-box', display: 'flex', gap: '20px', paddingBlock: '15px' }}>
      <div style={rowLabel}>{label}</div>
      <div style={rowArrow}>→</div>
      <div style={rowBody}>{body}</div>
    </div>
  );
}

export default function M05Insight() {
  return (
    <div style={{ backgroundColor: '#F5F2EB', borderBottomColor: '#2D6A3F', borderBottomStyle: 'solid', borderBottomWidth: '7px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', width: '1440px', height: '900px', overflow: 'clip', WebkitFontSmoothing: 'antialiased' }}>
      <div style={{ boxSizing: 'border-box', display: 'flex', paddingInline: '64px', paddingTop: '48px' }}>
        <div style={{ backgroundImage: `url(${LOGO})`, backgroundPosition: '50%', backgroundSize: 'cover', flexShrink: 0, height: '99px', width: '148px' }} />
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '14px', paddingInline: '64px', paddingTop: '28px' }}>
        <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
          <div style={{ backgroundColor: '#4CAF72', borderRadius: '50%', flexShrink: 0, height: '7px', width: '7px' }} />
          <div style={{ color: '#4CAF72', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '15px', fontWeight: 600, letterSpacing: '0.1em', lineHeight: '16px', textTransform: 'uppercase' }}>Kita&apos;s insight</div>
        </div>
        <div style={{ color: '#16291C', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '58px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '104%', maxWidth: '1180px' }}>
          Document uploads contain rich signals. Kita uncovers them.
        </div>
      </div>
      <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', gap: '56px', paddingInline: '64px', paddingTop: '8px', flex: 1 }}>
        {/* Left: pipeline + signal rows + decisions bar */}
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: 0, marginTop: '22px', width: '760px' }}>
          <div style={{ color: '#2D6A3F', fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '18px', fontWeight: 800, letterSpacing: '0.14em', lineHeight: '24px', textTransform: 'uppercase' }}>
            Documents → Signals → Decisions
          </div>
          <div style={{ color: '#0A1F0F', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '22px', fontWeight: 500, lineHeight: '30px', marginTop: '10px' }}>
            Using frontier vision AI pipelines developed out of Stanford&apos;s AI labs, Kita pulls risk-splitting credit signal from any uploaded document.
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', marginTop: '22px' }}>
            <SignalRow label="Bank statements" body="cashflow, income stability, debt burden, overdrafts, gambling, liquidity, repayment capacity" />
            <SignalRow label="Payslips" body="verified income, employer, deductions, net pay" />
            <SignalRow label="E-wallet & transactions" body="spending behavior, recurring obligations, income proxy" />
            <SignalRow label="Business documents" body="revenue, volatility, seasonality, working capital need" />
          </div>
          <div style={{ alignItems: 'center', backgroundColor: '#2E6A3F', borderRadius: '12px', boxSizing: 'border-box', display: 'flex', gap: '14px', marginTop: '18px', paddingBlock: '14px', paddingInline: '18px' }}>
            <div style={{ color: '#FFFFFF', flexShrink: 0, fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '15px', fontWeight: 700, letterSpacing: '0.1em', lineHeight: '18px', textTransform: 'uppercase' }}>Decisions</div>
            <div style={{ color: '#FFFFFF', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '17px', lineHeight: '24px' }}>approve more good borrowers, set smarter limits, price risk accurately</div>
          </div>
        </div>
        {/* Right: document mockups */}
        <div style={{ boxSizing: 'border-box', flexShrink: 0, height: '530px', marginTop: '-40px', position: 'relative', width: '480px' }}>
          {/* Payslip card */}
          <div style={{ position: 'absolute', top: 0, left: 0, translate: '210px 36px', rotate: '2.5deg', transformOrigin: 'top left', backgroundColor: '#FFFFFF', border: '1px solid #00000014', borderRadius: '14px', boxShadow: '#16291C1F 0px 10px 28px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '10px', height: '214px', paddingBlock: '18px', paddingInline: '20px', width: '250px' }}>
            <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
              <div style={mockLabel}>Payslip</div>
              <div style={{ color: '#8A968D', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '11px', lineHeight: '14px' }}>May 2026</div>
            </div>
            <div style={{ color: '#16291C', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '13px', fontWeight: 600, lineHeight: '16px' }}>Northgate Mfg. Co.</div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={mockKey}>Basic pay</div>
              <div style={mono12('#16291C')}>5,200.00</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={mockKey}>Deductions</div>
              <div style={mono12('#B0492F')}>−156.00</div>
            </div>
            <div style={{ borderTop: '1px solid #EDEAE0', display: 'flex', justifyContent: 'space-between', paddingTop: '8px' }}>
              <div style={{ ...mockKey, color: '#16291C', fontWeight: 600 }}>Net pay</div>
              <div style={mono12('#2D6A3F', 700)}>4,712.00</div>
            </div>
            <div style={pill({ top: '-16.5px', left: '-46.7px' })}>
              <div style={pillText()}>✓ income verified</div>
            </div>
          </div>
          {/* Bank statement card */}
          <div style={{ position: 'absolute', top: 0, left: 0, translate: '5px 143.5px', rotate: '-2deg', transformOrigin: 'top left', backgroundColor: '#FFFFFF', border: '1px solid #00000014', borderRadius: '16px', boxShadow: '#16291C29 0px 16px 36px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '11px', height: '276px', paddingBlock: '20px', paddingInline: '22px', width: '300px' }}>
            <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
              <div style={mockLabel}>Bank Statement</div>
              <div style={{ color: '#8A968D', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '11px', lineHeight: '14px' }}>•• 4417</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={mockKey}>Salary — Northgate Mfg</div>
              <div style={mono12('#2D6A3F')}>+4,712.00</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={mockKey}>E-wallet top-up</div>
              <div style={mono12('#16291C')}>−300.00</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={mockKey}>Loan installment</div>
              <div style={mono12('#B0492F')}>−750.00</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={mockKey}>Electric utility</div>
              <div style={mono12('#16291C')}>−245.00</div>
            </div>
            <div style={{ borderTop: '1px solid #EDEAE0', display: 'flex', justifyContent: 'space-between', paddingTop: '9px' }}>
              <div style={{ ...mockKey, color: '#16291C', fontWeight: 600 }}>Closing balance</div>
              <div style={mono12('#16291C', 700)}>6,918.40</div>
            </div>
            <div style={pill({ top: '211.6px', left: '42.6px', backgroundColor: '#FFFFFF', border: '1px solid #D8D3C6', boxShadow: '#16291C1A 0px 6px 16px' })}>
              <div style={pillText('#B0492F')}>! existing debt found</div>
            </div>
            <div style={pill({ bottom: '-13px', right: '-28px' })}>
              <div style={pillText()}>✓ stable cashflow</div>
            </div>
          </div>
          {/* WhatsApp photo card */}
          <div style={{ position: 'absolute', top: 0, left: 0, translate: '105.7px 392.4px', rotate: '-1.5deg', transformOrigin: 'top left', backgroundColor: '#FFFFFF', border: '1px solid #00000014', borderRadius: '14px', boxShadow: '#16291C24 0px 12px 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '9px', height: '136px', paddingBlock: '16px', paddingInline: '18px', width: '284px' }}>
            <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
              <div style={mockLabel}>Photo via WhatsApp</div>
              <div style={{ color: '#B0492F', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '11px', lineHeight: '14px' }}>blur · skew · glare</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', rotate: '1.6deg' }}>
              <div style={{ backgroundColor: '#C9CFC9', borderRadius: '5px', filter: 'blur(2.5px)', height: '9px', width: '82%' }} />
              <div style={{ backgroundColor: '#D4D9D2', borderRadius: '5px', filter: 'blur(2px)', height: '9px', width: '94%' }} />
              <div style={{ backgroundColor: '#CCD2CB', borderRadius: '5px', filter: 'blur(2.5px)', height: '9px', width: '70%' }} />
              <div style={{ backgroundColor: '#D8DCD6', borderRadius: '5px', filter: 'blur(3.5px)', height: '9px', width: '88%' }} />
            </div>
            <div style={pill({ bottom: '-13px', right: '-26px' })}>
              <div style={pillText()}>✓ still parsed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
