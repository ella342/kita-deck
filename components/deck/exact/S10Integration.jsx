const mono = '"Geist Mono", system-ui, sans-serif';
const sans = '"Geist", system-ui, sans-serif';

function ConnectCard({ n, title, body }) {
  return (
    <div style={{ backgroundColor: '#FFFFFF', borderColor: '#D0CCC0', borderRadius: '12px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: 1, gap: '20px', padding: '32px' }}>
      <div style={{ color: '#8A9E8F', fontFamily: mono, fontSize: '12px', letterSpacing: '0.1em', lineHeight: '16px' }}>{n}</div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ color: '#0A1F0F', fontFamily: sans, fontSize: '28px', fontWeight: 700, lineHeight: '110%' }}>{title}</div>
        <div style={{ color: '#8A9E8F', fontFamily: sans, fontSize: '16px', lineHeight: '160%' }}>{body}</div>
      </div>
    </div>
  );
}
function SpecCol({ title, value }) {
  return (
    <div style={{ boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: 1, gap: '6px', paddingBlock: '20px', paddingInline: '32px' }}>
      <div style={{ color: '#0A1F0F', fontFamily: mono, fontSize: '13px', fontWeight: 700, lineHeight: '16px' }}>{title}</div>
      <div style={{ color: '#8A9E8F', fontFamily: mono, fontSize: '12px', letterSpacing: '0.04em', lineHeight: '16px' }}>{value}</div>
    </div>
  );
}

export default function S10Integration() {
  return (
    <div style={{ backgroundColor: '#F5F2EB', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: 0, height: '900px', justifyContent: 'space-between', paddingBottom: '32px', paddingInline: '64px', paddingTop: '48px', width: '1440px', overflow: 'clip', WebkitFontSmoothing: 'antialiased' }}>
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: 0, height: '87px', justifyContent: 'space-between' }}>
        <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: 0, gap: '8px', width: '190px' }}>
          <div style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01KRW9RKQ8CMS38RV87YYFQ9EV/01KRWC6EJA4G1AXHVAH2Z43R43.png)', backgroundPosition: '50%', backgroundSize: 'cover', flexShrink: 0, height: '99px', width: '148px' }} />
        </div>
        <div style={{ color: '#8A9E8F', fontFamily: mono, fontSize: '14px', fontWeight: 600, letterSpacing: '0.14em', lineHeight: '18px', opacity: '0.7', textTransform: 'uppercase' }}>INTEGRATION</div>
      </div>
      <div style={{ alignItems: 'flex-end', boxSizing: 'border-box', display: 'flex', flexShrink: 0, height: '149px', justifyContent: 'space-between', marginTop: '-39px', width: '1311px' }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: 0, gap: '16px', width: '664px' }}>
          <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
            <div style={{ backgroundColor: '#418D62', borderRadius: '50%', flexShrink: 0, height: '8px', width: '8px' }} />
            <div style={{ color: '#418D62', fontFamily: mono, fontSize: '13px', letterSpacing: '0.1em', lineHeight: '16px' }}>WAYS TO ADOPT</div>
          </div>
          <div style={{ color: '#0A1F0F', fontFamily: sans, fontSize: '58px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '108%' }}>Run it whole, or slot it in.</div>
        </div>
        <div style={{ boxSizing: 'border-box', maxWidth: '380px', paddingBottom: '8px' }}>
          <div style={{ color: '#6B6F6A', fontFamily: sans, fontSize: '18px', lineHeight: '22px', maxWidth: '380px', textAlign: 'right' }}>Run the whole journey end-to-end on Kita&apos;s AI-native Intelligent LOS, or slot individual solutions into the workflow you already run, wherever they make sense. No rip-and-replace.</div>
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexShrink: 0, gap: '20px', height: '240px', marginTop: '-39px' }}>
        <ConnectCard n="I." title="Kita Intelligent LOS" body="Run the whole journey end-to-end on our AI-native loan origination system: application, document collection, underwriting, and decisioning in one place." />
        <ConnectCard n="II." title="Slot into your stack" body="Slot any Kita solution into the LOS you already run, via REST API: Capture, the AI Credit Officer, the AI Underwriter, or the AI-native application and borrower portal that keep borrowers in touch with your team and confident at every step." />
      </div>
      <div style={{ backgroundColor: '#EDEAE0', borderColor: '#D0CCC0', borderRadius: '12px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', marginTop: '-39px' }}>
        <SpecCol title="Output formats" value="JSON · CSV · Excel · Custom" />
        <div style={{ backgroundColor: '#D0CCC0', flexShrink: 0, width: '1px' }} />
        <SpecCol title="Auth" value="API key · OAuth 2.0" />
        <div style={{ backgroundColor: '#D0CCC0', flexShrink: 0, width: '1px' }} />
        <SpecCol title="Docs" value="OpenAPI spec included" />
      </div>
      <div style={{ boxSizing: 'border-box', height: '14px', marginTop: '-39px', width: '53px' }} />
    </div>
  );
}
