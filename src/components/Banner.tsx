import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';


const Banner = () => {
  const { isDark } = useTheme();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 space-y-8">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center mb-6"
            >
              <div className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                <span className={`flex items-center text-sm font-medium  
                    ${isDark 
                      ? 'text-blue-300'
                      : ''
                    }
                  `}>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Limited Time Offer
                </span>
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Your Creative Vision?
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Join thousands of creators who are already using AI to bring their ideas to life. 
              Start your journey with AIvatarStudio today and unlock unlimited creative possibilities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                <span>Start Creating Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.p
                whileHover={{ scale: 1.02 }}
                className="text-sm text-gray-400 flex items-center"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Free trial • No credit card required
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-8 border-t border-gray-800"
            >
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  50K+
                </div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  1M+
                </div>
                <div className="text-sm text-gray-400">Avatars Created</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  99.9%
                </div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;