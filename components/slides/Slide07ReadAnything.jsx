const T = {
  bgLight: '#F5F2EB',
  bgDark: '#0A1F0F',
  greenPrimary: '#2D6A3F',
  greenAccent: '#4CAF72',
  textMuted: '#8A9E8F',
  borderLight: '#D0CCC0',
  inter: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

const SpecRow = ({ label, value }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', gap: '24px', borderTop: `1px solid ${T.borderLight}`, paddingTop: '16px' }}>
    <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.textMuted, letterSpacing: '0.1em', width: '110px', flexShrink: 0 }}>{label}</span>
    <span style={{ fontFamily: T.inter, fontSize: '16px', color: T.bgDark }}>{value}</span>
  </div>
);

export default function Slide07ReadAnything() {
  return (
    <div style={{ width: '1440px', height: '900px', background: T.bgLight, padding: '36px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: T.greenPrimary, flexShrink: 0 }} />
          <span style={{ fontFamily: T.inter, fontSize: '20px', fontWeight: 700, color: T.bgDark, letterSpacing: '-0.5px' }}>kita</span>
        </div>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>07 — ROBUST INGEST</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '80px', alignItems: 'flex-start' }}>
        {/* Left: headline + specs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: T.greenPrimary, flexShrink: 0 }} />
              <span style={{ fontFamily: T.mono, fontSize: '12px', color: T.greenPrimary, letterSpacing: '0.1em' }}>CAPABILITY 01 — READ</span>
            </div>
            <h1 style={{ fontFamily: T.inter, fontSize: '72px', fontWeight: 800, color: T.bgDark, letterSpacing: '-3px', lineHeight: 1, margin: 0 }}>
              Real documents<br />are messy.
            </h1>
            <p style={{ fontFamily: T.inter, fontSize: '18px', color: T.textMuted, lineHeight: 1.5, margin: 0, maxWidth: '520px' }}>
              Phone photos at 200dpi, faxed scans rotated 7°, PDFs with embedded images of images. Capture reads them all.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <SpecRow label="FORMATS" value="PDF · JPG · PNG · HEIC · TIFF · Fax · Screenshot · WhatsApp" />
            <SpecRow label="RESOLUTION" value="150 dpi to 4K. Auto-upscale on degraded inputs." />
            <SpecRow label="CONDITION" value="Skew · glare · folds · stamps · handwriting · marker scribbles" />
            <SpecRow label="LANGUAGES" value="English · Spanish · Portuguese · Tagalog · Mandarin · 30+ more" />
            <SpecRow label="DEVICE" value="Phone camera · scanner · fax · email forward · upload" />
          </div>
        </div>

        {/* Right: document mockups */}
        <div style={{ width: '500px', flexShrink: 0, position: 'relative', height: '460px' }}>
          {[
            { top: 0, left: 0, w: 220, h: 160, label: 'PHONE PHOTO · 200 DPI' },
            { top: 0, left: 240, w: 230, h: 150, label: 'FAX · 200 DPI · GRAYSCALE' },
            { top: 200, left: 60, w: 200, h: 160, label: 'SCAN · SKEWED 5°' },
            { top: 180, left: 290, w: 200, h: 170, label: 'SCREENSHOT · BANK APP' },
          ].map(({ top, left, w, h, label }) => (
            <div key={label} style={{ position: 'absolute', top, left, width: w, height: h, background: '#FFFFFF', border: `1px solid ${T.borderLight}`, borderRadius: '8px', padding: '12px', boxSizing: 'border-box' }}>
              <span style={{ fontFamily: T.mono, fontSize: '9px', color: T.textMuted, letterSpacing: '0.06em' }}>{label}</span>
              <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[70, 90, 55, 80].map((w2, i) => (
                  <div key={i} style={{ height: '8px', background: i === 0 ? T.bgDark : '#D0CCC0', borderRadius: '2px', width: `${w2}%` }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>KITA / CAPTURE / 2026</span>
        <span style={{ fontFamily: T.mono, fontSize: '11px', color: T.textMuted, letterSpacing: '0.08em' }}>07 / 19</span>
      </div>
    </div>
  );
}
