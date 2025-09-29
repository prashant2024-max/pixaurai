import { motion } from 'framer-motion';
import { Play, Sparkles, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
 
const Hero = () => {
  const { isDark } = useTheme();

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900'
        : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl ${
          isDark ? 'bg-blue-500/20' : 'bg-blue-500/10'
        }`}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl ${
          isDark ? 'bg-purple-500/20' : 'bg-purple-500/10'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent to-transparent ${
          isDark ? 'via-cyan-500/5' : 'via-cyan-500/3'
        }`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center"
          >
            <div className={`px-4 py-2 rounded-full border backdrop-blur-sm ${
              isDark 
                ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30'
                : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20'
            }`}>
              <span className={`flex items-center text-sm font-medium ${
                isDark ? 'text-blue-300' : 'text-blue-600'
              }`}>
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Creative Studio
              </span>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              isDark 
                ? 'from-white via-blue-200 to-purple-300'
                : 'from-gray-900 via-blue-700 to-purple-700'
            }`}>
              Turn Imagination
            </span>
            <br />
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              isDark 
                ? 'from-blue-400 via-cyan-400 to-purple-400'
                : 'from-blue-600 via-cyan-600 to-purple-600'
            }`}>
              into Reality
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Your AI Avatar, Your Voice, Your Story. Create stunning digital personas,
            clone voices with natural precision, and generate captivating videos with
            cutting-edge artificial intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group px-8 py-4 border rounded-xl text-lg font-semibold transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm ${
                isDark 
                  ? 'bg-gray-800/50 hover:bg-gray-700/50 border-gray-600 hover:border-gray-500'
                  : 'bg-white/50 hover:bg-white/70 border-gray-300 hover:border-gray-400'
              }`}
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Floating Avatar Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative mt-16"
          >
            {/* <div className="relative mx-auto w-80 h-auto md:w-96 md:h-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className={`relative rounded-full border p-8 shadow-2xl ${
                isDark 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700'
                  : 'bg-gradient-to-br from-white to-gray-100 border-gray-300'
              }`}>
                <div className={`w-full h-full rounded-full flex items-center justify-center ${
                  isDark 
                    ? 'bg-gradient-to-br from-blue-400/20 to-purple-400/20'
                    : 'bg-gradient-to-br from-blue-400/10 to-purple-400/10'
                }`}>
                  <Sparkles className={`w-24 h-24 animate-bounce ${
                    isDark ? 'text-cyan-400' : 'text-cyan-600'
                  }`} />
                </div>
              </div>
            </div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;