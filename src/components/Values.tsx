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
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
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
                viewport={{ once: true }}
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

        {/* Custom Blockchain Development Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 glass rounded-3xl p-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/20 relative overflow-hidden group"
        >
          {/* Animated border */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
              backgroundSize: '200% 100%',
            }}
            animate={{
              backgroundPosition: ['-200%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6 text-gradient"
              >
                Custom Blockchain Development
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 text-lg leading-relaxed mb-6"
              >
                Empower your business with a fast, trustworthy, and convenient tool to eliminate 
                the manual burden of repeatable operations. Smart contracts will automatically run 
                on your predefined set of rules and conditions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-400"
              >
                Transparency, security, automation, and standardization. The decentralized nature 
                of properly developed smart contracts allows you to take advantage of all these benefits.
              </motion.p>
            </div>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden group/icon">
                {/* Rotating gradient border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="text-center relative z-10">
                  <motion.div
                    className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center relative overflow-hidden group-hover/icon:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    <CubeIcon className="w-16 h-16 text-white relative z-10" />
                  </motion.div>
                  <p className="text-gray-300 font-semibold">Smart Contracts</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
