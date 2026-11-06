/**
 * ImageSectionBadge — upper-left SVG chip, below the Petzval badge, for a cylindrical image surface.
 *
 * The lens is rotationally symmetric, so the drawn section and every 1-D field analysis can follow either direction
 * of the cylinder; the chip names the one shown and switches to the other.
 */
import { memo } from "react";
import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";

interface ImageSectionBadgeProps {
  L: RuntimeLens;
  t: Theme;
  onToggle: () => void;
}

const ImageSectionBadge = memo(function ImageSectionBadge({ L, t, onToggle }: ImageSectionBadgeProps) {
  const curved = L.imageSurface?.cylinderAxis === "x";
  const x = 8;
  const y = 66;
  const w = 94;
  const h = 36;
  return (
    <g
      onClick={onToggle}
      role="button"
      aria-label={curved ? "Show the cylinder's straight section" : "Show the cylinder's curved section"}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      style={{ cursor: "pointer" }}
    >
      <rect x={x} y={y} width={w} height={h} rx={4} fill={t.panelBg} stroke={t.panelBorder} strokeWidth={0.6} />
      <text x={x + w / 2} y={y + 13} textAnchor="middle" fill={t.muted} fontSize={7.5} fontFamily="inherit">
        CYLINDRICAL IMAGE
      </text>
      <text x={x + w / 2} y={y + 27} textAnchor="middle" fill={t.value} fontSize={8.5} fontFamily="inherit">
        {curved ? "Curved section ⇄" : "Straight section ⇄"}
      </text>
    </g>
  );
});

export default ImageSectionBadge;
