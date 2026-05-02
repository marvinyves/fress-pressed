// Fresh Vending — Hero (image-led)
// Big full-bleed orange-grove image with the headline laid over it.

const { Reveal, Arrow, Star6 } = window.FV;

function Hero() {
  return (
    <section id="top" style={{ position: 'relative', paddingTop: 0, paddingBottom: 0, overflow: 'hidden' }}>
      {/* === Image stage === */}
      <div className="hero-stage" style={{
        position: 'relative',
        width: '100%',
        minHeight: 'min(820px, 92vh)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
        {/* Background image */}
        <img
          src="assets/oranges-hero.jpeg"
          alt="Oranges ripening on the tree in golden afternoon light"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            zIndex: 0,
          }}
        />

        {/* Soft gradient — readability for left-aligned text + fade into page */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, rgba(20,28,8,0.55) 0%, rgba(20,28,8,0.30) 35%, rgba(20,28,8,0.05) 60%, rgba(20,28,8,0) 100%), linear-gradient(180deg, rgba(20,28,8,0.0) 50%, rgba(20,28,8,0.45) 100%)',
          zIndex: 1,
        }} />

        {/* Top-left chip */}
        <div className="container" style={{
          position: 'absolute', top: 110, left: '50%', transform: 'translateX(-50%)',
          zIndex: 4, paddingTop: 0,
        }}>
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '10px 16px',
                background: 'rgba(255,255,255,0.92)',
                backdropFilter: 'blur(10px)',
                borderRadius: 999,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#2A1305',
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: 999, background: '#FF6A00',
                  animation: 'pulse 1.6s ease-in-out infinite',
                }} />
                Now squeezing in Kuala Lumpur
              </span>
            </div>
          </Reveal>
        </div>

        {/* Headline + sub + CTAs — bottom-anchored content */}
        <div className="container" style={{
          position: 'relative',
          zIndex: 4,
          paddingTop: 240,
          paddingBottom: 80,
        }}>
          <Reveal delay={80}>
            <h1 className="display" style={{
              maxWidth: 1100,
              color: '#FFF7E8',
              textShadow: '0 2px 24px rgba(31,36,16,0.35), 0 1px 0 rgba(0,0,0,0.15)',
            }}>
              Real <em style={{ color: '#FFB347', fontStyle: 'italic' }}>oranges</em>,<br />
              squeezed for you<br />
              <span style={{ color: 'rgba(255,247,232,0.78)', fontStyle: 'italic' }}>in thirty seconds.</span>
            </h1>
          </Reveal>

          <div className="hero-row" style={{
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr',
            gap: 48,
            alignItems: 'end',
            marginTop: 40,
          }}>
            <Reveal delay={180}>
              <p style={{
                fontSize: 19, lineHeight: 1.55,
                color: 'rgba(255,247,232,0.92)',
                maxWidth: 560,
                textWrap: 'pretty',
                textShadow: '0 1px 12px rgba(31,36,16,0.4)',
              }}>
                Fresh Pressed machines press whole Valencia oranges on demand —
                no concentrate, no preservatives, no waiting. A cold cup of the real
                thing, tucked into KL's busiest lifestyle, retail and wellness destinations.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="#partner" className="btn btn-orange">
                  Host a machine <Arrow />
                </a>
                <a href="#how" className="btn" style={{
                  background: 'rgba(255,255,255,0.14)',
                  color: '#FFF7E8',
                  border: '1px solid rgba(255,255,255,0.30)',
                  backdropFilter: 'blur(8px)',
                }}>
                  Watch it squeeze
                </a>
              </div>
            </Reveal>
          </div>
        </div>

      </div>

      {/* === Stats strip below the image === */}
      <div className="container" style={{ paddingTop: 56, paddingBottom: 24 }}>
        <Reveal delay={120}>
          <div className="stats-strip" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0,
            borderTop: '1px solid var(--rim)',
            borderBottom: '1px solid var(--rim)',
            padding: '28px 0',
          }}>
            {[
              { v: 30, suf: 's', label: 'From whole fruit to your cup' },
              { v: 4, suf: '', label: 'Oranges in every 250 ml' },
              { v: 3, suf: '', label: 'Machines Available for KL' },
              { v: 0, suf: '', label: 'Concentrate · ever' },
            ].map((s, i) => (
              <div key={i} className="stat-cell" style={{
                padding: '0 24px',
                borderRight: i < 3 ? '1px solid var(--rim)' : 'none',
              }}>
                <div style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: 56, lineHeight: 1,
                  letterSpacing: '-0.03em',
                  color: 'var(--ink)',
                  marginBottom: 8,
                }}>
                  <window.FV.Counter to={s.v} suffix={s.suf} durationMs={1400 + i * 200} />
                </div>
                <div style={{ fontSize: 13, color: 'var(--muted)', textWrap: 'balance' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,106,0,0.6); }
          50% { box-shadow: 0 0 0 6px rgba(255,106,0,0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 860px) {
          .hero-row { grid-template-columns: 1fr !important; }
          .stats-strip { grid-template-columns: repeat(2, 1fr) !important; }
          .stat-cell { padding: 16px 12px !important; border-right: none !important; }
          .hero-price-card { right: 16px !important; top: 140px !important; padding: 14px 18px !important; min-width: 0 !important; }
          .hero-price-card div:last-child { font-size: 28px !important; }
          .hero-caption { display: none; }
        }
      `}</style>
    </section>
  );
}

window.FVHero = Hero;
