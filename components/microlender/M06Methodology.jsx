const LOGO = "https://app.paper.design/file-assets/01KRW9RKQ8CMS38RV87YYFQ9EV/01KRWC6EJA4G1AXHVAH2Z43R43.png";

const TX_ROWS = [
  [22, 45, 18], [22, 38, 20], [22, 50, 15], [22, 42, 18], [22, 35, 22], [22, 48, 16],
  [22, 40, 20], [22, 48, 15], [22, 36, 22], [22, 44, 18], [22, 52, 14], [22, 38, 20],
  [22, 46, 16], [22, 42, 19], [22, 50, 17], [22, 34, 22],
];

const specLabel = { color: '#8A9E8F', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '14px', letterSpacing: '0.07em', lineHeight: '18px' };
const specBody = { color: '#2A3D2E', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '19px', lineHeight: '150%' };
const chipLabel = { color: '#999999', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '7px', letterSpacing: '0.04em', lineHeight: '10px' };
const chipValue = { color: '#333333', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '9px', fontWeight: 500, lineHeight: '12px' };
const chipConf = { color: '#999999', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '8px', lineHeight: '10px' };
const kv = { color: '#666666', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '9px', lineHeight: '12px' };
const kvVal = { color: '#222222', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '9px', fontWeight: 500, lineHeight: '12px' };
const tag = (bg) => ({ position: 'absolute', top: '-8px', left: '8px', backgroundColor: bg, borderRadius: '3px', paddingBlock: '1px', paddingInline: '6px' });
const tagText = { color: '#FFFFFF', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '7px', fontWeight: 600, letterSpacing: '0.04em', lineHeight: '10px' };

function Spec({ label, body }) {
  return (
    <div style={{ alignItems: 'flex-start', borderBottom: '1px solid #00000012', boxSizing: 'border-box', display: 'flex', gap: '24px', paddingBlock: '14px' }}>
      <div style={{ ...specLabel, flexShrink: 0, paddingTop: '2px', textTransform: 'uppercase', width: '120px' }}>{label}</div>
      <div style={specBody}>{body}</div>
    </div>
  );
}

function Chip({ color, label, value, conf }) {
  return (
    <div style={{ backgroundColor: '#FFFFFF', borderRadius: '8px', boxShadow: '#00000014 0px 2px 10px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '3px', paddingBlock: '8px', paddingInline: '10px' }}>
      <div style={{ alignItems: 'center', display: 'flex', gap: '4px' }}>
        <div style={{ backgroundColor: color, borderRadius: '1px', flexShrink: 0, height: '4px', width: '4px' }} />
        <div style={{ ...chipLabel, textTransform: 'uppercase' }}>{label}</div>
      </div>
      <div style={chipValue}>{value}</div>
      <div style={chipConf}>conf: {conf}</div>
    </div>
  );
}

export default function M06Methodology() {
  return (
    <div style={{ backgroundColor: '#F5F2EB', borderBottomColor: '#2D6A3F', borderBottomStyle: 'solid', borderBottomWidth: '7px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', width: '1440px', height: '900px', overflow: 'clip', position: 'relative', WebkitFontSmoothing: 'antialiased' }}>
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', paddingInline: '64px', paddingTop: '48px' }}>
        <div style={{ backgroundImage: `url(${LOGO})`, backgroundPosition: '50%', backgroundSize: 'cover', flexShrink: 0, height: '99px', width: '148px' }} />
      </div>
      <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', gap: '84px', paddingInline: '64px', paddingTop: '28px' }}>
        {/* Left column */}
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: 0, width: '656px' }}>
          <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
            <div style={{ backgroundColor: '#4CAF72', borderRadius: '50%', flexShrink: 0, height: '7px', width: '7px' }} />
            <div style={{ color: '#4CAF72', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '15px', fontWeight: 600, letterSpacing: '0.1em', lineHeight: '16px', textTransform: 'uppercase' }}>Methodology</div>
          </div>
          <div style={{ color: '#16291C', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '58px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '104%', marginTop: '14px' }}>
            From messy documents to measurably predictive risk signals
          </div>
          <div style={{ color: '#5A7060', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '22px', lineHeight: '150%', marginTop: '28px', marginBottom: '28px' }}>
            Kita extracts 500+ raw signals from any uploaded file, classifies it, and uncovers 25+ meaningfully predictive risk signals fit to your docs. Near-linear and monotonic, our scores drop into your risk model as clean inputs in under 30 seconds.
          </div>
          <div style={{ backgroundColor: '#0000001A', flexShrink: 0, height: '1px', width: '100%' }} />
          <Spec label="Formats" body="PDF · Scan · Image of document · Screenshot" />
          <Spec label="Condition" body="Skew · glare · folds · stamps · handwriting · laminated" />
          <Spec label="Resolution" body="150 dpi to 4K. Auto-upscale on degraded inputs." />
        </div>
        {/* Right: VLM extraction mock */}
        <div className="hover-group" style={{ boxSizing: 'border-box', flexShrink: 0, height: '555px', position: 'relative', width: '545px' }}>
          {/* Document */}
          <div style={{ position: 'absolute', top: '16px', left: '18px', backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '#0000001A 0px 6px 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '10px', height: '512px', justifyContent: 'space-between', overflow: 'clip', paddingBlock: '24px', paddingInline: '22px', width: '384px' }}>
            <div style={{ alignItems: 'flex-start', display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ backgroundColor: '#222222', borderRadius: '2px', height: '10px', width: '80px' }} />
                <div style={{ backgroundColor: '#CCCCCC', borderRadius: '2px', height: '6px', width: '50px' }} />
              </div>
              <div style={{ color: '#BBBBBB', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '8px', lineHeight: '10px' }}>PAGE 1 / 4</div>
            </div>
            <div style={{ backgroundColor: '#3B82F60A', border: '2px solid #162B1C', borderRadius: '6px', padding: '10px', position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingTop: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><div style={kv}>Account Name</div><div style={kvVal}>Maria Santos</div></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><div style={kv}>Account No.</div><div style={kvVal}>3344 0019 9182</div></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><div style={kv}>Currency</div><div style={kvVal}>USD</div></div>
              </div>
              <div style={tag('#162A1C')}><div style={tagText}>ACCOUNT INFO</div></div>
            </div>
            <div style={{ backgroundColor: '#10B9810A', border: '2px solid #10B98199', borderRadius: '6px', paddingBlock: '8px', paddingInline: '10px', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '2px' }}><div style={kv}>Statement Period</div><div style={kvVal}>Jan 2024 – Mar 2024</div></div>
              <div style={tag('#10B981')}><div style={tagText}>PERIOD</div></div>
            </div>
            <div style={{ backgroundColor: '#F59E0B0A', border: '2px solid #318757', borderRadius: '6px', flex: 1, paddingBottom: '14px', paddingInline: '10px', position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: '8px' }}>
                {TX_ROWS.map((r, i) => (
                  <div key={i} style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ backgroundColor: '#E5E5E5', borderRadius: '2px', height: '4px', width: `${r[0]}%` }} />
                    <div style={{ backgroundColor: '#E5E5E5', borderRadius: '2px', height: '4px', width: `${r[1]}%` }} />
                    <div style={{ backgroundColor: '#E5E5E5', borderRadius: '2px', height: '4px', width: `${r[2]}%` }} />
                  </div>
                ))}
              </div>
              <div style={tag('#3A8A5C')}><div style={{ ...tagText, color: '#FAF8F8' }}>TRANSACTIONS</div></div>
            </div>
            <div style={{ backgroundColor: '#8B5CF60A', border: '2px solid #1A5635', borderRadius: '6px', paddingBlock: '8px', paddingInline: '10px', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '2px' }}><div style={kv}>Closing Balance</div><div style={{ ...kvVal, fontSize: '10px', fontWeight: 600 }}>$14,380.50</div></div>
              <div style={tag('#1A5635')}><div style={tagText}>ENDING BALANCE</div></div>
            </div>
          </div>
          {/* VLM badge */}
          <div style={{ position: 'absolute', top: '8px', left: '14px', alignItems: 'center', backgroundColor: '#1A1A1A', borderRadius: '20px', boxShadow: '#00000026 0px 2px 8px', display: 'flex', gap: '6px', paddingBlock: '5px', paddingInline: '12px' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
              <circle cx="7" cy="7" r="6" fill="none" stroke="#418D62" strokeWidth="1.5" />
              <circle cx="7" cy="4" r="1.5" fill="#418D62" />
              <circle cx="4" cy="9" r="1.5" fill="#418D62" />
              <circle cx="10" cy="9" r="1.5" fill="#418D62" />
              <line x1="7" y1="5.5" x2="4.5" y2="8" stroke="#418D62" />
              <line x1="7" y1="5.5" x2="9.5" y2="8" stroke="#418D62" />
            </svg>
            <div style={{ color: '#FFFFFF', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '9px', fontWeight: 500, letterSpacing: '0.03em', lineHeight: '12px' }}>VLM</div>
          </div>
          {/* Extraction chips */}
          <div style={{ position: 'absolute', top: '70px', right: 0, display: 'flex', flexDirection: 'column', gap: '26px', width: '150px' }}>
            <Chip color="#162B1C" label="Account" value="Maria Santos" conf="0.99" />
            <Chip color="#10B981" label="Period" value="Jan–Mar 2024" conf="0.97" />
            <Chip color="#3A8A5C" label="Transactions" value="47 rows detected" conf="0.96" />
            <Chip color="#1A5635" label="Balance" value="$14,380.50" conf="0.98" />
          </div>
          {/* Footer strip */}
          <div style={{ position: 'absolute', bottom: '6px', left: '18px', alignItems: 'center', backgroundColor: '#418D6214', borderRadius: '6px', display: 'flex', gap: '8px', paddingBlock: '6px', paddingInline: '12px', width: '384px' }}>
            <div style={{ backgroundColor: '#418D62', borderRadius: '50%', flexShrink: 0, height: '6px', width: '6px' }} />
            <div style={{ color: '#418D62', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '8px', letterSpacing: '0.03em', lineHeight: '10px' }}>Per-page vision extraction · 75 concurrent</div>
          </div>
        </div>
      </div>
      {/* Stat chips */}
      <div style={{ position: 'absolute', top: '748px', right: '91px', alignItems: 'flex-end', display: 'flex', gap: '19px', justifyContent: 'flex-end' }}>
        <div style={{ alignItems: 'center', backgroundColor: '#EDEAE0', borderRadius: '10px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '3px', height: '78px', justifyContent: 'center', paddingBlock: '12px', paddingInline: '20px', width: '150px' }}>
        <div style={{ alignSelf: 'stretch', color: '#2D6A3F', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '34px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '100%' }}>50+</div>
          <div style={{ alignSelf: 'stretch', color: '#5A7060', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '14px', lineHeight: '130%' }}>document types</div>
        </div>
        <div style={{ alignItems: 'center', backgroundColor: '#EDEAE0', borderRadius: '10px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '3px', height: '78px', justifyContent: 'center', paddingBlock: '12px', paddingInline: '20px' }}>
          <div style={{ alignSelf: 'stretch', color: '#2D6A3F', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '34px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '100%' }}>98%</div>
          <div style={{ alignSelf: 'stretch', color: '#5A7060', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '14px', lineHeight: '130%' }}>extraction accuracy</div>
        </div>
      </div>
    </div>
  );
}
