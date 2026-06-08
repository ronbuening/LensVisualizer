/**
 * Mount diagram panel.
 *
 * Presentational wrapper for a mount's camera-side front and lens-side rear views with a base/variant
 * profile selector and a feature-category legend. Pure rendering from the shared `buildMountSvgDoc`
 * core; inline styles only. Feature color is theme-independent (categorical palette); panel chrome is
 * themed.
 */

import { useMemo, useState } from "react";
import type { Theme } from "../../types/theme.js";
import type { MountSpec } from "../../types/mount.js";
import { buildMountSvgDoc, type MountView } from "../../optics/mount/renderMount.js";
import { CATEGORY_LEGEND_ORDER } from "../../optics/mount/category.js";
import type { MountFeatureCategory } from "../../optics/mount/category.js";
import type { MountLegendEntry } from "../../optics/mount/svgDoc.js";
import MountDiagram from "./MountDiagram.js";

interface MountDiagramPanelProps {
  spec: MountSpec;
  theme: Theme;
}

const VIEWS: { view: MountView; label: string }[] = [
  { view: "camera_side_front", label: "Camera-side front" },
  { view: "lens_side_rear", label: "Lens-side rear" },
];

export default function MountDiagramPanel({ spec, theme: t }: MountDiagramPanelProps) {
  const profiles = spec.mvp.profileModel.variantProfiles;
  const [profileId, setProfileId] = useState<string>(spec.mvp.profileModel.selectedMvpProfileId);

  const docs = useMemo(
    () => VIEWS.map((v) => ({ ...v, doc: buildMountSvgDoc(spec, profileId, v.view) })),
    [spec, profileId],
  );

  const legend = useMemo(() => {
    const byCategory = new Map<MountFeatureCategory, MountLegendEntry>();
    for (const d of docs) for (const entry of d.doc.legend) byCategory.set(entry.category, entry);
    return CATEGORY_LEGEND_ORDER.map((category) => byCategory.get(category)).filter(
      (entry): entry is MountLegendEntry => entry !== undefined,
    );
  }, [docs]);

  return (
    <section aria-label={`${spec.displayLabel} mount interface`}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <h2 style={{ fontSize: "1.05rem", fontWeight: 600, margin: "0 0 0.25rem" }}>Mount interface</h2>
        {profiles.length > 1 && (
          <label style={{ fontSize: "0.78rem", color: t.muted }}>
            Profile{" "}
            <select
              value={profileId}
              onChange={(e) => setProfileId(e.target.value)}
              style={{
                fontFamily: "inherit",
                fontSize: "0.78rem",
                color: t.selectorText,
                background: t.selectorBg,
                border: `1px solid ${t.selectorBorder}`,
                borderRadius: "4px",
                padding: "0.15rem 0.35rem",
              }}
            >
              {profiles.map((p) => (
                <option key={p.profileId} value={p.profileId}>
                  {p.profileId}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>
      <p style={{ fontSize: "0.78rem", color: t.muted, margin: "0 0 0.75rem" }}>
        Flange focal distance{" "}
        {typeof spec.coreDimensions.flangeFocalDistanceMm.value === "number"
          ? `${spec.coreDimensions.flangeFocalDistanceMm.value} mm`
          : "unknown"}
        , {spec.mechanism} mount. 0° at 12 o'clock from the camera front; the lens-side view is the horizontal mirror.
        Dotted strokes mark photo-scaled or schematic (not-to-scale) dimensions.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem" }}>
        {docs.map(({ view, label, doc }) => (
          <figure key={view} style={{ margin: 0 }}>
            <div
              style={{
                border: `1px solid ${t.panelBorder}`,
                borderRadius: "6px",
                background: t.panelBg,
                padding: "0.4rem",
              }}
            >
              <MountDiagram doc={doc} />
            </div>
            <figcaption style={{ fontSize: "0.72rem", color: t.label, marginTop: "0.3rem", textAlign: "center" }}>
              {label}
            </figcaption>
          </figure>
        ))}
      </div>

      {legend.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "0.6rem" }}>
          {legend.map((entry) => (
            <span
              key={entry.category}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
                fontSize: "0.7rem",
                color: t.muted,
              }}
            >
              <svg width="22" height="8" aria-hidden="true">
                <line x1="1" y1="4" x2="21" y2="4" stroke={entry.color} strokeWidth="2.4" />
              </svg>
              {entry.label}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
