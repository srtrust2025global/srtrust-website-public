import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Splash from './components/Splash';
import trust1 from './logo/trust_loader.png';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const RootWithSplash: React.FC = () => {
  // exclusively show the splash once per origin/domain
  const localKey = 'sr_splash_shown';
  const [showApp, setShowApp] = React.useState<boolean>(() => {
    try {
      return Boolean(localStorage.getItem(localKey));
    } catch (e) {
      return false;
    }
  });

  const handleFinish = () => {
    try {
      localStorage.setItem(localKey, '1');
    } catch (err) {
      // ignore storage errors (privacy mode etc.)
    }
    setShowApp(true);
  };

  // If showApp is true we render the app immediately.
  // Otherwise we render Splash and hide the app until finished.
  return (
    <>
      {!showApp && <Splash onFinish={handleFinish} logoSrc={trust1} />}
      {showApp && <App />}
    </>
  );
};

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RootWithSplash />
  </React.StrictMode>
);