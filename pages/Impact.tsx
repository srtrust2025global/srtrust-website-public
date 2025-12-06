import React from 'react';

const Impact: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero / Banner */}
      <section className="relative h-56 md:h-72 overflow-hidden bg-charcoal text-white">
        <div className="absolute inset-0 bg-[url('/assets/backgrounds/bg2.svg')] bg-center bg-cover opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="font-heading font-bold text-3xl md:text-5xl">Impact Stories</h1>
          <p className="mt-3 text-md md:text-lg text-gray-100 max-w-3xl">Real lives changed — read first-hand accounts from our programs and beneficiaries across education, healthcare and livelihoods.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <article key={i} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="mb-4 w-full h-44 bg-cover bg-center rounded" style={{ backgroundImage: `url(/assets/impact-stories/story${i + 1}.svg)` }} />
              <h3 className="text-xl font-semibold mb-2">Community success story #{i + 1}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">A short summary of how our program reached a village and improved school attendance, maternal health, or livelihoods. Replace these placeholders with real stories and media to share impact.</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Impact;
