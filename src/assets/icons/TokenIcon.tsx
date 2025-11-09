interface IconProps {
  className?: string;
  color?: string;
}

const TokenIcon = ({ className = "w-16 h-16", color = "#0066FF" }: IconProps) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="tokenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        <radialGradient id="coinShine">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0.2" />
        </radialGradient>
      </defs>
      
      {/* Outer coin circle */}
      <circle
        cx="100"
        cy="100"
        r="70"
        stroke="url(#tokenGradient)"
        strokeWidth="6"
        fill="url(#coinShine)"
      >
        <animate
          attributeName="stroke-opacity"
          values="1;0.6;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      
      {/* Inner decorative circle */}
      <circle
        cx="100"
        cy="100"
        r="60"
        stroke="url(#tokenGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      
      {/* Token symbol - stylized L */}
      <path
        d="M 80 60 L 80 110 L 120 110 L 120 100 L 90 100 L 90 60 Z"
        fill="url(#tokenGradient)"
        opacity="0.9"
      />
      
      {/* Sparkle effects */}
      <g opacity="0.8">
        <circle cx="130" cy="70" r="3" fill="#FFD700">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="70" cy="130" r="3" fill="#FFD700">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="2s"
            begin="0.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="130" cy="130" r="3" fill="#00D4FF">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="2s"
            begin="1s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="70" cy="70" r="3" fill="#00D4FF">
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="2s"
            begin="1.5s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      
      {/* Rotating ring effect */}
      <circle
        cx="100"
        cy="100"
        r="80"
        stroke="url(#tokenGradient)"
        strokeWidth="2"
        strokeDasharray="20 10"
        fill="none"
        opacity="0.3"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 100 100"
          to="360 100 100"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default TokenIcon;

