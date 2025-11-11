import { motion } from 'framer-motion';

// Blockchain Infrastructure - Nodes connecting to form a network
export const BlockchainIcon = ({ color = '#06B6D4', inView }: { color?: string; inView: boolean }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    {/* Nodes */}
    {[
      { cx: 24, cy: 8, delay: 0 },
      { cx: 8, cy: 24, delay: 0.1 },
      { cx: 40, cy: 24, delay: 0.2 },
      { cx: 24, cy: 40, delay: 0.3 },
    ].map((node, i) => (
      <motion.circle
        key={i}
        cx={node.cx}
        cy={node.cy}
        r="4"
        stroke={color}
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ delay: node.delay, duration: 0.3 }}
      />
    ))}
    {/* Connecting lines */}
    {[
      { x1: 24, y1: 8, x2: 8, y2: 24, delay: 0.4 },
      { x1: 24, y1: 8, x2: 40, y2: 24, delay: 0.5 },
      { x1: 8, y1: 24, x2: 24, y2: 40, delay: 0.6 },
      { x1: 40, y1: 24, x2: 24, y2: 40, delay: 0.7 },
    ].map((line, i) => (
      <motion.line
        key={i}
        x1={line.x1}
        y1={line.y1}
        x2={line.x2}
        y2={line.y2}
        stroke={color}
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
        transition={{ delay: line.delay, duration: 0.3 }}
      />
    ))}
  </svg>
);

// Developer APIs - Code brackets with code lines
export const DeveloperIcon = ({ color = '#3B82F6', inView }: { color?: string; inView: boolean }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    {/* Opening bracket */}
    <motion.path
      d="M18 10 L10 10 L10 38 L18 38"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
    {/* Closing bracket */}
    <motion.path
      d="M30 10 L38 10 L38 38 L30 38"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    />
    {/* Code lines */}
    {[
      { y: 18, width: 12, delay: 0.4 },
      { y: 24, width: 16, delay: 0.5 },
      { y: 30, width: 10, delay: 0.6 },
    ].map((line, i) => (
      <motion.line
        key={i}
        x1={18}
        y1={line.y}
        x2={18 + line.width}
        y2={line.y}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ delay: line.delay, duration: 0.3 }}
      />
    ))}
  </svg>
);

// Enterprise Integration - Building with data arrows
export const EnterpriseIcon = ({ color = '#10B981', inView }: { color?: string; inView: boolean }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    {/* Building */}
    <motion.rect
      x="14"
      y="18"
      width="20"
      height="22"
      stroke={color}
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
      transition={{ duration: 0.6 }}
    />
    {/* Windows */}
    {[
      { x: 18, y: 22 },
      { x: 26, y: 22 },
      { x: 18, y: 28 },
      { x: 26, y: 28 },
    ].map((window, i) => (
      <motion.rect
        key={i}
        x={window.x}
        y={window.y}
        width="4"
        height="4"
        fill={color}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6 + i * 0.1 }}
      />
    ))}
    {/* Data arrows */}
    <motion.path
      d="M 6 24 L 14 24 M 10 20 L 14 24 L 10 28"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ delay: 1, duration: 0.4 }}
    />
    <motion.path
      d="M 42 24 L 34 24 M 38 20 L 34 24 L 38 28"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.4 }}
    />
  </svg>
);

// Research & Innovation - Lightbulb with expanding waves
export const InnovationIcon = ({ color = '#8B5CF6', inView }: { color?: string; inView: boolean }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    {/* Bulb */}
    <motion.circle
      cx="24"
      cy="20"
      r="8"
      stroke={color}
      strokeWidth="2"
      fill="none"
      initial={{ scale: 0 }}
      animate={inView ? { scale: 1 } : { scale: 0 }}
      transition={{ duration: 0.4 }}
    />
    {/* Base */}
    <motion.rect
      x="20"
      y="28"
      width="8"
      height="6"
      stroke={color}
      strokeWidth="2"
      fill="none"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay: 0.3, duration: 0.3 }}
    />
    {/* Expanding waves */}
    {[
      { r: 12, delay: 0.5 },
      { r: 16, delay: 0.6 },
      { r: 20, delay: 0.7 },
    ].map((wave, i) => (
      <motion.circle
        key={i}
        cx="24"
        cy="20"
        r={wave.r}
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: [0, 0.6, 0] } : { scale: 0, opacity: 0 }}
        transition={{ delay: wave.delay, duration: 0.8 }}
      />
    ))}
  </svg>
);



