interface IconProps {
  className?: string;
  color?: string;
}

const BlockchainIcon = ({ className = "w-16 h-16", color = "#00D4FF" }: IconProps) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="blockchainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#7B3FE4" />
        </linearGradient>
      </defs>
      
      {/* Block 1 */}
      <g>
        <rect
          x="20"
          y="40"
          width="40"
          height="40"
          rx="5"
          stroke="url(#blockchainGradient)"
          strokeWidth="3"
          fill="url(#blockchainGradient)"
          fillOpacity="0.2"
        >
          <animate
            attributeName="fill-opacity"
            values="0.2;0.4;0.2"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>
        <circle cx="40" cy="60" r="4" fill={color} />
      </g>
      
      {/* Block 2 */}
      <g>
        <rect
          x="80"
          y="80"
          width="40"
          height="40"
          rx="5"
          stroke="url(#blockchainGradient)"
          strokeWidth="3"
          fill="url(#blockchainGradient)"
          fillOpacity="0.2"
        >
          <animate
            attributeName="fill-opacity"
            values="0.2;0.4;0.2"
            dur="2s"
            begin="0.3s"
            repeatCount="indefinite"
          />
        </rect>
        <circle cx="100" cy="100" r="4" fill={color} />
      </g>
      
      {/* Block 3 */}
      <g>
        <rect
          x="140"
          y="40"
          width="40"
          height="40"
          rx="5"
          stroke="url(#blockchainGradient)"
          strokeWidth="3"
          fill="url(#blockchainGradient)"
          fillOpacity="0.2"
        >
          <animate
            attributeName="fill-opacity"
            values="0.2;0.4;0.2"
            dur="2s"
            begin="0.6s"
            repeatCount="indefinite"
          />
        </rect>
        <circle cx="160" cy="60" r="4" fill={color} />
      </g>
      
      {/* Block 4 */}
      <g>
        <rect
          x="80"
          y="120"
          width="40"
          height="40"
          rx="5"
          stroke="url(#blockchainGradient)"
          strokeWidth="3"
          fill="url(#blockchainGradient)"
          fillOpacity="0.2"
        >
          <animate
            attributeName="fill-opacity"
            values="0.2;0.4;0.2"
            dur="2s"
            begin="0.9s"
            repeatCount="indefinite"
          />
        </rect>
        <circle cx="100" cy="140" r="4" fill={color} />
      </g>
      
      {/* Connecting lines */}
      <line x1="60" y1="60" x2="80" y2="100" stroke={color} strokeWidth="2" strokeDasharray="5,5">
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="10"
          dur="1s"
          repeatCount="indefinite"
        />
      </line>
      
      <line x1="120" y1="100" x2="140" y2="60" stroke={color} strokeWidth="2" strokeDasharray="5,5">
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="10"
          dur="1s"
          repeatCount="indefinite"
        />
      </line>
      
      <line x1="100" y1="120" x2="100" y2="120" stroke={color} strokeWidth="2" strokeDasharray="5,5">
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="10"
          dur="1s"
          repeatCount="indefinite"
        />
      </line>
      
      <line x1="40" y1="80" x2="80" y2="100" stroke={color} strokeWidth="2" strokeDasharray="5,5">
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="10"
          dur="1s"
          repeatCount="indefinite"
        />
      </line>
      
      <line x1="120" y1="100" x2="100" y2="120" stroke={color} strokeWidth="2" strokeDasharray="5,5">
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="10"
          dur="1s"
          repeatCount="indefinite"
        />
      </line>
      
      {/* Central connection hub */}
      <circle cx="100" cy="100" r="8" fill={color} opacity="0.5">
        <animate
          attributeName="r"
          values="8;12;8"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default BlockchainIcon;

