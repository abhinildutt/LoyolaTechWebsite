import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface StatProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

const AnimatedStat = ({ end, suffix = '', prefix = '', label, duration = 2 }: StatProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, end, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-5xl md:text-7xl font-light text-white mb-4">
        <span>{prefix}</span>
        <motion.span>{rounded}</motion.span>
        <span className="text-cyan-400">{suffix}</span>
      </div>
      <div className="text-gray-400 font-light text-lg">{label}</div>
    </motion.div>
  );
};

const MinimalStats = () => {
  const stats = [
    { end: 99.9, suffix: '%', label: 'Uptime Guarantee', duration: 2.5 },
    { end: 50, suffix: '+', label: 'Enterprise Partners', duration: 2 },
    { end: 10, suffix: 'M+', label: 'Transactions Processed', duration: 2.5 },
    { end: 24, suffix: '/7', label: 'Global Support', duration: 2 },
  ];

  return (
    <section className="py-32 bg-gray-950 relative overflow-hidden">
      {/* Minimal gradient accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Built for Scale
          </h2>
          <p className="text-xl text-gray-400 font-light">
            Enterprise-grade infrastructure trusted by industry leaders
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, idx) => (
            <AnimatedStat key={idx} {...stat} />
          ))}
        </div>

        {/* Decorative line */}
        <motion.div
          className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </section>
  );
};

export default MinimalStats;

