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
    { name: 'Services', path: 'services', isRoute: false },
    { name: 'Products', path: '/products', isRoute: true },
    { name: 'About', path: 'about', isRoute: false },
    { name: 'Contact', path: '/contact', isRoute: true },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
      style={{
        background: scrolled ? 'rgba(10, 14, 39, 0.9)' : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <img 
                src="/LoyolaTechLogo.png" 
                alt="Loyola Tech Logo" 
                className="w-16 h-16 object-contain"
              />
              <span className="text-2xl font-bold text-gradient">
                Loyola Tech
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer relative group"
                >
                  {item.name}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ background: 'linear-gradient(to right, #00D4FF, #0066FF)' }}
                  />
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.path)}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer relative group"
                >
                  {item.name}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ background: 'linear-gradient(to right, #00D4FF, #0066FF)' }}
                  />
                </button>
              )
            ))}
            <Link to="/contact">
              <button
                className="px-6 py-2 rounded-lg font-semibold transition-all"
                style={{
                  background: 'linear-gradient(135deg, #00D4FF, #0066FF)',
                  boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
                }}
              >
                Get Started
              </button>
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
        <div className="md:hidden glass border-t border-glow">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {menuItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.path)}
                  className="block py-2 text-gray-300 hover:text-white transition-colors text-left w-full"
                >
                  {item.name}
                </button>
              )
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
