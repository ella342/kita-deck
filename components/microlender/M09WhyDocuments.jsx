const LOGO = "https://app.paper.design/file-assets/01KRW9RKQ8CMS38RV87YYFQ9EV/01KRWC6EJA4G1AXHVAH2Z43R43.png";

function Bullet({ children }) {
  return (
    <div style={{ alignItems: 'baseline', boxSizing: 'border-box', display: 'flex', gap: '12px' }}>
      <div style={{ backgroundColor: '#4CAF72', borderRadius: '50%', flexShrink: 0, height: '7px', width: '7px' }} />
      <div style={{ color: '#E8EFE9', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '18px', lineHeight: '145%' }}>{children}</div>
    </div>
  );
}

function Card({ n, title, body, bullets }) {
  return (
    <div style={{ backgroundColor: '#1B2E20', borderRadius: '20px', boxSizing: 'border-box', display: 'flex', flex: 1, flexDirection: 'column', paddingBlock: '36px 40px', paddingInline: '40px' }}>
      <div style={{ color: '#7FD19C', fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '20px', fontWeight: 600, letterSpacing: '0.12em', lineHeight: '24px' }}>{n}</div>
      <div style={{ color: '#FFFFFF', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '32px', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: '118%', marginTop: '16px' }}>{title}</div>
      <div style={{ color: '#A9B2AB', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '22px', lineHeight: '150%', marginTop: '14px' }}>{body}</div>
      <div style={{ backgroundColor: '#FFFFFF0F', borderRadius: '12px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: 0, gap: '14px', height: '204px', marginTop: 'auto', paddingBlock: '24px', paddingInline: '28px' }}>
        <div style={{ color: '#7FD19B', fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '15px', fontWeight: 600, letterSpacing: '0.12em', lineHeight: '18px', textTransform: 'uppercase' }}>what changes with kita</div>
        {bullets.map((b) => <Bullet key={b}>{b}</Bullet>)}
      </div>
    </div>
  );
}

export default function M09WhyDocuments() {
  return (
    <div style={{ backgroundColor: '#F5F2EB', borderBottomColor: '#2D6A3F', borderBottomStyle: 'solid', borderBottomWidth: '7px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', width: '1440px', height: '900px', overflow: 'clip', WebkitFontSmoothing: 'antialiased' }}>
      <div style={{ boxSizing: 'border-box', display: 'flex', paddingInline: '64px', paddingTop: '36px' }}>
        <div style={{ backgroundImage: `url(${LOGO})`, backgroundPosition: '50%', backgroundSize: 'cover', flexShrink: 0, height: '99px', width: '148px' }} />
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '14px', paddingInline: '64px', paddingTop: '43px' }}>
        <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
          <div style={{ color: '#4CAF72', fontFamily: 'system-ui, sans-serif', fontSize: '15px', lineHeight: '16px' }}>●</div>
          <div style={{ color: '#4CAF72', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '15px', fontWeight: 600, letterSpacing: '0.1em', lineHeight: '16px', textTransform: 'uppercase' }}>why documents</div>
        </div>
        <div style={{ color: '#16291C', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '64px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '104%', maxWidth: '1180px' }}>
          For lenders: lower risk, larger book.
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexShrink: 0, gap: '28px', height: '481px', marginTop: '56px', paddingInline: '64px', width: '100%' }}>
        <Card
          n="01"
          title="Sharper risk ranking"
          body="Score the income and financial documents already submitted across your loan products."
          bullets={[
            "Set starting limits from verified capacity, not a default",
            "−18% defaults among approved borrowers, A/B-tested",
            "+12% more valid approvals with no added portfolio risk",
          ]}
        />
        <Card
          n="02"
          title="Expand your offering"
          body="Documents that gate limits today become model signal that grows the book safely."
          bullets={[
            "Offer additional loan products",
            "Upsell customers with model-driven limit increases",
            "Write larger-ticket loans at the same risk",
          ]}
        />
      </div>
    </div>
  );
}
