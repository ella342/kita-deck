const LOGO = "https://app.paper.design/file-assets/01KRW9RKQ8CMS38RV87YYFQ9EV/01KRWC6EJA4G1AXHVAH2Z43R43.png";

const cardLabel = (color) => ({ color, fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', lineHeight: '16px', textTransform: 'uppercase' });
const cardFoot = (color) => ({ color, fontFamily: '"Geist", system-ui, sans-serif', fontSize: '14.5px', lineHeight: '140%', marginTop: 'auto' });
const lightCard = { backgroundColor: '#EDEAE0', border: '1px solid #00000014', borderRadius: '16px', boxSizing: 'border-box', display: 'flex', flex: 1, flexDirection: 'column', paddingBlock: '22px', paddingInline: '24px' };
const arrow = { alignContent: 'center', color: '#4CAF72', fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '26px', fontWeight: 700, lineHeight: '32px' };
const dpdRow = (color) => ({ color, fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em', lineHeight: '16px' });

export default function M07Backtest() {
  return (
    <div style={{ backgroundColor: '#F5F2EB', borderBottomColor: '#2D6A3F', borderBottomStyle: 'solid', borderBottomWidth: '7px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', width: '1440px', height: '900px', overflow: 'clip', WebkitFontSmoothing: 'antialiased' }}>
      <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', paddingInline: '64px', paddingTop: '36px' }}>
        <div style={{ backgroundImage: `url(${LOGO})`, backgroundPosition: '50%', backgroundSize: 'cover', flexShrink: 0, height: '99px', width: '148px' }} />
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '14px', paddingInline: '64px', paddingTop: '31px' }}>
        <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
          <div style={{ color: '#4CAF72', fontFamily: 'system-ui, sans-serif', fontSize: '15px', lineHeight: '16px' }}>●</div>
          <div style={{ color: '#4CAF72', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '15px', fontWeight: 600, letterSpacing: '0.1em', lineHeight: '16px', textTransform: 'uppercase' }}>case study</div>
        </div>
        <div style={{ color: '#16291C', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '56px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '106%', maxWidth: '1220px' }}>
          Kita backtested 8,000 real documents<br />from microlenders around the world
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexShrink: 0, gap: '14px', height: '396px', marginTop: '40px', paddingInline: '64px' }}>
        {/* 01 Documents */}
        <div style={lightCard}>
          <div style={cardLabel('#2D6A3F')}>01 · Documents</div>
          <div style={{ boxSizing: 'border-box', flexShrink: 0, height: '180px', marginTop: '14px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '34px', left: '34px', backgroundColor: '#FFFFFF', border: '1px solid #D8D3C6', borderRadius: '8px', height: '112px', rotate: '4deg', transformOrigin: 'top left', width: '150px' }} />
            <div style={{ position: 'absolute', top: '18px', left: '20px', backgroundColor: '#FFFFFF', border: '1px solid #D8D3C6', borderRadius: '8px', height: '116px', rotate: '-3deg', transformOrigin: 'top left', width: '150px' }} />
            <div style={{ position: 'absolute', top: '6px', left: '60px', backgroundColor: '#FFFFFF', border: '1px solid #C9CFC9', borderRadius: '8px', boxShadow: '#16291C1A 0px 6px 14px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '6px', height: '124px', paddingBlock: '10px', paddingInline: '12px', width: '160px' }}>
              <div style={{ backgroundColor: '#2D6A3F', borderRadius: '2px', flexShrink: 0, height: '7px', opacity: 0.8, width: '60%' }} />
              <div style={{ backgroundColor: '#D8D3C6', borderRadius: '2px', flexShrink: 0, height: '6px', width: '90%' }} />
              <div style={{ backgroundColor: '#D8D3C6', borderRadius: '2px', flexShrink: 0, height: '6px', width: '78%' }} />
              <div style={{ backgroundColor: '#D8D3C6', borderRadius: '2px', flexShrink: 0, height: '6px', width: '84%' }} />
            </div>
          </div>
          <div style={cardFoot('#5A7060')}>8,000 borrower docs — bank statements, payslips, bills, IDs</div>
        </div>
        <div style={arrow}>→</div>
        {/* 02 Computer vision */}
        <div style={lightCard}>
          <div style={cardLabel('#2D6A3F')}>02 · Computer vision</div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexShrink: 0, height: '180px', justifyContent: 'center', marginTop: '14px' }}>
            <svg width="238" height="168" viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
              <rect x="40" y="6" width="100" height="108" rx="8" fill="#FFFFFF" stroke="#C9CFC9" />
              <path d="M 28,20 L 28,6 L 42,6" fill="none" stroke="#2D6A3F" strokeWidth="3" />
              <path d="M 152,6 L 152,6 L 152,20 M 138,6 L 152,6" fill="none" stroke="#2D6A3F" strokeWidth="3" />
              <path d="M 28,100 L 28,114 L 42,114" fill="none" stroke="#2D6A3F" strokeWidth="3" />
              <path d="M 152,100 L 152,114 L 138,114" fill="none" stroke="#2D6A3F" strokeWidth="3" />
              <line x1="48" y1="58" x2="132" y2="58" stroke="#4CAF72" strokeWidth="2.5" strokeDasharray="6 4" />
              <rect x="52" y="22" width="52" height="7" rx="3.5" fill="#D8D3C6" />
              <rect x="52" y="36" width="72" height="7" rx="3.5" fill="#D8D3C6" />
              <rect x="52" y="70" width="62" height="7" rx="3.5" fill="#BFE0CB" />
              <rect x="52" y="84" width="44" height="7" rx="3.5" fill="#BFE0CB" />
              <circle cx="130" cy="73.5" r="3" fill="#2D6A3F" />
              <circle cx="112" cy="87.5" r="3" fill="#2D6A3F" />
            </svg>
          </div>
          <div style={cardFoot('#5A7060')}>500+ signals read blind from content, financials, selfies, to layout</div>
        </div>
        <div style={arrow}>→</div>
        {/* 03 Regression */}
        <div style={lightCard}>
          <div style={cardLabel('#2D6A3F')}>03 · Regression</div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexShrink: 0, height: '180px', justifyContent: 'center', marginTop: '14px' }}>
            <svg width="238" height="168" viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
              <line x1="24" y1="104" x2="164" y2="104" stroke="#C9CFC9" strokeWidth="1.5" />
              <line x1="24" y1="104" x2="24" y2="10" stroke="#C9CFC9" strokeWidth="1.5" />
              <circle cx="38" cy="34" r="4" fill="#B0492F" style={{ opacity: 0.85 }} />
              <circle cx="52" cy="46" r="4" fill="#B0492F" style={{ opacity: 0.85 }} />
              <circle cx="66" cy="38" r="4" fill="#B0492F" style={{ opacity: 0.85 }} />
              <circle cx="78" cy="58" r="4" fill="#B0492F" style={{ opacity: 0.7 }} />
              <circle cx="92" cy="52" r="4" fill="#2D6A3F" style={{ opacity: 0.7 }} />
              <circle cx="104" cy="70" r="4" fill="#2D6A3F" style={{ opacity: 0.85 }} />
              <circle cx="118" cy="64" r="4" fill="#2D6A3F" style={{ opacity: 0.85 }} />
              <circle cx="132" cy="82" r="4" fill="#2D6A3F" style={{ opacity: 0.85 }} />
              <circle cx="146" cy="88" r="4" fill="#2D6A3F" style={{ opacity: 0.85 }} />
              <circle cx="158" cy="94" r="4" fill="#2D6A3F" style={{ opacity: 0.85 }} />
              <line x1="30" y1="28" x2="164" y2="98" stroke="#16291C" strokeWidth="2.5" />
            </svg>
          </div>
          <div style={cardFoot('#5A7060')}>Signals correlated & regressed against outcomes</div>
        </div>
        <div style={arrow}>→</div>
        {/* 04 Real outcomes */}
        <div style={{ ...lightCard, backgroundColor: '#16291C' }}>
          <div style={cardLabel('#4CAF72')}>04 · Real outcomes · DPD30</div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '22px' }}>
            <div style={{ borderRadius: '8px', boxSizing: 'border-box', display: 'flex', flexShrink: 0, height: '46px', overflow: 'clip' }}>
              <div style={{ alignItems: 'center', backgroundColor: '#4CAF72', boxSizing: 'border-box', display: 'flex', paddingLeft: '12px', width: '66%' }}>
                <div style={{ color: '#16291C', fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '12px', fontWeight: 700, lineHeight: '16px' }}>REPAID 66%</div>
              </div>
              <div style={{ alignItems: 'center', backgroundColor: '#B0492F', boxSizing: 'border-box', display: 'flex', paddingLeft: '10px', width: '34%' }}>
                <div style={{ color: '#FFFFFF', fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '12px', fontWeight: 700, lineHeight: '16px' }}>34%</div>
              </div>
            </div>
            <div style={{ color: '#A9C4B1', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '13px', lineHeight: '145%' }}>
              Every score judged against the ground truth: did the borrower repay within 30 days past due?
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '9px', marginTop: '14px' }}>
              <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                <div style={dpdRow('#4CAF72')}>✓ REPAID ON TIME</div>
                <div style={{ ...dpdRow('#A9C4B1'), letterSpacing: 0 }}>within 30 DPD</div>
              </div>
              <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
                <div style={dpdRow('#D98B77')}>✗ DEFAULTED</div>
                <div style={{ ...dpdRow('#A9C4B1'), letterSpacing: 0 }}>over 30 DPD</div>
              </div>
            </div>
          </div>
          <div style={cardFoot('#A9C4B1')}>No proxies, no labels we invented — the lender&apos;s real repayment record</div>
        </div>
      </div>
      <div style={{ alignItems: 'baseline', borderTop: '1px solid #D8D3C6', boxSizing: 'border-box', display: 'flex', gap: '40px', justifyContent: 'space-between', marginInline: '64px', marginTop: '36px', paddingTop: '24px' }}>
        <div style={{ color: '#4A5247', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '20px', fontWeight: 500, lineHeight: '140%', maxWidth: '980px' }}>
          Kita uses vision language models to pull credit signal from any input document, regardless of format.
        </div>
      </div>
    </div>
  );
}
