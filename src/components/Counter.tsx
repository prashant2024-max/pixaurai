import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Mic, Video, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Counter = () => {
  const { isDark } = useTheme();
  const [counts, setCounts] = useState({
    avatars: 0,
    audio: 0,
    videos: 0,
    users: 0
  });

  const targets = {
    avatars: 2847,
    audio: 15624,
    videos: 8935,
    users: 12543
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(targets).map((key) => {
      const target = targets[key as keyof typeof targets];
      const increment = target / steps;
      let current = 0;
      let step = 0;

      return setInterval(() => {
        step++;
        current = Math.min(target, Math.floor(increment * step));
        setCounts(prev => ({ ...prev, [key]: current }));

        if (step >= steps) {
          clearInterval(intervals[Object.keys(targets).indexOf(key)]);
        }
      }, stepDuration);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const stats = [
    {
      icon: Users,
      label: 'Avatars Created',
      value: counts.avatars,
      suffix: '+',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Mic,
      label: 'Audio Generated',
      value: counts.audio,
      suffix: '+',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: Video,
      label: 'Videos Produced',
      value: counts.videos,
      suffix: '+',
      color: 'from-green-400 to-teal-400'
    },
    {
      icon: Zap,
      label: 'Active Users',
      value: counts.users,
      suffix: '+',
      color: 'from-orange-400 to-red-400'
    }
  ];

  return (
    <section className={`py-20 transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              isDark 
                ? 'from-blue-400 to-purple-400'
                : 'from-blue-600 to-purple-600'
            }`}>
              Powering Creativity Worldwide
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Join thousands of creators who trust our AI technology to bring their visions to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} backdrop-blur-sm mb-4 counterIcon ${
                    isDark 
                      ? 'bg-opacity-20 border border-white/10'
                      : 'bg-opacity-10 border border-gray-200'
                  }`}
                >
                  <Icon className={`w-8 h-8 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} fill="white" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.value.toLocaleString()}{stat.suffix}
                </motion.div>
                <p className={`font-medium ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Counter;