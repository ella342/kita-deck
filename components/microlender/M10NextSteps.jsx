const LOGO = "https://app.paper.design/file-assets/01KRW9RKQ8CMS38RV87YYFQ9EV/01KRWC6EJA4G1AXHVAH2Z43R43.png";

function Step({ n, title, body }) {
  return (
    <div style={{ boxSizing: 'border-box', display: 'flex', flex: 1, flexDirection: 'column', gap: '12px' }}>
      <div style={{ color: '#2D6A3F', fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '50px', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: '100%' }}>{n}</div>
      <div style={{ color: '#0A1F0F', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '25px', fontWeight: 600, lineHeight: '128%' }}>{title}</div>
      <div style={{ color: '#4A5247', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '20px', lineHeight: '148%', maxWidth: '380px' }}>{body}</div>
    </div>
  );
}

export default function M10NextSteps() {
  return (
    <div style={{ backgroundColor: '#F4EFE3', borderBottomColor: '#2D6A3F', borderBottomStyle: 'solid', borderBottomWidth: '7px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', width: '1440px', height: '900px', overflow: 'clip', position: 'relative', WebkitFontSmoothing: 'antialiased' }}>
      <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '320px', backgroundImage: 'radial-gradient(circle farthest-corner at 50% 50% in oklab, oklab(91% 0.040 0.080 / 65%) 0%, oklab(88% 0.050 0.060 / 25%) 30%, oklab(0% 0 0 / 0%) 65%)', pointerEvents: 'none' }} />
      <div style={{ boxSizing: 'border-box', display: 'flex', paddingInline: '64px', paddingTop: '48px', position: 'relative' }}>
        <div style={{ backgroundImage: `url(${LOGO})`, backgroundPosition: '50%', backgroundSize: 'cover', flexShrink: 0, height: '99px', width: '148px' }} />
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flex: 1, flexDirection: 'column', gap: '36px', paddingInline: '64px', paddingTop: '28px', position: 'relative' }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
            <div style={{ backgroundColor: '#4CAF72', borderRadius: '50%', flexShrink: 0, height: '7px', width: '7px' }} />
            <div style={{ color: '#4CAF72', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '15px', fontWeight: 600, letterSpacing: '0.1em', lineHeight: '16px', textTransform: 'uppercase' }}>Proof of concept</div>
          </div>
          <div style={{ color: '#1A3320', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '58px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '104%' }}>
            See it on your loan book.
          </div>
        </div>
        <div style={{ borderTop: '1px solid #D8D3C6', boxSizing: 'border-box', display: 'flex', gap: '32px', paddingTop: '30px' }}>
          <Step n="01" title="You share a sample + outcomes"
            body="A batch of the files and documents you have already collected from borrowers, in addition to their outcomes. The full chaos, from bank statements and payslips to unexpected images. A wide range of document types." />
          <Step n="02" title="We return a ranked report"
            body="Every signal scored by Information Value on your data, revealing what predicts repayment and is thus worthy to be included in your credit model." />
          <Step n="03" title="Together, we scope production"
            body="We turn the winning scores into scalable extraction that can run on any file submitted into your platform to strengthen your underwriting model." />
        </div>
      </div>
      <div style={{ borderTop: '1px solid #1E3D24', boxSizing: 'border-box', display: 'flex', flexShrink: 0, height: '108px', position: 'relative' }}>
        <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flex: 1, justifyContent: 'space-between', paddingInline: '64px' }}>
          <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '32px' }}>
            <div style={{ color: '#16291C', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '15px', lineHeight: '18px' }}>kita.ai</div>
            <div style={{ backgroundColor: '#2D6A3F', flexShrink: 0, height: '20px', width: '1px' }} />
            <div style={{ color: '#16291C', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '15px', lineHeight: '18px' }}>founders@kita.ai</div>
          </div>
          <div style={{ color: '#8E9991', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '12px', letterSpacing: '0.12em', lineHeight: '16px', textTransform: 'uppercase' }}>
            KITA TECHNOLOGIES, INC. · SAN FRANCISCO, CA
          </div>
        </div>
      </div>
    </div>
  );
}
