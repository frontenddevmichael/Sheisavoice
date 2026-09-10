"use client";

export default function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SHEISAVOICE logo"
    >
      {/* Woman's face profile silhouette */}
      <path
        d="M20 10 C20 10 14 18 14 28 C14 38 20 48 28 48 C32 48 36 44 36 40 C36 36 32 34 30 34 C28 34 28 36 28 38"
        stroke="#3e005e"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Soundwave arcs radiating from voice — animated draw-in */}
      <g className="logo-arcs">
        <path
          d="M40 24 C44 18 44 36 40 30"
          stroke="#ff6b6b"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="30"
          strokeDashoffset="30"
          className="logo-arc-1"
        />
        <path
          d="M46 18 C54 10 54 44 46 36"
          stroke="#ff6b6b"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
          strokeDasharray="40"
          strokeDashoffset="40"
          className="logo-arc-2"
        />
        <path
          d="M52 12 C64 2 64 52 52 42"
          stroke="#ff6b6b"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
          strokeDasharray="50"
          strokeDashoffset="50"
          className="logo-arc-3"
        />
      </g>
      {/* Supporting hand arc beneath */}
      <path
        d="M16 48 C24 56 44 56 52 48"
        stroke="#feba45"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Radiant star above */}
      <path
        d="M36 4 L38 8 L42 8 L39 11 L40 15 L36 12 L32 15 L33 11 L30 8 L34 8 Z"
        fill="#feba45"
      />
      {/* SHEISAVOICE text */}
      <text
        x="72"
        y="28"
        fontFamily="Epilogue, sans-serif"
        fontWeight="800"
        fontSize="22"
        fill="#3e005e"
        letterSpacing="-0.02em"
      >
        SHEISAVOICE
      </text>
      {/* Subtext */}
      <text
        x="72"
        y="44"
        fontFamily="Manrope, sans-serif"
        fontWeight="600"
        fontSize="9"
        fill="#ff6b6b"
        letterSpacing="0.08em"
      >
        GLOBAL CHILDREN ADVOCACY
      </text>
      <text
        x="72"
        y="56"
        fontFamily="Manrope, sans-serif"
        fontWeight="500"
        fontSize="8"
        fill="#3e005e"
        opacity="0.6"
        letterSpacing="0.05em"
      >
        FOUNDATION - NIGERIA &amp; AFRICA
      </text>
    </svg>
  );
}
