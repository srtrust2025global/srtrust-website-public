import React from 'react';

type Props = {
  onFinish?: () => void;
  logoSrc?: string;
  // optional override timings (ms)
  growMs?: number; // how long the logo grows (default 2000)
  holdMs?: number; // how long to hold at full size (default 500)
  fadeMs?: number; // fade-out time (default 500)
};

const Splash: React.FC<Props> = ({ onFinish, logoSrc, growMs = 2000, holdMs = 500, fadeMs = 500 }) => {
  const [grown, setGrown] = React.useState(false);
  const [fading, setFading] = React.useState(false);

  React.useEffect(() => {
    // start the grow animation right after mount (allow initial render)
    const startTimer = setTimeout(() => setGrown(true), 30);

    // after grow + hold, start fade
    const tFade = setTimeout(() => setFading(true), growMs + holdMs);

    // after grow + hold + fade, finish and notify parent
    const tFinish = setTimeout(() => onFinish && onFinish(), growMs + holdMs + fadeMs);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(tFade);
      clearTimeout(tFinish);
    };
  }, [growMs, holdMs, fadeMs, onFinish]);

  return (
    <div
      aria-hidden={!logoSrc}
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-white dark:bg-[#111] ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      // fade transition duration matches fadeMs
      style={{ transition: `opacity ${fadeMs}ms ease` }}
    >
      <div
        // logo container: start very small with transform-origin bottom center and grow to full size
        className="flex flex-col items-center gap-6 px-6"
        style={{
          transformOrigin: 'bottom center',
          // transition for the grow (transform)
          transition: `transform ${growMs}ms cubic-bezier(.2,.9,.2,1)`,
          transform: grown ? 'scale(1)' : 'scale(0.04) translateY(24px)',
        }}
      >
        {logoSrc ? (
          <img
            src={logoSrc}
            alt="SR Trust logo"
            className="w-40 h-40 sm:w-48 sm:h-48 object-contain drop-shadow-md"
          />
        ) : (
          <div className="w-24 h-24 bg-gray-200 dark:bg-gray-800 rounded-md" />
        )}

        {/* caption removed as requested */}
      </div>
    </div>
  );
};

export default Splash;
