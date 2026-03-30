/**
 * DistortionTab — Analysis drawer tab content for the distortion curve.
 *
 * Memoizes the distortion computation from current slider state and
 * renders the DistortionChart SVG component.
 */

import { useMemo } from "react";
import { computeDistortionCurve, computeDistortionFieldGrid } from "../../optics/distortionAnalysis.js";
import { eflAtZoom } from "../../optics/optics.js";
import DistortionChart from "./DistortionChart.js";
import DistortionFieldGrid from "./DistortionFieldGrid.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";

interface DistortionTabProps {
  L: RuntimeLens;
  t: Theme;
  zPos: number[];
  focusT: number;
  zoomT: number;
  dynamicEFL: number;
  currentPhysStopSD: number;
}

export default function DistortionTab({
  L,
  t,
  zPos,
  focusT,
  zoomT,
  dynamicEFL,
  currentPhysStopSD,
}: DistortionTabProps) {
  const samples = useMemo(
    () => computeDistortionCurve(L, zPos, focusT, zoomT, dynamicEFL, currentPhysStopSD),
    [L, zPos, focusT, zoomT, dynamicEFL, currentPhysStopSD],
  );
  const fieldGrid = useMemo(
    () => computeDistortionFieldGrid(L, zPos, focusT, zoomT, currentPhysStopSD),
    [L, zPos, focusT, zoomT, currentPhysStopSD],
  );

  if (samples.length < 2) {
    return (
      <div style={{ color: t.muted, fontSize: 10, padding: "8px 0", transition: "color 0.3s" }}>
        Unable to compute distortion curve for this lens state.
      </div>
    );
  }

  const edgeSample = samples[samples.length - 1];
  const directionLabel =
    edgeSample.distortionPercent > 0.01 ? "barrel" : edgeSample.distortionPercent < -0.01 ? "pincushion" : "negligible";
  const infinityEFL = L.isZoom ? eflAtZoom(zoomT, L) : L.EFL;
  const breathingPercent = Math.abs(infinityEFL) > 1e-9 ? (100 * (dynamicEFL - infinityEFL)) / infinityEFL : 0;
  const breathingLabel =
    Math.abs(breathingPercent) < 0.05 ? "negligible" : breathingPercent < 0 ? "narrower FOV" : "wider FOV";

  return (
    <div>
      <div style={{ marginBottom: 8, display: "grid", gap: 4 }}>
        <span style={{ fontSize: 10.5, color: t.muted, transition: "color 0.3s" }}>
          Rectilinear distortion (F-Tan(theta))
        </span>
        <span style={{ fontSize: 9, color: t.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
          Computed against a near-axis rectilinear reference at fixed image height. The curve stays 1D, while the field
          grid below now traces real chief-ray image positions across the current image circle against that same
          rectilinear reference. Focus breathing is reported separately from distortion.
        </span>
      </div>
      <DistortionChart samples={samples} t={t} />
      <div style={{ marginTop: 12, display: "grid", gap: 4 }}>
        <span style={{ fontSize: 9, color: t.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
          Traced field grid
        </span>
        <DistortionFieldGrid grid={fieldGrid} t={t} />
        <span style={{ fontSize: 8.5, color: t.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
          Dashed lines show the ideal rectilinear field grid clipped to the current image circle. Solid lines show the
          traced chief-ray image positions for those same 2D field samples, so this view is now a real field trace
          rather than a radial approximation.
        </span>
      </div>
      <div
        style={{
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
          fontSize: 9.5,
          marginTop: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>EDGE</span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: t.value,
              fontVariantNumeric: "tabular-nums",
              transition: "color 0.3s",
            }}
          >
            {edgeSample.distortionPercent >= 0 ? "+" : ""}
            {edgeSample.distortionPercent.toFixed(2)}%
          </span>
          <span style={{ fontSize: 9, color: t.muted, transition: "color 0.3s" }}>({directionLabel})</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>HEIGHT</span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: t.value,
              fontVariantNumeric: "tabular-nums",
              transition: "color 0.3s",
            }}
          >
            {Math.abs(edgeSample.imageHeight).toFixed(1)} mm
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>ANGLE</span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: t.value,
              fontVariantNumeric: "tabular-nums",
              transition: "color 0.3s",
            }}
          >
            {edgeSample.fieldAngleDeg.toFixed(1)}°
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
            BREATHING
          </span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: t.value,
              fontVariantNumeric: "tabular-nums",
              transition: "color 0.3s",
            }}
          >
            {breathingPercent >= 0 ? "+" : ""}
            {breathingPercent.toFixed(1)}%
          </span>
          <span style={{ fontSize: 9, color: t.muted, transition: "color 0.3s" }}>({breathingLabel})</span>
        </div>
      </div>
    </div>
  );
}
