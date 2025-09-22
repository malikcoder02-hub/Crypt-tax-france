import React from 'react';
import { FileText, AlertCircle, Calculator, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Content: React.FC = () => {
  const { content } = useLanguage();

  const sections = [
    {
      id: 'rules',
      icon: FileText,
      gradient: 'from-blue-500 to-blue-600',
      data: content.content.sections.rules
    },
    {
      id: 'when',
      icon: AlertCircle,
      gradient: 'from-purple-500 to-purple-600',
      data: content.content.sections.when
    },
    {
      id: 'rates',
      icon: Calculator,
      gradient: 'from-indigo-500 to-indigo-600',
      data: content.content.sections.rates
    },
    {
      id: 'help',
      icon: Users,
      gradient: 'from-red-500 to-red-600',
      data: content.content.sections.help
    }
  ];

  return (
    <section id="regulations" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-r from-blue-300/20 to-red-300/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-gradient-to-r from-red-300/20 to-blue-300/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
            {content.content.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 md:gap-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div 
                key={section.id}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Icon Section */}
                <div className="flex-shrink-0">
                  <div className={`w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r ${section.gradient} rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 lg:max-w-3xl">
                  <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/80">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                      {section.data.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {section.data.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Don't let crypto tax compliance overwhelm you. Let our experts handle the complexity while you focus on your investments.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;