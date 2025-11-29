import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, TreeDeciduous, Sun, Moon } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import logoLight from '../logo/trust2.png';
import logoDark from '../logo/trust_darktheme_logo2.png';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  // const handleDonateClick = () => {
  //   navigate('/donate');
  //   setIsOpen(false);
  // };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-coffee shadow-sm font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <div className="flex-shrink-0 flex items-center gap-2">
              {/* <div className="bg-saffron p-2 rounded-full text-white">
                <TreeDeciduous size={20} fill="white" />
              </div> */}
              <img src={theme === 'dark' ? logoDark : logoLight} alt="SR Trust Logo" className="h-16 w-auto" />
              <div>
                {/* <span className="font-heading font-bold text-xl text-teal tracking-tight block">SR TRUST</span>
                <span className="text-[10px] text-charcoal tracking-widest uppercase block">A PROMISE OF NEW BEGINNINGS</span> */}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${isActive ? 'text-saffron font-bold' : 'text-charcoal dark:text-gray-200 hover:text-saffron'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            {/* <button
              onClick={handleDonateClick}
              className="bg-saffron hover:bg-[#E55A2B] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Donate Now
            </button> */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} className="text-saffron" /> : <Moon size={20} className="text-charcoal" />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal dark:text-white hover:text-saffron focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-coffee absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium ${isActive ? 'bg-orange-50 dark:bg-gray-800 text-saffron' : 'text-charcoal dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4">
              {/* <button
                onClick={handleDonateClick}
                className="w-full bg-saffron text-white px-4 py-3 rounded-lg font-bold text-center shadow-md"
              >
                Donate Now
              </button> */}
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-center gap-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun size={20} className="text-saffron" />
                    <span className="text-white">Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon size={20} className="text-charcoal" />
                    <span className="text-charcoal dark:text-white">Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;