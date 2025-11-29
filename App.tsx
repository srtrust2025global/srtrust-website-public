import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import GetInvolved from './pages/GetInvolved';
import Impact from './pages/Impact';
// import Donate from './pages/Donate';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-cream dark:bg-coffee transition-colors duration-300 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/work" element={<Work />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            {/* <Route path="/donate" element={<Donate />} /> */}
          </Routes>
        </Layout>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;