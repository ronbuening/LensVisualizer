interface Colors {
  bg: string;
  border: string;
  axis: string;
  lensFill: string;
  lensStroke: string;
  stop: string;
  epStroke: string;
  epFill: string;
  ray: string;
  label: string;
  labelAccent: string;
  labelStop: string;
  muted: string;
  tick: string;
}

const DARK: Colors = {
  bg: "#12151e",
  border: "rgba(150,170,210,0.18)",
  axis: "rgba(150,170,210,0.35)",
  lensFill: "rgba(70,130,180,0.22)",
  lensStroke: "rgba(120,170,220,0.80)",
  stop: "#ff8c20",
  epStroke: "#28d8ff",
  epFill: "rgba(40,216,255,0.06)",
  ray: "rgba(40,216,255,0.45)",
  label: "#c8d8f0",
  labelAccent: "#28d8ff",
  labelStop: "#ff8c20",
  muted: "rgba(150,170,200,0.65)",
  tick: "rgba(150,170,210,0.4)",
};

const LIGHT: Colors = {
  bg: "#eff2f8",
  border: "rgba(60,80,120,0.18)",
  axis: "rgba(60,80,120,0.32)",
  lensFill: "rgba(30,80,160,0.10)",
  lensStroke: "rgba(30,80,160,0.65)",
  stop: "#c05000",
  epStroke: "#006878",
  epFill: "rgba(0,104,120,0.06)",
  ray: "rgba(0,104,120,0.40)",
  label: "#1a2540",
  labelAccent: "#006878",
  labelStop: "#c05000",
  muted: "rgba(60,80,120,0.60)",
  tick: "rgba(60,80,120,0.35)",
};

const FONT = "'JetBrains Mono','SF Mono',monospace";

export default function EntrancePupilDiagram({ isDark }: { isDark: boolean }) {
  const c = isDark ? DARK : LIGHT;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 220"
      width="100%"
      height="auto"
      role="img"
      aria-label="Entrance pupil diagram"
    >
      {/* Background */}
      <rect width="640" height="220" rx="6" fill={c.bg} />
      <rect width="640" height="220" rx="6" fill="none" stroke={c.border} strokeWidth={1} />

      {/* Optical axis */}
      <line x1="30" y1="110" x2="600" y2="110" stroke={c.axis} strokeWidth={1} strokeDasharray="5,4" />

      {/* Entrance pupil (virtual, dashed) */}
      <ellipse cx="92" cy="110" rx="13" ry="68" fill={c.epFill} />
      <ellipse
        cx="92"
        cy="110"
        rx="13"
        ry="68"
        fill="none"
        stroke={c.epStroke}
        strokeWidth={1.5}
        strokeDasharray="5,3"
      />
      <line x1="92" y1="108" x2="92" y2="112" stroke={c.tick} strokeWidth={1} />

      {/* Front group element 1 */}
      <path d="M 258,68 Q 241,110 258,152 L 276,152 Q 293,110 276,68 Z" fill={c.lensFill} />
      <path d="M 258,68 Q 241,110 258,152" fill="none" stroke={c.lensStroke} strokeWidth={1.5} />
      <path d="M 276,68 Q 293,110 276,152" fill="none" stroke={c.lensStroke} strokeWidth={1.5} />
      <line x1="258" y1="68" x2="276" y2="68" stroke={c.lensStroke} strokeWidth={1.5} />
      <line x1="258" y1="152" x2="276" y2="152" stroke={c.lensStroke} strokeWidth={1.5} />

      {/* Front group element 2 */}
      <path d="M 298,68 Q 281,110 298,152 L 316,152 Q 333,110 316,68 Z" fill={c.lensFill} />
      <path d="M 298,68 Q 281,110 298,152" fill="none" stroke={c.lensStroke} strokeWidth={1.5} />
      <path d="M 316,68 Q 333,110 316,68" fill="none" stroke={c.lensStroke} strokeWidth={1.5} />
      <line x1="298" y1="68" x2="316" y2="68" stroke={c.lensStroke} strokeWidth={1.5} />
      <line x1="298" y1="152" x2="316" y2="152" stroke={c.lensStroke} strokeWidth={1.5} />
      <path d="M 316,68 Q 333,110 316,152" fill="none" stroke={c.lensStroke} strokeWidth={1.5} />

      {/* Aperture stop (iris) */}
      <line x1="445" y1="30" x2="445" y2="72" stroke={c.stop} strokeWidth={3} strokeLinecap="round" />
      <line x1="445" y1="148" x2="445" y2="190" stroke={c.stop} strokeWidth={3} strokeLinecap="round" />
      <line x1="443" y1="108" x2="447" y2="112" stroke={c.stop} strokeWidth={1} opacity={0.5} />

      {/* Construction rays: EP edges → stop edges */}
      <line x1="92" y1="42" x2="445" y2="72" stroke={c.ray} strokeWidth={1} strokeDasharray="6,4" />
      <line x1="92" y1="178" x2="445" y2="148" stroke={c.ray} strokeWidth={1} strokeDasharray="6,4" />

      {/* Labels */}
      <text x="92" y="20" textAnchor="middle" fill={c.labelAccent} fontFamily={FONT} fontSize={11}>
        Entrance pupil
      </text>
      <text x="92" y="33" textAnchor="middle" fill={c.muted} fontFamily={FONT} fontSize={10}>
        (virtual image of stop)
      </text>
      <line x1="92" y1="36" x2="92" y2="41" stroke={c.tick} strokeWidth={1} strokeDasharray="3,2" />

      <text x="287" y="180" textAnchor="middle" fill={c.label} fontFamily={FONT} fontSize={11}>
        Front group
      </text>
      <path d="M 255,170 L 255,175 L 319,175 L 319,170" fill="none" stroke={c.tick} strokeWidth={1} />

      <text x="460" y="52" textAnchor="start" fill={c.labelStop} fontFamily={FONT} fontSize={11}>
        Aperture stop
      </text>
      <text x="460" y="65" textAnchor="start" fill={c.labelStop} fontFamily={FONT} fontSize={11}>
        (iris)
      </text>
      <line x1="457" y1="55" x2="449" y2="55" stroke={c.tick} strokeWidth={1} strokeDasharray="2,2" />

      <text x="510" y="107" textAnchor="start" fill={c.muted} fontFamily={FONT} fontSize={10}>
        rear group
      </text>
      <text x="510" y="119" textAnchor="start" fill={c.muted} fontFamily={FONT} fontSize={10}>
        → sensor
      </text>

      {/* EP ↔ stop distance annotation */}
      <line x1="92" y1="200" x2="445" y2="200" stroke={c.tick} strokeWidth={1} />
      <line x1="92" y1="196" x2="92" y2="204" stroke={c.tick} strokeWidth={1} />
      <line x1="445" y1="196" x2="445" y2="204" stroke={c.tick} strokeWidth={1} />
      <text x="268" y="214" textAnchor="middle" fill={c.muted} fontFamily={FONT} fontSize={10}>
        EP displaced from stop (magnification by front group)
      </text>
    </svg>
  );
}
