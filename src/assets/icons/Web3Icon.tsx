interface IconProps {
  className?: string;
  color?: string;
}

const Web3Icon = ({ className = "w-16 h-16", color = "#7B3FE4" }: IconProps) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="web3Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7B3FE4" />
          <stop offset="50%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>
      </defs>
      
      {/* Globe wireframe */}
      <circle
        cx="100"
        cy="100"
        r="70"
        stroke="url(#web3Gradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      
      {/* Horizontal lines */}
      <ellipse cx="100" cy="100" rx="70" ry="20" stroke="url(#web3Gradient)" strokeWidth="1.5" fill="none" opacity="0.4" />
      <ellipse cx="100" cy="100" rx="70" ry="40" stroke="url(#web3Gradient)" strokeWidth="1.5" fill="none" opacity="0.4" />
      
      {/* Vertical lines */}
      <ellipse cx="100" cy="100" rx="20" ry="70" stroke="url(#web3Gradient)" strokeWidth="1.5" fill="none" opacity="0.4" />
      <ellipse cx="100" cy="100" rx="40" ry="70" stroke="url(#web3Gradient)" strokeWidth="1.5" fill="none" opacity="0.4" />
      
      {/* "3" in the center */}
      <text
        x="100"
        y="120"
        fontSize="60"
        fontWeight="bold"
        fill="url(#web3Gradient)"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
      >
        3
      </text>
      
      {/* Orbiting nodes representing decentralization */}
      <g>
        <circle cx="170" cy="100" r="6" fill="#00D4FF">
          <animate
            attributeName="r"
            values="6;8;6"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 100 100"
          to="360 100 100"
          dur="10s"
          repeatCount="indefinite"
        />
      </g>
      
      <g>
        <circle cx="170" cy="100" r="6" fill="#0066FF">
          <animate
            attributeName="r"
            values="6;8;6"
            dur="2s"
            begin="0.3s"
            repeatCount="indefinite"
          />
        </circle>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="120 100 100"
          to="480 100 100"
          dur="10s"
          repeatCount="indefinite"
        />
      </g>
      
      <g>
        <circle cx="170" cy="100" r="6" fill="#7B3FE4">
          <animate
            attributeName="r"
            values="6;8;6"
            dur="2s"
            begin="0.6s"
            repeatCount="indefinite"
          />
        </circle>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="240 100 100"
          to="600 100 100"
          dur="10s"
          repeatCount="indefinite"
        />
      </g>
      
      {/* Connection pulses */}
      <circle cx="100" cy="100" r="60" stroke="#00D4FF" strokeWidth="2" fill="none" opacity="0">
        <animate
          attributeName="r"
          values="60;75;60"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;0.5;0"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default Web3Icon;

