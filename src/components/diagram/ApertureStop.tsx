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
  pointTransform?: (z: number, y: number) => [number, number];
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
  pointTransform,
  t,
}: ApertureStopProps) {
  const bladeInner = Math.min(currentPhysStopSD, stopPhysSD * (1 - bladeStubFrac));
  const screenPoint = (z: number, y: number): [number, number] => {
    const [zz, yy] = pointTransform ? pointTransform(z, y) : [z, y];
    return [sx(zz), sy(yy)];
  };
  const topHousing = screenPoint(stopZ, -stopHousingSD);
  const topBlade = screenPoint(stopZ, -bladeInner);
  const bottomHousing = screenPoint(stopZ, stopHousingSD);
  const bottomBlade = screenPoint(stopZ, bladeInner);
  const label = screenPoint(stopZ, -stopHousingSD - lyStoPad);

  return (
    <>
      <line
        x1={topHousing[0]}
        y1={topHousing[1]}
        x2={topBlade[0]}
        y2={topBlade[1]}
        stroke={t.stop}
        strokeWidth={2.2}
        strokeLinecap="round"
      />
      <line
        x1={bottomHousing[0]}
        y1={bottomHousing[1]}
        x2={bottomBlade[0]}
        y2={bottomBlade[1]}
        stroke={t.stop}
        strokeWidth={2.2}
        strokeLinecap="round"
      />
      <text
        x={label[0]}
        y={label[1]}
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
