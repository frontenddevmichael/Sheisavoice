interface PatternProps {
  color?: string;
  opacity?: number;
  className?: string;
}

export function AdireCircles({ color = "currentColor", opacity = 0.08, className }: PatternProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      width="100%"
      height="100%"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity={opacity} fill="none" stroke={color} strokeWidth="1.5">
        {/* Cluster 1 — top-left */}
        <circle cx="40" cy="35" r="12" />
        <circle cx="40" cy="35" r="22" />
        <circle cx="40" cy="35" r="30" />
        <circle cx="40" cy="35" r="38" />
        <circle cx="40" cy="35" r="46" />

        {/* Cluster 2 — center-right */}
        <circle cx="140" cy="90" r="10" />
        <circle cx="140" cy="90" r="18" />
        <circle cx="140" cy="90" r="26" />
        <circle cx="140" cy="90" r="34" />

        {/* Cluster 3 — bottom */}
        <circle cx="90" cy="160" r="14" />
        <circle cx="90" cy="160" r="24" />
        <circle cx="90" cy="160" r="32" />
        <circle cx="90" cy="160" r="40" />
        <circle cx="90" cy="160" r="48" />
      </g>
    </svg>
  );
}

export function KenteZigzag({ color = "currentColor", opacity = 0.08, className }: PatternProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 100"
      width="100%"
      height="100%"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity={opacity} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Row 1 */}
        <polyline points="0,15 15,5 30,15 45,5 60,15 75,5 90,15 105,5 120,15 135,5 150,15 165,5 180,15 195,5 200,10" />
        {/* Row 2 */}
        <polyline points="0,35 15,25 30,35 45,25 60,35 75,25 90,35 105,25 120,35 135,25 150,35 165,25 180,35 195,25 200,30" />
        {/* Row 3 */}
        <polyline points="0,55 15,45 30,55 45,45 60,55 75,45 90,55 105,45 120,55 135,45 150,55 165,45 180,55 195,45 200,50" />
        {/* Row 4 */}
        <polyline points="0,75 15,65 30,75 45,65 60,75 75,65 90,75 105,65 120,75 135,65 150,75 165,65 180,75 195,65 200,70" />
        {/* Row 5 */}
        <polyline points="0,95 15,85 30,95 45,85 60,95 75,85 90,95 105,85 120,95 135,85 150,95 165,85 180,95 195,85 200,90" />
      </g>
    </svg>
  );
}

export function AnkaraDiamonds({ color = "currentColor", opacity = 0.08, className }: PatternProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      width="100%"
      height="100%"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity={opacity} fill="none" stroke={color} strokeWidth="1.5">
        {/* Row 1 */}
        <path d="M20,30 L40,10 L60,30 L40,50 Z" />
        <path d="M70,30 L90,10 L110,30 L90,50 Z" />
        <path d="M120,30 L140,10 L160,30 L140,50 Z" />
        <path d="M170,30 L190,10 L200,20 L200,40 L190,50 L170,30 Z" />

        {/* Row 2 */}
        <path d="M-10,80 L10,60 L30,80 L10,100 Z" />
        <path d="M40,80 L60,60 L80,80 L60,100 Z" />
        <path d="M90,80 L110,60 L130,80 L110,100 Z" />
        <path d="M140,80 L160,60 L180,80 L160,100 Z" />
        <path d="M190,80 L200,70 L200,90 L190,100 Z" />

        {/* Row 3 */}
        <path d="M20,130 L40,110 L60,130 L40,150 Z" />
        <path d="M70,130 L90,110 L110,130 L90,150 Z" />
        <path d="M120,130 L140,110 L160,130 L140,150 Z" />
        <path d="M170,130 L190,110 L200,120 L200,140 L190,150 L170,130 Z" />

        {/* Row 4 */}
        <path d="M-10,180 L10,160 L30,180 L10,200 Z" />
        <path d="M40,180 L60,160 L80,180 L60,200 Z" />
        <path d="M90,180 L110,160 L130,180 L110,200 Z" />
        <path d="M140,180 L160,160 L180,180 L160,200 Z" />
        <path d="M190,180 L200,170 L200,190 L190,200 Z" />
      </g>

      {/* Dots at diamond intersections */}
      <g opacity={opacity} fill={color} stroke="none">
        <circle cx="40" cy="50" r="2" />
        <circle cx="90" cy="50" r="2" />
        <circle cx="140" cy="50" r="2" />
        <circle cx="10" cy="100" r="2" />
        <circle cx="60" cy="100" r="2" />
        <circle cx="110" cy="100" r="2" />
        <circle cx="160" cy="100" r="2" />
        <circle cx="40" cy="150" r="2" />
        <circle cx="90" cy="150" r="2" />
        <circle cx="140" cy="150" r="2" />
      </g>
    </svg>
  );
}

export function LeafFlow({ color = "currentColor", opacity = 0.08, className }: PatternProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      width="100%"
      height="100%"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity={opacity} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round">
        {/* Main stem — sweeping S-curve */}
        <path d="M30,190 C50,160 40,120 70,90 C100,60 90,30 120,10" />

        {/* Leaves branching from stem */}
        {/* Leaf 1 — lower left */}
        <path d="M45,155 C30,140 20,145 15,130 C20,135 35,130 45,155" fill={color} fillOpacity={0.15} />
        {/* Leaf 2 — lower right */}
        <path d="M55,135 C70,120 80,125 85,110 C75,118 65,115 55,135" fill={color} fillOpacity={0.15} />
        {/* Leaf 3 — mid left */}
        <path d="M60,105 C45,90 35,95 30,80 C40,88 50,85 60,105" fill={color} fillOpacity={0.15} />
        {/* Leaf 4 — mid right */}
        <path d="M75,85 C90,70 100,75 105,60 C95,68 85,65 75,85" fill={color} fillOpacity={0.15} />
        {/* Leaf 5 — upper left */}
        <path d="M85,65 C70,50 60,55 55,40 C65,48 75,45 85,65" fill={color} fillOpacity={0.15} />
        {/* Leaf 6 — upper right */}
        <path d="M100,45 C115,30 125,35 130,20 C120,28 110,25 100,45" fill={color} fillOpacity={0.15} />

        {/* Secondary vine */}
        <path d="M150,195 C160,160 145,130 170,100 C190,75 175,45 190,20" />

        {/* Leaves on secondary vine */}
        <path d="M155,160 C140,145 130,150 125,135 C135,143 145,140 155,160" fill={color} fillOpacity={0.15} />
        <path d="M160,130 C175,115 185,120 190,105 C180,113 170,110 160,130" fill={color} fillOpacity={0.15} />
        <path d="M168,105 C153,90 143,95 138,80 C148,88 158,85 168,105" fill={color} fillOpacity={0.15} />
        <path d="M175,80 C190,65 200,70 200,55 C195,63 185,60 175,80" fill={color} fillOpacity={0.15} />
      </g>
    </svg>
  );
}
