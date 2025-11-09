interface IconProps {
  className?: string;
  color?: string;
}

const HandshakeIcon = ({ className = "w-16 h-16", color = "#00D4FF" }: IconProps) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="handshakeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#7B3FE4" />
        </linearGradient>
      </defs>
      
      {/* Left hand */}
      <path
        d="M 30 100 L 30 80 L 40 70 L 50 70 L 60 80 L 70 90 L 80 95"
        stroke="url(#handshakeGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Left fingers */}
      <path
        d="M 40 70 L 45 60 M 50 70 L 55 58 M 60 80 L 65 68"
        stroke="url(#handshakeGradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      
      {/* Right hand */}
      <path
        d="M 170 100 L 170 80 L 160 70 L 150 70 L 140 80 L 130 90 L 120 95"
        stroke="url(#handshakeGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Right fingers */}
      <path
        d="M 160 70 L 155 60 M 150 70 L 145 58 M 140 80 L 135 68"
        stroke="url(#handshakeGradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      
      {/* Handshake connection */}
      <ellipse
        cx="100"
        cy="95"
        rx="25"
        ry="20"
        fill="url(#handshakeGradient)"
        opacity="0.3"
      />
      
      {/* Connection symbol */}
      <circle cx="100" cy="95" r="8" fill="url(#handshakeGradient)">
        <animate
          attributeName="r"
          values="8;12;8"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0.5;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      
      {/* Trust waves */}
      <circle cx="100" cy="95" r="15" stroke={color} strokeWidth="2" fill="none" opacity="0.4">
        <animate
          attributeName="r"
          values="15;25;15"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.4;0;0.4"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      
      <circle cx="100" cy="95" r="20" stroke={color} strokeWidth="2" fill="none" opacity="0.2">
        <animate
          attributeName="r"
          values="20;35;20"
          dur="3s"
          begin="0.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.2;0;0.2"
          dur="3s"
          begin="0.5s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default HandshakeIcon;

