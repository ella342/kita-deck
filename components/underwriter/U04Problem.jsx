function PCard({ n, title, body, fixed }) {
  return (
    <div style={{ backgroundColor: '#EDEAE0', borderColor: '#00000012', borderRadius: '16px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: fixed ? 0 : undefined, gap: '12px', height: '215px', paddingBlock: '28px', paddingInline: '32px', width: fixed ? '653px' : undefined, flex: fixed ? undefined : 1 }}>
      <div style={{ color: '#4CAF72', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '20px', fontWeight: 700, letterSpacing: '0.04em', lineHeight: '24px', width: 'max-content' }}>{n}</div>
      <div style={{ color: '#0A1F0F', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '22px', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: '120%' }}>{title}</div>
      <div style={{ color: '#5A7060', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '16px', lineHeight: '154%' }}>{body}</div>
    </div>
  );
}

export default function U04Problem() {
  return (
    <div style={{ backgroundColor: '#F5F2EB', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '900px', overflow: 'clip', WebkitFontSmoothing: 'antialiased', width: '1440px' }}>
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', paddingInline: '64px', paddingTop: '48px' }}>
        <div style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01KRW9RKQ8CMS38RV87YYFQ9EV/01KRWC6EJA4G1AXHVAH2Z43R43.png)', backgroundPosition: '50%', backgroundSize: 'cover', flexShrink: 0, height: '99px', width: '148px' }} />
        <div style={{ color: '#8A9E8F', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '14px', fontWeight: 600, letterSpacing: '0.14em', lineHeight: '18px', opacity: '0.7', textTransform: 'uppercase' }}>Underwriting bottlenecks</div>
      </div>
      <div style={{ alignItems: 'flex-end', boxSizing: 'border-box', display: 'flex', gap: '48px', justifyContent: 'space-between', paddingBottom: 48, paddingInline: '64px', paddingTop: 25 }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
            <div style={{ backgroundColor: '#418D62', borderRadius: '50%', flexShrink: 0, height: '6px', width: '6px' }} />
            <div style={{ color: '#418D62', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.18em', lineHeight: '16px', textTransform: 'uppercase' }}>the problem</div>
          </div>
          <div style={{ color: '#1A3320', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '58px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '108%', maxWidth: '760px' }}>Good deals die in the queue.</div>
        </div>
        <div style={{ color: '#5A7060', flexShrink: 0, fontFamily: '"Geist", system-ui, sans-serif', fontSize: '18px', lineHeight: '22px', maxWidth: '380px', textAlign: 'right', width: '459px' }}>Analysts stitch together manual tools and chase documents for weeks. Files pile up, costs climb, and borrowers go to whoever decides first.</div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '22px', paddingBottom: '28px', paddingInline: '56px' }}>
        <div style={{ display: 'flex', gap: '22px' }}>
          <PCard n="01" fixed title="Document collection drags on for weeks." body="Files arrive piecemeal over email, portals, even paper, and every day you spend chasing is a day the borrower shops elsewhere." />
          <PCard n="02" title="A patchwork of disconnected tools." body="Spread financials in one system, underwrite in another, email PDFs to committee. Nothing talks to each other." />
        </div>
        <div style={{ display: 'flex', gap: '22px' }}>
          <PCard n="03" fixed title="Every file costs analyst hours." body="Manual review scales only by hiring. Volume climbs, cost per file holds, and your best analysts spend their day on data entry." />
          <PCard n="04" title="The same file, different answers." body="Decisions drift between analysts, branches, and markets, and when the regulator asks why, the reasoning lives in someone's inbox." />
        </div>
      </div>
    </div>
  );
}
