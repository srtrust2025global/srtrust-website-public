import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import { IMPACT_STATS, PROGRAMS } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const heroBackground = useMemo(() => {
    const imgs = [
      '/assets/backgrounds/bg1.jpg',
      '/assets/backgrounds/bg2.jpg',
      '/assets/backgrounds/bg3.jpg',
      '/assets/backgrounds/bg4.jpg',
      '/assets/backgrounds/bg5.jpg',
      '/assets/backgrounds/bg6.jpg',
      '/assets/backgrounds/bg7.jpg',
      '/assets/backgrounds/bg8.jpg',
      '/assets/backgrounds/bg9.jpg',
      '/assets/backgrounds/bg10.jpg',
      '/assets/backgrounds/bg11.jpg',
      '/assets/backgrounds/bg12.jpg',
      '/assets/backgrounds/bg13.jpg',
      '/assets/backgrounds/bg14.jpg',
    ];
    return imgs[Math.floor(Math.random() * imgs.length)];
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${heroBackground}")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal/90 to-teal/40 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white">
          <div className="mb-6 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 animate-slide-up">
            <ShieldCheck size={16} className="text-saffron" />
            <span className="text-xs font-bold tracking-wider uppercase">80G Certified & 12A Registered</span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 shadow-sm">
            Delivering Hope, Healing, and High-Quality Care <br className="hidden md:block" /> Across All Health Needs.
          </h1>
          <p className="font-sans text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Where your contribution becomes lasting change in health and livelihood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <button
              onClick={() => navigate('/donate')}
              className="w-full sm:w-auto px-8 py-4 bg-saffron hover:bg-[#E55A2B] text-white rounded-full font-bold text-lg shadow-xl transition-transform transform hover:-translate-y-1"
            >
              Donate Now
            </button> */}
            <button
              onClick={() => navigate('/work')}
              className="w-full sm:w-auto px-8 py-4 bg-white text-teal hover:bg-gray-100 rounded-full font-bold text-lg shadow-xl transition-transform transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              See Our Work <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Impact Snapshot */}
      <section className="relative -mt-16 z-20 px-4">
        <div className="max-w-6xl mx-auto bg-white dark:bg-charcoal rounded-xl shadow-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 transition-colors duration-300">
          {IMPACT_STATS.map((stat, idx) => (
            <div key={idx} className="text-center group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 mx-auto bg-cream dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-saffron/10 transition-colors">
                <stat.icon className="text-saffron" size={24} />
              </div>
              <div className="font-stats font-bold text-3xl md:text-4xl text-charcoal dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 px-4 bg-cream dark:bg-coffee transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal dark:text-white mb-4">Our Core Pillars</h2>
            <div className="w-16 h-1 bg-saffron mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">a commitment to clinical excellence, strict patient safety, compassionate care, unwavering trust and integrity, accessible and affordable services, and continuous support throughout every stage of the patient journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROGRAMS.map((program) => (
              <div key={program.id} className="group bg-white dark:bg-charcoal rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="font-heading font-bold text-2xl text-teal dark:text-saffron mb-3">{program.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3">{program.description}</p>
                  {/* Learn More CTA removed per request */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Ask */}
      {/* <section className="py-20 bg-teal text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">Create Lasting Change Today</h2>
          <p className="text-teal-100 text-lg mb-10">
            Your support can provide books, medicine, and vocational training to those who need it most. All donations are 50% tax-exempt under section 80G.
          </p>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 inline-block w-full max-w-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {['₹500', '₹1,500', '₹5,000', 'Other'].map((amt) => (
                <button
                  key={amt}
                  onClick={() => navigate('/donate')}
                  className="bg-white text-teal font-bold py-3 rounded-lg hover:bg-saffron hover:text-white transition-all shadow-sm"
                >
                  {amt}
                </button>
              ))}
            </div>
            <p className="text-sm text-teal-200 mb-2">₹1,500 can educate a child for 6 months.</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;