// Fresh Vending — Partner with us

const { Reveal, Arrow } = window.FV;

function Partner() {
  const [form, setForm] = React.useState({ name: '', org: '', location: '', traffic: '5000' });
  const [submitted, setSubmitted] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const locations = [
    { name: 'REX KL', area: 'Jalan Sultan · cultural quarter', status: 'Live' },
    { name: 'The Five', area: 'TTDI · lifestyle precinct',     status: 'Live' },
    { name: 'The Waterfront', area: 'Desa ParkCity · weekend hub', status: 'Live' },
    { name: 'Your venue', area: 'Mall · gym · office tower',   status: 'Open' },
  ];


  return (
    <section id="partner" style={{ background: 'var(--ink)', color: 'var(--bg)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80 }} className="partner-grid">
          {/* Left — pitch */}
          <div>
            <Reveal>
              <span className="eyebrow" style={{ color: 'var(--orange-soft)' }}>
                <span className="dot" style={{ background: 'var(--orange)' }} />Partner with us
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="serif" style={{
                fontSize: 'clamp(44px, 6vw, 92px)',
                lineHeight: 0.98,
                letterSpacing: '-0.03em',
                marginTop: 20,
                color: 'var(--bg)',
                textWrap: 'balance',
              }}>
                A 1 m<sup style={{ fontSize: '0.5em' }}>2</sup> footprint that pours <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>in a monthly income</em>.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p style={{
                marginTop: 28,
                fontSize: 18,
                lineHeight: 1.55,
                color: 'color-mix(in oklab, var(--bg) 75%, var(--ink))',
                maxWidth: 520,
                textWrap: 'pretty',
              }}>
                We own and operate every machine — you provide the foot traffic and a 13-amp socket.
                We split revenue, restock daily, and handle every spill. No franchise fees, no
                staff, no smell of fryer oil at 9 a.m.
              </p>
            </Reveal>

            {/* Bullet pillars */}
            <Reveal delay={240}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 24,
                marginTop: 48,
                paddingTop: 28,
                borderTop: '1px solid rgba(255,255,255,0.12)',
              }} className="pillars">
                {[
                  { k: 'Zero', v: 'Capex from you' },
                  { k: '24/7', v: 'Live monitoring' },
                ].map((p, i) => (
                  <div key={i}>
                    <div style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: 48,
                      lineHeight: 1,
                      color: 'var(--orange-soft)',
                      letterSpacing: '-0.03em',
                    }}>{p.k}</div>
                    <div style={{
                      marginTop: 8,
                      fontSize: 13,
                      color: 'color-mix(in oklab, var(--bg) 65%, var(--ink))',
                    }}>{p.v}</div>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>

          {/* Right — form */}
          <Reveal delay={140}>
            <div style={{
              background: 'color-mix(in oklab, var(--bg) 6%, var(--ink))',
              border: '1px solid rgba(255,255,255,0.14)',
              borderRadius: 24,
              padding: 36,
              position: 'sticky',
              top: 100,
            }}>
              <h3 className="serif" style={{
                fontSize: 32, lineHeight: 1.05, letterSpacing: '-0.02em',
                color: 'var(--bg)',
              }}>
                Host a machine.
              </h3>
              <p style={{
                marginTop: 10, fontSize: 14,
                color: 'color-mix(in oklab, var(--bg) 60%, var(--ink))',
              }}>
                Tell us about your venue. We'll be in touch within two business days.
              </p>

              {!submitted ? (
                <form onSubmit={submit} style={{ marginTop: 28, display: 'grid', gap: 18 }}>
                  <Field label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Aisha Tan" />
                  <Field label="Venue / company" value={form.org} onChange={(v) => setForm({ ...form, org: v })} placeholder="The Exchange TRX" />
                  <Field label="Location" value={form.location} onChange={(v) => setForm({ ...form, location: v })} placeholder="Tun Razak Exchange, KL" />

                  <div>
                    <label className="mono" style={{
                      fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'color-mix(in oklab, var(--bg) 60%, var(--ink))',
                      display: 'flex', justifyContent: 'space-between',
                    }}>
                      <span>Daily foot traffic</span>
                      <span style={{ color: 'var(--orange-soft)' }}>~ {Number(form.traffic).toLocaleString()}</span>
                    </label>
                    <input
                      type="range" min="500" max="50000" step="500"
                      value={form.traffic}
                      onChange={(e) => setForm({ ...form, traffic: e.target.value })}
                      style={{ width: '100%', marginTop: 10, accentColor: 'var(--orange)' }}
                    />
                  </div>

                  <button type="submit" className="btn btn-orange" style={{ marginTop: 12, justifyContent: 'center' }}>
                    Send venue details <Arrow />
                  </button>
                  <a
                    href="uploads/Fresh Pressed — Partnership.pdf"
                    download
                    className="btn"
                    style={{
                      marginTop: 10,
                      justifyContent: 'center',
                      display: 'flex',
                      background: 'rgba(255,255,255,0.08)',
                      color: 'var(--bg)',
                      border: '1px solid rgba(255,255,255,0.20)',
                      textDecoration: 'none',
                    }}
                  >
                    Download partnership inquiry <Arrow />
                  </a>
                </form>
              ) : (
                <div style={{
                  marginTop: 28,
                  padding: 28,
                  border: '1px solid rgba(255,255,255,0.14)',
                  borderRadius: 16,
                  textAlign: 'center',
                }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 999,
                    background: 'var(--orange)',
                    margin: '0 auto 16px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12 L10 17 L19 8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="serif" style={{ fontSize: 24, color: 'var(--bg)' }}>Squeezed.</div>
                  <p style={{ marginTop: 8, fontSize: 14, color: 'color-mix(in oklab, var(--bg) 60%, var(--ink))' }}>
                    We'll reach out to {form.name || 'you'} within two business days.
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 920px) {
          .partner-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .pillars { grid-template-columns: repeat(3, 1fr) !important; }
          .loc-row { grid-template-columns: 1fr auto !important; }
          .loc-row > div:nth-child(2) { display: none; }
        }
      `}</style>
    </section>
  );
}

function Field({ label, value, onChange, placeholder }) {
  return (
    <label style={{ display: 'block' }}>
      <span className="mono" style={{
        fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
        color: 'color-mix(in oklab, var(--bg) 60%, var(--ink))',
        display: 'block', marginBottom: 8,
      }}>{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          background: 'transparent',
          border: 'none',
          borderBottom: '1px solid rgba(255,255,255,0.18)',
          color: 'var(--bg)',
          fontSize: 18,
          fontFamily: "'Instrument Serif', serif",
          padding: '8px 0',
          outline: 'none',
          transition: 'border-color 200ms ease',
        }}
        onFocus={(e) => e.target.style.borderBottomColor = 'var(--orange)'}
        onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255,255,255,0.18)'}
      />
    </label>
  );
}

window.FVPartner = Partner;
