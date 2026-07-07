const mono = '"Geist Mono", system-ui, sans-serif';
const sans = '"Geist", system-ui, sans-serif';
const STATUS = {
  'MEMO DRAFTED': ['#E4F0E8', '#2D6A3F'],
  UNDERWRITING: ['#E5EAEE', '#46607A'],
  'AWAITING DOCS': ['#F3E9D8', '#9A6B22'],
};
const ROWS = [
  ['Rosa Mendoza', 'Debt consolidation', '$32,000', 'Personal', 'MEMO DRAFTED', '2 min ago', true],
  ['James Okafor', '2023 Ford F-150', '$52,000', 'Auto', 'UNDERWRITING', '18 min ago', false],
  ['Dolores Reyes', 'Medical expenses', '$14,500', 'Personal', 'AWAITING DOCS', '1 hr ago', false],
  ['Aisha Bello', 'Home purchase', '$345,000', 'Mortgage', 'MEMO DRAFTED', '2 hr ago', false],
  ['Marco Tan', '2022 Honda CR-V', '$34,000', 'Auto', 'UNDERWRITING', 'Today', false],
];

function Pill({ text, bg, color }) {
  return (
    <div style={{ alignItems: 'center', backgroundColor: bg, borderRadius: '6px', display: 'inline-flex', paddingBlock: '5px', paddingInline: '10px' }}>
      <div style={{ color, fontFamily: mono, fontSize: '10px', fontWeight: 600, letterSpacing: '0.06em', lineHeight: '13px' }}>{text}</div>
    </div>
  );
}
function FilterChip({ text }) {
  return (
    <div style={{ borderColor: '#00000018', borderRadius: '7px', borderStyle: 'solid', borderWidth: '1px', paddingBlock: '5px', paddingInline: '11px' }}>
      <div style={{ color: '#8A9E8F', fontFamily: mono, fontSize: '10px', fontWeight: 500, letterSpacing: '0.08em', lineHeight: '13px' }}>{text}</div>
    </div>
  );
}
function Th({ w, children, right }) {
  return (
    <div style={{ flexShrink: w ? 0 : undefined, width: w, flexBasis: w ? undefined : '0%', flexGrow: w ? undefined : 1 }}>
      <div style={{ color: '#8A9E8F', fontFamily: mono, fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', lineHeight: '13px', textAlign: right ? 'right' : 'left' }}>{children}</div>
    </div>
  );
}

export default function S09Dashboard() {
  return (
    <div style={{ backgroundColor: '#F5F2EB', borderBottomColor: '#2D6A3F', borderBottomStyle: 'solid', borderBottomWidth: '7px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '900px', overflow: 'clip', WebkitFontSmoothing: 'antialiased', width: '1440px' }}>
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', paddingInline: '64px', paddingTop: '48px' }}>
        <div style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01KRW9RKQ8CMS38RV87YYFQ9EV/653GDG4AC07XB0TH73X9RTHSZY.png)', backgroundPosition: '50%', backgroundSize: 'cover', flexShrink: 0, height: '99px', width: '148px' }} />
        <div style={{ color: '#8A9E8F', fontFamily: mono, fontSize: '14px', fontWeight: 600, letterSpacing: '0.14em', lineHeight: '18px', opacity: '0.7', textTransform: 'uppercase' }}>end-to-end underwriting</div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', paddingInline: '64px', paddingTop: '18px' }}>
        <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
          <div style={{ backgroundColor: '#418D62', borderRadius: '50%', flexShrink: 0, height: '6px', width: '6px' }} />
          <div style={{ color: '#418D62', fontFamily: mono, fontSize: '13px', fontWeight: 500, letterSpacing: '0.18em', lineHeight: '16px', textTransform: 'uppercase' }}>full pipeline</div>
        </div>
        <div style={{ color: '#1A3320', fontFamily: sans, fontSize: '58px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '106%' }}>Automated end-to-end underwriting.</div>
        <div style={{ color: '#5A7060', fontFamily: sans, fontSize: '18px', letterSpacing: '-0.005em', lineHeight: '27px', marginTop: '2px', maxWidth: '1040px' }}>Every file moves on its own. The AI Credit Officer chases docs, Capture reads them, and the AI Underwriter drafts the memo. Your officers watch one screen and step in only to decide.</div>
      </div>
      <div style={{ backgroundColor: '#FCFBF7', borderColor: '#00000016', borderRadius: '18px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', marginInline: '64px', marginTop: '26px', overflow: 'clip' }}>
        <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '16px', height: '78px', justifyContent: 'space-between', paddingBlock: '20px', paddingInline: '26px' }}>
          <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '14px' }}>
            <div style={{ color: '#0A1F0F', fontFamily: sans, fontSize: '18px', fontWeight: 800, letterSpacing: '-0.01em', lineHeight: '22px' }}>Applications</div>
            <Pill text="42 ACTIVE" bg="#E4F0E8" color="#2D6A3F" />
            <Pill text="7 AWAITING DOCS" bg="#F3E9D8" color="#9A6B22" />
            <Pill text="3 MEMO DRAFTED" bg="#E6ECEA" color="#4A6357" />
          </div>
          <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
            <FilterChip text="STATUS" /><FilterChip text="TYPE" /><FilterChip text="LOAN SIZE" /><FilterChip text="OFFICER" />
          </div>
        </div>
        <div style={{ backgroundColor: '#0000000F', flexShrink: 0, height: '1px' }} />
        <div style={{ alignItems: 'center', backgroundColor: '#00000005', boxSizing: 'border-box', display: 'flex', paddingBlock: '13px', paddingInline: '26px' }}>
          <Th w="220px">BORROWER</Th><Th w="290px">PURPOSE</Th><Th w="120px">AMOUNT</Th><Th w="150px">TYPE</Th><Th w="200px">STATUS</Th><Th right>SUBMITTED</Th>
        </div>
        {ROWS.map(([name, purpose, amt, type, status, time, hot], i) => {
          const [bg, color] = STATUS[status];
          return (
            <div key={name} className={`pipe-row${hot ? ' is-active' : ''}`} style={{ alignItems: 'center', borderLeftStyle: 'solid', borderLeftWidth: '3px', borderTopColor: i ? '#00000010' : 'transparent', borderTopStyle: 'solid', borderTopWidth: i ? '1px' : '0px', boxSizing: 'border-box', display: 'flex', paddingBlock: '15px', paddingInline: '26px' }}>
              <div style={{ flexShrink: 0, width: '217px' }}><div style={{ color: '#15241A', fontFamily: sans, fontSize: '15px', fontWeight: 600, letterSpacing: '-0.01em', lineHeight: '19px' }}>{name}</div></div>
              <div style={{ flexShrink: 0, width: '290px' }}><div style={{ color: '#5A7060', fontFamily: sans, fontSize: '14px', lineHeight: '18px' }}>{purpose}</div></div>
              <div style={{ flexShrink: 0, width: '120px' }}><div style={{ color: '#27332B', fontFamily: mono, fontSize: '13px', fontWeight: 500, lineHeight: '18px' }}>{amt}</div></div>
              <div style={{ flexShrink: 0, width: '150px' }}><div style={{ color: '#5A7060', fontFamily: sans, fontSize: '14px', lineHeight: '18px' }}>{type}</div></div>
              <div style={{ flexShrink: 0, width: '200px' }}><Pill text={status} bg={bg} color={color} /></div>
              <div style={{ flexBasis: '0%', flexGrow: 1 }}><div style={{ color: '#8A9E8F', fontFamily: mono, fontSize: '12px', lineHeight: '16px', textAlign: 'right' }}>{time}</div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
