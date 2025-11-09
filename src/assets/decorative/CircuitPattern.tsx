interface CircuitPatternProps {
  className?: string;
  color?: string;
  opacity?: number;
}

const CircuitPattern = ({ 
  className = "w-full h-full", 
  color = "#00D4FF",
  opacity = 0.3 
}: CircuitPatternProps) => {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      <defs>
        <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#7B3FE4" />
        </linearGradient>
      </defs>
      
      {/* Horizontal lines */}
      <line x1="0" y1="100" x2="400" y2="100" stroke="url(#circuitGradient)" strokeWidth="1" />
      <line x1="0" y1="200" x2="400" y2="200" stroke="url(#circuitGradient)" strokeWidth="1" />
      <line x1="0" y1="300" x2="400" y2="300" stroke="url(#circuitGradient)" strokeWidth="1" />
      
      {/* Vertical lines */}
      <line x1="100" y1="0" x2="100" y2="400" stroke="url(#circuitGradient)" strokeWidth="1" />
      <line x1="200" y1="0" x2="200" y2="400" stroke="url(#circuitGradient)" strokeWidth="1" />
      <line x1="300" y1="0" x2="300" y2="400" stroke="url(#circuitGradient)" strokeWidth="1" />
      
      {/* Circuit nodes */}
      <circle cx="100" cy="100" r="4" fill={color}>
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="200" cy="100" r="4" fill={color}>
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="3s"
          begin="0.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="300" cy="100" r="4" fill={color}>
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="3s"
          begin="1s"
          repeatCount="indefinite"
        />
      </circle>
      
      <circle cx="100" cy="200" r="4" fill="#0066FF">
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="3s"
          begin="0.3s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="200" cy="200" r="4" fill="#0066FF">
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="3s"
          begin="0.8s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="300" cy="200" r="4" fill="#0066FF">
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="3s"
          begin="1.3s"
          repeatCount="indefinite"
        />
      </circle>
      
      <circle cx="100" cy="300" r="4" fill="#7B3FE4">
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="3s"
          begin="0.6s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="200" cy="300" r="4" fill="#7B3FE4">
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="3s"
          begin="1.1s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="300" cy="300" r="4" fill="#7B3FE4">
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="3s"
          begin="1.6s"
          repeatCount="indefinite"
        />
      </circle>
      
      {/* Data flow indicators */}
      <circle r="3" fill={color}>
        <animateMotion
          path="M 0,100 L 400,100"
          dur="4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
      
      <circle r="3" fill="#0066FF">
        <animateMotion
          path="M 200,0 L 200,400"
          dur="4s"
          begin="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          dur="4s"
          begin="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default CircuitPattern;

