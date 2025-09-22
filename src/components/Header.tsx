import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { content, currentLanguage, switchLanguage, languages } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
              CryptoTax FR
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {content.header.home}
            </button>
            <button 
              onClick={() => scrollToSection('regulations')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {content.header.regulations}
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {content.header.reviews}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {content.header.contact}
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-red-50 border border-white/20 hover:from-blue-100 hover:to-red-100 transition-all"
              >
                <span className="text-sm font-medium">{currentLanguage.name}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white/90 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 py-1">
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
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-white/20">
          <div className="px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {content.header.home}
            </button>
            <button 
              onClick={() => scrollToSection('regulations')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {content.header.regulations}
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {content.header.reviews}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {content.header.contact}
            </button>
            
            {/* Mobile Language Switcher */}
            <div className="border-t border-gray-200 pt-4">
              <div className="flex space-x-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      switchLanguage(lang.code);
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-2 rounded-lg text-sm transition-all ${
                      currentLanguage.code === lang.code 
                        ? 'bg-gradient-to-r from-blue-100 to-red-100 font-medium' 
                        : 'bg-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-red-50'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;