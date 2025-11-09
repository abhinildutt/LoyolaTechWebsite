interface LogoProps {
  className?: string;
  animate?: boolean;
}

const LoyolaLogo = ({ className = "w-12 h-12", animate = false }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="50%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#7B3FE4" />
        </linearGradient>
        {animate && (
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur="20s"
            repeatCount="indefinite"
          />
        )}
      </defs>
      
      {/* Outer ring - representing blockchain connectivity */}
      <circle
        cx="100"
        cy="100"
        r="90"
        stroke="url(#logoGradient)"
        strokeWidth="3"
        fill="none"
        opacity="0.3"
      />
      
      {/* Middle hexagon - representing blocks */}
      <path
        d="M 100 20 L 150 45 L 150 95 L 100 120 L 50 95 L 50 45 Z"
        stroke="url(#logoGradient)"
        strokeWidth="3"
        fill="url(#logoGradient)"
        fillOpacity="0.1"
      />
      
      {/* Inner L shape for Loyola */}
      <path
        d="M 70 60 L 70 110 L 110 110 L 110 95 L 85 95 L 85 60 Z"
        fill="url(#logoGradient)"
      />
      
      {/* Connection nodes */}
      <circle cx="100" cy="20" r="5" fill="#00D4FF">
        {animate && (
          <animate
            attributeName="r"
            values="5;7;5"
            dur="2s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <circle cx="150" cy="45" r="5" fill="#0066FF">
        {animate && (
          <animate
            attributeName="r"
            values="5;7;5"
            dur="2s"
            begin="0.3s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <circle cx="150" cy="95" r="5" fill="#7B3FE4">
        {animate && (
          <animate
            attributeName="r"
            values="5;7;5"
            dur="2s"
            begin="0.6s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <circle cx="100" cy="120" r="5" fill="#00D4FF">
        {animate && (
          <animate
            attributeName="r"
            values="5;7;5"
            dur="2s"
            begin="0.9s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <circle cx="50" cy="95" r="5" fill="#0066FF">
        {animate && (
          <animate
            attributeName="r"
            values="5;7;5"
            dur="2s"
            begin="1.2s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      <circle cx="50" cy="45" r="5" fill="#7B3FE4">
        {animate && (
          <animate
            attributeName="r"
            values="5;7;5"
            dur="2s"
            begin="1.5s"
            repeatCount="indefinite"
          />
        )}
      </circle>
      
      {/* Center tech symbol */}
      <circle cx="100" cy="85" r="8" fill="#00D4FF" opacity="0.8" />
      <path
        d="M 95 85 L 105 85 M 100 80 L 100 90"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LoyolaLogo;

