function SCard({ n, title, body, tag, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#EDEAE0', borderColor: '#00000012', borderRadius: '16px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', color: 'inherit', cursor: 'pointer', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: 1, paddingBlock: '32px', paddingInline: '28px', textDecoration: 'none' }}>
      <div style={{ color: '#4CAF72', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '16px', fontWeight: 700, lineHeight: '20px', marginBottom: '24px' }}>{n}</div>
      <div style={{ color: '#0A1F0F', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '26px', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: '115%', marginBottom: '14px' }}>{title}</div>
      <div style={{ color: '#5A7060', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '16px', lineHeight: '160%' }}>{body}</div>
      <div style={{ flexBasis: '0%', flexGrow: 1 }} />
      <div style={{ alignItems: 'center', borderTopColor: '#00000014', borderTopStyle: 'solid', borderTopWidth: '1px', display: 'flex', justifyContent: 'space-between', paddingTop: '18px' }}>
        <span style={{ color: '#4DAF72', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '16px', fontWeight: 600, letterSpacing: '0.08em', lineHeight: '20px' }}>{tag}</span>
        <span style={{ color: '#4DAF72', fontSize: '17px', lineHeight: '20px' }}>↗</span>
      </div>
    </a>
  );
}

export default function S05Stack() {
  return (
    <div style={{ backgroundColor: '#F5F2EB', borderBottomColor: '#2D6A3F', borderBottomStyle: 'solid', borderBottomWidth: '7px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '900px', overflow: 'clip', WebkitFontSmoothing: 'antialiased', width: '1440px' }}>
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', paddingInline: '64px', paddingTop: '48px' }}>
        <div style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01KRW9RKQ8CMS38RV87YYFQ9EV/01KRWC6EJA4G1AXHVAH2Z43R43.png)', backgroundPosition: '50%', backgroundSize: 'cover', flexShrink: 0, height: '99px', width: '148px' }} />
        <div style={{ color: '#8A9E8F', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '14px', fontWeight: 600, letterSpacing: '0.14em', lineHeight: '18px', opacity: '0.7', textTransform: 'uppercase' }}>Three AI layers · One underwriting stack</div>
      </div>
      <div style={{ alignItems: 'flex-end', boxSizing: 'border-box', display: 'flex', gap: '48px', justifyContent: 'space-between', paddingBottom: 48, paddingInline: '64px', paddingTop: 25 }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
            <div style={{ backgroundColor: '#418D62', borderRadius: '50%', flexShrink: 0, height: '6px', width: '6px' }} />
            <div style={{ color: '#418D62', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.18em', lineHeight: '16px', textTransform: 'uppercase' }}>the solution</div>
          </div>
          <div style={{ color: '#1A3320', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '56px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '108%', maxWidth: '760px' }}>Kita&apos;s agents run your entire underwriting pipeline.</div>
        </div>
        <div style={{ color: '#5A7060', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '18px', lineHeight: '22px', maxWidth: '380px', textAlign: 'right' }}>Three layers run the file end to end — intake, document intelligence, and the decision draft.</div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexShrink: 0, gap: '24px', height: '388px', paddingBottom: '20px', paddingInline: '56px', width: '1440px' }}>
        <SCard n="01" title="AI Credit Officer" body="Runs the back-and-forth with the borrower over SMS, email, or any channel they prefer — in any language — and chases down every missing document." tag="Completes loan file." href="https://www.kita.ai/underwriting" />
        <SCard n="02" title="Kita Capture" body="Reads, verifies, and cross-checks any set of documents. Flags discrepancies and assesses creditworthiness even from non-standard income and messy business files." tag="Extracts and verifies." href="https://www.kita.ai/capture" />
        <SCard n="03" title="AI Underwriter" body="Runs the full financial analysis against your own lending policy, then drafts the credit memo with every number cited to its source." tag="Drafts the memo." href="https://www.kita.ai/risk-engine" />
      </div>
    </div>
  );
}
