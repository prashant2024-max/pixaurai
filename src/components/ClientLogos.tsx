import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ClientLogos = () => {
  const { isDark } = useTheme();

  const clients = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'InnovateLab', logo: 'IL' },
    { name: 'DigitalFlow', logo: 'DF' },
    { name: 'CreativeStudio', logo: 'CS' },
    { name: 'NextGen', logo: 'NG' },
    { name: 'FutureWorks', logo: 'FW' },
    { name: 'SmartSolutions', logo: 'SS' },
    { name: 'PixelPerfect', logo: 'PP' }
  ];

  return (
    <section
      className={`py-16 transition-colors duration-300 ${
        isDark ? 'bg-gray-900/50' : 'bg-gray-50/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p
            className={`text-lg font-medium ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Trusted by leading companies worldwide
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: '-100%' }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="flex space-x-12 whitespace-nowrap"
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                whileHover={{ scale: 1.1 }}
                className={`flex-shrink-0 w-24 h-24 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-800/50 border-gray-600 hover:border-blue-500/50'
                    : 'bg-white/60 border-gray-300 hover:border-blue-400/50 shadow'
                }`}
              >
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {client.logo}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
