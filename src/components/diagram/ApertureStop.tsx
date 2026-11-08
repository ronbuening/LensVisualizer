/**
 * ApertureStop — Renders the aperture stop blades and STO label in the SVG diagram.
 *
 * Drawn as two thick lines (top and bottom) from the physical housing edge
 * inward to the current aperture opening, plus the "STO" label above. The label
 * rises clear of a rim land on a face beside the stop when the land would reach it.
 */
import { memo } from "react";
import type { StopSideRimLand } from "../../optics/diagramGeometry.js";
import type { Theme } from "../../types/theme.js";

/** Half the drawn width of the "STO" label in SVG px: three capitals at 9.5 px with 0.1 em tracking. */
const STO_LABEL_HALF_WIDTH = 11;
/** Space kept between the label and a neighbouring rim land, in SVG px. */
const STO_LABEL_CLEARANCE = 4;

interface ApertureStopProps {
  sx: (z: number) => number;
  sy: (y: number) => number;
  stopZ: number;
  stopPhysSD: number;
  stopHousingSD: number;
  currentPhysStopSD: number;
  innerBlockedSD?: number;
  /** Rim-extension lands on the faces beside the stop; see `stopSideRimLands`. */
  sideLands?: readonly StopSideRimLand[];
  bladeStubFrac: number;
  lyStoPad: number;
  pointTransform?: (z: number, y: number) => [number, number];
  t: Theme;
}

const ApertureStop = memo(function ApertureStop({
  sx,
  sy,
  stopZ,
  stopPhysSD,
  stopHousingSD,
  currentPhysStopSD,
  innerBlockedSD,
  sideLands = [],
  bladeStubFrac,
  lyStoPad,
  pointTransform,
  t,
}: ApertureStopProps) {
  const bladeInner = Math.min(currentPhysStopSD, stopPhysSD * (1 - bladeStubFrac));
  const centralBlocked =
    typeof innerBlockedSD === "number" && Number.isFinite(innerBlockedSD) && innerBlockedSD > 0
      ? Math.min(innerBlockedSD, bladeInner)
      : 0;
  const screenPoint = (z: number, y: number): [number, number] => {
    const [zz, yy] = pointTransform ? pointTransform(z, y) : [z, y];
    return [sx(zz), sy(yy)];
  };
  const topHousing = screenPoint(stopZ, -stopHousingSD);
  const topBlade = screenPoint(stopZ, -bladeInner);
  const bottomHousing = screenPoint(stopZ, stopHousingSD);
  const bottomBlade = screenPoint(stopZ, bladeInner);
  const centralTop = screenPoint(stopZ, -centralBlocked);
  const centralBottom = screenPoint(stopZ, centralBlocked);
  const label = screenPoint(stopZ, -stopHousingSD - lyStoPad);
  /* A land whose plane falls under the label and whose top reaches its baseline lifts the label above its corner. */
  const labelY = sideLands.reduce((y, land) => {
    const [landX, landTopY] = screenPoint(land.z, -land.outerSD);
    if (Math.abs(landX - label[0]) >= STO_LABEL_HALF_WIDTH + STO_LABEL_CLEARANCE) return y;
    return Math.min(y, landTopY - STO_LABEL_CLEARANCE);
  }, label[1]);

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
      {centralBlocked > 0 && (
        <line
          x1={centralTop[0]}
          y1={centralTop[1]}
          x2={centralBottom[0]}
          y2={centralBottom[1]}
          stroke={t.stop}
          strokeWidth={2.2}
          strokeLinecap="round"
        />
      )}
      <text
        x={label[0]}
        y={labelY}
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
});

export default ApertureStop;
