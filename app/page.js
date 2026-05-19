'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Slide00Gate,
  Slide01Hero,
  Slide02WhoItsFor,
  Slide03AboutKita,
  Slide04ThroughTheYears,
  Slide05TraditionalVsKita,
  Slide06ProductOverview,
  Slide07ReadAnything,
  Slide08ClassifyExtract,
  Slide09FraudSignals,
  Slide10CreditInsights,
  Slide11CustomAnalysis,
  Slide12DocumentCoverage,
  Slide13HitlReview,
  Slide14ComparedToIndustry,
  Slide15CustomerOutcomes,
  Slide16Integration,
  Slide17LiveDemo,
  Slide18CTA,
} from '@/components/slides';

const SLIDES = [
  Slide00Gate,
  Slide01Hero,
  Slide02WhoItsFor,
  Slide03AboutKita,
  Slide04ThroughTheYears,
  Slide05TraditionalVsKita,
  Slide06ProductOverview,
  Slide07ReadAnything,
  Slide08ClassifyExtract,
  Slide09FraudSignals,
  Slide10CreditInsights,
  Slide11CustomAnalysis,
  Slide12DocumentCoverage,
  Slide13HitlReview,
  Slide14ComparedToIndustry,
  Slide15CustomerOutcomes,
  Slide16Integration,
  Slide17LiveDemo,
  Slide18CTA,
];

const TOTAL = SLIDES.length;
const SLIDE_W = 1440;
const SLIDE_H = 900;

export default function Deck() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scale, setScale] = useState(1);
  const currentRef = useRef(0);
  const transitioning = useRef(false);

  // Keep ref in sync
  useEffect(() => { currentRef.current = current; }, [current]);

  // Scale to fit viewport
  useEffect(() => {
    const update = () =>
      setScale(Math.min(window.innerWidth / SLIDE_W, window.innerHeight / SLIDE_H));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Fade-transition to a slide index
  const goTo = useCallback((index) => {
    const target = Math.max(0, Math.min(index, TOTAL - 1));
    if (target === currentRef.current || transitioning.current) return;
    transitioning.current = true;
    setVisible(false);
    setTimeout(() => {
      setCurrent(target);
      setVisible(true);
      setTimeout(() => { transitioning.current = false; }, 200);
    }, 200);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(currentRef.current + 1);
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goTo(currentRef.current - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goTo]);

  const isGate = current === 0;
  const progress = ((current / (TOTAL - 1)) * 100).toFixed(2);
  const SlideComponent = SLIDES[current];

  const navBtn = (onClick, label, side) => (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        position: 'fixed',
        top: '50%',
        [side]: '16px',
        transform: 'translateY(-50%)',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.12)',
        color: 'rgba(255,255,255,0.5)',
        fontSize: '18px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 200,
        transition: 'background 150ms ease, color 150ms ease',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.16)'; e.currentTarget.style.color = 'rgba(255,255,255,0.9)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
    >
      {side === 'left' ? '←' : '→'}
    </button>
  );

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#000', overflow: 'hidden' }}>
      {/* Progress bar */}
      {!isGate && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '2px', background: 'rgba(255,255,255,0.08)', zIndex: 300 }}>
          <div style={{ height: '100%', background: '#4CAF72', width: `${progress}%`, transition: 'width 300ms ease' }} />
        </div>
      )}

      {/* Scaled slide */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: `${SLIDE_W}px`,
        height: `${SLIDE_H}px`,
        marginTop: `${-SLIDE_H / 2}px`,
        marginLeft: `${-SLIDE_W / 2}px`,
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
        opacity: visible ? 1 : 0,
        transition: 'opacity 200ms ease',
      }}>
        <SlideComponent />
      </div>

      {/* Navigation chrome — hidden on gate slide */}
      {!isGate && (
        <>
          {current > 0    && navBtn(() => goTo(current - 1), 'Previous slide', 'left')}
          {current < TOTAL - 1 && navBtn(() => goTo(current + 1), 'Next slide', 'right')}

          {/* Slide counter */}
          <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '24px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.08em',
            zIndex: 200,
            pointerEvents: 'none',
          }}>
            {String(current + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
          </div>
        </>
      )}
    </div>
  );
}
