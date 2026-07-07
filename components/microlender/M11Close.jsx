"use client";
import { motion } from "framer-motion";

const LOGO = "https://app.paper.design/file-assets/01KRW9RKQ8CMS38RV87YYFQ9EV/01KRWC6EJA4G1AXHVAH2Z43R43.png";

const stagger = (s = 0.12, d = 0.12) => ({
  hidden: {},
  show: { transition: { staggerChildren: s, delayChildren: d } },
  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
});
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 130, damping: 18 } },
  exit: { opacity: 0, y: -18, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
};

export default function M11Close() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#F4EFE3", overflow: "hidden", fontFamily: '"Geist", system-ui, sans-serif' }}>
      <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: "36%", backgroundImage: "radial-gradient(circle farthest-corner at 50% 50% in oklab, oklab(91% 0.040 0.080 / 65%) 0%, oklab(88% 0.050 0.060 / 25%) 30%, oklab(0% 0 0 / 0%) 65%)", pointerEvents: "none" }} />

      <motion.div variants={stagger()} initial="hidden" animate="show" exit="exit"
        style={{ position: "relative", zIndex: 1, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <motion.div variants={item}
          style={{ backgroundImage: `url(${LOGO})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "left center", width: "clamp(112px, 10vw, 148px)", height: "clamp(75px, 6.8vw, 99px)", flexShrink: 0, margin: "clamp(28px, 3.4vw, 48px) clamp(34px, 4.4vw, 64px) 0" }} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "28px" }}>
          <motion.h1 variants={item}
            style={{ margin: 0, color: "#16291C", fontWeight: 700, fontSize: "clamp(56px, 7vw, 100px)", lineHeight: 1.02, letterSpacing: "-0.03em", textAlign: "center" }}>
            Thank you!
          </motion.h1>
          <motion.div variants={item} style={{ width: "120px", height: "3px", background: "#4CAF72", borderRadius: "2px" }} />
        </div>
        <motion.div variants={item}
          style={{ borderTop: "1px solid #1E3D24", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "clamp(20px, 3vw, 38px) clamp(34px, 4.4vw, 64px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <span style={{ color: "#16291C", fontSize: "15px" }}>kita.ai</span>
            <span style={{ background: "#2D6A3F", width: "1px", height: "20px" }} />
            <span style={{ color: "#16291C", fontSize: "15px" }}>hello@kita.ai</span>
          </div>
          <div style={{ color: "#8E9991", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            KITA TECHNOLOGIES, INC. · SAN FRANCISCO, CA
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
