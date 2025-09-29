import { motion } from 'framer-motion';
import { Check, X, Zap, Crown, Rocket, Star } from 'lucide-react';

const PricingPage = () => {
  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: 29,
      description: 'Perfect for individuals and small creators',
      features: [
        { name: 'Up to 10 avatars per month', included: true },
        { name: 'Basic voice cloning', included: true },
        { name: 'HD video generation', included: true },
        { name: 'Email support', included: true },
        { name: 'Commercial usage rights', included: true },
        { name: 'Advanced customization', included: false },
        { name: 'Priority processing', included: false },
        { name: 'API access', included: false }
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      popular: false
    },
    {
      name: 'Professional',
      icon: Crown,
      price: 79,
      description: 'Ideal for businesses and content creators',
      features: [
        { name: 'Up to 50 avatars per month', included: true },
        { name: 'Advanced voice cloning', included: true },
        { name: '4K video generation', included: true },
        { name: 'Priority support', included: true },
        { name: 'Commercial usage rights', included: true },
        { name: 'Advanced customization', included: true },
        { name: 'Priority processing', included: true },
        { name: 'API access', included: false }
      ],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Rocket,
      price: 199,
      description: 'For large teams and organizations',
      features: [
        { name: 'Unlimited avatars', included: true },
        { name: 'Premium voice cloning', included: true },
        { name: '8K video generation', included: true },
        { name: '24/7 dedicated support', included: true },
        { name: 'Commercial usage rights', included: true },
        { name: 'Advanced customization', included: true },
        { name: 'Priority processing', included: true },
        { name: 'Full API access', included: true }
      ],
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10',
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Custom Voice Training',
      price: 49,
      description: 'Train a custom voice model with your specific audio data'
    },
    {
      name: 'Bulk Processing',
      price: 29,
      description: 'Process up to 100 files simultaneously'
    },
    {
      name: 'White Label Solution',
      price: 199,
      description: 'Remove branding and use your own logo'
    }
  ];

  const faqs = [
    {
      question: 'Can I upgrade or downgrade my plan anytime?',
      answer: 'Yes, you can change your plan at any time. Changes take effect immediately and your billing is prorated accordingly.'
    },
    {
      question: 'What happens if I exceed my monthly limits?',
      answer: 'You can purchase additional credits or upgrade to a higher tier. We\'ll notify you when you approach your limits.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans. No questions asked.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! All plans come with a 7-day free trial with full access to features.'
    }
  ];

  return (
    <div className="">

      {/* Hero Section */}
      <section className=" bg-gray-100 dark:bg-gray-900 hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your AI content creation needs. All plans include our core features with no hidden fees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/50 ring-2 ring-purple-500/20'                      : 'bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${plan.bgGradient} border border-white/10 mb-4`}>
                      <Icon className={`w-8 h-8 bg-gradient-to-br ${plan.gradient} bg-clip-text text-transparent`} fill='white'/>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    
                    <p className="text-gray-500 dark:text-gray-300 mb-4">
                      {plan.description}
                    </p>

                    <div className="mb-6">
                      <span className="text-5xl font-bold text-gray-900 dark:text-white">
                        ${plan.price}
                      </span>
                      <span className="text-gray-500 dark:text-gray-300 text-lg">/month</span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                        plan.popular
                          ? `bg-gradient-to-r ${plan.gradient} hover:shadow-lg text-white`
                          : 'bg-gray-600 hover:bg-gray-500 text-white dark:text-gray-100'
                      }`}
                    >
                      {plan.popular ? 'Start Free Trial' : 'Choose Plan'}
                    </motion.button>
                  </div>

                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-500 dark:text-gray-600 mr-3 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${
                          feature.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500 dark:text-gray-400'
                        }`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Add-ons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 bg-gray-100 dark:bg-gray-900 rounded-2xl p-10"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Add-ons & Extras
                </span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                Enhance your plan with additional features and capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {addOns.map((addon, index) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-200 dark:bg-gray-800 rounded-xl p-6 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {addon.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 mb-4">
                    {addon.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-500 dark:text-blue-400">
                      ${addon.price}/month
                    </span>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold text-white transition-colors">
                      Add to Plan
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enterprise Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50/20 to-purple-50/20 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-12 text-center mb-16 hidden"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              For large enterprises with specific requirements, we offer custom pricing and dedicated support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg font-semibold text-white transition-all duration-300"
              >
                Contact Sales
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gray-600 dark:bg-gray-800 hover:bg-gray-500 dark:hover:bg-gray-700 border border-gray-400 dark:border-gray-600 rounded-lg font-semibold text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>

          {/* FAQ Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-10"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-200 dark:bg-gray-700 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
