interface Colors {
  bg: string;
  border: string;
  divider: string;
  axis: string;
  lensFill: string;
  lensStroke: string;
  xpFill: string;
  xpStroke: string;
  sensor: string;
  coneFill: string;
  cone: string;
  coneNarrow: string;
  coneNarrowStroke: string;
  coneArc: string;
  coneNarrowArc: string;
  dim: string;
  extArrow: string;
  label: string;
  labelXp: string;
  labelN: string;
  labelNeff: string;
  muted: string;
  tick: string;
  arrDim: string;
  extArrHead: string;
}

const DARK: Colors = {
  bg: "#12151e",
  border: "rgba(150,170,210,0.18)",
  divider: "rgba(150,170,210,0.18)",
  axis: "rgba(150,170,210,0.30)",
  lensFill: "rgba(70,130,180,0.22)",
  lensStroke: "rgba(120,170,220,0.80)",
  xpFill: "rgba(217,140,255,0.10)",
  xpStroke: "#d98cff",
  sensor: "rgba(180,200,240,0.80)",
  coneFill: "rgba(40,216,255,0.07)",
  cone: "rgba(40,216,255,0.55)",
  coneNarrow: "rgba(255,200,60,0.06)",
  coneNarrowStroke: "rgba(255,200,60,0.55)",
  coneArc: "rgba(40,216,255,0.55)",
  coneNarrowArc: "rgba(255,200,60,0.55)",
  dim: "rgba(150,170,210,0.40)",
  extArrow: "rgba(255,160,50,0.70)",
  label: "#c8d8f0",
  labelXp: "#d98cff",
  labelN: "#28d8ff",
  labelNeff: "#ffc83c",
  muted: "rgba(150,170,200,0.65)",
  tick: "rgba(150,170,210,0.40)",
  arrDim: "rgba(150,170,210,0.60)",
  extArrHead: "rgba(255,160,50,0.80)",
};

const LIGHT: Colors = {
  bg: "#eff2f8",
  border: "rgba(60,80,120,0.18)",
  divider: "rgba(60,80,120,0.18)",
  axis: "rgba(60,80,120,0.28)",
  lensFill: "rgba(30,80,160,0.10)",
  lensStroke: "rgba(30,80,160,0.65)",
  xpFill: "rgba(120,46,184,0.07)",
  xpStroke: "#7a2eb8",
  sensor: "rgba(40,80,160,0.75)",
  coneFill: "rgba(0,104,120,0.07)",
  cone: "rgba(0,104,120,0.55)",
  coneNarrow: "rgba(160,100,0,0.06)",
  coneNarrowStroke: "rgba(160,100,0,0.55)",
  coneArc: "rgba(0,104,120,0.55)",
  coneNarrowArc: "rgba(160,100,0,0.55)",
  dim: "rgba(60,80,120,0.38)",
  extArrow: "rgba(200,100,0,0.70)",
  label: "#1a2540",
  labelXp: "#7a2eb8",
  labelN: "#006878",
  labelNeff: "#a06000",
  muted: "rgba(60,80,120,0.60)",
  tick: "rgba(60,80,120,0.35)",
  arrDim: "rgba(60,80,120,0.50)",
  extArrHead: "rgba(200,100,0,0.80)",
};

const FONT = "'JetBrains Mono','SF Mono',monospace";

function Lens({ x, c }: { x: number; c: Colors }) {
  const x2 = x + 14;
  return (
    <>
      <path d={`M ${x},76 Q ${x - 13},110 ${x},144 L ${x2},144 Q ${x2 + 13},110 ${x2},76 Z`} fill={c.lensFill} />
      <path d={`M ${x},76 Q ${x - 13},110 ${x},144`} fill="none" stroke={c.lensStroke} strokeWidth={1.5} />
      <path d={`M ${x2},76 Q ${x2 + 13},110 ${x2},144`} fill="none" stroke={c.lensStroke} strokeWidth={1.5} />
      <line x1={x} y1={76} x2={x2} y2={76} stroke={c.lensStroke} strokeWidth={1.5} />
      <line x1={x} y1={144} x2={x2} y2={144} stroke={c.lensStroke} strokeWidth={1.5} />
    </>
  );
}

export default function WorkingFNumberDiagram({ isDark }: { isDark: boolean }) {
  const c = isDark ? DARK : LIGHT;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 230"
      width="100%"
      height="auto"
      role="img"
      aria-label="Working f-number vs nominal f-number diagram"
    >
      <defs>
        <marker id="wfn-dimArr" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill={c.arrDim} />
        </marker>
        <marker id="wfn-dimArrL" markerWidth="5" markerHeight="5" refX="1" refY="2.5" orient="auto">
          <path d="M5,0 L0,2.5 L5,5 Z" fill={c.arrDim} />
        </marker>
        <marker id="wfn-extArr" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill={c.extArrHead} />
        </marker>
      </defs>

      {/* Background */}
      <rect width="640" height="230" rx="6" fill={c.bg} />
      <rect width="640" height="230" rx="6" fill="none" stroke={c.border} strokeWidth={1} />

      {/* Panel divider */}
      <line x1="320" y1="22" x2="320" y2="215" stroke={c.divider} strokeWidth={1} />

      {/* ── LEFT PANEL: focus at infinity ── */}
      <text x="160" y="18" textAnchor="middle" fill={c.label} fontFamily={FONT} fontSize={11}>
        Focus at infinity
      </text>

      <line x1="20" y1="110" x2="300" y2="110" stroke={c.axis} strokeWidth={1} strokeDasharray="5,4" />

      {/* Exit pupil */}
      <ellipse cx="130" cy="110" rx="11" ry="42" fill={c.xpFill} />
      <ellipse cx="130" cy="110" rx="11" ry="42" fill="none" stroke={c.xpStroke} strokeWidth={2} />
      <text x="130" y="22" textAnchor="middle" fill={c.labelXp} fontFamily={FONT} fontSize={10}>
        XP
      </text>
      <line x1="130" y1="25" x2="130" y2="66" stroke={c.tick} strokeWidth={1} strokeDasharray="2,2" />

      <Lens x={190} c={c} />

      {/* Sensor */}
      <line x1="240" y1="76" x2="240" y2="144" stroke={c.sensor} strokeWidth={2.5} strokeLinecap="round" />
      <text x="249" y="112" fill={c.muted} fontFamily={FONT} fontSize={9.5}>
        sensor
      </text>

      {/* Light cone */}
      <polygon points="130,68 130,152 240,110" fill={c.coneFill} />
      <line x1="130" y1="68" x2="240" y2="110" stroke={c.cone} strokeWidth={1.2} />
      <line x1="130" y1="152" x2="240" y2="110" stroke={c.cone} strokeWidth={1.2} />

      {/* Angle arc */}
      <path d="M 220,110 A 20,20 0 0,0 224,93" fill="none" stroke={c.coneArc} strokeWidth={1} />
      <path d="M 220,110 A 20,20 0 0,1 224,127" fill="none" stroke={c.coneArc} strokeWidth={1} />
      <text x="222" y="100" textAnchor="start" fill={c.labelN} fontFamily={FONT} fontSize={12} fontWeight={700}>
        N
      </text>

      {/* Image conjugate dimension */}
      <line
        x1="130"
        y1="158"
        x2="240"
        y2="158"
        stroke={c.dim}
        strokeWidth={1}
        markerEnd="url(#wfn-dimArr)"
        markerStart="url(#wfn-dimArrL)"
      />
      <line x1="130" y1="154" x2="130" y2="162" stroke={c.tick} strokeWidth={1} />
      <line x1="240" y1="154" x2="240" y2="162" stroke={c.tick} strokeWidth={1} />
      <text x="185" y="171" textAnchor="middle" fill={c.muted} fontFamily={FONT} fontSize={9.5}>
        image conjugate v
      </text>

      {/* ── RIGHT PANEL: close focus (extended) ── */}
      <text x="480" y="18" textAnchor="middle" fill={c.label} fontFamily={FONT} fontSize={11}>
        Close focus (extended)
      </text>

      <line x1="330" y1="110" x2="620" y2="110" stroke={c.axis} strokeWidth={1} strokeDasharray="5,4" />

      {/* Exit pupil */}
      <ellipse cx="370" cy="110" rx="11" ry="42" fill={c.xpFill} />
      <ellipse cx="370" cy="110" rx="11" ry="42" fill="none" stroke={c.xpStroke} strokeWidth={2} />
      <text x="370" y="22" textAnchor="middle" fill={c.labelXp} fontFamily={FONT} fontSize={10}>
        XP
      </text>
      <line x1="370" y1="25" x2="370" y2="66" stroke={c.tick} strokeWidth={1} strokeDasharray="2,2" />

      <Lens x={430} c={c} />

      {/* Sensor */}
      <line x1="570" y1="76" x2="570" y2="144" stroke={c.sensor} strokeWidth={2.5} strokeLinecap="round" />
      <text x="579" y="112" fill={c.muted} fontFamily={FONT} fontSize={9.5}>
        sensor
      </text>

      {/* Extension arrow */}
      <line x1="444" y1="185" x2="568" y2="185" stroke={c.extArrow} strokeWidth={1.5} markerEnd="url(#wfn-extArr)" />
      <line x1="444" y1="181" x2="444" y2="189" stroke={c.tick} strokeWidth={1} />
      <text x="506" y="198" textAnchor="middle" fill={c.muted} fontFamily={FONT} fontSize={9.5}>
        extended (longer conjugate)
      </text>

      {/* Light cone — narrower angle */}
      <polygon points="370,68 370,152 570,110" fill={c.coneNarrow} />
      <line x1="370" y1="68" x2="570" y2="110" stroke={c.coneNarrowStroke} strokeWidth={1.2} />
      <line x1="370" y1="152" x2="570" y2="110" stroke={c.coneNarrowStroke} strokeWidth={1.2} />

      {/* Narrower angle arc */}
      <path d="M 550,110 A 20,20 0 0,0 553,97" fill="none" stroke={c.coneNarrowArc} strokeWidth={1} />
      <path d="M 550,110 A 20,20 0 0,1 553,123" fill="none" stroke={c.coneNarrowArc} strokeWidth={1} />
      <text x="525" y="107" textAnchor="end" fill={c.labelNeff} fontFamily={FONT} fontSize={12} fontWeight={700}>
        N&#x1D452;&#x1D453;&#x1D453; &gt; N
      </text>

      {/* Image conjugate dimension — longer */}
      <line
        x1="370"
        y1="158"
        x2="570"
        y2="158"
        stroke={c.dim}
        strokeWidth={1}
        markerEnd="url(#wfn-dimArr)"
        markerStart="url(#wfn-dimArrL)"
      />
      <line x1="370" y1="154" x2="370" y2="162" stroke={c.tick} strokeWidth={1} />
      <line x1="570" y1="154" x2="570" y2="162" stroke={c.tick} strokeWidth={1} />
      <text x="470" y="171" textAnchor="middle" fill={c.muted} fontFamily={FONT} fontSize={9.5}>
        image conjugate v′ &gt; v
      </text>

      {/* Bottom captions */}
      <text x="160" y="212" textAnchor="middle" fill={c.muted} fontFamily={FONT} fontSize={9.5}>
        XP subtends wide angle → fast (low N)
      </text>
      <text x="480" y="212" textAnchor="middle" fill={c.muted} fontFamily={FONT} fontSize={9.5}>
        XP subtends narrow angle → slow (high N&#x1D452;&#x1D453;&#x1D453;)
      </text>
    </svg>
  );
}
