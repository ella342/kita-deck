const mono = '"Geist Mono", system-ui, sans-serif';
const sans = '"Geist", system-ui, sans-serif';
const LOGO = 'https://app.paper.design/file-assets/01KRW9RKQ8CMS38RV87YYFQ9EV/01KRWC6EJA4G1AXHVAH2Z43R43.png';

function ICard({ n, title, body, points }) {
  return (
    <div style={{ backgroundColor: '#EDEAE0', borderColor: '#00000012', borderRadius: '16px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexBasis: '0%', flexDirection: 'column', flexGrow: 1, gap: '16px', padding: '32px' }}>
      <div style={{ color: '#4CAF72', fontFamily: mono, fontSize: '16px', fontWeight: 700, letterSpacing: '0.04em', lineHeight: '20px' }}>{n}</div>
      <div style={{ color: '#0A1F0F', fontFamily: sans, fontSize: '26px', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: '115%' }}>{title}</div>
      <div style={{ color: '#5A7060', fontFamily: sans, fontSize: '16px', lineHeight: '160%' }}>{body}</div>
      <div style={{ flexBasis: '0%', flexGrow: 1, minHeight: '8px' }} />
      <div style={{ borderTopColor: '#00000014', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '9px', paddingTop: '18px' }}>
        {points.map((p, i) => (
          <div key={i} style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '10px' }}>
            <div style={{ backgroundColor: '#4CAF72', borderRadius: '50%', flexShrink: 0, height: '5px', width: '5px' }} />
            <span style={{ color: '#2A3D2E', fontFamily: sans, fontSize: '15px', lineHeight: '150%' }}>{p}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function U13Intake() {
  return (
    <div style={{ backgroundColor: '#F5F2EB', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '900px', overflow: 'clip', WebkitFontSmoothing: 'antialiased', width: '1440px' }}>
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', paddingInline: '64px', paddingTop: '48px' }}>
        <div style={{ backgroundImage: `url(${LOGO})`, backgroundPosition: '50%', backgroundSize: 'cover', flexShrink: 0, height: '99px', width: '148px' }} />
        <div style={{ color: '#8A9E8F', fontFamily: mono, fontSize: '14px', fontWeight: 600, letterSpacing: '0.14em', lineHeight: '18px', opacity: '0.7', textTransform: 'uppercase' }}>AI-native intake</div>
      </div>
      <div style={{ alignItems: 'flex-end', boxSizing: 'border-box', display: 'flex', gap: '48px', justifyContent: 'space-between', paddingBottom: 48, paddingInline: '64px', paddingTop: 25 }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
            <div style={{ backgroundColor: '#418D62', borderRadius: '50%', flexShrink: 0, height: '6px', width: '6px' }} />
            <div style={{ color: '#418D62', fontFamily: mono, fontSize: '13px', fontWeight: 500, letterSpacing: '0.18em', lineHeight: '16px', textTransform: 'uppercase' }}>the front door</div>
          </div>
          <div style={{ color: '#1A3320', fontFamily: sans, fontSize: '56px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '108%', maxWidth: '780px' }}>Every application lands underwriting-ready.</div>
        </div>
        <div style={{ color: '#5A7060', fontFamily: sans, fontSize: '18px', lineHeight: '27px', maxWidth: '380px', textAlign: 'right' }}>Borrowers apply through Kita&apos;s AI-native application and portal, guided, multilingual, on any device, so a complete, structured file is forming from the very first interaction.</div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexShrink: 0, gap: '24px', height: '430px', paddingInline: '56px' }}>
        <ICard n="01" title="AI-Native Application" body="A conversational application that adapts to each borrower and loan type. It asks only what's relevant, validates answers in real time, and structures every response for underwriting." points={["Adapts per loan type", "Real-time validation", "Structured for the credit memo"]} />
        <ICard n="02" title="AI-Native Borrower Portal" body="A white-label portal where borrowers upload documents, track status, and message your team, in their language, on web or mobile." points={["Your brand, end to end", "Upload · status · messaging", "Web · mobile · 30+ languages"]} />
      </div>
    </div>
  );
}
