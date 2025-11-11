import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  RocketLaunchIcon,
  LightBulbIcon,
  UserGroupIcon,
  HeartIcon,
  ShieldCheckIcon,
  MapPinIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  CalendarIcon,
  ComputerDesktopIcon,
  SparklesIcon,
  ArrowRightIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology',
      color: '#3B82F6',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Transparency',
      description: 'Open and honest in all our operations',
      color: '#06B6D4',
    },
    {
      icon: UserGroupIcon,
      title: 'Collaboration',
      description: 'Working together to achieve extraordinary results',
      color: '#10B981',
    },
    {
      icon: RocketLaunchIcon,
      title: 'Impact-Driven Work',
      description: 'Building solutions that transform industries',
      color: '#8B5CF6',
    },
    {
      icon: HeartIcon,
      title: 'Work-Life Balance',
      description: 'Supporting wellbeing and personal growth',
      color: '#EC4899',
    },
  ];

  const benefits = [
    {
      icon: GlobeAltIcon,
      title: 'Flexible Remote Work',
      description: 'Work from anywhere in the world',
      color: '#06B6D4',
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Competitive Salary & Equity',
      description: 'Fair compensation with growth potential',
      color: '#10B981',
    },
    {
      icon: HeartIcon,
      title: 'Health & Wellness',
      description: 'Comprehensive health benefits',
      color: '#EC4899',
    },
    {
      icon: AcademicCapIcon,
      title: 'Learning & Development',
      description: 'Paid courses and conference tickets',
      color: '#8B5CF6',
    },
    {
      icon: ComputerDesktopIcon,
      title: 'Equipment Budget',
      description: 'Top-tier setup for remote work',
      color: '#3B82F6',
    },
    {
      icon: CalendarIcon,
      title: 'Generous PTO',
      description: 'Paid time off and mental health days',
      color: '#F59E0B',
    },
  ];

  const teams = [
    {
      name: 'Engineering',
      description: 'Building the core blockchain infrastructure and decentralized applications',
      icon: ComputerDesktopIcon,
      color: '#3B82F6',
    },
    {
      name: 'Product',
      description: 'Shaping the future of decentralized platforms and user experiences',
      icon: LightBulbIcon,
      color: '#06B6D4',
    },
    {
      name: 'Growth & Strategy',
      description: 'Driving business development and market expansion globally',
      icon: RocketLaunchIcon,
      color: '#10B981',
    },
    {
      name: 'Operations',
      description: 'Keeping the ecosystem running smoothly and efficiently',
      icon: BriefcaseIcon,
      color: '#8B5CF6',
    },
  ];

  const jobs = [
    {
      id: 1,
      title: 'Europe Growth Leader',
      department: 'Growth & Strategy',
      location: 'London, UK',
      type: 'Full Time',
      jobCode: '7011219',
      designation: 'Principal / Sr Principal',
      description: 'Support the delivery of growth and value creation programmes and digital transformation projects in the UK and across EMEA. Lead discovery phases, develop growth strategies, and identify value creation levers for our clients.',
      responsibilities: [
        'Identify growth and value creation levers and devise both short and long-term strategies',
        'Run discovery or strategy phases, developing top-line growth strategy and value creation roadmap',
        'Apply growth strategies to existing businesses, products and services',
        'Identify, test and incubate new revenue streams and business models',
        'Help shape platform-led transformation strategies with multi-disciplinary teams',
        'Design and deliver collaborative workshops with clients',
      ],
      qualifications: [
        'High-grade degree qualification in a relevant subject',
        'Hands on with Technology product led business and large scale transformation programs',
        'Previous experience in delivering growth and value creation',
        'Highly analytical and commercial skills',
        'Experience in identifying, incubating and scaling new businesses',
        'Entrepreneurial mindset and comfortable in flat, unstructured environments',
      ],
      color: '#10B981',
    },
    {
      id: 2,
      title: 'Blockchain Solidity Developer',
      department: 'Engineering',
      location: 'Remote (USA)',
      type: 'Full Time',
      jobCode: '7011014',
      designation: 'Associate / Engineer / Principal',
      description: 'Join our blockchain engineering team to build cutting-edge smart contracts and distributed ledger protocols. Deep understanding of blockchain technology and Solidity required.',
      responsibilities: [
        'Develop and deploy smart contracts using Solidity',
        'Think through and plan around potential security challenges and threat vectors',
        'Stay up to date on emerging blockchain capabilities',
        'Work with Node.js, JavaScript, and messaging systems like Kafka',
        'Collaborate with cross-functional teams on blockchain architecture',
      ],
      qualifications: [
        'BS/MS in Computer Science or similar technical subject',
        'Deep understanding of blockchain and distributed ledger protocols',
        'Strong knowledge of smart contract scripting languages (Solidity/Michelson)',
        'Understanding of distributed applications and consensus algorithms',
        'Knowledge of cryptography including asymmetric keys, hash functions, encryption',
        'Continuous learning mindset and voracious appetite for technical challenges',
      ],
      color: '#3B82F6',
    },
    {
      id: 3,
      title: 'Senior Rust Developer',
      department: 'Engineering',
      location: 'Kolkata, India / Remote',
      type: 'Full Time',
      jobCode: '7011063',
      designation: 'Senior Engineer / Manager',
      description: 'Perform research, analysis, and evaluation of software applications. Lead the design, development, testing, and maintenance of high-performance software solutions using Rust.',
      responsibilities: [
        'Research, design, and development of computer software systems',
        'Evaluate interface between hardware and software',
        'Develop and manage software testing and approval procedures',
        'Modify existing software to fix bugs and improve performance',
        'Mentor and help team members',
        'Participate actively in development and testing',
        'Follow up on new hardware and software products',
      ],
      qualifications: [
        '4-5 years of programming experience with Rust language',
        '5+ years in systems programming (may include C++, Go, etc.)',
        'Network programming and multithreaded programming knowledge',
        'Experience with SSL/TLS APIs and secure coding practices',
        'Debugging, profiling, and performance optimization skills',
        'Multi-platform development experience (Linux/Windows)',
        'Quick learner eager to understand new technologies',
      ],
      color: '#8B5CF6',
    },
  ];

  const filteredJobs = jobs.filter(job => {
    const departmentMatch = selectedDepartment === 'All' || job.department === selectedDepartment;
    const locationMatch = selectedLocation === 'All' || 
      (selectedLocation === 'Remote' && job.location.includes('Remote')) ||
      (selectedLocation === 'Onsite' && !job.location.includes('Remote'));
    return departmentMatch && locationMatch;
  });

  const departments = ['All', ...Array.from(new Set(jobs.map(job => job.department)))];
  const locations = ['All', 'Remote', 'Onsite'];

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
              <span className="text-gradient">Join Us in Building</span>
              <br />
              <span className="text-white">the Future of Decentralized Tech</span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-10">
              At Loyola Tech, we're pushing the limits of blockchain innovation — and we're looking 
              for passionate builders, creators, and problem-solvers to join our team.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 rounded-xl font-bold text-lg transition-all text-white flex items-center space-x-2 mx-auto"
              style={{
                background: 'linear-gradient(135deg, #00D4FF, #0066FF)',
                boxShadow: '0 10px 40px rgba(0, 212, 255, 0.4)',
              }}
            >
              <span>View Open Roles</span>
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* B. About Working at Loyola Tech */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              <span className="text-gradient">About Working at Loyola Tech</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We're a distributed team of engineers, designers, and thinkers working to make Web3 
              infrastructure accessible and reliable for everyone. Our culture is built on transparency, 
              innovation, and the belief that the best work happens when people are empowered to take 
              ownership and push boundaries.
            </p>
          </motion.div>

          {/* Company Values */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
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

      {/* C. Life at Loyola Tech - Culture */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              <span className="text-gradient">Life at Loyola Tech</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              More than just a workplace — it's a community of innovators
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 mb-12"
          >
            <div className="flex items-start space-x-4 mb-6">
              <SparklesIcon className="w-8 h-8 text-cyan-400 flex-shrink-0" />
              <div>
                <p className="text-gray-300 text-lg italic mb-4">
                  "I joined because I believed in the mission — and stayed because the people here 
                  genuinely care about innovation. Every day brings new challenges, and I'm constantly 
                  learning from the best minds in blockchain technology."
                </p>
                <p className="text-gray-400">— Engineering Team Member</p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 text-center"
            >
              <GlobeAltIcon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Remote-First Culture</h3>
              <p className="text-gray-400">
                Work from anywhere in the world with flexible hours and async communication
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <UserGroupIcon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Team Retreats</h3>
              <p className="text-gray-400">
                Annual offsites and meetups to connect, collaborate, and celebrate
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <AcademicCapIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
              <p className="text-gray-400">
                Access to courses, conferences, and resources to grow your skills
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* D. Benefits & Perks */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Benefits & Perks</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We invest in our team's wellbeing and growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ 
                    backgroundColor: `${benefit.color}20`,
                    border: `2px solid ${benefit.color}40`,
                  }}
                >
                  <benefit.icon 
                    className="w-7 h-7" 
                    style={{ color: benefit.color }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* F. Teams Overview */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Our Teams</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Find where your skills and passion align
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teams.map((team, index) => (
              <motion.div
                key={team.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-2xl p-8 text-center border border-white/10 hover:border-white/30 transition-all"
              >
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6"
                  style={{ 
                    backgroundColor: `${team.color}20`,
                    border: `2px solid ${team.color}40`,
                  }}
                >
                  <team.icon 
                    className="w-8 h-8" 
                    style={{ color: team.color }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{team.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {team.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* E. Open Positions */}
      <section id="open-roles" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Open Positions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join our team and make an impact
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            <div className="flex items-center space-x-2">
              <FunnelIcon className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400 font-semibold">Filter:</span>
            </div>

            {/* Department Filter */}
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedDepartment === dept
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'glass text-gray-400 hover:text-white'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Location Filter */}
            <div className="flex flex-wrap gap-2">
              {locations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setSelectedLocation(loc)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedLocation === loc
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'glass text-gray-400 hover:text-white'
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Job Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold">{job.title}</h3>
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ 
                          backgroundColor: `${job.color}20`,
                          color: job.color,
                        }}
                      >
                        {job.department}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <MapPinIcon className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BriefcaseIcon className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold">Job Code:</span>
                        <span>{job.jobCode}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 font-semibold mb-3">
                      Designation: {job.designation}
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-6">
                      {job.description}
                    </p>

                    {/* Expandable Details */}
                    <details className="group">
                      <summary className="cursor-pointer text-cyan-400 font-semibold flex items-center space-x-2 mb-4">
                        <span>View Full Job Description</span>
                        <ArrowRightIcon className="w-4 h-4 group-open:rotate-90 transition-transform" />
                      </summary>

                      <div className="space-y-6 pl-4 border-l-2 border-cyan-500/30">
                        {/* Responsibilities */}
                        <div>
                          <h4 className="text-lg font-bold mb-3">Key Responsibilities:</h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx} className="text-gray-300 text-sm flex items-start space-x-2">
                                <span className="text-cyan-400 mt-1">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Qualifications */}
                        <div>
                          <h4 className="text-lg font-bold mb-3">Qualifications:</h4>
                          <ul className="space-y-2">
                            {job.qualifications.map((qual, idx) => (
                              <li key={idx} className="text-gray-300 text-sm flex items-start space-x-2">
                                <span className="text-cyan-400 mt-1">•</span>
                                <span>{qual}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </details>
                  </div>

                  {/* Apply Button */}
                  <div className="lg:w-48 flex-shrink-0">
                    <motion.a
                      href={`mailto:careers@loyolatech.com?subject=Application for ${job.title} (Job Code: ${job.jobCode})`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block w-full py-3 px-6 rounded-xl font-bold text-center transition-all text-white"
                      style={{
                        background: `linear-gradient(135deg, ${job.color}, ${job.color}CC)`,
                        boxShadow: `0 10px 30px ${job.color}40`,
                      }}
                    >
                      Apply Now
                    </motion.a>
                    <p className="text-xs text-gray-500 mt-3 text-center">
                      Send CV to careers@loyolatech.com with Job Ref: {job.jobCode}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Don't see your role */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 glass rounded-3xl p-10 text-center border border-cyan-500/30"
          >
            <h3 className="text-2xl font-bold mb-4">Don't See Your Role?</h3>
            <p className="text-gray-400 mb-6">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <motion.a
              href="mailto:careers@loyolatech.com?subject=General Application"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 rounded-xl font-bold transition-all glass border border-cyan-500/30 hover:border-cyan-500/60"
            >
              Send Your Resume
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;

