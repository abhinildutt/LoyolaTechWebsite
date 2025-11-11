import { motion } from 'framer-motion';

const CodeToEcosystem = () => {
  return (
    <>
      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Scene 1: Code Creates Value */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0A0B0F] via-[#111821] to-[#0A0B0F]"
      >
        <div className="relative w-full max-w-4xl mx-auto px-4">
          {/* Text overlay */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative z-20 text-center mb-12"
          >
            <h3 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
              Code Creates Value
            </h3>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
              It all starts with code — every transaction, every connection, every token of trust.
            </p>
          </motion.div>

          {/* Floating code snippets */}
          <svg className="relative w-full h-[500px]" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
            {/* Code lines transforming */}
            {[
              { text: "const trust =", x: 100, y: 150, delay: 0 },
              { text: "blockchain.verify()", x: 150, y: 200, delay: 0.2 },
              { text: "{ secure: true }", x: 200, y: 250, delay: 0.4 },
              { text: "return value", x: 120, y: 300, delay: 0.6 },
              { text: "=> transaction", x: 600, y: 180, delay: 0.3 },
              { text: "{ immutable }", x: 650, y: 230, delay: 0.5 },
            ].map((code, i) => (
              <motion.text
                key={i}
                x={code.x}
                y={code.y}
                fill="currentColor"
                className="text-cyan-300 font-mono text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: [0, 1, 1, 0],
                  y: [20, 0, 0, -20]
                }}
                transition={{
                  duration: 4,
                  delay: code.delay,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              >
                {code.text}
              </motion.text>
            ))}

            {/* Code transforming into particles */}
            {[...Array(30)].map((_, i) => {
              const startX = 200 + Math.random() * 200;
              const startY = 200 + Math.random() * 200;
              const endX = 400;
              const endY = 300;
              
              return (
                <motion.circle
                  key={i}
                  cx={startX}
                  cy={startY}
                  r="2"
                  fill="url(#particle-gradient-1)"
                  initial={{ cx: startX, cy: startY, opacity: 0 }}
                  animate={{
                    cx: [startX, endX, endX + 50],
                    cy: [startY, endY, endY],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              );
            })}

            {/* Central token forming */}
            <motion.g transform="translate(400, 300)">
              {/* Hexagonal token */}
              <motion.path
                d="M0,-40 L35,-20 L35,20 L0,40 L-35,20 L-35,-20 Z"
                stroke="#06b6d4"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
              
              {/* Inner glow */}
              <motion.circle
                cx="0"
                cy="0"
                r="20"
                fill="url(#token-glow)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 1.1, 1],
                  opacity: [0, 0.8, 1, 0.8]
                }}
                transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatDelay: 2 }}
              />
            </motion.g>

            <defs>
              <linearGradient id="particle-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <radialGradient id="token-glow">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </motion.section>

      {/* Scene 2: The Blockchain Pulse */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0A0B0F] via-[#111821] to-[#0A0B0F]"
      >
        <div className="relative w-full max-w-4xl mx-auto px-4">
          {/* Text overlay */}
          <motion.div className="relative z-20 text-center mb-12">
            <h3 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
              The Blockchain Pulse
            </h3>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
              Powered by blockchain, each interaction becomes transparent, traceable, and secure.
            </p>
          </motion.div>

          {/* Blockchain network visualization */}
          <svg className="relative w-full h-[500px]" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
            {/* Network grid paths */}
            {[
              { d: "M100,300 Q250,200 400,300 T700,300", delay: 0 },
              { d: "M100,320 Q250,220 400,320 T700,320", delay: 0.2 },
              { d: "M100,280 Q250,180 400,280 T700,280", delay: 0.1 },
            ].map((path, i) => (
              <motion.path
                key={i}
                d={path.d}
                stroke="url(#network-gradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: path.delay, repeat: Infinity, repeatDelay: 1 }}
              />
            ))}

            {/* Nodes along the network */}
            {[150, 300, 450, 600].map((x, i) => (
              <motion.g key={i} transform={`translate(${x}, 300)`}>
                {/* Node circle */}
                <motion.circle
                  cx="0"
                  cy="0"
                  r="8"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="3"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.3, duration: 0.5 }}
                />
                
                {/* Pulsing effect */}
                <motion.circle
                  cx="0"
                  cy="0"
                  r="8"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  animate={{
                    r: [8, 16, 8],
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                  }}
                />
                
                {/* Inner glow */}
                <motion.circle
                  cx="0"
                  cy="0"
                  r="4"
                  fill="#06b6d4"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                />
              </motion.g>
            ))}

            {/* Tokens flowing through network */}
            {[...Array(3)].map((_, i) => (
              <motion.circle
                key={i}
                cx="100"
                cy="300"
                r="6"
                fill="url(#token-gradient)"
                animate={{
                  cx: [100, 250, 400, 550, 700],
                  opacity: [0, 1, 1, 1, 0],
                }}
                transition={{
                  duration: 4,
                  delay: i * 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            <defs>
              <linearGradient id="network-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
              </linearGradient>
              <radialGradient id="token-gradient">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f59e0b" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </motion.section>

      {/* Scene 3: Ecosystem of Loyalty */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0A0B0F] via-[#111821] to-[#0A0B0F]"
      >
        <div className="relative w-full max-w-4xl mx-auto px-4">
          {/* Text overlay */}
          <motion.div className="relative z-20 text-center mb-12">
            <h3 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
              Ecosystem of Loyalty
            </h3>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
              From code to community — intelligent loyalty systems that power everything we build.
            </p>
          </motion.div>

          {/* Ecosystem orbits */}
          <svg className="relative w-full h-[500px] opacity-80" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
            {/* Central core */}
            <motion.g transform="translate(400, 300)">
              {/* Central luminous node */}
              <motion.circle
                cx="0"
                cy="0"
                r="30"
                fill="url(#core-glow)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
              />
              
              {/* Pulse waves */}
              {[...Array(3)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx="0"
                  cy="0"
                  r="30"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="1"
                  animate={{
                    r: [30, 80, 130],
                    opacity: [0.8, 0.4, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 1,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.g>

            {/* Orbiting service nodes */}
            {[
              { name: "Payments", angle: 0, radius: 120, color: "#06b6d4" },
              { name: "Analytics", angle: 90, radius: 140, color: "#8b5cf6" },
              { name: "AI Systems", angle: 180, radius: 130, color: "#ec4899" },
              { name: "Rewards", angle: 270, radius: 125, color: "#10b981" },
            ].map((service, i) => {
              const rad = (service.angle * Math.PI) / 180;
              
              return (
                <motion.g
                  key={service.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.2 + 0.5 }}
                >
                  {/* Orbit path */}
                  <motion.circle
                    cx="400"
                    cy="300"
                    r={service.radius}
                    fill="none"
                    stroke={service.color}
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    opacity="0.3"
                  />
                  
                  {/* Service node */}
                  <motion.g
                    animate={{
                      x: [
                        400 + Math.cos(rad) * service.radius,
                        400 + Math.cos(rad + Math.PI * 2) * service.radius,
                      ],
                      y: [
                        300 + Math.sin(rad) * service.radius,
                        300 + Math.sin(rad + Math.PI * 2) * service.radius,
                      ],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <circle
                      cx="0"
                      cy="0"
                      r="12"
                      fill={service.color}
                      opacity="0.6"
                    />
                    <circle
                      cx="0"
                      cy="0"
                      r="8"
                      fill={service.color}
                    />
                    
                    {/* Energy trails */}
                    <motion.line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="0"
                      stroke={service.color}
                      strokeWidth="2"
                      opacity="0.4"
                      animate={{
                        x2: [-20, 0],
                        y2: [-20, 0],
                        opacity: [0.8, 0],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                      }}
                    />
                  </motion.g>
                </motion.g>
              );
            })}

            <defs>
              <radialGradient id="core-glow">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </motion.section>
    </>
  );
};

export default CodeToEcosystem;

