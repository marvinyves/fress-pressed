// Fresh Pressed — Sustainability page

const { Reveal } = window.FV;

const peelInitiatives = [
  {
    title: 'Natural cleaning products',
    body: 'Orange peel contains high concentrations of d-limonene, a powerful natural solvent used in eco-friendly surface cleaners, degreasers, and hand washes. We partner with local producers to convert our peel into cleaning products that replace harsh chemical alternatives.',
  },
  {
    title: 'Compost and soil amendment',
    body: 'Shredded orange peel breaks down into nutrient-rich compost. We supply peel to urban farming initiatives and community gardens across Kuala Lumpur, turning our daily waste into fuel for someone else\'s growth.',
  },
  {
    title: 'Natural fragrance and essential oils',
    body: 'Cold-pressed orange peel oil is widely used in aromatherapy, candles, and natural cosmetics. We\'re exploring partnerships with local artisan producers to extract and repurpose this byproduct.',
  },
  {
    title: 'Animal feed supplement',
    body: 'Dried citrus peel is a recognised nutritional supplement for livestock. We work with smallholder farms to ensure no peel goes to waste when other channels are at capacity.',
  },
];

const schoolBenefits = [
  'A dedicated planting day, led by the students themselves',
  'Ongoing resources to track and care for their trees',
  'A living connection to where their food and environment comes from',
];

function SustainabilityPage() {
  return (
    <main style={{ paddingTop: 100, background: 'var(--bg)' }}>

      {/* Hero */}
      <section style={{ paddingTop: 72, paddingBottom: 80 }}>
        <div className="container">
          <Reveal>
            <span className="mono" style={{
              fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--orange)', display: 'block', marginBottom: 20,
            }}>Our commitment</span>
          </Reveal>
          <Reveal delay={60}>
            <h1 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(48px, 7vw, 96px)',
              lineHeight: 0.96,
              letterSpacing: '-0.03em',
              color: 'var(--ink)',
              maxWidth: 900,
              textWrap: 'balance',
            }}>
              Every orange<br />
              <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>has more to give.</em>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p style={{
              marginTop: 32, fontSize: 18, lineHeight: 1.65,
              color: 'var(--muted)', maxWidth: 620,
            }}>
              At Fresh Pressed, we believe a good business shouldn't just take from the world — it should give
              something back. That starts with how we think about waste. And in a juice business, the biggest
              question is simple: what happens to the peel?
            </p>
          </Reveal>
        </div>
      </section>

      {/* KL image */}
      <section style={{ paddingBottom: 96 }}>
        <div className="container">
          <Reveal>
            <div style={{
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(31,36,16,0.10)',
            }}>
              <img
                src="uploads/img1.png"
                alt="Fresh Pressed across Kuala Lumpur"
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: 480, objectFit: 'cover' }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Peel waste section */}
      <section style={{ paddingBottom: 96 }}>
        <div className="container">
          <Reveal>
            <span className="mono" style={{
              fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--muted)', display: 'block', marginBottom: 16,
            }}>Zero peel to landfill</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(32px, 4vw, 56px)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              maxWidth: 700,
              marginBottom: 24,
              textWrap: 'balance',
            }}>
              Turning waste into something worthwhile.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p style={{ fontSize: 17, lineHeight: 1.72, color: 'var(--ink)', maxWidth: 680, marginBottom: 56 }}>
              Every cup of Fresh Pressed juice leaves behind one thing — the peel. Multiply that by hundreds of
              cups a day across our locations, and you have a serious amount of orange peel that could easily end
              up in a landfill. We decided it wouldn't. Orange peel is remarkably useful.
            </p>
          </Reveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 2,
          }} className="peel-grid">
            {peelInitiatives.map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div style={{
                  padding: '36px 32px',
                  background: i % 2 === 0 ? 'var(--ink)' : 'color-mix(in oklab, var(--ink) 85%, var(--bg))',
                  borderRadius: i === 0 ? '20px 0 0 0' : i === 1 ? '0 20px 0 0' : i === 2 ? '0 0 0 20px' : '0 0 20px 0',
                }}>
                  <div style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: 22,
                    color: 'var(--orange-soft)',
                    marginBottom: 12,
                  }}>{item.title}</div>
                  <p style={{
                    fontSize: 15, lineHeight: 1.65,
                    color: 'color-mix(in oklab, var(--bg) 70%, var(--ink))',
                  }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div style={{
              marginTop: 40,
              padding: '24px 32px',
              borderLeft: '3px solid var(--orange)',
              background: 'color-mix(in oklab, var(--orange) 8%, var(--bg))',
              borderRadius: '0 12px 12px 0',
            }}>
              <p style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 20,
                fontStyle: 'italic',
                color: 'var(--ink)',
              }}>
                Our goal is simple: <strong style={{ fontStyle: 'normal' }}>zero peel to landfill.</strong>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tree planting section */}
      <section style={{
        background: 'var(--ink)',
        padding: '96px 0',
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: 80,
            alignItems: 'start',
          }} className="trees-grid">
            <div>
              <Reveal>
                <span className="mono" style={{
                  fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'color-mix(in oklab, var(--bg) 55%, var(--ink))', display: 'block', marginBottom: 20,
                }}>Planting roots</span>
              </Reveal>
              <Reveal delay={60}>
                <h2 style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  color: 'var(--bg)',
                  marginBottom: 28,
                  textWrap: 'balance',
                }}>
                  Planting roots in the community.
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p style={{ fontSize: 16, lineHeight: 1.72, color: 'color-mix(in oklab, var(--bg) 75%, var(--ink))', marginBottom: 20 }}>
                  Fresh juice comes from healthy trees. Healthy trees come from healthy ecosystems. That's why a
                  percentage of every Fresh Pressed profit goes directly into tree-planting initiatives — not through
                  a distant corporate fund, but right here in KL, through partnerships with local schools.
                </p>
              </Reveal>
              <Reveal delay={130}>
                <p style={{ fontSize: 16, lineHeight: 1.72, color: 'color-mix(in oklab, var(--bg) 75%, var(--ink))' }}>
                  We believe the best place to plant a tree is in a child's memory. Through our school partnership
                  programme, students don't just learn about trees — they plant them, name them, and watch them grow.
                </p>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <div>
                <div className="mono" style={{
                  fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'color-mix(in oklab, var(--bg) 50%, var(--ink))', marginBottom: 20,
                }}>Every school receives</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {schoolBenefits.map((b, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      gap: 16,
                      padding: '20px 0',
                      borderTop: '1px solid rgba(255,255,255,0.1)',
                      borderBottom: i === schoolBenefits.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    }}>
                      <span style={{
                        width: 8, height: 8, borderRadius: 999,
                        background: 'var(--orange)', marginTop: 7, flexShrink: 0,
                      }} />
                      <span style={{ fontSize: 16, lineHeight: 1.6, color: 'color-mix(in oklab, var(--bg) 80%, var(--ink))' }}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
                <p style={{
                  marginTop: 28, fontSize: 15, lineHeight: 1.65,
                  fontStyle: 'italic',
                  fontFamily: "'Instrument Serif', serif",
                  color: 'color-mix(in oklab, var(--bg) 60%, var(--ink))',
                }}>
                  Trees planted today will clean the air, cool the streets, and feed communities for decades.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section style={{ padding: '96px 0', borderBottom: '1px solid var(--rim)' }}>
        <div className="container">
          <div style={{ maxWidth: 680 }}>
            <Reveal>
              <span className="mono" style={{
                fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--muted)', display: 'block', marginBottom: 24,
              }}>Our commitment</span>
            </Reveal>
            <Reveal delay={60}>
              <p style={{ fontSize: 17, lineHeight: 1.72, color: 'var(--ink)', marginBottom: 20 }}>
                We're a small operation. We don't pretend to have it all figured out. But we're committed to being
                honest about where we are, transparent about where we're going, and relentless about doing better.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 'clamp(22px, 3vw, 36px)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                color: 'var(--ink)',
              }}>
                Fresh Pressed is juice with a conscience —{' '}
                <em style={{ color: 'var(--orange)' }}>and we intend to keep earning that.</em>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .peel-grid { grid-template-columns: 1fr !important; }
          .trees-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </main>
  );
}

window.FVSustainability = SustainabilityPage;
