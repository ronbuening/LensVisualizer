/**
 * ImageSectionBadge — upper-left SVG chip, below the Petzval badge, for a cylindrical image surface.
 *
 * The lens is rotationally symmetric, so the drawn section and every 1-D field analysis can follow any direction across
 * the frame; the chip picks the long edge, the short edge or the corner.
 */
import { memo } from "react";
import { IMAGE_SURFACE_SECTIONS } from "../../types/imageSurfaceSection.js";
import type { ImageSurfaceSection } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";

/** The viewed section of a cylindrical image surface and the handler that changes it. */
export interface ImageSectionControl {
  section: ImageSurfaceSection;
  select: (section: ImageSurfaceSection) => void;
}

interface ImageSectionBadgeProps {
  t: Theme;
  section: ImageSurfaceSection;
  onSelect: (section: ImageSurfaceSection) => void;
}

const LABELS: Record<ImageSurfaceSection, string> = { long: "Long", short: "Short", corner: "Corner" };
const ARIA: Record<ImageSurfaceSection, string> = {
  long: "View the image along the frame's long edge",
  short: "View the image along the frame's short edge",
  corner: "View the image toward the frame corner",
};

const ImageSectionBadge = memo(function ImageSectionBadge({ t, section, onSelect }: ImageSectionBadgeProps) {
  const x = 8;
  const y = 66;
  const w = 94;
  const h = 36;
  const cell = (w - 8) / IMAGE_SURFACE_SECTIONS.length;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={4} fill={t.panelBg} stroke={t.panelBorder} strokeWidth={0.6} />
      <text x={x + w / 2} y={y + 12} textAnchor="middle" fill={t.muted} fontSize={7.5} fontFamily="inherit">
        CYLINDRICAL IMAGE
      </text>
      {IMAGE_SURFACE_SECTIONS.map((option, index) => {
        const active = option === section;
        const cx = x + 4 + cell * index;
        return (
          <g
            key={option}
            onClick={() => onSelect(option)}
            role="button"
            aria-label={ARIA[option]}
            aria-pressed={active}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect(option);
              }
            }}
            style={{ cursor: "pointer" }}
          >
            <rect
              x={cx}
              y={y + 17}
              width={cell - 2}
              height={14}
              rx={3}
              fill={active ? t.panelBorder : "transparent"}
              stroke={t.panelBorder}
              strokeWidth={0.5}
            />
            <text
              x={cx + (cell - 2) / 2}
              y={y + 27}
              textAnchor="middle"
              fill={active ? t.value : t.muted}
              fontSize={7.5}
              fontFamily="inherit"
            >
              {LABELS[option]}
            </text>
          </g>
        );
      })}
    </g>
  );
});

export default ImageSectionBadge;
