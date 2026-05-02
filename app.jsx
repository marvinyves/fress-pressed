// Fresh Vending — App entry & Tweaks panel

const { useTweaks, TweaksPanel, TweakSection, TweakRadio } = window;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "fresh"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    if (tweaks.palette === 'fresh') {
      document.documentElement.removeAttribute('data-palette');
    } else {
      document.documentElement.setAttribute('data-palette', tweaks.palette);
    }
  }, [tweaks.palette]);

  return (
    <>
      <window.FVNav />
      <window.FVHero />
      <window.FVWhy />
      <window.FVHow />
      <window.FVPartner />
      <window.FVFooter />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Palette">
          <TweakRadio
            value={tweaks.palette}
            onChange={(v) => setTweak('palette', v)}
            options={[
              { value: 'fresh',   label: 'Fresh' },
              { value: 'juicy',   label: 'Juicy' },
              { value: 'neon',    label: 'Neon' },
              { value: 'minimal', label: 'Minimal' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
