/** Independent pane controls remain visible when analysis is closed. Aperture stays shared below both panes. */
import SliderControl from "../components/controls/SliderControl.js";
import { formatDist, eflAtZoom } from "../optics/optics.js";
import { getGroupMovementAvailability } from "../optics/groupMovement.js";
import type { RuntimeLens } from "../types/optics.js";
import type { Theme } from "../types/theme.js";
import type { PaneCoordinates } from "./comparisonTypes.js";

interface ComparisonPaneControlsProps {
  L: RuntimeLens;
  t: Theme;
  pane: "a" | "b";
  coordinates: PaneCoordinates;
  onChange: (coordinates: PaneCoordinates) => void;
}

export default function ComparisonPaneControls({ L, t, pane, coordinates, onChange }: ComparisonPaneControlsProps) {
  const { focusT, zoomT } = coordinates;
  const common = { t, compact: true, useSideLayout: false, labelMinWidth: 50 };
  return (
    <div
      role="group"
      aria-label={`Lens ${pane.toUpperCase()} focus and zoom`}
      style={{
        display: "flex",
        flexWrap: "wrap",
        flex: "0 0 auto",
        borderTop: `1px solid ${t.panelDivider}`,
        background: t.panelBg,
      }}
    >
      <SliderControl
        {...common}
        label={`${pane.toUpperCase()} FOCUS`}
        displayValue={formatDist(focusT, L, zoomT)}
        value={focusT}
        step={L.focusStep}
        minLabel="∞"
        maxLabel={formatDist(1, L, zoomT)}
        disabled={!getGroupMovementAvailability(L).focus}
        disabledReason="No focus movement is authored for this prescription."
        onChange={(value) => onChange({ ...coordinates, focusT: value })}
      />
      {L.isZoom ? (
        <SliderControl
          {...common}
          label={`${pane.toUpperCase()} ZOOM`}
          displayValue={`${eflAtZoom(zoomT, L).toFixed(1)} mm`}
          value={zoomT}
          step={L.zoomStep}
          minLabel={`${L.zoomPositions?.[0]} mm`}
          maxLabel={`${L.zoomPositions?.at(-1)} mm`}
          onChange={(value) => onChange({ ...coordinates, zoomT: value })}
        />
      ) : null}
    </div>
  );
}
