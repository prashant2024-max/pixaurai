import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Testimonials = () => {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Content Creator',
      company: 'TechTalk Media',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: "AIvatarStudio revolutionized my content creation process. The voice cloning feature is incredibly natural, and my audience can't tell the difference!",
      rating: 5
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Digital Marketing Director',
      company: 'InnovateCorp',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: "The avatar generation from prompts saved us weeks of production time. Our clients are amazed by the quality and realism.",
      rating: 5
    },
    {
      id: 3,
      name: 'Dr. Emily Watson',
      role: 'Education Technology Lead',
      company: 'FutureLearn Institute',
      avatar: 'https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: "Our online courses became so much more engaging with AI avatars. Student retention improved by 40% since we started using this platform.",
      rating: 5
    },
    {
      id: 4,
      name: 'Alex Thompson',
      role: 'Creative Director',
      company: 'Pixel Studios',
      avatar: 'https://images.pexels.com/photos/2770600/pexels-photo-2770600.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: "The video-to-avatar feature is mind-blowing. We can create consistent brand personas across all our client campaigns effortlessly.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      className={`py-20 transition-colors duration-300 ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              What Our Customers Say
            </span>
          </h2>
          <p
            className={`text-lg ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Trusted by creators, businesses, and educators worldwide
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`rounded-2xl p-8 md:p-12 border backdrop-blur-sm transition-colors duration-300 ${
                isDark
                  ? 'bg-gray-800/50 border-gray-700'
                  : 'bg-white/60 border-gray-300 shadow-lg'
              }`}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-gradient-to-r from-blue-400 to-purple-400"
                />
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote
                    className={`text-xl md:text-2xl mb-6 leading-relaxed italic ${
                      isDark ? 'text-gray-200' : 'text-gray-700'
                    }`}
                  >
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  
                  <div>
                    <p
                      className={`text-lg font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {testimonials[currentIndex].name}
                    </p>
                    <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-cyan-500 font-medium">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full border transition-all duration-200 ${
              isDark
                ? 'bg-gray-800/80 hover:bg-gray-700/80 border-gray-600 hover:border-gray-500'
                : 'bg-white/80 hover:bg-gray-100 border-gray-300 hover:border-gray-400 shadow'
            }`}
          >
            <ChevronLeft className={`w-6 h-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`} />
          </button>

          <button
            onClick={nextTestimonial}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full border transition-all duration-200 ${
              isDark
                ? 'bg-gray-800/80 hover:bg-gray-700/80 border-gray-600 hover:border-gray-500'
                : 'bg-white/80 hover:bg-gray-100 border-gray-300 hover:border-gray-400 shadow'
            }`}
          >
            <ChevronRight className={`w-6 h-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                    : isDark
                      ? 'bg-gray-600 hover:bg-gray-500'
                      : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
