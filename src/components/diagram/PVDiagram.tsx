// Illustrative P–V glass map: partial dispersion Pgf vs Abbe number Vd.
// Shows the "normal line" of silicate glasses and the anomalous-dispersion
// materials (CaF₂, N-FK51A) that enable apochromatic correction.
// Glass positions are schematic, not computed from precise catalog data.

interface Colors {
  bg: string;
  border: string;
  axis: string;
  grid: string;
  label: string;
  muted: string;
  normalLine: string;
  onLine: string;
  apdCrown: string;
  shortFlint: string;
  tick: string;
}

const DARK: Colors = {
  bg: "#12151e",
  border: "rgba(150,170,210,0.18)",
  axis: "rgba(150,170,210,0.30)",
  grid: "rgba(80,100,140,0.18)",
  label: "#c8d8f0",
  muted: "rgba(150,170,200,0.65)",
  normalLine: "rgba(180,200,225,0.70)",
  onLine: "rgba(200,215,235,0.90)",
  apdCrown: "rgba(40,216,255,0.90)",
  shortFlint: "rgba(200,160,255,0.90)",
  tick: "rgba(150,170,210,0.40)",
};

const LIGHT: Colors = {
  bg: "#eff2f8",
  border: "rgba(60,80,120,0.18)",
  axis: "rgba(60,80,120,0.28)",
  grid: "rgba(120,140,180,0.18)",
  label: "#1a2540",
  muted: "rgba(60,80,120,0.60)",
  normalLine: "rgba(60,80,110,0.70)",
  onLine: "rgba(50,70,100,0.90)",
  apdCrown: "rgba(0,96,120,0.90)",
  shortFlint: "rgba(90,40,180,0.90)",
  tick: "rgba(60,80,120,0.40)",
};

const FONT = "'JetBrains Mono','SF Mono',monospace";

// ─── Plot geometry ───────────────────────────────────────────────
const PL = 72,
  PR = 612,
  PT = 62,
  PB = 278;
const VD_LO = 20,
  VD_HI = 100;
const PGF_LO = 0.45,
  PGF_HI = 0.65;

// Conventional glass-map orientation: Vd DECREASES left → right.
function xv(vd: number): number {
  return PL + ((VD_HI - vd) / (VD_HI - VD_LO)) * (PR - PL);
}
function yp(pgf: number): number {
  return PB - ((pgf - PGF_LO) / (PGF_HI - PGF_LO)) * (PB - PT);
}

// Buchdahl–Abbe normal-line formula (Schott TIE-29 approximation)
function normalPgf(vd: number): number {
  return 0.6438 - 0.001682 * vd;
}

// Normal line runs from Vd=100 (left edge) to Vd=20 (right edge)
const NLX1 = xv(100);
const NLY1 = yp(normalPgf(100));
const NLX2 = xv(20);
const NLY2 = yp(normalPgf(20));

// ─── Glass data ──────────────────────────────────────────────────
type GType = "on" | "apd" | "flint";
interface Glass {
  vd: number;
  pgf: number;
  label: string;
  type: GType;
  lx: number; // label x offset from dot
  ly: number; // label y offset from dot
}

// Pgf values are representative; positions relative to normal line follow
// the description in §2.3 (APD crowns below, short flints above).
const GLASSES: Glass[] = [
  { vd: 95, pgf: 0.46, label: "CaF₂ (fluorite)", type: "apd", lx: 8, ly: 4 },
  { vd: 84.5, pgf: 0.476, label: "N-FK51A", type: "apd", lx: 8, ly: 4 },
  { vd: 64.2, pgf: 0.534, label: "N-BK7", type: "on", lx: 7, ly: -7 },
  { vd: 36.4, pgf: 0.581, label: "N-F2", type: "on", lx: 7, ly: -7 },
  { vd: 40, pgf: 0.605, label: "KZF series", type: "flint", lx: 7, ly: -7 },
];

const X_TICKS = [100, 80, 60, 40, 20];
const Y_TICKS = [0.5, 0.55, 0.6];

export default function PVDiagram({ isDark }: { isDark: boolean }) {
  const c = isDark ? DARK : LIGHT;

  function dotColor(type: GType): string {
    if (type === "apd") return c.apdCrown;
    if (type === "flint") return c.shortFlint;
    return c.onLine;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 322"
      width="100%"
      height="auto"
      role="img"
      aria-label="Illustrative P–V glass map showing partial dispersion vs Abbe number"
    >
      {/* Background */}
      <rect width="640" height="322" rx="6" fill={c.bg} />
      <rect width="640" height="322" rx="6" fill="none" stroke={c.border} strokeWidth={1} />

      {/* Grid lines */}
      {X_TICKS.map((vd) => (
        <line key={vd} x1={xv(vd)} y1={PT} x2={xv(vd)} y2={PB} stroke={c.grid} strokeWidth={0.7} />
      ))}
      {Y_TICKS.map((pgf) => (
        <line key={pgf} x1={PL} y1={yp(pgf)} x2={PR} y2={yp(pgf)} stroke={c.grid} strokeWidth={0.7} />
      ))}

      {/* Axis frame */}
      <line x1={PL} y1={PT} x2={PL} y2={PB} stroke={c.axis} strokeWidth={1} />
      <line x1={PL} y1={PB} x2={PR} y2={PB} stroke={c.axis} strokeWidth={1} />

      {/* Normal line */}
      <line x1={NLX1} y1={NLY1} x2={NLX2} y2={NLY2} stroke={c.normalLine} strokeWidth={1.8} strokeDasharray="7,3" />

      {/* "Normal line" label — near midpoint, offset above */}
      <text
        x={xv(58)}
        y={yp(normalPgf(58)) - 9}
        textAnchor="middle"
        fill={c.normalLine}
        fontFamily={FONT}
        fontSize={10}
      >
        Normal line
      </text>

      {/* Annotation: APD crowns region — sits below the chart, above tick labels */}
      <text x={xv(93)} y={PB + 10} textAnchor="middle" fill={c.apdCrown} fontFamily={FONT} fontSize={9}>
        APD crowns
      </text>

      {/* Annotation: Short flints region */}
      <text x={xv(40)} y={yp(0.625)} textAnchor="middle" fill={c.shortFlint} fontFamily={FONT} fontSize={9}>
        ↑ Short flints
      </text>

      {/* Glass dots and labels */}
      {GLASSES.map((g) => {
        const cx = xv(g.vd);
        const cy = yp(g.pgf);
        const dc = dotColor(g.type);
        return (
          <g key={g.label}>
            <circle cx={cx} cy={cy} r={5} fill={dc} opacity={0.88} />
            <circle cx={cx} cy={cy} r={5} fill="none" stroke={dc} strokeWidth={1.3} />
            <text x={cx + g.lx} y={cy + g.ly + 4} fill={dc} fontFamily={FONT} fontSize={10} fontWeight="600">
              {g.label}
            </text>
          </g>
        );
      })}

      {/* X-axis ticks and labels */}
      {X_TICKS.map((vd) => (
        <g key={vd}>
          <line x1={xv(vd)} y1={PB} x2={xv(vd)} y2={PB + 5} stroke={c.tick} strokeWidth={1} />
          <text x={xv(vd)} y={PB + 16} textAnchor="middle" fill={c.muted} fontFamily={FONT} fontSize={10}>
            {vd}
          </text>
        </g>
      ))}
      {/* X-axis direction label */}
      <text x={PR - 2} y={PB + 27} textAnchor="end" fill={c.muted} fontFamily={FONT} fontSize={9}>
        ← higher dispersion
      </text>
      <text x={PL + 2} y={PB + 27} textAnchor="start" fill={c.muted} fontFamily={FONT} fontSize={9}>
        lower dispersion →
      </text>
      <text x={(PL + PR) / 2} y={PB + 40} textAnchor="middle" fill={c.label} fontFamily={FONT} fontSize={11}>
        Abbe number V
        <tspan baselineShift="-3" fontSize="9">
          d
        </tspan>
      </text>

      {/* Y-axis ticks and labels */}
      {Y_TICKS.map((pgf) => (
        <g key={pgf}>
          <line x1={PL - 5} y1={yp(pgf)} x2={PL} y2={yp(pgf)} stroke={c.tick} strokeWidth={1} />
          <text x={PL - 8} y={yp(pgf) + 4} textAnchor="end" fill={c.muted} fontFamily={FONT} fontSize={10}>
            {pgf.toFixed(2)}
          </text>
        </g>
      ))}
      {/* Y-axis label */}
      <text
        x={12}
        y={(PT + PB) / 2}
        textAnchor="middle"
        fill={c.label}
        fontFamily={FONT}
        fontSize={11}
        transform={`rotate(-90,12,${(PT + PB) / 2})`}
      >
        P
        <tspan baselineShift="-3" fontSize="9">
          g,F
        </tspan>
      </text>

      {/* Legend — sits above the chart (y < PT = 62) */}
      <circle cx={100} cy={13} r={4} fill={c.onLine} opacity={0.88} />
      <text x={108} y={17} fill={c.muted} fontFamily={FONT} fontSize={9.5}>
        Normal-line glass (achromatic pairs: BK7, F2)
      </text>
      <circle cx={100} cy={27} r={4} fill={c.apdCrown} opacity={0.88} />
      <text x={108} y={31} fill={c.muted} fontFamily={FONT} fontSize={9.5}>
        Anomalous partial dispersion crown (APO-capable)
      </text>
      <circle cx={100} cy={41} r={4} fill={c.shortFlint} opacity={0.88} />
      <text x={108} y={45} fill={c.muted} fontFamily={FONT} fontSize={9.5}>
        Short flint (complementary APD partner)
      </text>
    </svg>
  );
}
