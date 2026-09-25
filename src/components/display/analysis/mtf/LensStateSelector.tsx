/** Source-backed geometry selection, separate from the MTF evaluation plane. */
import { useId } from "react";
import type { LensSourceState, RuntimeLens } from "../../../../types/optics.js";
import type { PreparedOpticalState } from "../../../../optics/types.js";
import type { Theme } from "../../../../types/theme.js";
import { lensSourceStates, resolveLensSourceState } from "../../../../optics/sourceStates.js";
import { selector } from "../../../../utils/style/styles.js";

interface LensStateSelectorProps {
  L: RuntimeLens;
  state: PreparedOpticalState;
  t: Theme;
  onSelect?: (lensKey: string, sourceState: LensSourceState) => void;
}

export default function LensStateSelector({ L, state, t, onSelect }: LensStateSelectorProps) {
  const id = useId();
  const states = lensSourceStates(L.data);
  const current = resolveLensSourceState(L.data, state.focusT, state.zoomT, state.aberrationT);
  const interpolatedInfinity =
    !current &&
    state.focusT === 0 &&
    state.aberrationT === 0 &&
    L.isZoom &&
    Math.abs(
      state.zoomT * ((L.zoomPositions?.length ?? 1) - 1) -
        Math.round(state.zoomT * ((L.zoomPositions?.length ?? 1) - 1)),
    ) > 1e-8;
  const stations = [...new Set(states.map((s) => s.zoomT))].sort((a, b) => a - b);
  const option = (s: LensSourceState) => (
    <option key={s.id} value={s.id}>
      {s.label}
      {s.conjugate.kind === "finite" && s.conjugate.magnification !== undefined
        ? ` · ${Math.abs(s.conjugate.magnification)}×`
        : ""}
      {s.conjugate.kind === "finite" && s.conjugate.distanceProvenance === "calculated" ? " · calculated distance" : ""}
    </option>
  );
  return (
    <div style={{ margin: "10px 0", color: t.desc }}>
      <label htmlFor={id} style={{ display: "block", marginBottom: 4 }}>
        Lens state
      </label>
      <select
        id={id}
        aria-describedby={`${id}-details`}
        value={current?.id ?? ""}
        disabled={!states.length || !onSelect}
        style={{ ...selector(t, false), maxWidth: "100%", fontSize: 12 }}
        onChange={(event) => {
          const selected = states.find((s) => s.id === event.target.value);
          if (selected) onSelect?.(L.data.key, selected);
        }}
      >
        <option value="" disabled>
          {states.length ? "Current position · unverified" : "No verified source states"}
        </option>
        {L.isZoom
          ? stations.map((zoomT) => {
              const index = Math.round(zoomT * ((L.zoomPositions?.length ?? 1) - 1));
              const label = L.zoomLabels?.[index] ?? `${L.zoomPositions?.[index]} mm`;
              return (
                <optgroup key={zoomT} label={label}>
                  {states.filter((s) => s.zoomT === zoomT).map(option)}
                </optgroup>
              );
            })
          : states.map(option)}
      </select>
      <div id={`${id}-details`} style={{ fontSize: 11, lineHeight: 1.5, marginTop: 4 }}>
        {!states.length ? (
          <p>
            {interpolatedInfinity ? "Interpolated infinity geometry. " : ""}No source configurations have been verified
            for this prescription.
          </p>
        ) : !current ? (
          <p>
            {interpolatedInfinity
              ? "Interpolated infinity geometry; not a verified source state."
              : "This position does not match a verified source state."}{" "}
            Select a state to apply its exact lens positions.
          </p>
        ) : (
          <>
            <p style={{ margin: "4px 0" }}>
              {current.conjugate.kind === "infinity" ? (
                "Object at infinity."
              ) : (
                <>
                  {current.conjugate.distanceProvenance === "calculated" ? "Calculated" : "Published"} object distance:{" "}
                  {current.conjugate.objectDistanceMm.toLocaleString("en-US", { maximumFractionDigits: 4 })} mm from{" "}
                  {current.conjugate.distanceReference === "image-plane" ? "the image plane" : "the first surface"}.
                </>
              )}
            </p>
            <details>
              <summary style={{ cursor: "pointer" }}>Source details</summary>
              <p>{current.source}</p>
              {current.conjugate.kind === "finite" && current.conjugate.derivation ? (
                <p>{current.conjugate.derivation}</p>
              ) : null}
            </details>
          </>
        )}
        {states.length > 0 && !onSelect ? <p>State selection is unavailable in this view.</p> : null}
      </div>
    </div>
  );
}
