/**
 * AberrationsPanel — Analysis drawer tab content displaying computed aberration
 * metrics for the current lens state.
 *
 * Shows best-focus spherical-aberration spread plus separate field-curvature
 * and astigmatism sections, each on its own scale.
 */

import { useEffect, useMemo, useState } from "react";
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
import PerspectiveFieldCurves from "./perspective/PerspectiveFieldCurves.js";

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
  const perspectiveFieldResult = useMemo(
    () => (analysisContext?.movementActive ? analysisContext.computePerspectiveFieldAberrations() : null),
    [analysisContext],
  );

  const [saChartExpanded, setSaChartExpanded] = useState(expanded);
  const [fieldCurvatureExpanded, setFieldCurvatureExpanded] = useState(true);
  const [astigmatismExpanded, setAstigmatismExpanded] = useState(true);

  useEffect(() => {
    setSaChartExpanded(expanded);
  }, [expanded]);

  return (
    <div style={{ padding: "8px 0" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 9.5 }}>
        {analysisContext?.movementActive ? (
          <div
            style={{
              padding: "7px 9px",
              border: `1px solid ${t.panelDivider}`,
              borderRadius: 5,
              background: t.panelBg,
              display: "grid",
              gap: 4,
            }}
          >
            <span style={{ color: t.label, fontSize: 10, fontWeight: 700, letterSpacing: "0.08em" }}>
              Intrinsic Lens-Axis Spherical Aberration (Classical)
            </span>
            <span style={{ color: t.muted, fontSize: 8.5, lineHeight: 1.4 }}>
              This established SA result stays in the lens frame and describes the lens itself. The fixed-sensor field
              result below is recomputed for the active tilt/shift pose.
            </span>
          </div>
        ) : null}
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

        {analysisContext?.movementActive ? (
          perspectiveFieldResult ? (
            <PerspectiveFieldCurves result={perspectiveFieldResult} t={t} />
          ) : (
            <div style={{ color: t.muted, fontSize: 10 }}>Movement-aware field analysis is unavailable.</div>
          )
        ) : L.isFoldedOptics ? (
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
          <CenteredFieldSections
            L={L}
            t={t}
            zPos={zPos}
            focusT={focusT}
            zoomT={zoomT}
            aberrationT={aberrationT}
            currentEPSD={currentEPSD}
            currentPhysStopSD={currentPhysStopSD}
            fieldGeometry={fieldGeometry}
            preparedState={preparedState}
            analysisContext={analysisContext}
            fieldCurvatureExpanded={fieldCurvatureExpanded}
            onFieldCurvatureToggle={() => setFieldCurvatureExpanded((value) => !value)}
            astigmatismExpanded={astigmatismExpanded}
            onAstigmatismToggle={() => setAstigmatismExpanded((value) => !value)}
          />
        )}
      </div>
    </div>
  );
}

interface CenteredFieldSectionsProps extends Pick<
  AberrationsPanelProps,
  | "L"
  | "t"
  | "zPos"
  | "focusT"
  | "zoomT"
  | "aberrationT"
  | "currentEPSD"
  | "currentPhysStopSD"
  | "fieldGeometry"
  | "preparedState"
  | "analysisContext"
> {
  fieldCurvatureExpanded: boolean;
  onFieldCurvatureToggle: () => void;
  astigmatismExpanded: boolean;
  onAstigmatismToggle: () => void;
}

function CenteredFieldSections({
  L,
  t,
  zPos,
  focusT,
  zoomT,
  aberrationT,
  currentEPSD,
  currentPhysStopSD,
  fieldGeometry,
  preparedState,
  analysisContext,
  fieldCurvatureExpanded,
  onFieldCurvatureToggle,
  astigmatismExpanded,
  onAstigmatismToggle,
}: CenteredFieldSectionsProps) {
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
  const result = chromaticFieldCurvatureResult ?? fieldCurvatureResult;
  return (
    <>
      <FieldCurvatureSection
        result={result}
        expanded={fieldCurvatureExpanded}
        onToggle={onFieldCurvatureToggle}
        theme={t}
      />
      <AstigmatismSection result={result} expanded={astigmatismExpanded} onToggle={onAstigmatismToggle} theme={t} />
    </>
  );
}
