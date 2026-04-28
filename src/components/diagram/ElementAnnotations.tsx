/**
 * ElementAnnotations — Element number labels, Abbe νd badges, group labels,
 * and doublet labels rendered in the SVG diagram.
 */
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

export default function ElementAnnotations({
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

  return (
    <>
      {/* Element number labels */}
      {shapes.map(({ eid, z1, z2 }) => {
        const e = L.elements.find((x) => x.id === eid)!;
        const on = act === eid;
        const [x, y] = screenPoint((z1 + z2) / 2, L.lyElemNum);
        return (
          <text
            key={`n${eid}`}
            x={x}
            y={y}
            textAnchor="middle"
            fill={on ? t.elemNumActive : t.elemNum(e)}
            fontSize={9}
            fontFamily="inherit"
            fontWeight={on ? 700 : 400}
          >
            {eid}
          </text>
        );
      })}

      {/* Abbe number (νd) badges — color-coded by dispersion class:
       * <35 = high dispersion (flint), 35-55 = normal, >55 = low dispersion (crown/ED) */}
      {showChromatic &&
        shapes.map(({ eid, z1, z2 }) => {
          const e = L.elements.find((x) => x.id === eid);
          if (!e || !e.vd) return null;
          const on = act === eid;
          const dispColor = e.vd < 35 ? t.chromDispHigh : e.vd < 55 ? t.chromDispMid : t.chromDispLow;
          const [x, y] = screenPoint((z1 + z2) / 2, L.lyVdBadge);
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
              {"\u03bd"}
              {e.vd.toFixed(0)}
            </text>
          );
        })}

      {/* Group labels */}
      {L.groups.map(({ text, fromSurface, toSurface }) => {
        const [x, y] = screenPoint((zPos[fromSurface] + zPos[toSurface]) / 2, L.lyGroup);
        return (
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
        );
      })}

      {/* Doublet labels */}
      {L.doublets.map(({ text, fromSurface, toSurface }) => {
        const [x, y] = screenPoint((zPos[fromSurface] + zPos[toSurface]) / 2, L.lyDoublet);
        return (
          <text key={text} x={x} y={y} textAnchor="middle" fill={t.doubletLabel} fontSize={9} fontFamily="inherit">
            {text}
          </text>
        );
      })}
    </>
  );
}
