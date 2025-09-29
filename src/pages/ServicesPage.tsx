import { motion } from 'framer-motion';
import { 
  Image, 
  Video, 
  MessageSquare, 
  Mic, 
  Wand2, 
  Sparkles,
  Check,
  ArrowRight,
  Clock,
  Shield,
  Zap
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Image,
      title: 'Image → Avatar',
      subtitle: 'Transform Photos into Lifelike Avatars',
      description: 'Upload any photo and watch our AI create a stunning, realistic avatar with advanced facial recognition and rendering technology.',
      features: [
        'High-resolution avatar generation',
        'Facial expression mapping',
        'Multiple style options',
        'Batch processing capability',
        'Real-time preview'
      ],
      techSpecs: [
        'Input: JPG, PNG, WebP (up to 10MB)',
        'Output: 4K resolution avatars',
        'Processing time: 2-5 minutes',
        'Accuracy: 98.5% facial mapping'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Video,
      title: 'Video → Avatar',
      subtitle: 'Convert Videos into Dynamic Avatars',
      description: 'Transform video footage into animated avatars that capture movement, expressions, and personality traits with incredible precision.',
      features: [
        'Motion capture from video',
        'Expression analysis',
        'Gesture recognition',
        'Multiple camera angles',
        'Voice synchronization'
      ],
      techSpecs: [
        'Input: MP4, MOV, AVI (up to 500MB)',
        'Output: Animated avatar models',
        'Processing time: 10-30 minutes',
        'Frame rate: Up to 60fps'
      ],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: MessageSquare,
      title: 'Prompt → Avatar',
      subtitle: 'Generate Avatars from Text Descriptions',
      description: 'Describe your ideal avatar in natural language and watch our AI generate it with stunning accuracy and detail.',
      features: [
        'Natural language processing',
        'Style customization',
        'Iterative refinement',
        'Multiple variations',
        'Real-time generation'
      ],
      techSpecs: [
        'Input: Text descriptions (any length)',
        'Output: Custom avatar designs',
        'Processing time: 1-3 minutes',
        'Variations: Up to 10 per prompt'
      ],
      gradient: 'from-green-500 to-teal-500',
      bgGradient: 'from-green-500/20 to-teal-500/20',
      image: 'https://images.pexels.com/photos/3784324/pexels-photo-3784324.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Mic,
      title: 'Voice Cloning',
      subtitle: 'Natural Audio & Voice Replication',
      description: 'Clone any voice with natural intonation and emotion, supporting multiple languages and accents with remarkable fidelity.',
      features: [
        'Multi-language support',
        'Emotion recognition',
        'Accent preservation',
        'Real-time synthesis',
        'Custom voice training'
      ],
      techSpecs: [
        'Input: WAV, MP3 (minimum 5 minutes)',
        'Output: High-quality voice models',
        'Processing time: 15-45 minutes',
        'Languages: 50+ supported'
      ],
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/20 to-red-500/20',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const additionalServices = [
    {
      icon: Wand2,
      title: 'AI Video Generation',
      description: 'Create professional videos with AI avatars and synthetic voices',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Sparkles,
      title: 'Custom AI Models',
      description: 'Develop specialized AI models tailored to your specific needs',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Reduce production time by up to 80% with automated AI generation'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security with end-to-end encryption'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing with 99.9% uptime guarantee'
    }
  ];

  return (
    <div className="pt-16">

      {/* Hero Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered solutions for avatar creation, voice cloning, and video generation with cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-col-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.bgGradient} border border-white/10`}>
                        <Icon className={`w-8 h-8 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`} />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          {service.title}
                        </h2>
                        <p className={`text-lg bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent font-medium`}>
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-gray-900 dark:text-white font-semibold mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                              <Check className={`w-4 h-4 mr-3 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-gray-900 dark:text-white font-semibold mb-3">Technical Specs</h4>
                        <ul className="space-y-2">
                          {service.techSpecs.map((spec, specIndex) => (
                            <li key={specIndex} className="text-gray-600 dark:text-gray-400 text-sm">
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group flex items-center px-8 py-4 bg-gradient-to-r ${service.gradient} hover:shadow-lg rounded-xl font-semibold transition-all duration-300`}
                    >
                      <span>Try {service.title.split(' ')[0]} Service</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden rounded-2xl"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${service.gradient} opacity-20`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Additional Services
              </span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Expand your creative possibilities with our specialized AI solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-20 border border-white/10 mb-6`}>
                    <Icon className={`w-8 h-8 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 font-semibold flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.button>
                </motion.div>
              );
            })}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-gray-50 dark:bg-gray-800 rounded-2xl p-6"
                >
                  <div className="inline-flex p-4 bg-gray-200 dark:bg-gray-700 rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-blue-500 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Get Started?
              </span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the power of AI-driven content creation with our comprehensive service suite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl text-lg font-semibold transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500 rounded-xl text-lg font-semibold transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
