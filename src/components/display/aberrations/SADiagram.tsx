import type { SAProfilePoint } from "../../../optics/aberrationAnalysis.js";
import type { Theme } from "../../../types/theme.js";
import { formatSignedSaUm } from "./format.js";

const VB_W = 280;
const VB_H = 200;
const ML = 44;
const MR = 16;
const MT = 20;
const MB = 36;
const PW = VB_W - ML - MR;
const PH = VB_H - MT - MB;
const MIN_X_RANGE_UM = 5;

function buildPolylinePoints(profile: SAProfilePoint[], xMaxAbsUm: number): string {
  return profile
    .map(({ fraction, transverseSaMm }) => {
      const saUm = transverseSaMm * 1000;
      const px = ML + PW / 2 + (saUm / xMaxAbsUm) * (PW / 2);
      const py = MT + PH * (1 - fraction);
      return `${px.toFixed(1)},${py.toFixed(1)}`;
    })
    .join(" ");
}

export default function SADiagram({ profile, theme }: { profile: SAProfilePoint[]; theme: Theme }) {
  const maxSaUm = Math.max(...profile.map((point) => Math.abs(point.transverseSaMm * 1000)));
  const xMaxAbsUm = Math.max(MIN_X_RANGE_UM, maxSaUm * 1.2);
  const halfTickRaw = xMaxAbsUm / 2;
  const tickUm =
    halfTickRaw >= 50
      ? Math.round(halfTickRaw / 25) * 25
      : halfTickRaw >= 10
        ? Math.round(halfTickRaw / 5) * 5
        : Math.max(1, Math.round(halfTickRaw));
  const centerX = ML + PW / 2;
  const leftTickX = centerX - (tickUm / xMaxAbsUm) * (PW / 2);
  const rightTickX = centerX + (tickUm / xMaxAbsUm) * (PW / 2);
  const yTicks = [
    { frac: 0, label: "0" },
    { frac: 0.5, label: "0.5" },
    { frac: 1, label: "1" },
  ];
  const polylinePoints = buildPolylinePoints(profile, xMaxAbsUm);

  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ display: "block", width: "100%", maxWidth: VB_W, height: "auto" }}>
      <title>
        Real-ray transverse spherical-aberration profile at the common best-focus plane versus pupil zone, referenced to
        the near-axis real ray.
      </title>
      <rect
        x={ML}
        y={MT}
        width={PW}
        height={PH}
        rx={3}
        fill={theme.panelBg}
        stroke={theme.panelBorder}
        strokeWidth={0.75}
      />

      {yTicks.map(({ frac, label }) => {
        const ty = MT + PH * (1 - frac);
        return (
          <g key={label}>
            <line x1={ML - 4} y1={ty} x2={ML} y2={ty} stroke={theme.muted} strokeWidth={0.75} />
            <text x={ML - 7} y={ty + 4} textAnchor="end" fill={theme.muted} fontSize={9} fontFamily="inherit">
              {label}
            </text>
          </g>
        );
      })}

      <text
        textAnchor="middle"
        fill={theme.muted}
        fontSize={9.5}
        fontFamily="inherit"
        transform={`rotate(-90) translate(${-(MT + PH / 2)}, 12)`}
      >
        Pupil zone
      </text>

      <line
        x1={centerX}
        y1={MT}
        x2={centerX}
        y2={MT + PH}
        stroke={theme.axis}
        strokeWidth={0.75}
        strokeDasharray="3,3"
      />
      <polyline points={polylinePoints} fill="none" stroke={theme.value} strokeWidth={2} strokeLinejoin="round" />

      <line x1={ML} y1={MT + PH} x2={ML} y2={MT + PH + 4} stroke={theme.muted} strokeWidth={0.75} />
      <line x1={leftTickX} y1={MT + PH} x2={leftTickX} y2={MT + PH + 4} stroke={theme.muted} strokeWidth={0.75} />
      <line x1={centerX} y1={MT + PH} x2={centerX} y2={MT + PH + 4} stroke={theme.muted} strokeWidth={0.75} />
      <line x1={rightTickX} y1={MT + PH} x2={rightTickX} y2={MT + PH + 4} stroke={theme.muted} strokeWidth={0.75} />
      <line x1={ML + PW} y1={MT + PH} x2={ML + PW} y2={MT + PH + 4} stroke={theme.muted} strokeWidth={0.75} />

      <text x={ML} y={MT + PH + 15} textAnchor="middle" fill={theme.muted} fontSize={9} fontFamily="inherit">
        {formatSignedSaUm(-xMaxAbsUm)}
      </text>
      <text x={leftTickX} y={MT + PH + 15} textAnchor="middle" fill={theme.muted} fontSize={9} fontFamily="inherit">
        {formatSignedSaUm(-tickUm)}
      </text>
      <text x={centerX} y={MT + PH + 15} textAnchor="middle" fill={theme.muted} fontSize={9} fontFamily="inherit">
        0
      </text>
      <text x={rightTickX} y={MT + PH + 15} textAnchor="middle" fill={theme.muted} fontSize={9} fontFamily="inherit">
        {formatSignedSaUm(tickUm)}
      </text>
      <text x={ML + PW} y={MT + PH + 15} textAnchor="middle" fill={theme.muted} fontSize={9} fontFamily="inherit">
        {formatSignedSaUm(xMaxAbsUm)}
      </text>

      <text x={ML + PW / 2} y={VB_H - 4} textAnchor="middle" fill={theme.muted} fontSize={9.5} fontFamily="inherit">
        Real-ray transverse SA at best focus (&micro;m)
      </text>
    </svg>
  );
}
