import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  RocketLaunchIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  UserGroupIcon,
  GlobeAltIcon,
  SparklesIcon,
  TrophyIcon,
  ChartBarIcon,
  CodeBracketIcon,
  CpuChipIcon,
  BuildingOfficeIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const AboutPage = () => {
  const values = [
    {
      icon: ShieldCheckIcon,
      title: 'Transparency',
      description: 'Open and honest in all our operations and communications',
      color: '#06B6D4',
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology solutions',
      color: '#3B82F6',
    },
    {
      icon: UserGroupIcon,
      title: 'Collaboration',
      description: 'Working together to achieve extraordinary results',
      color: '#10B981',
    },
    {
      icon: HeartIcon,
      title: 'Sustainability',
      description: 'Building solutions that benefit people and planet',
      color: '#8B5CF6',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security',
      description: 'Protecting assets and data with enterprise-grade security',
      color: '#EC4899',
    },
  ];

  const team = [
    {
      name: 'Sushant Dutt',
      role: 'Founder and Chief Executive Officer',
      image: '/about/sushant.png',
      bio: 'Sushant brings more than 22 years of global experience in digital strategy, products, innovation and Client excellence. Prior to this he has successfully started 2 technology start-ups and raised more than $10m in capital. He has been at the forefront to bring various digital solutions including DLT blockchain, DeFi, SeFi, Web3.0, data analytics and AI/ML across industries.',
      education: 'Sloan Fellow from MIT, MBA from ISB, PGP from McCombs School of Business, MDP from Wharton School of Business',
      linkedin: '#',
    },
    {
      name: 'Igor Barinov',
      role: 'Co-Founder and Chief Product Officer',
      image: '/about/igor.png',
      bio: 'Igor is a technology expert with over 16 years of experience in product development, technology architecture and commercialization of digital solutions and platforms. Having successfully launched more than 3 technology companies, Igor brings the much-needed expertise to Loyolatech to front end the core product architecture and scalability.',
      education: 'PhD in Cognitive Computing, MIT and Purdue University Alumni',
      linkedin: '#',
    },
    {
      name: 'Abhinil Dutt',
      role: 'Head of Product Intelligence',
      image: '/about/abhinil.png',
      bio: 'Abhinil is an undergraduate student at the University of Illinois - Urbana Champaign majoring in Computer Science. He holds prior internship experience in Software Development at Amazon. He brings in the technical expertise in web/app development, UI/UX, Cloud, open source database architecture and software development methodologies.',
      education: 'UIUC Deans Lister and James Scholar Award Recipient',
      linkedin: '#',
    },
    {
      name: 'Alex McDonald',
      role: 'Head of Finance and Controller',
      image: '/about/alex.png',
      bio: 'Alex comes with 15+ years of experience in corporate finance, treasury and taxation. As an expert in corporate law and the Sarbanes-Oxley Act, Alex is responsible for ensuring compliance with accounting regulations and financial reporting mandates. He has successfully led multiple funding rounds and growth campaigns for Technology product start-ups.',
      education: 'MBA from MIT Sloan School of Management, Electrical Engineer from MIT',
      linkedin: '#',
    },
    {
      name: 'Celeste McFann',
      role: 'Chief People Officer',
      image: '/about/celeste.png',
      bio: 'Celeste is an industry veteran with more than 20 years of experience in people engagement, recruitment and policy compliance. Having previously worked with leading technology firms like Dropbox, Cloudflare and Hopper, she brings a deep understanding and enablement of attracting and retaining top talent in a start-up ecosystem.',
      education: 'MBA from Stanford University GSB, BS in Computer Science from UT Austin',
      linkedin: '#',
    },
  ];

  const services = [
    {
      icon: CodeBracketIcon,
      title: 'Blockchain Infrastructure',
      description: 'High-performance, low-latency chain solutions built for scale',
      color: '#06B6D4',
    },
    {
      icon: CpuChipIcon,
      title: 'Developer APIs & SDKs',
      description: 'Tools that make Web3 development accessible to all developers',
      color: '#3B82F6',
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Enterprise Integrations',
      description: 'Helping businesses transition securely to blockchain technology',
      color: '#10B981',
    },
    {
      icon: SparklesIcon,
      title: 'Research & Innovation',
      description: 'Advancing consensus and decentralized identity systems',
      color: '#8B5CF6',
    },
  ];

  const milestones = [
    { value: '10M+', label: 'API Calls Monthly', icon: ChartBarIcon },
    { value: '5,000+', label: 'Developers Worldwide', icon: UserGroupIcon },
    { value: '50+', label: 'Enterprise Partners', icon: BuildingOfficeIcon },
    { value: '99.9%', label: 'Uptime SLA', icon: ShieldCheckIcon },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* A. Hero / Intro Section */}
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
              className="text-5xl md:text-6xl lg:text-7xl font-light mb-6"
            >
              <span className="text-gradient">Building the Future</span>
              <br />
              <span className="text-white">of Decentralized Innovation</span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
              Loyola Tech is a blockchain technology company focused on creating scalable, secure, 
              and developer-friendly Web3 solutions that empower the next generation of digital innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* B. Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30"
            >
              <RocketLaunchIcon className="w-16 h-16 text-cyan-400 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our mission is to empower developers and enterprises to build the next generation 
                of decentralized applications with ease and transparency. We revolutionize the loyalty 
                system the way you have never seen before, building strong, lasting relationships with 
                customers through cutting-edge blockchain technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30"
            >
              <GlobeAltIcon className="w-16 h-16 text-blue-400 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We envision a world where blockchain seamlessly powers every digital interaction. 
                At Loyola, we are committed to revolutionizing the financial landscape by harnessing 
                the potential of blockchain technology, providing secure, transparent, and accessible 
                financial solutions for all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* C. The Story / Origin */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Our Story</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="glass rounded-3xl p-10 md:p-12"
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Loyola Tech began in 2020 with a simple goal — to bridge the gap between traditional 
              software systems and blockchain innovation. What started as a small developer team has 
              grown into a global organization powering solutions across finance, gaming, and enterprise 
              infrastructure.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              At Loyola, we are committed to revolutionizing the financial landscape by harnessing the 
              potential of blockchain technology. Our cutting-edge DeFi app empowers individuals and 
              businesses to unlock new possibilities, providing secure, transparent, and accessible 
              financial solutions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With a team of visionary experts, we are dedicated to reshaping the way you manage, invest, 
              and grow your assets. Join us on this transformative journey as we pave the way for a 
              decentralized and inclusive financial ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* D. What We Do */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              <span className="text-gradient">What We Do</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive blockchain solutions designed for the modern digital economy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ 
                    backgroundColor: `${service.color}20`,
                    border: `2px solid ${service.color}40`,
                  }}
                >
                  <service.icon 
                    className="w-7 h-7" 
                    style={{ color: service.color }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* E. Core Values */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-2xl p-6 text-center border border-white/10 hover:border-white/30 transition-all"
              >
                <div className="flex justify-center mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ 
                      backgroundColor: `${value.color}20`,
                      border: `2px solid ${value.color}40`,
                    }}
                  >
                    <value.icon 
                      className="w-6 h-6" 
                      style={{ color: value.color }}
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* F. Meet the Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Meet the Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Visionary leaders driving innovation in blockchain technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all group"
              >
                {/* Profile Image */}
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-gray-400 text-xs mb-3">
                      <strong className="text-gray-300">Education:</strong> {member.education}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* G. Global Presence */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Global Presence</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Serving enterprises and developers across the world
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="glass rounded-3xl p-12 text-center"
          >
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/30 flex items-center justify-center">
                <GlobeAltIcon className="w-10 h-10 text-cyan-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Headquarters</h3>
            <p className="text-gray-300 text-lg mb-2">8 The Green Suite B</p>
            <p className="text-gray-300 text-lg mb-8">Dover, DE 19901, USA</p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From our Delaware headquarters, we serve a global community of developers, 
              enterprises, and innovators building the future of decentralized technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* H. Achievements / Milestones */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Our Impact</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Numbers that showcase our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-8 text-center border border-white/10 hover:border-cyan-500/30 transition-all"
              >
                <milestone.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-4xl font-bold mb-2 text-gradient">{milestone.value}</h3>
                <p className="text-gray-400">{milestone.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* I. Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
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
              <TrophyIcon className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Join Us in Building the Decentralized Future
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Whether you're a developer, enterprise partner, or innovator, 
                we'd love to connect with you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/products">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 rounded-xl font-bold text-lg transition-all text-white"
                    style={{
                      background: 'linear-gradient(135deg, #00D4FF, #0066FF)',
                      boxShadow: '0 10px 40px rgba(0, 212, 255, 0.4)',
                    }}
                  >
                    Explore Our Products
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 rounded-xl font-bold text-lg transition-all glass border border-cyan-500/30 hover:border-cyan-500/60"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

