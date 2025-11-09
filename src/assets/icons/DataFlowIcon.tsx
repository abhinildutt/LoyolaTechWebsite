interface IconProps {
  className?: string;
  color?: string;
}

const DataFlowIcon = ({ className = "w-16 h-16", color = "#7B3FE4" }: IconProps) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>
      </defs>
      
      {/* Central server/database */}
      <rect
        x="75"
        y="75"
        width="50"
        height="50"
        rx="8"
        stroke="url(#dataGradient)"
        strokeWidth="3"
        fill="url(#dataGradient)"
        fillOpacity="0.2"
      >
        <animate
          attributeName="fill-opacity"
          values="0.2;0.4;0.2"
          dur="2s"
          repeatCount="indefinite"
        />
      </rect>
      
      {/* Data bars inside server */}
      <line x1="85" y1="90" x2="115" y2="90" stroke={color} strokeWidth="2" opacity="0.6" />
      <line x1="85" y1="100" x2="115" y2="100" stroke={color} strokeWidth="2" opacity="0.6" />
      <line x1="85" y1="110" x2="115" y2="110" stroke={color} strokeWidth="2" opacity="0.6" />
      
      {/* Orbiting data nodes */}
      <g>
        <circle cx="100" cy="30" r="8" fill="url(#dataGradient)">
          <animate
            attributeName="r"
            values="8;10;8"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 100 100"
          to="360 100 100"
          dur="8s"
          repeatCount="indefinite"
        />
      </g>
      
      <g>
        <circle cx="170" cy="100" r="8" fill="url(#dataGradient)">
          <animate
            attributeName="r"
            values="8;10;8"
            dur="2s"
            begin="0.5s"
            repeatCount="indefinite"
          />
        </circle>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 100 100"
          to="360 100 100"
          dur="8s"
          repeatCount="indefinite"
        />
      </g>
      
      <g>
        <circle cx="100" cy="170" r="8" fill="url(#dataGradient)">
          <animate
            attributeName="r"
            values="8;10;8"
            dur="2s"
            begin="1s"
            repeatCount="indefinite"
          />
        </circle>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 100 100"
          to="360 100 100"
          dur="8s"
          repeatCount="indefinite"
        />
      </g>
      
      <g>
        <circle cx="30" cy="100" r="8" fill="url(#dataGradient)">
          <animate
            attributeName="r"
            values="8;10;8"
            dur="2s"
            begin="1.5s"
            repeatCount="indefinite"
          />
        </circle>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 100 100"
          to="360 100 100"
          dur="8s"
          repeatCount="indefinite"
        />
      </g>
      
      {/* Data flow particles */}
      <circle r="3" fill="#00D4FF">
        <animateMotion
          path="M 100,100 Q 100,50 100,30"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      
      <circle r="3" fill="#7B3FE4">
        <animateMotion
          path="M 100,100 Q 150,100 170,100"
          dur="2s"
          begin="0.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="2s"
          begin="0.5s"
          repeatCount="indefinite"
        />
      </circle>
      
      <circle r="3" fill="#00D4FF">
        <animateMotion
          path="M 100,100 Q 100,150 100,170"
          dur="2s"
          begin="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="2s"
          begin="1s"
          repeatCount="indefinite"
        />
      </circle>
      
      <circle r="3" fill="#7B3FE4">
        <animateMotion
          path="M 100,100 Q 50,100 30,100"
          dur="2s"
          begin="1.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="2s"
          begin="1.5s"
          repeatCount="indefinite"
        />
      </circle>
      
      {/* Connection lines */}
      <line x1="100" y1="75" x2="100" y2="30" stroke={color} strokeWidth="1" opacity="0.2" strokeDasharray="5,5">
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="10"
          dur="1s"
          repeatCount="indefinite"
        />
      </line>
      <line x1="125" y1="100" x2="170" y2="100" stroke={color} strokeWidth="1" opacity="0.2" strokeDasharray="5,5">
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="10"
          dur="1s"
          repeatCount="indefinite"
        />
      </line>
      <line x1="100" y1="125" x2="100" y2="170" stroke={color} strokeWidth="1" opacity="0.2" strokeDasharray="5,5">
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="10"
          dur="1s"
          repeatCount="indefinite"
        />
      </line>
      <line x1="75" y1="100" x2="30" y2="100" stroke={color} strokeWidth="1" opacity="0.2" strokeDasharray="5,5">
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="10"
          dur="1s"
          repeatCount="indefinite"
        />
      </line>
    </svg>
  );
};

export default DataFlowIcon;

