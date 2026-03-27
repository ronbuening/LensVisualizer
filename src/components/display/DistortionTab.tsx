/**
 * DistortionTab — Analysis drawer tab content for the distortion curve.
 *
 * Memoizes the distortion computation from current slider state and
 * renders the DistortionChart SVG component.
 */

import { useMemo } from "react";
import { computeDistortionCurve } from "../../optics/distortionAnalysis.js";
import DistortionChart from "./DistortionChart.js";
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

  return (
    <div>
      <div style={{ marginBottom: 8 }}>
        <span style={{ fontSize: 10.5, color: t.muted, transition: "color 0.3s" }}>Distortion</span>
      </div>
      <DistortionChart samples={samples} t={t} />
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
          <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>FIELD</span>
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
      </div>
    </div>
  );
}
