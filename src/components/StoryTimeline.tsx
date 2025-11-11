import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const StoryTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const milestones = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Started with an idea: that code could understand context.',
      color: '#00D4FF'
    },
    {
      year: '2021',
      title: 'First Platform',
      description: 'Launched our blockchain infrastructure, bridging traditional and decentralized systems.',
      color: '#3B82F6'
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Merged artificial intelligence with blockchain for intelligent, adaptive systems.',
      color: '#7B3FE4'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Reached 5,000+ developers and 50+ enterprise partners worldwide.',
      color: '#10B981'
    },
    {
      year: '2024',
      title: 'The Ecosystem',
      description: 'Now, building ecosystems where every transaction carries trust.',
      color: '#EC4899'
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
            <span className="text-gradient">The Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            From concept to ecosystem - our evolution in building the future
          </p>
        </motion.div>
      </div>

      {/* Animated background gradient that changes with scroll */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: useTransform(
            scrollYProgress,
            [0, 0.2, 0.4, 0.6, 0.8, 1],
            [
              'linear-gradient(to bottom, rgba(17, 24, 39, 1), rgba(17, 24, 39, 1))',
              'linear-gradient(to bottom, rgba(0, 212, 255, 0.05), rgba(17, 24, 39, 1))',
              'linear-gradient(to bottom, rgba(59, 130, 246, 0.05), rgba(17, 24, 39, 1))',
              'linear-gradient(to bottom, rgba(123, 63, 228, 0.05), rgba(17, 24, 39, 1))',
              'linear-gradient(to bottom, rgba(16, 185, 129, 0.05), rgba(17, 24, 39, 1))',
              'linear-gradient(to bottom, rgba(236, 72, 153, 0.05), rgba(17, 24, 39, 1))',
            ]
          ),
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Central animated line/ribbon */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-ml-px">
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"
              style={{
                scaleY: useTransform(scrollYProgress, [0, 1], [0, 1]),
                transformOrigin: 'top',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
          </div>

          {/* Milestones */}
          <div className="space-y-24 md:space-y-32">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    isEven ? '' : 'md:text-right'
                  }`}
                >
                  {/* Content */}
                  <div className={`${isEven ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'} pl-20 md:pl-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02, x: isEven ? 5 : -5 }}
                      transition={{ duration: 0.3 }}
                      className={`glass rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all ${
                        isEven ? 'md:ml-12' : 'md:mr-12'
                      }`}
                    >
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center justify-center px-4 py-2 rounded-full mb-4"
                        style={{
                          backgroundColor: `${milestone.color}20`,
                          border: `2px solid ${milestone.color}40`,
                        }}
                      >
                        <span
                          className="text-2xl font-bold"
                          style={{ color: milestone.color }}
                        >
                          {milestone.year}
                        </span>
                      </motion.div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed font-light">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Glowing dot on timeline */}
                  <motion.div
                    className="absolute left-8 md:left-1/2 md:-ml-3 top-8"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative">
                      {/* Outer glow ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full w-6 h-6"
                        style={{
                          backgroundColor: `${milestone.color}40`,
                          filter: 'blur(10px)',
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                      
                      {/* Solid dot */}
                      <div
                        className="relative w-6 h-6 rounded-full"
                        style={{
                          backgroundColor: milestone.color,
                          boxShadow: `0 0 20px ${milestone.color}80`,
                        }}
                      >
                        {/* Inner pulse */}
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{
                            backgroundColor: milestone.color,
                          }}
                          animate={{
                            scale: [1, 1.5],
                            opacity: [1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeOut',
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating ambient dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StoryTimeline;

