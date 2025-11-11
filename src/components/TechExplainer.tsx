import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const TechExplainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const steps = [
    {
      number: '01',
      title: 'Connect',
      description: 'Users engage with your platform through seamless, intuitive interactions',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <motion.path
            d="M24 4L24 44M4 24L44 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.circle
            cx="24"
            cy="24"
            r="18"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Verify',
      description: 'Blockchain consensus validates every transaction with cryptographic certainty',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <motion.path
            d="M8 24L18 34L40 12"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.rect
            x="4"
            y="4"
            width="40"
            height="40"
            rx="8"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Reward',
      description: 'Tokens are distributed instantly, creating immediate, tangible value',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <motion.circle
            cx="24"
            cy="24"
            r="18"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <motion.path
            d="M24 10L26.5 18.5L35 21L26.5 23.5L24 32L21.5 23.5L13 21L21.5 18.5L24 10Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, rotate: -180 }}
            whileInView={{ pathLength: 1, rotate: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Scale',
      description: 'Network effects amplify as more participants join the ecosystem',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          {[12, 20, 28].map((r, i) => (
            <motion.circle
              key={i}
              cx="24"
              cy="24"
              r={r}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.6 - i * 0.2 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
            />
          ))}
        </svg>
      ),
    },
  ];

  return (
    <section ref={containerRef} className="py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Subtle animated background lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" preserveAspectRatio="none">
        <motion.line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            From interaction to impact, every step is transparent and trustworthy
          </p>
        </motion.div>

        {/* Vertical flow on desktop, stacked on mobile */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 2, ease: "easeOut" }}
              style={{ transformOrigin: 'top' }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-32">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  idx % 2 === 0 ? '' : 'md:direction-rtl'
                }`}
              >
                {/* Content side */}
                <div className={`${idx % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                  <motion.div
                    className={`inline-block text-6xl font-light text-cyan-500/20 mb-4 ${
                      idx % 2 === 0 ? 'md:float-right md:mr-0 md:ml-6' : 'md:float-left md:ml-0 md:mr-6'
                    }`}
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="text-3xl md:text-4xl font-medium text-white mb-4 clear-both">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-400 font-light leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>

                {/* Icon side */}
                <div className={`flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end md:justify-start'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="relative w-32 h-32 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center text-cyan-400"
                  >
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-cyan-500/10"
                      animate={{
                        opacity: [0.1, 0.3, 0.1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: idx * 0.5,
                      }}
                    />
                    <div className="relative z-10">{step.icon}</div>
                  </motion.div>
                </div>

                {/* Center node (desktop only) */}
                <motion.div
                  className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-500"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-cyan-500"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.5,
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechExplainer;

