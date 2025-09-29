import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Users,
  Zap,
  Shield,
  ArrowRight,
  Send
} from 'lucide-react';

const ContactPage = () => {
  const contactMethods = [
    { icon: Mail, title: 'Email Support', description: 'Get help via email within 24 hours', contact: 'support@aivatarstudio.com', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Phone, title: 'Phone Support', description: 'Speak directly with our experts', contact: '+1 (555) 123-4567', gradient: 'from-purple-500 to-pink-500' },
    { icon: MessageSquare, title: 'Live Chat', description: '24/7 instant support chat', contact: 'Available Now', gradient: 'from-green-500 to-teal-500' },
    { icon: MapPin, title: 'Office Location', description: 'Visit our headquarters', contact: 'San Francisco, CA', gradient: 'from-orange-500 to-red-500' }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM PST' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM PST' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const supportTypes = [
    { icon: Zap, title: 'Technical Support', description: 'API integration, troubleshooting, and technical questions', responseTime: '< 4 hours', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Users, title: 'Sales Inquiries', description: 'Pricing, plans, and enterprise solutions', responseTime: '< 2 hours', gradient: 'from-purple-500 to-pink-500' },
    { icon: Shield, title: 'Account & Billing', description: 'Account management, billing, and subscription issues', responseTime: '< 1 hour', gradient: 'from-green-500 to-teal-500' }
  ];

  return (
    <div className="pt-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              We're here to help you succeed with AI-powered content creation. Reach out to our expert team for support, sales inquiries, or just to say hello.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div key={method.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -5 }} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-400 transition-all duration-300 text-center">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${method.gradient} bg-opacity-20 border border-white/10 mb-6`}>
                    <Icon className={`w-8 h-8 bg-gradient-to-br ${method.gradient} bg-clip-text text-transparent`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{method.title}</h3>
                  <p className="text-gray-500 dark:text-gray-300 mb-4">{method.description}</p>
                  <p className={`font-semibold bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent`}>{method.contact}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Support Types */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Send us a Message
                </span>
              </h2>
              <p className="text-gray-500 dark:text-gray-300 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                    <input type="text" placeholder="John" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors">
                    <option value="">Select a topic</option>
                    <option value="technical">Technical Support</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="billing">Billing & Account</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea rows={6} placeholder="Tell us how we can help you..." className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none"></textarea>
                </div>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2" /> Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Support Types & Office Hours */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-8">

              {/* Support Types */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">How We Can Help</span>
                </h2>
                <div className="space-y-6">
                  {supportTypes.map((type, index) => {
                    const Icon = type.icon;
                    return (
                      <motion.div key={type.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${type.gradient} bg-opacity-20 border border-white/10`}>
                            <Icon className={`w-6 h-6 bg-gradient-to-br ${type.gradient} bg-clip-text text-transparent`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{type.title}</h3>
                              <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100/20 dark:bg-gray-700 px-2 py-1 rounded">{type.responseTime}</span>
                            </div>
                            <p className="text-gray-500 dark:text-gray-300">{type.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Support Hours</h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center text-gray-500 dark:text-gray-300">
                      <span>{schedule.day}</span>
                      <span>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Quick Answers</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-300 text-lg">Find instant answers to common questions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { q: 'How quickly can I get started?', a: 'You can create your first AI avatar in under 10 minutes with our quick start guide.' },
              { q: 'Do you offer enterprise solutions?', a: 'Yes! We provide custom enterprise solutions with dedicated support and advanced features.' },
              { q: 'What file formats are supported?', a: 'We support all major image and video formats including JPG, PNG, MP4, MOV, and more.' },
              { q: 'Is there an API available?', a: 'Yes, we offer a comprehensive REST API with detailed documentation and SDKs.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">{faq.q}</h3>
                <p className="text-gray-500 dark:text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-gray-400 rounded-lg font-semibold transition-all duration-300 flex items-center mx-auto">
              View All FAQs <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50/20 to-purple-50/20 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Still Have Questions?</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is always ready to help. Don't hesitate to reach out - we're here to ensure your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl text-lg font-semibold transition-all duration-300">
                Start Live Chat
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-gray-400 rounded-xl text-lg font-semibold transition-all duration-300">
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
