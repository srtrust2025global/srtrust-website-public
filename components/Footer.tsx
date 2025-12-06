import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logoDark from '../logo/trust_darktheme_logo2.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal dark:bg-coffee text-white pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              {/* <div className="bg-white p-1.5 rounded-full text-teal">
                <TreeDeciduous size={16} fill="#4A3411" />
              </div> */}
              <img src={logoDark} alt="SR Trust Logo" className="h-16 w-auto" />
              {/* <h3 className="font-heading font-bold text-xl">SR TRUST</h3> */}
            </div>
            <p className="text-teal-100 text-sm leading-relaxed opacity-90">
              Empowering patients with compassionate support every step of the way.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-saffron">Quick Links</h4>
            <ul className="space-y-3 text-sm text-teal-50">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-saffron">Contact Us</h4>
            <ul className="space-y-4 text-sm text-teal-50">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>123, Sewa Marg, Block B,<br />Vasant Kunj, New Delhi - 110070</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 88075 29091</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <span>care@srtrustglobal.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-saffron">Follow Us</h4>
            <p className="text-sm text-teal-100 mb-4">Connect with us on social media</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-3 bg-white/10 rounded-full hover:bg-saffron transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-3 bg-white/10 rounded-full hover:bg-saffron transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-3 bg-white/10 rounded-full hover:bg-saffron transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 bg-white/10 rounded-full hover:bg-saffron transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-800 dark:border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-teal-300 dark:text-gray-400 gap-4">
          <p>&copy; {new Date().getFullYear()} SR Trust. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;