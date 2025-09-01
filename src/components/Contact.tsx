import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Let's Build <span className="text-blue-500" style={{ color: '#347AF6' }}>Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to embark on a journey that celebrates African culture through technology?
            We'd love to hear from you and explore how we can collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: '#347AF6' }}
              >
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@nkanuzu.net">info@nkanuzu.net</a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: '#347AF6' }}
              >
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">No 62, Uzari Street Agbariji, Enugu</p>
                <p className="text-gray-600">Enugu State, Nigeria</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: '#347AF6' }}
              >
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect</h3>
                <p className="text-gray-600">
                  <a href="tel:+2347068438757">+234 706 843 8757</a>
                </p>
              </div>
            </div>

            {/* Cultural Note */}
            <div
              className="rounded-2xl p-6 border"
              style={{
                backgroundColor: '#347AF6' + '10',
                borderColor: '#347AF6' + '30'
              }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Ubuntu Philosophy</h4>
              <p className="text-gray-700 leading-relaxed">
                "I am because we are" — This African philosophy guides our approach to collaboration.
                When you succeed, we all succeed. Let's build something meaningful together.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Start a Conversation</h3>
            <form
              className="space-y-6"
              onSubmit={async (e: React.FormEvent) => {
                e.preventDefault();

                const form = e.currentTarget as HTMLFormElement;
                try {
                  await emailjs.sendForm("service_5kquu0l", "template_37tjacj", form);
                  alert("Message sent successfully!");
                  form.reset();
                } catch (error) {
                  console.error("Error sending message:", error);
                  alert("Failed to send message. Please try again later.");
                }
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a project type</option>
                  <option value="cultural-platform">Cultural Platform</option>
                  <option value="educational-app">Educational App</option>
                  <option value="community-website">Community Website</option>
                  <option value="digital-archive">Digital Archive</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell Us About Your Vision
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Share your ideas, goals, and how we can help bring your cultural project to life..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                style={{ background: '#347AF6' }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#2563eb'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#347AF6'}
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;