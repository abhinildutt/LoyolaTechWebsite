interface HexagonGridProps {
  className?: string;
  color?: string;
  opacity?: number;
}

const HexagonGrid = ({ 
  className = "w-full h-full", 
  color = "#00D4FF",
  opacity = 0.2 
}: HexagonGridProps) => {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      <defs>
        <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#7B3FE4" />
        </linearGradient>
      </defs>
      
      {/* Create a pattern of hexagons */}
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3].map((col) => {
          const x = 50 + col * 120 + (row % 2) * 60;
          const y = 50 + row * 104;
          const hexPath = `
            M ${x},${y - 30}
            L ${x + 26},${y - 15}
            L ${x + 26},${y + 15}
            L ${x},${y + 30}
            L ${x - 26},${y + 15}
            L ${x - 26},${y - 15}
            Z
          `;
          
          return (
            <g key={`hex-${row}-${col}`}>
              <path
                d={hexPath}
                stroke="url(#hexGradient)"
                strokeWidth="1.5"
                fill="none"
              >
                <animate
                  attributeName="stroke-opacity"
                  values="0.2;0.6;0.2"
                  dur={`${3 + (row + col) * 0.2}s`}
                  repeatCount="indefinite"
                />
              </path>
              <circle
                cx={x}
                cy={y}
                r="3"
                fill="url(#hexGradient)"
              >
                <animate
                  attributeName="r"
                  values="3;5;3"
                  dur={`${2 + (row + col) * 0.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.3;1;0.3"
                  dur={`${2 + (row + col) * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })
      )}
    </svg>
  );
};

export default HexagonGrid;

