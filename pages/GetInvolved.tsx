import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Briefcase, Users, Share2, ArrowRight, Quote } from 'lucide-react';

const GetInvolved: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in bg-white dark:bg-teal transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-charcoal text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-20 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal"></div>

        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-saffron/20 text-saffron text-sm font-bold tracking-wider mb-6 border border-saffron/30 backdrop-blur-sm">
            JOIN OUR MISSION
          </span>
          <h1 className="font-heading font-bold text-5xl md:text-7xl mb-8 leading-tight">
            Be the Spark of <span className="text-saffron">Change</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Every great movement begins with a single step. Choose yours today.
          </p>
        </div>
      </section>

      {/* Quote 1 */}
      <section className="py-20 bg-cream dark:bg-charcoal transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Quote size={48} className="text-saffron/30 mx-auto mb-6" />
          <blockquote className="font-heading text-3xl md:text-4xl font-bold text-charcoal dark:text-white leading-snug mb-6">
            "Service to others is the rent you pay for your room here on earth."
          </blockquote>
          <cite className="text-gray-500 dark:text-gray-400 font-medium not-italic">— Muhammad Ali</cite>
        </div>
      </section>

      {/* Donate Section */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-saffron/10 rounded-3xl transform -rotate-2"></div>
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Donate"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
            <div className="md:w-1/2">
              <div className="w-16 h-16 bg-saffron/10 rounded-2xl flex items-center justify-center mb-8">
                <Heart size={32} className="text-saffron" />
              </div>
              <h2 className="font-heading font-bold text-4xl mb-6 text-charcoal">Make a Donation</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Your contribution is more than just money; it's a lifeline. It builds schools, provides clean water, and empowers women to start businesses. 100% of your donation goes directly to the field.
              </p>
              <button
                onClick={() => navigate('/donate')}
                className="group flex items-center gap-3 px-8 py-4 bg-saffron text-white font-bold rounded-full shadow-lg shadow-saffron/30 hover:bg-[#E55A2B] hover:shadow-saffron/40 transition-all"
              >
                Donate Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Quote 2 */}
      <section className="py-20 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <blockquote className="font-heading text-3xl md:text-4xl font-bold leading-snug mb-6">
            "The best way to find yourself is to lose yourself in the service of others."
          </blockquote>
          <cite className="text-gray-400 font-medium not-italic">— Mahatma Gandhi</cite>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-24 bg-gray-50 dark:bg-teal transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-terracotta/10 rounded-3xl transform rotate-2"></div>
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Volunteer"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
            <div className="md:w-1/2">
              <div className="w-16 h-16 bg-terracotta/10 rounded-2xl flex items-center justify-center mb-8">
                <Users size={32} className="text-terracotta" />
              </div>
              <h2 className="font-heading font-bold text-4xl mb-6 text-charcoal dark:text-white">Volunteer With Us</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                Your time and skills are invaluable resources. Whether you're a teacher, a doctor, a designer, or simply someone who cares, there's a place for you in our family. Join us on the ground and see the impact firsthand.
              </p>
              <button className="group flex items-center gap-3 px-8 py-4 border-2 border-terracotta text-terracotta font-bold rounded-full hover:bg-terracotta hover:text-white transition-all">
                View Opportunities
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section className="py-24 bg-white dark:bg-charcoal transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-teal/10 rounded-3xl transform -rotate-2"></div>
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="CSR"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
            <div className="md:w-1/2">
              <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center mb-8">
                <Briefcase size={32} className="text-teal dark:text-saffron" />
              </div>
              <h2 className="font-heading font-bold text-4xl mb-6 text-charcoal dark:text-white">CSR Partnerships</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                Align your brand with purpose. We collaborate with forward-thinking companies to design high-impact CSR initiatives that meet compliance goals while creating tangible social value.
              </p>
              <button className="group flex items-center gap-3 px-8 py-4 border-2 border-teal dark:border-saffron text-teal dark:text-saffron font-bold rounded-full hover:bg-teal dark:hover:bg-saffron hover:text-white transition-all">
                Partner With Us
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Spread the Word */}
      <section className="py-24 bg-cream dark:bg-coffee transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4">
          <div className="w-20 h-20 bg-white dark:bg-charcoal rounded-full shadow-lg flex items-center justify-center mx-auto mb-8">
            <Share2 size={36} className="text-charcoal dark:text-white" />
          </div>
          <h2 className="font-heading font-bold text-4xl mb-6 text-charcoal dark:text-white">Spread the Word</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-10">
            You don't need money or time to help—you just need a voice. Amplify our message by sharing our stories with your network. Awareness is the first step towards change.
          </p>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-charcoal dark:bg-saffron text-white font-bold rounded-full hover:bg-black dark:hover:bg-orange-500 transition-all">
            Download Media Kit
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;