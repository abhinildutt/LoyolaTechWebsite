import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  gradient: string;
  image: string;
}

const ProductShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProduct, setActiveProduct] = useState<number>(0);

  const products: Product[] = [
    {
      id: 'glycoscan',
      name: 'GlycoScan',
      tagline: 'Vision meets precision',
      description: 'AI-powered nutrition analysis that reads labels and predicts glucose response curves in real-time.',
      color: '#06b6d4',
      gradient: 'from-cyan-500 to-blue-600',
      image: '/glycoscan/image.png',
    },
    {
      id: 'paymint',
      name: 'Paymint',
      tagline: 'Loyalty, decentralized',
      description: 'Blockchain-powered rewards platform that transforms customer engagement into lasting value.',
      color: '#7c3aed',
      gradient: 'from-purple-500 to-pink-600',
      image: '/paymint/image.png',
    },
    {
      id: 'recyclr',
      name: 'Recyclr',
      tagline: 'Sustainability rewarded',
      description: 'Turn recycling actions into tokenized rewards. Making environmental impact measurable and valuable.',
      color: '#10b981',
      gradient: 'from-emerald-500 to-teal-600',
      image: '/recyclr/image.png',
    },
    {
      id: 'coderhub',
      name: 'CoderHub',
      tagline: 'Build. Share. Earn.',
      description: 'Decentralized developer platform where contributions become assets through blockchain verification.',
      color: '#f59e0b',
      gradient: 'from-amber-500 to-orange-600',
      image: '/coderhub/image.png',
    },
  ];

  return (
    <section className="py-32 bg-gray-950 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Our Products
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Purpose-built solutions that blend AI, blockchain, and elegant user experience
          </p>
        </motion.div>

        {/* Horizontal scroll products */}
        <div className="relative">
          {/* Desktop: Grid layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                onHoverStart={() => setActiveProduct(idx)}
                className="group cursor-pointer"
              >
                <Link to="/products">
                  <div className="relative h-96 rounded-3xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all">
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Product image */}
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>

                    {/* Content overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Text content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <motion.div
                        className="w-12 h-1 rounded-full bg-gradient-to-r mb-4"
                        style={{ background: `linear-gradient(90deg, ${product.color}, transparent)` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        viewport={{ once: false }}
                      />
                      <h3 className="text-2xl font-medium text-white mb-2">{product.name}</h3>
                      <p className="text-sm text-gray-400 font-light mb-3">{product.tagline}</p>
                      <motion.p
                        className="text-sm text-gray-500 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {product.description}
                      </motion.p>
                    </div>

                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"
                      style={{ background: product.color }}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
              {products.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex-shrink-0 w-80 snap-center"
                >
                  <Link to="/products">
                    <div className="relative h-96 rounded-3xl overflow-hidden bg-gray-900 border border-gray-800">
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain opacity-80"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div
                          className="w-12 h-1 rounded-full mb-4"
                          style={{ background: product.color }}
                        />
                        <h3 className="text-2xl font-medium text-white mb-2">{product.name}</h3>
                        <p className="text-sm text-gray-400 font-light mb-2">{product.tagline}</p>
                        <p className="text-sm text-gray-500 font-light">{product.description}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* View all products link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center text-gray-400 hover:text-cyan-400 transition-colors font-light"
            >
              <span className="mr-2">View all products</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* CSS for hiding scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ProductShowcase;

