const mono = '"Geist Mono", system-ui, sans-serif';
const sans = '"Geist", system-ui, sans-serif';

function SpecRow({ label, value }) {
  return (
    <div style={{ alignItems: 'flex-start', borderBottomColor: '#00000012', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '24px', paddingBlock: '14px' }}>
      <div style={{ flexShrink: 0, paddingTop: '2px', width: '120px' }}>
        <span style={{ color: '#8A9E8F', fontFamily: mono, fontSize: '11px', letterSpacing: '0.07em', lineHeight: '14px' }}>{label}</span>
      </div>
      <div style={{ color: '#2A3D2E', fontFamily: sans, fontSize: '15px', lineHeight: '150%' }}>{value}</div>
    </div>
  );
}
function Tab({ bg, color = '#FFFFFF', children }) {
  return (
    <div style={{ backgroundColor: bg, borderRadius: '3px', boxSizing: 'border-box', left: 8, paddingBlock: '1px', paddingInline: '6px', position: 'absolute', top: -8 }}>
      <div style={{ color, fontFamily: mono, fontSize: '7px', fontWeight: 600, letterSpacing: '0.04em', lineHeight: '10px' }}>{children}</div>
    </div>
  );
}
function KV({ k, v, vw }) {
  return (
    <div style={{ boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ color: '#666666', fontFamily: mono, fontSize: '9px', lineHeight: '12px' }}>{k}</div>
      <div style={{ color: '#222222', fontFamily: mono, fontSize: vw || '9px', fontWeight: 500, lineHeight: '12px' }}>{v}</div>
    </div>
  );
}
function FloatCard({ dot, label, value, conf }) {
  return (
    <div style={{ backgroundColor: '#FFFFFF', borderRadius: '8px', boxShadow: '#00000014 0px 2px 10px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '3px', paddingBlock: '8px', paddingInline: '10px' }}>
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '4px' }}>
        <div style={{ backgroundColor: dot, borderRadius: '1px', flexShrink: 0, height: '4px', width: '4px' }} />
        <div style={{ color: '#999999', fontFamily: mono, fontSize: '7px', letterSpacing: '0.04em', lineHeight: '10px' }}>{label}</div>
      </div>
      <div style={{ color: '#333333', fontFamily: sans, fontSize: '9px', fontWeight: 500, lineHeight: '12px' }}>{value}</div>
      <div style={{ color: '#999999', fontFamily: mono, fontSize: '8px', lineHeight: '10px' }}>{conf}</div>
    </div>
  );
}
const TX = [[45,18],[38,20],[50,15],[42,18],[35,22],[48,16],[40,20],[48,15],[36,22],[44,18],[52,14],[38,20],[46,16],[42,19],[50,17],[34,22]];
const bar = (w) => ({ backgroundColor: '#E5E5E5', borderRadius: '2px', height: '4px', width: `${w}%` });

export default function S08ReadAnything() {
  return (
    <div style={{ backgroundColor: '#F5F2EB', borderBottomColor: '#2D6A3F', borderBottomStyle: 'solid', borderBottomWidth: '7px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '900px', overflow: 'clip', WebkitFontSmoothing: 'antialiased', width: '1440px' }}>
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', paddingInline: '64px', paddingTop: '48px', position: 'relative' }}>
        <div style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01KRW9RKQ8CMS38RV87YYFQ9EV/01KRWC6EJA4G1AXHVAH2Z43R43.png)', backgroundPosition: '50%', backgroundSize: 'cover', flexShrink: 0, height: '99px', width: '148px' }} />
        <div style={{ color: '#8A9E8F', fontFamily: mono, fontSize: '14px', fontWeight: 600, letterSpacing: '0.14em', lineHeight: '18px', opacity: '0.7', position: 'absolute', right: 52, textTransform: 'uppercase', top: 44, width: '213px' }}>extract and verify</div>
      </div>
      <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', gap: '98px', paddingInline: '64px', paddingTop: 31 }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: 0, gap: '22px', width: '656px' }}>
          <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px', height: '16px' }}>
            <div style={{ backgroundColor: '#418D62', borderRadius: '50%', flexShrink: 0, height: '6px', width: '6px' }} />
            <div style={{ color: '#4CAF72', fontFamily: mono, fontSize: '13px', fontWeight: 600, letterSpacing: '0.18em', lineHeight: '16px', textTransform: 'uppercase' }}>Kita Capture</div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '10px', width: '656px' }}>
            <div style={{ color: '#2D6A3F', fontFamily: mono, fontSize: '50px', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: '100%' }}>02</div>
            <div style={{ color: '#1F2421', fontFamily: sans, fontSize: '56px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '106%' }}>Extract and verify credit data across documents.</div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', marginTop: '28px', width: '656px' }}>
            <div style={{ color: '#5A7060', fontFamily: sans, fontSize: '18px', lineHeight: '165%', marginBottom: '28px' }}>Capture reads any set of documents, then verifies income across the full set, cross-checks the numbers between documents, and flags discrepancies – so you can assess creditworthiness even from non-standard income and messy business files.</div>
            <div style={{ backgroundColor: '#0000001A', flexShrink: 0, height: '1px', width: '100%' }} />
            <SpecRow label="FORMATS" value="PDF · Scan · Image of document · Screenshot" />
            <SpecRow label="RESOLUTION" value="150 dpi to 4K. Auto-upscale on degraded inputs." />
            <SpecRow label="CONDITION" value="Skew · glare · folds · stamps · handwriting · laminated" />
            <SpecRow label="FRAUD" value="Flags tampering, forgery & edited fields" />
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', flexShrink: 0, height: '560px', position: 'relative', width: '519px' }}>
          <div style={{ alignItems: 'end', boxSizing: 'border-box', display: 'flex', gap: '19px', height: '93px', justifyContent: 'end', left: 0, position: 'absolute', top: 565, width: '520px' }}>
            <div style={{ alignItems: 'center', backgroundColor: '#EDEAE0', borderRadius: '10px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: 0, gap: '3px', height: '78px', justifyContent: 'center', paddingBlock: '12px', paddingInline: '20px', width: '132px' }}>
              <div style={{ alignSelf: 'stretch', color: '#2D6A3F', fontFamily: sans, fontSize: '28px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '100%' }}>50+</div>
              <div style={{ alignSelf: 'stretch', color: '#5A7060', fontFamily: sans, fontSize: '12px', lineHeight: '130%' }}>document types</div>
            </div>
            <div style={{ alignItems: 'center', backgroundColor: '#EDEAE0', borderRadius: '10px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: 0, gap: '3px', height: '78px', justifyContent: 'center', paddingBlock: '12px', paddingInline: '20px' }}>
              <div style={{ alignSelf: 'stretch', color: '#2D6A3F', fontFamily: sans, fontSize: '28px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '100%' }}>98%</div>
              <div style={{ alignSelf: 'stretch', color: '#5A7060', fontFamily: sans, fontSize: '12px', lineHeight: '130%' }}>extraction accuracy</div>
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', height: '555px', position: 'relative', width: '520px' }}>
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '#0000001A 0px 6px 30px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '10px', height: '512px', justifyContent: 'space-between', left: '18px', overflow: 'clip', paddingBlock: '24px', paddingInline: '22px', position: 'absolute', top: '16px', width: '384px' }}>
              <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ backgroundColor: '#222222', borderRadius: '2px', flexShrink: 0, height: '10px', width: '80px' }} />
                  <div style={{ backgroundColor: '#CCCCCC', borderRadius: '2px', flexShrink: 0, height: '6px', width: '50px' }} />
                </div>
                <div style={{ color: '#BBBBBB', fontFamily: mono, fontSize: '8px', lineHeight: '10px' }}>PAGE 1 / 4</div>
              </div>
              <div style={{ backgroundColor: '#3B82F60A', borderColor: '#162B1C', borderRadius: '6px', borderStyle: 'solid', borderWidth: '2px', boxSizing: 'border-box', padding: '10px', position: 'relative' }}>
                <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '5px', paddingTop: '4px' }}>
                  <KV k="Account Name" v="Rosa Mendoza" />
                  <KV k="Account No." v="3344 0019 9182" />
                  <KV k="Currency" v="USD" />
                </div>
                <Tab bg="#162A1C">ACCOUNT INFO</Tab>
              </div>
              <div style={{ backgroundColor: '#10B9810A', borderColor: '#10B98199', borderRadius: '6px', borderStyle: 'solid', borderWidth: '2px', boxSizing: 'border-box', paddingBlock: '8px', paddingInline: '10px', position: 'relative' }}>
                <div style={{ paddingTop: '2px' }}><KV k="Statement Period" v="Jan 2024 – Mar 2024" /></div>
                <Tab bg="#10B981">PERIOD</Tab>
              </div>
              <div style={{ backgroundColor: '#F59E0B0A', borderColor: '#318757', borderRadius: '6px', borderStyle: 'solid', borderWidth: '2px', boxSizing: 'border-box', flexBasis: '0%', flexGrow: 1, padding: '10px', paddingBottom: '14px', position: 'relative' }}>
                <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: '4px' }}>
                  {TX.map(([b, c], i) => (
                    <div key={i} style={{ boxSizing: 'border-box', display: 'flex', gap: '6px' }}>
                      <div style={bar(22)} /><div style={bar(b)} /><div style={bar(c)} />
                    </div>
                  ))}
                </div>
                <Tab bg="#3A8A5C" color="#FAF8F8">TRANSACTIONS</Tab>
              </div>
              <div style={{ backgroundColor: '#8B5CF60A', borderColor: '#1A5635', borderRadius: '6px', borderStyle: 'solid', borderWidth: '2px', boxSizing: 'border-box', paddingBlock: '8px', paddingInline: '10px', position: 'relative' }}>
                <div style={{ paddingTop: '2px' }}><KV k="Closing Balance" v="USD14,380.50" vw="10px" /></div>
                <Tab bg="#1A5635">ENDING BALANCE</Tab>
              </div>
            </div>
            <div style={{ alignItems: 'center', backgroundColor: '#1A1A1A', borderRadius: '20px', boxShadow: '#00000026 0px 2px 8px', boxSizing: 'border-box', display: 'flex', gap: '6px', left: '14px', paddingBlock: '5px', paddingInline: '12px', position: 'absolute', top: '8px', zIndex: 20 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                <circle cx="7" cy="7" r="6" fill="none" stroke="#418D62" strokeWidth="1.5" />
                <circle cx="7" cy="4" r="1.5" fill="#418D62" />
                <circle cx="4" cy="9" r="1.5" fill="#418D62" />
                <circle cx="10" cy="9" r="1.5" fill="#418D62" />
                <line x1="7" y1="5.5" x2="4.5" y2="8" stroke="#418D62" />
                <line x1="7" y1="5.5" x2="9.5" y2="8" stroke="#418D62" />
              </svg>
              <div style={{ color: '#FFFFFF', fontFamily: mono, fontSize: '9px', fontWeight: 500, letterSpacing: '0.03em', lineHeight: '12px' }}>VLM</div>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '26px', position: 'absolute', right: '0px', top: '70px', width: '150px', zIndex: 20 }}>
              <FloatCard dot="#162B1C" label="ACCOUNT" value="Rosa Mendoza" conf="conf: 0.99" />
              <FloatCard dot="#10B981" label="PERIOD" value="Jan–Mar 2024" conf="conf: 0.97" />
              <FloatCard dot="#3A8A5C" label="TRANSACTIONS" value="47 rows detected" conf="conf: 0.96" />
              <FloatCard dot="#1A5635" label="BALANCE" value="$142,380.50" conf="conf: 0.98" />
            </div>
            <div style={{ alignItems: 'center', backgroundColor: '#418D6214', borderRadius: '6px', bottom: '6px', boxSizing: 'border-box', display: 'flex', gap: '8px', left: '18px', paddingBlock: '6px', paddingInline: '12px', position: 'absolute', width: '384px', zIndex: 20 }}>
              <div style={{ backgroundColor: '#418D62', borderRadius: '50%', flexShrink: 0, height: '6px', width: '6px' }} />
              <div style={{ color: '#418D62', fontFamily: mono, fontSize: '8px', letterSpacing: '0.03em', lineHeight: '10px' }}>Per-page vision extraction · 75 concurrent</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
