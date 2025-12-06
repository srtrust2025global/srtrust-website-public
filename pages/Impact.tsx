import React from 'react';

const Impact: React.FC = () => {
  // A simple placeholder Impact Stories page — add real content as needed
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="font-heading font-bold text-4xl md:text-6xl">Impact Stories</h1>
        <p className="mt-3 text-lg text-gray-700 dark:text-gray-300 max-w-2xl">Real lives changed — read first-hand accounts from our programs and beneficiaries across education, healthcare and livelihoods.</p>
      </header>

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
  );
};

export default Impact;
