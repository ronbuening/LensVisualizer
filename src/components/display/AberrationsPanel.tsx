/**
 * AberrationsPanel — Analysis drawer tab content displaying computed aberration
 * metrics for the current lens state.
 *
 * Shows best-focus spherical-aberration spread as a profile chart plus a
 * numeric readout, with meridional coma in a separate collapsible section.
 */

import { useEffect, useState } from "react";
import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import ComaPreviewSection from "./aberrations/ComaPreviewSection.js";
import FieldCurvatureSection from "./aberrations/FieldCurvatureSection.js";
import MeridionalComaSection from "./aberrations/MeridionalComaSection.js";
import SagittalComaSection from "./aberrations/SagittalComaSection.js";
import SphericalAberrationSection from "./aberrations/SphericalAberrationSection.js";
import useAberrationsPanelData from "./aberrations/useAberrationsPanelData.js";

interface AberrationsPanelProps {
  L: RuntimeLens;
  t: Theme;
  zPos: number[];
  focusT: number;
  zoomT: number;
  currentEPSD: number;
  currentPhysStopSD: number;
  expanded: boolean;
  onExpandedChange?: (expanded: boolean) => void;
}

export default function AberrationsPanel({
  L,
  t,
  zPos,
  focusT,
  zoomT,
  currentEPSD,
  currentPhysStopSD,
  expanded,
  onExpandedChange,
}: AberrationsPanelProps) {
  const {
    saResult,
    saProfile,
    comaResult,
    sagittalComaResult,
    comaPreviewResult,
    fieldCurvatureResult,
    chromaticFieldCurvatureResult,
  } = useAberrationsPanelData({
    L,
    zPos,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
  });

  const [saChartExpanded, setSaChartExpanded] = useState(expanded);
  const [comaPreviewExpanded, setComaPreviewExpanded] = useState(true);
  const [comaExpanded, setComaExpanded] = useState(true);
  const [sagittalComaExpanded, setSagittalComaExpanded] = useState(true);
  const [fieldCurvatureExpanded, setFieldCurvatureExpanded] = useState(true);

  useEffect(() => {
    setSaChartExpanded(expanded);
  }, [expanded]);

  return (
    <div style={{ padding: "8px 0" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 9.5 }}>
        <SphericalAberrationSection
          result={saResult}
          profile={saProfile}
          expanded={saChartExpanded}
          onToggle={() => {
            const next = !saChartExpanded;
            setSaChartExpanded(next);
            onExpandedChange?.(next);
          }}
          theme={t}
        />

        <ComaPreviewSection
          result={comaPreviewResult}
          expanded={comaPreviewExpanded}
          onToggle={() => setComaPreviewExpanded((value) => !value)}
          theme={t}
        />

        <MeridionalComaSection
          result={comaResult}
          expanded={comaExpanded}
          onToggle={() => setComaExpanded((value) => !value)}
          theme={t}
        />

        <SagittalComaSection
          result={sagittalComaResult}
          expanded={sagittalComaExpanded}
          onToggle={() => setSagittalComaExpanded((value) => !value)}
          theme={t}
        />

        <FieldCurvatureSection
          result={chromaticFieldCurvatureResult ?? fieldCurvatureResult}
          expanded={fieldCurvatureExpanded}
          onToggle={() => setFieldCurvatureExpanded((value) => !value)}
          theme={t}
        />
      </div>
    </div>
  );
}
