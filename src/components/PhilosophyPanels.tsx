import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';

const PhilosophyPanels = () => {
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);

  const philosophies = [
    {
      title: 'Precision',
      tagline: 'We believe in technology that sees, not spies.',
      description: 'Every algorithm, every line of code, every decision is engineered with surgical precision. We build systems that understand nuance, context, and intent - delivering exactly what\'s needed, nothing more, nothing less.',
      visual: 'waves',
      color: '#00D4FF',
    },
    {
      title: 'Transparency',
      tagline: 'In systems that earn trust, not demand it.',
      description: 'Trust isn\'t given - it\'s built through open processes, clear communication, and verifiable outcomes. Our blockchain infrastructure ensures every transaction, every interaction is auditable and honest.',
      visual: 'sphere',
      color: '#7B3FE4',
    },
    {
      title: 'Empowerment',
      tagline: 'Technology should multiply human potential.',
      description: 'We don\'t build tools that replace people - we create systems that amplify their capabilities. From developers to enterprises, our platforms unlock new possibilities and expand what\'s achievable.',
      visual: 'mesh',
      color: '#10B981',
    },
  ];

  return (
    <div className="relative py-32 overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-extralight mb-6">
            <span className="text-gradient">What Drives Us</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Core beliefs that shape every decision and every line of code
          </p>
        </motion.div>
      </div>

      {/* Philosophy Panels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {philosophies.map((philosophy, index) => (
            <PhilosophyPanel
              key={philosophy.title}
              philosophy={philosophy}
              index={index}
              isHovered={hoveredPanel === index}
              onHover={() => setHoveredPanel(index)}
              onLeave={() => setHoveredPanel(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface PhilosophyPanelProps {
  philosophy: {
    title: string;
    tagline: string;
    description: string;
    visual: string;
    color: string;
  };
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const PhilosophyPanel = ({ philosophy, index, isHovered, onHover, onLeave }: PhilosophyPanelProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-100px' }}
      transition={{ delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="relative group cursor-pointer"
    >
      <motion.div
        className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        style={{
          background: `linear-gradient(135deg, ${philosophy.color}10, transparent)`,
        }}
      >
        {/* Visual Background */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          {philosophy.visual === 'waves' && <WavesVisual color={philosophy.color} isHovered={isHovered} mouseX={mouseX} mouseY={mouseY} />}
          {philosophy.visual === 'sphere' && <SphereVisual color={philosophy.color} isHovered={isHovered} />}
          {philosophy.visual === 'mesh' && <MeshVisual color={philosophy.color} isHovered={isHovered} />}
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-8 z-10">
          <motion.div
            initial={{ opacity: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0.8 }}
          >
            <motion.h3
              className="text-4xl font-bold mb-3"
              style={{ color: philosophy.color }}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {philosophy.title}
            </motion.h3>
            
            <motion.p
              className="text-xl font-light mb-6 text-white"
              initial={{ opacity: 0.9 }}
              animate={{ opacity: isHovered ? 1 : 0.9 }}
            >
              "{philosophy.tagline}"
            </motion.p>

            {/* Description appears on hover */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isHovered ? 'auto' : 0,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="glass rounded-2xl p-6 backdrop-blur-xl">
                <p className="text-gray-300 leading-relaxed">
                  {philosophy.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, ${philosophy.color}20, transparent 50%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

// Visual Components for each philosophy
const WavesVisual = ({ color, isHovered, mouseX, mouseY }: any) => {
  const x = useTransform(mouseX, [0, 400], [-20, 20]);
  const y = useTransform(mouseY, [0, 500], [-10, 10]);

  return (
    <svg className="w-full h-full opacity-30" viewBox="0 0 400 500">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.path
          key={i}
          d={`M 0 ${100 + i * 40} Q 100 ${80 + i * 40} 200 ${100 + i * 40} T 400 ${100 + i * 40}`}
          stroke={color}
          strokeWidth="2"
          fill="none"
          style={{ x, y }}
          animate={{
            d: [
              `M 0 ${100 + i * 40} Q 100 ${80 + i * 40} 200 ${100 + i * 40} T 400 ${100 + i * 40}`,
              `M 0 ${100 + i * 40} Q 100 ${120 + i * 40} 200 ${100 + i * 40} T 400 ${100 + i * 40}`,
              `M 0 ${100 + i * 40} Q 100 ${80 + i * 40} 200 ${100 + i * 40} T 400 ${100 + i * 40}`,
            ],
            opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3,
          }}
          transition={{
            duration: 3 + i * 0.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </svg>
  );
};

const SphereVisual = ({ color, isHovered }: any) => {
  return (
    <motion.div
      className="relative w-64 h-64"
      animate={{
        scale: isHovered ? 1.1 : 1,
        rotateY: isHovered ? 180 : 0,
      }}
      transition={{ duration: 0.8 }}
    >
      {/* Glassmorphic sphere */}
      <div
        className="absolute inset-0 rounded-full backdrop-blur-xl"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${color}40, ${color}10)`,
          border: `2px solid ${color}30`,
          boxShadow: `
            inset 0 0 60px ${color}30,
            0 0 60px ${color}20
          `,
        }}
      />
      
      {/* Inner glow */}
      <motion.div
        className="absolute inset-8 rounded-full"
        style={{
          background: `radial-gradient(circle, ${color}60, transparent)`,
          filter: 'blur(20px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Orbiting particles */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: color,
            left: '50%',
            top: '50%',
            marginLeft: '-4px',
            marginTop: '-4px',
          }}
          animate={{
            x: [0, 100 * Math.cos((i * 2 * Math.PI) / 3), 0],
            y: [0, 100 * Math.sin((i * 2 * Math.PI) / 3), 0],
          }}
          transition={{
            duration: 4,
            delay: i * 0.4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </motion.div>
  );
};

const MeshVisual = ({ color, isHovered }: any) => {
  return (
    <svg className="w-full h-full opacity-20" viewBox="0 0 400 500">
      <defs>
        <radialGradient id={`meshGradient-${color}`}>
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0.1" />
        </radialGradient>
      </defs>
      
      {/* Geometric mesh expanding outward */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.polygon
          key={i}
          points="200,100 300,250 200,400 100,250"
          stroke={color}
          strokeWidth="1.5"
          fill={`url(#meshGradient-${color})`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? 0.3 + i * 0.15 : 0.2 + i * 0.1,
            opacity: isHovered ? 0.6 - i * 0.1 : 0.4 - i * 0.08,
            rotate: i * 15,
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: 'center' }}
        />
      ))}

      {/* Connecting lines */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.line
          key={`line-${i}`}
          x1="200"
          y1="250"
          x2={200 + Math.cos((i * Math.PI) / 6) * 150}
          y2={250 + Math.sin((i * Math.PI) / 6) * 150}
          stroke={color}
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: isHovered ? 1 : 0.6,
            opacity: isHovered ? 0.6 : 0.3,
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.05,
          }}
        />
      ))}
    </svg>
  );
};

export default PhilosophyPanels;

