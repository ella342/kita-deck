const LOGO = "https://app.paper.design/file-assets/01KRW9RKQ8CMS38RV87YYFQ9EV/01KRWC6EJA4G1AXHVAH2Z43R43.png";

const monoLabel = (color) => ({ color, fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '16px', fontWeight: 600, letterSpacing: '0.14em', lineHeight: '20px', textTransform: 'uppercase' });
const statLabel = (color) => ({ color, fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '15px', fontWeight: 600, letterSpacing: '0.12em', lineHeight: '18px', textTransform: 'uppercase' });
const statNum = (color) => ({ color, fontFamily: '"Geist", system-ui, sans-serif', fontSize: '64px', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: '100%' });

export default function M03Problem() {
  return (
    <div style={{ backgroundColor: '#F5F2EB', borderBottomColor: '#2D6A3F', borderBottomStyle: 'solid', borderBottomWidth: '7px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', width: '1440px', height: '900px', overflow: 'clip', paddingInline: '64px', paddingTop: '48px', WebkitFontSmoothing: 'antialiased' }}>
      <div style={{ backgroundImage: `url(${LOGO})`, backgroundPosition: '50%', backgroundSize: 'cover', flexShrink: 0, height: '99px', width: '148px' }} />
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px', marginTop: '28px' }}>
        <div style={{ backgroundColor: '#4CAF72', borderRadius: '50%', flexShrink: 0, height: '7px', width: '7px' }} />
        <div style={{ color: '#4CAF72', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '15px', fontWeight: 600, letterSpacing: '0.1em', lineHeight: '16px', textTransform: 'uppercase' }}>The bottleneck</div>
      </div>
      <div style={{ color: '#16291C', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '58px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '104%', marginTop: '14px', maxWidth: '1240px' }}>
        The credit gap is massive.<br />Underwriting is the bottleneck.
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexShrink: 0, gap: '56px', height: '460px', marginTop: '28px' }}>
        {/* The opportunity */}
        <div style={{ backgroundColor: '#EDEAE0', borderRadius: '20px', boxSizing: 'border-box', display: 'flex', flex: 1, flexDirection: 'column', height: '460px', paddingBlock: '32px', paddingInline: '44px' }}>
          <div style={monoLabel('#2D6A3F')}>The opportunity</div>
          <div style={{ color: '#16291C', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '30px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '122%', marginTop: '14px', maxWidth: '560px' }}>
            A massive gap between credit demand and available supply in emerging markets.
          </div>
          <div style={{ borderTop: '1px solid #D8D3C6', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto', paddingTop: '20px' }}>
            <div style={statLabel('#2D6A3F')}>Financially excluded</div>
            <div style={statNum('#2D6A3F')}>1.3B</div>
            <div style={{ color: '#5A7060', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '20px', lineHeight: '140%' }}>
              adults worldwide remain outside the formal financial system — and ~70% of MSMEs in emerging markets lack the financing they need to grow
            </div>
          </div>
        </div>
        {/* The bottleneck */}
        <div style={{ backgroundColor: '#16291C', borderRadius: '20px', boxSizing: 'border-box', display: 'flex', flex: 1, flexDirection: 'column', height: '460px', paddingBlock: '32px', paddingInline: '44px' }}>
          <div style={monoLabel('#4CAF72')}>The bottleneck</div>
          <div style={{ color: '#FFFFFF', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '30px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '122%', marginTop: '14px' }}>
            Demand isn&apos;t the problem.<br />The data to underwrite it is.
          </div>
          <div style={{ borderTop: '1px solid #2E5038', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '18px', paddingTop: '20px' }}>
            <div style={statLabel('#4CAF72')}>The unmet demand</div>
            <div style={statNum('#4CAF72')}>$5.7T</div>
            <div style={{ color: '#A9C4B1', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '20px', lineHeight: '140%' }}>
              in estimated unmet demand for credit.
            </div>
          </div>
          <div style={{ color: '#A9C4B1', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '20px', lineHeight: '150%', marginTop: '14px' }}>
            The constraint: approving more creditworthy borrowers from the messy documents and alternative data thin-file customers have.
          </div>
        </div>
      </div>
    </div>
  );
}
