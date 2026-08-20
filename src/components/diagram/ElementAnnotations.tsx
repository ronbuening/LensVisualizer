/**
 * ElementAnnotations — Element number labels, Abbe νd badges, group labels,
 * and doublet labels rendered in the SVG diagram.
 */
import { memo } from "react";
import type { RuntimeLens, ElementShape } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";

interface ElementAnnotationsProps {
  L: RuntimeLens;
  t: Theme;
  shapes: ElementShape[];
  sx: (z: number) => number;
  sy: (y: number) => number;
  zPos: number[];
  pointTransform?: (z: number, y: number) => [number, number];
  act: number | null;
  showChromatic: boolean;
}

interface PackableLabel {
  x: number;
  text: string;
  fontSize: number;
}

function packLabelRows<T extends PackableLabel>(items: T[], rowCount = 2): Array<T & { row: number }> {
  const rowRightEdges = Array<number>(rowCount).fill(Number.NEGATIVE_INFINITY);
  return items.map((item) => {
    const estimatedWidth = Math.max(item.fontSize, item.text.length * item.fontSize * 0.62);
    const left = item.x - estimatedWidth / 2;
    let row = rowRightEdges.findIndex((rightEdge) => left >= rightEdge + 2);
    if (row < 0) {
      row = rowRightEdges.reduce(
        (bestRow, rightEdge, candidateRow) => (rightEdge < rowRightEdges[bestRow] ? candidateRow : bestRow),
        0,
      );
    }
    rowRightEdges[row] = item.x + estimatedWidth / 2;
    return { ...item, row };
  });
}

const ElementAnnotations = memo(function ElementAnnotations({
  L,
  t,
  shapes,
  sx,
  sy,
  zPos,
  pointTransform,
  act,
  showChromatic,
}: ElementAnnotationsProps) {
  const screenPoint = (z: number, y: number): [number, number] => {
    const [zz, yy] = pointTransform ? pointTransform(z, y) : [z, y];
    return [sx(zz), sy(yy)];
  };

  const elementLabels = shapes
    .map(({ eid, z1, z2 }) => {
      const element = L.elements.find((candidate) => candidate.id === eid)!;
      const text = element.diagramLabel ?? String(eid);
      const fontSize = text.length >= 4 ? 8 : 9;
      const [x, y] = screenPoint((z1 + z2) / 2, L.lyElemNum);
      return { eid, element, text, fontSize, x, y };
    })
    .sort((a, b) => a.x - b.x);

  // Dense patent groups often place several thin elements next to one another.
  // Pack their source identifiers into three rows so labels such as L210–L213
  // remain legible without colliding.
  const packedElementLabels = packLabelRows(elementLabels, 3).map((item) => ({ ...item, y: item.y - item.row * 11 }));

  const abbeLabels = showChromatic
    ? shapes
        .map(({ eid, z1, z2 }) => {
          const element = L.elements.find((candidate) => candidate.id === eid);
          if (!element?.vd) return null;
          const text = `\u03bd${element.vd.toFixed(0)}`;
          const [x, y] = screenPoint((z1 + z2) / 2, L.lyVdBadge);
          return { eid, vd: element.vd, text, fontSize: 8.5, x, y };
        })
        .filter((item): item is NonNullable<typeof item> => item !== null)
        .sort((a, b) => a.x - b.x)
    : [];
  const packedAbbeLabels = packLabelRows(abbeLabels, 3).map((item) => ({ ...item, y: item.y + item.row * 10 }));
  const lowerAnnotationShift = packedAbbeLabels.reduce((maxShift, { row }) => Math.max(maxShift, row * 10), 0);
  const groupLabels = L.groups
    .map(({ text, fromSurface, toSurface }) => {
      const [x, y] = screenPoint((zPos[fromSurface] + zPos[toSurface]) / 2, L.lyGroup);
      return { text, x, y, fontSize: 9 };
    })
    .sort((a, b) => a.x - b.x);
  const packedGroupLabels = packLabelRows(groupLabels).map((item) => ({
    ...item,
    y: item.y + lowerAnnotationShift + item.row * 11,
  }));
  const doubletLabels = L.doublets
    .map(({ text, fromSurface, toSurface }) => {
      const [x, y] = screenPoint((zPos[fromSurface] + zPos[toSurface]) / 2, L.lyDoublet);
      return { text, fromSurface, toSurface, x, y, fontSize: 9 };
    })
    .sort((a, b) => a.x - b.x);
  const packedDoubletLabels = packLabelRows(doubletLabels).map((item) => ({
    ...item,
    y: item.y - item.row * 11,
  }));

  return (
    <>
      {/* Element identifiers (patent/source label when authored, otherwise runtime number). */}
      {packedElementLabels.map(({ eid, element, text, fontSize, x, y }) => {
        const on = act === eid;
        return (
          <text
            key={`n${eid}`}
            x={x}
            y={y}
            textAnchor="middle"
            fill={on ? t.elemNumActive : t.elemNum(element)}
            fontSize={fontSize}
            fontFamily="inherit"
            fontWeight={on ? 700 : 400}
          >
            {text}
          </text>
        );
      })}

      {/* Authored Abbe-number badges (νd or νe) — color-coded by dispersion class:
       * <35 = high dispersion (flint), 35-55 = normal, >55 = low dispersion (crown). */}
      {showChromatic &&
        packedAbbeLabels.map(({ eid, vd, text, x, y }) => {
          const on = act === eid;
          const dispColor = vd < 35 ? t.chromDispHigh : vd < 55 ? t.chromDispMid : t.chromDispLow;
          return (
            <text
              key={`vd${eid}`}
              x={x}
              y={y}
              textAnchor="middle"
              fill={on ? t.elemNumActive : dispColor}
              fontSize={8.5}
              fontFamily="inherit"
              fontWeight={on ? 600 : 500}
              opacity={on ? 1 : 0.9}
            >
              {text}
            </text>
          );
        })}

      {/* Group labels */}
      {packedGroupLabels.map(({ text, x, y }) => (
        <text
          key={text}
          x={x}
          y={y}
          fill={t.groupLabel}
          fontSize={9}
          fontFamily="inherit"
          textAnchor="middle"
          style={{ letterSpacing: "0.08em" }}
        >
          {text}
        </text>
      ))}

      {/* Doublet labels */}
      {packedDoubletLabels.map(({ text, fromSurface, toSurface, x, y }) => (
        <text
          key={`${text}-${fromSurface}-${toSurface}`}
          x={x}
          y={y}
          textAnchor="middle"
          fill={t.doubletLabel}
          fontSize={9}
          fontFamily="inherit"
        >
          {text}
        </text>
      ))}
    </>
  );
});

export default ElementAnnotations;
