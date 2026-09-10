interface ScallopEdgeProps {
  color?: string;
  accentColor?: string;
  scallops?: number;
  height?: string;
  className?: string;
}

export default function ScallopEdge({
  color = "var(--color-surface-mid)",
  accentColor = "var(--color-primary-container)",
  scallops = 12,
  height = "56px",
  className = "",
}: ScallopEdgeProps) {
  const vw = 1440;
  const vh = 56;
  const sw = vw / scallops;
  const r = sw / 2;

  // Primary scallop path (larger, front)
  let d1 = `M0,${vh} `;
  for (let i = 0; i < scallops; i++) {
    const x2 = (i + 1) * sw;
    const cx = i * sw + sw / 2;
    d1 += `Q${cx},${vh - r * 0.85} ${x2},${vh} `;
  }
  d1 += `L${vw},0 L0,0 Z`;

  // Secondary scallop path (smaller, behind)
  let d2 = `M0,${vh} `;
  for (let i = 0; i < scallops; i++) {
    const x2 = (i + 1) * sw;
    const cx = i * sw + sw / 2;
    d2 += `Q${cx},${vh - r * 0.55} ${x2},${vh} `;
  }
  d2 += `L${vw},0 L0,0 Z`;

  // Intersection dots
  const dots = Array.from({ length: scallops + 1 }, (_, i) => i * sw);

  return (
    <div
      className={`absolute bottom-0 left-0 right-0 pointer-events-none ${className}`}
      aria-hidden="true"
      style={{ height }}
    >
      <svg
        viewBox={`0 0 ${vw} ${vh}`}
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        <defs>
          <linearGradient id="scallop-back" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.4" />
            <stop offset="100%" stopColor={accentColor} stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="scallop-front" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor={color} stopOpacity="0.85" />
          </linearGradient>
        </defs>
        {/* Back layer — subtle accent */}
        <path d={d2} fill="url(#scallop-back)" />
        {/* Front layer — solid */}
        <path d={d1} fill="url(#scallop-front)" />
        {/* Intersection dots — small refined detail */}
        {dots.map((x, i) => (
          <circle
            key={i}
            cx={x}
            cy={vh - r * 0.55}
            r={3}
            fill={accentColor}
            opacity="0.35"
          />
        ))}
      </svg>
    </div>
  );
}
