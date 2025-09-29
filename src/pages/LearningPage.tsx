import { motion } from 'framer-motion';
import { 
  BookOpen, 
  PlayCircle, 
  Code, 
  Users, 
  Download,
  Clock,
  Star,
  ArrowRight,
  Lightbulb,
  FileText,
  Video,
  Headphones
} from 'lucide-react';

const LearningPage = () => {
  const learningPaths = [
    {
      id: 1,
      title: 'Getting Started with AI Avatars',
      description: 'Learn the fundamentals of avatar creation and customization',
      duration: '2 hours',
      level: 'Beginner',
      lessons: 8,
      gradient: 'from-blue-500 to-cyan-500',
      icon: PlayCircle,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'Advanced Voice Cloning Techniques',
      description: 'Master voice synthesis and natural speech generation',
      duration: '3 hours',
      level: 'Intermediate',
      lessons: 12,
      gradient: 'from-purple-500 to-pink-500',
      icon: Headphones,
      image: 'https://images.pexels.com/photos/3784324/pexels-photo-3784324.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'AI Video Production Masterclass',
      description: 'Create professional videos with AI-generated content',
      duration: '4 hours',
      level: 'Advanced',
      lessons: 15,
      gradient: 'from-green-500 to-teal-500',
      icon: Video,
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'API Integration & Development',
      description: 'Integrate our AI services into your applications',
      duration: '5 hours',
      level: 'Advanced',
      lessons: 20,
      gradient: 'from-orange-500 to-red-500',
      icon: Code,
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    }
  ];

  const resources = [
    {
      type: 'Documentation',
      icon: FileText,
      title: 'API Reference',
      description: 'Complete documentation for all our APIs and services',
      link: '#',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'Tutorials',
      icon: PlayCircle,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all features',
      link: '#',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      type: 'Community',
      icon: Users,
      title: 'Developer Forum',
      description: 'Connect with other developers and get help',
      link: '#',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      type: 'Downloads',
      icon: Download,
      title: 'SDK & Tools',
      description: 'Download our development kits and tools',
      link: '#',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const tutorials = [
    {
      title: 'Creating Your First AI Avatar',
      duration: '15 min',
      type: 'Video',
      difficulty: 'Beginner',
      views: '12.5K',
      thumbnail: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'Voice Cloning Best Practices',
      duration: '22 min',
      type: 'Video',
      difficulty: 'Intermediate',
      views: '8.3K',
      thumbnail: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'Optimizing Video Generation',
      duration: '18 min',
      type: 'Video',
      difficulty: 'Advanced',
      views: '6.7K',
      thumbnail: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'API Integration Guide',
      duration: '25 min',
      type: 'Video',
      difficulty: 'Advanced',
      views: '4.2K',
      thumbnail: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  const faq = [
    {
      question: 'How do I get started with AI avatar creation?',
      answer: 'Start with our "Getting Started" learning path, which covers all the basics. You can create your first avatar in under 10 minutes!'
    },
    {
      question: 'What formats are supported for voice cloning?',
      answer: 'We support WAV, MP3, and FLAC formats. For best results, use high-quality recordings with minimal background noise.'
    },
    {
      question: 'Can I integrate the API into my existing application?',
      answer: 'Yes! Our RESTful API is designed for easy integration. Check out our API documentation and SDK for your preferred programming language.'
    },
    {
      question: 'How long does it take to process an avatar?',
      answer: 'Processing times vary by complexity: images take 2-5 minutes, videos take 10-30 minutes, and voice models take 15-45 minutes.'
    }
  ];

  return (
    <div className="pt-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      {/* ====== Hero Section ====== */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Learn & Grow
              </span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Master AI avatar creation, voice cloning, and video generation with our comprehensive learning resources, tutorials, and community support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====== Learning Paths Section ====== */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Learning Paths
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Structured courses designed to take you from beginner to expert
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningPaths.map((path, index) => {
              const Icon = path.icon;
              return (
                <motion.div
                  key={path.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-md hover:shadow-md transition-all duration-300"
                >
                  <div className="relative">
                    <img src={path.image} alt={path.title} className="w-full h-48 object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${path.gradient} opacity-20`}></div>
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-100">{path.level}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${path.gradient} bg-opacity-20 border border-gray-200 dark:border-gray-700 mr-3`}>
                        <Icon className={`w-5 h-5 bg-gradient-to-br ${path.gradient} bg-clip-text text-transparent`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{path.title}</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{path.description}</p>
                    <div className="flex items-center justify-between mb-6 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center"><Clock className="w-4 h-4 mr-2" />{path.duration}</div>
                      <div className="flex items-center"><BookOpen className="w-4 h-4 mr-2" />{path.lessons} lessons</div>
                    </div>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`w-full py-3 px-6 bg-gradient-to-r ${path.gradient} hover:shadow-lg rounded-lg font-semibold transition-all duration-300 flex items-center justify-center`}>
                      <span>Start Learning</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== Quick Access Resources Section ====== */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Quick Access Resources
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Everything you need to get started and succeed with our platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div key={resource.type} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -5 }} className="bg-white dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-600 transition-all duration-300 text-center">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${resource.gradient} bg-opacity-20 border border-gray-200 dark:border-gray-700 mb-4`}>
                    <Icon className={`w-8 h-8 bg-gradient-to-br ${resource.gradient} bg-clip-text text-transparent`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{resource.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{resource.description}</p>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 font-semibold flex items-center justify-center mx-auto">
                    Access {resource.type} <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== Popular Tutorials Section ====== */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Popular Tutorials
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Watch and learn from our most popular video tutorials
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutorials.map((tutorial, index) => (
              <motion.div key={tutorial.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -5 }} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-600 transition-all duration-300">
                <div className="relative">
                  <img src={tutorial.thumbnail} alt={tutorial.title} className="w-full h-32 object-cover" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <PlayCircle className="w-12 h-12 text-white opacity-80" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 rounded px-2 py-1">
                    <span className="text-xs text-white">{tutorial.duration}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">{tutorial.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{tutorial.difficulty}</span>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 mr-1" />{tutorial.views} views
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="py-3 px-6 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-lg font-semibold shadow-lg transition-all duration-300">
              View All Tutorials
            </motion.button>
          </div>
        </div>
      </section>

      {/* ====== FAQ Section ====== */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Get quick answers to common questions
            </p>
          </motion.div>
          <div className="space-y-4">
            {faq.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{item.question}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA Section ====== */}
      <section className="py-20 bg-gradient-to-br from-blue-50/20 to-purple-50/20 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Ready to start learning?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
            Join our community and unlock the full potential of AI avatars, voice, and video tools.
          </p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="py-3 px-6 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-lg font-semibold shadow-lg transition-all duration-300">
            Get Started
          </motion.button>
        </div>
      </section>

    </div>
  );
};

export default LearningPage;
