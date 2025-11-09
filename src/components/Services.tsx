import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  CubeIcon, 
  CurrencyDollarIcon, 
  GlobeAltIcon, 
  CpuChipIcon,
  ChartBarIcon,
  PhotoIcon
} from '@heroicons/react/24/outline';
import { useRef, MouseEvent } from 'react';

interface ServiceCardProps {
  service: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    gradient: string;
    glowColor: string;
  };
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [10, -10]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-10, 10]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const Icon = service.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
      }}
      className="glass rounded-2xl p-8 hover:border-white/40 transition-all group cursor-pointer relative overflow-hidden"
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full"
        style={{ transition: "transform 1s" }}
      />

      {/* Spotlight effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, ${service.glowColor}, transparent 60%)`,
        }}
      />
      
      {/* Icon container */}
      <motion.div 
        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 relative overflow-hidden group-hover:scale-110 transition-transform`}
        style={{ transformStyle: "preserve-3d", translateZ: 50 }}
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.5 }}
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
        <Icon className="w-8 h-8 text-white relative z-10" />
      </motion.div>
      
      <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-colors relative z-10">
        {service.title}
      </h3>
      <p className="text-gray-400 leading-relaxed relative z-10">
        {service.description}
      </p>
      <motion.button
        whileHover={{ x: 5 }}
        className="mt-6 text-blue-400 font-semibold flex items-center space-x-2 group-hover:text-blue-300 transition-colors relative z-10"
      >
        <span>Learn More</span>
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          →
        </motion.span>
      </motion.button>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-1 opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10 rounded-2xl"
        style={{
          background: `linear-gradient(45deg, ${service.glowColor}, transparent)`,
        }}
      />
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: CubeIcon,
      title: 'Blockchain',
      description: 'Blockchain for business is valuable for entities transacting with one another. With distributed ledger technology, permissioned participants can access the same information at the same time to improve efficiency, build trust and remove friction.',
      gradient: 'from-blue-500 to-cyan-500',
      glowColor: 'rgba(59, 130, 246, 0.5)',
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Tokens',
      description: 'As a decentralized ecosystem with its own loyalty platform, Loyola gives brands a chance to build their own applications within their system. Customers earn rewards for their purchases; these rewards are then tokenized.',
      gradient: 'from-purple-500 to-pink-500',
      glowColor: 'rgba(168, 85, 247, 0.5)',
    },
    {
      icon: GlobeAltIcon,
      title: 'Web3',
      description: 'Web3 is an umbrella that comprises various fields like semantic web, AR/VR, AI at scale, blockchain technologies, and decentralization.',
      gradient: 'from-green-500 to-emerald-500',
      glowColor: 'rgba(34, 197, 94, 0.5)',
    },
    {
      icon: CpuChipIcon,
      title: 'IoT',
      description: 'Accessibility to big data sets, along with the autonomous collection and exchange of data, means that it is becoming easier to gain insights into things like customer behaviors and product performance.',
      gradient: 'from-orange-500 to-red-500',
      glowColor: 'rgba(249, 115, 22, 0.5)',
    },
    {
      icon: ChartBarIcon,
      title: 'Data Analytics',
      description: 'From predicting customer behaviour to identifying market trends, data analytics has become an essential tool for businesses to stay competitive in today\'s data-driven world.',
      gradient: 'from-indigo-500 to-blue-500',
      glowColor: 'rgba(99, 102, 241, 0.5)',
    },
    {
      icon: PhotoIcon,
      title: 'NFT Development',
      description: 'Loyola Tech\'s NFT solutions provide a secure and transparent platform for artists, creators, and collectors to showcase, trade, and monetize their digital creations.',
      gradient: 'from-pink-500 to-rose-500',
      glowColor: 'rgba(236, 72, 153, 0.5)',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
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

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-block mb-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Our Services</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Empowering businesses with cutting-edge technology solutions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
