/**
 * ComaTab — Analysis drawer tab content for coma aberration analysis.
 *
 * Shows a 2×2 coma point-cloud preview across the field, plus detailed
 * meridional and sagittal coma fan plots with numeric readouts.
 */

import { useState } from "react";
import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import ComaPreviewSection from "./aberrations/ComaPreviewSection.js";
import MeridionalComaSection from "./aberrations/MeridionalComaSection.js";
import SagittalComaSection from "./aberrations/SagittalComaSection.js";
import useAberrationsPanelData from "./aberrations/useAberrationsPanelData.js";

interface ComaTabProps {
  L: RuntimeLens;
  t: Theme;
  zPos: number[];
  focusT: number;
  zoomT: number;
  currentEPSD: number;
  currentPhysStopSD: number;
}

export default function ComaTab({ L, t, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD }: ComaTabProps) {
  const { comaResult, sagittalComaResult, comaPreviewResult } = useAberrationsPanelData({
    L,
    zPos,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
  });

  const [comaPreviewExpanded, setComaPreviewExpanded] = useState(true);
  const [comaExpanded, setComaExpanded] = useState(true);
  const [sagittalComaExpanded, setSagittalComaExpanded] = useState(true);

  return (
    <div style={{ padding: "8px 0" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 9.5 }}>
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
