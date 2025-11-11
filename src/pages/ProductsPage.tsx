import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';
import { 
  MapIcon, 
  CodeBracketIcon, 
  CreditCardIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

// Ambient Statistic Rings - Geometric Trust Visualization
const AmbientRings = () => {
  const [hoveredRing, setHoveredRing] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  const audits = useAnimatedCounter(ref1, 3, 2000);
  const companies = useAnimatedCounter(ref2, 15, 2500);
  const uptime = useAnimatedCounter(ref3, 98, 2000);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const rings = [
    {
      ref: ref1,
      keyword: 'Audited',
      tagline: 'By CertiK & Trail of Bits',
      metric: audits,
      suffix: '',
      detail: 'Zero critical vulnerabilities',
      subtext: 'Comprehensive smart contract audits by leading security firms',
      color: '#10B981',
      radius: 180,
      speed: 25,
      particles: 8,
      position: { angle: 200, distance: 360 }, // Left side - moved up and further out
      dotPosition: { angle: 225, radius: 180 }, // Dot at lower left on the ring
    },
    {
      ref: ref2,
      keyword: 'Powering',
      tagline: 'Real Enterprise Use Cases',
      metric: companies,
      suffix: '+',
      detail: '250K+ daily transactions',
      subtext: 'Production-grade infrastructure trusted by Fortune 500',
      color: '#06B6D4',
      radius: 260,
      speed: 35,
      particles: 12,
      position: { angle: 160, distance: 440 }, // Top left - far out
      dotPosition: { angle: 180, radius: 260 }, // Dot on the middle ring
    },
    {
      ref: ref3,
      keyword: 'Delivering',
      tagline: '2.4x Average ROI',
      metric: uptime,
      suffix: '%',
      detail: 'SLA guaranteed uptime',
      subtext: '50% faster integration vs traditional loyalty systems',
      color: '#8B5CF6',
      radius: 340,
      speed: 45,
      particles: 16,
      position: { angle: 20, distance: 240 }, // Top right - closer
      dotPosition: { angle: 0, radius: 340 }, // Dot on the outer ring
    },
  ];

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Ambient Fog */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.05), rgba(139, 92, 246, 0.05), transparent)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            <span className="text-gradient">Precision by Design</span>
          </h2>
          <p className="text-xl text-gray-400 font-light tracking-wide">
            Trust expressed through mathematical elegance
          </p>
        </motion.div>

        {/* Orbiting Rings Visualization */}
        <motion.div 
          style={{ y }}
          className="relative h-[700px] md:h-[800px] flex items-center justify-center"
        >
          {/* SVG Container for Rings */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid meet">
            <defs>
              {rings.map((ring, i) => (
                <radialGradient key={i} id={`ring-glow-${i}`}>
                  <stop offset="0%" stopColor={ring.color} stopOpacity="0" />
                  <stop offset="50%" stopColor={ring.color} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={ring.color} stopOpacity="0" />
                </radialGradient>
              ))}
            </defs>

            {/* Central Glow */}
            <motion.circle
              cx="400"
              cy="400"
              r="80"
              fill="url(#central-glow)"
              animate={{
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <radialGradient id="central-glow">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
            </radialGradient>

            {/* Orbiting Rings */}
            {rings.map((ring, index) => (
              <g key={index}>
                {/* Ring Path */}
                <motion.circle
                  cx="400"
                  cy="400"
                  r={ring.radius}
                  stroke={ring.color}
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="4 8"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.4 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.2, delay: index * 0.15 }}
                />

                {/* Ambient ring glow */}
                <motion.circle
                  cx="400"
                  cy="400"
                  r={ring.radius}
                  stroke={ring.color}
                  strokeWidth="2"
                  fill="none"
                  opacity="0.2"
                  animate={{
                    opacity: hoveredRing === index ? [0.2, 0.6, 0.2] : [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />

                {/* Orbiting Particles */}
                {[...Array(ring.particles)].map((_, particleIndex) => {
                  const angle = (particleIndex / ring.particles) * 360;
                  return (
                    <motion.circle
                      key={particleIndex}
                      r="2"
                      fill={ring.color}
                      animate={{
                        cx: 400 + ring.radius * Math.cos((angle * Math.PI) / 180),
                        cy: 400 + ring.radius * Math.sin((angle * Math.PI) / 180),
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        cx: {
                          duration: ring.speed,
                          repeat: Infinity,
                          ease: 'linear',
                        },
                        cy: {
                          duration: ring.speed,
                          repeat: Infinity,
                          ease: 'linear',
                        },
                        opacity: {
                          duration: 2,
                          repeat: Infinity,
                          delay: particleIndex * 0.1,
                        },
                      }}
                      style={{
                        transformOrigin: '400px 400px',
                        transform: `rotate(${(angle + (Date.now() / ring.speed) % 360)}deg)`,
                      }}
                    />
                  );
                })}
              </g>
            ))}

            {/* Light Reflections */}
            {rings.map((ring, index) => (
              <motion.path
                key={`reflection-${index}`}
                d={`M ${400 - ring.radius * 0.3} ${400 - ring.radius * 0.8} Q ${400} ${400 - ring.radius} ${400 + ring.radius * 0.3} ${400 - ring.radius * 0.8}`}
                stroke={ring.color}
                strokeWidth="1"
                fill="none"
                opacity="0.3"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.25,
                }}
              />
            ))}

            {/* Connection Dots on Rings */}
            {rings.map((ring, index) => {
              const dotAngle = (ring.dotPosition.angle * Math.PI) / 180;
              const dotX = 400 + ring.dotPosition.radius * Math.cos(dotAngle);
              const dotY = 400 + ring.dotPosition.radius * Math.sin(dotAngle);
              
              return (
                <g key={`dot-${index}`}>
                  {/* Outer glow ring */}
                  <motion.circle
                    cx={dotX}
                    cy={dotY}
                    r="8"
                    fill="none"
                    stroke={ring.color}
                    strokeWidth="1"
                    opacity="0.4"
                    animate={{
                      r: [8, 12, 8],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.15,
                    }}
                  />
                  {/* Main dot */}
                  <motion.circle
                    cx={dotX}
                    cy={dotY}
                    r="5"
                    fill={ring.color}
                    animate={{
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.15,
                    }}
                  />
                  {/* Inner highlight */}
                  <circle
                    cx={dotX}
                    cy={dotY}
                    r="2"
                    fill="white"
                    opacity="0.6"
                  />
                </g>
              );
            })}
          </svg>

          {/* Central Info Display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-32 h-32 rounded-full backdrop-blur-xl border border-cyan-500/30 flex items-center justify-center mx-auto mb-8"
                style={{
                  background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1), transparent)',
                  boxShadow: '0 0 60px rgba(6, 182, 212, 0.3), inset 0 0 30px rgba(6, 182, 212, 0.2)',
                }}
              >
                <ShieldCheckIcon className="w-16 h-16 text-cyan-400" />
              </div>
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="text-sm uppercase tracking-[0.2em] text-cyan-400 font-light"
              >
                VERIFIED
              </motion.div>
            </motion.div>
          </div>

          {/* Interactive Ring Labels - Positioned Around Rings */}
          {rings.map((ring, index) => {
            const angleRad = (ring.position.angle * Math.PI) / 180;
            const x = 50 + (ring.position.distance / 8) * Math.cos(angleRad);
            const y = 50 + (ring.position.distance / 8) * Math.sin(angleRad);
            
            return (
              <motion.div
                key={ring.keyword}
                ref={ring.ref}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: '-100px' }}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
                onMouseEnter={() => setHoveredRing(index)}
                onMouseLeave={() => setHoveredRing(null)}
                className="absolute cursor-pointer"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <motion.div
                  className="relative"
                  animate={{
                    scale: hoveredRing === index ? 1.08 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Info Card */}
                  <div 
                    className="glass rounded-2xl px-6 py-5 border backdrop-blur-xl min-w-[240px]"
                    style={{
                      borderColor: `${ring.color}40`,
                      background: `linear-gradient(135deg, ${ring.color}08, ${ring.color}04)`,
                      boxShadow: hoveredRing === index 
                        ? `0 0 30px ${ring.color}40, inset 0 0 20px ${ring.color}10`
                        : `0 0 20px ${ring.color}20, inset 0 0 10px ${ring.color}05`,
                    }}
                  >
                    {/* Top Label */}
                    <motion.div
                      className="text-xs uppercase tracking-widest mb-3 font-medium"
                      style={{ color: ring.color }}
                      animate={{
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 1,
                      }}
                    >
                      {ring.keyword}
                    </motion.div>

                    {/* Metric Display */}
                    <div className="flex items-baseline gap-1 mb-2">
                      <motion.span 
                        className="text-4xl font-light"
                        style={{ color: ring.color }}
                      >
                        {ring.metric}
                      </motion.span>
                      <span 
                        className="text-2xl font-light"
                        style={{ color: ring.color }}
                      >
                        {ring.suffix}
                      </span>
                    </div>

                    {/* Tagline */}
                    <div className="text-sm font-medium text-white mb-3">
                      {ring.tagline}
                    </div>

                    {/* Divider */}
                    <motion.div 
                      className="h-px w-full mb-3"
                      style={{ 
                        background: `linear-gradient(90deg, transparent, ${ring.color}60, transparent)` 
                      }}
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />

                    {/* Detail Text */}
                    <div className="text-xs text-gray-400 font-light leading-relaxed">
                      {ring.detail}
                    </div>

                    {/* Expandable Details */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredRing === index ? 1 : 0,
                        height: hoveredRing === index ? 'auto' : 0,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="text-xs text-gray-500 font-light mt-2 pt-2 border-t border-white/5">
                        {ring.subtext}
                      </div>
                    </motion.div>

                    {/* Pulse Indicator */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                      style={{ backgroundColor: ring.color }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.4,
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.5 }}
          className="text-center mt-8"
        >
          <p className="text-gray-500 font-light text-sm tracking-[0.2em] uppercase">
            Trust • Precision • Control
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ProductsPage = () => {
  const products = [
    {
      id: 'glycoscan',
      title: 'GlycoScan',
      subtitle: 'AI-Powered Glycaemic Response Estimator',
      tagline: 'Scan. Analyze. Understand your food before you eat it.',
      shortDescription: 'AI-driven web-based tool that predicts the glycaemic impact of packaged foods from their nutrition labels, empowering users to make smarter, glucose-aware dietary choices.',
      description: 'GlycoScan uses computer vision, OCR, and scientifically validated heuristics to estimate how your blood sugar may respond to a particular food item in real time. Built with React.js, Node.js, and deployed on Vercel for privacy-first, serverless architecture.',
      longDescription: 'Using advanced OCR (Google Vision API and Tesseract.js fallback), GlycoScan extracts nutrition data from food labels and calculates net carbs, estimated GI, and glycaemic load (GL). The system then generates a simulated glucose curve showing the expected spike and return to baseline. All calculations are performed client-side, ensuring speed, privacy, and transparency.',
      icon: BeakerIcon,
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconColor: '#A855F7',
      borderColor: 'border-purple-500/30',
      images: ['/glycoscan/image.png', '/glycoscan/image copy.png', '/glycoscan/image copy 2.png'],
      features: [
        'Image-based nutrition analysis with OCR',
        'Glycaemic curve simulation visualization',
        'Impact classification (Low/Moderate/High)',
        'Privacy-safe, client-side processing',
        'Dual modes: Label scan & manual input',
        'Offline-friendly with Tesseract.js fallback',
      ],
      metrics: [
        { label: 'Live Prototype', value: 'Active', icon: RocketLaunchIcon },
        { label: 'Privacy First', value: '100%', icon: ShieldCheckIcon },
        { label: 'Response Time', value: '<2s', icon: ClockIcon },
      ],
      useCases: [
        'Diabetes Management',
        'Health & Wellness Apps',
        'Nutrition Tracking',
        'Clinical Research',
      ],
    },
    {
      id: 'recyclr',
      title: 'Recyclr',
      subtitle: 'GIS Recycling Solution',
      tagline: 'Sustainability meets cutting-edge geospatial intelligence',
      shortDescription: 'Advanced GIS platform optimizing recycling center operations with real-time tracking, data insights, and environmental impact monitoring.',
      description: 'Recyclr is a pioneering GIS (Geographic Information System) product that specializes in providing innovative solutions for recycling centers. With a strong focus on sustainability and environmental stewardship, Recyclr utilizes cutting-edge technology to optimize the efficiency and effectiveness of recycling operations.',
      longDescription: 'Our GIS system integrates advanced mapping and geospatial analysis capabilities, allowing recycling centers to accurately track and manage the flow of recyclable materials. By leveraging data-driven insights and real-time information, Recyclr enables recycling centers to streamline their operations, reduce waste, and enhance resource utilization.',
      icon: MapIcon,
      gradient: 'from-emerald-500/20 to-teal-500/20',
      iconColor: '#10B981',
      borderColor: 'border-emerald-500/30',
      images: ['/recyclr/image.png', '/recyclr/image2.png', '/recyclr/image3.png'],
      features: [
        'Advanced mapping and geospatial analysis',
        'Real-time tracking of recyclable materials',
        'Data-driven optimization insights',
        'Customizable user interface',
        'Environmental impact monitoring',
        'Recycling trend analytics',
      ],
      metrics: [
        { label: 'Efficiency Increase', value: '45%', icon: ChartBarIcon },
        { label: 'Waste Reduction', value: '30%', icon: ClockIcon },
        { label: 'Active Centers', value: '150+', icon: UserGroupIcon },
      ],
      useCases: [
        'Municipal Recycling Centers',
        'Corporate Sustainability Programs',
        'Waste Management Facilities',
        'Environmental NGOs',
      ],
    },
    {
      id: 'coderhub',
      title: 'CoderHub',
      subtitle: 'LoyolaCoderHub (LCH)',
      tagline: 'AI-powered learning platform for the next generation of developers',
      shortDescription: 'Gen AI-based centralized platform providing code generation, pre-built libraries, plagiarism detection, and collaborative project management for students.',
      description: 'LoyolaCoderHub is a revolutionary educational platform that provides Gen AI based support to students, helping them formulate basic code structures and accelerate their learning journey.',
      longDescription: 'Integrated with University Student Center portals, LCH facilitates pre-defined code libraries (SSO authentication, wallet, payment API, scheduling, rosters, etc.) and includes advanced plagiarism detection. It allows multiple student participation in single projects and features a knowledge center for coding queries.',
      icon: CodeBracketIcon,
      gradient: 'from-blue-500/20 to-purple-500/20',
      iconColor: '#3B82F6',
      borderColor: 'border-blue-500/30',
      images: ['/coderhub/image.png', '/coderhub/image2.png', '/coderhub/image3.png'],
      features: [
        'Gen AI powered code generation',
        'Pre-built code libraries & templates',
        'Advanced plagiarism detection system',
        'Multi-student collaboration tools',
        'University portal integration',
        'Knowledge center & Q&A forum',
      ],
      metrics: [
        { label: 'Students Active', value: '5,000+', icon: UserGroupIcon },
        { label: 'Code Generated', value: '100K+', icon: ChartBarIcon },
        { label: 'Universities', value: '25+', icon: ShieldCheckIcon },
      ],
      useCases: [
        'Computer Science Programs',
        'Coding Bootcamps',
        'Online Learning Platforms',
        'Educational Institutions',
      ],
    },
    {
      id: 'paymint',
      title: 'PayMint',
      subtitle: 'Web3 Loyalty Tokenization Platform',
      tagline: 'Revolutionizing loyalty rewards with blockchain technology',
      shortDescription: 'Web3-powered platform granting users complete control over loyalty points and miles. Consolidate, trade, and monetize rewards from hotels, airlines, and stores as tokenized digital assets.',
      description: 'PayMint harnesses Web3 technology to revolutionize loyalty programs by enabling consumers to consolidate loyalty points and currency from various brands into tokenized assets. These can be sold, exchanged, traded, or redeemed in a decentralized marketplace.',
      longDescription: 'Our advanced architecture employs smart contracts to create fungible tokens and NFTs representing loyalty ownership. Brands can deliver offers directly to consumer wallets while receiving a percentage of secondary sales as a new revenue stream. PayMint generates significant value for customers while reducing loyalty program costs for brands. Built on Ethereum and Solana for platform compatibility, scalability, and universal security standards.',
      icon: CreditCardIcon,
      gradient: 'from-cyan-500/20 to-blue-500/20',
      iconColor: '#06B6D4',
      borderColor: 'border-cyan-500/30',
      images: ['/paymint/image.png', '/paymint/image copy.png', '/paymint/image copy 2.png'],
      features: [
        'Complete user control over loyalty assets',
        'Cross-brand point consolidation',
        'Fungible tokens & NFT ownership',
        'Smart contract-powered automation',
        'Decentralized marketplace trading',
        'Direct brand-to-wallet offers',
        'Ethereum & Solana blockchain integration',
        'Revenue sharing with brands',
      ],
      metrics: [
        { label: 'Cost Savings', value: '$5M+', icon: ChartBarIcon },
        { label: 'Brand Partners', value: '50+', icon: UserGroupIcon },
        { label: 'Transactions', value: '250K+', icon: ClockIcon },
      ],
      useCases: [
        'Retail Loyalty Programs',
        'Airline Miles Management',
        'Hotel Rewards Systems',
        'E-commerce Platforms',
      ],
    },
  ];

  const scrollToProduct = (productId: string) => {
    const element = document.getElementById(productId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const productId = hash.substring(1); // Remove the '#' character
      // Wait for the page to render before scrolling
      setTimeout(() => {
        scrollToProduct(productId);
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-5xl md:text-6xl lg:text-7xl font-light mb-6"
            >
              <span className="text-gradient">Powering the Next Generation</span>
              <br />
              <span className="text-white">of Decentralized Solutions</span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12">
              Our products bring scalable blockchain infrastructure, AI-powered developer tooling, 
              and geospatial intelligence to transform industries worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl font-bold text-lg transition-all text-white"
                style={{
                  background: 'linear-gradient(135deg, #00D4FF, #0066FF)',
                  boxShadow: '0 10px 40px rgba(0, 212, 255, 0.4)',
                }}
              >
                Explore Products
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-bold text-lg transition-all glass border border-cyan-500/30 hover:border-cyan-500/60"
              >
                View Documentation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Ambient Statistic Rings - Geometric Trust Visualization */}
      <AmbientRings />

      {/* 3. Product Suite Overview (Cards) */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              <span className="text-gradient">Our Product Suite</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Innovative solutions designed to solve real-world problems across multiple industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`glass rounded-2xl p-8 bg-gradient-to-br ${product.gradient} border ${product.borderColor} hover:border-white/30 transition-all cursor-pointer relative overflow-hidden group`}
                onClick={() => scrollToProduct(product.id)}
              >
                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                    style={{ 
                      backgroundColor: `${product.iconColor}20`,
                      border: `2px solid ${product.iconColor}40`,
                    }}
                  >
                    <product.icon 
                      className="w-8 h-8" 
                      style={{ color: product.iconColor }}
                    />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                  <p 
                    className="text-sm font-semibold mb-4"
                    style={{ color: product.iconColor }}
                  >
                    {product.tagline}
                  </p>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  <button 
                    className="flex items-center space-x-2 font-semibold transition-colors"
                    style={{ color: product.iconColor }}
                  >
                    <span>Learn More</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Product Deep Dive Sections */}
      {products.map((product, index) => (
        <section 
          key={product.id}
          id={product.id}
          className="py-20 relative"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-dense' : ''
            }`}>
              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? 'lg:col-start-2' : ''}
              >
                <div 
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6"
                  style={{ 
                    backgroundColor: `${product.iconColor}20`,
                    border: `1px solid ${product.iconColor}40`,
                  }}
                >
                  <product.icon className="w-5 h-5" style={{ color: product.iconColor }} />
                  <span className="font-semibold" style={{ color: product.iconColor }}>
                    {product.subtitle}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {product.title}
                </h2>
                <p className="text-2xl text-gray-400 mb-6">
                  {product.tagline}
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {product.description}
                </p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {product.longDescription}
                </p>

                {/* Key Features */}
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span 
                    className="w-1 h-6 rounded-full mr-3"
                    style={{ backgroundColor: product.iconColor }}
                  />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.05 * idx }}
                      className="flex items-start space-x-2"
                    >
                      <CheckCircleIcon 
                        className="w-5 h-5 flex-shrink-0 mt-0.5" 
                        style={{ color: product.iconColor }}
                      />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-xl font-bold transition-all text-white"
                    style={{
                      background: `linear-gradient(135deg, ${product.iconColor}, ${product.iconColor}CC)`,
                      boxShadow: `0 10px 30px ${product.iconColor}40`,
                    }}
                  >
                    Get Started
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-xl font-bold transition-all glass"
                    style={{ borderColor: `${product.iconColor}40` }}
                  >
                    View Documentation
                  </motion.button>
                </div>
              </motion.div>

              {/* Product Visuals */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
              >
                {product.images.length > 0 ? (
                  <div className="space-y-6">
                    {/* Main Image */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass rounded-2xl p-4 overflow-hidden"
                      style={{ borderColor: `${product.iconColor}30` }}
                    >
                      <img 
                        src={product.images[0]} 
                        alt={`${product.title} Screenshot 1`}
                        className="w-full rounded-xl"
                      />
                    </motion.div>

                    {/* Secondary Images */}
                    {product.images.length > 1 && (
                      <div className="grid grid-cols-2 gap-4">
                        {product.images.slice(1).map((img, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="glass rounded-xl p-3 overflow-hidden"
                            style={{ borderColor: `${product.iconColor}30` }}
                          >
                            <img 
                              src={img} 
                              alt={`${product.title} Screenshot ${idx + 2}`}
                              className="w-full rounded-lg"
                            />
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Placeholder for products without images
                  <div 
                    className="glass rounded-2xl p-12 flex items-center justify-center aspect-square"
                    style={{ borderColor: `${product.iconColor}30` }}
                  >
                    <product.icon 
                      className="w-48 h-48 opacity-20" 
                      style={{ color: product.iconColor }}
                    />
                  </div>
                )}

                {/* Metrics */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-3 gap-4 mt-6"
                >
                  {product.metrics.map((metric, idx) => (
                    <div 
                      key={idx}
                      className="glass rounded-xl p-4 text-center"
                      style={{ 
                        background: `linear-gradient(135deg, ${product.iconColor}10, ${product.iconColor}20)`,
                        borderColor: `${product.iconColor}30`,
                      }}
                    >
                      <metric.icon 
                        className="w-6 h-6 mx-auto mb-2" 
                        style={{ color: product.iconColor }}
                      />
                      <p className="text-2xl font-bold mb-1">{metric.value}</p>
                      <p className="text-xs text-gray-400">{metric.label}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Use Cases */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <h3 className="text-xl font-bold mb-6 text-center">Use Cases</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {product.useCases.map((useCase, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="glass rounded-xl p-4 text-center"
                    style={{ borderColor: `${product.iconColor}30` }}
                  >
                    <p className="text-sm font-medium text-gray-300">{useCase}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* 5. Documentation & Developer Onboarding */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="glass rounded-3xl p-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient">Start Building Today</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive documentation, SDKs, and support to get you up and running quickly
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <DocumentTextIcon className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <h3 className="text-xl font-bold mb-3">Documentation</h3>
                <p className="text-gray-400 mb-4">
                  Comprehensive guides, API references, and tutorials
                </p>
                <button className="text-cyan-400 font-semibold flex items-center justify-center mx-auto space-x-2">
                  <span>Read Docs</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <RocketLaunchIcon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-3">Quick Start</h3>
                <p className="text-gray-400 mb-4">
                  Get started with our SDKs and CLI tools in minutes
                </p>
                <button className="text-blue-400 font-semibold flex items-center justify-center mx-auto space-x-2">
                  <span>View GitHub</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <ChatBubbleLeftRightIcon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p className="text-gray-400 mb-4">
                  Join 5,000+ developers building the future
                </p>
                <button className="text-purple-400 font-semibold flex items-center justify-center mx-auto space-x-2">
                  <span>Join Discord</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="glass rounded-3xl p-12 md:p-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-center relative overflow-hidden"
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Build the Future of Web3?
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Join thousands of developers and businesses transforming industries with our innovative solutions
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-xl font-bold text-lg transition-all text-white"
                  style={{
                    background: 'linear-gradient(135deg, #00D4FF, #0066FF)',
                    boxShadow: '0 10px 40px rgba(0, 212, 255, 0.4)',
                  }}
                >
                  Start Building
                </motion.button>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 rounded-xl font-bold text-lg transition-all glass border border-cyan-500/30 hover:border-cyan-500/60"
                  >
                    Contact Sales
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-xl font-bold text-lg transition-all glass border border-blue-500/30 hover:border-blue-500/60"
                >
                  Join Community
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
