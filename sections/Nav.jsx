// Fresh Vending — Nav

const { Reveal, Arrow, BrandMark } = window.FV;

const _navBase = (() => {
  const p = window.location.pathname;
  return (p.endsWith('about.html') || p.endsWith('sustainability.html'))
    ? 'Fresh Vending Landing.html'
    : '';
})();

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      zIndex: 50,
      padding: scrolled ? '12px 0' : '20px 0',
      background: scrolled ? 'color-mix(in oklab, var(--bg) 78%, transparent)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px) saturate(140%)' : 'none',
      borderBottom: scrolled ? '1px solid var(--rim)' : '1px solid transparent',
      transition: 'all 280ms ease',
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
      }}>
        <a href={_navBase || '#top'} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <BrandMark size={36} />
          <span style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 22,
            letterSpacing: '-0.02em',
          }}>
            Fresh Pressed
          </span>
        </a>

        <nav style={{
          display: 'flex', alignItems: 'center', gap: 32,
          fontSize: 14,
          color: 'var(--ink-2)',
        }} className="nav-links">
          <a href={_navBase + '#why'} className="nav-link">Why fresh</a>
          <a href={_navBase + '#how'} className="nav-link">How it works</a>
          <a href={_navBase + '#partner'} className="nav-link">Partner</a>
        </nav>

        <a href={_navBase + '#partner'} className="btn btn-primary" style={{ padding: '10px 18px', fontSize: 14 }}>
          Host a machine <Arrow />
        </a>
      </div>

      <style>{`
        .nav-link {
          position: relative;
          padding: 4px 0;
          transition: color 200ms ease;
        }
        .nav-link:hover { color: var(--ink); }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -2px;
          height: 1px;
          background: var(--orange);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 280ms ease;
        }
        .nav-link:hover::after { transform: scaleX(1); }
        @media (max-width: 720px) { .nav-links { display: none !important; } }
      `}</style>
    </header>
  );
}

window.FVNav = Nav;
