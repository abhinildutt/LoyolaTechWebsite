import { motion } from 'framer-motion';
import { 
  RocketLaunchIcon, 
  CubeIcon
} from '@heroicons/react/24/outline';
import SecurityShieldIcon from '../assets/icons/SecurityShieldIcon';
import HandshakeIcon from '../assets/icons/HandshakeIcon';
import LinkChainIcon from '../assets/icons/LinkChainIcon';

const Values = () => {
  const values = [
    {
      icon: 'security',
      title: 'Security & Trust',
      description: 'Our commitment to delivering cutting-edge technology with a focus on security, scalability, and usability. Our blockchain-based solutions ensure the integrity of transactions and protect customer data.',
      color: 'text-cyan-400',
      iconColor: '#06B6D4',
      bgGradient: 'from-cyan-500/20 to-blue-600/20',
      iconGradient: 'from-cyan-400 to-blue-600',
    },
    {
      icon: 'innovation',
      title: 'Innovation',
      description: 'We strive to stay at the forefront of technological advancements, continuously refining and enhancing our solutions to meet the evolving needs of our clients.',
      color: 'text-blue-400',
      iconColor: '#3B82F6',
      bgGradient: 'from-blue-500/20 to-cyan-600/20',
      iconGradient: 'from-blue-400 to-cyan-600',
    },
    {
      icon: 'partnership',
      title: 'Partnership',
      description: 'Whether you are a small business looking to launch a loyalty program or a large enterprise seeking to transform your existing rewards system, Loyola Tech is your trusted partner.',
      color: 'text-cyan-400',
      iconColor: '#06B6D4',
      bgGradient: 'from-cyan-500/20 to-blue-600/20',
      iconGradient: 'from-cyan-400 to-blue-600',
    },
    {
      icon: 'transparency',
      title: 'Transparency',
      description: 'Our loyalty tokens leverage the transparency, security, and immutability of blockchain to create a seamless and trusted ecosystem for rewards programs.',
      color: 'text-blue-400',
      iconColor: '#3B82F6',
      bgGradient: 'from-blue-500/20 to-cyan-600/20',
      iconGradient: 'from-blue-400 to-cyan-600',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Animated background decoration */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
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
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
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

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }} />
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
            <span className="text-gradient">Our Values</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            What sets us apart is our commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const renderIcon = () => {
              switch(value.icon) {
                case 'security':
                  return <SecurityShieldIcon className="w-20 h-20" color={value.iconColor} />;
                case 'innovation':
                  return <RocketLaunchIcon className="w-20 h-20" style={{ color: value.iconColor }} />;
                case 'partnership':
                  return <HandshakeIcon className="w-20 h-20" color={value.iconColor} />;
                case 'transparency':
                  return <LinkChainIcon className="w-20 h-20" color={value.iconColor} />;
                default:
                  return null;
              }
            };
            
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  rotateY: 5,
                }}
                className={`glass rounded-2xl p-8 bg-gradient-to-br ${value.bgGradient} border border-white/10 hover:border-white/30 transition-all relative overflow-hidden group`}
              >
                {/* Animated background glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                />

                <div className="flex items-start space-x-4 relative z-10">
                  <motion.div
                    className={`${value.color} flex-shrink-0 relative`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.iconGradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity`} />
                    <div className="relative z-10">
                      {renderIcon()}
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Blockchain Development Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mt-20 relative"
        >
          {/* Main Card */}
          <div className="glass rounded-3xl p-8 md:p-12 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10 border border-white/20 relative overflow-hidden">
            {/* Animated Mesh Background */}
            <div className="absolute inset-0 opacity-30">
              <motion.div
                className="absolute w-full h-full"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px',
                }}
                animate={{
                  backgroundPosition: ['0px 0px', '50px 50px'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>

            {/* Floating orbs */}
            <motion.div
              className="absolute top-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, 30, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.4, 1],
                x: [0, -40, 0],
                y: [0, 40, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-center mb-12 relative z-10"
            >
              <h3 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
                Custom Blockchain Development
              </h3>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Transform your business with enterprise-grade blockchain solutions built for scale, security, and innovation
              </p>
            </motion.div>

            {/* Interactive 3-Column Feature Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 relative z-10">
              {[
                {
                  title: 'Smart Contracts',
                  desc: 'Automated execution of business logic with zero downtime',
                  icon: CubeIcon,
                  color: 'from-blue-400 to-cyan-500',
                  stats: '99.9% Uptime',
                },
                {
                  title: 'DApp Development',
                  desc: 'Decentralized applications with seamless user experiences',
                  icon: RocketLaunchIcon,
                  color: 'from-purple-400 to-pink-500',
                  stats: '100% Secure',
                },
                {
                  title: 'Token Systems',
                  desc: 'Custom tokenomics and loyalty reward mechanisms',
                  icon: SecurityShieldIcon,
                  color: 'from-cyan-400 to-blue-500',
                  stats: 'Infinite Scale',
                },
              ].map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="glass rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all relative overflow-hidden group cursor-pointer"
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />
                  
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-4 relative`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-full h-full text-white" />
                    {/* Pulse effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.color} -z-10`}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: idx * 0.3,
                      }}
                    />
                  </motion.div>

                  <h4 className="text-xl font-bold mb-2 group-hover:text-gradient transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {feature.desc}
                  </p>
                  
                  {/* Stats badge */}
                  <motion.div
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${feature.color} text-white`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {feature.stats}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Interactive Blockchain Visualization */}
            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              {/* Left: Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
              >
                <h4 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="text-gradient">Why Choose Loyola Tech?</span>
                </h4>
                
                <div className="space-y-4">
                  {[
                    { label: 'Enterprise Security', value: 'Military-grade encryption and multi-signature protocols' },
                    { label: 'Rapid Development', value: 'Launch production-ready solutions in weeks, not months' },
                    { label: 'Scalability', value: 'Handle millions of transactions without compromising speed' },
                    { label: 'Full Transparency', value: 'Immutable audit trails and real-time monitoring' },
                  ].map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer"
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 mt-2"
                        whileHover={{ scale: 2 }}
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-white mb-1">{item.label}</div>
                        <div className="text-sm text-gray-400">{item.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all flex items-center space-x-2"
                >
                  <span>Start Your Project</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </motion.div>

              {/* Right: Animated Blockchain Visual */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                className="relative h-96"
              >
                {/* Blockchain Blocks Animation */}
                <div className="relative h-full flex items-center justify-center">
                  {[0, 1, 2].map((blockIdx) => (
                    <motion.div
                      key={blockIdx}
                      className="absolute"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: blockIdx * 0.2 }}
                      style={{
                        left: `${blockIdx * 30}%`,
                        top: '50%',
                        transform: 'translateY(-50%)',
                      }}
                    >
                      {/* Block */}
                      <motion.div
                        className="relative w-24 h-24 glass rounded-xl border border-cyan-500/50 flex items-center justify-center"
                        whileHover={{ 
                          scale: 1.15,
                          rotateY: 180,
                          borderColor: 'rgba(6, 182, 212, 1)',
                        }}
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          y: {
                            duration: 2,
                            repeat: Infinity,
                            delay: blockIdx * 0.3,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        {/* Inner glow */}
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
                          animate={{
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: blockIdx * 0.3,
                          }}
                        />
                        
                        <div className="relative z-10 text-center">
                          <div className="text-cyan-400 font-bold text-xs mb-1">BLOCK</div>
                          <div className="text-white font-mono text-sm">#{blockIdx + 1}</div>
                        </div>

                        {/* Particles */}
                        {[...Array(3)].map((_, particleIdx) => (
                          <motion.div
                            key={particleIdx}
                            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                            animate={{
                              x: [0, Math.random() * 40 - 20],
                              y: [0, Math.random() * 40 - 20],
                              opacity: [1, 0],
                              scale: [1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: particleIdx * 0.5 + blockIdx * 0.2,
                            }}
                          />
                        ))}
                      </motion.div>

                      {/* Connection Line to Next Block */}
                      {blockIdx < 2 && (
                        <motion.div
                          className="absolute left-full top-1/2 w-16 h-0.5 origin-left"
                          style={{
                            background: 'linear-gradient(90deg, rgba(6, 182, 212, 0.5), rgba(6, 182, 212, 0.1))',
                          }}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: false }}
                          transition={{ delay: blockIdx * 0.3 + 0.3 }}
                        >
                          {/* Animated data flow */}
                          <motion.div
                            className="absolute w-2 h-2 bg-cyan-400 rounded-full top-1/2 -translate-y-1/2"
                            animate={{
                              x: [0, 64],
                              opacity: [1, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: blockIdx * 0.5,
                              ease: "linear",
                            }}
                          />
                        </motion.div>
                      )}
                    </motion.div>
                  ))}

                  {/* Central connecting ring */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-64 h-64 rounded-full border border-dashed border-blue-500/20" />
                  </motion.div>
                </div>

                {/* Floating tech labels */}
                <div className="absolute inset-0 pointer-events-none">
                  {['Solidity', 'Rust', 'Go', 'Web3.js'].map((tech, idx) => (
                    <motion.div
                      key={tech}
                      className="absolute px-3 py-1 rounded-full glass text-xs font-mono text-cyan-400 border border-cyan-500/30"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        y: {
                          duration: 3,
                          repeat: Infinity,
                          delay: idx * 0.5,
                          ease: "easeInOut",
                        },
                      }}
                      style={{
                        top: `${20 + idx * 20}%`,
                        right: idx % 2 === 0 ? '5%' : 'auto',
                        left: idx % 2 === 1 ? '5%' : 'auto',
                      }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
