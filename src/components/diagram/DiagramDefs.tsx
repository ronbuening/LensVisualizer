/**
 * DiagramDefs — reusable SVG defs for DiagramSVG.
 *
 * Keeps the filter/pattern definitions separate from the main SVG composition
 * so the parent component can focus on render-order orchestration.
 */

import { ENABLE_ASPH_DIAMOND_FILL } from "../../utils/featureFlags.js";
import type { Theme } from "../../types/theme.js";

interface DiagramDefsProps {
  dark: boolean;
  filterId: string;
  theme: Theme;
}

export default function DiagramDefs({ dark, filterId, theme: t }: DiagramDefsProps) {
  return (
    <defs>
      {dark ? (
        <filter id={filterId}>
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      ) : (
        <filter id={filterId}>
          <feGaussianBlur stdDeviation="3" result="b" />
          <feFlood floodColor="#1070c0" floodOpacity="0.12" result="c" />
          <feComposite in="c" in2="b" operator="in" result="d" />
          <feMerge>
            <feMergeNode in="d" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      )}
      {ENABLE_ASPH_DIAMOND_FILL && (
        <pattern id={`${filterId}-asph-dm`} width="7" height="7" patternUnits="userSpaceOnUse">
          <polygon points="3.5,1 6,3.5 3.5,6 1,3.5" fill={t.asphDiamondFill} />
        </pattern>
      )}
    </defs>
  );
}
