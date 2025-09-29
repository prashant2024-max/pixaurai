import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Users, GraduationCap, Briefcase, Gamepad2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const UseCasesSlider = () => {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const useCases = [
    {
      id: 1,
      icon: Play,
      title: 'Content Creators',
      subtitle: 'Streamline Your Production',
      description: 'Create consistent avatars for your brand, clone your voice for multiple languages, and generate video content at scale without the need for expensive equipment.',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      gradient: 'from-red-500 to-pink-500',
      features: ['Brand Consistency', 'Multi-language Content', 'Scalable Production']
    },
    {
      id: 2,
      icon: GraduationCap,
      title: 'Education',
      subtitle: 'Engaging Learning Experiences',
      description: 'Transform traditional education with AI avatars that can teach in any language, making learning more interactive and accessible for students worldwide.',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Interactive Teaching', 'Multi-language Support', 'Personalized Learning']
    },
    {
      id: 3,
      icon: Briefcase,
      title: 'Business Presentations',
      subtitle: 'Professional Communication',
      description: 'Elevate your corporate communications with professional AI avatars for training videos, product demos, and internal communications.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      gradient: 'from-purple-500 to-indigo-500',
      features: ['Corporate Training', 'Product Demos', 'Global Reach']
    },
    {
      id: 4,
      icon: Gamepad2,
      title: 'Gaming & Entertainment',
      subtitle: 'Immersive Experiences',
      description: 'Create unique characters and NPCs for games, virtual events, and entertainment platforms with lifelike avatars and natural voice acting.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      gradient: 'from-green-500 to-teal-500',
      features: ['Character Creation', 'Voice Acting', 'Virtual Events']
    }
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % useCases.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + useCases.length) % useCases.length);

  return (
    <section
      className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Real-World Applications
            </span>
          </h2>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-700'} text-lg max-w-3xl mx-auto`}>
            Discover how different industries are leveraging AI avatars and voice cloning to transform their workflows and engage their audiences.
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
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-xl border backdrop-blur-sm ${
                      isDark
                        ? `bg-gradient-to-br ${useCases[currentIndex].gradient} bg-opacity-20 border-white/10`
                        : `bg-gradient-to-br ${useCases[currentIndex].gradient} bg-opacity-10 border-gray-300`
                    }`}
                  >
                    {(() => {
                      const Icon = useCases[currentIndex].icon;
                      return <Icon className={`w-8 h-8 bg-gradient-to-br ${useCases[currentIndex].gradient} bg-clip-text text-transparent`}  fill="white"/>;
                    })()}
                  </div>
                  <div>
                    <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} text-2xl font-bold`}>
                      {useCases[currentIndex].title}
                    </h3>
                    <p className={`text-lg bg-gradient-to-r ${useCases[currentIndex].gradient} bg-clip-text text-transparent font-medium`}>
                      {useCases[currentIndex].subtitle}
                    </p>
                  </div>
                </div>

                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed`}>
                  {useCases[currentIndex].description}
                </p>

                <div className="space-y-3">
                  {useCases[currentIndex].features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${useCases[currentIndex].gradient}`}></div>
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${useCases[currentIndex].gradient} hover:shadow-lg text-white`}
                >
                  Explore Use Case
                </motion.button>
              </div>

              {/* Image */}
              <motion.div whileHover={{ scale: 1.02 }} className="relative overflow-hidden rounded-2xl">
                <img
                  src={useCases[currentIndex].image}
                  alt={useCases[currentIndex].title}
                  className="w-full h-80 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${useCases[currentIndex].gradient} opacity-20`}></div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={prevSlide}
              className={`p-3 rounded-full border transition-all duration-200 ${
                isDark
                  ? 'bg-gray-800/80 border-gray-600 hover:bg-gray-700/80 hover:border-gray-500'
                  : 'bg-gray-100/80 border-gray-300 hover:bg-gray-200/80 hover:border-gray-400'
              }`}
            >
              <ChevronLeft className={`${isDark ? 'text-gray-300' : 'text-gray-700'} w-6 h-6`} />
            </button>

            <div className="flex space-x-2">
              {useCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? `bg-gradient-to-r ${useCases[currentIndex].gradient}`
                      : isDark
                      ? 'bg-gray-600 hover:bg-gray-500'
                      : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className={`p-3 rounded-full border transition-all duration-200 ${
                isDark
                  ? 'bg-gray-800/80 border-gray-600 hover:bg-gray-700/80 hover:border-gray-500'
                  : 'bg-gray-100/80 border-gray-300 hover:bg-gray-200/80 hover:border-gray-400'
              }`}
            >
              <ChevronRight className={`${isDark ? 'text-gray-300' : 'text-gray-700'} w-6 h-6`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSlider;
