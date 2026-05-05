// Fresh Pressed — Footer

const { BrandMark } = window.FV;

function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', paddingTop: 80, paddingBottom: 48 }}>
      {/* Marquee */}
      <div className="marquee" style={{ marginBottom: 80 }}>
        <div className="marquee-track">
          <span>
            <span>Fresh juice.</span>
            <span className="seed" />
            <span>Real fruit.</span>
            <span className="seed" />
            <span>Fully automated.</span>
            <span className="seed" />
            <span>Squeezed in Kuala Lumpur.</span>
            <span className="seed" />
            <span>Fresh juice.</span>
            <span className="seed" />
            <span>Real fruit.</span>
            <span className="seed" />
            <span>Fully automated.</span>
            <span className="seed" />
            <span>Squeezed in Kuala Lumpur.</span>
            <span className="seed" />
          </span>
          <span aria-hidden="true">
            <span>Fresh juice.</span>
            <span className="seed" />
            <span>Real fruit.</span>
            <span className="seed" />
            <span>Fully automated.</span>
            <span className="seed" />
            <span>Squeezed in Kuala Lumpur.</span>
            <span className="seed" />
            <span>Fresh juice.</span>
            <span className="seed" />
            <span>Real fruit.</span>
            <span className="seed" />
            <span>Fully automated.</span>
            <span className="seed" />
            <span>Squeezed in Kuala Lumpur.</span>
            <span className="seed" />
          </span>
        </div>
      </div>

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: 48,
          paddingBottom: 64,
        }} className="foot-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <BrandMark size={44} />
              <span style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 28,
                letterSpacing: '-0.02em',
              }}>Fresh Pressed</span>
            </div>
            <p style={{
              marginTop: 20,
              fontSize: 15,
              lineHeight: 1.55,
              color: 'var(--muted)',
              maxWidth: 360,
              textWrap: 'pretty',
            }}>
              Premium fresh-pressed orange juice, automated and stationed across Kuala Lumpur's
              busiest corridors. Real Egypt Valencia oranges. Nothing else.
            </p>
          </div>

          <FootCol title="Company" links={[
            ['About Us', 'about.html'], ['Sustainability', 'sustainability.html'],
          ]} />

          <FootCol title="Contact" links={[
            ['hello@freshpressed.my', 'mailto:fresspressed.my@gmail.com'],
            ['+60 1 48204698', 'https://wa.me/60148204698'],
            ['Instagram', '#'],
          ]} />
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 32,
          borderTop: '1px solid var(--rim)',
          fontSize: 13,
          color: 'var(--muted)',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <div>© {new Date().getFullYear()} Fresh Pressed Sdn Bhd · Kuala Lumpur, Malaysia</div>
          <div className="mono" style={{ letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: 11 }}>
            Squeezed today · {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .foot-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}

function FootCol({ title, links }) {
  return (
    <div>
      <div className="mono" style={{
        fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
        color: 'var(--muted)', marginBottom: 16,
      }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map(([label, href], i) => (
          <li key={i}>
            <a href={href} style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 18,
              color: 'var(--ink)',
              transition: 'color 200ms ease',
            }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--orange)'}
               onMouseLeave={(e) => e.currentTarget.style.color = 'var(--ink)'}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

window.FVFooter = Footer;
