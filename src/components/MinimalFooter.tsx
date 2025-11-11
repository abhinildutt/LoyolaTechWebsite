import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const MinimalFooter = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const links = {
    Products: [
      { name: 'GlycoScan', path: '/products#glycoscan' },
      { name: 'Paymint', path: '/products#paymint' },
      { name: 'Recyclr', path: '/products#recyclr' },
      { name: 'CoderHub', path: '/products#coderhub' }
    ],
    Company: [
      { name: 'About', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact', path: '/contact' }
    ],
    Resources: [
      { name: 'Documentation', path: '/contact' },
      { name: 'API Reference', path: '/contact' },
      { name: 'Support', path: '/contact' }
    ],
  };

  return (
    <footer className="relative bg-gray-950 overflow-hidden">
      {/* CTA Section - Only on Homepage */}
      {isHomePage && (
      <div className="relative py-32 px-4 sm:px-6 lg:px-8">
        {/* Animated wave SVG */}
        <svg
          className="absolute top-0 left-0 w-full h-32 opacity-20"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z"
            fill="url(#wave-gradient)"
            initial={{ d: "M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z" }}
            animate={{
              d: [
                "M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z",
                "M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z",
                "M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight">
              Let's build intelligent
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                systems together.
              </span>
            </h2>
            <p className="text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto">
              Transform your business with blockchain technology that's secure, scalable, and beautifully simple.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">Contact Us</span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </Link>

              <Link to="/careers">
                <motion.button
                  whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full border border-gray-700 text-white font-medium text-lg hover:bg-white/5 transition-colors"
                >
                  Join Our Team
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      )}

      {/* Footer links */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Logo */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-semibold text-white mb-4"
                >
                  Loyola<span className="text-cyan-400">Tech</span>
                </motion.div>
              </Link>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                Building the future of loyalty systems with blockchain technology.
              </p>
            </div>

            {/* Link columns */}
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-white font-medium mb-4">{category}</h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Link to={item.path}>
                        <motion.span
                          whileHover={{ x: 2 }}
                          className="text-gray-500 hover:text-cyan-400 transition-colors text-sm font-light inline-block cursor-pointer"
                        >
                          {item.name}
                        </motion.span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm font-light">
              © 2024 Loyola Technology. All rights reserved.
            </div>
            
            {/* Social links with stylish icons */}
            <div className="flex gap-4">
              {/* Twitter/X */}
              <a
                href="https://twitter.com/tech_loyola"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-500 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <span className="sr-only">Twitter</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/loyola-technology-llc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-500 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle gradient flow at bottom */}
      <motion.div
        className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: '200% 100%',
        }}
      />
    </footer>
  );
};

export default MinimalFooter;

