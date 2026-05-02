// Fresh Pressed — About Us page

const { Reveal } = window.FV;

function AboutPage() {
  return (
    <main style={{ paddingTop: 100, background: 'var(--bg)' }}>

      {/* Hero */}
      <section style={{ paddingTop: 72, paddingBottom: 80 }}>
        <div className="container">
          <Reveal>
            <span className="mono" style={{
              fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--orange)', display: 'block', marginBottom: 20,
            }}>Our Story</span>
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
              About<br />
              <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Fresh Pressed.</em>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p style={{
              marginTop: 32,
              fontSize: 22,
              lineHeight: 1.5,
              color: 'var(--muted)',
              maxWidth: 640,
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
            }}>
              Some things shouldn't be complicated. Fresh orange juice is one of them.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Image + intro */}
      <section style={{ paddingBottom: 96 }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'center',
          }} className="about-grid">
            <Reveal delay={80}>
              <div>
                <p style={{ fontSize: 17, lineHeight: 1.72, color: 'var(--ink)', marginBottom: 24 }}>
                  Fresh Pressed is a Kuala Lumpur–based fresh juice company on a simple mission: to make real,
                  cold-pressed orange juice available to everyone — no concentrates, no additives, no compromise.
                  Just oranges, pressed on the spot, sealed and ready in under a minute.
                </p>
                <p style={{ fontSize: 17, lineHeight: 1.72, color: 'var(--ink)', marginBottom: 24 }}>
                  It started, like most good things, with a kid. Our daughter has always loved fresh orange juice —
                  not the bottled kind, not the powdered kind, the real kind. Watching her light up over a simple
                  glass of freshly squeezed juice made us ask a question we couldn't shake: why is something this
                  pure so hard to find?
                </p>
                <p style={{ fontSize: 17, lineHeight: 1.72, color: 'var(--ink)' }}>
                  That question became an obsession. That obsession became Fresh Pressed.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div style={{
                borderRadius: 24,
                overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(31,36,16,0.12)',
              }}>
                <img
                  src="uploads/img6.png"
                  alt="The Fresh Pressed family — where it all began"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section style={{
        background: 'var(--ink)',
        padding: '80px 0',
      }}>
        <div className="container">
          <Reveal>
            <blockquote style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(28px, 4vw, 52px)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--bg)',
              maxWidth: 820,
              margin: 0,
              textWrap: 'balance',
            }}>
              "This is a family mission, and every cup we serve carries that spirit."
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Why we built it */}
      <section style={{ padding: '96px 0' }}>
        <div className="container">
          <div style={{ maxWidth: 720 }}>
            <Reveal>
              <span className="mono" style={{
                fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--muted)', display: 'block', marginBottom: 24,
              }}>Why we built this</span>
            </Reveal>
            <Reveal delay={60}>
              <p style={{ fontSize: 17, lineHeight: 1.72, color: 'var(--ink)', marginBottom: 24 }}>
                We started with one question: why is it so hard to find genuinely fresh juice in a city as vibrant
                as KL? The options were either overpriced café drinks or bottled juices loaded with sugar and shelf
                life. We knew there was a better way.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p style={{ fontSize: 17, lineHeight: 1.72, color: 'var(--ink)', marginBottom: 24 }}>
                Our machines squeeze fresh Valencia oranges to order, seal every cup with a tamper-evident film,
                and chill it to 4°C — all automatically, all in front of you. No human hands. No mystery
                ingredients. What you see is what you drink.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p style={{ fontSize: 17, lineHeight: 1.72, color: 'var(--ink)' }}>
                You'll find us in the spaces where KL lives — in lifestyle hubs, premium malls, cultural centers,
                and residential neighborhoods. We're not a franchise. We're not a chain. We're a small operation
                that cares deeply about one thing: putting a genuinely good cup of juice in your hand at a price
                that makes sense.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section style={{
        borderTop: '1px solid var(--rim)',
        padding: '80px 0',
        background: 'var(--bg)',
      }}>
        <div className="container">
          <Reveal>
            <p style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(24px, 3.5vw, 44px)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              maxWidth: 700,
              textWrap: 'balance',
            }}>
              Fresh Pressed. Nothing added. Nothing hidden.{' '}
              <em style={{ color: 'var(--orange)' }}>#Justjuice</em>
            </p>
          </Reveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </main>
  );
}

window.FVAbout = AboutPage;
