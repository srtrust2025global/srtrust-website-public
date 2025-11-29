import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { Clock, Target, Eye, Heart, TrendingUp, CheckCircle, Download, FileText } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in bg-white dark:bg-teal pb-20 transition-colors duration-300">
      {/* Hero */}
      <section className="bg-teal py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">Our Story, Your Impact</h1>
          <p className="max-w-2xl mx-auto text-lg text-teal-100">
            Founded in 2010, SR Trust was born from a simple belief: that every individual in rural India deserves the dignity of choice and opportunity.
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
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">To empower marginalized communities through scalable programs in education, healthcare, and sustainable livelihoods.</p>
          </div>
          <div className="bg-white dark:bg-charcoal p-8 rounded-xl shadow-lg border-t-4 border-teal transition-colors duration-300">
            <div className="bg-teal-50 dark:bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Eye className="text-teal dark:text-saffron" size={24} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 dark:text-white">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">A self-reliant rural India where every child learns, every family is healthy, and every youth is skilled.</p>
          </div>
          <div className="bg-white dark:bg-charcoal p-8 rounded-xl shadow-lg border-t-4 border-terracotta transition-colors duration-300">
            <div className="bg-red-50 dark:bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Heart className="text-terracotta" size={24} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 dark:text-white">Our Values</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Integrity, Transparency, Empathy, and Community-First Action in everything we do.</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-white dark:bg-coffee transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-center text-charcoal dark:text-white mb-16">Our Journey</h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:ml-0 md:before:-translate-x-px md:before:h-full md:before:w-0.5 md:before:bg-gradient-to-b md:before:from-transparent md:before:via-gray-200 dark:md:before:via-gray-700 md:before:to-transparent md:before:left-1/2">
            {[
              { year: '2010', title: 'Inception', desc: 'Started with 1 small school in Bihar.' },
              { year: '2015', title: 'Expansion', desc: 'Reached 50 villages with healthcare programs.' },
              { year: '2018', title: 'Livelihood Launch', desc: 'Initiated skill development for rural women.' },
              { year: '2023', title: 'Milestone', desc: 'Impacted over 100,000 lives across 3 states.' }
            ].map((item, idx) => (
              <div key={idx} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white dark:border-charcoal bg-saffron shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 text-white font-bold text-xs z-10">
                  {item.year}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-cream dark:bg-charcoal p-6 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm ml-14 md:ml-0 hover:shadow-md transition-all duration-300">
                  <h3 className="font-bold text-teal dark:text-saffron mb-1">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency & Financials */}
      <section className="py-20 bg-gray-50 dark:bg-charcoal/50 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl text-charcoal dark:text-white mb-4">Radical Transparency</h2>
            <p className="text-gray-600 dark:text-gray-300">Trust is earned through openness. Here is how we utilize your contributions.</p>
          </div>

          {/* Financial Overview */}
          <div className="bg-white dark:bg-charcoal rounded-2xl p-8 mb-12 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <h3 className="font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-sm mb-6">Fund Allocation</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xl font-bold text-charcoal dark:text-white">Program Implementation</span>
                  <span className="text-xl font-bold text-teal dark:text-saffron">85%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-teal dark:bg-saffron h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-xs text-gray-400 mt-2">Directly supporting education, healthcare, and livelihood projects.</p>
              </div>

              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-lg font-bold text-gray-700 dark:text-gray-300">Fundraising</span>
                  <span className="text-lg font-bold text-orange-500">10%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-lg font-bold text-gray-700 dark:text-gray-300">Administration</span>
                  <span className="text-lg font-bold text-gray-400">5%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-gray-400 h-2 rounded-full" style={{ width: '5%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-white dark:bg-charcoal border border-gray-100 dark:border-gray-700 rounded-xl shadow-sm mb-16 transition-colors duration-300">
            <TrendingUp className="text-teal dark:text-saffron flex-shrink-0" size={24} />
            <div>
              <h4 className="font-bold text-charcoal dark:text-white text-lg mb-1">Consistent Growth</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Our impact fund has grown consistently, reaching <span className="font-bold text-charcoal dark:text-white">₹7.1 Crores</span> in 2023, allowing us to expand our reach to 50+ new villages.
              </p>
            </div>
          </div>

          {/* Legal & Reports Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Legal */}
            <div>
              <h3 className="font-heading font-bold text-xl text-charcoal dark:text-white mb-6">Legal & Compliance</h3>
              <div className="space-y-3">
                {['12A Registration', '80G Certificate', 'CSR-1 Form', 'FCRA (Valid till 2028)'].map((cert) => (
                  <div key={cert} className="flex items-center justify-between p-3 bg-white dark:bg-charcoal border border-gray-100 dark:border-gray-700 rounded-lg hover:border-teal/30 dark:hover:border-saffron/30 transition-colors group">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-teal dark:text-saffron" size={18} />
                      <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">{cert}</span>
                    </div>
                    <button className="text-gray-400 hover:text-saffron transition-colors">
                      <Download size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Reports */}
            <div>
              <h3 className="font-heading font-bold text-xl text-charcoal dark:text-white mb-6">Annual Reports</h3>
              <div className="space-y-3">
                {['2022-2023', '2021-2022', '2020-2021'].map(year => (
                  <div key={year} className="group flex items-center gap-4 p-3 bg-white dark:bg-charcoal border border-gray-100 dark:border-gray-700 rounded-lg hover:border-teal/30 dark:hover:border-saffron/30 transition-colors cursor-pointer">
                    <div className="w-10 h-10 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-teal dark:text-saffron">
                      <FileText size={20} />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-charcoal dark:text-white text-sm group-hover:text-teal dark:group-hover:text-saffron transition-colors">Annual Report {year}</h4>
                    </div>
                    <Download size={16} className="text-gray-400 group-hover:text-saffron transition-colors" />
                  </div>
                ))}
              </div>
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