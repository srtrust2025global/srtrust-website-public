import React from 'react';

const Impact: React.FC = () => {
  const storyContents = [
    {
      image: '/assets/impact-stories/individual-screening.jpg',
      text: 'Over 1,200 individuals received essential health screenings, helping families understand their medical needs early. These early interventions enabled timely care and prevented the progression of hidden health issues.'
    },
    {
      image: '/assets/impact-stories/children-examined.jpg',
      text: '300 children were assessed for nutrition, growth, and developmental milestones. Parents gained clarity and confidence to support their child’s healthy future.'
    },
    {
      image: '/assets/impact-stories/early-detection.jpg',
      text: '95 potential health risks — including BP, diabetes, vision issues, and anemia — were identified early. These timely detections ensured individuals received the right guidance before conditions worsened.'
    },
    {
      image: '/assets/impact-stories/free-medication.jpg',
      text: '600+ community members received free medicines that removed financial barriers to treatment. This support made essential healthcare accessible to even the most vulnerable families.'
    },
    {
      image: '/assets/impact-stories/health%20education.jpg',
      text: '450+ individuals participated in practical health education sessions. These learnings empowered families to make informed, long-term wellness decisions.'
    },
    {
      image: '/assets/impact-stories/trust-community.jpg',
      text: 'Stronger trust was built between healthcare providers and local families. This bond encouraged more people to seek help without fear or hesitation.'
    }
  ];

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
          {storyContents.map((s, i) => (
            <article key={i} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="mb-4 w-full h-44 bg-cover bg-center rounded" style={{ backgroundImage: `url(${s.image})` }} />
              <h3 className="text-xl font-semibold mb-2">Community success story #{i + 1}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{s.text}</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Impact;
