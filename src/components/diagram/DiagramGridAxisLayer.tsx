/**
 * DiagramGridAxisLayer — background guide lines for DiagramSVG.
 *
 * Renders the grid and optical axis separately from the interactive content so
 * those passive reference marks stay easy to scan and easy to test.
 */

import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";

interface DiagramGridAxisLayerProps {
  lens: RuntimeLens;
  theme: Theme;
  CX: number;
  effectiveSC: number;
  sy: (y: number) => number;
}

export default function DiagramGridAxisLayer({ lens: L, theme: t, CX, effectiveSC, sy }: DiagramGridAxisLayerProps) {
  return (
    <>
      {Array.from({ length: L.gridCount }, (_, i) => {
        const x = CX - (L.gridCount / 2) * L.gridPitch * effectiveSC + i * L.gridPitch * effectiveSC;
        return x > 0 && x < L.svgW ? (
          <line
            key={i}
            x1={x}
            y1={20}
            x2={x}
            y2={L.svgH - 20}
            stroke={t.grid(i)}
            strokeWidth={t.gridStrokeWidth}
            strokeDasharray={t.gridDash(i)}
          />
        ) : null;
      })}

      <line x1={8} y1={sy(0)} x2={L.svgW - 8} y2={sy(0)} stroke={t.axis} strokeWidth={0.5} strokeDasharray="6,4" />
    </>
  );
}
