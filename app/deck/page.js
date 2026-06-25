"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SLIDES } from "@/components/deck/Slides";
import CustomCursor from "@/components/CustomCursor";

const TOTAL = SLIDES.length;
const W = 1440;
const H = 900;

export default function Deck() {
  const [current, setCurrent] = useState(0);
  const [scale, setScale] = useState(1);
  const curRef = useRef(0);
  const lock = useRef(false);
  const touchX = useRef(null);
  const wheelTs = useRef(0);

  useEffect(() => { curRef.current = current; }, [current]);

  useEffect(() => {
    const update = () => setScale(Math.min(window.innerWidth / W, window.innerHeight / H));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const goTo = useCallback((i) => {
    const t = Math.max(0, Math.min(i, TOTAL - 1));
    if (t === curRef.current || lock.current) return;
    lock.current = true;
    setCurrent(t);
    setTimeout(() => { lock.current = false; }, 500);
  }, []);
  const next = useCallback(() => goTo(curRef.current + 1), [goTo]);
  const prev = useCallback(() => goTo(curRef.current - 1), [goTo]);

  useEffect(() => {
    const onKey = (e) => {
      if (["ArrowRight", "ArrowDown", " ", "PageDown"].includes(e.key)) { e.preventDefault(); next(); }
      if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const onWheel = (e) => {
    const now = Date.now();
    if (now - wheelTs.current < 700) return;
    if (Math.abs(e.deltaY) < 24 && Math.abs(e.deltaX) < 24) return;
    wheelTs.current = now;
    (e.deltaY > 0 || e.deltaX > 0) ? next() : prev();
  };
  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (dx < -50) next();
    if (dx > 50) prev();
    touchX.current = null;
  };

  const slide = SLIDES[current];
  const Slide = slide.Component;
  const progress = (current / (TOTAL - 1)) * 100;
  const barTop = "calc(100% - 7px)";

  const arrow = (onClick, side) => (
    <button
      onClick={onClick}
      aria-label={side === "left" ? "Previous" : "Next"}
      style={{
        position: "fixed", top: "50%", [side]: 20, transform: "translateY(-50%)",
        width: 46, height: 46, borderRadius: "50%", zIndex: 50, cursor: "pointer",
        background: "rgba(255,255,255,0.72)", border: "1px solid rgba(0,0,0,0.10)",
        color: "#2D6A3F", fontSize: 18, display: "flex", alignItems: "center",
        justifyContent: "center", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)", transition: "transform 200ms ease, background 200ms ease",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(1.12)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}
    >
      {side === "left" ? "←" : "→"}
    </button>
  );

  return (
    <div
      onWheel={onWheel}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{ position: "fixed", inset: 0, background: "#F5F2EB", overflow: "hidden" }}
    >
      <CustomCursor />

      {/* progress */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, background: "rgba(0,0,0,0.06)", zIndex: 60 }}>
        <div style={{ height: "100%", width: `${progress}%`, background: "#2D6A3F", transition: "width 320ms ease" }} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          style={{ position: "absolute", inset: 0 }}
        >
          {slide.fullBleed ? (
            <Slide />
          ) : (
            <div style={{
              position: "absolute", top: "50%", left: "50%", width: W, height: H,
              transform: `translate(-50%, -50%) scale(${scale})`, transformOrigin: "center",
            }}>
              <div className="deck-stage deck-anim is-in" style={{ width: W, height: H }}>
                <Slide />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* full-width green base aligned to the slide's bottom edge */}
      <div style={{ position: "fixed", left: 0, right: 0, height: 7, background: "#2D6A3F", zIndex: 40, top: barTop }} />

      {current > 0 && arrow(prev, "left")}
      {current < TOTAL - 1 && arrow(next, "right")}

      {/* counter */}
      <div style={{ position: "fixed", bottom: 20, right: 24, fontFamily: "'Geist Mono', monospace", fontSize: 12, letterSpacing: "0.08em", color: "#8A9E8F", zIndex: 50, pointerEvents: "none" }}>
        {String(current + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
      </div>

      {/* dots */}
      <div style={{ position: "fixed", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 7, zIndex: 50 }}>
        {SLIDES.map((s, i) => (
          <button key={s.id} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
            style={{ width: i === current ? 20 : 7, height: 7, borderRadius: 4, border: "none", cursor: "pointer", padding: 0,
              background: i === current ? "#2D6A3F" : "rgba(0,0,0,0.16)", transition: "all 240ms ease" }} />
        ))}
      </div>
    </div>
  );
}
