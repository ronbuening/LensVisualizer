interface Colors {
  bg: string;
  border: string;
  axis: string;
  lensFill: string;
  lensStroke: string;
  xpFill: string;
  xpStroke: string;
  sensor: string;
  sensorFill: string;
  microlens: string;
  pixelFill: string;
  rayAxial: string;
  rayChief: string;
  dim: string;
  label: string;
  labelXp: string;
  labelAxial: string;
  labelChief: string;
  muted: string;
  tick: string;
  arrDim: string;
  arrChief: string;
  arrAxial: string;
  craArc: string;
}

const DARK: Colors = {
  bg: "#12151e",
  border: "rgba(150,170,210,0.18)",
  axis: "rgba(150,170,210,0.32)",
  lensFill: "rgba(70,130,180,0.22)",
  lensStroke: "rgba(120,170,220,0.80)",
  xpFill: "rgba(217,140,255,0.10)",
  xpStroke: "#d98cff",
  sensor: "rgba(180,200,240,0.80)",
  sensorFill: "rgba(80,140,220,0.12)",
  microlens: "rgba(120,180,230,0.70)",
  pixelFill: "rgba(40,100,180,0.20)",
  rayAxial: "rgba(40,216,255,0.75)",
  rayChief: "rgba(255,200,60,0.80)",
  dim: "rgba(150,170,210,0.40)",
  label: "#c8d8f0",
  labelXp: "#d98cff",
  labelAxial: "#28d8ff",
  labelChief: "#ffc83c",
  muted: "rgba(150,170,200,0.65)",
  tick: "rgba(150,170,210,0.40)",
  arrDim: "rgba(150,170,210,0.60)",
  arrChief: "rgba(255,200,60,0.90)",
  arrAxial: "rgba(40,216,255,0.90)",
  craArc: "rgba(255,200,60,0.60)",
};

const LIGHT: Colors = {
  bg: "#eff2f8",
  border: "rgba(60,80,120,0.18)",
  axis: "rgba(60,80,120,0.30)",
  lensFill: "rgba(30,80,160,0.10)",
  lensStroke: "rgba(30,80,160,0.65)",
  xpFill: "rgba(120,46,184,0.07)",
  xpStroke: "#7a2eb8",
  sensor: "rgba(40,80,160,0.75)",
  sensorFill: "rgba(40,80,160,0.07)",
  microlens: "rgba(30,80,160,0.60)",
  pixelFill: "rgba(30,80,160,0.12)",
  rayAxial: "rgba(0,104,120,0.75)",
  rayChief: "rgba(160,100,0,0.80)",
  dim: "rgba(60,80,120,0.35)",
  label: "#1a2540",
  labelXp: "#7a2eb8",
  labelAxial: "#006878",
  labelChief: "#a06000",
  muted: "rgba(60,80,120,0.60)",
  tick: "rgba(60,80,120,0.35)",
  arrDim: "rgba(60,80,120,0.50)",
  arrChief: "rgba(160,100,0,0.90)",
  arrAxial: "rgba(0,104,120,0.90)",
  craArc: "rgba(160,100,0,0.60)",
};

const FONT = "'JetBrains Mono','SF Mono',monospace";

export default function ExitPupilDiagram({ isDark }: { isDark: boolean }) {
  const c = isDark ? DARK : LIGHT;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 220"
      width="100%"
      height="auto"
      role="img"
      aria-label="Exit pupil and chief ray angle diagram"
    >
      <defs>
        <marker id="xp-arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={c.arrDim} />
        </marker>
        <marker id="xp-arr-chief" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={c.arrChief} />
        </marker>
        <marker id="xp-arr-axial" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={c.arrAxial} />
        </marker>
      </defs>

      {/* Background */}
      <rect width="640" height="220" rx="6" fill={c.bg} />
      <rect width="640" height="220" rx="6" fill="none" stroke={c.border} strokeWidth={1} />

      {/* Optical axis */}
      <line x1="30" y1="110" x2="600" y2="110" stroke={c.axis} strokeWidth={1} strokeDasharray="5,4" />

      {/* Exit pupil */}
      <ellipse cx="120" cy="110" rx="14" ry="52" fill={c.xpFill} />
      <ellipse cx="120" cy="110" rx="14" ry="52" fill="none" stroke={c.xpStroke} strokeWidth={2} />
      <text x="120" y="18" textAnchor="middle" fill={c.labelXp} fontFamily={FONT} fontSize={11}>
        Exit pupil (XP)
      </text>
      <line x1="120" y1="21" x2="120" y2="56" stroke={c.tick} strokeWidth={1} strokeDasharray="3,2" />

      {/* Simplified rear lens group */}
      <path d="M 170,70 Q 155,110 170,150 L 188,150 Q 203,110 188,70 Z" fill={c.lensFill} />
      <path d="M 170,70 Q 155,110 170,150" fill="none" stroke={c.lensStroke} strokeWidth={1.5} />
      <path d="M 188,70 Q 203,110 188,150" fill="none" stroke={c.lensStroke} strokeWidth={1.5} />
      <line x1="170" y1="70" x2="188" y2="70" stroke={c.lensStroke} strokeWidth={1.5} />
      <line x1="170" y1="150" x2="188" y2="150" stroke={c.lensStroke} strokeWidth={1.5} />

      {/* Image sensor body */}
      <rect x="490" y="60" width="14" height="100" rx="2" fill={c.sensorFill} />
      <line x1="497" y1="60" x2="497" y2="160" stroke={c.sensor} strokeWidth={2.5} />

      {/* Pixels */}
      <rect x="488" y="104" width="14" height="12" fill={c.pixelFill} />
      <rect x="488" y="88" width="14" height="12" fill={c.pixelFill} />
      <rect x="488" y="124" width="14" height="12" fill={c.pixelFill} />
      <rect x="488" y="72" width="14" height="12" fill={c.pixelFill} />
      <rect x="488" y="144" width="14" height="12" fill={c.pixelFill} />

      {/* Microlenses */}
      <path d="M 490,104 Q 486,110 490,116" fill="none" stroke={c.microlens} strokeWidth={1.2} />
      <path d="M 490,88 Q 486,94 490,100" fill="none" stroke={c.microlens} strokeWidth={1.2} />
      <path d="M 490,124 Q 486,130 490,136" fill="none" stroke={c.microlens} strokeWidth={1.2} />
      <path d="M 490,72 Q 486,78 490,84" fill="none" stroke={c.microlens} strokeWidth={1.2} />
      <path d="M 490,144 Q 486,150 490,156" fill="none" stroke={c.microlens} strokeWidth={1.2} />
      <text x="502" y="57" textAnchor="start" fill={c.muted} fontFamily={FONT} fontSize={10}>
        sensor
      </text>

      {/* On-axis chief ray (CRA = 0°) */}
      <line x1="120" y1="110" x2="490" y2="110" stroke={c.rayAxial} strokeWidth={1.4} markerEnd="url(#xp-arr-axial)" />
      <text x="290" y="104" textAnchor="middle" fill={c.labelAxial} fontFamily={FONT} fontSize={10}>
        CRA = 0°
      </text>

      {/* Off-axis chief ray (CRA > 0°) */}
      <line x1="120" y1="110" x2="490" y2="78" stroke={c.rayChief} strokeWidth={1.4} markerEnd="url(#xp-arr-chief)" />

      {/* CRA angle arc at corner pixel */}
      <path d="M 490,78 L 470,78 A 20,20 0 0,1 473,66" fill="none" stroke={c.craArc} strokeWidth={1} />
      <text x="455" y="65" textAnchor="middle" fill={c.labelChief} fontFamily={FONT} fontSize={10}>
        CRA &gt; 0°
      </text>

      {/* d_XP dimension line */}
      <line x1="120" y1="170" x2="490" y2="170" stroke={c.dim} strokeWidth={1} markerEnd="url(#xp-arr)" />
      <line x1="490" y1="170" x2="120" y2="170" stroke={c.dim} strokeWidth={1} markerEnd="url(#xp-arr)" />
      <line x1="120" y1="165" x2="120" y2="175" stroke={c.tick} strokeWidth={1} />
      <line x1="490" y1="165" x2="490" y2="175" stroke={c.tick} strokeWidth={1} />
      <text x="305" y="184" textAnchor="middle" fill={c.labelXp} fontFamily={FONT} fontSize={11}>
        d&#x2093;&#x2097; (exit-pupil distance)
      </text>

      {/* y′ image height dimension */}
      <line x1="510" y1="110" x2="510" y2="78" stroke={c.dim} strokeWidth={1} />
      <line x1="506" y1="110" x2="514" y2="110" stroke={c.tick} strokeWidth={1} />
      <line x1="506" y1="78" x2="514" y2="78" stroke={c.tick} strokeWidth={1} />
      <text x="525" y="96" textAnchor="start" fill={c.label} fontFamily={FONT} fontSize={10}>
        y′
      </text>
      <text x="521" y="107" textAnchor="start" fill={c.muted} fontFamily={FONT} fontSize={10}>
        (image height)
      </text>

      {/* Legend */}
      <line x1="40" y1="200" x2="70" y2="200" stroke={c.rayAxial} strokeWidth={1.4} />
      <text x="75" y="204" fill={c.labelAxial} fontFamily={FONT} fontSize={10}>
        on-axis chief ray (CRA=0°)
      </text>
      <line x1="300" y1="200" x2="330" y2="200" stroke={c.rayChief} strokeWidth={1.4} />
      <text x="335" y="204" fill={c.labelChief} fontFamily={FONT} fontSize={10}>
        off-axis chief ray (CRA&gt;0°)
      </text>
    </svg>
  );
}
