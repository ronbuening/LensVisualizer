/**
 * ElementAnnotations — Element number labels, Abbe νd badges, group labels,
 * and doublet labels rendered in the SVG diagram.
 */
import type { RuntimeLens, ElementShape } from "../types/optics.js";
import type { Theme } from "../types/theme.js";

interface ElementAnnotationsProps {
  L: RuntimeLens;
  t: Theme;
  shapes: ElementShape[];
  sx: (z: number) => number;
  sy: (y: number) => number;
  zPos: number[];
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
  act,
  showChromatic,
}: ElementAnnotationsProps) {
  return (
    <>
      {/* Element number labels */}
      {shapes.map(({ eid, z1, z2 }) => {
        const e = L.elements.find((x) => x.id === eid)!;
        const on = act === eid;
        return (
          <text
            key={`n${eid}`}
            x={sx((z1 + z2) / 2)}
            y={sy(L.lyElemNum)}
            textAnchor="middle"
            fill={on ? t.elemNumActive : t.elemNum(e)}
            fontSize={7}
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
          return (
            <text
              key={`vd${eid}`}
              x={sx((z1 + z2) / 2)}
              y={sy(L.lyVdBadge)}
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
      {L.groups.map(({ text, fromSurface, toSurface }) => (
        <text
          key={text}
          x={sx((zPos[fromSurface] + zPos[toSurface]) / 2)}
          y={sy(L.lyGroup)}
          fill={t.groupLabel}
          fontSize={7}
          fontFamily="inherit"
          textAnchor="middle"
          style={{ letterSpacing: "0.08em" }}
        >
          {text}
        </text>
      ))}

      {/* Doublet labels */}
      {L.doublets.map(({ text, fromSurface, toSurface }) => (
        <text
          key={text}
          x={sx((zPos[fromSurface] + zPos[toSurface]) / 2)}
          y={sy(L.lyDoublet)}
          textAnchor="middle"
          fill={t.doubletLabel}
          fontSize={7}
          fontFamily="inherit"
        >
          {text}
        </text>
      ))}
    </>
  );
}
