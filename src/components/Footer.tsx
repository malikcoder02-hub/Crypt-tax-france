import React, { useState } from 'react';
import { Heart, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { content, currentLanguage, switchLanguage, languages } = useLanguage();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-gradient-to-t from-blue-300/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-t from-red-300/10 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          
          {/* Logo and Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent mb-2">
              CryptoTax FR
            </h3>
            <p className="text-gray-600 max-w-md">
              Expert crypto tax guidance for French regulations. Ensuring compliance and optimizing your tax strategy.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-8">
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              {content.footer.privacy}
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              {content.footer.terms}
            </a>
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/70 backdrop-blur-lg border border-white/20 hover:bg-white/80 transition-all shadow-sm"
              >
                <Globe className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">{currentLanguage.name}</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute bottom-full mb-2 right-0 w-32 bg-white/90 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        switchLanguage(lang.code);
                        setIsLanguageOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gradient-to-r hover:from-blue-50 hover:to-red-50 transition-all ${
                        currentLanguage.code === lang.code ? 'bg-gradient-to-r from-blue-100 to-red-100 font-medium' : ''
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-gradient-to-r from-blue-200/50 via-purple-200/50 to-red-200/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © 2025 CryptoTax FR. All rights reserved.
              </p>
            </div>

            {/* Made with love */}
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in France</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;