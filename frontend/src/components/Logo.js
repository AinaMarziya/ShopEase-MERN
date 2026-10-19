import React from 'react';

const Logo = ({ w = 170, h = 60 }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 300 90"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shopping cart icon */}
      <g transform="translate(5, 10)" fill="#292929">
        <path d="M3 5 H15 L25 45 H65 L78 15 H20" 
          fill="none"
          stroke="#292929"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="55" r="5" />
        <circle cx="61" cy="55" r="5" />
      </g>

      {/* Brand name */}
      <text
        x="95"
        y="43"
        fontFamily="Arial, sans-serif"
        fontSize="34"
        fontWeight="bold"
        fill="#292929"
      >
        ShopEase
      </text>

      {/* Tagline */}
      <text
        x="97"
        y="65"
        fontFamily="Arial, sans-serif"
        fontSize="13"
        fill="#555555"
      >
        Shopping made easy
      </text>
    </svg>
  );
};

export default Logo;