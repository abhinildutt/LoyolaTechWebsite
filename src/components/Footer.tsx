import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';
import LoyolaLogo from '../assets/logos/LoyolaLogo';

const Footer = () => {
  const footerLinks = {
    company: ['Loyola Technology', 'Founder', 'Board of directors', 'Values'],
    verticals: ['Fintech', 'Utilities', 'Development'],
    services: ['DeFi Development', 'GeoSpatial App Development', 'NFT and Smart Contracts'],
  };

  return (
    <footer id="contact" className="bg-gray-950 border-t border-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <LoyolaLogo className="w-12 h-12" animate={false} />
              </motion.div>
              <span className="text-2xl font-bold text-gradient">Loyola Tech</span>
            </motion.div>
            <p className="text-gray-400 mb-4">
              Revolutionizing loyalty systems with cutting-edge blockchain technology.
            </p>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4">COMPANY</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Verticals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4">VERTICALS</h3>
            <ul className="space-y-2">
              {footerLinks.verticals.map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4">SERVICES</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 pt-8"
        >
          <h3 className="font-bold text-lg mb-6">CONTACT US</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              className="flex items-start space-x-3 group"
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <motion.div
                className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors"
                whileHover={{ rotate: [0, -10, 10, 0] }}
              >
                <MapPinIcon className="w-6 h-6 text-blue-400" />
              </motion.div>
              <div>
                <p className="text-gray-400">8 The Green Suite B</p>
                <p className="text-gray-400">Dover 19901, USA</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start space-x-3 group"
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <motion.div
                className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors"
                whileHover={{ rotate: [0, -10, 10, 0] }}
              >
                <PhoneIcon className="w-6 h-6 text-blue-400" />
              </motion.div>
              <p className="text-gray-400">+1 (612) 309 6044</p>
            </motion.div>
            <motion.div
              className="flex items-start space-x-3 group"
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <motion.div
                className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors"
                whileHover={{ rotate: [0, -10, 10, 0] }}
              >
                <EnvelopeIcon className="w-6 h-6 text-blue-400" />
              </motion.div>
              <p className="text-gray-400">ceo_office@loyolatech.com</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-gray-800 pt-8 text-center text-gray-400"
        >
          <p>© Copyright 2024 Loyola Technology | All Rights Reserved. Privacy | Disclaimer</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
