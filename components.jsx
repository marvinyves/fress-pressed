// Fresh Vending — landing page components

const { useState, useEffect, useRef } = React;

// Inline SVGs ----------------------------------------------------------------

const LeafIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 4c-9 0-14 5-14 12 0 2 .5 3 .5 3M6 17c4-7 8-9 14-10" />
  </svg>
);

const Arrow = ({ size = 16 }) => (
  <svg className="arrow" width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const Star6 = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
  </svg>
);

// Brand mark — Fresh Pressed logo: orange circle with leaf sprig
const BrandMark = ({ size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer arc left */}
    <path d="M 30 160 A 90 90 0 0 1 30 50" stroke="#F5A623" strokeWidth="7" fill="none" strokeLinecap="round"/>
    {/* Outer arc right */}
    <path d="M 170 50 A 90 90 0 0 1 170 160" stroke="#F5A623" strokeWidth="7" fill="none" strokeLinecap="round"/>
    {/* Main circle */}
    <circle cx="100" cy="115" r="52" stroke="#F5A623" strokeWidth="6" fill="none"/>
    {/* Inner circle */}
    <circle cx="100" cy="115" r="36" stroke="#F5A623" strokeWidth="4" fill="none" opacity="0.6"/>
    {/* Stem */}
    <path d="M100 80 Q98 60 88 45" stroke="#5BA832" strokeWidth="4" fill="none" strokeLinecap="round"/>
    {/* Left leaf cluster */}
    <path d="M88 45 Q72 28 60 32 Q68 48 88 45Z" fill="#5BA832"/>
    <path d="M88 52 Q70 40 58 48 Q68 60 88 52Z" fill="#5BA832"/>
    <path d="M92 60 Q76 52 68 62 Q78 70 92 60Z" fill="#5BA832"/>
    {/* Right leaf cluster */}
    <path d="M95 42 Q100 24 116 22 Q114 40 95 42Z" fill="#5BA832"/>
    <path d="M98 50 Q108 32 126 34 Q120 50 98 50Z" fill="#5BA832"/>
    <path d="M100 58 Q112 44 128 48 Q120 62 100 58Z" fill="#5BA832"/>
    {/* Center leaf */}
    <path d="M93 46 Q96 30 104 28 Q106 44 93 46Z" fill="#5BA832" opacity="0.85"/>
  </svg>
);

// Animated counter ------------------------------------------------------------

function useCounter(target, durationMs = 1400, startWhen = true) {
  const [val, setVal] = useState(0);
  const startedRef = useRef(false);
  useEffect(() => {
    if (!startWhen || startedRef.current) return;
    startedRef.current = true;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [startWhen, target, durationMs]);
  return val;
}

function useInView(ref, threshold = 0.2) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

function Counter({ to, format = (n) => Math.round(n).toLocaleString(), suffix = '', durationMs = 1600 }) {
  const ref = useRef(null);
  const inView = useInView(ref, 0.4);
  const v = useCounter(to, durationMs, inView);
  return <span ref={ref}>{format(v)}{suffix}</span>;
}

// Reveal wrapper --------------------------------------------------------------

function Reveal({ children, delay = 0, as = 'div', className = '', style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, 0.15);
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'in' : ''} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

window.FV = {
  LeafIcon, Arrow, Star6, BrandMark,
  Counter, Reveal, useInView, useCounter,
};
