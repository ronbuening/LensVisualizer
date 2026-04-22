interface Colors {
  bg: string;
  border: string;
  panelDiv: string;
  plane: string;
  planeLabel: string;
  lensFill: string;
  lensStroke: string;
  ray: string;
  rayParallel: string;
  axis: string;
  label: string;
  sublabel: string;
  infLabel: string;
  stop: string;
  interLens: string;
  arrY: string;
  arrB: string;
  legendChief: string;
}

const DARK: Colors = {
  bg: "#12151e",
  border: "rgba(150,170,210,0.18)",
  panelDiv: "rgba(150,170,210,0.18)",
  plane: "rgba(150,170,210,0.45)",
  planeLabel: "rgba(150,170,200,0.65)",
  lensFill: "rgba(70,130,180,0.22)",
  lensStroke: "rgba(120,170,220,0.80)",
  ray: "rgba(255,200,60,0.75)",
  rayParallel: "rgba(40,216,255,0.75)",
  axis: "rgba(150,170,210,0.25)",
  label: "#c8d8f0",
  sublabel: "rgba(150,170,200,0.75)",
  infLabel: "rgba(40,216,255,0.85)",
  stop: "rgba(255,140,32,0.85)",
  interLens: "rgba(200,180,100,0.55)",
  arrY: "rgba(255,200,60,0.90)",
  arrB: "rgba(40,216,255,0.90)",
  legendChief: "rgba(255,200,60,0.80)",
};

const LIGHT: Colors = {
  bg: "#eff2f8",
  border: "rgba(60,80,120,0.18)",
  panelDiv: "rgba(60,80,120,0.18)",
  plane: "rgba(60,80,120,0.45)",
  planeLabel: "rgba(60,80,120,0.60)",
  lensFill: "rgba(30,80,160,0.10)",
  lensStroke: "rgba(30,80,160,0.65)",
  ray: "rgba(160,100,0,0.75)",
  rayParallel: "rgba(0,104,120,0.75)",
  axis: "rgba(60,80,120,0.22)",
  label: "#1a2540",
  sublabel: "rgba(60,80,120,0.70)",
  infLabel: "rgba(0,104,120,0.85)",
  stop: "rgba(180,80,0,0.85)",
  interLens: "rgba(120,100,30,0.50)",
  arrY: "rgba(160,100,0,0.90)",
  arrB: "rgba(0,104,120,0.90)",
  legendChief: "rgba(160,100,0,0.80)",
};

const FONT = "'JetBrains Mono','SF Mono',monospace";

function Lens({ x, y1, y2, c }: { x: number; y1: number; y2: number; c: Colors }) {
  const mx = x + 14;
  const cy = (y1 + y2) / 2;
  return (
    <>
      <path
        d={`M ${x},${y1} Q ${x - 13},${cy} ${x},${y2} L ${mx},${y2} Q ${mx + 13},${cy} ${mx},${y1} Z`}
        fill={c.lensFill}
      />
      <path d={`M ${x},${y1} Q ${x - 13},${cy} ${x},${y2}`} fill="none" stroke={c.lensStroke} strokeWidth={1.5} />
      <path d={`M ${mx},${y1} Q ${mx + 13},${cy} ${mx},${y2}`} fill="none" stroke={c.lensStroke} strokeWidth={1.5} />
      <line x1={x} y1={y1} x2={mx} y2={y1} stroke={c.lensStroke} strokeWidth={1.5} />
      <line x1={x} y1={y2} x2={mx} y2={y2} stroke={c.lensStroke} strokeWidth={1.5} />
    </>
  );
}

export default function TelecentricityDiagram({ isDark }: { isDark: boolean }) {
  const c = isDark ? DARK : LIGHT;

  const ray = { stroke: c.ray, strokeWidth: 1.3, fill: "none" } as const;
  const rayP = { stroke: c.rayParallel, strokeWidth: 1.3, fill: "none" } as const;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 230"
      width="100%"
      height="auto"
      role="img"
      aria-label="Three forms of telecentricity diagram"
    >
      <defs>
        <marker id="tc-arrY" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill={c.arrY} />
        </marker>
        <marker id="tc-arrB" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill={c.arrB} />
        </marker>
      </defs>

      {/* Background */}
      <rect width="640" height="230" rx="6" fill={c.bg} />
      <rect width="640" height="230" rx="6" fill="none" stroke={c.border} strokeWidth={1} />

      {/* Panel dividers */}
      <line x1="213" y1="30" x2="213" y2="210" stroke={c.panelDiv} strokeWidth={1} />
      <line x1="427" y1="30" x2="427" y2="210" stroke={c.panelDiv} strokeWidth={1} />

      {/* ── PANEL 1: Object-space telecentric ── */}
      <text x="106" y="20" textAnchor="middle" fill={c.label} fontFamily={FONT} fontSize={11} fontWeight={600}>
        Object-space
      </text>
      <text x="106" y="33" textAnchor="middle" fill={c.sublabel} fontFamily={FONT} fontSize={9.5}>
        telecentric
      </text>

      <line x1="18" y1="120" x2="205" y2="120" stroke={c.axis} strokeWidth={1} strokeDasharray="4,4" />

      <line x1="30" y1="80" x2="30" y2="160" stroke={c.plane} strokeWidth={1.5} strokeLinecap="round" />
      <text x="30" y="172" textAnchor="middle" fill={c.planeLabel} fontFamily={FONT} fontSize={9}>
        object
      </text>

      <Lens x={110} y1={82} y2={158} c={c} />

      <line x1="195" y1="80" x2="195" y2="160" stroke={c.plane} strokeWidth={1.5} strokeLinecap="round" />
      <text x="195" y="172" textAnchor="middle" fill={c.planeLabel} fontFamily={FONT} fontSize={9}>
        sensor
      </text>

      {/* Parallel rays — scene side */}
      <line x1="30" y1="98" x2="117" y2="98" {...rayP} markerEnd="url(#tc-arrB)" />
      <line x1="30" y1="120" x2="117" y2="120" {...rayP} markerEnd="url(#tc-arrB)" />
      <line x1="30" y1="142" x2="117" y2="142" {...rayP} markerEnd="url(#tc-arrB)" />

      {/* Converging rays — sensor side */}
      <line x1="117" y1="98" x2="195" y2="120" {...ray} markerEnd="url(#tc-arrY)" />
      <line x1="117" y1="120" x2="195" y2="120" {...ray} markerEnd="url(#tc-arrY)" />
      <line x1="117" y1="142" x2="195" y2="120" {...ray} markerEnd="url(#tc-arrY)" />

      <text x="15" y="95" textAnchor="middle" fill={c.infLabel} fontFamily={FONT} fontSize={9}>
        EP
      </text>
      <text x="15" y="106" textAnchor="middle" fill={c.infLabel} fontFamily={FONT} fontSize={9}>
        at ∞
      </text>
      <text x="106" y="195" textAnchor="middle" fill={c.sublabel} fontFamily={FONT} fontSize={9.5}>
        Chief rays parallel
      </text>
      <text x="106" y="207" textAnchor="middle" fill={c.sublabel} fontFamily={FONT} fontSize={9.5}>
        on scene side
      </text>

      {/* ── PANEL 2: Image-space telecentric ── */}
      <text x="320" y="20" textAnchor="middle" fill={c.label} fontFamily={FONT} fontSize={11} fontWeight={600}>
        Image-space
      </text>
      <text x="320" y="33" textAnchor="middle" fill={c.sublabel} fontFamily={FONT} fontSize={9.5}>
        telecentric
      </text>

      <line x1="222" y1="120" x2="419" y2="120" stroke={c.axis} strokeWidth={1} strokeDasharray="4,4" />

      <line x1="234" y1="80" x2="234" y2="160" stroke={c.plane} strokeWidth={1.5} strokeLinecap="round" />
      <text x="234" y="172" textAnchor="middle" fill={c.planeLabel} fontFamily={FONT} fontSize={9}>
        object
      </text>

      <Lens x={312} y1={82} y2={158} c={c} />

      <line x1="408" y1="80" x2="408" y2="160" stroke={c.plane} strokeWidth={1.5} strokeLinecap="round" />
      <text x="408" y="172" textAnchor="middle" fill={c.planeLabel} fontFamily={FONT} fontSize={9}>
        sensor
      </text>

      {/* Diverging rays — scene side (from single point) */}
      <line x1="234" y1="120" x2="319" y2="100" {...ray} markerEnd="url(#tc-arrY)" />
      <line x1="234" y1="120" x2="319" y2="120" {...ray} markerEnd="url(#tc-arrY)" />
      <line x1="234" y1="120" x2="319" y2="140" {...ray} markerEnd="url(#tc-arrY)" />

      {/* Parallel rays — sensor side */}
      <line x1="319" y1="100" x2="408" y2="100" {...rayP} markerEnd="url(#tc-arrB)" />
      <line x1="319" y1="120" x2="408" y2="120" {...rayP} markerEnd="url(#tc-arrB)" />
      <line x1="319" y1="140" x2="408" y2="140" {...rayP} markerEnd="url(#tc-arrB)" />

      <text x="420" y="96" textAnchor="start" fill={c.infLabel} fontFamily={FONT} fontSize={9}>
        XP
      </text>
      <text x="420" y="107" textAnchor="start" fill={c.infLabel} fontFamily={FONT} fontSize={9}>
        at ∞
      </text>
      <text x="320" y="195" textAnchor="middle" fill={c.sublabel} fontFamily={FONT} fontSize={9.5}>
        Chief rays parallel
      </text>
      <text x="320" y="207" textAnchor="middle" fill={c.sublabel} fontFamily={FONT} fontSize={9.5}>
        on sensor side
      </text>

      {/* ── PANEL 3: Double telecentric ── */}
      <text x="533" y="20" textAnchor="middle" fill={c.label} fontFamily={FONT} fontSize={11} fontWeight={600}>
        Double
      </text>
      <text x="533" y="33" textAnchor="middle" fill={c.sublabel} fontFamily={FONT} fontSize={9.5}>
        telecentric
      </text>

      <line x1="435" y1="120" x2="628" y2="120" stroke={c.axis} strokeWidth={1} strokeDasharray="4,4" />

      <line x1="447" y1="80" x2="447" y2="160" stroke={c.plane} strokeWidth={1.5} strokeLinecap="round" />
      <text x="447" y="172" textAnchor="middle" fill={c.planeLabel} fontFamily={FONT} fontSize={9}>
        object
      </text>

      <Lens x={503} y1={85} y2={155} c={c} />

      {/* Aperture stop between lenses */}
      <line x1="534" y1="95" x2="534" y2="108" stroke={c.stop} strokeWidth={2} strokeLinecap="round" />
      <line x1="534" y1="132" x2="534" y2="145" stroke={c.stop} strokeWidth={2} strokeLinecap="round" />

      <Lens x={551} y1={85} y2={155} c={c} />

      <line x1="620" y1="80" x2="620" y2="160" stroke={c.plane} strokeWidth={1.5} strokeLinecap="round" />
      <text x="620" y="172" textAnchor="middle" fill={c.planeLabel} fontFamily={FONT} fontSize={9}>
        sensor
      </text>

      {/* Parallel rays — scene side */}
      <line x1="447" y1="100" x2="510" y2="100" {...rayP} markerEnd="url(#tc-arrB)" />
      <line x1="447" y1="120" x2="510" y2="120" {...rayP} markerEnd="url(#tc-arrB)" />
      <line x1="447" y1="140" x2="510" y2="140" {...rayP} markerEnd="url(#tc-arrB)" />

      {/* Inter-lens rays converging through stop */}
      <line x1="510" y1="100" x2="534" y2="120" stroke={c.interLens} strokeWidth={1.1} />
      <line x1="510" y1="120" x2="534" y2="120" stroke={c.interLens} strokeWidth={1.1} />
      <line x1="510" y1="140" x2="534" y2="120" stroke={c.interLens} strokeWidth={1.1} />
      <line x1="534" y1="120" x2="557" y2="100" stroke={c.interLens} strokeWidth={1.1} />
      <line x1="534" y1="120" x2="557" y2="120" stroke={c.interLens} strokeWidth={1.1} />
      <line x1="534" y1="120" x2="557" y2="140" stroke={c.interLens} strokeWidth={1.1} />

      {/* Parallel rays — sensor side */}
      <line x1="557" y1="100" x2="620" y2="100" {...rayP} markerEnd="url(#tc-arrB)" />
      <line x1="557" y1="120" x2="620" y2="120" {...rayP} markerEnd="url(#tc-arrB)" />
      <line x1="557" y1="140" x2="620" y2="140" {...rayP} markerEnd="url(#tc-arrB)" />

      <text x="435" y="96" textAnchor="middle" fill={c.infLabel} fontFamily={FONT} fontSize={9}>
        EP
      </text>
      <text x="435" y="107" textAnchor="middle" fill={c.infLabel} fontFamily={FONT} fontSize={9}>
        at ∞
      </text>
      <text x="628" y="96" textAnchor="start" fill={c.infLabel} fontFamily={FONT} fontSize={9}>
        XP
      </text>
      <text x="628" y="107" textAnchor="start" fill={c.infLabel} fontFamily={FONT} fontSize={9}>
        at ∞
      </text>
      <text x="533" y="195" textAnchor="middle" fill={c.sublabel} fontFamily={FONT} fontSize={9.5}>
        Chief rays parallel on
      </text>
      <text x="533" y="207" textAnchor="middle" fill={c.sublabel} fontFamily={FONT} fontSize={9.5}>
        both sides
      </text>

      {/* Legend */}
      <line x1="40" y1="222" x2="65" y2="222" stroke={c.rayParallel} strokeWidth={1.3} />
      <text x="69" y="226" fill={c.infLabel} fontFamily={FONT} fontSize={9}>
        parallel (telecentric side)
      </text>
      <line x1="365" y1="222" x2="390" y2="222" stroke={c.ray} strokeWidth={1.3} />
      <text x="394" y="226" fill={c.legendChief} fontFamily={FONT} fontSize={9}>
        converging (non-telecentric side)
      </text>
    </svg>
  );
}
