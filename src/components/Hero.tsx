import React from 'react';
import { ArrowRight, Globe, Zap, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #347AF6 0%, #2563eb 50%, #1e40af 100%)'
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white/5 rounded-full animate-float"></div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white transform rotate-45"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white transform rotate-45"></div>
          <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-white transform rotate-45"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="/logo.png"
              alt="Nkanuzu Logo"
              className="h-24 sm:h-32"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-medium text-white/90 mt-2">
              Projecting African Culture
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-medium text-white/90">
              Through Technology
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up">
            We bridge the gap between rich African heritage and cutting-edge technology,
            creating digital experiences that celebrate culture and connect communities worldwide.
          </p>

          {/* Feature Icons */}
          <div className="flex justify-center space-x-8 mb-12 animate-slide-up">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-3 backdrop-blur-sm">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <span className="text-white/80 text-sm font-medium">Global Reach</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-3 backdrop-blur-sm">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <span className="text-white/80 text-sm font-medium">Cultural Pride</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-3 backdrop-blur-sm">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <span className="text-white/80 text-sm font-medium">Innovation</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <a
              href="#about"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
              style={{ color: '#347AF6' }}
            >
              <span>Discover Our Mission</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-blue-600"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#347AF6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
              }}
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;