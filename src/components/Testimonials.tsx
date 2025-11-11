import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Emily Anderson',
      role: 'Board Member',
      content: 'The level of expertise and dedication that Loyola Tech brings to the table is truly commendable. They are extremely passionate about sharing their insights and guiding individuals like myself on this exciting journey.',
      rating: 5,
      gradient: 'from-blue-500/20 to-cyan-500/20',
      avatarGradient: 'from-blue-400 to-cyan-400',
      initials: 'EA',
    },
    {
      name: 'Sarah Thompson',
      role: 'Board Member',
      content: 'I am grateful to Loyola Tech for their unwavering support, guidance, and commitment to empowering women in the blockchain and DeFi space. The community of like-minded individuals fostered by Loyola Tech is invaluable.',
      rating: 5,
      gradient: 'from-purple-500/20 to-pink-500/20',
      avatarGradient: 'from-purple-400 to-pink-400',
      initials: 'ST',
    },
    {
      name: 'John Smith',
      role: 'Executive Leader',
      content: 'Working with Loyola Tech has been a seamless experience. Their professionalism, attention to detail, and clear communication have made every step of the process smooth and efficient.',
      rating: 5,
      gradient: 'from-green-500/20 to-emerald-500/20',
      avatarGradient: 'from-green-400 to-emerald-400',
      initials: 'JS',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-gradient">Hear from our customers</span>
          </motion.h2>
          <p className="text-xl text-gray-400">
            Trusted by businesses worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: false }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                rotateY: 5,
              }}
              className={`glass rounded-2xl p-8 hover:border-white/40 transition-all relative overflow-hidden group bg-gradient-to-br ${testimonial.gradient}`}
            >
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />

              {/* Animated quote mark */}
              <motion.div
                className="absolute top-4 right-4 text-6xl text-white/5 font-serif"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
              >
                "
              </motion.div>

              <div className="flex items-center mb-6 relative z-10">
                {/* Avatar */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.avatarGradient} flex items-center justify-center text-white font-bold text-lg mr-4 relative overflow-hidden group-hover:scale-110 transition-transform`}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <span className="relative z-10">{testimonial.initials}</span>
                </motion.div>

                <div>
                  <h4 className="font-bold text-lg mb-1 group-hover:text-gradient transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.1 + i * 0.1, type: "spring" }}
                  >
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed italic relative z-10">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
