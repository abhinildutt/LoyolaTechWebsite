import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const menuItems = [
    { name: 'Home', path: '/', isRoute: true },
    { name: 'Products', path: '/products', isRoute: true },
    { name: 'About', path: '/about', isRoute: true },
    { name: 'Careers', path: '/careers', isRoute: true },
    { name: 'Contact', path: '/contact', isRoute: true },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-gray-950/80 border-b border-gray-800/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3 cursor-pointer"
          >
              <img 
                src="/LoyolaTechLogo.png" 
                alt="Loyola Tech Logo" 
                className="w-16 h-16 object-contain"
              />
            <span className="text-2xl font-semibold text-white">
              Loyola<span className="text-cyan-400">Tech</span>
            </span>
          </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-400 hover:text-white transition-colors font-light text-base tracking-wide relative group"
                >
                  {item.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-cyan-400 to-blue-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.path)}
                className="text-gray-400 hover:text-white transition-colors font-light text-base tracking-wide relative group"
              >
                  {item.name}
                <motion.span
                  className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-cyan-400 to-blue-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
                </button>
              )
            ))}
            <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full font-medium text-base bg-gradient-to-r from-cyan-500 to-blue-600 text-white transition-all hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Get Started
            </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden backdrop-blur-xl bg-gray-950/95 border-t border-gray-800/50"
        >
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.path}
                className="block py-2 text-gray-400 hover:text-white transition-colors font-light"
                onClick={() => setIsOpen(false)}
              >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.path)}
                  className="block py-2 text-gray-400 hover:text-white transition-colors text-left w-full font-light"
                >
                  {item.name}
                </button>
              )
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full mt-4 px-6 py-3 rounded-full font-medium text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                Get Started
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
