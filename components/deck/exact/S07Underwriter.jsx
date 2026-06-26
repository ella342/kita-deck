function SpecRow({ label, value }) {
  return (
    <div style={{ alignItems: 'flex-start', borderBottomColor: '#00000012', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '24px', paddingBlock: '14px' }}>
      <div style={{ flexShrink: 0, paddingTop: '2px', width: '120px' }}>
        <span style={{ color: '#8A9E8F', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '11px', letterSpacing: '0.07em', lineHeight: '14px' }}>{label}</span>
      </div>
      <div style={{ color: '#2A3D2E', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '15px', lineHeight: '150%' }}>{value}</div>
    </div>
  );
}
function EvRow({ claim, src }) {
  return (
    <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '14px', justifyContent: 'space-between' }}>
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '10px' }}>
        <div style={{ backgroundColor: '#E4F0E8', borderRadius: '50%', flexShrink: 0, height: '16px', width: '16px', color: '#2D6A3F', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '10px', lineHeight: '16px', textAlign: 'center' }}>✓</div>
        <div style={{ color: '#27332B', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '15px', fontWeight: 500, lineHeight: '140%' }}>{claim}</div>
      </div>
      <div style={{ color: '#8A9E8F', flexShrink: 0, fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '11px', lineHeight: '14px' }}>{src}</div>
    </div>
  );
}

export default function S07Underwriter() {
  return (
    <div style={{ backgroundColor: '#F5F2EB', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '900px', overflow: 'clip', WebkitFontSmoothing: 'antialiased', width: '1440px' }}>
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', paddingInline: '64px', paddingTop: '48px', position: 'relative' }}>
        <div style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01KRW9RKQ8CMS38RV87YYFQ9EV/01KRWC6EJA4G1AXHVAH2Z43R43.png)', backgroundPosition: '50%', backgroundSize: 'cover', flexShrink: 0, height: '99px', width: '148px' }} />
        <div style={{ color: '#8A9E8F', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '14px', fontWeight: 600, letterSpacing: '0.14em', lineHeight: '18px', opacity: '0.7', position: 'absolute', right: '64px', textTransform: 'uppercase', top: '88px' }}>Drafts the memo</div>
      </div>
      <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', gap: '98px', paddingInline: '64px', paddingTop: 31 }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: 0, gap: '22px', width: '656px' }}>
          <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px', height: '16px' }}>
            <div style={{ backgroundColor: '#418D62', borderRadius: '50%', flexShrink: 0, height: '6px', width: '6px' }} />
            <div style={{ color: '#4CAF72', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.18em', lineHeight: '16px', textTransform: 'uppercase' }}>AI Underwriter</div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '10px', width: '656px' }}>
            <div style={{ color: '#2D6A3F', fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '50px', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: '100%' }}>03</div>
            <div style={{ color: '#1F2421', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '56px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '106%' }}>Credit memo drafts instantly.</div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', marginTop: '28px', width: '656px' }}>
            <div style={{ color: '#5A7060', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '18px', lineHeight: '165%', marginBottom: '28px' }}>Kita runs the same analysis your underwriters do. By closely interviewing your team, we automate financial spreading and competitive analysis, then draft a comprehensive credit memo, with a citation to every document and source. Every recommendation is fully explainable and auditable end to end, and the final decision always stays in your underwriters&apos; hands.</div>
            <div style={{ backgroundColor: '#0000001A', flexShrink: 0, height: '1px', width: '100%' }} />
            <SpecRow label="CITATIONS" value="Every data point cited to its source document" />
            <SpecRow label="EXPLAINABLE" value="Full reasoning shown and auditable end to end" />
            <SpecRow label="HUMAN-LED" value="The final decision always stays in human hands" />
            <SpecRow label="POLICY" value="Calibrated on your risk policy, not a generic prompt" />
            <SpecRow label="FRAUD" value="Forgery, tampering & impersonation detection" />
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', flexShrink: 0, height: '560px', position: 'relative', width: '519px' }}>
          <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '560px', justifyContent: 'center', width: '100%' }}>
            <div style={{ backgroundColor: '#FCFBF7', borderColor: '#00000014', borderRadius: '20px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '18px', paddingBottom: 26, paddingInline: '28px', paddingTop: 30, width: '576px' }}>
              <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', gap: '16px', justifyContent: 'space-between' }}>
                <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ color: '#8A9E8F', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', lineHeight: '14px', textTransform: 'uppercase' }}>Draft credit memo</div>
                  <div style={{ color: '#0A1F0F', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '20px', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: '120%' }}>Rosa Mendoza · $85K SBA 7(a)</div>
                </div>
                <div style={{ alignItems: 'center', backgroundColor: '#E4F0E8', borderColor: '#2D6A3F33', borderRadius: '8px', borderStyle: 'solid', borderWidth: '1px', display: 'flex', flexShrink: 0, gap: '7px', paddingBlock: '7px', paddingInline: '12px' }}>
                  <div style={{ backgroundColor: '#2D6A3F', borderRadius: '50%', flexShrink: 0, height: '6px', width: '6px' }} />
                  <div style={{ color: '#2D6A3F', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', lineHeight: '14px', textTransform: 'uppercase' }}>Recommend · Approve</div>
                </div>
              </div>
              <div style={{ backgroundColor: '#00000012', flexShrink: 0, height: '1px' }} />
              <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ color: '#8A9E8F', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', lineHeight: '14px', textTransform: 'uppercase' }}>Supporting evidence · cited</div>
                <EvRow claim="DSCR 1.42×, above policy floor" src="bank_stmt.pdf" />
                <EvRow claim="Revenue +18% year over year" src="pl_2024.pdf" />
                <EvRow claim="Cash buffer 4.1 months payroll" src="bank_stmt.pdf" />
                <EvRow claim="Mission fit: minority-owned, LMI census tract" src="application.pdf" />
              </div>
              <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '12px', paddingTop: '4px' }}>
                <div style={{ alignItems: 'center', borderColor: '#00000022', borderRadius: '10px', borderStyle: 'solid', borderWidth: '1px', display: 'flex', flexBasis: '0%', flexGrow: 1, justifyContent: 'center', paddingBlock: '13px' }}>
                  <div style={{ color: '#5A7060', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '14px', fontWeight: 600, lineHeight: '18px' }}>Decline</div>
                </div>
                <div style={{ alignItems: 'center', backgroundColor: '#2D6A3F', borderRadius: '10px', display: 'flex', flexBasis: '0%', flexGrow: 1, justifyContent: 'center', paddingBlock: '13px' }}>
                  <div style={{ color: '#FFFFFF', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '14px', fontWeight: 600, lineHeight: '18px', whiteSpace: 'pre' }}>Approve &amp; fund{'  '}→</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
