// Server Component — no client JS. Entry animation via the CSS `.deck-anim`
// stagger (globals.css); ambient rings/glow via their own CSS keyframes.
const LOGO = "https://app.paper.design/file-assets/01KRW9RKQ8CMS38RV87YYFQ9EV/1FGV0Y1WWTWNJ0FFJSZ15Z5QEW.png";

const ring = (size, color) => ({ position: "absolute", inset: 0, margin: "auto", width: size, height: size, borderRadius: "50%", border: `1px solid ${color}`, pointerEvents: "none" });

export default function U02About() {
  return (
    <div className="deck-anim is-in" style={{ position: "absolute", inset: 0, background: "#F4EFE3", overflow: "hidden", fontFamily: '"Geist", system-ui, sans-serif' }}>
      <div className="deck-glow" aria-hidden
        style={{ position: "absolute", inset: 0, margin: "auto", width: "92vmax", height: "92vmax", borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle at 50% 50%, rgba(76,175,114,0.18), rgba(76,175,114,0.06) 38%, rgba(76,175,114,0) 70%)" }} />
      <div className="deck-ring" aria-hidden style={{ ...ring("96vmax", "#2D6A3F1A"), animationDuration: "6s" }} />
      <div className="deck-ring" aria-hidden style={{ ...ring("72vmax", "#2D6A3F21"), animationDuration: "5s", animationDelay: "0.5s" }} />
      <div className="deck-ring" aria-hidden style={{ ...ring("52vmax", "#2D6A3F29"), animationDuration: "4.5s", animationDelay: "1s" }} />
      <div className="deck-ring" aria-hidden style={{ ...ring("34vmax", "#2D6A3F33"), animationDuration: "4s", animationDelay: "1.4s" }} />

      <div style={{ position: "absolute", top: "clamp(34px, 4.4vw, 48px)", right: "clamp(34px, 4.4vw, 64px)", color: "#8A9E8F", fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: "clamp(11px,1vw,14px)", fontWeight: 600, letterSpacing: "0.14em", opacity: 0.7, textTransform: "uppercase", zIndex: 2 }}>
        ABOUT KITA
      </div>

      <div
        style={{ position: "relative", zIndex: 1, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "clamp(18px, 2vw, 28px)", padding: "clamp(40px, 6vw, 96px)", textAlign: "center" }}>
        <div
          style={{ backgroundImage: `url(${LOGO})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", width: "clamp(200px, 22vw, 316px)", height: "clamp(134px, 14.7vw, 211px)", flexShrink: 0 }} />
        <h2
          style={{ margin: 0, fontWeight: 800, fontSize: "clamp(34px, 5.4vw, 64px)", lineHeight: 1.06, letterSpacing: "-0.03em" }}>
          <span style={{ color: "#1A3320" }}>Underwrite anyone</span><br />
          <span style={{ color: "#318857" }}>in minutes.</span>
        </h2>
        <p
          style={{ margin: 0, color: "#5A7A60", fontSize: "clamp(16px, 1.7vw, 24px)", lineHeight: 1.55, maxWidth: "min(760px, 92%)" }}>
          Kita reads messy borrower documents and turns them into clean, cited, decision-ready files , so your underwriters spend their time deciding, not chasing paper. Live with lenders in 4 markets.
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, marginTop: "clamp(8px,1vw,16px)" }}>
          <div style={{ color: "#0A1F0F", fontWeight: 800, fontSize: "clamp(30px, 3vw, 42px)", letterSpacing: "-0.03em", lineHeight: 1 }}>100K+</div>
          <div style={{ color: "#8A9E8F", fontFamily: '"Geist Mono", system-ui, sans-serif', fontSize: "clamp(10px,0.85vw,12px)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>borrower files</div>
        </div>
      </div>
    </div>
  );
}
