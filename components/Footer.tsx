import React from 'react';
import { Link } from 'react-router-dom';
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
              Building self-reliant communities across rural India through holistic education, healthcare, and livelihood programs.
            </p>
            <div className="pt-4">
              <span className="inline-block bg-white/10 px-3 py-1 rounded text-xs font-medium border border-white/20">
                80G Certified | 12A Registered
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-saffron">Quick Links</h4>
            <ul className="space-y-3 text-sm text-teal-50">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/work" className="hover:text-white transition-colors">Our Programs</Link></li>
              <li><Link to="/impact" className="hover:text-white transition-colors">Impact Stories</Link></li>
              <li><Link to="/transparency" className="hover:text-white transition-colors">Financials</Link></li>
              {/* <li><Link to="/donate" className="hover:text-white transition-colors">Donate Now</Link></li> */}
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
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <span>hello@srtrust.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-saffron">Stay Connected</h4>
            <p className="text-sm text-teal-100 mb-4">Receive updates on our latest projects and impact.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded bg-teal-800 dark:bg-teal/30 border border-teal-700 dark:border-teal/50 text-white placeholder-teal-300 dark:placeholder-gray-400 focus:outline-none focus:border-saffron text-sm"
              />
              <button className="bg-saffron hover:bg-[#E55A2B] text-white px-4 py-2 rounded font-medium text-sm transition-colors">
                Subscribe
              </button>
            </form>
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-saffron transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-saffron transition-colors"><Twitter size={18} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-saffron transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-saffron transition-colors"><Linkedin size={18} /></a>
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