import { motion } from 'framer-motion';

const BlockchainElements = () => {
  // Blockchain cubes - subtle and themed
  const blocks = [
    { id: 1, left: '15%', top: '20%', delay: 0 },
    { id: 2, left: '85%', top: '60%', delay: 1.5 },
    { id: 3, left: '70%', top: '15%', delay: 3 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {blocks.map((block) => (
        <motion.div
          key={block.id}
          className="absolute"
          style={{
            left: block.left,
            top: block.top,
          }}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            delay: block.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Blockchain Cube Icon */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(0, 212, 255, 0.15)"
            strokeWidth="1"
          >
            <path d="M12 2L2 7L12 12L22 7L12 2Z" />
            <path d="M2 17L12 22L22 17" />
            <path d="M2 12L12 17L22 12" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default BlockchainElements;

