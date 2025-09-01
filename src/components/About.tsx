import React from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To showcase the beauty and depth of African culture through innovative digital solutions.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building technology that strengthens communities and preserves cultural heritage.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Combining traditional wisdom with cutting-edge technology for meaningful impact.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering world-class solutions that honor our heritage and exceed expectations.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-500" style={{ color: '#347AF6' }}>Nkanuzu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a technology company with a soul. Our roots run deep in African soil,
            and our vision reaches across the globe. We believe that technology should amplify
            culture, not replace it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gray-50 hover:bg-white"
            >
              <div
                className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{ background: '#347AF6' }}
              >
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Company Story */}
        <div className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nkanuzu was born from a simple yet powerful belief: African culture deserves
                to be celebrated and shared with the world through the best technology has to offer.
                We're not just building software — we're building bridges.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every line of code we write, every interface we design, and every solution we create
                is infused with the wisdom of our ancestors and the innovation of our future.
                This is technology with purpose, culture with reach.
              </p>
            </div>
            <div className="relative">
              <div
                className="w-full h-80 rounded-2xl flex items-center justify-center text-white text-6xl font-bold"
                style={{ background: 'linear-gradient(135deg, #347AF6 0%, #2563eb 100%)' }}
              >
                <img
                  src="/logo.png"
                  alt="Nkanuzu"
                  className="h-20"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;