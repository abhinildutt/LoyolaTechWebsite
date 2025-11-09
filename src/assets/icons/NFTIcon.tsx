interface IconProps {
  className?: string;
  color?: string;
}

const NFTIcon = ({ className = "w-16 h-16", color = "#A855F7" }: IconProps) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="nftGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      
      {/* Frame */}
      <rect
        x="30"
        y="30"
        width="140"
        height="140"
        rx="10"
        stroke="url(#nftGradient)"
        strokeWidth="4"
        fill="none"
      >
        <animate
          attributeName="stroke-opacity"
          values="1;0.5;1"
          dur="3s"
          repeatCount="indefinite"
        />
      </rect>
      
      {/* Inner frame glow */}
      <rect
        x="35"
        y="35"
        width="130"
        height="130"
        rx="8"
        stroke="url(#nftGradient)"
        strokeWidth="1"
        fill="url(#nftGradient)"
        fillOpacity="0.1"
      />
      
      {/* NFT Art - Abstract geometric shapes */}
      <polygon
        points="100,60 130,90 115,120 85,120 70,90"
        fill="url(#nftGradient)"
        opacity="0.7"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 100 100"
          to="360 100 100"
          dur="20s"
          repeatCount="indefinite"
        />
      </polygon>
      
      {/* Digital particles */}
      <circle cx="60" cy="60" r="4" fill="#A855F7">
        <animate
          attributeName="cy"
          values="60;80;60"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      
      <circle cx="140" cy="140" r="4" fill="#EC4899">
        <animate
          attributeName="cy"
          values="140;120;140"
          dur="3s"
          begin="0.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="3s"
          begin="0.5s"
          repeatCount="indefinite"
        />
      </circle>
      
      <circle cx="140" cy="60" r="4" fill="#F59E0B">
        <animate
          attributeName="cx"
          values="140;120;140"
          dur="3s"
          begin="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="3s"
          begin="1s"
          repeatCount="indefinite"
        />
      </circle>
      
      {/* Authenticity badge */}
      <circle cx="150" cy="50" r="12" fill="url(#nftGradient)" opacity="0.8" />
      <path
        d="M 145 50 L 148 53 L 155 46"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Blockchain verification lines */}
      <g opacity="0.3">
        <line x1="40" y1="160" x2="60" y2="160" stroke={color} strokeWidth="2" />
        <line x1="65" y1="160" x2="85" y2="160" stroke={color} strokeWidth="2" />
        <line x1="90" y1="160" x2="110" y2="160" stroke={color} strokeWidth="2" />
      </g>
    </svg>
  );
};

export default NFTIcon;

