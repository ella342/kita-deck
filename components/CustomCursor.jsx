"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return; // skip touch/coarse pointers
    const d = dot.current;
    const r = ring.current;
    if (!d || !r) return;

    let x = 0, y = 0, rx = 0, ry = 0, shown = false, big = false, raf = 0;

    const onMove = (e) => {
      x = e.clientX; y = e.clientY;
      d.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
      if (!shown) { shown = true; d.style.opacity = "1"; r.style.opacity = "1"; }
    };
    const onOver = (e) => {
      big = !!(e.target.closest && e.target.closest("button, a, input, [role='button'], [data-cursor='grow']"));
    };
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      r.style.transform = `translate(${rx - 16}px, ${ry - 16}px) scale(${big ? 1.8 : 1})`;
      raf = requestAnimationFrame(loop);
    };
    const onLeave = () => { d.style.opacity = "0"; r.style.opacity = "0"; shown = false; };

    // hide the native cursor everywhere within the deck
    const style = document.createElement("style");
    style.textContent = "html.kita-cursor, html.kita-cursor * { cursor: none !important; }";
    document.head.appendChild(style);
    document.documentElement.classList.add("kita-cursor");

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("kita-cursor");
      style.remove();
    };
  }, []);

  return (
    <>
      <div ref={dot} aria-hidden style={{ position: "fixed", top: 0, left: 0, width: 6, height: 6, borderRadius: "50%", backgroundColor: "#4CAF72", pointerEvents: "none", zIndex: 9999, opacity: 0, transition: "opacity 0.25s ease", willChange: "transform" }} />
      <div ref={ring} aria-hidden style={{ position: "fixed", top: 0, left: 0, width: 32, height: 32, borderRadius: "50%", border: "1.5px solid rgba(76,175,114,0.45)", pointerEvents: "none", zIndex: 9998, opacity: 0, transition: "opacity 0.25s ease, border-color 0.3s ease", willChange: "transform" }} />
    </>
  );
}
