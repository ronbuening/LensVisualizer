// Schematic through-focus MTF comparison: non-APO vs APO.
// Left panel: a lens with residual axial color — R/G/B MTF peaks are displaced
// along the focus axis and the polychromatic MTF is lower than any single-color peak.
// Right panel: an apochromat — R/G/B peaks nearly coincide and the polychromatic
// MTF nearly matches the monochromatic value.
// Curves are illustrative bell-shapes; not computed from a specific prescription.

interface Colors {
  bg: string;
  border: string;
  panelDiv: string;
  axis: string;
  label: string;
  muted: string;
  tick: string;
  chromR: string;
  chromG: string;
  chromB: string;
  poly: string;
  gridLine: string;
}

const DARK: Colors = {
  bg: "#12151e",
  border: "rgba(150,170,210,0.18)",
  panelDiv: "rgba(150,170,210,0.16)",
  axis: "rgba(150,170,210,0.30)",
  label: "#c8d8f0",
  muted: "rgba(150,170,200,0.65)",
  tick: "rgba(150,170,210,0.40)",
  chromR: "rgba(255,80,60,0.85)",
  chromG: "rgba(60,210,80,0.85)",
  chromB: "rgba(80,130,255,0.85)",
  poly: "rgba(210,210,210,0.65)",
  gridLine: "rgba(80,100,140,0.18)",
};

const LIGHT: Colors = {
  bg: "#eff2f8",
  border: "rgba(60,80,120,0.18)",
  panelDiv: "rgba(60,80,120,0.18)",
  axis: "rgba(60,80,120,0.28)",
  label: "#1a2540",
  muted: "rgba(60,80,120,0.60)",
  tick: "rgba(60,80,120,0.35)",
  chromR: "rgba(200,30,30,0.85)",
  chromG: "rgba(20,150,20,0.85)",
  chromB: "rgba(30,60,200,0.85)",
  poly: "rgba(80,80,80,0.55)",
  gridLine: "rgba(120,140,180,0.18)",
};

const FONT = "'JetBrains Mono','SF Mono',monospace";

// ─── Geometry ───────────────────────────────────────────────────
// Each panel occupies half the SVG width.
const TOP = 40,
  BOT = 230; // y bounds for plot area
const PLOT_H = BOT - TOP; // 190 px

// Plot area left/right within each panel
const L1 = 56,
  R1 = 290; // left panel (non-APO)
const L2 = 350,
  R2 = 585; // right panel (APO)

// Y mapping: MTF 0 → BOT, MTF 1 → TOP
function ym(mtf: number): number {
  return BOT - mtf * PLOT_H;
}

// ─── Bell-curve path builder ─────────────────────────────────────
// Returns an SVG path string for a Gaussian-like bell curve.
// cx       — x center (peak focus position)
// peakMtf  — MTF value at center (0–1)
// hw       — half-width: x-distance from center to where curve meets baseline
// The shape uses cubic Beziers to approximate a Gaussian.
function bell(cx: number, peakMtf: number, hw: number): string {
  const y0 = BOT; // baseline (MTF = 0)
  const yp = ym(peakMtf); // peak y

  // Control points: ~40% of hw from each end pushes curve up smoothly.
  const cp = hw * 0.4;
  return [
    `M ${cx - hw},${y0}`,
    `C ${cx - hw + cp},${y0} ${cx - cp},${yp} ${cx},${yp}`,
    `C ${cx + cp},${yp} ${cx + hw - cp},${y0} ${cx + hw},${y0}`,
  ].join(" ");
}

export default function MTFDiagram({ isDark }: { isDark: boolean }) {
  const c = isDark ? DARK : LIGHT;

  // ── Non-APO: peaks spread by ~±23 px (representing LCA shift) ──
  // Reference green at center, red shifted right (longer focus), blue left (shorter).
  const c1 = (L1 + R1) / 2; // 173 px
  const R_nonAPO = bell(c1 - 25, 0.8, 52); // blue (F-line: shorter focus = shifted left)
  const G_nonAPO = bell(c1 + 0, 0.87, 52); // green (d-line: near reference)
  const B_nonAPO = bell(c1 + 28, 0.8, 52); // red (C-line: longer focus = shifted right)
  const P_nonAPO = bell(c1 + 2, 0.53, 80); // polychromatic: lower peak, broader

  // ── APO: all peaks nearly coincident ───────────────────────────
  const c2 = (L2 + R2) / 2; // 467 px
  const R_APO = bell(c2 - 2, 0.86, 52);
  const G_APO = bell(c2 + 0, 0.89, 52);
  const B_APO = bell(c2 + 2, 0.86, 52);
  const P_APO = bell(c2, 0.84, 54); // nearly equals monochromatic

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 275"
      width="100%"
      height="auto"
      role="img"
      aria-label="Through-focus MTF comparison: non-APO vs apochromat"
    >
      {/* Background */}
      <rect width="640" height="275" rx="6" fill={c.bg} />
      <rect width="640" height="275" rx="6" fill="none" stroke={c.border} strokeWidth={1} />

      {/* Panel divider */}
      <line x1="320" y1={TOP - 10} x2="320" y2={BOT + 10} stroke={c.panelDiv} strokeWidth={1} />

      {/* ── Y-axis grid lines (0.5, 1.0) ────────────────────────── */}
      {[0.5, 1.0].map((mtf) => (
        <g key={mtf}>
          <line x1={L1} y1={ym(mtf)} x2={R1} y2={ym(mtf)} stroke={c.gridLine} strokeWidth={0.8} />
          <line x1={L2} y1={ym(mtf)} x2={R2} y2={ym(mtf)} stroke={c.gridLine} strokeWidth={0.8} />
        </g>
      ))}
      {/* Baseline */}
      <line x1={L1} y1={BOT} x2={R1} y2={BOT} stroke={c.axis} strokeWidth={1} />
      <line x1={L2} y1={BOT} x2={R2} y2={BOT} stroke={c.axis} strokeWidth={1} />

      {/* ── Y-axis ────────────────────────────────────────────────── */}
      <line x1={L1} y1={TOP} x2={L1} y2={BOT} stroke={c.axis} strokeWidth={1} />
      <line x1={L2} y1={TOP} x2={L2} y2={BOT} stroke={c.axis} strokeWidth={1} />

      {/* Y-axis ticks and labels */}
      {[0.5, 1.0].map((mtf) => (
        <g key={mtf}>
          <line x1={L1 - 4} y1={ym(mtf)} x2={L1} y2={ym(mtf)} stroke={c.tick} strokeWidth={1} />
          <text x={L1 - 7} y={ym(mtf) + 4} textAnchor="end" fill={c.muted} fontFamily={FONT} fontSize={9}>
            {mtf.toFixed(1)}
          </text>
          <line x1={L2 - 4} y1={ym(mtf)} x2={L2} y2={ym(mtf)} stroke={c.tick} strokeWidth={1} />
          <text x={L2 - 7} y={ym(mtf) + 4} textAnchor="end" fill={c.muted} fontFamily={FONT} fontSize={9}>
            {mtf.toFixed(1)}
          </text>
        </g>
      ))}
      <text x={L1 - 7} y={BOT + 4} textAnchor="end" fill={c.muted} fontFamily={FONT} fontSize={9}>
        0
      </text>
      <text x={L2 - 7} y={BOT + 4} textAnchor="end" fill={c.muted} fontFamily={FONT} fontSize={9}>
        0
      </text>

      {/* Y-axis labels */}
      <text
        x={L1 - 42}
        y={(TOP + BOT) / 2}
        textAnchor="middle"
        fill={c.label}
        fontFamily={FONT}
        fontSize={10}
        transform={`rotate(-90,${L1 - 42},${(TOP + BOT) / 2})`}
      >
        MTF
      </text>
      <text
        x={L2 - 42}
        y={(TOP + BOT) / 2}
        textAnchor="middle"
        fill={c.label}
        fontFamily={FONT}
        fontSize={10}
        transform={`rotate(-90,${L2 - 42},${(TOP + BOT) / 2})`}
      >
        MTF
      </text>

      {/* ── Non-APO curves ────────────────────────────────────────── */}
      <path d={P_nonAPO} fill="none" stroke={c.poly} strokeWidth={1.8} strokeDasharray="5,3" />
      <path d={R_nonAPO} fill="none" stroke={c.chromB} strokeWidth={1.5} />
      <path d={G_nonAPO} fill="none" stroke={c.chromG} strokeWidth={1.5} />
      <path d={B_nonAPO} fill="none" stroke={c.chromR} strokeWidth={1.5} />

      {/* ── APO curves ────────────────────────────────────────────── */}
      <path d={P_APO} fill="none" stroke={c.poly} strokeWidth={1.8} strokeDasharray="5,3" />
      <path d={R_APO} fill="none" stroke={c.chromB} strokeWidth={1.5} />
      <path d={G_APO} fill="none" stroke={c.chromG} strokeWidth={1.5} />
      <path d={B_APO} fill="none" stroke={c.chromR} strokeWidth={1.5} />

      {/* ── Focus (zero) line and tick ───────────────────────────── */}
      {/* Non-APO: annotate peak separation */}
      <line x1={c1} y1={BOT} x2={c1} y2={BOT + 5} stroke={c.tick} strokeWidth={1} />
      <text x={c1} y={BOT + 14} textAnchor="middle" fill={c.muted} fontFamily={FONT} fontSize={9}>
        best focus
      </text>
      {/* APO */}
      <line x1={c2} y1={BOT} x2={c2} y2={BOT + 5} stroke={c.tick} strokeWidth={1} />
      <text x={c2} y={BOT + 14} textAnchor="middle" fill={c.muted} fontFamily={FONT} fontSize={9}>
        best focus
      </text>

      {/* ── X-axis labels ────────────────────────────────────────── */}
      <text x={(L1 + R1) / 2} y={BOT + 26} textAnchor="middle" fill={c.muted} fontFamily={FONT} fontSize={10}>
        Focus position →
      </text>
      <text x={(L2 + R2) / 2} y={BOT + 26} textAnchor="middle" fill={c.muted} fontFamily={FONT} fontSize={10}>
        Focus position →
      </text>

      {/* ── Panel titles ─────────────────────────────────────────── */}
      <text
        x={(L1 + R1) / 2}
        y={TOP - 10}
        textAnchor="middle"
        fill={c.label}
        fontFamily={FONT}
        fontSize={12}
        fontWeight="600"
      >
        Non-APO: peaks displaced
      </text>
      <text
        x={(L2 + R2) / 2}
        y={TOP - 10}
        textAnchor="middle"
        fill={c.label}
        fontFamily={FONT}
        fontSize={12}
        fontWeight="600"
      >
        Apochromat: peaks coincide
      </text>

      {/* ── Legend (bottom, shared) ───────────────────────────────── */}
      <line x1={168} y1={258} x2={188} y2={258} stroke={c.chromB} strokeWidth={1.5} />
      <text x={191} y={262} fill={c.chromB} fontFamily={FONT} fontSize={9}>
        F (486 nm)
      </text>
      <line x1={250} y1={258} x2={270} y2={258} stroke={c.chromG} strokeWidth={1.5} />
      <text x={273} y={262} fill={c.chromG} fontFamily={FONT} fontSize={9}>
        d (587 nm)
      </text>
      <line x1={330} y1={258} x2={350} y2={258} stroke={c.chromR} strokeWidth={1.5} />
      <text x={353} y={262} fill={c.chromR} fontFamily={FONT} fontSize={9}>
        C (656 nm)
      </text>
      <line x1={415} y1={258} x2={435} y2={258} stroke={c.poly} strokeWidth={1.8} strokeDasharray="5,3" />
      <text x={438} y={262} fill={c.poly} fontFamily={FONT} fontSize={9}>
        polychromatic
      </text>
    </svg>
  );
}
