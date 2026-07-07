"use client";
import { motion } from "framer-motion";

const thread = { hidden: {}, show: { transition: { staggerChildren: 0.28, delayChildren: 0.18 } } };
const msg = {
  hidden: { opacity: 0, y: 12, scale: 0.92 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 460, damping: 26 } },
};
const typingV = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } };

function SpecRow({ label, value }) {
  return (
    <div style={{ alignItems: 'flex-start', borderBottomColor: '#00000012', borderBottomStyle: 'solid', borderBottomWidth: '1px', boxSizing: 'border-box', display: 'flex', gap: '24px', paddingBlock: '14px' }}>
      <div style={{ flexShrink: 0, paddingTop: '2px', width: '120px' }}>
        <span style={{ color: '#8A9E8F', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '11px', letterSpacing: '0.07em', lineHeight: '14px' }}>{label}</span>
      </div>
      <div style={{ color: '#2A3D2E', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '15px', lineHeight: '150%' }}>{value}</div>
    </div>
  );
}

export default function S06CreditOfficer() {
  return (
    <div style={{ backgroundColor: '#F5F2EB', borderBottomColor: '#2D6A3F', borderBottomStyle: 'solid', borderBottomWidth: '7px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '900px', overflow: 'clip', WebkitFontSmoothing: 'antialiased', width: '1440px' }}>
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', paddingInline: '64px', paddingTop: '48px', position: 'relative' }}>
        <div style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01KRW9RKQ8CMS38RV87YYFQ9EV/01KRWC6EJA4G1AXHVAH2Z43R43.png)', backgroundPosition: '50%', backgroundSize: 'cover', flexShrink: 0, height: '99px', width: '148px' }} />
        <div style={{ color: '#8A9E8F', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '14px', fontWeight: 600, letterSpacing: '0.14em', lineHeight: '18px', opacity: '0.7', position: 'absolute', right: '64px', textTransform: 'uppercase', top: '88px', width: 'max-content' }}>completes loan file</div>
      </div>
      <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', gap: '98px', paddingInline: '64px', paddingTop: 31 }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: 0, gap: '22px', width: '656px' }}>
          <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px', height: '16px' }}>
            <div style={{ backgroundColor: '#418D62', borderRadius: '50%', flexShrink: 0, height: '6px', width: '6px' }} />
            <div style={{ color: '#4CAF72', fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.18em', lineHeight: '16px', textTransform: 'uppercase' }}>AI Credit Officer</div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '10px', width: '656px' }}>
            <div style={{ color: '#2D6A3F', fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '50px', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: '100%' }}>01</div>
            <div style={{ color: '#1F2421', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '56px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '106%' }}>The 24/7 agent that closes the loan file.</div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', marginTop: '28px', width: '656px' }}>
            <div style={{ color: '#5A7060', fontFamily: '"Geist", system-ui, sans-serif', fontSize: '18px', lineHeight: '165%', marginBottom: '28px' }}>Engages every borrower the moment they apply — on SMS, email, or web chat, the channel they actually use. Speaks their language, chases documents until the file is complete, then hands a 100%-complete file to the AI Underwriter.</div>
            <div style={{ backgroundColor: '#0000001A', flexShrink: 0, height: '1px', width: '100%' }} />
            <SpecRow label="CHANNELS" value="SMS · Email · Web chat" />
            <SpecRow label="VALIDATION" value="Real-time upload & validation on the spot" />
            <SpecRow label="LANGUAGES" value="English · Spanish · Mandarin · 30+ more" />
            <SpecRow label="HANDOFF" value="100%-complete file to AI Underwriter" />
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', flexShrink: 0, height: '560px', position: 'relative', width: '519px' }}>
          <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '560px', justifyContent: 'center', width: '100%' }}>
            <div style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E4DC', borderRadius: '20px', borderStyle: 'solid', borderWidth: '1px', boxShadow: '#1F24210F 0px 1px 2px, #1F242114 0px 16px 36px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '13px', paddingBlock: '20px', paddingInline: '22px', width: '100%' }}>
              <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '12px' }}>
                  <div style={{ alignItems: 'center', backgroundColor: '#DCE8DD', borderRadius: '50%', display: 'flex', flexShrink: 0, height: '40px', justifyContent: 'center', width: '40px' }}>
                    <div style={{ color: '#2D6A3F', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '17px', fontWeight: 700, lineHeight: '22px' }}>K</div>
                  </div>
                  <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <div style={{ color: '#1F2421', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: 700, lineHeight: '18px' }}>Kita Credit Officer</div>
                    <div style={{ color: '#8A9E8F', fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '10px', letterSpacing: '0.04em', lineHeight: '12px' }}>SMS · +1 (209) · FILE #4471</div>
                  </div>
                </div>
                <div style={{ color: '#8A9E8F', fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '10px', letterSpacing: '0.04em', lineHeight: '12px' }}>TODAY · 10:42</div>
              </div>
              <div style={{ backgroundColor: '#E8E4DC', flexShrink: 0, height: '1px', width: '100%' }} />
              <motion.div variants={thread} initial="hidden" animate="show" style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <motion.div variants={msg} style={{ alignSelf: 'flex-start', backgroundColor: '#F2F1EC', borderRadius: '4px 16px 16px 16px', maxWidth: '80%', paddingBlock: '12px', paddingInline: '16px', transformOrigin: 'bottom left' }}>
                  <div style={{ color: '#1F2421', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', lineHeight: '20px' }}>Hi Rosa — this is Kita, helping with your $85k SBA microloan. To finish your file I still need two documents: your renewed business license and the 2024 P&amp;L.</div>
                </motion.div>
                <motion.div variants={msg} style={{ alignSelf: 'flex-end', backgroundColor: '#2D5A37', borderRadius: '16px 4px 16px 16px', paddingBlock: '11px', paddingInline: '16px', transformOrigin: 'bottom right' }}>
                  <div style={{ color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', lineHeight: '18px' }}>sending the P&amp;L now</div>
                </motion.div>
                <motion.div variants={msg} style={{ alignItems: 'center', alignSelf: 'flex-end', backgroundColor: '#E6EFE7', borderRadius: '16px 4px 16px 16px', display: 'flex', gap: '11px', paddingBlock: '11px', paddingInline: '15px', transformOrigin: 'bottom right' }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" fill="none" stroke="#2D6A3F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <div style={{ color: '#1F2421', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 600, lineHeight: '17px' }}>pl_2024_draft.pdf</div>
                    <div style={{ color: '#8A9E8F', fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '10px', letterSpacing: '0.04em', lineHeight: '12px' }}>1.4 MB · 6 PAGES</div>
                  </div>
                </motion.div>
                <motion.div variants={msg} style={{ alignSelf: 'flex-start', backgroundColor: '#F2F1EC', borderRadius: '4px 16px 16px 16px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '7px', maxWidth: '82%', paddingBlock: '12px', paddingInline: '16px', transformOrigin: 'bottom left' }}>
                  <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '6px' }}>
                    <div style={{ color: '#4CAF72', fontFamily: 'system-ui, sans-serif', fontSize: '11px', lineHeight: '11px' }}>✓</div>
                    <div style={{ color: '#4CAF72', fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em', lineHeight: '12px' }}>DOC ACCEPTED · AUTO-VALIDATED</div>
                  </div>
                  <div style={{ color: '#1F2421', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', lineHeight: '20px' }}>P&amp;L 2024 received and validated — deposits reconcile within 2%. One item left: the renewed business license.</div>
                </motion.div>
                <motion.div variants={msg} style={{ alignSelf: 'flex-end', backgroundColor: '#2D5A37', borderRadius: '16px 4px 16px 16px', paddingBlock: '11px', paddingInline: '16px', transformOrigin: 'bottom right' }}>
                  <div style={{ color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', lineHeight: '18px' }}>license coming today</div>
                </motion.div>
                <motion.div variants={typingV} style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px', marginTop: '1px' }}>
                  <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }} style={{ backgroundColor: '#8FB89A', borderRadius: '50%', flexShrink: 0, height: '7px', width: '7px' }} />
                  <div style={{ color: '#8A9E8F', fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '10px', letterSpacing: '0.08em', lineHeight: '12px' }}>ROSA IS TYPING…</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
