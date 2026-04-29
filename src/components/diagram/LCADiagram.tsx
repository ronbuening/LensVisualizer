// Schematic BFD(λ) curves for an achromat vs an apochromat.
// Left panel: achromat — two wavelength crossings (C, F), secondary spectrum at d.
// Right panel: apochromat — three wavelength crossings (C, d, F), much smaller residual.
// Not computed from a specific prescription; positions are representative.

interface Colors {
  bg: string;
  border: string;
  panelDiv: string;
  axis: string;
  label: string;
  muted: string;
  tick: string;
  curve: string;
  refLine: string;
  chromR: string; // C-line (656 nm) — red
  chromG: string; // d-line (587 nm) — yellow-green
  chromB: string; // F-line (486 nm) — blue
  chromV: string; // g-line (436 nm) — violet
  annotArrow: string;
}

const DARK: Colors = {
  bg: "#12151e",
  border: "rgba(150,170,210,0.18)",
  panelDiv: "rgba(150,170,210,0.16)",
  axis: "rgba(150,170,210,0.30)",
  label: "#c8d8f0",
  muted: "rgba(150,170,200,0.65)",
  tick: "rgba(150,170,210,0.40)",
  curve: "rgba(140,200,240,0.90)",
  refLine: "rgba(150,170,200,0.20)",
  chromR: "rgba(255,80,60,0.85)",
  chromG: "rgba(60,210,80,0.85)",
  chromB: "rgba(80,130,255,0.85)",
  chromV: "rgba(190,80,220,0.80)",
  annotArrow: "rgba(255,210,60,0.85)",
};

const LIGHT: Colors = {
  bg: "#eff2f8",
  border: "rgba(60,80,120,0.18)",
  panelDiv: "rgba(60,80,120,0.18)",
  axis: "rgba(60,80,120,0.28)",
  label: "#1a2540",
  muted: "rgba(60,80,120,0.60)",
  tick: "rgba(60,80,120,0.35)",
  curve: "rgba(20,80,160,0.85)",
  refLine: "rgba(60,80,120,0.15)",
  chromR: "rgba(200,30,30,0.85)",
  chromG: "rgba(20,150,20,0.85)",
  chromB: "rgba(30,60,200,0.85)",
  chromV: "rgba(130,30,170,0.80)",
  annotArrow: "rgba(160,120,0,0.85)",
};

const FONT = "'JetBrains Mono','SF Mono',monospace";

// ─── Wavelength reference positions (y) ─────────────────────────
// Wavelength increases downward (shorter λ near top, longer near bottom).
const WY = {
  g: 58, // 436 nm — violet
  F: 100, // 486 nm — blue
  d: 178, // 587 nm — yellow-green
  C: 225, // 656 nm — red
};

// Panel centers (zero BFD deviation line)
const ACH_CX = 158; // achromat panel
const APO_CX = 482; // apochromat panel

export default function LCADiagram({ isDark }: { isDark: boolean }) {
  const c = isDark ? DARK : LIGHT;

  // Reference horizontal lines for each wavelength across both panels
  const waveLines: { y: number; col: string; nm: string; label: string }[] = [
    { y: WY.g, col: c.chromV, nm: "436", label: "g" },
    { y: WY.F, col: c.chromB, nm: "486", label: "F" },
    { y: WY.d, col: c.chromG, nm: "587", label: "d" },
    { y: WY.C, col: c.chromR, nm: "656", label: "C" },
  ];

  // ── Achromat BFD curve ─────────────────────────────────────────
  // Passes through: g (−12), F (0), peaks near d (+30), C (0).
  // Drawn as a smooth cubic-Bezier path.
  const achPath = [
    `M ${ACH_CX - 12},${WY.g}`,
    `C ${ACH_CX - 6},${WY.g + 18}`,
    `  ${ACH_CX},${WY.F - 12}`,
    `  ${ACH_CX},${WY.F}`,
    `C ${ACH_CX},${WY.F + 22}`,
    `  ${ACH_CX + 32},${WY.d - 30}`,
    `  ${ACH_CX + 30},${WY.d}`,
    `C ${ACH_CX + 28},${WY.d + 18}`,
    `  ${ACH_CX + 8},${WY.C - 14}`,
    `  ${ACH_CX},${WY.C}`,
  ].join(" ");

  // ── Apochromat BFD curve ──────────────────────────────────────
  // Three zero crossings: C, d, F; residuals ~5×smaller than achromat.
  // A gentle S-curve between the crossings.
  const apoPath = [
    `M ${APO_CX - 4},${WY.g}`,
    `C ${APO_CX - 2},${WY.g + 18}`,
    `  ${APO_CX},${WY.F - 12}`,
    `  ${APO_CX},${WY.F}`,
    `C ${APO_CX},${WY.F + 16}`,
    `  ${APO_CX - 5},${WY.F + 30}`,
    `  ${APO_CX - 5},${(WY.F + WY.d) / 2}`,
    `C ${APO_CX - 5},${WY.d - 20}`,
    `  ${APO_CX},${WY.d - 8}`,
    `  ${APO_CX},${WY.d}`,
    `C ${APO_CX},${WY.d + 14}`,
    `  ${APO_CX + 5},${WY.d + 24}`,
    `  ${APO_CX + 5},${(WY.d + WY.C) / 2}`,
    `C ${APO_CX + 5},${WY.C - 14}`,
    `  ${APO_CX},${WY.C - 6}`,
    `  ${APO_CX},${WY.C}`,
  ].join(" ");

  const TOP = 30;
  const BOT = 255;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 285"
      width="100%"
      height="auto"
      role="img"
      aria-label="BFD(λ) curves: achromat vs apochromat chromatic correction"
    >
      {/* Background */}
      <rect width="640" height="285" rx="6" fill={c.bg} />
      <rect width="640" height="285" rx="6" fill="none" stroke={c.border} strokeWidth={1} />

      {/* Panel divider */}
      <line x1="320" y1={TOP} x2="320" y2={BOT} stroke={c.panelDiv} strokeWidth={1} />

      {/* ── Wavelength reference lines (both panels) ────────────── */}
      {waveLines.map(({ y, col }) => (
        <g key={y}>
          <line x1={30} y1={y} x2={295} y2={y} stroke={col} strokeWidth={0.7} strokeDasharray="3,3" opacity={0.45} />
          <line x1={345} y1={y} x2={610} y2={y} stroke={col} strokeWidth={0.7} strokeDasharray="3,3" opacity={0.45} />
        </g>
      ))}

      {/* ── Wavelength labels (left of both panels) ─────────────── */}
      {waveLines.map(({ y, col, nm, label }) => (
        <g key={label}>
          {/* Left panel */}
          <text x={28} y={y + 4} textAnchor="end" fill={col} fontFamily={FONT} fontSize={10} fontWeight="600">
            {label}
          </text>
          <text x={28} y={y + 14} textAnchor="end" fill={col} fontFamily={FONT} fontSize={8} opacity={0.75}>
            {nm}
          </text>
          {/* Right panel: wavelength mark dots */}
          <circle cx={343} cy={y} r={3} fill={col} opacity={0.65} />
        </g>
      ))}

      {/* ── Zero (BFD = 0) reference lines ─────────────────────── */}
      <line x1={ACH_CX} y1={TOP} x2={ACH_CX} y2={BOT} stroke={c.axis} strokeWidth={1} />
      <line x1={APO_CX} y1={TOP} x2={APO_CX} y2={BOT} stroke={c.axis} strokeWidth={1} />

      {/* ── BFD axis ticks (x) ──────────────────────────────────── */}
      {/* Achromat: +30 max offset */}
      <line x1={ACH_CX - 30} y1={BOT} x2={ACH_CX - 30} y2={BOT + 4} stroke={c.tick} strokeWidth={1} />
      <line x1={ACH_CX + 30} y1={BOT} x2={ACH_CX + 30} y2={BOT + 4} stroke={c.tick} strokeWidth={1} />
      <line x1={ACH_CX} y1={BOT} x2={ACH_CX} y2={BOT + 4} stroke={c.tick} strokeWidth={1} />
      <text x={ACH_CX} y={BOT + 15} textAnchor="middle" fill={c.muted} fontFamily={FONT} fontSize={9}>
        0
      </text>
      {/* Apochromat */}
      <line x1={APO_CX} y1={BOT} x2={APO_CX} y2={BOT + 4} stroke={c.tick} strokeWidth={1} />
      <text x={APO_CX} y={BOT + 15} textAnchor="middle" fill={c.muted} fontFamily={FONT} fontSize={9}>
        0
      </text>

      {/* ── X-axis labels ───────────────────────────────────────── */}
      <text x={(30 + 295) / 2} y={275} textAnchor="middle" fill={c.muted} fontFamily={FONT} fontSize={10}>
        BFD deviation
      </text>
      <text x={(345 + 610) / 2} y={275} textAnchor="middle" fill={c.muted} fontFamily={FONT} fontSize={10}>
        BFD deviation
      </text>

      {/* ── Y-axis label ─────────────────────────────────────────── */}
      <text
        x={10}
        y={(TOP + BOT) / 2}
        textAnchor="middle"
        fill={c.muted}
        fontFamily={FONT}
        fontSize={9}
        transform={`rotate(-90,10,${(TOP + BOT) / 2})`}
      >
        wavelength λ
      </text>

      {/* ── Achromat BFD curve ──────────────────────────────────── */}
      <path d={achPath} fill="none" stroke={c.curve} strokeWidth={2} strokeLinejoin="round" />

      {/* Secondary spectrum annotation */}
      {/* Horizontal double-headed arrow between zero line and curve peak at d */}
      <line
        x1={ACH_CX}
        y1={WY.d - 8}
        x2={ACH_CX + 30}
        y2={WY.d - 8}
        stroke={c.annotArrow}
        strokeWidth={1.2}
        markerEnd="url(#lca-arr-r)"
        markerStart="url(#lca-arr-l)"
      />
      <text x={ACH_CX - 6} y={WY.d - 14} textAnchor="end" fill={c.annotArrow} fontFamily={FONT} fontSize={9}>
        secondary
      </text>
      <text x={ACH_CX - 6} y={WY.d - 5} textAnchor="end" fill={c.annotArrow} fontFamily={FONT} fontSize={9}>
        spectrum
      </text>

      {/* ── Apochromat BFD curve ─────────────────────────────────── */}
      <path d={apoPath} fill="none" stroke={c.curve} strokeWidth={2} strokeLinejoin="round" />

      {/* Tertiary residual annotation */}
      <line
        x1={APO_CX}
        y1={(WY.F + WY.d) / 2}
        x2={APO_CX - 5}
        y2={(WY.F + WY.d) / 2}
        stroke={c.annotArrow}
        strokeWidth={1}
      />
      <text
        x={APO_CX - 8}
        y={(WY.F + WY.d) / 2 - 5}
        textAnchor="end"
        fill={c.annotArrow}
        fontFamily={FONT}
        fontSize={9}
      >
        tertiary
      </text>
      <text
        x={APO_CX - 8}
        y={(WY.F + WY.d) / 2 + 5}
        textAnchor="end"
        fill={c.annotArrow}
        fontFamily={FONT}
        fontSize={9}
      >
        residual
      </text>

      {/* ── Panel titles ─────────────────────────────────────────── */}
      <text
        x={(30 + 295) / 2}
        y={TOP + 14}
        textAnchor="middle"
        fill={c.label}
        fontFamily={FONT}
        fontSize={12}
        fontWeight="600"
      >
        Achromat
      </text>
      <text x={(30 + 295) / 2} y={TOP + 27} textAnchor="middle" fill={c.muted} fontFamily={FONT} fontSize={9.5}>
        2-wavelength correction (C, F)
      </text>

      <text
        x={(345 + 610) / 2}
        y={TOP + 14}
        textAnchor="middle"
        fill={c.label}
        fontFamily={FONT}
        fontSize={12}
        fontWeight="600"
      >
        Apochromat
      </text>
      <text x={(345 + 610) / 2} y={TOP + 27} textAnchor="middle" fill={c.muted} fontFamily={FONT} fontSize={9.5}>
        3-wavelength correction (C, d, F)
      </text>

      {/* ── Wavelength color legend ───────────────────────────────── */}
      {waveLines.map(({ col, label, nm }, i) => (
        <g key={label}>
          <circle cx={358} cy={BOT + 30 + i * 12} r={3} fill={col} />
          <text x={364} y={BOT + 34 + i * 12} fill={col} fontFamily={FONT} fontSize={9}>
            {label}-line ({nm} nm)
          </text>
        </g>
      ))}

      {/* Arrow markers for secondary spectrum annotation */}
      <defs>
        <marker id="lca-arr-r" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill={c.annotArrow} />
        </marker>
        <marker id="lca-arr-l" markerWidth="5" markerHeight="5" refX="1" refY="2.5" orient="auto-start-reverse">
          <path d="M0,0 L5,2.5 L0,5 Z" fill={c.annotArrow} />
        </marker>
      </defs>
    </svg>
  );
}
