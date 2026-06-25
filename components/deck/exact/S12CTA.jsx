"use client";
import { motion } from "framer-motion";

const LOGO = "https://app.paper.design/file-assets/01KRW9RKQ8CMS38RV87YYFQ9EV/01KRWC6EJA4G1AXHVAH2Z43R43.png";

const stagger = (s = 0.1, d = 0.12) => ({
  hidden: {},
  show: { transition: { staggerChildren: s, delayChildren: d } },
  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
});
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 130, damping: 18 } },
  exit: { opacity: 0, y: -18, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
};
const blob = (o) => ({ position: "absolute", borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none", ...o });

export default function S12CTA() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#F4EFE3", overflow: "hidden", fontFamily: '"Geist", system-ui, sans-serif' }}>
      <div aria-hidden className="deck-blob-a"
        style={blob({ top: "-30%", right: "-14%", width: "72vw", height: "72vw", background: "radial-gradient(circle at 50% 50%, rgba(247,203,160,0.95), rgba(247,214,180,0.5) 42%, rgba(247,214,180,0) 70%)" })} />
      <div aria-hidden className="deck-blob-b"
        style={blob({ bottom: "-34%", left: "-22%", width: "62vw", height: "62vw", background: "radial-gradient(circle at 50% 50%, rgba(76,175,114,0.3), rgba(76,175,114,0) 68%)" })} />

      <motion.div variants={stagger()} initial="hidden" animate="show" exit="exit"
        style={{ position: "relative", zIndex: 1, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "clamp(34px, 4.4vw, 64px)" }}>
        <motion.div variants={item}
          style={{ backgroundImage: `url(${LOGO})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "left center", width: "clamp(112px, 10vw, 148px)", height: "clamp(75px, 6.8vw, 99px)", flexShrink: 0 }} />

        <motion.div variants={stagger(0.1, 0)} style={{ display: "flex", flexDirection: "column", gap: "clamp(14px, 1.5vw, 20px)", maxWidth: "min(1000px, 86%)" }}>
          <motion.div variants={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <motion.span animate={{ opacity: [1, 0.35, 1] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: 7, height: 7, borderRadius: "50%", background: "#52B07A", display: "inline-block" }} />
            <span style={{ color: "#52B07A", fontSize: "clamp(13px,1.1vw,17px)", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" }}>get started</span>
          </motion.div>
          <motion.h1 variants={item} style={{ margin: 0, fontWeight: 700, fontSize: "clamp(40px, 6.8vw, 96px)", lineHeight: 1.02, letterSpacing: "-0.03em" }}>
            <span style={{ color: "#16291C" }}>Kita is AI for your underwriters.</span><br />
            <span style={{ color: "#2D6A3F" }}>Ready when you are.</span>
          </motion.h1>
          <motion.p variants={item} style={{ margin: "clamp(10px,1vw,14px) 0 0", color: "#5A7060", fontSize: "clamp(15px, 1.5vw, 22px)", lineHeight: 1.45, maxWidth: "820px" }}>
            We&apos;ll walk your team through Kita&apos;s platform and get you set up with bespoke onboarding and 24/7 support.
          </motion.p>
          <motion.div variants={item} style={{ display: "flex", flexDirection: "column", gap: "clamp(8px,0.8vw,14px)", marginTop: "clamp(16px,1.6vw,28px)" }}>
            <span style={{ color: "#8A9E8F", fontFamily: '"Geist Mono", monospace', fontSize: "clamp(11px,1vw,13px)", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase" }}>book a demo →</span>
            <a href="mailto:founders@kita.ai" style={{ color: "#2D6A3F", fontWeight: 800, fontSize: "clamp(20px,2.4vw,30px)", letterSpacing: "-0.02em", textDecoration: "none" }}>founders@kita.ai</a>
          </motion.div>
        </motion.div>

        <motion.div variants={item} style={{ color: "#8E9991", fontSize: "clamp(11px, 1vw, 14px)", letterSpacing: "0.06em", lineHeight: 1.6 }}>
          KITA TECHNOLOGIES INC.{"   "}·{"   "}KITA.AI
        </motion.div>
      </motion.div>
    </div>
  );
}
