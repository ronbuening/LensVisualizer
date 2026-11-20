/**
 * Static stand-ins for the ray-mode and color controls a finite-only lens cannot use, shared by the diagram header
 * and the comparison/mobile controls bar so both read the same.
 */
import type { Theme } from "../../types/theme.js";
import { toggleBtn } from "../../utils/style/styles.js";

/** Replaces the FROM ∞ / TRACKS FOCUS toggle: finite-only rays always start at the authored object. */
export function FiniteOnlyRayMode({ t }: { t: Theme }) {
  return (
    <span
      title="A finite-only lens traces from its authored object"
      style={{ ...toggleBtn(t, true, { hasRightBorder: false }), cursor: "default" }}
    >
      FROM OBJECT
    </span>
  );
}

/** Replaces the color toggle: chromatic tracing is not validated for finite-only lenses. */
export function FiniteOnlyColorNote({ t }: { t: Theme }) {
  return (
    <span style={{ color: t.muted, fontSize: 10, alignSelf: "center" }}>
      Color rays unavailable for finite-only lenses
    </span>
  );
}
