import { motion } from 'framer-motion';
import { Play, Users, GraduationCap, Briefcase, Gamepad2, Mic, ArrowRight } from 'lucide-react';

const UseCasesPage = () => {
  const useCases = [
    {
      icon: Play,
      title: 'Content Creation',
      description: 'Streamline video production with AI avatars and voice cloning',
      features: [
        'Consistent brand persona across all content',
        'Multi-language content creation',
        'Reduce filming time by 80%',
        'Professional quality without expensive equipment'
      ],
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: GraduationCap,
      title: 'Online Education',
      description: 'Create engaging educational content with interactive AI avatars',
      features: [
        'Interactive virtual instructors',
        'Multi-language course delivery',
        'Personalized learning experiences',
        '24/7 available AI tutors'
      ],
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Briefcase,
      title: 'Corporate Training',
      description: 'Transform employee training with realistic AI presenters',
      features: [
        'Standardized training delivery',
        'Cost-effective scalable solution',
        'Interactive compliance training',
        'Global rollout capabilities'
      ],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Gamepad2,
      title: 'Gaming & Entertainment',
      description: 'Create immersive characters and NPCs for gaming experiences',
      features: [
        'Dynamic character generation',
        'Voice acting at scale',
        'Interactive storytelling',
        'Virtual event hosting'
      ],
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Users,
      title: 'Customer Service',
      description: 'Deploy AI avatars for 24/7 customer support',
      features: [
        '24/7 availability',
        'Consistent service quality',
        'Multi-language support',
        'Reduced operational costs'
      ],
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Mic,
      title: 'Podcast Production',
      description: 'Generate podcast content with AI voices and avatars',
      features: [
        'Voice consistency across episodes',
        'Multiple character voices',
        'Automated content generation',
        'Professional audio quality'
      ],
      image: 'https://images.pexels.com/photos/3784324/pexels-photo-3784324.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gradient: 'from-purple-600 to-blue-600'
    }
  ];

  const industries = [
    { name: 'Entertainment', percentage: 35 },
    { name: 'Education', percentage: 28 },
    { name: 'Corporate', percentage: 20 },
    { name: 'Gaming', percentage: 12 },
    { name: 'Other', percentage: 5 }
  ];

  return (
    <div className="pt-16 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Use Cases
              </span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Discover how AI avatars and voice cloning are transforming industries and empowering creators worldwide.
            </p>
          </motion.div>

          {/* Industry Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 mb-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Industry Adoption Rate
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {industries.map((industry) => (
                <div key={industry.name} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {industry.percentage}%
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{industry.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-20`}></div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${useCase.gradient} bg-opacity-20 border border-white/10 mr-4`}>
                        <Icon className={`w-6 h-6 bg-gradient-to-br ${useCase.gradient} bg-clip-text text-transparent`} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {useCase.title}
                      </h3>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      {useCase.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {useCase.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${useCase.gradient} mr-3`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group/btn flex items-center px-6 py-3 bg-gradient-to-r ${useCase.gradient} hover:shadow-lg rounded-lg font-semibold transition-all duration-300`}
                    >
                      <span>Explore Solution</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Transform Your Industry?
              </span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the AI revolution and discover how our technology can revolutionize your workflow.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl text-lg font-semibold transition-all duration-300"
            >
              Start Your Free Trial
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UseCasesPage;
