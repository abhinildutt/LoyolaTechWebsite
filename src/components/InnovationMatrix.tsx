import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';

// Flowing Particles Animation for AI
const FlowingParticles = ({ isHovered }: { isHovered: boolean }) => {
  const particles = Array.from({ length: 25 });
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Neural network style particles with connections */}
      {particles.map((_, i) => {
        const row = Math.floor(i / 5);
        const col = i % 5;
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + col * 15}%`,
              top: `${20 + row * 15}%`,
            }}
          >
            {/* Main particle */}
            <motion.div
              className="w-2 h-2 bg-cyan-400 rounded-full"
              animate={{
                scale: isHovered ? [1, 2, 1.5, 1] : [1, 1.5, 1.2, 1],
                opacity: isHovered ? [0.4, 1, 0.7, 0.4] : [0.3, 0.6, 0.5, 0.3],
                boxShadow: isHovered 
                  ? ['0 0 5px rgba(6, 182, 212, 0.5)', '0 0 20px rgba(6, 182, 212, 1)', '0 0 15px rgba(6, 182, 212, 0.8)', '0 0 5px rgba(6, 182, 212, 0.5)']
                  : ['0 0 3px rgba(6, 182, 212, 0.3)', '0 0 10px rgba(6, 182, 212, 0.6)', '0 0 8px rgba(6, 182, 212, 0.5)', '0 0 3px rgba(6, 182, 212, 0.3)'],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.15,
              }}
            />
            
            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-cyan-400"
              animate={{
                scale: isHovered ? [0, 3] : [0, 2],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut',
                delay: i * 0.2,
              }}
            />
            
            {/* Data pulse traveling effect */}
            <motion.div
              className="absolute w-1 h-1 bg-cyan-300 rounded-full"
              animate={{
                x: isHovered ? [-10, 10, -10] : [-5, 5, -5],
                y: isHovered ? [-10, 10, -10] : [-5, 5, -5],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.1,
              }}
            />
          </motion.div>
        );
      })}
      
      {/* Flowing data streams */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          style={{
            left: `${i * 30}%`,
            top: `${20 + i * 25}%`,
            transformOrigin: 'center',
          }}
          animate={{
            x: isHovered ? ['-100%', '200%'] : ['-50%', '150%'],
            opacity: isHovered ? [0, 0.8, 0] : [0, 0.5, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};

// Grid Nodes for Engineering
const GridNodes = ({ isHovered }: { isHovered: boolean }) => {
  const gridSize = 5;
  const nodes = Array.from({ length: gridSize * gridSize });
  
  return (
    <div className="absolute inset-0 p-8">
      <div className="grid grid-cols-5 grid-rows-5 gap-4 h-full">
        {nodes.map((_, i) => {
          const row = Math.floor(i / gridSize);
          const col = i % gridSize;
          const distanceFromCenter = Math.abs(row - 2) + Math.abs(col - 2);
          
          return (
            <motion.div
              key={i}
              className="relative"
              animate={{
                scale: isHovered ? [1, 1.3, 1] : [1, 1.15, 1],
              }}
              transition={{
                duration: 1.5,
                delay: distanceFromCenter * 0.08,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Main node with pulsing effect */}
              <motion.div
                className="w-2 h-2 bg-blue-400 rounded-full mx-auto relative z-10"
                animate={{
                  opacity: isHovered ? [0.5, 1, 0.5] : [0.4, 0.7, 0.4],
                  boxShadow: isHovered 
                    ? ['0 0 5px rgba(59, 130, 246, 0.5)', '0 0 25px rgba(59, 130, 246, 1)', '0 0 5px rgba(59, 130, 246, 0.5)']
                    : ['0 0 3px rgba(59, 130, 246, 0.4)', '0 0 15px rgba(59, 130, 246, 0.7)', '0 0 3px rgba(59, 130, 246, 0.4)'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: distanceFromCenter * 0.1,
                }}
              />
              
              {/* Connection lines with data flow */}
              {col < gridSize - 1 && (
                <>
                  <motion.div
                    className="absolute top-1 left-1 w-full h-px bg-gradient-to-r from-blue-400/20 via-blue-400/40 to-blue-400/20"
                    animate={{
                      opacity: isHovered ? [0.3, 0.8, 0.3] : [0.2, 0.5, 0.2],
                      scaleX: isHovered ? [0.8, 1, 0.8] : [0.9, 1, 0.9],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.05,
                    }}
                  />
                  {/* Data packet traveling horizontally */}
                  <motion.div
                    className="absolute top-0.5 left-0 w-1 h-1 bg-blue-300 rounded-full"
                    animate={{
                      x: ['0%', '100%', '0%'],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: i * 0.2,
                    }}
                  />
                </>
              )}
              {row < gridSize - 1 && (
                <>
                  <motion.div
                    className="absolute top-1 left-1 w-px h-full bg-gradient-to-b from-blue-400/20 via-blue-400/40 to-blue-400/20"
                    animate={{
                      opacity: isHovered ? [0.3, 0.8, 0.3] : [0.2, 0.5, 0.2],
                      scaleY: isHovered ? [0.8, 1, 0.8] : [0.9, 1, 0.9],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.05,
                    }}
                  />
                  {/* Data packet traveling vertically */}
                  <motion.div
                    className="absolute top-0 left-0.5 w-1 h-1 bg-blue-300 rounded-full"
                    animate={{
                      y: ['0%', '100%', '0%'],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: (i * 0.2) + 0.5,
                    }}
                  />
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Smooth Curves for Design
const SmoothCurves = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <div className="absolute inset-0 p-8">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="curve-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EC4899" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#F472B6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="curve-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Multiple flowing curves with varying paths */}
        <motion.path
          d="M 30 100 Q 100 30, 170 100"
          stroke="url(#curve-gradient)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#glow)"
          animate={{
            pathLength: isHovered ? 1 : [0.6, 0.9, 0.6],
            opacity: isHovered ? [0.7, 1, 0.7] : [0.4, 0.7, 0.4],
            d: isHovered 
              ? ["M 30 100 Q 100 20, 170 100", "M 30 100 Q 100 35, 170 100", "M 30 100 Q 100 20, 170 100"]
              : ["M 30 100 Q 100 30, 170 100", "M 30 100 Q 100 40, 170 100", "M 30 100 Q 100 30, 170 100"],
            strokeWidth: isHovered ? [2.5, 3.5, 2.5] : [2, 2.5, 2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.path
          d="M 30 120 Q 100 180, 170 120"
          stroke="url(#curve-gradient)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#glow)"
          animate={{
            pathLength: isHovered ? 1 : [0.6, 0.9, 0.6],
            opacity: isHovered ? [0.7, 1, 0.7] : [0.4, 0.7, 0.4],
            d: isHovered 
              ? ["M 30 120 Q 100 190, 170 120", "M 30 120 Q 100 175, 170 120", "M 30 120 Q 100 190, 170 120"]
              : ["M 30 120 Q 100 180, 170 120", "M 30 120 Q 100 170, 170 120", "M 30 120 Q 100 180, 170 120"],
            strokeWidth: isHovered ? [2.5, 3.5, 2.5] : [2, 2.5, 2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        
        {/* Additional flowing S-curve */}
        <motion.path
          d="M 20 60 Q 60 40, 100 60 T 180 60"
          stroke="url(#curve-gradient-2)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5 5"
          animate={{
            pathLength: [0, 1],
            opacity: isHovered ? [0.5, 0.9, 0.5] : [0.3, 0.6, 0.3],
            strokeDashoffset: [0, -10],
          }}
          transition={{
            pathLength: {
              duration: 2,
              repeat: Infinity,
            },
            opacity: {
              duration: 2,
              repeat: Infinity,
            },
            strokeDashoffset: {
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />
        
        <motion.path
          d="M 20 140 Q 60 160, 100 140 T 180 140"
          stroke="url(#curve-gradient-2)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5 5"
          animate={{
            pathLength: [0, 1],
            opacity: isHovered ? [0.5, 0.9, 0.5] : [0.3, 0.6, 0.3],
            strokeDashoffset: [0, -10],
          }}
          transition={{
            pathLength: {
              duration: 2,
              repeat: Infinity,
              delay: 0.3,
            },
            opacity: {
              duration: 2,
              repeat: Infinity,
              delay: 0.3,
            },
            strokeDashoffset: {
              duration: 1,
              repeat: Infinity,
              ease: "linear",
              delay: 0.3,
            },
          }}
        />
        
        {/* Rotating ellipses */}
        <motion.ellipse
          cx="100"
          cy="100"
          rx="40"
          ry="60"
          stroke="#EC4899"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
          animate={{
            rx: isHovered ? [40, 55, 40] : [40, 48, 40],
            ry: isHovered ? [60, 75, 60] : [60, 68, 60],
            opacity: isHovered ? [0.4, 0.7, 0.4] : [0.3, 0.5, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            rotate: {
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            },
            rx: {
              duration: 3,
              repeat: Infinity,
            },
            ry: {
              duration: 3,
              repeat: Infinity,
            },
            opacity: {
              duration: 3,
              repeat: Infinity,
            },
          }}
        />
        
        <motion.ellipse
          cx="100"
          cy="100"
          rx="55"
          ry="35"
          stroke="#8B5CF6"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
          animate={{
            rx: isHovered ? [55, 70, 55] : [55, 63, 55],
            ry: isHovered ? [35, 50, 35] : [35, 43, 35],
            opacity: isHovered ? [0.4, 0.7, 0.4] : [0.3, 0.5, 0.3],
            rotate: [360, 0],
          }}
          transition={{
            rotate: {
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            },
            rx: {
              duration: 3.5,
              repeat: Infinity,
            },
            ry: {
              duration: 3.5,
              repeat: Infinity,
            },
            opacity: {
              duration: 3.5,
              repeat: Infinity,
            },
          }}
        />
        
        {/* Central pulsing circle */}
        <motion.circle
          cx="100"
          cy="100"
          r="8"
          fill="none"
          stroke="#F472B6"
          strokeWidth="2"
          animate={{
            r: isHovered ? [8, 15, 8] : [8, 12, 8],
            opacity: [0.7, 0.2, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Decorative dots along curves */}
        {[20, 40, 60, 80].map((percent, i) => (
          <motion.circle
            key={i}
            cx="100"
            cy="100"
            r="2"
            fill="#EC4899"
            animate={{
              cx: [30 + percent * 1.4, 30 + percent * 1.4],
              cy: [
                100 - 70 * Math.sin((percent / 100) * Math.PI),
                100 - 65 * Math.sin((percent / 100) * Math.PI),
                100 - 70 * Math.sin((percent / 100) * Math.PI),
              ],
              opacity: isHovered ? [0.5, 1, 0.5] : [0.3, 0.6, 0.3],
              scale: isHovered ? [1, 1.5, 1] : [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
          }}
        />
        ))}
      </svg>
    </div>
  );
};

// Geometric Patterns for Strategy
const GeometricPatterns = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <div className="absolute inset-0 p-8 flex items-center justify-center">
      <div className="relative w-40 h-40">
        {/* Outer rotating diamonds */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border-2 border-purple-400"
            style={{
              clipPath: i === 0 
                ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                : i === 1
                ? 'polygon(50% 15%, 85% 50%, 50% 85%, 15% 50%)'
                : i === 2
                ? 'polygon(50% 25%, 75% 50%, 50% 75%, 25% 50%)'
                : 'polygon(30% 30%, 70% 30%, 70% 70%, 30% 70%)',
            }}
            animate={{
              rotate: isHovered ? [0, 360] : [0, 180, 360],
              scale: isHovered ? [1, 1.15, 1] : [1, 1.08, 1],
              opacity: isHovered ? [0.5, 0.9, 0.5] : [0.35, 0.6, 0.35],
              borderWidth: isHovered ? ['2px', '3px', '2px'] : ['2px', '2.5px', '2px'],
            }}
            transition={{
              rotate: {
                duration: 8 - i * 1.5,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              },
              opacity: {
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.3,
              },
            }}
          />
        ))}
        
        {/* Corner accent squares */}
        {[-45, 45, 135, 225].map((angle, i) => (
          <motion.div
            key={`corner-${i}`}
            className="absolute w-3 h-3 border-2 border-purple-500"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-70px)`,
            }}
            animate={{
              opacity: isHovered ? [0.4, 1, 0.4] : [0.3, 0.6, 0.3],
              scale: isHovered ? [1, 1.5, 1] : [1, 1.2, 1],
              rotate: [angle, angle + 90, angle + 180],
            }}
            transition={{
              opacity: {
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              },
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />
        ))}
        
        {/* Orbiting triangles */}
        {[0, 120, 240].map((angle, i) => (
          <motion.div
            key={`orbit-${i}`}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              rotate: [angle, angle + 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3,
            }}
          >
            <motion.div
              className="w-4 h-4 border-2 border-purple-400 absolute"
              style={{
                clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                transform: 'translate(-50%, -50%) translateY(-50px)',
              }}
              animate={{
                scale: isHovered ? [1, 1.5, 1] : [1, 1.2, 1],
                opacity: isHovered ? [0.5, 0.9, 0.5] : [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          </motion.div>
        ))}
        
        {/* Central hexagon with pulse */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            rotate: isHovered ? [-360, 0] : [0, -180, -360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div 
            className="w-14 h-14 border-2 border-purple-400 relative"
            style={{
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
            }}
            animate={{
              scale: isHovered ? [1, 1.2, 1] : [1, 1.1, 1],
              borderWidth: ['2px', '3px', '2px'],
            }}
            transition={{
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
              borderWidth: {
                duration: 2,
                repeat: Infinity,
              },
            }}
          >
            {/* Inner hexagon glow */}
            <motion.div
              className="absolute inset-2 border border-purple-500"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
          />
          </motion.div>
        </motion.div>
        
        {/* Radiating lines */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute w-px h-20 bg-gradient-to-t from-purple-400 via-purple-500 to-transparent"
            style={{
              left: '50%',
              top: '50%',
              transformOrigin: 'bottom center',
              transform: `rotate(${angle}deg)`,
            }}
            animate={{
              opacity: isHovered ? [0.3, 0.8, 0.3] : [0.2, 0.5, 0.2],
              scaleY: isHovered ? [0.8, 1.2, 0.8] : [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
        
        {/* Pulsing center dot */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-3 h-3 bg-purple-400 rounded-full"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: isHovered ? [1, 2, 1] : [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
            boxShadow: isHovered
              ? ['0 0 5px rgba(168, 85, 247, 0.5)', '0 0 20px rgba(168, 85, 247, 1)', '0 0 5px rgba(168, 85, 247, 0.5)']
              : ['0 0 3px rgba(168, 85, 247, 0.5)', '0 0 15px rgba(168, 85, 247, 0.8)', '0 0 3px rgba(168, 85, 247, 0.5)'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

const InnovationMatrix = () => {
  const [hoveredQuadrant, setHoveredQuadrant] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    mouseX.set(x * 30);
    mouseY.set(y * 30);
  };

  const parallaxX = useTransform(mouseX, [-30, 30], [-15, 15]);
  const parallaxY = useTransform(mouseY, [-30, 30], [-15, 15]);

  const quadrants = [
    {
      id: 0,
      title: 'AI + Automation',
      description: 'Intelligent systems that learn and adapt',
      details: 'Machine learning models, predictive analytics, and automated workflows that scale',
      color: 'cyan',
      gradient: 'from-cyan-500/20 to-cyan-600/20',
      borderColor: 'border-cyan-500/30',
      textColor: 'text-cyan-400',
      component: FlowingParticles,
    },
    {
      id: 1,
      title: 'Scalable Engineering',
      description: 'Infrastructure built to grow with you',
      details: 'Microservices, cloud-native architecture, and performance optimization at scale',
      color: 'blue',
      gradient: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
      textColor: 'text-blue-400',
      component: GridNodes,
    },
    {
      id: 2,
      title: 'Design Systems',
      description: 'Beautiful interfaces that users love',
      details: 'Unified design language, component libraries, and accessibility-first approach',
      color: 'pink',
      gradient: 'from-pink-500/20 to-purple-500/20',
      borderColor: 'border-pink-500/30',
      textColor: 'text-pink-400',
      component: SmoothCurves,
    },
    {
      id: 3,
      title: 'Product Strategy',
      description: 'Vision transformed into reality',
      details: 'Market research, user insights, and data-driven roadmap planning',
      color: 'purple',
      gradient: 'from-purple-500/20 to-purple-600/20',
      borderColor: 'border-purple-500/30',
      textColor: 'text-purple-400',
      component: GeometricPatterns,
    },
  ];

  return (
    <section 
      ref={containerRef}
      className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
      onMouseMove={handleMouseMove}
    >
      {/* Ambient Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1), transparent)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-light mb-4">
              <span className="text-gradient">The Innovation Matrix</span>
            </h2>
            <p className="text-xl text-gray-400 font-light tracking-wide">
              We Build Intelligent Products
            </p>
          </motion.div>
        </motion.div>

        {/* Matrix Grid */}
        <motion.div 
          style={{ y }}
          className="relative"
        >
          <motion.div
            style={{ x: parallaxX, y: parallaxY }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto"
          >
            {quadrants.map((quadrant, index) => {
              const Component = quadrant.component;
              const isHovered = hoveredQuadrant === quadrant.id;
              
              return (
                <motion.div
                  key={quadrant.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onMouseEnter={() => setHoveredQuadrant(quadrant.id)}
                  onMouseLeave={() => setHoveredQuadrant(null)}
                  className="relative group cursor-pointer"
                >
                  <motion.div
                    className={`relative h-80 md:h-96 rounded-3xl backdrop-blur-xl border-2 ${quadrant.borderColor} 
                      bg-gradient-to-br ${quadrant.gradient} overflow-hidden`}
                    animate={{
                      scale: isHovered ? 1.05 : 1,
                      borderColor: isHovered ? `rgba(${quadrant.color === 'cyan' ? '6, 182, 212' : quadrant.color === 'blue' ? '59, 130, 246' : quadrant.color === 'pink' ? '236, 72, 153' : '139, 92, 246'}, 0.6)` : undefined,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      boxShadow: isHovered 
                        ? `0 0 60px rgba(${quadrant.color === 'cyan' ? '6, 182, 212' : quadrant.color === 'blue' ? '59, 130, 246' : quadrant.color === 'pink' ? '236, 72, 153' : '139, 92, 246'}, 0.4)`
                        : '0 0 20px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    {/* Animated Background Component */}
                    <Component isHovered={isHovered} />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent">
                      <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isHovered ? 0 : 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${quadrant.textColor}`}>
                          {quadrant.title}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base">
                          {quadrant.description}
                        </p>
                      </motion.div>

                      {/* HUD Interface on Hover */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: isHovered ? 1 : 0,
                          y: isHovered ? 0 : 20,
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 p-8 flex flex-col justify-center"
                        style={{
                          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.85) 100%)',
                        }}
                      >
                        {/* HUD Corner Brackets */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 opacity-60" style={{ borderColor: quadrant.textColor.replace('text-', '') }} />
                        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 opacity-60" style={{ borderColor: quadrant.textColor.replace('text-', '') }} />
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 opacity-60" style={{ borderColor: quadrant.textColor.replace('text-', '') }} />
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 opacity-60" style={{ borderColor: quadrant.textColor.replace('text-', '') }} />

                        {/* Scanline Effect */}
                        <motion.div
                          className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px)',
                          }}
                          animate={{
                            y: [-100, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />

                        <div className="relative z-10">
                          <motion.div
                            className={`text-xs uppercase tracking-widest mb-3 ${quadrant.textColor} font-mono`}
                            animate={{
                              opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          >
                            SYSTEM.{quadrant.title.replace(/\s+/g, '_').toUpperCase()}
                          </motion.div>
                          
                          <h3 className={`text-3xl font-bold mb-4 ${quadrant.textColor}`}>
                            {quadrant.title}
                          </h3>
                          
                          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent mb-4" />
                          
                          <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            {quadrant.details}
                          </p>

                          {/* Status Indicators */}
                          <div className="flex items-center space-x-4 text-xs">
                            <div className="flex items-center space-x-2">
                              <motion.div
                                className={`w-2 h-2 rounded-full bg-${quadrant.color}-400`}
                                animate={{
                                  opacity: [0.5, 1, 0.5],
                                  scale: [1, 1.2, 1],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                }}
                              />
                              <span className="text-gray-400 font-mono">ACTIVE</span>
                            </div>
                            <div className="text-gray-500 font-mono">
                              {`[${String(index + 1).padStart(2, '0')}/04]`}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Glow Effect on Hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0"
                      animate={{
                        opacity: isHovered ? 0.2 : 0,
                      }}
                      style={{
                        background: `radial-gradient(circle at center, ${
                          quadrant.color === 'cyan' ? 'rgba(6, 182, 212, 0.5)' :
                          quadrant.color === 'blue' ? 'rgba(59, 130, 246, 0.5)' :
                          quadrant.color === 'pink' ? 'rgba(236, 72, 153, 0.5)' :
                          'rgba(139, 92, 246, 0.5)'
                        }, transparent)`,
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Interconnecting Lines */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" 
            style={{ zIndex: -1 }}
          >
            <motion.line
              x1="50%"
              y1="25%"
              x2="50%"
              y2="75%"
              stroke="rgba(139, 92, 246, 0.3)"
              strokeWidth="2"
              strokeDasharray="5 5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: hoveredQuadrant !== null ? 0.6 : 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.line
              x1="25%"
              y1="50%"
              x2="75%"
              y2="50%"
              stroke="rgba(139, 92, 246, 0.3)"
              strokeWidth="2"
              strokeDasharray="5 5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: hoveredQuadrant !== null ? 0.6 : 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
            />
            <motion.line
              x1="25%"
              y1="25%"
              x2="75%"
              y2="75%"
              stroke="rgba(139, 92, 246, 0.2)"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: hoveredQuadrant !== null ? 0.5 : 0.2 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.9 }}
            />
            <motion.line
              x1="75%"
              y1="25%"
              x2="25%"
              y2="75%"
              stroke="rgba(139, 92, 246, 0.2)"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: hoveredQuadrant !== null ? 0.5 : 0.2 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.1 }}
            />
          </svg>
        </motion.div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          className="text-center mt-20"
        >
          <p className="text-gray-500 font-light text-sm tracking-[0.2em] uppercase">
            End-to-End Product Studio
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovationMatrix;

