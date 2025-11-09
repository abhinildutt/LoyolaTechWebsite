import { motion } from 'framer-motion';

const FloatingShapes = () => {
  const shapes = [
    {
      id: 1,
      path: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",
      delay: 0,
      duration: 15,
      left: '10%',
      top: '15%',
      size: 60,
      color: 'rgba(59, 130, 246, 0.2)',
    },
    {
      id: 2,
      path: "M3 3h18v18H3V3z",
      delay: 2,
      duration: 18,
      left: '85%',
      top: '25%',
      size: 50,
      color: 'rgba(139, 92, 246, 0.15)',
    },
    {
      id: 3,
      path: "M12 2L2 22h20L12 2z",
      delay: 4,
      duration: 20,
      left: '20%',
      top: '70%',
      size: 70,
      color: 'rgba(236, 72, 153, 0.2)',
    },
    {
      id: 4,
      path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
      delay: 1,
      duration: 16,
      left: '80%',
      top: '65%',
      size: 55,
      color: 'rgba(34, 197, 94, 0.18)',
    },
    {
      id: 5,
      path: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",
      delay: 3,
      duration: 22,
      left: '70%',
      top: '10%',
      size: 45,
      color: 'rgba(251, 191, 36, 0.15)',
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: shape.left,
            top: shape.top,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width={shape.size}
            height={shape.size}
            viewBox="0 0 24 24"
            fill={shape.color}
            stroke={shape.color}
            strokeWidth="1"
          >
            <motion.path
              d={shape.path}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingShapes;

