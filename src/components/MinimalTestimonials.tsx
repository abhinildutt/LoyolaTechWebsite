import { motion } from 'framer-motion';
import { useState } from 'react';

const MinimalTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Loyola Tech transformed our loyalty program from a cost center into a strategic asset. The blockchain infrastructure is invisible to our customers, but the trust it creates is tangible.",
      author: "Sarah Chen",
      role: "Chief Technology Officer",
      company: "GlobalRetail Corp",
      color: "from-cyan-500 to-blue-600",
    },
    {
      quote: "The speed of development was remarkable. From concept to production in weeks, not months. Their expertise in both blockchain and UX design is unmatched.",
      author: "Marcus Williams",
      role: "VP of Innovation",
      company: "FutureBrands Inc",
      color: "from-purple-500 to-pink-600",
    },
    {
      quote: "Security and scalability were our primary concerns. Loyola Tech delivered both without compromise. Handling millions of transactions seamlessly.",
      author: "Dr. Emily Rodriguez",
      role: "Head of Engineering",
      company: "TechVentures",
      color: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Subtle decorative quotes */}
      <div className="absolute top-20 left-10 text-9xl text-cyan-500/5 font-serif pointer-events-none">"</div>
      <div className="absolute bottom-20 right-10 text-9xl text-cyan-500/5 font-serif rotate-180 pointer-events-none">"</div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Trusted by Leaders
          </h2>
          <p className="text-xl text-gray-400 font-light">
            What our partners say about working with us
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative min-h-[400px] flex items-center justify-center">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={false}
              animate={{
                opacity: activeIndex === idx ? 1 : 0,
                scale: activeIndex === idx ? 1 : 0.95,
                zIndex: activeIndex === idx ? 10 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 text-center flex flex-col items-center justify-center"
              style={{ pointerEvents: activeIndex === idx ? 'auto' : 'none' }}
            >
              {/* Quote */}
              <blockquote
                className="text-2xl md:text-3xl font-light text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto px-4"
              >
                "{testimonial.quote}"
              </blockquote>

              {/* Author info */}
              <div>
                {/* Accent line */}
                <div
                  className={`w-16 h-1 bg-gradient-to-r ${testimonial.color} mx-auto mb-6 rounded-full`}
                />

                <div className="text-white text-xl font-medium mb-2">{testimonial.author}</div>
                <div className="text-gray-400 font-light">
                  {testimonial.role} · {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

          {/* Navigation dots */}
          <div className="flex justify-center items-center gap-3 mt-16 relative z-20">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all rounded-full ${
                  activeIndex === idx
                    ? 'w-12 h-3 bg-cyan-500'
                    : 'w-3 h-3 bg-gray-700 hover:bg-gray-600'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">Go to testimonial {idx + 1}</span>
              </motion.button>
            ))}
          </div>

          {/* Arrow navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none z-20" style={{ marginTop: '-8rem' }}>
            <motion.button
              onClick={() => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="pointer-events-auto w-12 h-12 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm text-gray-400 hover:text-white hover:border-gray-600 transition-all flex items-center justify-center"
              whileHover={{ scale: 1.1, x: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M15 18L9 12L15 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
            <motion.button
              onClick={() => setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="pointer-events-auto w-12 h-12 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm text-gray-400 hover:text-white hover:border-gray-600 transition-all flex items-center justify-center"
              whileHover={{ scale: 1.1, x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 18L15 12L9 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </div>
      </div>
    </section>
  );
};

export default MinimalTestimonials;

