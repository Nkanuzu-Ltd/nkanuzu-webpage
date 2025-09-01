import React from 'react';
import { Heart, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  const footerLinks = [
    {
      title: 'Company',
      links: ['About Us', 'Our Mission', 'Team', 'Careers']
    },
    {
      title: 'Services',
      links: ['Web Development', 'Mobile Apps', 'Digital Archives', 'Consulting']
    },
    {
      title: 'Culture',
      links: ['Stories', 'Languages', 'Traditions', 'Community']
    },
    {
      title: 'Resources',
      links: ['Blog', 'Documentation', 'Support', 'Contact']
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/logo.png"
                alt="Nkanuzu Logo"
                className="h-10"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Projecting African culture to the world through innovative technology solutions.
              Building bridges between tradition and digital innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors duration-300"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#347AF6'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#374151'}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>in Africa for the world</span>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <span>&copy; 2025 Nkanuzu LTD. All rights reserved.</span>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;