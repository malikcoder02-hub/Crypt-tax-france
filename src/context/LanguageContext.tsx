import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, Content } from '../types';

const languages: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' }
];

const content: Record<string, Content> = {
  en: {
    header: {
      home: 'Home',
      regulations: 'Regulations',
      reviews: 'Reviews',
      contact: 'Contact'
    },
    hero: {
      title: 'Crypto Tax Rules & Regulations in France',
      subtitle: 'Navigate French cryptocurrency taxation with expert guidance and comprehensive compliance solutions'
    },
    content: {
      title: 'Understanding Crypto Taxation in France',
      sections: {
        rules: {
          title: 'Crypto Tax Rules & Regulations in France',
          content: 'France has established comprehensive cryptocurrency tax regulations. Digital assets are generally treated as movable property, and transactions are subject to capital gains tax. The French tax administration (DGFiP) requires detailed reporting of crypto activities, including trading, mining, and staking rewards.'
        },
        when: {
          title: 'When Taxes May Apply',
          content: 'Tax obligations arise when you sell, exchange, or use cryptocurrencies for goods and services. Mining rewards, staking income, and airdrops are also taxable events. Professional traders may be subject to different tax rates and reporting requirements compared to occasional investors.'
        },
        rates: {
          title: 'Crypto Tax Rates in France (2025)',
          content: 'Capital gains from cryptocurrency sales are subject to a flat tax rate of 30% (including social contributions). Professional traders are taxed under the progressive income tax scale. Losses can be offset against gains within the same tax year, with specific rules for carry-forward provisions.'
        },
        help: {
          title: 'How SteuerKlar GmbH Helps You',
          content: 'Our expert team provides comprehensive crypto tax services including transaction analysis, tax optimization strategies, and compliance reporting. We ensure accurate calculations and help minimize your tax liability while maintaining full compliance with French regulations.'
        }
      }
    },
    reviews: {
      title: 'What Our Clients Say',
      items: [
        {
          id: 1,
          name: 'Marie Dubois',
          rating: 5,
          comment: 'Excellent service! They made crypto tax compliance so much easier to understand and manage.',
          avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        },
        {
          id: 2,
          name: 'Pierre Martin',
          rating: 5,
          comment: 'Professional and knowledgeable team. Saved me hours of work and potential compliance issues.',
          avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        },
        {
          id: 3,
          name: 'Sophie Laurent',
          rating: 5,
          comment: 'Highly recommend their services. Clear explanations and excellent customer support.',
          avatar: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        },
        {
          id: 4,
          name: 'Jean-Luc Bernard',
          rating: 4,
          comment: 'Great expertise in French crypto regulations. Made the tax filing process smooth and efficient.',
          avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        }
      ]
    },
    contact: {
      title: 'Start Your Consultation Now',
      subtitle: 'Get expert guidance on your crypto tax obligations',
      form: {
        fullName: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Message',
        submit: 'Submit Consultation Request'
      },
      subtext: 'Our team will get back to you within 24 hours.'
    },
    footer: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  },
  fr: {
    header: {
      home: 'Accueil',
      regulations: 'Réglementations',
      reviews: 'Avis',
      contact: 'Contact'
    },
    hero: {
      title: 'Règles et Réglementations Fiscales Crypto en France',
      subtitle: 'Naviguez dans la taxation des cryptomonnaies françaises avec des conseils d\'experts et des solutions de conformité complètes'
    },
    content: {
      title: 'Comprendre la Fiscalité Crypto en France',
      sections: {
        rules: {
          title: 'Règles et Réglementations Fiscales Crypto en France',
          content: 'La France a établi des réglementations fiscales complètes pour les cryptomonnaies. Les actifs numériques sont généralement traités comme des biens meubles, et les transactions sont soumises à l\'impôt sur les plus-values. L\'administration fiscale française (DGFiP) exige une déclaration détaillée des activités crypto.'
        },
        when: {
          title: 'Quand les Impôts Peuvent S\'Appliquer',
          content: 'Les obligations fiscales surviennent lorsque vous vendez, échangez ou utilisez des cryptomonnaies pour des biens et services. Les récompenses de minage, les revenus de staking et les airdrops sont aussi des événements imposables.'
        },
        rates: {
          title: 'Taux d\'Imposition Crypto en France (2025)',
          content: 'Les plus-values des ventes de cryptomonnaies sont soumises à un taux forfaitaire de 30% (cotisations sociales incluses). Les traders professionnels sont imposés selon le barème progressif de l\'impôt sur le revenu.'
        },
        help: {
          title: 'Comment SteuerKlar GmbH Vous Aide',
          content: 'Notre équipe d\'experts fournit des services fiscaux crypto complets incluant l\'analyse des transactions, les stratégies d\'optimisation fiscale et la déclaration de conformité.'
        }
      }
    },
    reviews: {
      title: 'Ce Que Disent Nos Clients',
      items: [
        {
          id: 1,
          name: 'Marie Dubois',
          rating: 5,
          comment: 'Service excellent ! Ils ont rendu la conformité fiscale crypto beaucoup plus facile à comprendre et à gérer.',
          avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        },
        {
          id: 2,
          name: 'Pierre Martin',
          rating: 5,
          comment: 'Équipe professionnelle et compétente. M\'a fait économiser des heures de travail et éviter des problèmes de conformité.',
          avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        },
        {
          id: 3,
          name: 'Sophie Laurent',
          rating: 5,
          comment: 'Je recommande vivement leurs services. Explications claires et excellent support client.',
          avatar: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        },
        {
          id: 4,
          name: 'Jean-Luc Bernard',
          rating: 4,
          comment: 'Grande expertise dans les réglementations crypto françaises. Processus de déclaration fiscale fluide et efficace.',
          avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        }
      ]
    },
    contact: {
      title: 'Commencez Votre Consultation Maintenant',
      subtitle: 'Obtenez des conseils d\'experts sur vos obligations fiscales crypto',
      form: {
        fullName: 'Nom Complet',
        email: 'Adresse Email',
        phone: 'Numéro de Téléphone',
        message: 'Message',
        submit: 'Envoyer la Demande de Consultation'
      },
      subtext: 'Notre équipe vous répondra dans les 24 heures.'
    },
    footer: {
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions de Service'
    }
  }
};

interface LanguageContextType {
  currentLanguage: Language;
  content: Content;
  switchLanguage: (code: 'en' | 'fr') => void;
  languages: Language[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const switchLanguage = (code: 'en' | 'fr') => {
    const language = languages.find(lang => lang.code === code);
    if (language) {
      setCurrentLanguage(language);
    }
  };

  const value: LanguageContextType = {
    currentLanguage,
    content: content[currentLanguage.code],
    switchLanguage,
    languages
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};