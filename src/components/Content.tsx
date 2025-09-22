import React from 'react';
import { FileText, AlertCircle, Calculator, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Content: React.FC = () => {
  const { content } = useLanguage();

  const sections = [
    {
      id: 'rules',
      icon: FileText,
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      data: content.content.sections.rules
    },
    {
      id: 'when',
      icon: AlertCircle,
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
      data: content.content.sections.when
    },
    {
      id: 'rates',
      icon: Calculator,
      gradient: 'from-indigo-500 to-indigo-600',
      bgGradient: 'from-indigo-50 to-indigo-100',
      data: content.content.sections.rates
    },
    {
      id: 'help',
      icon: Users,
      gradient: 'from-red-500 to-red-600',
      bgGradient: 'from-red-50 to-red-100',
      data: content.content.sections.help
    }
  ];

  return (
    <section id="regulations" className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-red-100/30 to-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-red-600 bg-clip-text text-transparent">
            {content.content.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about cryptocurrency taxation in France, simplified and explained by experts.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto rounded-full mt-8"></div>
        </div>

        {/* Content Grid - New Card Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div 
                key={section.id}
                className="group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${section.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-gray-300/50 hover:bg-white/90">
                  {/* Icon and Title Row */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${section.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                        {section.data.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors">
                    {section.data.content}
                  </p>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-red-600/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-12 border border-white/30 shadow-2xl">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                  Ready to Simplify Your Crypto Taxes?
                </h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Don't navigate the complex world of crypto taxation alone. Our experts are here to ensure you stay compliant while optimizing your tax strategy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button 
                    onClick={() => {
                      const element = document.getElementById('contact');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-white font-semibold rounded-full hover:from-blue-700 hover:via-purple-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center space-x-2">
                      <span>Get Expert Consultation</span>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  <div className="text-sm text-gray-500">
                    Free initial consultation • No obligation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;