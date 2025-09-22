import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Reviews: React.FC = () => {
  const { content } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = content.reviews.items;

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-blue-50 via-white to-red-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-red-400/10 to-red-600/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-purple-300/10 to-purple-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
            {content.reviews.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Review Display */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl min-h-[300px] flex flex-col justify-center">
            <div className="text-center">
              {/* Avatar */}
              <div className="mb-6">
                <img
                  src={reviews[currentIndex].avatar}
                  alt={reviews[currentIndex].name}
                  className="w-20 h-20 rounded-full mx-auto border-4 border-gradient-to-r from-blue-200 to-red-200 object-cover shadow-lg"
                />
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-4">
                {renderStars(reviews[currentIndex].rating)}
              </div>

              {/* Comment */}
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 font-medium italic leading-relaxed">
                "{reviews[currentIndex].comment}"
              </blockquote>

              {/* Name */}
              <cite className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                {reviews[currentIndex].name}
              </cite>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevReview}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextReview}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-blue-500 to-red-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Review Grid for larger screens */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`bg-white/60 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                index === currentIndex ? 'ring-2 ring-blue-400' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="text-center">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mx-auto mb-3 object-cover"
                />
                <div className="flex justify-center mb-2">
                  {renderStars(review.rating)}
                </div>
                <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                  "{review.comment}"
                </p>
                <p className="text-sm font-semibold text-gray-800">
                  {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;