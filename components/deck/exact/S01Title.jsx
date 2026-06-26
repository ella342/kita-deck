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
const blob = (o) => ({ position: "absolute", borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none", ...o });

export default function S01Title() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#F4EFE3", overflow: "hidden", fontFamily: '"Geist", system-ui, sans-serif' }}>
      <div aria-hidden className="deck-blob-a"
        style={blob({ top: "-28%", right: "-16%", width: "70vw", height: "70vw", background: "radial-gradient(circle at 50% 50%, rgba(247,203,160,0.95), rgba(247,214,180,0.5) 42%, rgba(247,214,180,0) 70%)" })} />
      <div aria-hidden className="deck-blob-b"
        style={blob({ bottom: "-32%", left: "-20%", width: "60vw", height: "60vw", background: "radial-gradient(circle at 50% 50%, rgba(120,180,140,0.34), rgba(120,180,140,0) 68%)" })} />

      <motion.div variants={stagger()} initial="hidden" animate="show" exit="exit"
        style={{ position: "relative", zIndex: 1, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "clamp(34px, 4.4vw, 64px)" }}>
        <motion.div variants={item}
          style={{ backgroundImage: `url(${LOGO})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "left center", width: "clamp(112px, 10vw, 148px)", height: "clamp(75px, 6.8vw, 99px)", flexShrink: 0 }} />
        <motion.div variants={stagger(0.12, 0)} style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 2vw, 32px)", maxWidth: "min(960px, 78%)" }}>
          <motion.h1 variants={item}
            style={{ margin: 0, fontWeight: 700, fontSize: "clamp(38px, 6.6vw, 96px)", lineHeight: 1.0, letterSpacing: "-0.03em" }}>
            <span style={{ color: "#16291C" }}>Superpower your underwriters with AI.</span><br />
            <span style={{ color: "#2D6A3F" }}>Serve more of your community.</span>
          </motion.h1>
          <motion.p variants={item}
            style={{ margin: 0, color: "#5A7060", fontSize: "clamp(15px, 1.5vw, 22px)", lineHeight: 1.45, letterSpacing: "-0.005em", maxWidth: "820px" }}>
            Kita is responsible AI for community lenders. Every recommendation cited and auditable, every decision still yours, so a small team can say yes to more of your community.
          </motion.p>
        </motion.div>
        <motion.div variants={item}
          style={{ color: "#8E9991", fontSize: "clamp(11px, 1vw, 14px)", letterSpacing: "0.06em", lineHeight: 1.6 }}>
          KITA TECHNOLOGIES INC.{"   "}·{"   "}KITA.AI{"   "}·{"   "}CONFIDENTIAL
        </motion.div>
      </motion.div>
    </div>
  );
}
