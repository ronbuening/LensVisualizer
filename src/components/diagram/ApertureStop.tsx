/**
 * ApertureStop — Renders the aperture stop blades and STO label in the SVG diagram.
 *
 * Drawn as two thick lines (top and bottom) from the physical housing edge
 * inward to the current aperture opening, plus the "STO" label above.
 */
import type { Theme } from "../../types/theme.js";

interface ApertureStopProps {
  sx: (z: number) => number;
  sy: (y: number) => number;
  stopZ: number;
  stopPhysSD: number;
  stopHousingSD: number;
  currentPhysStopSD: number;
  bladeStubFrac: number;
  lyStoPad: number;
  t: Theme;
}

export default function ApertureStop({
  sx,
  sy,
  stopZ,
  stopPhysSD,
  stopHousingSD,
  currentPhysStopSD,
  bladeStubFrac,
  lyStoPad,
  t,
}: ApertureStopProps) {
  const bladeInner = Math.min(currentPhysStopSD, stopPhysSD * (1 - bladeStubFrac));
  return (
    <>
      <line
        x1={sx(stopZ)}
        y1={sy(-stopHousingSD)}
        x2={sx(stopZ)}
        y2={sy(-bladeInner)}
        stroke={t.stop}
        strokeWidth={2.2}
        strokeLinecap="round"
      />
      <line
        x1={sx(stopZ)}
        y1={sy(stopHousingSD)}
        x2={sx(stopZ)}
        y2={sy(bladeInner)}
        stroke={t.stop}
        strokeWidth={2.2}
        strokeLinecap="round"
      />
      <text
        x={sx(stopZ)}
        y={sy(-stopHousingSD - lyStoPad)}
        textAnchor="middle"
        fill={t.stopLabel}
        fontSize={9.5}
        fontFamily="inherit"
        style={{ letterSpacing: "0.1em" }}
      >
        STO
      </text>
    </>
  );
}
