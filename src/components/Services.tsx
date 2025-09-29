import { motion } from 'framer-motion';
import { Image, Video, MessageSquare, Mic, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Services = () => {
  const { isDark } = useTheme();

  const services = [
    {
      icon: Image,
      title: 'Image → Avatar',
      description: 'Transform any photo into a lifelike AI avatar with advanced facial recognition and realistic rendering technology.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: Video,
      title: 'Video → Avatar',
      description: 'Convert video footage into dynamic avatars that capture movement, expressions, and personality traits.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: MessageSquare,
      title: 'Prompt → Avatar',
      description: 'Describe your ideal avatar and watch AI generate it from text descriptions with stunning accuracy.',
      gradient: 'from-green-500 to-teal-500',
      bgGradient: 'from-green-500/20 to-teal-500/20'
    },
    {
      icon: Mic,
      title: 'Voice Cloning',
      description: 'Clone any voice with natural intonation and emotion, supporting multiple languages and accents.',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/20 to-red-500/20'
    }
  ];

  return (
    <section
      className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Core AI Services
            </span>
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Harness the power of advanced artificial intelligence to create, clone,
            and generate content that pushes the boundaries of digital creativity.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden"
              >
                {/* Hover Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl`}
                ></div>

                {/* Card */}
                <div
                  className={`relative rounded-2xl p-8 border transition-all duration-300 backdrop-blur-sm ${
                    isDark
                      ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                      : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm'
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.bgGradient} border border-white/10 mb-6`}
                  >
                    <Icon
                      className={`w-8 h-8 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`}  fill="white"
                    />
                  </div>

                  {/* Fixed Heading (no flicker) */}
                  <h3
                    className={`text-2xl font-bold mb-4 transition-all duration-300 bg-gradient-to-r bg-clip-text text-transparent ${
                      isDark
                        ? 'from-gray-200 to-gray-400 group-hover:from-white group-hover:to-gray-300'
                        : 'from-gray-800 to-gray-600 group-hover:from-gray-900 group-hover:to-gray-700'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mb-6 leading-relaxed ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.gradient} hover:shadow-lg rounded-lg font-semibold transition-all duration-300 text-white`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
