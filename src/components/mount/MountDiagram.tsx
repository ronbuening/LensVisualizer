/**
 * Mount diagram React renderer.
 *
 * Consumes the same `MountSvgDoc` the static string serializer uses, so the on-page figure matches
 * the committed SVG exactly. Inline styles only. Color comes from the feature category (a fixed
 * categorical palette, so the parts of a mount are easy to tell apart and the figure is theme-stable),
 * and dash/weight come from the value status. The document carries the accessibility contract
 * (role/aria-labelledby/title/desc) per package Section 9.3.
 */

import type { MountSvgDoc, MountSvgElement } from "../../optics/mount/svgDoc.js";
import { categoryColor } from "../../optics/mount/category.js";
import { strokeForStatus } from "../../optics/mount/style.js";

interface MountDiagramProps {
  doc: MountSvgDoc;
}

function baseStrokeWidth(viewBox: string): number {
  if (viewBox === "unknown") return 0.5;
  const [, , w, h] = viewBox.split(" ").map(Number);
  return Math.max(0.25, Math.min(w, h) * 0.006);
}

function renderElement(el: MountSvgElement, index: number, baseWidth: number) {
  const style = strokeForStatus(el.status);
  const color = categoryColor(el.category);
  const strokeWidth = baseWidth * style.weight;
  const dash = style.dashArray;
  const key = `${el.sortKey}-${index}`;

  if (el.kind === "path") {
    return (
      <path
        key={key}
        d={String(el.attrs.d)}
        fill={el.fill ? color : "none"}
        fillOpacity={el.fill ? 0.12 : undefined}
        fillRule={el.fillEvenOdd ? "evenodd" : undefined}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={dash}
      />
    );
  }
  if (el.kind === "circle") {
    return (
      <circle
        key={key}
        cx={Number(el.attrs.cx)}
        cy={Number(el.attrs.cy)}
        r={Number(el.attrs.r)}
        fill={el.fill ? color : "none"}
        fillOpacity={el.fill ? 0.12 : undefined}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={dash}
      />
    );
  }
  if (el.kind === "line") {
    return (
      <line
        key={key}
        x1={Number(el.attrs.x1)}
        y1={Number(el.attrs.y1)}
        x2={Number(el.attrs.x2)}
        y2={Number(el.attrs.y2)}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={dash}
      />
    );
  }
  return (
    <text
      key={key}
      x={Number(el.attrs.x)}
      y={Number(el.attrs.y)}
      fontSize={Number(el.attrs["font-size"])}
      textAnchor={(el.attrs["text-anchor"] as "start" | "middle" | "end" | undefined) ?? "start"}
      fill={color}
      style={{ fontFamily: "inherit" }}
    >
      {el.text}
    </text>
  );
}

export default function MountDiagram({ doc }: MountDiagramProps) {
  const viewBox = doc.viewBox === "unknown" ? "0 0 100 100" : doc.viewBox;
  const baseWidth = baseStrokeWidth(doc.viewBox);
  return (
    <svg
      viewBox={viewBox}
      role="img"
      aria-labelledby={`${doc.titleId} ${doc.descId}`}
      width="100%"
      style={{ display: "block", maxHeight: "320px" }}
    >
      <title id={doc.titleId}>{doc.title}</title>
      <desc id={doc.descId}>{doc.desc}</desc>
      {doc.layers.map((layer) => (
        <g key={layer.name} data-layer={layer.name}>
          {layer.elements.map((el, i) => renderElement(el, i, baseWidth))}
        </g>
      ))}
    </svg>
  );
}
