import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapIcon, 
  CodeBracketIcon, 
  CreditCardIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

const ProductsPage = () => {
  const products = [
    {
      id: 'glycoscan',
      title: 'GlycoScan',
      subtitle: 'AI-Powered Glycaemic Response Estimator',
      tagline: 'Scan. Analyze. Understand your food before you eat it.',
      shortDescription: 'AI-driven web-based tool that predicts the glycaemic impact of packaged foods from their nutrition labels, empowering users to make smarter, glucose-aware dietary choices.',
      description: 'GlycoScan uses computer vision, OCR, and scientifically validated heuristics to estimate how your blood sugar may respond to a particular food item in real time. Built with React.js, Node.js, and deployed on Vercel for privacy-first, serverless architecture.',
      longDescription: 'Using advanced OCR (Google Vision API and Tesseract.js fallback), GlycoScan extracts nutrition data from food labels and calculates net carbs, estimated GI, and glycaemic load (GL). The system then generates a simulated glucose curve showing the expected spike and return to baseline. All calculations are performed client-side, ensuring speed, privacy, and transparency.',
      icon: BeakerIcon,
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconColor: '#A855F7',
      borderColor: 'border-purple-500/30',
      images: ['/glycoscan/image.png', '/glycoscan/image copy.png', '/glycoscan/image copy 2.png'],
      features: [
        'Image-based nutrition analysis with OCR',
        'Glycaemic curve simulation visualization',
        'Impact classification (Low/Moderate/High)',
        'Privacy-safe, client-side processing',
        'Dual modes: Label scan & manual input',
        'Offline-friendly with Tesseract.js fallback',
      ],
      metrics: [
        { label: 'Live Prototype', value: 'Active', icon: RocketLaunchIcon },
        { label: 'Privacy First', value: '100%', icon: ShieldCheckIcon },
        { label: 'Response Time', value: '<2s', icon: ClockIcon },
      ],
      useCases: [
        'Diabetes Management',
        'Health & Wellness Apps',
        'Nutrition Tracking',
        'Clinical Research',
      ],
    },
    {
      id: 'recyclr',
      title: 'Recyclr',
      subtitle: 'GIS Recycling Solution',
      tagline: 'Sustainability meets cutting-edge geospatial intelligence',
      shortDescription: 'Advanced GIS platform optimizing recycling center operations with real-time tracking, data insights, and environmental impact monitoring.',
      description: 'Recyclr is a pioneering GIS (Geographic Information System) product that specializes in providing innovative solutions for recycling centers. With a strong focus on sustainability and environmental stewardship, Recyclr utilizes cutting-edge technology to optimize the efficiency and effectiveness of recycling operations.',
      longDescription: 'Our GIS system integrates advanced mapping and geospatial analysis capabilities, allowing recycling centers to accurately track and manage the flow of recyclable materials. By leveraging data-driven insights and real-time information, Recyclr enables recycling centers to streamline their operations, reduce waste, and enhance resource utilization.',
      icon: MapIcon,
      gradient: 'from-emerald-500/20 to-teal-500/20',
      iconColor: '#10B981',
      borderColor: 'border-emerald-500/30',
      images: ['/recyclr/image.png', '/recyclr/image2.png', '/recyclr/image3.png'],
      features: [
        'Advanced mapping and geospatial analysis',
        'Real-time tracking of recyclable materials',
        'Data-driven optimization insights',
        'Customizable user interface',
        'Environmental impact monitoring',
        'Recycling trend analytics',
      ],
      metrics: [
        { label: 'Efficiency Increase', value: '45%', icon: ChartBarIcon },
        { label: 'Waste Reduction', value: '30%', icon: ClockIcon },
        { label: 'Active Centers', value: '150+', icon: UserGroupIcon },
      ],
      useCases: [
        'Municipal Recycling Centers',
        'Corporate Sustainability Programs',
        'Waste Management Facilities',
        'Environmental NGOs',
      ],
    },
    {
      id: 'coderhub',
      title: 'CoderHub',
      subtitle: 'LoyolaCoderHub (LCH)',
      tagline: 'AI-powered learning platform for the next generation of developers',
      shortDescription: 'Gen AI-based centralized platform providing code generation, pre-built libraries, plagiarism detection, and collaborative project management for students.',
      description: 'LoyolaCoderHub is a revolutionary educational platform that provides Gen AI based support to students, helping them formulate basic code structures and accelerate their learning journey.',
      longDescription: 'Integrated with University Student Center portals, LCH facilitates pre-defined code libraries (SSO authentication, wallet, payment API, scheduling, rosters, etc.) and includes advanced plagiarism detection. It allows multiple student participation in single projects and features a knowledge center for coding queries.',
      icon: CodeBracketIcon,
      gradient: 'from-blue-500/20 to-purple-500/20',
      iconColor: '#3B82F6',
      borderColor: 'border-blue-500/30',
      images: ['/coderhub/image.png', '/coderhub/image2.png', '/coderhub/image3.png'],
      features: [
        'Gen AI powered code generation',
        'Pre-built code libraries & templates',
        'Advanced plagiarism detection system',
        'Multi-student collaboration tools',
        'University portal integration',
        'Knowledge center & Q&A forum',
      ],
      metrics: [
        { label: 'Students Active', value: '5,000+', icon: UserGroupIcon },
        { label: 'Code Generated', value: '100K+', icon: ChartBarIcon },
        { label: 'Universities', value: '25+', icon: ShieldCheckIcon },
      ],
      useCases: [
        'Computer Science Programs',
        'Coding Bootcamps',
        'Online Learning Platforms',
        'Educational Institutions',
      ],
    },
    {
      id: 'wallet',
      title: 'Web3 Loyalty Wallet',
      subtitle: 'Tokenized Loyalty Platform',
      tagline: 'Transform loyalty points into valuable digital assets',
      shortDescription: 'Blockchain-powered platform enabling users to consolidate, trade, and manage loyalty points from multiple brands as tokenized digital assets.',
      description: 'Revolutionary Web3 platform granting users complete control over loyalty points and miles through blockchain technology. Transform traditional rewards into tradeable digital assets.',
      longDescription: 'At Loyolatech, we enable consumers to consolidate loyalty points earned from various hotels, airlines, and stores into tokenized assets stored in their digital wallet. These assets can be sold, exchanged, traded, or redeemed in a marketplace. Built on Ethereum and Solana for optimal performance and cost-efficiency.',
      icon: CreditCardIcon,
      gradient: 'from-cyan-500/20 to-blue-500/20',
      iconColor: '#06B6D4',
      borderColor: 'border-cyan-500/30',
      images: [],
      features: [
        'Cross-brand loyalty point consolidation',
        'NFT-based ownership tokens',
        'Smart contract automation',
        'Decentralized marketplace',
        'Direct brand-to-consumer offers',
        'Ethereum & Solana integration',
      ],
      metrics: [
        { label: 'Cost Savings', value: '$5M+', icon: ChartBarIcon },
        { label: 'Brand Partners', value: '50+', icon: UserGroupIcon },
        { label: 'Transactions', value: '250K+', icon: ClockIcon },
      ],
      useCases: [
        'Retail Loyalty Programs',
        'Airline Miles Management',
        'Hotel Rewards Systems',
        'E-commerce Platforms',
      ],
    },
  ];

  const scrollToProduct = (productId: string) => {
    const element = document.getElementById(productId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
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
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-gradient">Powering the Next Generation</span>
              <br />
              <span className="text-white">of Decentralized Solutions</span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12">
              Our products bring scalable blockchain infrastructure, AI-powered developer tooling, 
              and geospatial intelligence to transform industries worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl font-bold text-lg transition-all text-white"
                style={{
                  background: 'linear-gradient(135deg, #00D4FF, #0066FF)',
                  boxShadow: '0 10px 40px rgba(0, 212, 255, 0.4)',
                }}
              >
                Explore Products
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-bold text-lg transition-all glass border border-cyan-500/30 hover:border-cyan-500/60"
              >
                View Documentation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Product Suite Overview (Cards) */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Our Product Suite</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Innovative solutions designed to solve real-world problems across multiple industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`glass rounded-2xl p-8 bg-gradient-to-br ${product.gradient} border ${product.borderColor} hover:border-white/30 transition-all cursor-pointer relative overflow-hidden group`}
                onClick={() => scrollToProduct(product.id)}
              >
                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                    style={{ 
                      backgroundColor: `${product.iconColor}20`,
                      border: `2px solid ${product.iconColor}40`,
                    }}
                  >
                    <product.icon 
                      className="w-8 h-8" 
                      style={{ color: product.iconColor }}
                    />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                  <p 
                    className="text-sm font-semibold mb-4"
                    style={{ color: product.iconColor }}
                  >
                    {product.tagline}
                  </p>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  <button 
                    className="flex items-center space-x-2 font-semibold transition-colors"
                    style={{ color: product.iconColor }}
                  >
                    <span>Learn More</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Product Deep Dive Sections */}
      {products.map((product, index) => (
        <section 
          key={product.id}
          id={product.id}
          className="py-20 relative"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-dense' : ''
            }`}>
              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? 'lg:col-start-2' : ''}
              >
                <div 
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6"
                  style={{ 
                    backgroundColor: `${product.iconColor}20`,
                    border: `1px solid ${product.iconColor}40`,
                  }}
                >
                  <product.icon className="w-5 h-5" style={{ color: product.iconColor }} />
                  <span className="font-semibold" style={{ color: product.iconColor }}>
                    {product.subtitle}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {product.title}
                </h2>
                <p className="text-2xl text-gray-400 mb-6">
                  {product.tagline}
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {product.description}
                </p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {product.longDescription}
                </p>

                {/* Key Features */}
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span 
                    className="w-1 h-6 rounded-full mr-3"
                    style={{ backgroundColor: product.iconColor }}
                  />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * idx }}
                      className="flex items-start space-x-2"
                    >
                      <CheckCircleIcon 
                        className="w-5 h-5 flex-shrink-0 mt-0.5" 
                        style={{ color: product.iconColor }}
                      />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-xl font-bold transition-all text-white"
                    style={{
                      background: `linear-gradient(135deg, ${product.iconColor}, ${product.iconColor}CC)`,
                      boxShadow: `0 10px 30px ${product.iconColor}40`,
                    }}
                  >
                    Get Started
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-xl font-bold transition-all glass"
                    style={{ borderColor: `${product.iconColor}40` }}
                  >
                    View Documentation
                  </motion.button>
                </div>
              </motion.div>

              {/* Product Visuals */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
              >
                {product.images.length > 0 ? (
                  <div className="space-y-6">
                    {/* Main Image */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass rounded-2xl p-4 overflow-hidden"
                      style={{ borderColor: `${product.iconColor}30` }}
                    >
                      <img 
                        src={product.images[0]} 
                        alt={`${product.title} Screenshot 1`}
                        className="w-full rounded-xl"
                      />
                    </motion.div>

                    {/* Secondary Images */}
                    {product.images.length > 1 && (
                      <div className="grid grid-cols-2 gap-4">
                        {product.images.slice(1).map((img, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="glass rounded-xl p-3 overflow-hidden"
                            style={{ borderColor: `${product.iconColor}30` }}
                          >
                            <img 
                              src={img} 
                              alt={`${product.title} Screenshot ${idx + 2}`}
                              className="w-full rounded-lg"
                            />
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Placeholder for products without images
                  <div 
                    className="glass rounded-2xl p-12 flex items-center justify-center aspect-square"
                    style={{ borderColor: `${product.iconColor}30` }}
                  >
                    <product.icon 
                      className="w-48 h-48 opacity-20" 
                      style={{ color: product.iconColor }}
                    />
                  </div>
                )}

                {/* Metrics */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-3 gap-4 mt-6"
                >
                  {product.metrics.map((metric, idx) => (
                    <div 
                      key={idx}
                      className="glass rounded-xl p-4 text-center"
                      style={{ 
                        background: `linear-gradient(135deg, ${product.iconColor}10, ${product.iconColor}20)`,
                        borderColor: `${product.iconColor}30`,
                      }}
                    >
                      <metric.icon 
                        className="w-6 h-6 mx-auto mb-2" 
                        style={{ color: product.iconColor }}
                      />
                      <p className="text-2xl font-bold mb-1">{metric.value}</p>
                      <p className="text-xs text-gray-400">{metric.label}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Use Cases */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <h3 className="text-xl font-bold mb-6 text-center">Use Cases</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {product.useCases.map((useCase, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="glass rounded-xl p-4 text-center"
                    style={{ borderColor: `${product.iconColor}30` }}
                  >
                    <p className="text-sm font-medium text-gray-300">{useCase}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* 6. Documentation & Developer Onboarding */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient">Start Building Today</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive documentation, SDKs, and support to get you up and running quickly
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <DocumentTextIcon className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <h3 className="text-xl font-bold mb-3">Documentation</h3>
                <p className="text-gray-400 mb-4">
                  Comprehensive guides, API references, and tutorials
                </p>
                <button className="text-cyan-400 font-semibold flex items-center justify-center mx-auto space-x-2">
                  <span>Read Docs</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <RocketLaunchIcon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-3">Quick Start</h3>
                <p className="text-gray-400 mb-4">
                  Get started with our SDKs and CLI tools in minutes
                </p>
                <button className="text-blue-400 font-semibold flex items-center justify-center mx-auto space-x-2">
                  <span>View GitHub</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <ChatBubbleLeftRightIcon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p className="text-gray-400 mb-4">
                  Join 5,000+ developers building the future
                </p>
                <button className="text-purple-400 font-semibold flex items-center justify-center mx-auto space-x-2">
                  <span>Join Discord</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Trust & Social Proof */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-400">
              Powering innovation across the globe
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-8"
            >
              <ShieldCheckIcon className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Security Audited</h3>
              <p className="text-gray-400">
                All our products undergo rigorous security audits by leading firms
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-8"
            >
              <UserGroupIcon className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Enterprise Ready</h3>
              <p className="text-gray-400">
                Scalable solutions trusted by Fortune 500 companies
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-8"
            >
              <ChartBarIcon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-gray-400">
                Delivering measurable ROI and operational efficiency
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 md:p-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-center relative overflow-hidden"
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Build the Future of Web3?
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Join thousands of developers and businesses transforming industries with our innovative solutions
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-xl font-bold text-lg transition-all text-white"
                  style={{
                    background: 'linear-gradient(135deg, #00D4FF, #0066FF)',
                    boxShadow: '0 10px 40px rgba(0, 212, 255, 0.4)',
                  }}
                >
                  Start Building
                </motion.button>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 rounded-xl font-bold text-lg transition-all glass border border-cyan-500/30 hover:border-cyan-500/60"
                  >
                    Contact Sales
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-xl font-bold text-lg transition-all glass border border-blue-500/30 hover:border-blue-500/60"
                >
                  Join Community
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
