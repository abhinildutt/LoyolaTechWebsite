import { motion } from 'framer-motion';
import { useState } from 'react';

interface Pillar {
  title: string;
  tagline: string;
  description: string;
  gradient: string;
  iconColor: string;
  icon: React.ReactNode;
}

const OurPillars = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const pillars: Pillar[] = [
    {
      title: 'Cryptographic Trust',
      tagline: 'Security by design',
      description: 'We build systems where trust is mathematically proven, not assumed. Every transaction is verifiable, immutable, and transparent.',
      gradient: 'from-cyan-500 to-blue-600',
      iconColor: 'text-cyan-400',
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="w-full h-full">
          {/* Shield with lock - animated */}
          <motion.path
            d="M60 10 L90 25 L90 50 Q90 75 60 95 Q30 75 30 50 L30 25 Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Lock body */}
          <motion.rect
            x="50"
            y="50"
            width="20"
            height="25"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          
          {/* Lock arc */}
          <motion.path
            d="M50 50 L50 45 Q50 35 60 35 Q70 35 70 45 L70 50"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          />
          
          {/* Animated particles around shield */}
          {[...Array(6)].map((_, i) => (
            <motion.circle
              key={i}
              cx={60 + Math.cos((i * Math.PI) / 3) * 40}
              cy={50 + Math.sin((i * Math.PI) / 3) * 40}
              r="2"
              fill="currentColor"
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </svg>
      ),
    },
    {
      title: 'Seamless Experience',
      tagline: 'Complexity, simplified',
      description: 'Blockchain shouldn\'t feel like blockchain. We craft interfaces that feel intuitive and invisible, while remaining powerful beneath.',
      gradient: 'from-purple-500 to-pink-600',
      iconColor: 'text-purple-400',
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="w-full h-full">
          {/* Flowing curves representing smooth UX */}
          <motion.path
            d="M20 60 Q40 30 60 60 T100 60"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
          
          <motion.path
            d="M20 70 Q40 40 60 70 T100 70"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.3, repeat: Infinity, repeatType: "reverse" }}
          />
          
          {/* Central node */}
          <motion.circle
            cx="60"
            cy="60"
            r="8"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Connecting dots */}
          {[30, 90].map((x, i) => (
            <motion.circle
              key={i}
              cx={x}
              cy="60"
              r="4"
              fill="currentColor"
              animate={{
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </svg>
      ),
    },
    {
      title: 'Transparent Systems',
      tagline: 'Verifiable by design',
      description: 'Every action leaves an immutable trail. Our blockchain infrastructure ensures complete accountability without compromising privacy.',
      gradient: 'from-emerald-500 to-teal-600',
      iconColor: 'text-emerald-400',
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="w-full h-full">
          {/* Connected blocks representing blockchain */}
          {[25, 50, 75].map((x, i) => (
            <g key={i}>
              <motion.rect
                x={x - 10}
                y="45"
                width="20"
                height="20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ delay: i * 0.3, duration: 0.6 }}
              />
              
              {/* Connection line */}
              {i < 2 && (
                <motion.line
                  x1={x + 10}
                  y1="55"
                  x2={x + 15}
                  y2="55"
                  stroke="currentColor"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: i * 0.3 + 0.4, duration: 0.4 }}
                />
              )}
              
              {/* Data flow particles */}
              {i < 2 && (
                <motion.circle
                  cx={x + 10}
                  cy="55"
                  r="2"
                  fill="currentColor"
                  animate={{
                    cx: [x + 10, x + 15],
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "linear",
                  }}
                />
              )}
            </g>
          ))}
          
          {/* Verification checkmarks */}
          {[25, 50, 75].map((x, i) => (
            <motion.path
              key={`check-${i}`}
              d={`M${x - 5} 70 L${x - 2} 73 L${x + 5} 65`}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: i * 0.3 + 1, duration: 0.4 }}
            />
          ))}
        </svg>
      ),
    },
    {
      title: 'Infinite Scale',
      tagline: 'Built for tomorrow',
      description: 'From startup to enterprise, our architecture grows with you. Millions of transactions without compromise on speed or security.',
      gradient: 'from-amber-500 to-orange-600',
      iconColor: 'text-amber-400',
      icon: (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="w-full h-full">
          {/* Expanding circles representing scale */}
          {[20, 30, 40, 50].map((r, i) => (
            <motion.circle
              key={i}
              cx="60"
              cy="60"
              r={r}
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 - i * 0.12 }}
              transition={{
                delay: i * 0.2,
                duration: 1,
                ease: "easeOut",
              }}
            />
          ))}
          
          {/* Upward arrow representing growth */}
          <motion.path
            d="M60 80 L60 40 M50 50 L60 40 L70 50"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          />
          
          {/* Orbiting nodes */}
          {[0, 120, 240].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <motion.circle
                key={i}
                cx={60 + Math.cos(rad) * 45}
                cy={60 + Math.sin(rad) * 45}
                r="3"
                fill="currentColor"
                animate={{
                  cx: 60 + Math.cos(rad + (Math.PI * 2)) * 45,
                  cy: 60 + Math.sin(rad + (Math.PI * 2)) * 45,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.3,
                }}
              />
            );
          })}
        </svg>
      ),
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Our Pillars
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            The foundations of trust, design, and innovation that power everything we build
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group cursor-pointer relative"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="relative h-[500px] rounded-3xl overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all backdrop-blur-sm"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Animated icon */}
                <div className={`absolute inset-0 flex items-center justify-center p-8 opacity-40 group-hover:opacity-60 transition-opacity duration-500 ${pillar.iconColor}`}>
                  {pillar.icon}
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent">
                  {/* Accent line */}
                  <motion.div
                    className={`w-12 h-1 rounded-full bg-gradient-to-r ${pillar.gradient} mb-4`}
                    initial={{ width: 0 }}
                    animate={{ width: hoveredIndex === idx ? 48 : 48 }}
                    transition={{ duration: 0.4 }}
                  />

                  <h3 className="text-2xl font-medium text-white mb-2">{pillar.title}</h3>
                  <p className="text-sm text-gray-400 font-light mb-4 italic">{pillar.tagline}</p>

                  {/* Description - appears on hover */}
                  <motion.p
                    className="text-sm text-gray-500 font-light leading-relaxed"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredIndex === idx ? 1 : 0,
                      height: hoveredIndex === idx ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {pillar.description}
                  </motion.p>

                  {/* Learn more hint */}
                  <motion.div
                    className="mt-4 text-xs text-gray-600 font-light flex items-center gap-2"
                    animate={{ opacity: hoveredIndex === idx ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Hover to learn more</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className={`absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10 bg-gradient-to-r ${pillar.gradient}`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-gray-500 font-light text-lg">
            These aren't just principles — they're promises we engineer into every line of code.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurPillars;

