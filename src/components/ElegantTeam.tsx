import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const ElegantTeam = () => {
  const team = [
    {
      name: 'Sushant Dutt',
      role: 'Founder and Chief Executive Officer',
      focus: 'Digital Strategy & Innovation',
      image: '/about/sushant.png',
      bio: 'Sushant brings more than 22 years of global experience in digital strategy, products, innovation and Client excellence. Prior to this he has successfully started 2 technology start-ups and raised more than $10m in capital.',
      education: 'Sloan Fellow from MIT, MBA from ISB',
      linkedin: '#',
      color: '#00D4FF',
    },
    {
      name: 'Igor Barinov',
      role: 'Co-Founder and Chief Product Officer',
      focus: 'Product Architecture & Scalability',
      image: '/about/igor.png',
      bio: 'Igor is a technology expert with over 16 years of experience in product development, technology architecture and commercialization of digital solutions and platforms.',
      education: 'PhD in Cognitive Computing, MIT and Purdue University Alumni',
      linkedin: '#',
      color: '#3B82F6',
    },
    {
      name: 'Abhinil Dutt',
      role: 'Head of Product Intelligence',
      focus: 'Development & UX Innovation',
      image: '/about/abhinil.png',
      bio: 'Abhinil brings technical expertise in web/app development, UI/UX, Cloud, open source database architecture and software development methodologies.',
      education: 'UIUC Deans Lister and James Scholar Award Recipient',
      linkedin: '#',
      color: '#7B3FE4',
    },
    {
      name: 'Alex McDonald',
      role: 'Head of Finance and Controller',
      focus: 'Corporate Finance & Compliance',
      image: '/about/alex.png',
      bio: 'Alex comes with 15+ years of experience in corporate finance, treasury and taxation. He has successfully led multiple funding rounds and growth campaigns for Technology product start-ups.',
      education: 'MBA from MIT Sloan School of Management, Electrical Engineer from MIT',
      linkedin: '#',
      color: '#10B981',
    },
    {
      name: 'Celeste McFann',
      role: 'Chief People Officer',
      focus: 'Talent & Culture',
      image: '/about/celeste.png',
      bio: 'Celeste is an industry veteran with more than 20 years of experience in people engagement, recruitment and policy compliance, bringing deep understanding of attracting top talent.',
      education: 'MBA from Stanford University GSB, BS in Computer Science from UT Austin',
      linkedin: '#',
      color: '#EC4899',
    },
  ];

  return (
    <div className="relative py-32 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent" />

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-extralight mb-6">
            <span className="text-gradient">The Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light mb-4">
            Engineers, designers, researchers - united by curiosity and precision
          </p>
          <motion.p
            className="text-sm text-gray-500 font-light italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Human + Data Synergy
          </motion.p>
        </motion.div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamMember key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    focus: string;
    image: string;
    bio: string;
    education: string;
    linkedin: string;
    color: string;
  };
  index: number;
}

const TeamMember = ({ member, index }: TeamMemberProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500"
        style={{
          background: `linear-gradient(135deg, ${member.color}10, transparent)`,
        }}
      >
        {/* Image container with geometric mask */}
        <div className="relative aspect-square overflow-hidden">
          {/* Main image with parallax */}
          <motion.div
            className="absolute inset-0"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
            
            {/* Animated data visual overlay */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0.3 : 0 }}
              transition={{ duration: 0.4 }}
            >
              <svg className="w-full h-full" viewBox="0 0 400 400">
                {/* Geometric network pattern */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.circle
                    key={i}
                    cx={50 + (i % 4) * 100}
                    cy={50 + Math.floor(i / 4) * 300}
                    r="3"
                    fill={member.color}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isHovered ? [0, 1, 0] : 0,
                      scale: isHovered ? [0, 1.5, 0] : 0,
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.1,
                      repeat: Infinity,
                    }}
                  />
                ))}
                {/* Connecting lines */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.line
                    key={`line-${i}`}
                    x1={50 + (i % 2) * 300}
                    y1={50}
                    x2={50 + ((i + 1) % 2) * 300}
                    y2={350}
                    stroke={member.color}
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: isHovered ? 1 : 0,
                      opacity: isHovered ? 0.4 : 0,
                    }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  />
                ))}
              </svg>
            </motion.div>
          </motion.div>

          {/* Floating focus tag */}
          <motion.div
            className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-xl z-10"
            style={{
              backgroundColor: `${member.color}20`,
              border: `1px solid ${member.color}40`,
              color: member.color,
            }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {member.focus}
          </motion.div>

          {/* Name overlay at bottom (always visible) */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <motion.h3
              className="text-2xl font-bold mb-1"
              style={{ color: 'white' }}
            >
              {member.name}
            </motion.h3>
            <motion.p
              className="text-sm font-light"
              style={{ color: member.color }}
            >
              {member.role}
            </motion.p>
          </div>
        </div>

        {/* Bio Section */}
        <div className="p-6 glass">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {member.bio}
          </p>
          <div className="pt-4 border-t border-white/10">
            <p className="text-gray-500 text-xs">
              <span className="text-gray-400 font-medium">Education:</span> {member.education}
            </p>
          </div>
        </div>

        {/* Corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20"
          style={{
            background: `radial-gradient(circle at top right, ${member.color}30, transparent)`,
          }}
          animate={{
            opacity: isHovered ? 0.6 : 0.3,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ElegantTeam;

