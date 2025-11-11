import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle Web3 Grid */}
      <div className="absolute inset-0 blockchain-grid opacity-50" />
      
      {/* Minimal Gradient Accents - Performance Optimized */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10"
        style={{
          background: 'radial-gradient(circle, #00D4FF 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10"
        style={{
          background: 'radial-gradient(circle, #7B3FE4 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Minimal Floating Particles - Only 6 for performance */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
            background: '#00D4FF',
            opacity: 0.4,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;

