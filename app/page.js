"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Gate() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | loading | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(data.error || "Incorrect password. Try again.");
        return;
      }
      router.push("/deck");
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <main
      style={{
        position: "relative",
        minHeight: "100dvh",
        width: "100%",
        background: "#F5F2EB",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      {/* Peach gradient blob */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-20%",
          right: "-15%",
          width: "min(1100px, 95vw)",
          height: "min(1100px, 95vw)",
          borderRadius: "50%",
          filter: "blur(8px)",
          opacity: 0.9,
          backgroundImage:
            "radial-gradient(circle farthest-corner at 70% 35% in oklab, oklab(92% 0.020 0.060 / 90%) 0%, oklab(88% 0.040 0.080 / 70%) 30%, oklab(85% 0.050 0.040 / 40%) 55%, oklab(0% 0 0 / 0%) 85%)",
          pointerEvents: "none",
        }}
      />

      {/* Logo top-left */}
      <img
        src="/kita-green.png"
        alt="Kita"
        style={{ position: "absolute", top: "clamp(28px,4vw,44px)", left: "clamp(28px,4vw,64px)", height: "clamp(56px,7vw,82px)", width: "auto" }}
      />

      {/* Gate card */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "460px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "20px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontFamily: "'Geist', sans-serif",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.02,
            color: "#0A1F0F",
            fontSize: "clamp(44px, 8vw, 68px)",
          }}
        >
          Enter password.
        </h1>
        <p style={{ margin: 0, color: "#5A7060", fontSize: "clamp(15px,2.4vw,17px)", lineHeight: 1.5, maxWidth: "30ch" }}>
          Enter the password to view the Kita deck for community lenders.
        </p>

        <form onSubmit={onSubmit} style={{ width: "100%", display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px" }}>
          <div style={{ position: "relative", width: "100%" }}>
            <input
              type={showPassword ? "text" : "password"}
              required
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              aria-label="Password"
              style={{
                width: "100%",
                padding: "15px 50px 15px 18px",
                fontSize: "16px",
                fontFamily: "'Geist', sans-serif",
                background: "#FFFFFF",
                border: "1px solid #D0CCC0",
                borderRadius: "10px",
                color: "#0A1F0F",
                outline: "none",
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              title={showPassword ? "Hide password" : "Show password"}
              style={{
                position: "absolute",
                top: "50%",
                right: "12px",
                transform: "translateY(-50%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "6px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "#8A9E8F",
                lineHeight: 0,
              }}
            >
              {showPassword ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                  <line x1="2" y1="2" x2="22" y2="22" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              width: "100%",
              padding: "15px",
              fontSize: "15px",
              fontFamily: "'Geist', sans-serif",
              fontWeight: 600,
              color: "#FFFFFF",
              background: "#2D6A3F",
              border: "none",
              borderRadius: "10px",
              cursor: status === "loading" ? "default" : "pointer",
              opacity: status === "loading" ? 0.7 : 1,
              transition: "opacity 150ms ease, background 150ms ease",
            }}
          >
            {status === "loading" ? "Unlocking…" : "Continue  →"}
          </button>
          {error ? (
            <span style={{ color: "#C0392B", fontSize: "13px", fontFamily: "'Geist', sans-serif" }}>{error}</span>
          ) : null}
        </form>

        <p
          style={{
            margin: "8px 0 0",
            fontFamily: "'Geist Mono', monospace",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#8A9E8F",
          }}
        >
          Kita · Community Lending
        </p>
      </div>
    </main>
  );
}
