import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Shield, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Vision = () => {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To democratize AI-powered content creation, making advanced avatar and voice technologies accessible to everyone.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI, constantly evolving our technology to stay ahead of the curve.',
    },
    {
      icon: Shield,
      title: 'Ethical AI',
      description: 'We prioritize responsible AI development with transparency, user consent, and ethical guidelines at our core.',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Empowering creators, educators, and businesses worldwide to tell their stories in new and innovative ways.',
    }
  ];

  return (
    <section
      className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-gradient-to-br from-gray-900 to-blue-900/20' : 'bg-gradient-to-br from-gray-50 to-blue-50/20'
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
              Our Vision for the Future
            </span>
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-700'
            }`}
          >
            We're building a world where artificial intelligence amplifies human creativity, 
            enabling anyone to bring their digital personas and stories to life with unprecedented ease and quality.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group text-center cursor-pointer"
                onClick={() => setCurrentIndex(index)}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex p-4 rounded-2xl border backdrop-blur-sm mb-6 transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                      : isDark
                        ? 'bg-gray-600 hover:bg-gray-500'
                        : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className={`text-xl font-bold mb-4 transition-all duration-300 ${
                  isDark
                    ? 'text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text'
                    : 'text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text'
                }`}>
                  {value.title}
                </h3>

                <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className={`inline-block p-8 rounded-2xl border backdrop-blur-sm transition-colors duration-300 ${
            isDark
              ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/30'
              : 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-300'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Ready to Shape the Future?
            </h3>
            <p className={`mb-6 max-w-2xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Join our community of innovators and be part of the AI revolution that's transforming digital creativity.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg font-semibold transition-all duration-300 text-white"
            >
              Join Our Mission
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
