/**
 * PetzvalOverlayContent — Enlarged Petzval sum visualization.
 *
 * Renders a standalone SVG with the Petzval sum and field radius at a larger
 * scale, plus a short description explaining what the Petzval sum represents.
 * Used inside PanelOverlay.
 */

import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import { formatPetzvalRadius } from "../../optics/optics.js";

interface PetzvalOverlayContentProps {
  L: RuntimeLens;
  t: Theme;
}

const SVG_W = 340;
const SVG_H = 180;

export default function PetzvalOverlayContent({ L, t }: PetzvalOverlayContentProps) {
  const P = L.petzvalSum;
  const sign = P >= 0 ? "+" : "\u2212";
  const pStr = `P = ${sign}${Math.abs(P).toFixed(4)} mm\u207b\u00b9`;
  const rStr = formatPetzvalRadius(P);

  const cx = SVG_W / 2;

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "8px 20px 20px" }}>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 0 }}>
        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          style={{ width: "100%", maxWidth: SVG_W, maxHeight: "100%", display: "block" }}
        >
          <rect
            x={12}
            y={12}
            width={SVG_W - 24}
            height={SVG_H - 24}
            rx={6}
            fill={t.panelBg}
            stroke={t.panelBorder}
            strokeWidth={0.8}
            opacity={0.97}
          />
          <text
            x={cx}
            y={52}
            textAnchor="middle"
            fill={t.muted}
            fontSize={16}
            fontFamily="inherit"
            style={{ letterSpacing: "0.12em" }}
          >
            PETZVAL
          </text>
          <text x={cx} y={100} textAnchor="middle" fill={t.value} fontSize={26} fontFamily="inherit" fontWeight={700}>
            {pStr}
          </text>
          <text x={cx} y={140} textAnchor="middle" fill={t.muted} fontSize={20} fontFamily="inherit">
            {rStr}
          </text>
        </svg>
      </div>
      <p
        style={{
          margin: "12px 0 0",
          fontSize: 13,
          lineHeight: 1.55,
          color: t.value,
          fontFamily: "inherit",
        }}
      >
        The <strong>Petzval sum</strong> P&nbsp;=&nbsp;&Sigma;(n&prime;&minus;n)/(n&prime;&middot;n&middot;R) quantifies
        the inherent field curvature of a lens system. A non-zero Petzval sum means the sharpest focus lies on a curved
        surface rather than a flat image plane. The <strong>Petzval field radius</strong> R&nbsp;=&nbsp;1/P gives the
        radius of that curved focal surface &mdash; a larger magnitude means a flatter field. Well-corrected
        photographic lenses use element combinations that partially cancel the Petzval sum.
      </p>
    </div>
  );
}
