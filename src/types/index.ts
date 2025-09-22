export interface Language {
  code: 'en' | 'fr';
  name: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface Content {
  header: {
    home: string;
    regulations: string;
    reviews: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  content: {
    title: string;
    sections: {
      rules: {
        title: string;
        content: string;
      };
      when: {
        title: string;
        content: string;
      };
      rates: {
        title: string;
        content: string;
      };
      help: {
        title: string;
        content: string;
      };
    };
  };
  reviews: {
    title: string;
    items: Review[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      fullName: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
    };
    subtext: string;
  };
  footer: {
    privacy: string;
    terms: string;
  };
}