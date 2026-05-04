// Fresh Vending — Why Fresh: a comparison panel

const { Reveal, Arrow, LeafIcon } = window.FV;

function WhyFresh() {
  const rows = [
    { label: 'Source',        ours: 'Whole Egypt Valencia oranges',   theirs: 'Concentrate, reconstituted' },
    { label: 'Time to glass', ours: '~ 30 seconds, on demand',        theirs: 'Days, weeks, months in cold storage' },
    { label: 'Preservatives', ours: 'None — fruit and cold',          theirs: 'Stabilisers, flavour packs, vitamin add-ins' },
    { label: 'Sugar',         ours: "Just what's in the orange",      theirs: 'Often topped up' },
    { label: 'Pulp & oil',    ours: 'Real, from the rind',            theirs: 'Stripped, then re-added' },
    { label: 'Waste',         ours: 'Peels composted on-site',        theirs: 'Plastic-bottled supply chain' },
  ];

  return (
    <section id="why" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: 80,
          alignItems: 'start',
        }} className="why-grid">
          {/* Left — heading */}
          <div>
            <Reveal>
              <span className="eyebrow"><LeafIcon size={14} color="var(--leaf)" />Why fresh, actually fresh</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="serif" style={{
                fontSize: 'clamp(40px, 5.5vw, 78px)',
                lineHeight: 0.98,
                letterSpacing: '-0.03em',
                marginTop: 18,
                textWrap: 'balance',
              }}>
                Most "orange juice" hasn't seen an orange in <em style={{ color: 'var(--orange)', fontStyle: 'italic' }}>months</em>.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p style={{
                marginTop: 24,
                fontSize: 17,
                lineHeight: 1.6,
                color: 'var(--ink-2)',
                maxWidth: 460,
                textWrap: 'pretty',
              }}>
                The juice in most fridges is concentrate that's been deaerated, flavour-stripped,
                and stored in million-litre tanks before it ever reaches a carton. Ours is squeezed
                while you watch — from oranges that were on a tree last week.
              </p>
              <p style={{
                marginTop: 16,
                fontSize: 17,
                lineHeight: 1.6,
                color: 'var(--ink-2)',
                maxWidth: 460,
                textWrap: 'pretty',
                fontStyle: 'italic',
              }}>
                Discover the unparalleled sweetness of Valencia oranges – a fruit cultivated with a
                unique history and exceptional quality. Valencia isn't just a variety, it's a legacy.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <a href="#how" className="btn btn-ghost" style={{ marginTop: 32 }}>
                See the squeeze <Arrow />
              </a>
            </Reveal>
          </div>

          {/* Right — comparison table */}
          <Reveal delay={120}>
            <div style={{
              background: 'var(--bg)',
              border: '1px solid var(--rim)',
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: 'var(--shadow)',
            }}>
              {/* Header row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.1fr 1.1fr',
                background: 'var(--bg-3)',
                padding: '14px 20px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
              }}>
                <div></div>
                <div style={{ color: 'var(--orange)', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--orange)' }} />
                  Fresh Pressed
                </div>
                <div>Most "OJ"</div>
              </div>

              {rows.map((r, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1.1fr 1.1fr',
                  padding: '20px',
                  borderTop: '1px solid var(--rim)',
                  alignItems: 'center',
                  gap: 12,
                }} className="why-row">
                  <div style={{
                    fontSize: 13,
                    color: 'var(--muted)',
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: '0.04em',
                  }}>
                    {r.label}
                  </div>
                  <div style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: 20,
                    lineHeight: 1.25,
                    color: 'var(--ink)',
                  }}>
                    {r.ours}
                  </div>
                  <div style={{
                    fontSize: 14,
                    color: 'var(--muted)',
                    textDecoration: 'line-through',
                    textDecorationColor: 'color-mix(in oklab, var(--muted) 50%, transparent)',
                    lineHeight: 1.4,
                  }}>
                    {r.theirs}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 920px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .why-row { grid-template-columns: 1fr !important; gap: 4px !important; }
        }
      `}</style>
    </section>
  );
}

window.FVWhy = WhyFresh;
