/**
 * AberrationsPanel — Analysis drawer tab content displaying computed aberration
 * metrics for the current lens state.
 *
 * Shows best-focus spherical-aberration spread plus separate field-curvature
 * and astigmatism sections, each on its own scale.
 */

import { useEffect, useState } from "react";
import type { RuntimeLens } from "../../../types/optics.js";
import type { Theme } from "../../../types/theme.js";
import type { PreparedOpticalState } from "../../../optics/types.js";
import type { AnalysisComputationContext } from "../../../optics/compat.js";
import type { FieldGeometryState } from "../../../optics/optics.js";
import AstigmatismSection from "./aberrations/AstigmatismSection.js";
import FieldCurvatureSection from "./aberrations/FieldCurvatureSection.js";
import SphericalAberrationSection from "./aberrations/SphericalAberrationSection.js";
import useSphericalAberrationData from "./aberrations/useSphericalAberrationData.js";
import useFieldCurvatureData from "./aberrations/useFieldCurvatureData.js";

interface AberrationsPanelProps {
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
  expanded: boolean;
  onExpandedChange?: (expanded: boolean) => void;
}

export default function AberrationsPanel({
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
  expanded,
  onExpandedChange,
}: AberrationsPanelProps) {
  const { saResult, saProfile, saBlurCharacter } = useSphericalAberrationData({
    L,
    zPos,
    focusT,
    zoomT,
    aberrationT,
    currentEPSD,
    currentPhysStopSD,
    preparedState,
    analysisContext,
  });
  const { fieldCurvatureResult, chromaticFieldCurvatureResult } = useFieldCurvatureData({
    L,
    zPos,
    focusT,
    zoomT,
    aberrationT,
    currentEPSD,
    currentPhysStopSD,
    fieldGeometry,
    preparedState,
    analysisContext,
  });

  const [saChartExpanded, setSaChartExpanded] = useState(expanded);
  const [fieldCurvatureExpanded, setFieldCurvatureExpanded] = useState(true);
  const [astigmatismExpanded, setAstigmatismExpanded] = useState(true);

  useEffect(() => {
    setSaChartExpanded(expanded);
  }, [expanded]);

  return (
    <div style={{ padding: "8px 0" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 9.5 }}>
        <SphericalAberrationSection
          result={saResult}
          profile={saProfile}
          blurCharacter={saBlurCharacter}
          expanded={saChartExpanded}
          onToggle={() => {
            const next = !saChartExpanded;
            setSaChartExpanded(next);
            onExpandedChange?.(next);
          }}
          theme={t}
        />

        {L.isFoldedOptics ? (
          <div
            style={{
              padding: "8px 10px",
              border: `1px solid ${t.panelDivider}`,
              borderRadius: 6,
              color: t.desc,
              background: t.panelBg,
              lineHeight: 1.5,
            }}
          >
            Field curvature and astigmatism remain hidden for folded mirror systems because those sections still assume
            a sequential paraxial field model.
          </div>
        ) : (
          <>
            <FieldCurvatureSection
              result={chromaticFieldCurvatureResult ?? fieldCurvatureResult}
              expanded={fieldCurvatureExpanded}
              onToggle={() => setFieldCurvatureExpanded((value) => !value)}
              theme={t}
            />

            <AstigmatismSection
              result={chromaticFieldCurvatureResult ?? fieldCurvatureResult}
              expanded={astigmatismExpanded}
              onToggle={() => setAstigmatismExpanded((value) => !value)}
              theme={t}
            />
          </>
        )}
      </div>
    </div>
  );
}
