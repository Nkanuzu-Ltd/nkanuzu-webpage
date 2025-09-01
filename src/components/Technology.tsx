import React from 'react';
import { Code, Smartphone, Cloud, Zap, Database, Shield } from 'lucide-react';

const Technology: React.FC = () => {
  const technologies = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites that work beautifully across all devices.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform applications that bring culture to your pocket.'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable infrastructure that grows with your cultural initiatives.'
    },
    {
      icon: Database,
      title: 'Data Preservation',
      description: 'Secure digital archives that protect cultural knowledge for future generations.'
    },
    {
      icon: Shield,
      title: 'Digital Security',
      description: 'Protecting cultural assets and user data with enterprise-grade security.'
    },
    {
      icon: Zap,
      title: 'AI & Innovation',
      description: 'Leveraging artificial intelligence to enhance cultural storytelling.'
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Powered by <span className="text-blue-300">Innovation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We use the latest technologies to create digital experiences that are as sophisticated
            as they are meaningful. Our tech stack is carefully chosen to serve our cultural mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-blue-500"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: '#347AF6' }}
              >
                <tech.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
              <p className="text-gray-300 leading-relaxed">{tech.description}</p>
            </div>
          ))}
        </div>

        {/* Tech Philosophy */}
        <div
          className="rounded-3xl p-8 sm:p-12 text-center"
          style={{ background: 'linear-gradient(135deg, #347AF6 0%, #2563eb 100%)' }}
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Technology with Purpose
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Every algorithm we write, every interface we design, and every system we build
            is infused with the values of Ubuntu — interconnectedness, compassion, and shared humanity.
            This is technology that serves culture, not the other way around.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'MongoDB', 'GraphQL', 'Docker'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;