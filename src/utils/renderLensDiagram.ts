/**
 * renderLensDiagram — Pure SVG string renderer for a lens cross-section.
 *
 * Runs the full optical computation pipeline (buildLens → doLayout →
 * coordinate transforms → element shapes → on-axis ray tracing) and
 * emits a self-contained SVG string.  No React dependency.
 *
 * Intended use: verify a new lens.data.ts file visually before committing.
 *
 *   import LENS_DATA from "../lens-data/MyLens.data.ts";
 *   import { renderLensDiagram } from "../utils/renderLensDiagram.js";
 *   const svg = renderLensDiagram(LENS_DATA);
 *   // write svg to a file, or inspect it inline
 *
 * See __tests__/renderLensDiagram.test.ts for a runnable example that also
 * writes the output to /tmp/lens-preview-<key>.svg for browser inspection.
 */

import LENS_DEFAULTS from "../lens-data/defaults.js";
import buildLens from "../optics/buildLens.js";
import { doLayout, traceRay, fopenAtZoom, entrancePupilAtState } from "../optics/optics.js";
import { createCoordinateTransforms, computeElementShapes } from "../optics/diagramGeometry.js";
import { compileRaySegment } from "../components/hooks/raySegmentUtils.js";
import type { LensDataInput, LensData, ElementData } from "../types/optics.js";

export interface RenderLensDiagramOptions {
  /** Focus slider position [0 = infinity focus, 1 = closest focus]. Default: 0 */
  focusT?: number;
  /** Zoom slider position [0 = wide end, 1 = tele end]. Default: 0 */
  zoomT?: number;
  /** Aperture stop-down slider [0 = wide open, 1 = max f-stop]. Default: 0 */
  stopdownT?: number;
  /** Whether to render the on-axis ray fan. Default: true */
  showRays?: boolean;
  /** Whether to render element-number, group, and doublet annotations. Default: true */
  showAnnotations?: boolean;
}

interface RaySegment {
  sp: number[][];
  gp: number[][];
}

/* ── Simple SVG string helpers ──────────────────────────────────────────── */

/** Serialize an attribute map to a string like `key="value" ...` */
function a(attrs: Record<string, string | number>): string {
  return Object.entries(attrs)
    .map(([k, v]) => `${k}="${v}"`)
    .join(" ");
}

const svgLine = (at: Record<string, string | number>): string => `<line ${a(at)}/>`;
const svgPath = (at: Record<string, string | number>): string => `<path ${a(at)}/>`;
const svgPolyline = (at: Record<string, string | number>): string => `<polyline ${a(at)}/>`;
const svgText = (at: Record<string, string | number>, content: string): string => `<text ${a(at)}>${content}</text>`;

/** Format a number for SVG coordinates (1 decimal place). */
const px = (n: number): string => n.toFixed(1);

/* ── Color scheme (light background) ────────────────────────────────────── */

const C = {
  bg: "#ffffff",
  axis: "#aaaaaa",
  gridEven: "#e8e8e8",
  gridOdd: "#d0d0d0",
  rayCool: "#1464d4", // lower half of rays (negative height)
  rayWarm: "#e05820", // upper half of rays (positive height)
  rayGhost: "#888888",
  elemFillLow: "rgba(100,160,220,0.22)",
  elemFillMid: "rgba(80,120,200,0.28)",
  elemFillHigh: "rgba(60,90,180,0.34)",
  elemStroke: "#3060a0",
  asphStroke: "#e08020",
  asphLabel: "#c05000",
  stop: "#c03030",
  stopLabel: "#903030",
  imgLine: "#404040",
  imgLabel: "#606060",
  elemNum: "#304060",
  groupLabel: "#405070",
  doubletLabel: "#506070",
};

/** Element fill color keyed by refractive index — mirrors the theme's nd bands. */
function elemFillColor(e: ElementData): string {
  if (e.nd > 1.78) return C.elemFillHigh;
  if (e.nd > 1.6) return C.elemFillMid;
  return C.elemFillLow;
}

/* ── Ray rendering helper ────────────────────────────────────────────────── */

function renderRaySVG(seg: RaySegment, color: string): string {
  const parts: string[] = [];
  if (seg.sp.length > 1) {
    const pts = seg.sp.map((p) => `${px(p[0])},${px(p[1])}`).join(" ");
    parts.push(svgPolyline({ points: pts, fill: "none", stroke: color, "stroke-width": "1.2" }));
  }
  if (seg.gp.length > 1) {
    const pts = seg.gp.map((p) => `${px(p[0])},${px(p[1])}`).join(" ");
    parts.push(
      svgPolyline({
        points: pts,
        fill: "none",
        stroke: C.rayGhost,
        "stroke-width": "0.6",
        "stroke-dasharray": "3,4",
        opacity: "0.3",
      }),
    );
  }
  return parts.join("\n");
}

/* ── Main renderer ───────────────────────────────────────────────────────── */

/**
 * Generate a self-contained SVG string for a lens cross-section diagram.
 *
 * @param input — Raw lens data as exported from a .data.ts file (before defaults merging).
 *                The `satisfies LensDataInput` type annotation in a .data.ts file means
 *                the default export passes here directly.
 * @param opts  — Optional rendering options (slider positions, feature toggles).
 * @returns     A self-contained SVG string (no external dependencies).
 */
export function renderLensDiagram(input: LensDataInput, opts: RenderLensDiagramOptions = {}): string {
  const { focusT = 0, zoomT = 0, stopdownT = 0, showRays = true, showAnnotations = true } = opts;

  /* ── 1. Merge defaults and build runtime lens ── */
  const lensData: LensData = { ...LENS_DEFAULTS, ...input } as LensData;
  const L = buildLens(lensData);

  /* ── 2. Layout
   * Pin the image plane at the reference position (focusT=0, zoomT=0) so
   * the diagram doesn't shift as the sliders move — matching the app's behavior. */
  const ref = doLayout(0, 0, L);
  const IMG_MM = ref.imgZ;
  const cur = doLayout(focusT, zoomT, L);
  const dz = IMG_MM - cur.imgZ;
  const zPos = cur.z.map((v) => v + dz);

  /* ── 3. Coordinate transforms (optical mm → SVG pixels) ── */
  const { sx, sy, clampedRayEnd, CX, IX, effectiveSC } = createCoordinateTransforms({
    svgW: L.svgW,
    svgH: L.svgH,
    SC: L.SC,
    YSC: L.YSC,
    lensShiftFrac: L.lensShiftFrac,
    imgMM: IMG_MM,
    scaleRatio: null,
  });

  /* ── 4. Element shapes ── */
  const shapes = computeElementShapes(L, zPos, sx, sy);

  /* ── 5. Aperture metrics ── */
  const currentFOPEN = fopenAtZoom(zoomT, L);
  const rawFNumber = L.FOPEN * Math.pow(L.maxFstop / L.FOPEN, stopdownT);
  const fNumber = Math.max(rawFNumber, currentFOPEN);
  const currentPhysStopSD = (L.stopPhysSD * L.FOPEN) / fNumber;
  const baseEPSD = entrancePupilAtState(L.stopPhysSD, focusT, zoomT, L).epSD;
  const currentEPSD = (baseEPSD * L.FOPEN) / fNumber;
  const stopZ = zPos[L.stopIdx];

  /* ── 6. On-axis ray tracing ── */
  const rays: RaySegment[] = showRays
    ? L.rayFractions.map((f) => {
        const h = f * currentEPSD;
        const result = traceRay(h, 0, zPos, focusT, zoomT, currentPhysStopSD, true, L);
        return compileRaySegment(result.pts, result.ghostPts, result.u, result.clipped, sx, sy, clampedRayEnd, IMG_MM);
      })
    : [];

  /* ── 7. Build SVG ── */
  const parts: string[] = [];

  /* Grid lines */
  for (let i = 0; i < L.gridCount; i++) {
    const gx = CX - (L.gridCount / 2) * L.gridPitch * effectiveSC + i * L.gridPitch * effectiveSC;
    if (gx > 0 && gx < L.svgW) {
      parts.push(
        svgLine({
          x1: px(gx),
          y1: 20,
          x2: px(gx),
          y2: L.svgH - 20,
          stroke: i % 2 ? C.gridOdd : C.gridEven,
          "stroke-width": "0.5",
          "stroke-dasharray": i % 2 ? "2,5" : "none",
        }),
      );
    }
  }

  /* Optical axis */
  parts.push(
    svgLine({
      x1: 8,
      y1: px(sy(0)),
      x2: L.svgW - 8,
      y2: px(sy(0)),
      stroke: C.axis,
      "stroke-width": "0.5",
      "stroke-dasharray": "6,4",
    }),
  );

  /* On-axis rays (rendered behind glass so they appear to pass through) */
  if (showRays) {
    rays.forEach((seg, ri) => {
      const color = ri < L.rayHeights.length / 2 ? C.rayCool : C.rayWarm;
      parts.push(renderRaySVG(seg, color));
    });
  }

  /* Element glass paths */
  shapes.forEach(({ eid, d: pathD }) => {
    const e = L.elements.find((x) => x.id === eid)!;
    parts.push(
      svgPath({
        d: pathD,
        fill: elemFillColor(e),
        stroke: C.elemStroke,
        "stroke-width": "1",
      }),
    );
  });

  /* Aspheric accent strokes and "A" labels */
  shapes.forEach(({ asphPaths }) => {
    (asphPaths ?? []).forEach(({ pathD: asphD, labelX, labelY }) => {
      parts.push(
        svgPath({ d: asphD, fill: "none", stroke: C.asphStroke, "stroke-width": "1.2", "stroke-linecap": "round" }),
        svgText(
          {
            x: px(labelX),
            y: px(labelY),
            "text-anchor": "middle",
            fill: C.asphLabel,
            "font-size": 9,
            "font-weight": 500,
          },
          "A",
        ),
      );
    });
  });

  /* Aperture stop blades + label */
  const bladeInner = Math.min(currentPhysStopSD, L.stopPhysSD * (1 - L.bladeStubFrac));
  parts.push(
    svgLine({
      x1: px(sx(stopZ)),
      y1: px(sy(-L.stopHousingSD)),
      x2: px(sx(stopZ)),
      y2: px(sy(-bladeInner)),
      stroke: C.stop,
      "stroke-width": "2.2",
      "stroke-linecap": "round",
    }),
    svgLine({
      x1: px(sx(stopZ)),
      y1: px(sy(L.stopHousingSD)),
      x2: px(sx(stopZ)),
      y2: px(sy(bladeInner)),
      stroke: C.stop,
      "stroke-width": "2.2",
      "stroke-linecap": "round",
    }),
    svgText(
      {
        x: px(sx(stopZ)),
        y: px(sy(-L.stopHousingSD - L.lyStoPad)),
        "text-anchor": "middle",
        fill: C.stopLabel,
        "font-size": 9.5,
        "letter-spacing": "0.1em",
      },
      "STO",
    ),
  );

  /* Image plane + label */
  parts.push(
    svgLine({
      x1: px(IX),
      y1: px(sy(-L.lyImgLine)),
      x2: px(IX),
      y2: px(sy(L.lyImgLine)),
      stroke: C.imgLine,
      "stroke-width": "1.2",
      "stroke-dasharray": "4,3",
    }),
    svgText(
      {
        x: px(IX),
        y: px(sy(L.lyImgLabel)),
        "text-anchor": "middle",
        fill: C.imgLabel,
        "font-size": 9.5,
        "letter-spacing": "0.12em",
      },
      "IMG",
    ),
  );

  /* Annotations: element numbers, group labels, doublet labels */
  if (showAnnotations) {
    shapes.forEach(({ eid, z1, z2 }) => {
      parts.push(
        svgText(
          {
            x: px(sx((z1 + z2) / 2)),
            y: px(sy(L.lyElemNum)),
            "text-anchor": "middle",
            fill: C.elemNum,
            "font-size": 9,
          },
          String(eid),
        ),
      );
    });

    L.groups.forEach(({ text: groupText, fromSurface, toSurface }) => {
      parts.push(
        svgText(
          {
            x: px(sx((zPos[fromSurface] + zPos[toSurface]) / 2)),
            y: px(sy(L.lyGroup)),
            fill: C.groupLabel,
            "font-size": 9,
            "text-anchor": "middle",
            "letter-spacing": "0.08em",
          },
          groupText,
        ),
      );
    });

    L.doublets.forEach(({ text: doubletText, fromSurface, toSurface }) => {
      parts.push(
        svgText(
          {
            x: px(sx((zPos[fromSurface] + zPos[toSurface]) / 2)),
            y: px(sy(L.lyDoublet)),
            "text-anchor": "middle",
            fill: C.doubletLabel,
            "font-size": 9,
          },
          doubletText,
        ),
      );
    });
  }

  /* Assemble final SVG document */
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${L.svgW} ${L.svgH}" width="${L.svgW}" height="${L.svgH}" style="background:${C.bg}">`,
    ...parts,
    `</svg>`,
  ].join("\n");
}
