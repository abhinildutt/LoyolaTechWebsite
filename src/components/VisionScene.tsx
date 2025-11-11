import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const VisionScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
      {/* Animated gradient waves background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(ellipse at 0% 50%, rgba(0, 212, 255, 0.15) 0%, transparent 50%)',
              'radial-gradient(ellipse at 50% 50%, rgba(123, 63, 228, 0.15) 0%, transparent 50%)',
              'radial-gradient(ellipse at 100% 50%, rgba(0, 212, 255, 0.15) 0%, transparent 50%)',
              'radial-gradient(ellipse at 0% 50%, rgba(0, 212, 255, 0.15) 0%, transparent 50%)',
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Orbiting nodes/particles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * 360) / 12;
          const radius = 250;
          
          return (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: `radial-gradient(circle, ${i % 3 === 0 ? '#00D4FF' : i % 3 === 1 ? '#7B3FE4' : '#10B981'}, transparent)`,
                boxShadow: `0 0 20px ${i % 3 === 0 ? '#00D4FF' : i % 3 === 1 ? '#7B3FE4' : '#10B981'}`,
              }}
              animate={{
                x: [
                  Math.cos((angle * Math.PI) / 180) * radius,
                  Math.cos(((angle + 360) * Math.PI) / 180) * radius,
                ],
                y: [
                  Math.sin((angle * Math.PI) / 180) * radius,
                  Math.sin(((angle + 360) * Math.PI) / 180) * radius,
                ],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 20,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        })}
      </div>

      {/* Particle trails moving toward CTA */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`trail-${i}`}
          className="absolute w-1 h-1 rounded-full bg-cyan-400/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, (window.innerWidth / 2) - (Math.random() * 100)],
            y: [0, (window.innerHeight / 2) - (Math.random() * 100)],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        style={{ y, opacity, scale }}
      >
        {/* Animated icon/symbol */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <div className="relative">
            <motion.div
              className="w-24 h-24 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #00D4FF, #7B3FE4)',
                boxShadow: '0 0 60px rgba(0, 212, 255, 0.5)',
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="absolute inset-2 rounded-full bg-gray-900 flex items-center justify-center">
                <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </motion.div>
            
            {/* Orbiting accent dots */}
            {[0, 120, 240].map((angle, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-purple-500"
                style={{
                  top: '50%',
                  left: '50%',
                  marginTop: '-6px',
                  marginLeft: '-6px',
                }}
                animate={{
                  x: [
                    Math.cos((angle * Math.PI) / 180) * 50,
                    Math.cos(((angle + 360) * Math.PI) / 180) * 50,
                  ],
                  y: [
                    Math.sin((angle * Math.PI) / 180) * 50,
                    Math.sin(((angle + 360) * Math.PI) / 180) * 50,
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block mb-2">Building intelligent systems</span>
          <span className="block">
            for a{' '}
            <span className="relative inline-block">
              <span className="text-gradient font-normal">transparent digital world</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </span>
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-12 font-light leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We&apos;re not just shaping technology - we&apos;re defining how it{' '}
          <span className="italic text-cyan-400">feels</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/products">
            <motion.button
              className="group relative px-10 py-4 rounded-2xl font-medium text-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, #00D4FF, #0066FF, #7B3FE4)',
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)',
                }}
              />
              
              <span className="relative z-10 text-white flex items-center gap-2">
                Explore Our Work
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
            </motion.button>
          </Link>

          <Link to="/contact">
            <motion.button
              className="px-10 py-4 rounded-2xl font-medium text-lg glass border border-cyan-500/30 hover:border-cyan-500/60 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Journey
            </motion.button>
          </Link>
        </motion.div>

        {/* Subtle tagline */}
        <motion.p
          className="mt-12 text-sm text-gray-600 font-light tracking-wider uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          Intelligence. Precision. Humanity.
        </motion.p>
      </motion.div>

      {/* Soft lighting sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(123, 63, 228, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.08) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default VisionScene;

