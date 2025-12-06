import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { Target, Eye, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white dark:bg-teal pb-20 transition-colors duration-300">
      {/* Hero */}
      <section className="bg-teal py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">Our Story, Your Impact</h1>
          <p className="max-w-2xl mx-auto text-lg text-teal-100">
            Founded in 2025, SR Trust was born from a simple belief: that every individual in rural India deserves the dignity of choice and opportunity.
          </p>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-16 px-4 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-charcoal p-8 rounded-xl shadow-lg border-t-4 border-saffron transition-colors duration-300">
            <div className="bg-orange-50 dark:bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Target className="text-saffron" size={24} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 dark:text-white">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              •	To provide high-quality, safe, and affordable healthcare services through skilled professionals, advanced technology, and a culture of continuous improvement.
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">
            	•	To uphold dignity, respect, and empathy in every patient interaction.
            </p>
          </div>
          <div className="bg-white dark:bg-charcoal p-8 rounded-xl shadow-lg border-t-4 border-teal transition-colors duration-300">
            <div className="bg-orange-50 dark:bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Eye className="text-saffron" size={24} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 dark:text-white">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              • To be a trusted leader in compassionate, patient-centered healthcare, delivering excellence,
              innovation, and equitable access for every community we serve.
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">
              • To promote community well-being through prevention, education, and accessible health services.
            </p>
          </div>
          <div className="bg-white dark:bg-charcoal p-8 rounded-xl shadow-lg border-t-4 border-terracotta transition-colors duration-300">
            <div className="bg-orange-50 dark:bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Heart className="text-terracotta" size={24} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 dark:text-white">Our Values</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              • We uphold honesty, ethical practices, and accountability in every decision, ensuring trust with patients, families, and communities.
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">
              • We work together with empathy and respect, fostering a supportive environment where every individual is treated with care and understanding.
            </p>
          </div>
        </div>
      </section>

{/* What We Stand For - visually enhanced alternating layout */}
<section className="py-20 px-4 bg-white dark:bg-coffee transition-colors duration-300">
  <div className="max-w-6xl mx-auto">
    <h2 className="font-heading font-bold text-3xl text-center text-charcoal dark:text-white mb-12">
      What We Stand For
    </h2>

    <div className="relative">

      {/* Vertical Line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2" />

      <div className="space-y-1">
            {[
              { title: 'Compassion', desc: 'We care deeply for our patients, showing empathy, kindness, and respect in every interaction.', emoji: '❤️' },
              { title: 'Integrity', desc: 'We act with honesty, transparency, and accountability, earning the trust of our patients and communities.', emoji: '🛡️' },
              { title: 'Excellence', desc: 'We strive for the highest standards in clinical care, service delivery, and patient safety.', emoji: '⭐' },
              { title: 'Respect', desc: 'We honor the dignity, diversity, and rights of every individual we serve and employ.', emoji: '🤝' },
              { title: 'Collaboration', desc: 'We work as a unified team—patients, families, staff, and partners—to improve health outcomes together.', emoji: '👥' },
              { title: 'Innovation', desc: 'We embrace new ideas, technologies, and approaches to continually advance healthcare quality.', emoji: '⚡' },
              { title: 'Equity', desc: 'We ensure fair, inclusive, and accessible healthcare for all, especially underserved and vulnerable populations.', emoji: '⚖️' }
            ].map((item, idx) => {
              const isLeft = idx % 2 === 0;
              const gradients = [
                'from-saffron to-teal',
                'from-teal to-terracotta',
                'from-terracotta to-indigo-400',
                'from-indigo-400 to-green-500',
                'from-green-500 to-pink-500',
                'from-pink-500 to-yellow-400',
                'from-yellow-400 to-saffron'
              ];
              const gradient = gradients[idx % gradients.length];

              return (
                <div key={idx} className="relative md:flex md:items-start md:justify-between md:gap-8">

                  {/* LEFT BOX */}
                  <div className="md:w-1/2 flex md:justify-end">
                    {isLeft && (
                      <div className="w-full md:max-w-md">
                        <div className="mx-auto bg-white/70 dark:bg-charcoal/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 text-center">
                          <h3 className="font-bold text-xl text-charcoal dark:text-white">{idx + 1}. {item.title}</h3>
                          <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{item.desc}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CENTER EMOJI */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:static md:transform-none md:flex md:items-center md:justify-center md:w-0">
                    <div className={`p-0.5 rounded-full bg-gradient-to-tr ${gradient} shadow-xl`}>
                      <div className="w-16 h-16 rounded-full bg-white dark:bg-charcoal flex items-center justify-center">
                        <span className="text-2xl">{item.emoji}</span>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT BOX */}
                  <div className="md:w-1/2 flex md:justify-start">
                    {!isLeft && (
                      <div className="w-full md:max-w-md">
                        <div className="mx-auto bg-white/70 dark:bg-charcoal/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 text-center">
                          <h3 className="font-bold text-xl text-charcoal dark:text-white">{idx + 1}. {item.title}</h3>
                          <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{item.desc}</p>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
      </div>
    </div>
  </div>
</section>

{/* Leadership */}
      <section className="py-20 px-4 bg-white dark:bg-coffee transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-center text-charcoal dark:text-white mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="bg-white dark:bg-charcoal rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 text-center p-6 border border-gray-100 dark:border-gray-700">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto object-cover mb-6 border-4 border-teal/10 dark:border-saffron/10" />
                <h3 className="font-heading font-bold text-xl text-charcoal dark:text-white mb-1">{member.name}</h3>
                <p className="text-saffron text-sm font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;