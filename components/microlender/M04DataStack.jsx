const LOGO = "https://app.paper.design/file-assets/01KRW9RKQ8CMS38RV87YYFQ9EV/01KRWC6EJA4G1AXHVAH2Z43R43.png";

const th = { color: '#2D6A3F', fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '14px', fontWeight: 600, letterSpacing: '0.1em', lineHeight: '18px', textTransform: 'uppercase' };
const nameCell = { alignItems: 'baseline', boxSizing: 'border-box', display: 'flex', flexShrink: 0, gap: '10px', width: '273px' };
const dot = { backgroundColor: '#4CAF72', borderRadius: '50%', flexShrink: 0, height: '7px', width: '7px' };
const name = (color) => ({ color, fontFamily: '"Geist", system-ui, sans-serif', fontSize: '19px', fontWeight: 700, lineHeight: '24px' });
const captures = (color) => ({ boxSizing: 'border-box', color, flexShrink: 0, fontFamily: '"Geist", system-ui, sans-serif', fontSize: '17px', lineHeight: '150%', width: '400px' });
const limit = (color) => ({ boxSizing: 'border-box', color, flex: 1, fontFamily: '"Geist", system-ui, sans-serif', fontSize: '17px', lineHeight: '150%' });

function Row({ title, what, lim }) {
  return (
    <div style={{ alignItems: 'flex-start', borderBottom: '1px solid #D8D3C6', boxSizing: 'border-box', display: 'flex', gap: '40px', paddingBlock: '22px' }}>
      <div style={nameCell}>
        <div style={dot} />
        <div style={name('#16291C')}>{title}</div>
      </div>
      <div style={captures('#1A3320')}>{what}</div>
      <div style={limit('#5A7060')}>{lim}</div>
    </div>
  );
}

export default function M04DataStack() {
  return (
    <div style={{ backgroundColor: '#F5F2EB', borderBottomColor: '#2D6A3F', borderBottomStyle: 'solid', borderBottomWidth: '7px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', width: '1440px', height: '900px', overflow: 'clip', paddingInline: '64px', paddingTop: '48px', WebkitFontSmoothing: 'antialiased' }}>
      <div style={{ backgroundImage: `url(${LOGO})`, backgroundPosition: '50%', backgroundSize: 'cover', flexShrink: 0, height: '99px', width: '148px' }} />
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px', marginTop: '28px' }}>
        <div style={{ backgroundColor: '#4CAF72', borderRadius: '50%', flexShrink: 0, height: '7px', width: '7px' }} />
        <div style={{ color: '#4CAF72', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '15px', fontWeight: 600, letterSpacing: '0.1em', lineHeight: '16px', textTransform: 'uppercase' }}>The data landscape</div>
      </div>
      <div style={{ color: '#16291C', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '58px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '104%', marginTop: '14px' }}>
        The global alternative data stack
      </div>
      <div style={{ color: '#5A7060', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '21px', lineHeight: '155%', marginTop: '18px', maxWidth: '1050px' }}>
        Microlenders layer on alternative data, and each layer earns its keep. One layer is still underutilized: the documents borrowers already submit, which provide direct, first-party evidence of income and cash flow.
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', marginTop: '44px', width: '1312px' }}>
        <div style={{ borderBottom: '2px solid #2D6A3F', boxSizing: 'border-box', display: 'flex', gap: '40px', paddingBottom: '12px' }}>
          <div style={{ ...th, flexShrink: 0, paddingLeft: '17px', width: '273px' }}>Data layer</div>
          <div style={{ ...th, flexShrink: 0, width: '400px' }}>What it captures</div>
          <div style={{ ...th, flex: 1 }}>The limit</div>
        </div>
        <Row title="Credit bureaus" what="Formal repayment history, where it exists" lim="Thin or empty files for first-time and informal borrowers" />
        <Row title="Device & behavioral" what="App and device signals" lim="Useful for identity, fraud, and behavioral-risk signals, but an indirect view of income and cash-flow capacity." />
        <Row title="Transactions & partners" what="E-wallet and purchase history through partners" lim="Partner-dependent access; a coarse view of repayment capacity" />
        <div style={{ alignItems: 'flex-start', backgroundColor: '#2E6A3F', borderRadius: '14px', boxSizing: 'border-box', display: 'flex', gap: '40px', marginTop: '16px', paddingBlock: '22px', paddingInline: '17px 0px' }}>
          <div style={{ ...name('#FFFFFF'), boxSizing: 'border-box', flexShrink: 0, width: '256px' }}>Borrower documents</div>
          <div style={{ boxSizing: 'border-box', color: '#D8E4DC', flexShrink: 0, fontFamily: '"Geist", system-ui, sans-serif', fontSize: '17px', lineHeight: '150%', width: '400px' }}>
            IDs, payslips, and bank statements
          </div>
          <div style={{ boxSizing: 'border-box', color: '#FFFFFF', flex: 1, fontFamily: '"Geist", system-ui, sans-serif', fontSize: '17px', fontWeight: 600, lineHeight: '150%' }}>
            Collected at application{'  '}— the layer Kita unlocks
          </div>
        </div>
      </div>
    </div>
  );
}
