import React, { useState } from 'react';
import { PROGRAMS } from '../constants';
import { MapPin, BarChart3, X, ArrowRight, ExternalLink } from 'lucide-react';

const Work: React.FC = () => {
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(null);

  const selectedProgram = PROGRAMS.find(p => p.id === selectedProgramId);

  const openModal = (id: string) => {
    setSelectedProgramId(id);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedProgramId(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <div className="animate-fade-in bg-gray-50 dark:bg-coffee min-h-screen pb-20 transition-colors duration-300">
      {/* Hero */}
      <section className="bg-charcoal text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-20 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6">Our Impact Gallery</h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
            Explore our sustainable solutions Now in Coimbatore.
          </p>

          {/* Map Representation */}
          <div className="inline-flex gap-3 flex-wrap justify-center">
            {['Coimbatore'].map(state => (
              <span key={state} className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/10 hover:bg-white/20 cursor-default transition-colors">
                <MapPin size={14} className="text-saffron" /> {state}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map(program => (
            <div
              key={program.id}
              onClick={() => openModal(program.id)}
              className="group bg-white dark:bg-charcoal rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/0 transition-colors z-10"></div>
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-white font-heading font-bold text-xl mb-1">{program.title}</h3>
                  <div className="flex items-center text-saffron text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300 delay-100">
                    View Details <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detail Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>

          <div className="bg-white dark:bg-charcoal w-full max-w-5xl max-h-full rounded-3xl shadow-2xl overflow-hidden relative z-10 flex flex-col animate-scale-in transition-colors duration-300">

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-colors"
            >
              <X size={24} />
            </button>

            <div className="overflow-y-auto custom-scrollbar">
              {/* Modal Hero */}
              <div className="relative h-64 md:h-96">
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12">
                  <h2 className="text-white font-heading font-bold text-3xl md:text-5xl mb-2">{selectedProgram.title}</h2>
                  <div className="w-20 h-1 bg-saffron rounded-full"></div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row gap-12">

                  {/* Main Description */}
                  <div className="lg:w-2/3">
                    <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-6 flex items-center gap-2">
                      About the Program
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                      {selectedProgram.description}
                    </p>

                    {/* Logic Model / Process */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700">
                      <h3 className="font-heading font-bold text-xl mb-6 flex items-center gap-2 text-charcoal dark:text-white">
                        <BarChart3 className="text-teal dark:text-saffron" /> Our Approach
                      </h3>
                      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-center">
                        <div className="p-4 bg-white dark:bg-charcoal shadow-sm border border-gray-100 dark:border-gray-600 rounded-xl w-full font-medium text-gray-700 dark:text-gray-200">Assessment</div>
                        <div className="hidden md:block text-gray-300 dark:text-gray-600">→</div>
                        <div className="p-4 bg-white dark:bg-charcoal shadow-sm border border-gray-100 dark:border-gray-600 rounded-xl w-full font-medium text-gray-700 dark:text-gray-200">Community Partnership</div>
                        <div className="hidden md:block text-gray-300 dark:text-gray-600">→</div>
                        <div className="p-4 bg-white dark:bg-charcoal shadow-sm border border-gray-100 dark:border-gray-600 rounded-xl w-full font-medium text-gray-700 dark:text-gray-200">Implementation</div>
                        <div className="hidden md:block text-gray-300 dark:text-gray-600">→</div>
                        <div className="p-4 bg-white dark:bg-charcoal shadow-sm border border-gray-100 dark:border-gray-600 rounded-xl w-full font-medium text-gray-700 dark:text-gray-200">Sustainable Handover</div>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Stats */}
                  <div className="lg:w-1/3 space-y-6">
                    <div className="bg-charcoal text-white p-8 rounded-2xl shadow-lg">
                      <h3 className="font-bold text-xl mb-6 border-b border-white/20 pb-4">Key Impact Metrics</h3>
                      <div className="space-y-6">
                        {selectedProgram.stats.map((stat, idx) => (
                          <div key={idx}>
                            <div className="font-stats font-bold text-4xl text-saffron mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-teal/10 dark:bg-saffron/10 p-6 rounded-2xl border border-teal/20 dark:border-saffron/20">
                      <h4 className="font-bold text-teal dark:text-saffron mb-2 flex items-center gap-2">
                        <ExternalLink size={18} /> Get Involved
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        Interested in supporting this specific program?
                      </p>
                      <button className="w-full py-3 bg-teal dark:bg-saffron text-white font-bold rounded-lg hover:bg-teal-dark dark:hover:bg-orange-500 transition-colors shadow-md">
                        Support This Cause
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;