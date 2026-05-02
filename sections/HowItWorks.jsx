// Fresh Vending — How it works: animated 30s sequence

const { Reveal, Arrow } = window.FV;
const { useState, useEffect, useRef } = React;

function HowItWorks() {
  const steps = [
    { t: 0,  pct: 0,   label: 'Tap to start',     detail: 'Pick your size on the touchscreen.' },
    { t: 6,  pct: 20,  label: 'Oranges drop',     detail: 'Four whole Egypt Valencias roll into the press.' },
    { t: 14, pct: 50,  label: 'Cold press',       detail: 'A direct screw press, peel-on, in seconds.' },
    { t: 22, pct: 78,  label: 'Pulp & pour',      detail: 'Strained to your preferred pulp level.' },
    { t: 30, pct: 100, label: 'Sealed & ready',   detail: 'Recyclable cup, lid on, into your hand.' },
  ];

  const [seconds, setSeconds] = useState(0);
  const [playing, setPlaying] = useState(false);
  const sectionRef = useRef(null);
  const rafRef = useRef(null);
  const startedAtRef = useRef(null);

  // Auto-start when in view
  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !playing && seconds === 0) setPlaying(true);
    }, { threshold: 0.4 });
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, [playing, seconds]);

  useEffect(() => {
    if (!playing) return;
    startedAtRef.current = performance.now() - seconds * 1000;
    const tick = (now) => {
      const elapsed = (now - startedAtRef.current) / 1000;
      if (elapsed >= 30) {
        setSeconds(30);
        setPlaying(false);
        return;
      }
      setSeconds(elapsed);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [playing]);

  const replay = () => { setSeconds(0); setPlaying(true); };

  // current active step
  const activeIdx = steps.reduce((acc, s, i) => seconds >= s.t ? i : acc, 0);
  const fillPct = Math.min(100, (seconds / 30) * 100);

  return (
    <section id="how" ref={sectionRef}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, marginBottom: 64, flexWrap: 'wrap' }}>
          <div>
            <Reveal>
              <span className="eyebrow"><span className="dot" />Thirty-second ritual</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="serif" style={{
                fontSize: 'clamp(40px, 5.5vw, 78px)',
                lineHeight: 0.98,
                letterSpacing: '-0.03em',
                marginTop: 18,
                maxWidth: 900,
                textWrap: 'balance',
              }}>
                From whole orange to <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>cold pour</em>, in the time it takes to tap your card.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <button onClick={replay} className="btn btn-ghost">
              {playing ? '● Squeezing…' : seconds >= 30 ? 'Replay' : 'Play'} <Arrow />
            </button>
          </Reveal>
        </div>

        {/* Stage */}
        <Reveal delay={120}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '420px 1fr',
            gap: 56,
            alignItems: 'stretch',
          }} className="how-grid">
            {/* Machine illustration */}
            <div style={{
              position: 'relative',
              borderRadius: 28,
              background: 'linear-gradient(180deg, var(--bg-2), var(--bg-3))',
              border: '1px solid var(--rim)',
              minHeight: 540,
              padding: 32,
              overflow: 'hidden',
            }}>
              <Machine seconds={seconds} fillPct={fillPct} activeIdx={activeIdx} />
            </div>

            {/* Step list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {/* Timer bar */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: 16,
              }}>
                <div className="mono" style={{
                  fontSize: 13,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                }}>
                  Elapsed
                </div>
                <div style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: 56,
                  lineHeight: 1,
                  color: 'var(--ink)',
                  fontVariantNumeric: 'tabular-nums',
                }}>
                  {seconds.toFixed(1)}<span style={{ fontSize: 22, color: 'var(--muted)' }}>s</span>
                </div>
              </div>
              <div style={{
                height: 4, background: 'var(--bg-3)', borderRadius: 999, marginBottom: 28, overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  width: `${fillPct}%`,
                  background: 'var(--orange)',
                  transition: 'width 100ms linear',
                }} />
              </div>

              <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 0 }}>
                {steps.map((s, i) => {
                  const done = seconds >= s.t;
                  const active = i === activeIdx;
                  return (
                    <li key={i} style={{
                      display: 'grid',
                      gridTemplateColumns: '60px 1fr auto',
                      gap: 20,
                      padding: '20px 0',
                      borderTop: i === 0 ? '1px solid var(--rim)' : 'none',
                      borderBottom: '1px solid var(--rim)',
                      alignItems: 'center',
                      opacity: done || active ? 1 : 0.45,
                      transition: 'opacity 400ms ease',
                    }}>
                      <div className="mono" style={{ color: 'var(--muted)', fontSize: 13 }}>
                        {String(s.t).padStart(2, '0')}s
                      </div>
                      <div>
                        <div style={{
                          fontFamily: "'Instrument Serif', serif",
                          fontSize: 26,
                          lineHeight: 1.1,
                          color: 'var(--ink)',
                        }}>
                          {s.label}
                        </div>
                        <div style={{ fontSize: 14, color: 'var(--muted)', marginTop: 4 }}>
                          {s.detail}
                        </div>
                      </div>
                      <div style={{
                        width: 24, height: 24, borderRadius: 999,
                        border: `1.5px solid ${done ? 'var(--orange)' : 'var(--rim)'}`,
                        background: done ? 'var(--orange)' : 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 320ms ease',
                      }}>
                        {done && (
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2.5 6.5 L5 9 L9.5 3.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 920px) {
          .how-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}

// Stylized SVG vending machine that animates with the timer
function Machine({ seconds, fillPct, activeIdx }) {
  // orange positions over time — they drop, then disappear into press
  const oranges = [
    { x: 86,  delay: 6.0 },
    { x: 116, delay: 6.6 },
    { x: 86,  delay: 7.2 },
    { x: 116, delay: 7.8 },
  ];
  const liquidH = Math.max(0, Math.min(120, ((seconds - 14) / 14) * 120));

  return (
    <svg viewBox="0 0 200 480" width="100%" height="100%" style={{ maxHeight: 480, display: 'block', margin: '0 auto' }}>
      {/* Ambient glow */}
      <defs>
        <radialGradient id="ambient" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="var(--orange)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--orange)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="juice" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#FFB347" />
          <stop offset="100%" stopColor="#FF6A00" />
        </linearGradient>
        <clipPath id="cup-clip">
          <path d="M70 360 L130 360 L124 440 L76 440 Z" />
        </clipPath>
      </defs>

      <rect x="0" y="0" width="200" height="480" fill="url(#ambient)" />

      {/* Machine body */}
      <rect x="20" y="20" width="160" height="440" rx="20" fill="var(--bg)" stroke="var(--rim)" strokeWidth="1.5" />

      {/* Top window — oranges hopper */}
      <rect x="40" y="40" width="120" height="160" rx="12" fill="color-mix(in oklab, var(--orange-soft) 35%, var(--bg))" stroke="var(--rim)" />

      {/* Oranges in hopper (always visible, jiggle subtly while playing) */}
      {[
        { x: 70, y: 90 }, { x: 100, y: 80 }, { x: 130, y: 95 },
        { x: 80, y: 130 }, { x: 120, y: 130 }, { x: 100, y: 165 },
      ].map((o, i) => (
        <g key={i} transform={`translate(${o.x} ${o.y})`}>
          <circle r="14" fill="#FF8A2A" />
          <circle r="14" fill="url(#orangeShade)" opacity="0.4" />
          <path d="M-2 -13 Q 0 -18 4 -14" stroke="#4D8A2E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>
      ))}
      <radialGradient id="orangeShade" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FFC56B" />
        <stop offset="100%" stopColor="#E54A00" />
      </radialGradient>

      {/* Dropping orange — appears between t=6 and t=14 */}
      {oranges.map((o, i) => {
        const localT = seconds - o.delay;
        if (localT < 0 || localT > 2) return null;
        const y = 200 + (localT / 2) * 60; // 200 -> 260
        const op = localT < 1.6 ? 1 : (2 - localT) / 0.4;
        return (
          <g key={`drop-${i}`} transform={`translate(${o.x} ${y})`} opacity={op}>
            <circle r="10" fill="#FF8A2A" />
            <circle r="10" fill="url(#orangeShade)" opacity="0.5" />
          </g>
        );
      })}

      {/* Press chamber */}
      <rect x="40" y="220" width="120" height="80" rx="10" fill="var(--bg-2)" stroke="var(--rim)" />
      <rect x="48" y="232" width="104" height="58" rx="6" fill="color-mix(in oklab, var(--ink) 8%, var(--bg))" />

      {/* Press piston — animates down between t=14 and t=22 */}
      {(() => {
        const pressT = Math.max(0, Math.min(1, (seconds - 14) / 8));
        const pY = 232 + pressT * 30;
        const wob = Math.sin(seconds * 8) * 0.5 * (pressT > 0 && pressT < 1 ? 1 : 0);
        return (
          <g transform={`translate(0 ${pY + wob})`}>
            <rect x="56" y="0" width="88" height="14" rx="3" fill="var(--ink)" opacity="0.85" />
            <rect x="60" y="14" width="80" height="6" rx="1" fill="var(--orange)" opacity={pressT > 0 ? 1 : 0} />
          </g>
        );
      })()}

      {/* Spout */}
      <rect x="92" y="300" width="16" height="22" rx="3" fill="var(--ink)" opacity="0.75" />

      {/* Stream — visible during pour t=18 to t=28 */}
      {(() => {
        const showStream = seconds > 18 && seconds < 28;
        if (!showStream) return null;
        return (
          <rect x="98" y="322" width="4" height="38" fill="url(#juice)">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="0.4s" repeatCount="indefinite" />
          </rect>
        );
      })()}

      {/* Cup */}
      <g>
        <path d="M70 360 L130 360 L124 440 L76 440 Z" fill="#fff" stroke="var(--rim)" strokeWidth="1.2" />
        {/* Liquid inside */}
        <g clipPath="url(#cup-clip)">
          <rect
            x="70"
            y={440 - liquidH}
            width="60"
            height={liquidH}
            fill="url(#juice)"
          />
          {/* surface ripple */}
          {liquidH > 4 && (
            <ellipse cx="100" cy={440 - liquidH} rx="28" ry="2.5" fill="#FFB347" opacity="0.7" />
          )}
        </g>
        {/* Lid — appears at end */}
        {seconds >= 28 && (
          <g style={{ transform: `translateY(${seconds < 29 ? (29 - seconds) * 30 : 0}px)`, transition: 'none' }}>
            <ellipse cx="100" cy="358" rx="32" ry="5" fill="var(--ink)" opacity="0.85" />
            <rect x="92" y="346" width="16" height="12" rx="2" fill="var(--ink)" opacity="0.7" />
          </g>
        )}
      </g>

      {/* Bottom panel — status text */}
      <rect x="40" y="408" width="120" height="36" rx="6" fill="var(--ink)" opacity="0.06" />
      <text x="100" y="430" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="var(--ink)" opacity="0.7" letterSpacing="1.5">
        {['READY','LOADING','PRESSING','POURING','ENJOY'][activeIdx] || 'READY'}
      </text>
    </svg>
  );
}

window.FVHow = HowItWorks;
