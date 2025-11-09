import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { useRef } from 'react';
import AnimatedBackground from './AnimatedBackground';
import BlockchainElements from './FloatingShapes';
import BlockchainIcon from '../assets/icons/BlockchainIcon';
import SecurityShieldIcon from '../assets/icons/SecurityShieldIcon';
import Web3Icon from '../assets/icons/Web3Icon';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };


  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg"
    >
      {/* Optimized Background */}
      <AnimatedBackground />
      <BlockchainElements />

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.span
              className="inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium mb-8"
              whileHover={{ scale: 1.02 }}
            >
              <SparklesIcon className="w-4 h-4 mr-2" style={{ color: '#00D4FF' }} />
              <span>Revolutionizing Loyalty Systems</span>
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="block text-gradient">
              Welcome to
            </span>
            <span className="block text-white mt-2">
              Loyola Technology
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We revolutionize the loyalty system the way you have never seen before.
            Building strong, lasting relationships with customers through cutting-edge
            blockchain technology.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 transition-all"
              style={{
                background: 'linear-gradient(135deg, #00D4FF, #0066FF)',
                boxShadow: '0 4px 20px rgba(0, 212, 255, 0.3)',
              }}
            >
              <span>Get Started</span>
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 glass rounded-lg font-semibold text-lg border-glow transition-all"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Feature Cards - Web3 Theme */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              { 
                title: 'Blockchain', 
                desc: 'Secure & Transparent', 
                icon: <BlockchainIcon className="w-12 h-12" color="#00D4FF" />,
              },
              { 
                title: 'Smart Contracts', 
                desc: 'Automated Solutions', 
                icon: <SecurityShieldIcon className="w-12 h-12" color="#0066FF" />,
              },
              { 
                title: 'Web3 Ready', 
                desc: 'Future Technology', 
                icon: <Web3Icon className="w-12 h-12" color="#7B3FE4" />,
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-xl p-6 border-glow transition-all cursor-pointer relative overflow-hidden group"
              >
                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle at center, #00D4FF, transparent)',
                  }}
                />
                
                <motion.div 
                  className="mb-4 relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {card.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 relative z-10">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm relative z-10">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full mt-2 relative z-10"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
