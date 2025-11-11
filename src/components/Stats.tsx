import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedNumber = ({ end, duration = 2, suffix = '', prefix = '' }: StatProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (endTime - startTime), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

const Stats = () => {
  const stats = [
    {
      value: 500,
      suffix: '+',
      label: 'Projects Completed',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      value: 100,
      suffix: '+',
      label: 'Happy Clients',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      value: 50,
      suffix: '+',
      label: 'Team Members',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      value: 99,
      suffix: '%',
      label: 'Client Satisfaction',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Our Impact</span>
          </h2>
          <p className="text-xl text-gray-400">Numbers that speak for themselves</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              className="glass rounded-2xl p-8 text-center group relative overflow-hidden"
            >
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full"
                style={{ transition: "transform 1s" }}
              />

              {/* Gradient background on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
              />

              <motion.div
                className={`text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent relative z-10`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
              >
                <AnimatedNumber end={stat.value} suffix={stat.suffix} />
              </motion.div>
              <p className="text-gray-400 text-sm md:text-base relative z-10">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

