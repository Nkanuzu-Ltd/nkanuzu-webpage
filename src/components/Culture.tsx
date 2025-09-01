import React from 'react';
import { Music, Palette, BookOpen, Globe2 } from 'lucide-react';

const Culture: React.FC = () => {
  const culturalAspects = [
    {
      icon: Music,
      title: 'Music & Rhythm',
      description: 'From traditional drums to modern Afrobeats, we celebrate the sounds that move our souls.',
      color: 'from-blue-400 to-blue-500'
    },
    {
      icon: Palette,
      title: 'Art & Design',
      description: 'Rich visual traditions that inspire our digital aesthetics and user experiences.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BookOpen,
      title: 'Stories & Wisdom',
      description: 'Ancient proverbs and modern narratives that guide our technological innovations.',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Globe2,
      title: 'Global Connection',
      description: 'Connecting African diaspora worldwide through shared digital experiences.',
      color: 'from-blue-700 to-blue-800'
    }
  ];

  return (
    <section id="culture" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Celebrating Our <span className="text-blue-500" style={{ color: '#347AF6' }}>Heritage</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Africa is not just a continent — it's a tapestry of cultures, languages, and traditions
            that have shaped humanity. We're here to ensure these treasures shine in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {culturalAspects.map((aspect, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ background: '#347AF6' }}
              >
                <aspect.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{aspect.title}</h3>
              <p className="text-gray-600 leading-relaxed">{aspect.description}</p>
            </div>
          ))}
        </div>

        {/* Cultural Quote */}
        <div className="text-center bg-white rounded-3xl p-8 sm:p-12 shadow-lg">
          <blockquote className="text-2xl sm:text-3xl font-medium text-gray-800 mb-6 italic">
            "If you want to go fast, go alone. If you want to go far, go together."
          </blockquote>
          <cite className="text-lg font-semibold text-blue-500" style={{ color: '#347AF6' }}>— African Proverb</cite>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            This wisdom guides everything we do at Nkanuzu. Technology is most powerful when it brings people together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Culture;