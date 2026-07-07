const mono = '"Geist Mono", system-ui, sans-serif';
const sans = '"Geist", system-ui, sans-serif';

function OCard({ label, title, num, unit, caption, priorLabel, priorVal }) {
  return (
    <div style={{ backgroundColor: '#EDEAE0', borderColor: '#00000014', borderRadius: '16px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: 1, padding: '32px' }}>
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '7px', marginBottom: '18px' }}>
        <div style={{ backgroundColor: '#4CAF72', borderRadius: '50%', flexShrink: 0, height: '7px', width: '7px' }} />
        <div style={{ color: '#4CAF72', fontFamily: mono, fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', lineHeight: '14px' }}>{label}</div>
      </div>
      <div style={{ color: '#0A1F0F', fontFamily: sans, fontSize: '30px', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: '110%', marginBottom: '14px', whiteSpace: 'pre-line' }}>{title}</div>
      <div style={{ alignItems: 'baseline', boxSizing: 'border-box', display: 'flex', gap: '4px', marginBottom: '12px' }}>
        <div style={{ color: '#2D6A3F', fontFamily: sans, fontSize: '76px', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: '95%' }}>{num}</div>
        <div style={{ color: '#4CAF72', fontFamily: sans, fontSize: '32px', fontWeight: 800, lineHeight: '100%' }}>{unit}</div>
      </div>
      <div style={{ color: '#5A7060', fontFamily: sans, fontSize: '15px', lineHeight: '150%' }}>{caption}</div>
      <div style={{ flexBasis: '0%', flexGrow: 1, minHeight: '16px' }} />
      <div style={{ alignItems: 'center', borderTopColor: '#0000001A', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', paddingTop: '16px' }}>
        <div style={{ color: '#8A9E8F', fontFamily: mono, fontSize: '11px', letterSpacing: '0.06em', lineHeight: '14px' }}>{priorLabel}</div>
        <div style={{ color: '#8A9E8F', fontFamily: mono, fontSize: '11px', lineHeight: '14px' }}>{priorVal}</div>
      </div>
    </div>
  );
}

export default function S11Outcomes() {
  return (
    <div style={{ backgroundColor: '#F5F2EB', borderBottomColor: '#2D6A3F', borderBottomStyle: 'solid', borderBottomWidth: '7px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '900px', overflow: 'clip', position: 'relative', WebkitFontSmoothing: 'antialiased', width: '1440px' }}>
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', paddingInline: '64px', paddingTop: '48px' }}>
        <div style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01KRW9RKQ8CMS38RV87YYFQ9EV/01KRWC6EJA4G1AXHVAH2Z43R43.png)', backgroundPosition: '50%', backgroundSize: 'cover', flexShrink: 0, height: '99px', width: '148px' }} />
        <div style={{ color: '#8A9E8F', fontFamily: mono, fontSize: '14px', fontWeight: 600, letterSpacing: '0.14em', lineHeight: '18px', opacity: '0.7', textTransform: 'uppercase' }}>Customer Outcomes</div>
      </div>
      <div style={{ alignItems: 'flex-end', boxSizing: 'border-box', display: 'flex', gap: '48px', justifyContent: 'space-between', paddingBottom: '24px', paddingInline: '64px', paddingTop: '40px' }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
            <div style={{ backgroundColor: '#418D62', borderRadius: '50%', flexShrink: 0, height: '6px', width: '6px' }} />
            <div style={{ color: '#418D62', fontFamily: mono, fontSize: '13px', fontWeight: 500, letterSpacing: '0.18em', lineHeight: '16px', textTransform: 'uppercase' }}>Customer results</div>
          </div>
          <div style={{ color: '#1F2421', fontFamily: sans, fontSize: '58px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '108%', maxWidth: '760px' }}>Better outcomes, faster operations.</div>
        </div>
        <div style={{ color: '#6B6F6A', flexShrink: 0, fontFamily: sans, fontSize: '18px', lineHeight: '22px', maxWidth: '380px', textAlign: 'right', width: '372px' }}>Composite results across pilot deployments. Measured in the first 90 days against the customer&apos;s prior baseline.</div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', gap: '24px', paddingInline: '56px', width: '1440px' }}>
        <OCard label="SPEED" title={"Faster\nTurnaround"} num="90" unit="%" caption="time saved." priorLabel="PRIOR" priorVal="5hrs → minutes" />
        <OCard label="COVERAGE" title={"Approve\nMore"} num="31" unit="%" caption="more approvals." priorLabel="PRIOR" priorVal="declined on unverified income" />
        <OCard label="COST" title={"Lower\nCosts"} num="−68" unit="%" caption="cost per processed application." priorLabel="PAYBACK" priorVal={'< 90 DAYS'} />
      </div>
    </div>
  );
}
