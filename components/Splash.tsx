import React from 'react';

type Props = {
  duration?: number; // milliseconds the splash stays fully visible
  onFinish?: () => void;
  logoSrc?: string;
};

const Splash: React.FC<Props> = ({ duration = 4000, onFinish, logoSrc }) => {
  const [fading, setFading] = React.useState(false);

  React.useEffect(() => {
    // After duration, start fade-out
    const t = setTimeout(() => setFading(true), duration);
    // After fade duration finish, notify parent
    const fadeMs = 500;
    const t2 = setTimeout(() => onFinish && onFinish(), duration + fadeMs);

    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [duration, onFinish]);

  return (
    <div
      aria-hidden={!logoSrc}
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-white dark:bg-[#111] transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-6 px-6">
        {logoSrc ? (
          <img
            src={logoSrc}
            alt="SR Trust logo"
            className="w-40 h-40 sm:w-48 sm:h-48 object-contain drop-shadow-md"
          />
        ) : (
          <div className="w-24 h-24 bg-gray-200 dark:bg-gray-800 rounded-md" />
        )}
        <div className="text-center text-xs text-gray-500 dark:text-gray-300">Powered by SR Trust</div>
      </div>
    </div>
  );
};

export default Splash;
