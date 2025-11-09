interface IconProps {
  className?: string;
  color?: string;
}

const LinkChainIcon = ({ className = "w-16 h-16", color = "#0066FF" }: IconProps) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="linkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>
      </defs>
      
      {/* Left chain link */}
      <rect
        x="30"
        y="70"
        width="50"
        height="60"
        rx="25"
        stroke="url(#linkGradient)"
        strokeWidth="8"
        fill="none"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 55 100"
          to="5 55 100"
          dur="2s"
          repeatCount="indefinite"
          values="0 55 100; 5 55 100; 0 55 100; -5 55 100; 0 55 100"
        />
      </rect>
      
      {/* Right chain link */}
      <rect
        x="120"
        y="70"
        width="50"
        height="60"
        rx="25"
        stroke="url(#linkGradient)"
        strokeWidth="8"
        fill="none"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 145 100"
          to="-5 145 100"
          dur="2s"
          repeatCount="indefinite"
          values="0 145 100; -5 145 100; 0 145 100; 5 145 100; 0 145 100"
        />
      </rect>
      
      {/* Middle connecting link */}
      <rect
        x="75"
        y="80"
        width="50"
        height="40"
        rx="20"
        stroke="url(#linkGradient)"
        strokeWidth="8"
        fill="url(#linkGradient)"
        fillOpacity="0.2"
      />
      
      {/* Connection nodes */}
      <circle cx="80" cy="100" r="6" fill="#00D4FF">
        <animate
          attributeName="opacity"
          values="1;0.5;1"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="120" cy="100" r="6" fill="#0066FF">
        <animate
          attributeName="opacity"
          values="1;0.5;1"
          dur="1.5s"
          begin="0.5s"
          repeatCount="indefinite"
        />
      </circle>
      
      {/* Data flow particles */}
      <circle cx="85" cy="100" r="3" fill="#00D4FF">
        <animate
          attributeName="cx"
          from="85"
          to="115"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      
      <circle cx="115" cy="100" r="3" fill="#0066FF">
        <animate
          attributeName="cx"
          from="115"
          to="85"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default LinkChainIcon;

