import React from 'react';
import { MapPin } from 'lucide-react';

const Work: React.FC = () => {
  const workItems = [
    {
      title: 'Mental Health Screening',
      image: '/assets/our-work/mental-screening.jpg',
      text: 'We conducted private mental-health assessments to identify emotional and psychological challenges early. These screenings ensured individuals received confidential, stigma-free care and timely support.'
    },
    {
      title: 'Emotional Support Sessions',
      image: '/assets/our-work/emotional-support.jpg',
      text: 'Our team offered one-on-one emotional support to individuals experiencing stress, anxiety, or personal struggles. Each session provided a safe space for expression, reassurance, and immediate coping guidance.'
    },
    {
      title: 'Counseling & Follow-Up Care',
      image: '/assets/our-work/counseling.jpg',
      text: 'We connected individuals to ongoing counseling services for long-term healing and mental well-being. This ensured that no one was left behind and that every identified need received sustained professional attention.'
    },
    {
      title: 'Comprehensive Health Screenings',
      image: '/assets/our-work/screenings.jpg',
      text: 'We carried out wide-ranging medical screenings to detect chronic and emerging health conditions early. This helped individuals understand their health needs and take preventive action at the right time.'
    },
    {
      title: 'Child Health & Development Checkups',
      image: '/assets/our-work/child-checkups.jpg',
      text: 'Specialized examinations evaluated children’s nutrition, growth milestones, and overall development. Parents received clear guidance and recommendations to support their child’s healthy growth.'
    },
    {
      title: 'Free Medicine Distribution & Health Education',
      image: '/assets/our-work/medicines-education.jpg',
      text: 'Essential medicines were distributed free of cost, removing financial barriers to treatment. Additionally, health-education sessions empowered families with practical knowledge to maintain long-term wellness.'
    }
  ];

  return (
    <div className="animate-fade-in bg-gray-50 dark:bg-coffee min-h-screen pb-20 transition-colors duration-300">
      {/* Hero */}
      <section className="bg-charcoal text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-20 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6">Our Impact Gallery</h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
            Explore our sustainable solutions now in Coimbatore.
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
          {workItems.map((item, idx) => (
            <div key={idx} className="group bg-white dark:bg-charcoal rounded-2xl overflow-hidden shadow-lg transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent z-10">
                  <h3 className="text-white font-heading font-bold text-xl">{item.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Work;