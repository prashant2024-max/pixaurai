import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Zap, 
  Twitter, 
  Youtube, 
  Linkedin, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react';

const Footer = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Image to Avatar', href: '/services' },
        { name: 'Video to Avatar', href: '/services' },
        { name: 'Prompt to Avatar', href: '/services' },
        { name: 'Voice Cloning', href: '/services' },
        { name: 'AI Video Generation', href: '/services' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/learning' },
        { name: 'Tutorials', href: '/learning' },
        { name: 'API Reference', href: '/learning' },
        { name: 'Community', href: '/learning' },
        { name: 'Blog', href: '/learning' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/contact' },
        { name: 'Careers', href: '/contact' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Ethics', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/contact' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'System Status', href: '#' },
        { name: 'Bug Reports', href: '/contact' },
        { name: 'Feature Requests', href: '/contact' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Youtube, href: '#', name: 'YouTube' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' }
  ];

  return (
    <footer className={`transition-colors duration-300 border-t ${
      isDark 
        ? 'bg-gray-900 border-gray-800'
        : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"
              >
                <Zap className="h-6 w-6 text-white" />
              </motion.div>
              <span className={`text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                isDark 
                  ? 'from-blue-400 to-purple-400'
                  : 'from-blue-600 to-purple-600'
              }`}>
                AIvatarStudio
              </span>
            </Link>

            <p className={`leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Empowering creators worldwide with cutting-edge AI technology for avatar creation, 
              voice cloning, and video generation. Transform your digital presence today.
            </p>

            <div className="space-y-2">
              <div className={`flex items-center ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <MapPin className={`w-4 h-4 mr-3 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`} />
                <span>San Francisco, CA</span>
              </div>
              <div className={`flex items-center ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <Phone className={`w-4 h-4 mr-3 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={`flex items-center ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <Mail className={`w-4 h-4 mr-3 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`} />
                <span>hello@aivatarstudio.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-lg border transition-all duration-200 ${
                      isDark 
                        ? 'bg-gray-800 hover:bg-gray-700 border-gray-700 hover:border-blue-500/50'
                        : 'bg-gray-100 hover:bg-gray-200 border-gray-300 hover:border-blue-500/50'
                    }`}
                    aria-label={social.name}
                  >
                    <Icon className={`w-5 h-5 transition-colors ${
                      isDark 
                        ? 'text-gray-400 hover:text-blue-400'
                        : 'text-gray-600 hover:text-blue-600'
                    }`} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className={`text-lg font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className={`transition-colors duration-200 ${
                        isDark 
                          ? 'text-gray-400 hover:text-blue-400'
                          : 'text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className={`py-8 border-t ${
          isDark ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className={`text-xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Stay Updated
              </h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Get the latest AI innovations and updates delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500 transition-colors ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-white border-gray-300'
                }`}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg font-semibold transition-all duration-200"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`py-8 border-t ${
          isDark ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              © {currentYear} AIvatarStudio. All rights reserved.
            </p>
            <div className={`flex items-center space-x-6 text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <a href="#" className={`transition-colors ${
                isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
              }`}>
                Privacy Policy
              </a>
              <a href="#" className={`transition-colors ${
                isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
              }`}>
                Terms of Service
              </a>
              <a href="#" className={`transition-colors ${
                isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
              }`}>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;