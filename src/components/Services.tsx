import { motion } from 'framer-motion';
import BlockchainIcon from '../assets/icons/BlockchainIcon';
import TokenIcon from '../assets/icons/TokenIcon';
import Web3Icon from '../assets/icons/Web3Icon';
import NFTIcon from '../assets/icons/NFTIcon';
import DataFlowIcon from '../assets/icons/DataFlowIcon';
import { CpuChipIcon } from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      icon: 'blockchain',
      title: 'Blockchain',
      description: 'Blockchain for business is valuable for entities transacting with one another. With distributed ledger technology, permissioned participants can access the same information at the same time to improve efficiency, build trust and remove friction.',
      iconColor: '#00D4FF',
    },
    {
      icon: 'token',
      title: 'Tokens',
      description: 'As a decentralized ecosystem with its own loyalty platform, Loyola gives brands a chance to build their own applications within their system. Customers earn rewards for their purchases; these rewards are then tokenized.',
      iconColor: '#0066FF',
    },
    {
      icon: 'web3',
      title: 'Web3',
      description: 'Web3 is an umbrella that comprises various fields like semantic web, AR/VR, AI at scale, blockchain technologies, and decentralization.',
      iconColor: '#7B3FE4',
    },
    {
      icon: 'iot',
      title: 'IoT',
      description: 'Accessibility to big data sets, along with the autonomous collection and exchange of data, means that it is becoming easier to gain insights into things like customer behaviors and product performance.',
      iconColor: '#00D4FF',
    },
    {
      icon: 'data',
      title: 'Data Analytics',
      description: 'From predicting customer behaviour to identifying market trends, data analytics has become an essential tool for businesses to stay competitive in today\'s data-driven world.',
      iconColor: '#0066FF',
    },
    {
      icon: 'nft',
      title: 'NFT Development',
      description: 'Loyola Tech\'s NFT solutions provide a secure and transparent platform for artists, creators, and collectors to showcase, trade, and monetize their digital creations.',
      iconColor: '#A855F7',
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden" style={{ background: 'var(--web3-bg-secondary)' }}>
      {/* Blockchain Grid Background */}
      <div className="absolute inset-0 blockchain-grid opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Our Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Empowering businesses with cutting-edge technology solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const renderIcon = () => {
              switch(service.icon) {
                case 'blockchain':
                  return <BlockchainIcon className="w-16 h-16" color={service.iconColor} />;
                case 'token':
                  return <TokenIcon className="w-16 h-16" color={service.iconColor} />;
                case 'web3':
                  return <Web3Icon className="w-16 h-16" color={service.iconColor} />;
                case 'iot':
                  return <CpuChipIcon className="w-16 h-16" style={{ color: service.iconColor }} />;
                case 'data':
                  return <DataFlowIcon className="w-16 h-16" color={service.iconColor} />;
                case 'nft':
                  return <NFTIcon className="w-16 h-16" color={service.iconColor} />;
                default:
                  return null;
              }
            };
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-xl p-6 border-glow transition-all cursor-pointer relative overflow-hidden group"
              >
                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${service.iconColor}, transparent)`,
                  }}
                />
                
                <motion.div 
                  className="mb-4 relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {renderIcon()}
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm relative z-10">
                  {service.description}
                </p>
                <button className="mt-4 flex items-center space-x-2 font-semibold text-sm transition-colors relative z-10"
                  style={{ color: service.iconColor }}>
                  <span>Learn More</span>
                  <span>→</span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
