import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const ProcessFlow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const phases = [
    {
      title: 'Discover',
      description: 'Deep research into your needs, challenges, and opportunities',
      details: 'We immerse ourselves in your domain, understanding not just what you need, but why you need it.',
      icon: '🔍',
      color: '#00D4FF',
    },
    {
      title: 'Design',
      description: 'Architecting elegant solutions with precision and foresight',
      details: 'Every system is designed with scalability, security, and user experience at the forefront.',
      icon: '✨',
      color: '#3B82F6',
    },
    {
      title: 'Develop',
      description: 'Building with cutting-edge technology and meticulous attention to detail',
      details: 'Clean code, robust architecture, and continuous integration ensure quality at every step.',
      icon: '⚡',
      color: '#7B3FE4',
    },
    {
      title: 'Deploy',
      description: 'Seamless launch with enterprise-grade infrastructure',
      details: 'From staging to production, we ensure zero-downtime deployments and rock-solid reliability.',
      icon: '🚀',
      color: '#10B981',
    },
    {
      title: 'Evolve',
      description: 'Continuous optimization and innovation as your needs grow',
      details: 'Technology never stands still, and neither do we. We iterate, improve, and innovate constantly.',
      icon: '🌱',
      color: '#EC4899',
    },
  ];

  return (
    <div ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-extralight mb-6">
            <span className="text-gradient">The Way We Build</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            A methodical approach to creating intelligent, resilient systems
          </p>
        </motion.div>
      </div>

      {/* Horizontal scrolling container */}
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute top-[60px] left-0 right-0 h-px hidden lg:block">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-50"
            style={{
              scaleX: useTransform(scrollYProgress, [0.2, 0.8], [0, 1]),
              transformOrigin: 'left',
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-sm"
            style={{
              scaleX: useTransform(scrollYProgress, [0.2, 0.8], [0, 1]),
              transformOrigin: 'left',
            }}
          />
        </div>

        {/* Phases */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 lg:gap-4">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Phase Card */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative glass rounded-3xl p-6 border border-white/10 hover:border-white/30 transition-all h-full"
                >
                  {/* Icon with glow */}
                  <div className="relative w-16 h-16 mb-6 mx-auto">
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        backgroundColor: `${phase.color}20`,
                        border: `2px solid ${phase.color}40`,
                        boxShadow: `0 0 20px ${phase.color}30`,
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-3xl">
                      {phase.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold mb-3 text-center"
                    style={{ color: phase.color }}
                  >
                    {phase.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed text-center mb-4">
                    {phase.description}
                  </p>

                  {/* Expandable details */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: hoveredIndex === index ? 'auto' : 0,
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {phase.details}
                      </p>
                    </div>
                  </motion.div>

                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{
                      backgroundColor: `${phase.color}30`,
                      color: phase.color,
                      border: `2px solid ${phase.color}`,
                    }}
                  >
                    {index + 1}
                  </div>
                </motion.div>

                {/* Connection dot (desktop) */}
                {index < phases.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-[60px] -right-2 w-3 h-3 z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <div
                      className="w-full h-full rounded-full"
                      style={{
                        backgroundColor: phase.color,
                        boxShadow: `0 0 8px ${phase.color}60`,
                      }}
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subtle ambient particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                top: `${40 + Math.random() * 20}%`,
                left: `${i * 18 + 10}%`,
                backgroundColor: phases[i % phases.length].color,
                boxShadow: `0 0 6px ${phases[i % phases.length].color}`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                delay: i * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>

      {/* Tooltip helper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="text-center mt-12"
      >
        <p className="text-sm text-gray-500 font-light">
          Hover over each phase to discover more details
        </p>
      </motion.div>
    </div>
  );
};

export default ProcessFlow;

