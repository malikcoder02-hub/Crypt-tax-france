import React from 'react';
import { TrendingUp, Shield, Calculator } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background with French flag gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-red-600/5"></div>
      
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-96 h-96 bg-gradient-to-tr from-red-400/20 to-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-300/10 to-red-300/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-gray-800 to-red-600 bg-clip-text text-transparent leading-tight">
            {content.hero.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            {content.hero.subtitle}
          </p>

          {/* Feature icons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-10">
            <div className="flex items-center space-x-3 bg-white/60 rounded-full px-6 py-3 border border-white/30">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-700 font-medium">Expert Analysis</span>
            </div>
            
            <div className="flex items-center space-x-3 bg-white/60 rounded-full px-6 py-3 border border-white/30">
              <div className="p-2 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-700 font-medium">Full Compliance</span>
            </div>
            
            <div className="flex items-center space-x-3 bg-white/60 rounded-full px-6 py-3 border border-white/30">
              <div className="p-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-700 font-medium">Tax Optimization</span>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:via-purple-700 hover:to-red-700"
          >
            <span className="relative z-10">Get Expert Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-red-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;