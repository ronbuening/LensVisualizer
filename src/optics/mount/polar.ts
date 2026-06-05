/**
 * Polar SVG geometry primitives for mount front/rear views.
 *
 * Mounts are concentric/annular, unlike the profile-based lens cross-sections elsewhere in the
 * engine, so these helpers are purpose-built. They implement the package convention directly:
 * angle 0° is at 12 o'clock (top dead center) as viewed from the camera front, with clockwise
 * positive. SVG y points down, so a point at radius r, angle θ maps to:
 *
 *   x = cx + r·sin(θ),   y = cy − r·cos(θ)
 *
 * which places θ=0 at top, θ=90 at 3 o'clock, θ=180 at bottom, θ=270 at 9 o'clock — i.e. increasing
 * θ moves clockwise on screen. The lens-rear view is produced by mirroring angles (see mirror.ts)
 * before calling these helpers; the helpers themselves are frame-agnostic.
 *
 * Path builders return finished `d` strings with every coordinate formatted through fmt() for
 * determinism. Angular spans follow the wraparound rule: the drawn sweep is the clockwise arc from
 * `startDeg` to `endDeg`, taken mod 360 (package Section 4.2).
 */

import { fmt, fmtPoint } from "./round.js";

const DEG_TO_RAD = Math.PI / 180;

export interface Point {
  x: number;
  y: number;
}

/**
 * Convert polar (radius, angle) to a Cartesian SVG point in the camera-front frame.
 *
 * @param cx — center x (optical axis), usually 0
 * @param cy — center y (optical axis), usually 0
 * @param radiusMm — radius in mm
 * @param angleDeg — angle in degrees, 0° = top, clockwise positive
 */
export function polarToCartesian(cx: number, cy: number, radiusMm: number, angleDeg: number): Point {
  const rad = angleDeg * DEG_TO_RAD;
  return { x: cx + radiusMm * Math.sin(rad), y: cy - radiusMm * Math.cos(rad) };
}

/** Clockwise sweep from start to end in [0, 360). A full ring is start=0,end=360 (→ 360). */
export function clockwiseSpanDeg(startDeg: number, endDeg: number): number {
  const span = (((endDeg - startDeg) % 360) + 360) % 360;
  // A start===end+360k that was meant as a full ring collapses to 0 here; callers handle full rings
  // via ringPath. For sectors, a 0 span is degenerate (a point) and produces a zero-width wedge.
  return span;
}

/** Full-circle `d` string (two semicircle arcs). */
export function circlePath(cx: number, cy: number, radiusMm: number): string {
  const top = polarToCartesian(cx, cy, radiusMm, 0);
  const bottom = polarToCartesian(cx, cy, radiusMm, 180);
  const r = fmt(radiusMm);
  return `M${fmtPoint(top.x, top.y)} A${r},${r} 0 1 1 ${fmtPoint(bottom.x, bottom.y)} A${r},${r} 0 1 1 ${fmtPoint(
    top.x,
    top.y,
  )} Z`;
}

/**
 * Annulus (ring) `d` string: outer circle plus inner circle. Stroke both walls; fill with the
 * evenodd rule to fill only the ring band.
 */
export function ringPath(cx: number, cy: number, innerRadiusMm: number, outerRadiusMm: number): string {
  if (innerRadiusMm <= 0) return circlePath(cx, cy, outerRadiusMm);
  return `${circlePath(cx, cy, outerRadiusMm)} ${circlePath(cx, cy, innerRadiusMm)}`;
}

/**
 * Annular sector `d` string — the workhorse for bayonet lugs, receiving slots, and partial collars.
 * Drawn as: inner-start → outer-start → clockwise outer arc → outer-end → inner-end →
 * counter-clockwise inner arc → close. The large-arc flag is set when the clockwise span exceeds
 * 180°. When `innerRadiusMm` is 0 the sector becomes a wedge to the center.
 *
 * @param startDeg — sector start angle (clockwise sweep begins here)
 * @param endDeg — sector end angle (clockwise sweep ends here)
 */
export function annularSectorPath(
  cx: number,
  cy: number,
  innerRadiusMm: number,
  outerRadiusMm: number,
  startDeg: number,
  endDeg: number,
): string {
  const span = clockwiseSpanDeg(startDeg, endDeg);
  const largeArc = span > 180 ? 1 : 0;
  const ro = fmt(outerRadiusMm);
  const outerStart = polarToCartesian(cx, cy, outerRadiusMm, startDeg);
  const outerEnd = polarToCartesian(cx, cy, outerRadiusMm, endDeg);

  if (innerRadiusMm <= 0) {
    return `M${fmtPoint(cx, cy)} L${fmtPoint(outerStart.x, outerStart.y)} A${ro},${ro} 0 ${largeArc} 1 ${fmtPoint(
      outerEnd.x,
      outerEnd.y,
    )} Z`;
  }

  const ri = fmt(innerRadiusMm);
  const innerStart = polarToCartesian(cx, cy, innerRadiusMm, startDeg);
  const innerEnd = polarToCartesian(cx, cy, innerRadiusMm, endDeg);
  return (
    `M${fmtPoint(innerStart.x, innerStart.y)} L${fmtPoint(outerStart.x, outerStart.y)} ` +
    `A${ro},${ro} 0 ${largeArc} 1 ${fmtPoint(outerEnd.x, outerEnd.y)} ` +
    `L${fmtPoint(innerEnd.x, innerEnd.y)} ` +
    `A${ri},${ri} 0 ${largeArc} 0 ${fmtPoint(innerStart.x, innerStart.y)} Z`
  );
}

/** Radial line `d` string from innerRadius to outerRadius at a single angle (index marks, ticks). */
export function radialLinePath(
  cx: number,
  cy: number,
  innerRadiusMm: number,
  outerRadiusMm: number,
  angleDeg: number,
): string {
  const a = polarToCartesian(cx, cy, innerRadiusMm, angleDeg);
  const b = polarToCartesian(cx, cy, outerRadiusMm, angleDeg);
  return `M${fmtPoint(a.x, a.y)} L${fmtPoint(b.x, b.y)}`;
}

/**
 * Small filled triangular index marker pointing inward at `angleDeg`, centered at `radiusMm`.
 * `halfWidthDeg` controls the angular half-width of the base; `lengthMm` the radial length.
 */
export function indexTrianglePath(
  cx: number,
  cy: number,
  radiusMm: number,
  angleDeg: number,
  lengthMm: number,
  halfWidthDeg: number,
): string {
  const tip = polarToCartesian(cx, cy, radiusMm - lengthMm, angleDeg);
  const baseA = polarToCartesian(cx, cy, radiusMm, angleDeg - halfWidthDeg);
  const baseB = polarToCartesian(cx, cy, radiusMm, angleDeg + halfWidthDeg);
  return `M${fmtPoint(tip.x, tip.y)} L${fmtPoint(baseA.x, baseA.y)} L${fmtPoint(baseB.x, baseB.y)} Z`;
}
