interface IconProps {
  className?: string;
  color?: string;
}

const SecurityShieldIcon = ({ className = "w-16 h-16", color = "#00D4FF" }: IconProps) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#0066FF" />
        </linearGradient>
      </defs>
      
      {/* Shield outline */}
      <path
        d="M 100 20 L 160 50 L 160 100 Q 160 140 100 180 Q 40 140 40 100 L 40 50 Z"
        stroke="url(#securityGradient)"
        strokeWidth="4"
        fill="url(#securityGradient)"
        fillOpacity="0.2"
      >
        <animate
          attributeName="fill-opacity"
          values="0.2;0.3;0.2"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>
      
      {/* Inner shield layer */}
      <path
        d="M 100 35 L 145 55 L 145 100 Q 145 130 100 160 Q 55 130 55 100 L 55 55 Z"
        stroke="url(#securityGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      
      {/* Checkmark */}
      <path
        d="M 75 95 L 90 110 L 125 70"
        stroke="url(#securityGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <animate
          attributeName="stroke-dasharray"
          from="0 100"
          to="100 0"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
      
      {/* Security scan lines */}
      <g opacity="0.3">
        <line x1="60" y1="80" x2="140" y2="80" stroke={color} strokeWidth="1">
          <animate
            attributeName="y1"
            values="60;140;60"
            dur="4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y2"
            values="60;140;60"
            dur="4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="4s"
            repeatCount="indefinite"
          />
        </line>
      </g>
      
      {/* Corner security badges */}
      <circle cx="80" cy="60" r="4" fill="#00D4FF">
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="120" cy="60" r="4" fill="#0066FF">
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="2s"
          begin="0.5s"
          repeatCount="indefinite"
        />
      </circle>
      
      {/* Pulsing shield aura */}
      <path
        d="M 100 20 L 160 50 L 160 100 Q 160 140 100 180 Q 40 140 40 100 L 40 50 Z"
        stroke={color}
        strokeWidth="2"
        fill="none"
        opacity="0"
      >
        <animate
          attributeName="opacity"
          values="0;0.3;0"
          dur="2s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1;1.1;1"
          additive="sum"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default SecurityShieldIcon;

