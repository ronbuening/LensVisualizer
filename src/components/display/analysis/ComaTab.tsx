/**
 * ComaTab — Analysis drawer tab content for coma aberration analysis.
 *
 * Shows a 2×2 coma point-cloud preview across the field, plus detailed
 * meridional and sagittal coma fan plots with numeric readouts.
 */

import { useState } from "react";
import type { RuntimeLens } from "../../../types/optics.js";
import type { Theme } from "../../../types/theme.js";
import type { PreparedOpticalState } from "../../../optics/types.js";
import type { AnalysisComputationContext } from "../../../optics/compat.js";
import type { FieldGeometryState } from "../../../optics/optics.js";
import ComaPreviewSection from "./aberrations/ComaPreviewSection.js";
import MeridionalComaSection from "./aberrations/MeridionalComaSection.js";
import SagittalComaSection from "./aberrations/SagittalComaSection.js";
import useComaData from "./aberrations/useComaData.js";

type ComaDetailFieldSelection = "default" | 0.25 | 0.5 | 0.75 | 1;

const COMA_DETAIL_FIELD_OPTIONS: Array<{ value: ComaDetailFieldSelection; label: string }> = [
  { value: "default", label: "Default" },
  { value: 0.25, label: "25%" },
  { value: 0.5, label: "50%" },
  { value: 0.75, label: "75%" },
  { value: 1, label: "100%" },
];

interface ComaTabProps {
  L: RuntimeLens;
  t: Theme;
  zPos: number[];
  focusT: number;
  zoomT: number;
  aberrationT?: number;
  currentEPSD: number;
  currentPhysStopSD: number;
  fieldGeometry?: FieldGeometryState | null;
  preparedState?: PreparedOpticalState | null;
  analysisContext?: AnalysisComputationContext;
}

export default function ComaTab({
  L,
  t,
  zPos,
  focusT,
  zoomT,
  aberrationT = 0,
  currentEPSD,
  currentPhysStopSD,
  fieldGeometry,
  preparedState,
  analysisContext,
}: ComaTabProps) {
  const [detailFieldSelection, setDetailFieldSelection] = useState<ComaDetailFieldSelection>("default");
  const detailFieldFraction = detailFieldSelection === "default" ? undefined : detailFieldSelection;
  const { comaResult, sagittalComaResult, comaPreviewResult } = useComaData({
    L,
    zPos,
    focusT,
    zoomT,
    aberrationT,
    currentEPSD,
    currentPhysStopSD,
    detailFieldFraction,
    fieldGeometry,
    preparedState,
    analysisContext,
  });

  const [comaPreviewExpanded, setComaPreviewExpanded] = useState(true);
  const [comaExpanded, setComaExpanded] = useState(true);
  const [sagittalComaExpanded, setSagittalComaExpanded] = useState(true);
  const defaultFieldLabel = `${Math.round(L.offAxisFieldFrac * 100)}%`;

  return (
    <div style={{ padding: "8px 0" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 9.5 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <span style={{ color: t.muted, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Detailed fan field
          </span>
          <div
            role="group"
            aria-label="Detailed coma fan field"
            style={{
              display: "inline-flex",
              flexWrap: "wrap",
              gap: 4,
              padding: 3,
              border: `1px solid ${t.panelBorder}`,
              borderRadius: 6,
              background: t.panelBg,
            }}
          >
            {COMA_DETAIL_FIELD_OPTIONS.map((option) => {
              const active = detailFieldSelection === option.value;
              return (
                <button
                  key={String(option.value)}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setDetailFieldSelection(option.value)}
                  style={{
                    minWidth: option.value === "default" ? 68 : 44,
                    border: `1px solid ${active ? t.value : "transparent"}`,
                    borderRadius: 4,
                    padding: "4px 7px",
                    background: active ? t.value : "transparent",
                    color: active ? t.panelBg : t.label,
                    fontSize: 9,
                    fontWeight: active ? 700 : 500,
                    cursor: "pointer",
                    fontVariantNumeric: "tabular-nums",
                  }}
                  title={
                    option.value === "default"
                      ? `Use this lens's authored off-axis field (${defaultFieldLabel})`
                      : `Use ${option.label} of the current half-field`
                  }
                >
                  {option.label}
                </button>
              );
            })}
          </div>
          <span style={{ color: t.muted, fontSize: 9, fontVariantNumeric: "tabular-nums" }}>
            default {defaultFieldLabel}
          </span>
        </div>

        <ComaPreviewSection
          result={comaPreviewResult}
          expanded={comaPreviewExpanded}
          onToggle={() => setComaPreviewExpanded((v) => !v)}
          theme={t}
        />

        <MeridionalComaSection
          result={comaResult}
          expanded={comaExpanded}
          onToggle={() => setComaExpanded((v) => !v)}
          theme={t}
        />

        <SagittalComaSection
          result={sagittalComaResult}
          expanded={sagittalComaExpanded}
          onToggle={() => setSagittalComaExpanded((v) => !v)}
          theme={t}
        />
      </div>
    </div>
  );
}
